import Post from '../../models/post'
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx, next) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400; // Bad request
        return;
    }
    try {
        const post = await Post.findById(id);
        // 포스트가 존재하지 않을 때
        if (!post) {
            ctx.status = 404; // Not Found
            return;
        }
        ctx.state.post =post;
        return next();
    } catch (e) {
        ctx.throw(500,e);
    }
    return next();
};

export const write = async ctx => {
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 검증
        title : Joi.string().required(), // required가 있으면 필수 항목
        body : Joi.string().required(),
        tags : Joi.array()
            .items(Joi.string())
            .required(), // 문자열로 이루어진 배열
    });

    // 검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
        user : ctx.state.user,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

// [ Get ] /api/posts?username=&tag=page=
export const list = async ctx => {
    // qeury는 문자열이기 때문에 숫자로 변환해 주어야 함.
    // 값이 주어지지 않았다면 1을 기본으로 사용함.
    const page = parseInt(ctx.query.page || '1', 10);

    if ( page < 1) {
        ctx.status = 400;
        return;
    }
    const {tag, username} = ctx.query;
    // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음.
    const query = {
        ...(username ? {'user.username' : username} : {}),
        ...(tag ? {tags : tag} : {})
    };

    try {
        const posts = await Post.find(query)
            .sort({ _id : -1 }) // 내림차순으로 정렬
            .limit(10)          // 10개만 표시
            .skip((page-1) * 10) // 건너 뛰기. (단위 : 10)
            .lean()             // 데이터 조회를 처음부터 JSON형태로 조회
            .exec();
        const postCount = await Post.countDocuments(query).exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts.map(post => ({
                ...post,
                body :
                    post.body.length < 200 ? post.body : `${post.body.slice(0,200)}...`,
            }));
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const read = async ctx => {
        ctx.body = ctx.state.post;
};

export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204 ;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const update = async ctx => {
    const { id } = ctx.params;
    // write에서 사용한 schema와 유사, but ! required 없음
    const schema = Joi.object().keys({
        title : Joi.string(),
        body : Joi.string(),
        tags : Joi.array().items(Joi.string())
    });

    // 검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
    try { 
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new : true,
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const checkOwnPost = (ctx, next) => {
    const {user, post} = ctx.state;
    if(post.user._id.toString() !== user._id) {
        ctx.status = 403;
        return;
    }
    return next();
}
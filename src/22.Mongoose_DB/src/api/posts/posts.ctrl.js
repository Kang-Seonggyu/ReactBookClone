import Post from '../../models/post'
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
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
        tags
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const list = async ctx => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const read = async ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
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
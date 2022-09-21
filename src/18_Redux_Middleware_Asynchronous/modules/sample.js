import { handleActions } from "redux-actions";
import * as api from '../lib/api';
import createRequestThunk from "../lib/createRequestThunk";

// Action Type 선언
// 한 요청 당 3개를 만들어야함.

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk function 생성
// thunk func 내부에서는 시작,성공,실패 시 다른 액션을 Dispatch함.

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태 선언
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리.

const initialState = {
    loading : {
        GET_POST :false,
        GET_USERS :false
    },
    post : null,
    users: null
};

const sample = handleActions(
    {
        [GET_POST] : state => ({
            ...state,
            loading : {
                ...state.loading,
                GET_POST : true
            }
        }),
        [GET_POST_SUCCESS] : (state, action) => ({
            ...state,
            loading : {
                ...state.loading,
                GET_POST : false
            },
            post : action.payload
        }),
        [GET_POST_FAILURE] : (state, action) => ({
            ...state,
            loading : {
                ...state.loading,
                GET_POST : false
            }
        }),
        [GET_USERS] : state => ({
            ...state,
            loading : {
                ...state.loading,
                GET_USERS : true
            }
        }),
        [GET_USERS_SUCCESS] : (state, action) => ({
            ...state,
            loading : {
                ...state.loading,
                GET_USERS : false
            },
            users : action.payload
        }),
        [GET_USERS_FAILURE] : (state, action) => ({
            ...state,
            loading : {
                ...state.loading,
                GET_USERS : false
            }
        })
    },
    initialState
);

export default sample
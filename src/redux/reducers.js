import { combineReducers } from "redux";
import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RECEIVE_USER_LIST, RESET_USER } from "./action-types";
import {getRedirectTo} from '../utils/index'
const initUser = {
  username: '',
  type: '',
  msg: '', // 错误提示信息
  redirectTo: '' // 需要自动重定向路由路径
}

const initUserList = []

function user (state = initUser,action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const {type, avatar} = action.data
      return {...action.data, redirectTo:getRedirectTo(type,avatar)}
    case ERROR_MSG:
      return {...state, msg: action.data}
    case RECEIVE_USER:
      return action.data
    case RESET_USER:
      return {...initUser, msg: action.data}
    default:
      return state
  }
}

function userList (state = initUserList,action) {
  switch (action.type) {
    case RECEIVE_USER_LIST:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  user,
  userList
})
// 向外暴露的状态的结构： {user：{}}

import { reqRegister, reqLogin, reqUpdateUser,reqUser, reqUserList} from "../api";
import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RECEIVE_USER_LIST, RESET_USER } from "./action-types";

// 授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误提示信息的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})
// 接收用户
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
// 重置用户
export const resetUser = (msg) => ({type: RESET_USER, data: msg})
// 接收用户列表
export const receiveUserList = (users) => ({type: RECEIVE_USER_LIST, data: users})

export const register = (user) => {
  const {username, password, password2,type} = user
  if (!username || !password) {
    return errorMsg('用户名密码不能为空')
  } else if(password !== password2) {
    return errorMsg('确认密码与密码不一致')
  }
  return async dispatch => {
    const response =  await reqRegister({username,password,type})
    const result = response.data
    if (result.code === 0) {
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

export const login = (user) => {
  const {username, password} = user
  if (!username || !password) {
    return errorMsg('用户名密码不能为空')
  }
  return async dispatch => {
    const response =  await reqLogin(user)
    const result = response.data
    if (result.code === 0) {
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

export const updateUser = (user) => {
  return async dispatch => {
    const response =  await reqUpdateUser(user)
    const result = response.data
    if (result.code === 0) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}
export const getUser = () => {
  return async dispatch => {
    const response =  await reqUser()
    const result = response.data
    if (result.code === 0) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}
export const getUserList = (type) => {
  return async dispatch => {
    const response =  await reqUserList(type)
    const result = response.data
    if (result.code === 0) {
      dispatch(receiveUserList(result.data))
    }
  }
}
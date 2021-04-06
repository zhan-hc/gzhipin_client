import { DECREMENT, INCREMENT } from "./action-types";

// add
export const increment = (number) => ({type: INCREMENT, data: number})

//
export const decrement = (number) => ({type: DECREMENT, data: number})

export const incrementAsync = (number) => {
   return dispatch => {
     // 异步
     setTimeout(() => {
      dispatch(increment(number))
     },1000)
   }
}
import { getUsersFetch, getUsersSuccess } from "./actions";

export function getUsersRequest(){
     return function (dispatch){
        dispatch(getUsersFetch());
        return fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(users => {
               //   fetch('https://jsonplaceholder.typicode.com/profile')
               //   .then(response => response.json())
                 dispatch(getUsersSuccess(users))
              })
     }
}

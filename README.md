```
npm i redux react-redux redux-saga redux-thunk redux-devtools-extension
```


```
There are some problems with thunk when it comes to organisation and readability.

Consecutive api calls can be litle trickier with thunk.

everything is dependent in the way developers right it.

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

it's also difficult to pass params down the tree.
```

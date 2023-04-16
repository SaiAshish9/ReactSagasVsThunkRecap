```
npm i redux react-redux redux-saga redux-thunk redux-devtools-extension

From redux-saga@v1 debounce is built-in effect.
```

https://redux-saga.js.org/docs/recipes/

https://medium.com/a-layman/redux-middleware-the-differences-between-redux-think-and-redux-saga-1e226f5a772a

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

```
We can chain api calls very easily in case of sagas.

Sagas has lot of inbuilt effects which can directly be used.
```

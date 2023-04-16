import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { getUsersRequest } from './thunks';
import { getUsersFetch } from './actions';

function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);

  return (
    <div className="App">
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      <div>Users: {users.map((user) => (<div key={user.name}>{user.name}</div>))}</div>
    </div>
  );
}

export default App;

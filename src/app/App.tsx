import * as React from 'react';
import './App.css';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { UserListContainer } from '../user/components/UserList';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <UserListContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;

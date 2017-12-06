import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { User } from '../models/user';
import { BrowserRouter } from 'react-router-dom';
import { UserList } from './UserList';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const users: User[] = [
    {
      id: '1',
      first_name: 'test',
      last_name: 'test',
      avatar: 'test'
    }
  ];
  ReactDOM.render(
    <BrowserRouter>
      <UserList list={users}/>
    </BrowserRouter>,
    div
  );
});

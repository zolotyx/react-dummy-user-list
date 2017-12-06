import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UserCard } from './UserCard';
import { User } from '../models/user';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const user: User = {
    id: '1',
    first_name: 'test',
    last_name: 'test',
    avatar: 'test'
  };
  ReactDOM.render(
    <BrowserRouter>
      <UserCard user={user}/>
    </BrowserRouter>,
    div
  );
});

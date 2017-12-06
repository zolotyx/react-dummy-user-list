import * as React from 'react';
import { User } from '../models/user';

interface UserCardProps {
  user: User
}

export class UserCard extends React.Component<UserCardProps> {
  render() {
    const user = this.props.user;
    return (<div>
      <div>{user.first_name}</div>
      <div>{user.last_name}</div>
    </div>);
  }
}

import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';
import { Thumbnail } from 'react-bootstrap';

interface UserCardProps {
  user: User;
}

export class UserCard extends React.Component<UserCardProps> {
  render() {
    const user = this.props.user;
    return (
      <Thumbnail src={user.avatar}>
        <Link to={`/user/${user.id}`}><h4>{user.first_name} {user.last_name}</h4></Link>
      </Thumbnail>);
  }
}

import * as React from 'react';
import { User } from '../models/user';
import { Col, Row } from 'react-bootstrap';
import { UserCard } from './UserCard';

interface UserListProps {
  list: User[];
}

export class UserList extends React.Component<UserListProps> {
  render() {
    const list = this.props.list;
    return (
      <Row>
        {list.map((user: User) => (
          <Col key={user.id} xs={6} md={2}>
            <UserCard key={user.id} user={user}/>
          </Col>
        ))}
      </Row>
    );
  }
}
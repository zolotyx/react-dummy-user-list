import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { RequestParams } from '../../utils';
import { User } from '../models/user';
import { fetchUsers } from '../redux/user.actions';
import { selectUsers, usersLoading } from '../redux/user.selector';
import { UserCard } from './UserCard';

interface UserListStateProps {
  list: User[];
  loading: boolean;
}

interface UserListDispatchProps {
  fetchUsers(params?: RequestParams): void;
}

export type UserListProps = UserListStateProps & UserListDispatchProps;

class UserList extends React.Component<UserListProps> {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    const { list, loading } = this.props;
    return (
      <div>
        <div>
          {list.map((user: User) => (
            <UserCard key={user.id} user={user}/>
          ))}
        </div>
        {loading ? (<div>Loading</div>) : null}

      </div>
    );
  }
}

const mapStateToProps = (state: AppState): UserListStateProps => ({
  list: selectUsers(state),
  loading: usersLoading(state)
});

export const UserListContainer = connect<UserListStateProps, UserListDispatchProps, {}>(
  mapStateToProps, { fetchUsers }
)(UserList);

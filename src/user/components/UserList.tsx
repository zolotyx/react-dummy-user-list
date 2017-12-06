import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Grid, Col, Pagination, Alert } from 'react-bootstrap';
import { Loading } from '../../shared/components/Loading';
import { AppState } from '../../store/store';
import { RequestParams, ResponseMeta } from '../../utils';
import { User } from '../models/user';
import { fetchUsers } from '../redux/user.actions';
import {
  selectUsersMeta, selectUsers, usersLoading,
  selectUsersError
} from '../redux/user.selector';
import { UserCard } from './UserCard';

interface UserListStateProps {
  list: User[];
  error: string;
  meta: ResponseMeta;
  loading: boolean;
}

interface UserListDispatchProps {
  fetchUsers: (params?: RequestParams) => void;
}

export type UserListProps = UserListStateProps & UserListDispatchProps;

class UserList extends React.Component<UserListProps> {

  componentWillMount() {
    this.props.fetchUsers();
  }

  paginate(page: number) {

    const { meta } = this.props;
    if (meta.page !== page) {
      this.props.fetchUsers({ page });
    }
  }

  render() {
    const { list, loading, meta, error } = this.props;
    return (
      <Grid>
        <h1>List of Users from <a href="https://reqres.in/">https://reqres.in/</a></h1>
        {error
          ? <Alert bsStyle="danger"><strong>Holy guacamole!</strong> {error}</Alert>
          : null}
        <Row>
          {list.map((user: User) => (
            <Col key={user.id} xs={6} md={2}>
              <UserCard key={user.id} user={user}/>
            </Col>
          ))}
        </Row>
        {loading ? <Loading/> : null}
        <Pagination
          bsSize="medium"
          items={meta.total_pages}
          activePage={meta.page}
          onSelect={(page: any) => this.paginate(page)}
        />
      </Grid>
    );
  }
}

const mapStateToProps = (state: AppState): UserListStateProps => ({
  list: selectUsers(state),
  meta: selectUsersMeta(state),
  error: selectUsersError(state),
  loading: usersLoading(state)
});

export const UserListContainer = connect<UserListStateProps, UserListDispatchProps, {}>(
  mapStateToProps, { fetchUsers }
)(UserList);

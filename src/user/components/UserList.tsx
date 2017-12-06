import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Pagination, Alert } from 'react-bootstrap';
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
  fetchUsers(params?: RequestParams): void;
}

export type UserListProps = UserListStateProps & UserListDispatchProps;

class UserList extends React.Component<UserListProps> {

  componentWillMount() {
    this.props.fetchUsers();
  }

  paginate(page: any) {

    this.props.fetchUsers({ page });
  }

  render() {
    const { list, loading, meta, error } = this.props;
    console.log(meta);
    return (
      <div>
        {error ? <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> {error}
        </Alert> : null}
        <Grid>
          <Row>
            {list.map((user: User) => (
              <Col key={user.id} xs={4} md={2}>
                <UserCard key={user.id} user={user}/>
              </Col>
            ))}
          </Row>
        </Grid>
        <Pagination
          bsSize="medium"
          items={meta.total_pages}
          activePage={meta.page}
          onSelect={(page: any) => this.paginate(page)}
        />
        {loading ? <Loading/> : null}

      </div>
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

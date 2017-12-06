import * as React from 'react';
import { Alert, Media } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { selectedUserDetails, selectUserDetailsError } from '../redux/user.selector';
import { selectUser } from '../redux/user.actions';
import { User } from '../models/user';
import { Loading } from '../../shared/components/Loading';

interface UserDetailsStateProps {
  user: User | null;
  error: string;
}

interface UserDetailsRouterProps {
  match: {
    params: {
      id: string
    }
  };
}

interface UserDetailsDispatchProps {
  selectUser: (id: string) => void;
}

export type UserDetailsProps =
  UserDetailsStateProps
  & UserDetailsDispatchProps
  & UserDetailsRouterProps;

class UserDetailsPage extends React.Component<UserDetailsProps> {
  componentWillMount() {
    const { match } = this.props;
    this.props.selectUser(match.params.id);
  }

  render() {
    const { user, error } = this.props;
    return (
      user ? (
        <Media>
          <Media.Left>
            <img src={user.avatar} alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{user.first_name} {user.last_name}</Media.Heading>
          </Media.Body>
        </Media>
      ) : !error ? <Loading/> : <Alert bsStyle="danger">{error}</Alert>
    );
  }
}

const mapStateToProps = (state: AppState): UserDetailsStateProps => {
  return {
    user: selectedUserDetails(state),
    error: selectUserDetailsError(state)
  };
};

export const UserDetailsPageContainer = connect<UserDetailsStateProps, UserDetailsDispatchProps, {}>(
  mapStateToProps, {
    selectUser
  }
)(UserDetailsPage);

import * as React from 'react';
import { Media } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { selectedUserDetails } from '../redux/user.selector';


interface UserDetailsStateProps {
}

interface UserDetailsRouterProps {
  match: {
    params: {
      id: string
    }
  }
}

interface UserDetailsDispatchProps {
}

export type UserDetailsProps =
  UserDetailsStateProps
  & UserDetailsDispatchProps
  & UserDetailsRouterProps;

class UserDetails extends React.Component<UserDetailsProps> {
  render() {
    return (
      <Media>
        <Media.Left>
          <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Media Heading</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
            sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
            lacinia congue felis in faucibus.</p>
        </Media.Body>
      </Media>
    );
  }
}

const mapStateToProps = (state: AppState): UserDetailsStateProps => {
  return {
    user: selectedUserDetails(state)
  };
};

export const UserDetailsContainer = connect<UserDetailsStateProps, UserDetailsDispatchProps, {}>(
  mapStateToProps, {}
)(UserDetails);


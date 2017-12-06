import * as React from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { UserDetailsContainer } from '../user/components/UserDetails';
import { UserListContainer } from '../user/components/UserList';

export class Main extends React.Component {
  render() {
    return (
      <Grid>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Switch>
          <Route exact={true} path="/" component={UserListContainer}/>
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path="/user/:id" component={UserDetailsContainer}/>
        </Switch>
      </Grid>
    );
  }
}

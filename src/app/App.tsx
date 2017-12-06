import * as React from 'react';

import './App.css';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { Grid, Navbar } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import { UserDetailsPageContainer } from '../user/containers/UserDetailsPage';
import { UserListPageContainer } from '../user/containers/UserListPage';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
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
              <Route exact={true} path="/" component={UserListPageContainer}/>
              <Route path="/user/:id" component={UserDetailsPageContainer}/>
            </Switch>
          </Grid>
        </BrowserRouter>
      </Provider>
    );
  }
}

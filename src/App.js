import React from 'react';
import AdminLogin from './components/Admin/Auth/login'
import AdminHome from './components/Admin/dashboard/home'
import { Switch, Route, Redirect } from 'react-router-dom'
import Categorey from './components/Admin/dashboard/categories';
import PrivateRoute from 'private-route-react';
import adminIsLoggedIn from './components/private/adminIsLoggedIn'
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/admin/login" component={(props) => (
            <AdminLogin {...props}></AdminLogin>
          )} />

          <PrivateRoute path="/admin/Home"
            isAbleToAccessRoute={adminIsLoggedIn}
            redirectPath={'/admin/login'}
            component={(props) => (
              <AdminHome {...props}></AdminHome>
            )} />

          <PrivateRoute path="/admin/category"
            isAbleToAccessRoute={adminIsLoggedIn}
            redirectPath={'/admin/login'}
            component={(props) => (
              <Categorey {...props}></Categorey>
            )} />
        </Switch>
      </React.Fragment>
    )
  }
}
export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Home = () => <h2>Main Page</h2>;

const UsersList = () => {
  return (
    <>
      <h2>Users Layout</h2>
      <Link to="/">Main Page</Link>
      <h2>Users List Page</h2>
      <ul>
        <li>
          <Link to="/users/0/profile">User 0</Link>
        </li>
        <li>
          <Link to="/users/1/profile">User 1</Link>
        </li>
        <li>
          <Link to="/users/2/profile">User 2</Link>
        </li>
        <li>
          <Link to="/users/3/profile">User 3</Link>
        </li>
        <li>
          <Link to="/users/4/profile">User 4</Link>
        </li>
      </ul>
    </>
  );
};

const UserProfile = ({ match }) => {
  const { userId } = match.params;
  return (
    <>
      <h1>UserPage</h1>
      <ul>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>Edit this user</Link>
        </li>
      </ul>
      <h2>UserId: {userId}</h2>
    </>
  );
};

const UserEdit = ({ match }) => {
  const { userId } = match.params;
  return (
    <>
      <h2>User Edit page</h2>
      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>User profile page</Link>
        </li>
        <li>
          <Link
            to={`/users/${userId < 4 ? Number(userId) + 1 : userId}/profile`}
          >
            Another User
          </Link>
        </li>
        <li>
          <Link to="/users">Users List page</Link>
        </li>
      </ul>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <nav>
        <h2>App Layout</h2>
        <Link to="/users">Users List Page</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UsersList} />
        <Route path="/users/:userId/profile" component={UserProfile} />
        <Route path="/users/:userId/edit" component={UserEdit} />
        <Route path="/users/:userId" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default App;

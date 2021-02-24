import React, { useEffect, useState } from "react";
import Users from "./Users";
import Notes from "./Notes";
import Note from "./Note";
import Login from "./Login";
import Home from "./Home";
import VisibilityFilter from "./VisibilityFilter";
import { initializeNotes } from "./reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  const notes = useSelector((state) => {
    if (state.filter === "ALL") {
      return state.notes;
    }
    return state.filter === "IMPORTANT"
      ? state.notes.filter((note) => note.important)
      : state.notes.filter((note) => !note.important);
  });

  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            login
          </Link>
        )}
      </div>
      <Switch>
        <Route path="/notes/:id">
          <Note notes={notes} />
        </Route>
        <Route path="/notes">
          <Notes notes={notes} />
        </Route>
        <Route path="/users">
          {user ? <Users /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login onLogin={login} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div>
        <i>Note app, Department of Computer Science 2020</i>
      </div>
    </Router>
  );
};

export default App;

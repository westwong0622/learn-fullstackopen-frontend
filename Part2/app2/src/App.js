import React, { useState, useEffect, useRef } from "react";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import LoginForm from "./components/LoginForm";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import Footer from "./components/Footer";

import noteService from "./services/notes";
import loginService from "./services/login";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);

  const [showAll, setShowAll] = useState(true);
  const [notes, setNotes] = useState([]);

  const noteFormRef = useRef();

  const getNotesHook = () => {
    console.log("effect");
    noteService.getAll().then((initialNotes) => {
      console.log("promise fulfilled");
      setNotes(initialNotes);
    });
  };
  useEffect(getNotesHook, []);

  const getTokenHook = () => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      const userData = JSON.parse(loggedUserJSON);
      setUser(userData);
      noteService.setToken(userData.token);
    }
    // window.localStorage.clear();
  };
  useEffect(getTokenHook, []);

  const showAllChange = (event) => {
    setShowAll(!showAll);
  };

  const addNote = (noteObject) => {
    if (noteObject.content.trim() !== "") {
      noteService.create(noteObject).then((returnedNote) => {
        console.log(returnedNote);
        setNotes(notes.concat(returnedNote));
        noteFormRef.current.toggleVisibility();
      });
    }
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((n) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => note.id !== id));
      });
  };

  const removeNoteOf = (id) => {
    const note = notes.find((n) => n.id === id);
    console.log(note);

    noteService
      .remove(id)
      .then((returnedNote) => {
        setNotes(notes.filter((n) => n.id !== id));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  const handleLogin = async (event) => {
    console.log("logging in with", username, password);
    event.preventDefault();
    try {
      const userData = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem(
        "loggedNoteAppUser",
        JSON.stringify(userData)
      );

      noteService.setToken(userData.token);
      setUser(userData);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
    // console.log("logging in with", username, password);
  };

  const clickLogout = () => {
    window.localStorage.removeItem("loggedNoteAppUser");
    setUser(null);
  };

  const noteForm = () => (
    <Togglable buttonLabel="Add note" ref={noteFormRef}>
      <NoteForm addNote={addNote} />
    </Togglable>
  );

  const loginForm = () => (
    <Togglable buttonLabel="Show login">
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
    </Togglable>
  );

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <div>
            {user.name} logged-in <button onClick={clickLogout}>Logout</button>
          </div>
          {noteForm()}
        </div>
      )}
      <div>
        <div>
          Show all notes: {showAll.toString()}{" "}
          <button onClick={showAllChange}>Change</button>{" "}
        </div>
        <ul>
          {notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              showAll={showAll}
              toggleImportance={() => toggleImportanceOf(note.id)}
              removeNote={() => removeNoteOf(note.id)}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default App;

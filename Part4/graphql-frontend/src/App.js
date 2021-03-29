import React, { useState } from "react";
import Persons from "./components/Persons.js";
import PersonForm from "./components/PersonForm.js";
import Notify from "./components/Notify.js";
import { gql, useQuery } from "@apollo/client";

const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
    }
  }
`;

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  const result = useQuery(ALL_PERSONS, {
    pollInterval: 2000,
  });

  if (result.loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Notify errorMessage={errorMessage} />
      <Persons persons={result.data.allPersons} />
      <PersonForm setError={notify} />
    </div>
  );
};

export default App;

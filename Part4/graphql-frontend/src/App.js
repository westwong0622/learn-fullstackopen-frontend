import React from "react";
import Persons from "./Persons.js";
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
  const result = useQuery(ALL_PERSONS);

  if (result.loading) {
    return <div>loading...</div>;
  }

  return <Persons persons={result.data.allPersons} />;
};

export default App;

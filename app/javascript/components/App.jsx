import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import MyItems from "./Items";
import { apolloClient } from "../utils/apollo";

const App = () => (
  <ApolloProvider client={apolloClient}>
    <h2>List of Books</h2>
    <MyItems />
  </ApolloProvider>
);

export default App;

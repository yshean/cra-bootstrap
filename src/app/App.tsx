import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Home from "app/Home";

const client = new ApolloClient({
  uri: "https://m3507x64l8.sse.codesandbox.io/",
  resolvers: {}
});

const Apollo: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default Apollo;

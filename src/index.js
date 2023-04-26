import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const client = new ApolloClient({
    uri: "https://petgram-server-edsf8xpy2.now.sh/graphql",
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("app")).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

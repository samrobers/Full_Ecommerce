import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Route exact path="/">
          <Landing />
        </Route>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;

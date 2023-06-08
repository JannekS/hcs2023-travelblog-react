import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import NewPost from "./pages/NewPost";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";

import { Route } from "wouter";

function App() {
  return (
    <>
      <AppHeader />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/new-post">
        <NewPost />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/credits">
        <Credits />
      </Route>

      <AppFooter />
    </>
  );
}

export default App;

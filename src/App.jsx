import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import NewPost from "./pages/NewPost";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";
import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./utils/ScrollToTop";
import useStore from "./stores/store";

import { useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "wouter";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Loading from "./components/Loading";

function App() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [getPosts, isAuthenticated, refreshAuth] = useStore((state) => [
    state.getPosts,
    state.isAuthenticated,
    state.refreshAuth,
  ]);

  useEffect(() => {
    getPosts();
    refreshAuth();
    setInitialLoad(false);
  }, []);

  ScrollToTop();

  return (
    <>
      <AppHeader />
      <main>
        {initialLoad ? (
          <Loading />
        ) : (
          <Router>
            <ScrollToTop />
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/new-post">
                {!isAuthenticated && <Redirect to={"/login"} />}
                <NewPost />
              </Route>
              <Route path="/login">
                {isAuthenticated && <Redirect to={"/profile"} />}
                <Login />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/credits">
                <Credits />
              </Route>
              <Route path="/profile">
                {!isAuthenticated && <Redirect to={"/login"} />}
                <Profile />
              </Route>
              <Route path="/post/:id">
                {(params) => <BlogPost postId={params.id} />}
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        )}
      </main>
      <AppFooter />
    </>
  );
}

export default App;

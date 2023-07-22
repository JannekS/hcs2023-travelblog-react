import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import ScrollToTop from "./utils/ScrollToTop";
import useStore from "./stores/store";
import { Router, Route, Switch, Redirect } from "wouter";

function App() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  ScrollToTop();

  return (
    <>
      <AppHeader />
      <main>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/new-post">
              {isAuthenticated ? <NewPost /> : <Redirect to={"/login"} />}
            </Route>
            <Route path="/edit-post/:id">
              {isAuthenticated ? (
                (params) => <EditPost postId={params.id} />
              ) : (
                <Redirect to={"/login"} />
              )}
            </Route>
            <Route path="/login">
              {isAuthenticated ? <Redirect to={"/profile"} /> : <Login />}
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/profile">
              {isAuthenticated ? <Profile /> : <Redirect to={"/login"} />}
            </Route>
            <Route path="/post/:id">
              {(params) => <BlogPost postId={params.id} />}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </main>
      <AppFooter />
    </>
  );
}

export default App;

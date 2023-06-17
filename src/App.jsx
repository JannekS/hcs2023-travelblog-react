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

import { useEffect } from "react";
import { Router, Route, Switch } from "wouter";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  // const [blogPosts, setBlogPosts] = useState([]);
  const getPosts = useStore((state) => state.getPosts);

  useEffect(() => {
    getPosts();
  }, []);

  ScrollToTop();

  return (
    <>
      <AppHeader />
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
            <NewPost />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
          <Route path="/profile">
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

      <AppFooter />
    </>
  );
}

export default App;

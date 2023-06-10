import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import NewPost from "./pages/NewPost";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./utils/ScrollToTop";

import { useState, useEffect } from "react";
import { Router, Route, Switch } from "wouter";
import NotFound from "./pages/NotFound";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    getPosts("/blogposts.json");
  }, []);

  async function getPosts(url) {
    const res = await fetch(url);
    const blogPostData = await res.json();
    setBlogPosts(blogPostData);
  }

  ScrollToTop();

  return (
    <>
      <AppHeader />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/">
            <Home blogPosts={blogPosts} />
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
          <Route path="/post/:id">
            {(params) => (
              <BlogPost post={blogPosts.find((post) => post.id == params.id)} />
            )}
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

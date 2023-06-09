import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import NewPost from "./pages/NewPost";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";

import { useState, useEffect } from "react";
import { Route } from "wouter";

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

  return (
    <>
      <AppHeader />
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

      <AppFooter />
    </>
  );
}

export default App;

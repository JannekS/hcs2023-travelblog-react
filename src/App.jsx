import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import NewPost from "./pages/NewPost";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./utils/ScrollToTop";
import { createClient } from "@supabase/supabase-js";

import { useState, useEffect } from "react";
import { Router, Route, Switch } from "wouter";
import NotFound from "./pages/NotFound";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const SERVER_KEY = import.meta.env.VITE_SERVER_KEY;

const supabase = createClient(SERVER_URL, SERVER_KEY);

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data, error } = await supabase
      .from("blogposts")
      .select(
        `id,
      title, text, imageUrl, startDate, endDate,
      locations (location, country, lon, lat),
      authors (name, avatarUrl)`
      )
      .order("startDate", { ascending: false });
    setBlogPosts(data);
    if (error) {
      console.log(error);
    }
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

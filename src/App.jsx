import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Nav from "./components/--navigation/Navigation/Nav";
import PostsPage from "./pages/PostsPage";
import SinglePostsPage from "./pages/SinglePostPage";
import EditPost from "./pages/EditPost";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route>
          <Route path="/new1" element={<PostsPage />} />
          <Route path="/new2" element={<SinglePostsPage />} />
          <Route path="/new3" element={<EditPost />} />
          <Route path="/new4" element={<EditPost />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

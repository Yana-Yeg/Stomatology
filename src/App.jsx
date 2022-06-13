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
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<SinglePostsPage />} />
        <Route path="posts/:id/edit" element={<EditPost />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

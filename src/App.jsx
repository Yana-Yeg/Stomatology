import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Nav from "./components/--navigation/Navigation/Nav";
import PostsPage from "./pages/PostsPage";
import SinglePostsPage from "./pages/SinglePostPage";
import EditPost from "./pages/EditPost";
import ContactsPage from "./pages/ContactsPage";
import AboutPage from "./pages/AboutPage";
import OffersPage from "./pages/OffersPage";
import PricesPage from "./pages/PricesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="prices" element={<PricesPage />} />
        {/* <Route>
          <Route path="/new1" element={<PostsPage />} />
          <Route path="/new2" element={<SinglePostsPage />} />
          <Route path="/new3" element={<EditPost />} />
          <Route path="/new4" element={<EditPost />} />
        </Route> */}
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

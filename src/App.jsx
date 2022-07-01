import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Nav from "./components/--navigation/Navigation/Nav";
import ContactsPage from "./pages/ContactsPage";
import AboutPage from "./pages/AboutPage";
import OffersPage from "./pages/OffersPage";
import PricesPage from "./pages/PricesPage";
import PricesGeneralPage from "./pages/PricesGeneralPage";
import PricesPreventionPage from "./pages/PricesPreventionPage";
import PricesEndodonticsPage from "./pages/PricesEndodonticsPage";
import PricesOrthodonticsPage from "./pages/PricesOrthodonticsPage";
import PricesSurgeryPage from "./pages/PricesSurgeryPage";
import PricesProstheticsPage from "./pages/PricesProstheticsPage";
import PricesChildrenPage from "./pages/PricesChildrenPage";
import PricesXrayPage from "./pages/PricesXrayPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="offers" element={<OffersPage />} />
        {/* <Route path="prices" element={<PricesPage />} /> */}
        <Route>
          <Route path="/prices/general" element={<PricesGeneralPage />} />
          <Route path="/prices/prevention" element={<PricesPreventionPage />} />
          <Route
            path="/prices/endodontics"
            element={<PricesEndodonticsPage />}
          />
          <Route
            path="/prices/orthodontics"
            element={<PricesOrthodonticsPage />}
          />
          <Route path="/prices/surgery" element={<PricesSurgeryPage />} />
          <Route
            path="/prices/prosthetics"
            element={<PricesProstheticsPage />}
          />
          <Route path="/prices/children" element={<PricesChildrenPage />} />
          <Route path="/prices/xray" element={<PricesXrayPage />} />
        </Route>
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

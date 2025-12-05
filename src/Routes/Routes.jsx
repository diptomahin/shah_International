import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import AdminRoot from "../layout/AdminRoot";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Subsidiary from "../Pages/Subsidiaries";
import SubsidiaryDetails from "../Pages/SubsidiaryDetails";
import Gallery from "../Pages/Gallary";
import Certifications from "../Pages/Certifications";
import ClientsFullPage from "../Pages/ClientsFullPage";

// Admin Pages
import AdminDashboard from "../admin/pages/Dashboard";
import AdminSubsidiaries from "../admin/pages/Subsidiaries/AdminSubsidiaries";
import AdminCreateSubsidiary from "../admin/pages/Subsidiaries/AdminCreateSubsidiary";
import AdminEditSubsidiary from "../admin/pages/Subsidiaries/AdminEditSubsidiary";

import AdminGallery from "../admin/pages/Gallery/AdminGallery";
import AdminClients from "../admin/pages/Clients/AdminClients";
import AdminCertifications from "../admin/pages/Certifications/AdminCertifications";
import AdminProprietor from "../admin/pages/Proprietor/AdminProprietor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/subsidiaries", element: <Subsidiary /> },
      { path: "/subsidiary/:id", element: <SubsidiaryDetails /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/certifications", element: <Certifications /> },
      { path: "/clients", element: <ClientsFullPage /> },
    ],
  },

  // ------------------------
  // ADMIN ROUTES
  // ------------------------
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },

      // Subsidiaries CRUD
      { path: "/admin/subsidiaries", element: <AdminSubsidiaries /> },
      { path: "/admin/subsidiaries/create", element: <AdminCreateSubsidiary /> },
      { path: "/admin/subsidiaries/edit/:id", element: <AdminEditSubsidiary /> },

      // Gallery
      { path: "/admin/gallery", element: <AdminGallery /> },

      // Clients
      { path: "/admin/clients", element: <AdminClients /> },

      // Certifications
      { path: "/admin/certifications", element: <AdminCertifications /> },

      // Proprietor
      { path: "/admin/proprietor", element: <AdminProprietor /> },
    ],
  },
]);

export default router;

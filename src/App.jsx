import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import HomePage from "./pages/Home/HomePage.jsx";
import ProjectsPage from "./pages/Projects/ProjectsPage.jsx";
import ProjectDetailPage from "./pages/ProjectDetail/ProjectDetailPage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import FAQsPage from "./pages/FAQs/FAQsPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <div className="bg-[#eaf2f8] antialiased">
      <BrowserRouter>
        <ScrollToTop />

        <Toaster position="top-center" richColors />

        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/contact" element={<ContactPage />} /> */}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

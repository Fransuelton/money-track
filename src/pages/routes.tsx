import { useEffect } from "react";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Dashboard } from "./Dashboard";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/saiba-mais" element={<AboutPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
);

function AboutPage() {
  useDocumentTitle('Sobre');
  return <About />;
}
function HomePage() {
  useDocumentTitle('Home');
  return <Home />;
}
function DashboardPage() {
  useDocumentTitle('Dashboard');
  return <Dashboard />;
}

function useDocumentTitle(title: string) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | MoneyTrack - Cofrinho Virtual`;
  }, [location, title]);
}

export { AppRoutes };

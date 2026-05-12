import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Index from "@/pages/Index";
import Rolam from "@/pages/Rolam";
import Szolgaltatasok from "@/pages/Szolgaltatasok";
import Informaciok from "@/pages/Informaciok";
import Publikaciok from "@/pages/Publikaciok";
import Kapcsolat from "@/pages/Kapcsolat";
import Aszf from "@/pages/Aszf";
import Adatkezeles from "@/pages/Adatkezeles";
import Impresszum from "@/pages/Impresszum";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Az oldal nem található.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90">
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rolam" element={<Rolam />} />
          <Route path="/szolgaltatasok" element={<Szolgaltatasok />} />
          <Route path="/informaciok" element={<Informaciok />} />
          <Route path="/publikaciok" element={<Publikaciok />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/aszf" element={<Aszf />} />
          <Route path="/adatkezeles" element={<Adatkezeles />} />
          <Route path="/impresszum" element={<Impresszum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
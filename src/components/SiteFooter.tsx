import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold text-foreground">Vidák Gábor</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Mentálhigiénés és addiktológiai tanácsadás. Bizalmas, szakmai, gyakorlatias támogatás.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Oldalak</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/rolam" className="hover:text-foreground">Rólam</Link></li>
            <li><Link to="/szolgaltatasok" className="hover:text-foreground">Szolgáltatások</Link></li>
            <li><Link to="/informaciok" className="hover:text-foreground">Gyakorlati információk</Link></li>
            <li><Link to="/publikaciok" className="hover:text-foreground">Publikációk</Link></li>
            <li><Link to="/kapcsolat" className="hover:text-foreground">Kapcsolat</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Jogi információk</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/aszf" className="hover:text-foreground">ÁSZF</Link></li>
            <li><Link to="/adatkezeles" className="hover:text-foreground">Adatkezelési tájékoztató</Link></li>
            <li><Link to="/impresszum" className="hover:text-foreground">Impresszum</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vidák Gábor — vidakgabor.hu
      </div>
    </footer>
  );
}
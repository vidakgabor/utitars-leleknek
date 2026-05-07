import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Főoldal" },
  { to: "/rolam", label: "Rólam" },
  { to: "/szolgaltatasok", label: "Szolgáltatások" },
  { to: "/informaciok", label: "Gyakorlati információk" },
  { to: "/publikaciok", label: "Publikációk" },
  { to: "/kapcsolat", label: "Kapcsolat" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-base font-semibold text-foreground">Vidák Gábor</span>
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
            mentálhigiénés tanácsadás
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kapcsolat"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Időpont foglalás
          </Link>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kapcsolat"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Időpont foglalás
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
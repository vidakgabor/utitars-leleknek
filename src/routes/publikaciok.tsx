import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/publikaciok")({
  head: () => ({
    meta: [
      { title: "Publikációk — Vidák Gábor" },
      { name: "description", content: "Tudományos publikációk listája az MTMT adatbázisban." },
    ],
  }),
  component: Publikaciok,
});

function Publikaciok() {
  return (
    <>
      <PageHero title="Publikációk" lead="Tudományos publikációim az MTMT adatbázisban érhetők el." />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <a
          href="https://m2.mtmt.hu/gui2/?type=authors&mode=browse&sel=10085860"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-soft)]"
        >
          <div>
            <h2 className="text-lg font-semibold text-foreground">MTMT — Vidák Gábor</h2>
            <p className="mt-1 text-sm text-muted-foreground">Magyar Tudományos Művek Tára — szerzői profil</p>
          </div>
          <ExternalLink className="text-primary transition-transform group-hover:translate-x-1" size={20} />
        </a>
      </div>
    </>
  );
}
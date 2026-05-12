import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";
import { ExternalLink } from "lucide-react";

export default function Publikaciok() {
  return (
    <>
      <Helmet>
        <title>Publikációk — Vidák Gábor</title>
        <meta name="description" content="Tudományos publikációk listája az MTMT adatbázisban." />
      </Helmet>
      <PageHero title="Publikációk" lead="Tudományos publikációim az MTMT adatbázisban érhetők el." />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <a href="https://m2.mtmt.hu/gui2/?type=authors&mode=browse&sel=10085860" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-soft)]">
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
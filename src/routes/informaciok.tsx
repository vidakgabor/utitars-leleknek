import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Clock, Users, Monitor, Wallet, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/informaciok")({
  head: () => ({
    meta: [
      { title: "Gyakorlati információk — Vidák Gábor" },
      { name: "description", content: "Konzultációs idők, formák és díjazás." },
    ],
  }),
  component: Informaciok,
});

const items = [
  { icon: Clock, title: "Egyéni konzultáció", text: "50 perc" },
  { icon: Users, title: "Csoportfoglalkozás", text: "90 perc" },
  { icon: Monitor, title: "Forma", text: "személyesen, igény esetén online" },
  { icon: Wallet, title: "Egyéni konzultáció díja", text: "12.000 Ft / alkalom" },
  { icon: Wallet, title: "Csoportos részvétel", text: "egyeztetés alapján" },
];

function Informaciok() {
  return (
    <>
      <PageHero title="Gyakorlati információk" lead="Időtartamok, forma és díjazás." />
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((i) => (
            <div key={i.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <i.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{i.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-secondary/50 p-7">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-accent" size={20} />
            <h2 className="text-lg font-semibold text-foreground">Fontos információk</h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• A szolgáltatás nem pszichoterápia.</li>
            <li>• Nem diagnosztikai tevékenység.</li>
            <li>• Nem sürgősségi krízisellátás.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
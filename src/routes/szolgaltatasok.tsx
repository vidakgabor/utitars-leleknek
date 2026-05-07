import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/szolgaltatasok")({
  head: () => ({
    meta: [
      { title: "Szolgáltatások — Vidák Gábor" },
      { name: "description", content: "Egyéni, addiktológiai, hozzátartozói és csoportos tanácsadási szolgáltatások." },
    ],
  }),
  component: Szolgaltatasok,
});

const sections = [
  { title: "Egyéni mentálhigiénés tanácsadás", items: ["élethelyzeti elakadások", "stressz, döntési helyzetek", "kapcsolati problémák", "önismeret"] },
  { title: "Addiktológiai tanácsadás", items: ["szerhasználati problémák", "visszaesés megelőzés", "motiváció erősítése"] },
  { title: "Hozzátartozói tanácsadás", items: ["családtagok támogatása", "kommunikáció fejlesztése", "határhúzás"] },
  { title: "Csoportfoglalkozások", items: ["önismereti csoportok", "hozzátartozói csoportok"] },
  { title: "Emberi erőforrás tanácsadás", items: ["pályaorientáció", "életút tervezés"] },
];

function Szolgaltatasok() {
  return (
    <>
      <PageHero title="Szolgáltatások" lead="Egyéni, családi és csoportos formában — szakmai, gyakorlatias megközelítéssel." />
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-16">
        {sections.map((s) => (
          <section key={s.title} className="rounded-2xl border border-border bg-card p-7">
            <h2 className="text-xl font-semibold text-foreground md:text-2xl">{s.title}</h2>
            <ul className="mt-4 grid gap-2 text-muted-foreground sm:grid-cols-2">
              {s.items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <div className="pt-4 text-center">
          <Link to="/kapcsolat" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            Időpont foglalás
          </Link>
        </div>
      </div>
    </>
  );
}
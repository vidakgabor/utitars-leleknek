import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Heart, Users, UserPlus, Users2, ShieldCheck, GraduationCap, HandHeart, Building2, ArrowRight } from "lucide-react";
import portrait from "@/assets/vidak-gabor.jpg";

const services = [
  { icon: Heart, title: "Egyéni tanácsadás", desc: "Élethelyzeti elakadások, stressz, önismeret." },
  { icon: ShieldCheck, title: "Addiktológiai támogatás", desc: "Szerhasználat, visszaesés-megelőzés, motiváció." },
  { icon: UserPlus, title: "Hozzátartozói segítség", desc: "Családtagok támogatása, határhúzás, kommunikáció." },
  { icon: Users2, title: "Csoportfoglalkozások", desc: "Önismereti és hozzátartozói csoportok." },
];

const trust = [
  { icon: GraduationCap, label: "20+ év szakmai tapasztalat" },
  { icon: Building2, label: "Egyetemi oktató (PTE)" },
  { icon: HandHeart, label: "Addiktológiai tapasztalat" },
  { icon: Users, label: "Civil és alapítványi munka" },
];

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Vidák Gábor — Mentálhigiénés és addiktológiai tanácsadás</title>
        <meta name="description" content="Bizalmas, szakmai tanácsadás élethelyzeti elakadások, szerhasználati problémák és családi nehézségek esetén." />
      </Helmet>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:py-28">
          <div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Mentálhigiénés és addiktológiai tanácsadás
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Több mint 20 év szakmai tapasztalattal segítek élethelyzeti elakadások,
              szerhasználati problémák és családi nehézségek kezelésében.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/kapcsolat" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90">
                Időpont foglalás <ArrowRight size={16} />
              </Link>
              <Link to="/szolgaltatasok" className="inline-flex items-center rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-medium text-foreground hover:bg-background">
                Szolgáltatások
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" aria-hidden />
            <img src={portrait} alt="Vidák Gábor portré" className="relative aspect-[3/4] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" loading="eager" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Rövid bemutatkozás</h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          Vidák Gábor vagyok, mentálhigiénés szakember, szociális munkás és emberi
          erőforrás tanácsadó. Több mint 20 éve dolgozom fiatalokkal, családokkal és
          szerhasználati problémával érintettekkel.
        </p>
        <Link to="/rolam" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Tovább a bemutatkozáshoz <ArrowRight size={14} />
        </Link>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Szolgáltatások</h2>
          <p className="mt-3 text-muted-foreground">Egyéni, családi és csoportos formában.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <t.icon size={20} />
              </div>
              <span className="text-sm font-medium text-foreground">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary to-accent px-8 py-14 text-center text-primary-foreground shadow-[var(--shadow-soft)] md:px-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Ha úgy érzi, elakadt, és szeretne változtatni, keressen bizalommal.
          </h2>
          <Link to="/kapcsolat" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90">
            Időpont foglalás <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
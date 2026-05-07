import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, Calendar } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kapcsolat")({
  head: () => ({
    meta: [
      { title: "Kapcsolat és időpontfoglalás — Vidák Gábor" },
      { name: "description", content: "Vegye fel velem a kapcsolatot e-mailben, telefonon vagy az időpontfoglaló űrlapon." },
    ],
  }),
  component: Kapcsolat,
});

function Kapcsolat() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero title="Kapcsolat" lead="Időpontot a lenti űrlapon, e-mailben vagy telefonon kérhet." />
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-2">
        <div className="space-y-5">
          <a href="mailto:info@vidakgabor.hu" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary"><Mail size={20} /></div>
            <div><h3 className="font-semibold text-foreground">E-mail</h3><p className="mt-1 text-sm text-muted-foreground">info@vidakgabor.hu</p></div>
          </a>
          <a href="tel:+36000000000" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary"><Phone size={20} /></div>
            <div><h3 className="font-semibold text-foreground">Telefon</h3><p className="mt-1 text-sm text-muted-foreground">+36 (00) 000 0000</p></div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent"><Calendar size={20} /></div>
            <div><h3 className="font-semibold text-foreground">Időpontfoglalás</h3><p className="mt-1 text-sm text-muted-foreground">Az űrlapon jelezze kívánt időpontját, hamarosan visszajelzek.</p></div>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-2xl border border-border bg-card p-7">
          <h2 className="text-xl font-semibold text-foreground">Kapcsolatfelvétel</h2>
          <div><label className="text-sm font-medium text-foreground">Név</label><input required maxLength={100} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <div><label className="text-sm font-medium text-foreground">E-mail</label><input required type="email" maxLength={255} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <div><label className="text-sm font-medium text-foreground">Telefon (opcionális)</label><input type="tel" maxLength={30} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <div><label className="text-sm font-medium text-foreground">Kívánt időpont (opcionális)</label><input type="text" placeholder="pl. hétfő délután" maxLength={120} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <div><label className="text-sm font-medium text-foreground">Üzenet</label><textarea required maxLength={2000} rows={5} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Üzenet küldése</button>
          {sent && (<p className="rounded-lg bg-accent/15 px-3 py-2 text-sm text-foreground">Köszönöm! Hamarosan visszajelzek a megadott elérhetőségen.</p>)}
        </form>
      </div>
    </>
  );
}
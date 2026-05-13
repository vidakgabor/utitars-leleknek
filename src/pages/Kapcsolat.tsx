import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, Calendar } from "lucide-react";

export default function Kapcsolat() {
  return (
    <>
      <Helmet>
        <title>Kapcsolat és időpontfoglalás — Vidák Gábor</title>
        <meta name="description" content="Vegye fel velem a kapcsolatot e-mailben, telefonon vagy az időpontfoglaló űrlapon." />
      </Helmet>
      <PageHero title="Kapcsolat" lead="Időpontot e-mailben vagy telefonon kérhet." />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary"><Mail size={20} /></div>
              <div>
                <h3 className="font-semibold text-foreground">E-mail</h3>
                <p className="mt-1 text-sm"><a href="mailto:vidakgabor@gmail.com" className="text-muted-foreground hover:text-foreground">vidakgabor@gmail.com</a></p>
                <p className="text-sm"><a href="mailto:vidak.gabor@pte.hu" className="text-muted-foreground hover:text-foreground">vidak.gabor@pte.hu</a></p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary"><Phone size={20} /></div>
            <div>
              <h3 className="font-semibold text-foreground">Telefon</h3>
              <p className="mt-1 text-sm"><a href="tel:+36308258208" className="text-muted-foreground hover:text-foreground">+36 30 825 8208</a></p>
              <p className="text-sm"><a href="tel:+36302646426" className="text-muted-foreground hover:text-foreground">+36 30 264 6426</a></p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent"><Calendar size={20} /></div>
            <div><h3 className="font-semibold text-foreground">Időpontfoglalás</h3><p className="mt-1 text-sm text-muted-foreground">Keressen bizalommal a fenti elérhetőségek egyikén, és amint lehetséges, felveszem Önnel a kapcsolatot.</p></div>
          </div>
        </div>
      </div>
    </>
  );
}
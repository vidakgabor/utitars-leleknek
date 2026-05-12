import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, Calendar } from "lucide-react";
import { useState } from "react";

export default function Kapcsolat() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = (() => {
    const subject = `Időpontfoglalás — ${name || "weboldal"}`;
    const body = [
      `Név: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      preferredTime ? `Kívánt időpont: ${preferredTime}` : null,
      "",
      message,
    ].filter(Boolean).join("\n");
    return `mailto:vidakgabor@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  })();

  return (
    <>
      <Helmet>
        <title>Kapcsolat és időpontfoglalás — Vidák Gábor</title>
        <meta name="description" content="Vegye fel velem a kapcsolatot e-mailben, telefonon vagy az időpontfoglaló űrlapon." />
      </Helmet>
      <PageHero title="Kapcsolat" lead="Időpontot e-mailben, telefonon vagy az alábbi űrlapon kérhet." />
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-2">
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
          <a href="tel:+36308258208" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary"><Phone size={20} /></div>
            <div><h3 className="font-semibold text-foreground">Telefon</h3><p className="mt-1 text-sm text-muted-foreground">+36 30 825 8208</p></div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent"><Calendar size={20} /></div>
            <div><h3 className="font-semibold text-foreground">Időpontfoglalás</h3><p className="mt-1 text-sm text-muted-foreground">Töltse ki az űrlapot, és az „Üzenet küldése” gomb megnyitja az e-mail klienst előre kitöltött üzenettel.</p></div>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = mailtoHref; }}
          className="space-y-4 rounded-2xl border border-border bg-card p-7"
        >
          <h2 className="text-xl font-semibold text-foreground">Kapcsolatfelvétel</h2>
          <div><label className="text-sm font-medium text-foreground">Név</label><input value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <div><label className="text-sm font-medium text-foreground">E-mail</label><input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" maxLength={255} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <div><label className="text-sm font-medium text-foreground">Telefon (opcionális)</label><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" maxLength={30} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <div><label className="text-sm font-medium text-foreground">Kívánt időpont (opcionális)</label><input value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} type="text" placeholder="pl. hétfő délután" maxLength={120} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <div><label className="text-sm font-medium text-foreground">Üzenet</label><textarea value={message} onChange={(e) => setMessage(e.target.value)} required maxLength={2000} rows={5} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
          <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            Üzenet küldése
          </button>
          <p className="text-xs text-muted-foreground">A gomb megnyitja a levelezőjét az előre kitöltött üzenettel a vidakgabor@gmail.com címre.</p>
        </form>
      </div>
    </>
  );
}
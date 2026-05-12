import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";

export default function Adatkezeles() {
  return (
    <>
      <Helmet><title>Adatkezelési tájékoztató — Vidák Gábor</title><meta name="description" content="Adatkezelési tájékoztató a GDPR szerint." /></Helmet>
      <PageHero title="Adatkezelési tájékoztató" />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-sm leading-relaxed text-muted-foreground">
        <p>Jelen tájékoztató a vidakgabor.hu weboldalon megadott személyes adatok kezelésére vonatkozik a GDPR (EU 2016/679) rendelkezéseivel összhangban.</p>
        <h2 className="pt-4 text-base font-semibold text-foreground">Adatkezelő</h2>
        <p>Vidák Gábor — vidakgabor@gmail.com</p>
        <h2 className="pt-4 text-base font-semibold text-foreground">Kezelt adatok</h2>
        <p>Név, e-mail cím, telefonszám, üzenet tartalma — kapcsolatfelvétel és időpontegyeztetés céljából.</p>
        <h2 className="pt-4 text-base font-semibold text-foreground">Adatkezelés időtartama</h2>
        <p>A kapcsolatfelvételhez kapcsolódó adatok az ügy lezárását követő 1 évig kerülnek megőrzésre.</p>
        <h2 className="pt-4 text-base font-semibold text-foreground">Az érintett jogai</h2>
        <p>Hozzáférés, helyesbítés, törlés, korlátozás és tiltakozás joga — kérelem az e-mail címen jelezhető.</p>
      </article>
    </>
  );
}
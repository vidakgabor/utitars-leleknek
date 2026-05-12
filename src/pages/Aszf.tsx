import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";

export default function Aszf() {
  return (
    <>
      <Helmet><title>ÁSZF — Vidák Gábor</title><meta name="description" content="Általános Szerződési Feltételek." /></Helmet>
      <PageHero title="Általános Szerződési Feltételek" />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-sm leading-relaxed text-muted-foreground">
        <p>Jelen Általános Szerződési Feltételek (ÁSZF) Vidák Gábor által nyújtott mentálhigiénés és addiktológiai tanácsadási szolgáltatásokra vonatkoznak.</p>
        <h2 className="pt-4 text-base font-semibold text-foreground">1. A szolgáltatás tárgya</h2>
        <p>Egyéni és csoportos tanácsadási, kísérési és támogatási szolgáltatás. Nem pszichoterápia, nem diagnosztikai tevékenység, nem sürgősségi krízisellátás.</p>
        <h2 className="pt-4 text-base font-semibold text-foreground">2. Időpontfoglalás és lemondás</h2>
        <p>Időpont az űrlapon, e-mailben vagy telefonon foglalható. A lemondást legkésőbb 24 órával az alkalom előtt kérem jelezni.</p>
        <h2 className="pt-4 text-base font-semibold text-foreground">3. Díjazás</h2>
        <p>Egyéni konzultáció: 12.000 Ft / alkalom. Csoportos részvétel egyeztetés alapján.</p>
        <h2 className="pt-4 text-base font-semibold text-foreground">4. Titoktartás</h2>
        <p>A tanácsadás során elhangzottakra teljes körű titoktartás vonatkozik.</p>
        <p className="pt-6 text-xs">A részletes ÁSZF szöveg egyeztetés alatt — a véglegesített dokumentum hamarosan elérhető.</p>
      </article>
    </>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/rolam")({
  head: () => ({
    meta: [
      { title: "Rólam — Vidák Gábor" },
      { name: "description", content: "Vidák Gábor mentálhigiénés szakember, szociális munkás, emberi erőforrás tanácsadó bemutatkozása." },
    ],
  }),
  component: Rolam,
});

function Rolam() {
  return (
    <>
      <PageHero title="Rólam" lead="Mentálhigiénés szakember, szociális munkás és emberi erőforrás tanácsadó." />
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-16 text-base leading-relaxed text-foreground md:text-lg">
        <p>Vidák Gábor vagyok, mentálhigiénés szakember, szociális munkás és emberi erőforrás tanácsadó.</p>
        <p>Több mint 20 éve dolgozom hátrányos helyzetű fiatalokkal, családokkal és szerhasználati problémával érintett kliensekkel. Pályámat családgondozóként kezdtem, majd 2013-tól az INDIT Közalapítvány munkatársaként alacsony és magas küszöbű addiktológiai ellátásban szereztem tapasztalatot. Munkám során rálátásom volt többek között a Minnesota- és a Portage-modell gyakorlati alkalmazására is.</p>
        <p>Jelenleg a Pécsi Tudományegyetem oktatója vagyok, valamint saját alapítványomat vezetem.</p>
        <p>Tanulmányaimat a Pécsi Tudományegyetemen (szociális munka BA), majd az ELTE-n (emberi erőforrás tanácsadó MA) végeztem, jelenleg doktori tanulmányaimat folytatom nevelésszociológia területen.</p>
        <div className="mt-8 rounded-xl border border-border bg-secondary/50 p-5 text-sm text-muted-foreground">
          <strong className="text-foreground">Fontos:</strong> nem végzek pszichoterápiát és nem állítok fel diagnózist. A munkám tanácsadásra, kísérésre és támogatásra épül.
        </div>
      </article>
    </>
  );
}
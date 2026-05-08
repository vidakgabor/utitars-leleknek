import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/impresszum")({
  head: () => ({ meta: [{ title: "Impresszum — Vidák Gábor" }, { name: "description", content: "Impresszum és üzemeltetői adatok." }] }),
  component: Impresszum,
});

function Impresszum() {
  return (
    <>
      <PageHero title="Impresszum" />
      <article className="mx-auto max-w-3xl space-y-3 px-4 py-16 text-sm leading-relaxed text-muted-foreground">
        <p><strong className="text-foreground">Üzemeltető:</strong> Vidák Gábor</p>
        <p><strong className="text-foreground">Tevékenység:</strong> mentálhigiénés és addiktológiai tanácsadás</p>
        <p><strong className="text-foreground">Nyilvántartási szám:</strong> 51647591</p>
        <p><strong className="text-foreground">Adószám:</strong> 68369114-1-22</p>
        <p><strong className="text-foreground">E-mail:</strong> vidakgabor@gmail.com</p>
        <p><strong className="text-foreground">Telefon:</strong> +36 30 825 8208</p>
        <p><strong className="text-foreground">Weboldal:</strong> vidakgabor.hu</p>
      </article>
    </>
  );
}
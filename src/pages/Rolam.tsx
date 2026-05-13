import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/PageHero";

export default function Rolam() {
  return (
    <>
      <Helmet>
        <title>Rólam — Vidák Gábor</title>
        <meta name="description" content="Vidák Gábor mentálhigiénés szakember, szociális munkás, emberi erőforrás tanácsadó bemutatkozása." />
      </Helmet>
      <PageHero title="Rólam" lead="Mentálhigiénés szakember, szociális munkás és emberi erőforrás tanácsadó." />
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-16 text-base leading-relaxed text-foreground md:text-lg">
        <p>Vidák Gábor vagyok, mentálhigiénés szakember, szociális munkás és emberi erőforrás tanácsadó.</p>
        <p>Több mint 20 éve dolgozom hátrányos helyzetű fiatalokkal, családokkal és szerhasználati problémával érintett kliensekkel. Pályámat családgondozóként kezdtem, majd 2013-tól az INDIT Közalapítvány munkatársaként alacsony és magas küszöbű addiktológiai ellátásban szereztem tapasztalatot. Munkám során rálátásom volt többek között a Minnesota- és a Portage-modell gyakorlati alkalmazására is.</p>
        <p>Jelenleg a Pécsi Tudományegyetem oktatója vagyok, valamint saját alapítványomat vezetem.</p>
        <p>Tanulmányaimat a Pécsi Tudományegyetemen (szociális munka BA), majd az ELTE-n (emberi erőforrás tanácsadó MA) végeztem, jelenleg doktori tanulmányaimat folytatom nevelésszociológia területen.</p>

        <section className="pt-8">
          <h2 className="text-2xl font-semibold text-foreground">Szakmai tapasztalat</h2>
          <ul className="mt-5 space-y-5">
            <li>
              <p className="text-sm font-medium text-accent">2024. szeptember – jelenleg</p>
              <p className="font-semibold text-foreground">Tanársegéd</p>
              <p className="text-sm text-muted-foreground">Pécsi Tudományegyetem Bölcsészet- és Társadalomtudományi Kar — Közösségi és Szociális Tanulmányok Tanszék</p>
              <p className="mt-1 text-sm">Kurzustematikák kidolgozása, oktatás, egyetemi programok szervezése, kutatás és publikálás.</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2021. július – jelenleg</p>
              <p className="font-semibold text-foreground">Vezető</p>
              <p className="text-sm text-muted-foreground">Megoldás a Biztonságra Alapítvány</p>
              <p className="mt-1 text-sm">Programszervezés, önkéntes-koordináció, forrásteremtés, hátrányos helyzetű csoportok támogatása.</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2020. október – 2021. december</p>
              <p className="font-semibold text-foreground">Projektmenedzser</p>
              <p className="text-sm text-muted-foreground">Somogyszentpál Önkormányzata</p>
              <p className="mt-1 text-sm">EFOP humánerőforrás-fejlesztési projekt menedzselése, szociális munkások koordinálása, ügyfélszükségletek felmérése.</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2022. október – 2024. szeptember</p>
              <p className="font-semibold text-foreground">Mentor</p>
              <p className="text-sm text-muted-foreground">Zsibriki Drogterápiás Intézet</p>
              <p className="mt-1 text-sm">A Drogterápiás Intézetben mentorként függőkkel és hozzátartozóikkal foglalkoztam egyéni és csoportos mentorálási folyamatok keretében.</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2018. június – 2021. december</p>
              <p className="font-semibold text-foreground">Szakmai vezető</p>
              <p className="text-sm text-muted-foreground">EFOP projektek</p>
              <p className="mt-1 text-sm">Felzárkóztató és esélyegyenlőségi programok vezetése, csapatirányítás, kapcsolattartás önkormányzatokkal és szolgáltatókkal, mérföldkövek tartása.</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2017. június – 2020. június</p>
              <p className="font-semibold text-foreground">Tanácsadó</p>
              <p className="text-sm text-muted-foreground">Oktatási Hivatal</p>
              <p className="mt-1 text-sm">Civil szervezetek és NGO-k támogatása, képzések szervezése felnőttek és pedagógusok számára, hatósági kapcsolattartás.</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2013. szeptember – 2021. július</p>
              <p className="font-semibold text-foreground">Szociális munkás</p>
              <p className="text-sm text-muted-foreground">INDIT Közalapítvány — Integrált Drogterápiás Intézet, Pécs</p>
              <p className="mt-1 text-sm">Telefonos segélyszolgálat, addiktológiai tanácsadás, alacsony küszöbű ellátás, ártalomcsökkentés.</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2012. október – 2014. január</p>
              <p className="font-semibold text-foreground">Szociális munkás</p>
              <p className="text-sm text-muted-foreground">Esztergár Lajos Család- és Gyermekjóléti Szolgálat</p>
              <p className="mt-1 text-sm">Ügyfelek támogatása szociális ügyintézésben, rendszeres családlátogatás, sérülékeny csoportok kísérése.</p>
            </li>
          </ul>
        </section>

        <section className="pt-8">
          <h2 className="text-2xl font-semibold text-foreground">Tanulmányok</h2>
          <ul className="mt-5 space-y-5">
            <li>
              <p className="text-sm font-medium text-accent">2022. szeptember – jelenleg</p>
              <p className="font-semibold text-foreground">Nevelésszociológia (PhD)</p>
              <p className="text-sm text-muted-foreground">Pécsi Tudományegyetem — „Oktatás és Társadalom” Neveléstudományi Doktori Iskola</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2020. szeptember 12. – 2022. május 28.</p>
              <p className="font-semibold text-foreground">120 órás önismereti pszichodráma csoport</p>
              <p className="text-sm text-muted-foreground">Magyar Pszichodráma Egyesület</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2017. szeptember – 2019. június</p>
              <p className="font-semibold text-foreground">Emberi erőforrás tanácsadó (MA)</p>
              <p className="text-sm text-muted-foreground">Eötvös Loránd Tudományegyetem</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2016. május – június</p>
              <p className="font-semibold text-foreground">Project Management Workshop</p>
              <p className="text-sm text-muted-foreground">Central European University</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2014. július – október</p>
              <p className="font-semibold text-foreground">Coaching a szociális munkában (tanfolyam)</p>
              <p className="text-sm text-muted-foreground">Budapesti Módszertani Szociális Központ</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2008. szeptember – 2012. június</p>
              <p className="font-semibold text-foreground">Szociális munka (BA)</p>
              <p className="text-sm text-muted-foreground">Pécsi Tudományegyetem</p>
            </li>
            <li>
              <p className="text-sm font-medium text-accent">2005. szeptember – 2007. június</p>
              <p className="font-semibold text-foreground">Ifjúságsegítő</p>
              <p className="text-sm text-muted-foreground">Pécsi Tudományegyetem</p>
            </li>
          </ul>
        </section>

        <div className="mt-8 rounded-xl border border-border bg-secondary/50 p-5 text-sm text-muted-foreground">
          <strong className="text-foreground">Fontos:</strong> nem végzek pszichoterápiát és nem állítok fel diagnózist. A munkám tanácsadásra, kísérésre és támogatásra épül.
        </div>
      </article>
    </>
  );
}
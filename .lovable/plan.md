## Cél

A `vidakgabor.hu` domainen futó **statikus** weboldal GitHub Pages-en, GitHub Actions automata deployjal. A meglévő tartalom (Főoldal, Rólam, Szolgáltatások, Gyakorlati információk, Publikációk, Kapcsolat, jogi oldalak) változatlanul megmarad.

## Mit veszítünk el (tudatos kompromisszum)

- **Időpontfoglaló / kapcsolatfelvételi űrlap nem küld e-mailt** — GitHub Pages nem futtat szerveroldali kódot. A `Kapcsolat` oldalon az űrlap helyett a meglévő e-mail címek és telefonszám lesznek kiemelve "mailto:" linkekkel, plusz egy egyszerű `mailto:` előre kitöltött űrlap-helyettesítő, ami megnyitja a látogató levelezőjét.
- **SSR / oldalanként egyedi `<title>` és meta tagek szerveroldalon** — kliensoldali meta-injektálás (`react-helmet-async`) lesz helyette, ami crawlerek nagy részénél ma már működik, de gyengébb mint a valódi SSR.
- **Lovable Cloud / Supabase szerveroldali részek** — eltávolítva a buildből (jelenleg amúgy sem használja semmi a frontendben az auth-ot).

## Lépések

1. **Függőségek átalakítása**
   - Eltávolítás: `@tanstack/react-start`, `@tanstack/react-router`, `@lovable.dev/vite-tanstack-config`, `@cloudflare/vite-plugin`, `wrangler`, Resend SDK, szerveroldali Supabase fájlok.
   - Hozzáadás: `react-router-dom`, `@vitejs/plugin-react`, `react-helmet-async`.

2. **Új `vite.config.ts`** — sima Vite + React, `base: "/"` (mert custom domain a root-on lesz).

3. **Új `index.html`** a projekt gyökerében (Vite konvenció), `<div id="root">` és `src/main.tsx` belépési pont.

4. **`src/main.tsx` + `src/App.tsx`** — `BrowserRouter basename={import.meta.env.BASE_URL}` + `<Routes>` az összes meglévő oldallal.

5. **Oldalak migrálása `src/routes/*.tsx` → `src/pages/*.tsx`**
   - `createFileRoute(...)` helyett sima React komponens default export.
   - `<Link to="...">` (TanStack) → `<Link to="...">` (react-router-dom) — csak az import változik.
   - `head()` meta → `<Helmet>` blokk a komponens tetején.
   - Tartalom (szövegek, képek, design tokenek) **változatlan**.

6. **Header / Footer** — `SiteHeader.tsx`, `SiteFooter.tsx` — csak az import cseréje TanStack `Link` → react-router-dom `Link`.

7. **Kapcsolat oldal** — az `/api/public/contact` hívás helyett: kiemelt e-mail + telefon hívható linkekkel, és egy egyszerű űrlap, amely `mailto:vidakgabor@gmail.com?subject=...&body=...` linket generál.

8. **Takarítás** — törlendő: `src/server.ts`, `src/start.ts`, `src/router.tsx`, `src/routes/__root.tsx`, `src/routes/api/`, `src/routeTree.gen.ts`, `src/integrations/supabase/*` (server fájlok), `wrangler.jsonc`, `supabase/`, `.env` Supabase referenciák.

9. **`public/CNAME`** — egyetlen sor: `vidakgabor.hu`.

10. **`.github/workflows/deploy.yml`** — a felhasználó által megadott workflow, Bun + build + 404.html + `actions/deploy-pages@v4`.

11. **SPA routing fix** — `dist/index.html` → `dist/404.html` másolás (a workflow ezt csinálja), így a React Router refresh után is működik GitHub Pages-en.

12. **Build ellenőrzés** lokálisan: `bun run build` lefut, `dist/` tartalmaz `index.html`-t, `CNAME`-et, asset fájlokat.

## Manuális lépések, amit a felhasználónak kell elvégeznie

1. **GitHub repo Settings → Pages → Source: GitHub Actions** kiválasztása.
2. **GitHub repo Settings → Pages → Custom domain**: `vidakgabor.hu` beírása + "Enforce HTTPS" pipa (DNS propagáció után).
3. **DNS ellenőrzés** — A rekordok a GitHub Pages IP-kre mutatnak (185.199.108.153, .109.153, .110.153, .111.153), CNAME `www` → `<github-username>.github.io`.
4. Első push a `main` branchre → workflow lefut → site élesedik.

## Ellenőrzés

- `https://<user>.github.io/<repo>/` — GitHub Pages alap URL (custom domain után átirányít).
- `https://vidakgabor.hu` — végleges URL DNS propagáció után (max 24-72 óra).
- React Router refresh teszt: `https://vidakgabor.hu/rolam` betöltése közvetlenül.

## Végső output a felhasználónak

A válaszban felsorolom a módosított/törölt fájlokat, a manuális GitHub beállításokat, az ellenőrzési lépéseket és a végleges URL-eket.

---

**Megerősítést kérek, mielőtt belevágok**, mert ez egy kb. 15-20 fájlt érintő nagyobb átalakítás (kb. 500+ sor változás), és visszafordítani csak version history-ból lehet. Ha jóváhagyod, végrehajtom egy menetben.
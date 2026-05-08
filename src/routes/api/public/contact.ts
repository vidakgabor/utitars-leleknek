import { createFileRoute } from "@tanstack/react-router";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "vidakgabor@gmail.com";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            name?: string;
            email?: string;
            phone?: string;
            preferredTime?: string;
            message?: string;
          };

          const name = (body.name || "").trim().slice(0, 100);
          const email = (body.email || "").trim().slice(0, 255);
          const phone = (body.phone || "").trim().slice(0, 30);
          const preferredTime = (body.preferredTime || "").trim().slice(0, 120);
          const message = (body.message || "").trim().slice(0, 2000);

          if (!name || !email || !message) {
            return new Response(
              JSON.stringify({ error: "Hiányzó kötelező mezők." }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return new Response(
              JSON.stringify({ error: "Érvénytelen e-mail cím." }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
          const RESEND_API_KEY = process.env.RESEND_API_KEY;
          if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
            console.error("Missing email credentials");
            return new Response(
              JSON.stringify({ error: "Az e-mail küldés átmenetileg nem érhető el." }),
              { status: 500, headers: { "Content-Type": "application/json" } },
            );
          }

          const html = `
            <h2>Új időpontfoglalási kérés a vidakgabor.hu oldalról</h2>
            <p><strong>Név:</strong> ${escapeHtml(name)}</p>
            <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
            ${preferredTime ? `<p><strong>Kívánt időpont:</strong> ${escapeHtml(preferredTime)}</p>` : ""}
            <p><strong>Üzenet:</strong></p>
            <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
          `;

          const res = await fetch(`${GATEWAY_URL}/emails`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": RESEND_API_KEY,
            },
            body: JSON.stringify({
              from: "vidakgabor.hu <onboarding@resend.dev>",
              to: [TO_EMAIL],
              reply_to: email,
              subject: `Új időpontfoglalás — ${name}`,
              html,
            }),
          });

          const data = await res.json().catch(() => ({}));
          if (!res.ok) {
            console.error("Resend error", res.status, data);
            return new Response(
              JSON.stringify({ error: "Az üzenet küldése nem sikerült." }),
              { status: 502, headers: { "Content-Type": "application/json" } },
            );
          }

          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("contact handler error", err);
          return new Response(
            JSON.stringify({ error: "Váratlan hiba történt." }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});
import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(61,127,136,0.35), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 18L9 6L13 14L16 8L21 18"
              stroke="#ffffff"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: 30, fontWeight: 600, color: "#ffffff" }}>
            {siteConfig.wordmarkLine1}
            <span style={{ fontWeight: 400, opacity: 0.8 }}> {siteConfig.wordmarkLine2}</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span
            style={{
              fontSize: 60,
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "920px",
            }}
          >
            {siteConfig.tagline}
          </span>
          <span style={{ fontSize: 26, color: "#94a3b8", maxWidth: "820px" }}>
            {siteConfig.description}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}

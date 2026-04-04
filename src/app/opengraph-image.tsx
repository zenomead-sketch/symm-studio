import { ImageResponse } from "next/og";

export const alt = "Symm Studios: Brand Identity & Web Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0f0e0d",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 3, background: "#e8541a", display: "flex" }} />
          <span style={{ color: "#e8541a", fontSize: 13, letterSpacing: "0.22em" }}>
            SYMM STUDIOS
          </span>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <span
              style={{
                fontSize: 80,
                fontWeight: 800,
                color: "#faf8f5",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Build brands that
            </span>
            <div style={{ display: "flex", gap: 20, alignItems: "baseline" }}>
              <span
                style={{
                  fontSize: 80,
                  fontWeight: 800,
                  color: "#e8541a",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                demand
              </span>
              <span
                style={{
                  fontSize: 80,
                  fontWeight: 800,
                  color: "#faf8f5",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                attention.
              </span>
            </div>
          </div>
          <span
            style={{
              fontSize: 22,
              color: "rgba(250,248,245,0.45)",
              fontWeight: 300,
              marginTop: 8,
            }}
          >
            Brand Identity · Web Development · Digital Products · St. Petersburg, FL
          </span>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 40 }}>
            {["11 Clients", "100% Retention", "Under 24h Response"].map((stat) => (
              <span key={stat} style={{ color: "#faf8f5", fontSize: 14, fontWeight: 600 }}>
                {stat}
              </span>
            ))}
          </div>
          <span style={{ color: "rgba(250,248,245,0.2)", fontSize: 13, letterSpacing: "0.1em" }}>
            symm.studio
          </span>
        </div>

        {/* Decorative right bar */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 4,
            height: "100%",
            background: "#e8541a",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

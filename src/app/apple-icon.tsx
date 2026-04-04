import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0f0e0d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Flame orange accent corner */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 6,
            height: "40%",
            background: "#e8541a",
            display: "flex",
          }}
        />
        {/* S wordmark */}
        <span
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 96,
            fontWeight: 800,
            color: "#faf8f5",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size }
  );
}

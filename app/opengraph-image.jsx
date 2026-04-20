import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cristal Matcha — Premium Japanese Matcha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0d1311 0%, #1a2520 50%, #0d1311 100%)",
          color: "#e8e6df",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#9ca897",
            marginBottom: 40,
          }}
        >
          The Matcha Parlour
        </div>
        <div
          style={{
            fontSize: 140,
            lineHeight: 1,
            letterSpacing: -4,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Cristal
        </div>
        <div
          style={{
            fontSize: 140,
            lineHeight: 1,
            letterSpacing: -4,
            textAlign: "center",
            fontStyle: "italic",
            color: "#5EBC04",
          }}
        >
          Matcha
        </div>
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#9ca897",
            marginTop: 60,
          }}
        >
          Norwich · Uji · Japan
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const alt = "God'stime Orphanage Home in Delta State, Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "66px 78px",
          color: "#fffef8",
          background: "linear-gradient(125deg, #10281a 0%, #18492f 62%, #286442 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", width: 58, height: 58, alignItems: "center", justifyContent: "center", borderRadius: 29, background: "#d8a13d", color: "#17201a", fontSize: 30, fontWeight: 800 }}>G</div>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 1 }}>GOD&apos;STIME ORPHANAGE HOME</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <div style={{ display: "flex", color: "#e5c985", fontSize: 20, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>Care | Hope | Opportunity</div>
          <div style={{ display: "flex", fontSize: 66, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>Every child deserves a home, hope &amp; a future</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#d8e8d9", fontSize: 22 }}>
          <span>Ekete, Delta State, Nigeria</span>
          <span>godstimeorphanagehome</span>
        </div>
      </div>
    ),
    size
  );
}

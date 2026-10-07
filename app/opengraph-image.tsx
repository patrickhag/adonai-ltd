import { ImageResponse } from "next/og";

export const alt = "Adonai Ltd — Logistics and customs clearance in Rwanda";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "72px 84px", color: "white", background: "linear-gradient(135deg, #052e2b 0%, #064e3b 55%, #10b981 100%)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#6ee7b7" }}>ADONAI LTD</div>
      <div style={{ display: "flex", maxWidth: 920, marginTop: 28, fontSize: 68, lineHeight: 1.08, fontWeight: 800 }}>Logistics that keeps East Africa moving</div>
      <div style={{ display: "flex", marginTop: 30, fontSize: 28, color: "#d1fae5" }}>Freight forwarding · Customs clearance · Cargo transport</div>
      <div style={{ display: "flex", marginTop: 55, fontSize: 24, color: "white" }}>Kigali, Rwanda</div>
    </div>,
    size,
  );
}

export function Paragraph({ text, fontSize }) {
  const size = fontSize || "20px";
  return <p style={{ fontSize: size }}>{text}</p>;
}

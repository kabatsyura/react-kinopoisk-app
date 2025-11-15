import "./Paragraph.css";

export function Paragraph({ text, fontSize }) {
  const size = fontSize || "20px";
  return (
    <p className="paragraph" style={{ fontSize: size }}>
      {text}
    </p>
  );
}

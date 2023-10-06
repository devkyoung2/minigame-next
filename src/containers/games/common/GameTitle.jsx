const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80%",
  height: "20%",
  font: "60px var(--font-chab)",
  textShadow: "2px 2px 4px var(--color-gray2)",
  color: "var(--color-pink2)",
};

export default function GameTitle({ title }) {
  return <p style={style}>{title}</p>;
}

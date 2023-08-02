export default function ({ children }) {
  const styly = {
    border: "2px solid black",
    padding: "20px",
  };
  return <div style={styly}>{children}</div>;
}

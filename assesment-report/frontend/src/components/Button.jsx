export default function Button({ children, onClick, type = "button", color = "blue" }) {
  const base = "px-4 py-2 rounded text-white font-medium";
  const styles = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[color]}`}>
      {children}
    </button>
  );
}

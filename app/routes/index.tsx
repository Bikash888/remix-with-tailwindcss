import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-red-400">Welcome to Remix</h1>
      <Link className="text-blue-500" to="/home">
        Take me home
      </Link>
    </div>
  );
}

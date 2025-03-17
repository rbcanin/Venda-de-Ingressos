import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <main>
        <h1>Projeto compra de ingressos</h1>
        <Link href="/login">Login</Link>
      </main>
    </div>
  );
}

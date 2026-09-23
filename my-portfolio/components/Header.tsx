import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-lime-400 text-sm tracking-wider"
        >
          IamManlyOriginal
        </Link>
        <div className="flex gap-6 text-sm">
          <a href="#projects" className="text-zinc-400 hover:text-white transition">
            Проекты
          </a>
          <a href="#contact" className="text-zinc-400 hover:text-white transition">
            Контакты
          </a>
        </div>
      </nav>
    </header>
  );
}
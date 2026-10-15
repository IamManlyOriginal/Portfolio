import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <p className="text-lime-400 font-mono text-sm mb-4">
          Привет, меня зовут
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold mb-6">
          Александр
        </h1>
        <h2 className="text-2xl sm:text-3xl text-zinc-400 mb-8">
          Я делаю сайты, которые запоминаются.
        </h2>
        <p className="text-zinc-500 max-w-xl mb-10">
          Начинающий программист сайтов, также немного понимаю в дизайне,
          Делаю сайты и его дизайн с нуля, очень люблю полные и понятные ТЗ,
          Довольно креативный,
          Всегда сайт делается по вашему ТЗ,но при желании могу добавлять свои идеи.
        </p>
        <a
          href="#projects"
          className="inline-block bg-lime-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-300 transition"
        >
          Смотреть проекты
        </a>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Проекты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Давай работать вместе
        </h2>
        <p className="text-zinc-400 mb-10 max-w-xl">
          Открыт к интересным проектам. Напиши мне — обсудим идею, сроки и всё остальное.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/IamManlyOriginal/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-300 transition"
          >
            GitHub
          </a>
          <a
            href="https://t.me/@Shuuric"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:border-lime-400 hover:text-lime-400 transition"
          >
            Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Александр. Сделано на Next.js.
      </footer>
    </main>
  );
}
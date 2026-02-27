export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold">Itumeleng Theletsane</h1>

      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Software Developer focused on building efficient,
        scalable, and impactful applications.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-2 bg-black text-white rounded-lg"
        >
          View Projects
        </a>

        <a
          href="mailto:your@email.com"
          className="px-6 py-2 border border-black rounded-lg"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}
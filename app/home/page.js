// app/page.jsx (or pages/index.js if using old routing)

'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">

      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-[url('/images/hero-bg.webp')] flex flex-col justify-center items-center text-center px-6 py-20">
        <div className="bg-black/70 absolute inset-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">Crafting Digital Experiences with MKVerse</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-6">
            At MKVerse, we transform ideas into powerful digital experiences — through stunning websites, intuitive apps, and meaningful design
          </p>
          <Link href="#services">
            <button className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition">
              Explore Our Work
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">What is MKVerse?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          MKVerse is a digital studio where innovation meets creativity. We specialize in web and app development, UI/UX design, and visual content creation — all tailored to make your digital presence shine.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: 'Web Development', icon: '💻', desc: 'Responsive, fast, and modern websites.' },
            { title: 'App Development', icon: '📱', desc: 'Cross-platform Android & iOS solutions.' },
            { title: 'UI/UX Design', icon: '🎨', desc: 'Beautiful and user-centered interfaces.' },
            { title: 'Logo & Thumbnail Editing', icon: '🖼️', desc: 'Creative visuals for branding and content.' },
            { title: 'Custom Projects', icon: '🛠️', desc: 'Tailored solutions to meet your needs.' },
          ].map(({ title, icon, desc }) => (
            <div key={title} className="bg-gray-800 rounded-xl p-6 text-left hover:shadow-xl transition">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-black border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Project Title {p}</h3>
              <p className="text-gray-400 text-sm mb-3">A short description of the project and its purpose.</p>
              <Link href="/projects" className="text-cyan-400 hover:underline">View Project →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-cyan-500 to-cyan-400 text-black">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Together</h2>
        <p className="text-lg mb-6">Got a project or idea? Let’s turn it into reality.</p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
}

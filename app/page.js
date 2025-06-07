'use client';
import Link from 'next/link';
import Navbar from './uI/Navbar';
import Footer from './uI/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="bg-black text-white font-sans">

      {/* Hero Section */}
      <section className="relative min-h-screen  flex flex-col justify-center items-center text-center px-6 py-20 bg-blue-100 text-black">
        <div className=" absolute inset-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">Crafting Digital Experiences with MKVerse</h1>
          <p className="text-lg md:text-xl text-black max-w-xl mx-auto mb-6">
            At MKVerse, we transform ideas into powerful digital experiences  through stunning websites, intuitive apps, and meaningful design
          </p>
          <Link href="#services">
            <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition">
              Explore Our Work
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-12 text-center bg-white flex gap-12 max-md:flex-col">
       <div className='bg-orange-600 px-8 w-[50%] max-md:w-full max-md:rounded-sm'>
        <div className='p-10'>
           <h2 className="text-3xl font-bold text-orange-400 mb-4">What is MKVerse?</h2>
           <p className="text-lg text-white max-w-3xl mx-auto p-2">
           MKVerse is a digital studio where innovation meets creativity. We specialize in web and app development, UI/UX design, and visual content creation — all tailored to make your digital presence shine.
          </p>
           <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition">
              Learn More
            </button>
        </div>
       </div>
       <div className='py-10 px-10'>
        <Image src='/about.jpg'
        height={400}
        width={400}
        alt='about pic'>

        </Image>
       </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 text-center bg-blue-100">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: 'Web Development', icon: '💻', desc: 'We build responsive, high-performance websites that are optimized for speed, accessibility, and modern design standards, ensuring a seamless user experience across all devices and platforms.' },
            { title: 'App Development', icon: '📱', desc: 'Our cross-platform mobile app solutions are crafted to run smoothly on both Android and iOS, with a focus on performance, scalability, and user-friendly interfaces tailored to your goals.' },
            { title: 'UI/UX Design', icon: '🎨', desc: ' We design visually stunning and intuitively interactive interfaces that prioritize user experience, making sure your product not only looks great but is also easy to use and engaging.' },
            { title: 'Logo & Thumbnail Editing', icon: '🖼️', desc: 'We create eye-catching logos and thumbnails that reflect your brand identity and grab attention, helping you stand out across social media, websites, and marketing materials.' },
            { title: 'Custom Projects', icon: '🛠️', desc: 'From unique ideas to complex requirements, we provide fully customized solutions that align with your vision and deliver functionality tailored specifically to your business needs.' },
          ].map(({ title, icon, desc }) => (
            <div key={title} className="bg-gray-800 rounded-xl p-6 text-left hover:shadow-xl transition">
              <div className="text-4xl mb-3 items-center">{icon}</div>
              <h3 className="text-xl text-orange-500  font-semibold mb-1">{title}</h3>
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
      <section className="py-20 px-6 text-center bg-gradient-to-r from-yellow-500 to-blue-600 text-black">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Together</h2>
        <p className="text-lg mb-6">Got a project or idea? Let’s turn it into reality.</p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
    <Footer/>
    </>
  );
}

'use client';
import Link from 'next/link';
import Navbar from './uI/Navbar';
import Footer from './uI/Footer';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: "Web Development",
      url: "/web.jpg",
      desc:
        "We build responsive, high-performance websites optimized for speed, accessibility, and modern design standards, ensuring a seamless user experience.",
    },
    {
      title: "App Development",
      url: "/app.jpg",
      desc:
        "Our cross-platform mobile apps run smoothly on both Android and iOS, focusing on performance, scalability, and user-friendly interfaces.",
    },
    {
      title: "UI/UX Design",
      url: "/uiux.png",
      desc:
        "We design visually stunning, interactive interfaces that prioritize user experience—beautiful, usable, and engaging.",
    },
    {
      title: "Logo & Thumbnail Editing",
      url: "/logothub.jpg",
      desc:
        "We create eye-catching logos and thumbnails that reflect your brand and stand out across social platforms and marketing content.",
    },
    {
    title: "SEO Optimization",
    url: "/seo.jpg", // Make sure this image is in your /public folder
    icon: "📈",
    desc:
      "We enhance your website’s visibility on search engines with smart keyword strategies, technical optimization, and performance improvements.",
  },
  {
    title: "Content Management",
    url: "/cms.jpg", // Ensure this image exists in /public
    icon: "🗂️",
    desc:
      "We offer efficient content management systems that simplify publishing, editing, and organizing your digital content across platforms.",
  },
  ];
  const projects = [
  {
    id: 1,
    title: "Digital Photo Studio 1",
    description: "A short description of the project and its purpose.",
    link: "/projects"
  },
  {
    id: 2,
    title: "Digital Photo Studio 2",
    description: "A short description of the project and its purpose.",
    link: "/projects"
  },
  {
    id: 3,
    title: "Digital Photo Studio 3",
    description: "A short description of the project and its purpose.",
    link: "/projects"
  }
];
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
       <div className='px-8 w-[50%] rounded-b-4xl max-md:w-full max-md:rounded-sm'>
        <div className='p-10'>
           <h2 className="text-3xl font-bold text-orange-400 mb-4">What is MKVerse?</h2>
           <p className="text-lg text-black max-w-3xl mx-auto p-2">
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
        <h2 className="text-3xl font-bold text-orange-800  mb-10">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto px-4 py-10">
      {services.map(({ title, url,desc }) => (
        <div
          key={title}
          className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
        >
          <div className="w-full h-[180px] overflow-hidden p-4">
            <Image
              src={url}
              width={400}
              height={180}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-5 space-y-2">
            <h3 className="text-lg font-bold text-orange-500">{title}</h3>
            <p className="text-sm text-gray-300">{desc}</p>
            <button className='bg-blue-400 rounded-md p-1 hover:bg-amber-400'>Book Now</button>
          </div>
        </div>
      ))}
    </div>

      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((item,index) => (
            <div key={index} className="bg-black border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{item.title}</p>
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

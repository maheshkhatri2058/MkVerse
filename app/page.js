"use client";
import Link from "next/link";
import Navbar from "./uI/Navbar";
import Footer from "./uI/Footer";
import Project from './project/page'
import Image from "next/image";
import services from "./jsondata/services.json";
import teamData from "./jsondata/member.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination ,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
    const fullText = "Crafting Digital Experiences with MKVerse";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 90); // speed of typing

    return () => clearInterval(timer);
  }, []);
  return (
    <>
    <div className="sticky top-0 z-2">
      <Navbar />
    
    </div>
      <main className="bg-black text-white font-sans">
        {/* Hero Section */}
        <section
         className="bg-[url('/banner.png')]  relative min-h-screen max-sm:min-h-[650px]  flex flex-col justify-center items-center text-center px-6 py-20 max-sm:py-2 bg-gray-100 text-black">
          <div className=" absolute inset-0" />
          <div className="relative  sm:py-2">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
            <p className="text-lg md:text-xl text-black max-w-xl mx-auto mb-6">
              "At MKVerse, we transform ideas into powerful digital experiences
              through stunning websites, intuitive apps, and meaningful design"
            </p>
            <Link href="#services">
              <button className="bg-pink-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition">
                Explore Our Work
              </button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 px-20 text-center bg-white flex gap-12 max-sm:p-2 max-md:flex-col-reverse">
            <div className="py-25 max-w:1/2 max-sm:p-2 max-md:w-full">
              <h2 className="text-3xl text-left font-bold text-orange-400 mb-4">
                What is MKVerse?
              </h2>
              <p className="text-lg text-left text-black max-w-3xl mx-auto p-2">
               MKVerse is a creative digital studio offering custom web & app development, UI/UX design, and visual content services. We help startups and businesses build modern, user-focused digital experiences that stand out.Let’s turn your ideas into powerful digital products.
              </p>
              <div className="flex text-left">
                <button className="bg-yellow-500 items-left text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition">
                Learn More
              </button>
              </div>
            </div>         
           <div className="w-1/2 max-sm:px-2 max-sm:hidden">
            <Image
              src="/bnr3.jpg"
              height={500}
              width={500}
              alt="about pic"
            ></Image>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 text-center bg-slate-100">
          <h2 className="text-3xl font-bold text-orange-800  mb-10">
            Our Services
          </h2>
          <div className="grid text-black gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto px-4 py-10">
            {services.map(({ title, url, desc }) => (
              <div
                key={title}
                className="bg-white text-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
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
                  <p className="text-sm text-black">{desc}</p>
                  <button className="bg-blue-400 rounded-md p-1 hover:bg-amber-400">
                    <Link href='/contact'>Lets Connect</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <Project/>
        
        {/* our team section   */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Meet Our Team
            </h2>

            <Swiper
              modules={[ Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  autoplay={{
    delay: 2500,  // 2.5 seconds between slides
    disableOnInteraction: false, // continues autoplay after user interaction
  }}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
            >
              {teamData.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition h-full mx-2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-38 h-38 rounded-full mx-auto object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{member.post}</p>
                    <p className="text-sm text-gray-600 mt-3">
                      {member.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      {member.experience}
                    </p>
                    <div className="flex justify-center gap-6 text-gray-600 text-2xl mt-6">
                      <a
                        href={member.fburl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF className="hover:text-blue-600 transition" />
                      </a>
                      <a
                        href={member.instaurl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="hover:text-pink-500 transition" />
                      </a>
                      <a
                        href={member.linkdurl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="hover:text-blue-800 transition" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-6 text-center bg-gradient-to-r from-yellow-500 to-blue-600 text-black">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Build Something Together
          </h2>
          <p className="text-lg mb-6">
            Got a project or idea? Let’s turn it into reality.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition">
              Contact Us
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

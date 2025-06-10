"use client";
import Link from "next/link";
import Navbar from "./uI/Navbar";
import Footer from "./uI/Footer";
import Image from "next/image";
import projects from "./jsondata/project.json";
import services from "./jsondata/services.json";
import teamData from "./jsondata/member.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
      <Navbar />
      <main className="bg-black text-white font-sans">
        {/* Hero Section */}
        <section
         className="bg-[url('/banner.png')] relative min-h-screen max-sm:min-h-[650px]  flex flex-col justify-center items-center text-center px-6 py-20 max-sm:py-2 bg-blue-100 text-black">
          <div className=" absolute inset-0" />
          <div className="relative z-10 sm:py-2">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
            <p className="text-lg md:text-xl text-white max-w-xl mx-auto mb-6">
              At MKVerse, we transform ideas into powerful digital experiences
              through stunning websites, intuitive apps, and meaningful design
            </p>
            <Link href="#services">
              <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition">
                Explore Our Work
              </button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 px-12 text-center bg-white flex gap-12 max-sm:p-2 max-md:flex-col-reverse">
          <div className="px-8 max-sm:w-full rounded-b-4xl max-md:w-full max-sm:px-2">
            <div className="p-10 max-sm:p-2 max-md:w-full">
              <h2 className="text-3xl font-bold text-orange-400 mb-4">
                What is MKVerse?
              </h2>
              <p className="text-lg text-black max-w-3xl mx-auto p-2">
                MKVerse is a digital studio where innovation meets creativity.
                We specialize in web and app development, UI/UX design, and
                visual content creation — all tailored to make your digital
                presence shine.
              </p>
              <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="py-10 px-10 max-sm:px-2">
            <Image
              src="/about.jpg"
              height={400}
              width={400}
              alt="about pic"
            ></Image>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 text-center bg-blue-100">
          <h2 className="text-3xl font-bold text-orange-800  mb-10">
            Our Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto px-4 py-10">
            {services.map(({ title, url, desc }) => (
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
                  <button className="bg-blue-400 rounded-md p-1 hover:bg-amber-400">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-6 bg-gray-900 text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-10">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {projects.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.title}</p>
                <Link href={item.url} className="text-cyan-400 hover:underline">
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/* our team section   */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Meet Our Team
            </h2>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
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
                        href="https://facebook.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF className="hover:text-blue-600 transition" />
                      </a>
                      <a
                        href="https://instagram.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="hover:text-pink-500 transition" />
                      </a>
                      <a
                        href="https://linkedin.com/in/yourprofile"
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

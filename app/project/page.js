"use client";

import { useEffect, useState, useRef } from "react";

export default function page() {
  const projects = [
    {
      title: "Digital Photo Studio",
      image: "/project1.jpg",
      description: "A full-featured photography portfolio site with booking system and gallery showcase.",
      link: "https://example.com/project1",
    },
    {
      title: "E-commerce Store",
      image: "/project2.jpg",
      description: "An online store with payment gateway, product management, and order tracking.",
      link: "https://example.com/project2",
    },
    {
      title: "Service Booking App",
      image: "/project3.jpg",
      description: "A cross-platform app for booking home services with real-time notifications.",
      link: "https://example.com/project3",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: 25 },
    { label: "Happy Clients", value: 15 },
    { label: "Team Members", value: 5 },
    { label: "Years of Experience", value: 2 },
  ];

  // Counter logic
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 1500; // 1.5 seconds
            const increment = end / (duration / 16); // ~60fps

            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCounts((prevCounts) => {
                const updated = [...prevCounts];
                updated[index] = Math.round(start);
                return updated;
              });
            }, 16);
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated, stats]);

  return (
    <main className="px-4 py-12 max-w-7xl mx-auto">
      {/* Projects Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Projects
      </h1>

      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Stats Section */}
      <section
        ref={statsRef}
        className="bg-gray-100 py-12 rounded-xl"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-blue-600">
                {counts[index]}+
              </p>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

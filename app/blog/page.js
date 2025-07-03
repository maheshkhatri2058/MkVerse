"use client"
import { useState, useRef, useEffect } from "react";
import Footer from "../uI/Footer";

const blogPosts = [
  // 👉 Paste your full blogPosts array here!
    {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "Explore the latest web design trends that will shape the digital landscape in 2024, from AI-powered interfaces.",
    imageUrl: "future_web_design.webp",
    author: "MK Verse",
    date: "March 15, 2025",
    category: "Web Design",
    content: {
      introduction: "The web design landscape is constantly evolving, and 2024 brings exciting new trends that are reshaping how we create and experience websites. From AI-driven interfaces to immersive 3D elements, these innovations are not just about aesthetics but about creating more engaging and effective digital experiences.",
      sections: [
        {
          title: "AI-Powered Design Elements",
          content: "Artificial Intelligence is revolutionizing web design by enabling personalized user experiences and automated design processes. AI can now analyze user behavior and preferences to create dynamic layouts that adapt to individual needs. This technology is particularly valuable for e-commerce sites, where it can optimize product placement and recommendations based on user interactions.",
          image: "ai_design.jpg"
        },
        {
          title: "Immersive 3D Elements",
          content: "Three-dimensional elements are becoming increasingly common in web design, creating more engaging and interactive experiences. From product showcases to interactive backgrounds, 3D elements add depth and realism to websites. This trend is particularly effective for brands looking to showcase their products in a more engaging way.",
          image: "3d_elements.jpg"
        },
        {
          title: "Micro-Interactions and Animations",
          content: "Subtle animations and micro-interactions are becoming essential elements of modern web design. These small, purposeful animations provide feedback to user actions and make the browsing experience more engaging. From hover effects to loading animations, these details can significantly enhance user engagement and satisfaction.",
          image: "micro_interactions.jpg"
        }
      ],
      conclusion: "As we move through 2024, these web design trends are not just about creating visually appealing websites but about building more functional, user-friendly, and engaging digital experiences. The focus is shifting towards creating websites that not only look great but also provide real value to users through improved functionality and personalization."
    }
  },
  {
    id: 2,
    title: "Mastering UI/UX: Essential Principles for Modern Websites",
    excerpt: "Learn the fundamental principles of UI/UX design that will help you create intuitive and engaging user experiences.",
    imageUrl: "ui_ux.png",
    author: "MK Verse",
    date: "March 14, 2025",
    category: "UI/UX",
    content: {
      introduction: "User Interface (UI) and User Experience (UX) design are crucial elements in creating successful digital products. In today's competitive digital landscape, understanding and implementing these principles can make the difference between a successful website and one that fails to engage users.",
      sections: [
        {
          title: "Understanding User Psychology",
          content: "The foundation of great UI/UX design lies in understanding how users think and behave. By studying user psychology, designers can create interfaces that align with natural human tendencies and expectations. This includes understanding cognitive load, visual hierarchy, and user mental models.",
          image: "ui_ux.png"
        },
        {
          title: "The Power of Visual Hierarchy",
          content: "Visual hierarchy is essential in guiding users through your interface. By strategically using size, color, contrast, and spacing, designers can create clear paths for users to follow. This helps users quickly find what they're looking for and understand the relative importance of different elements.",
          image: "ui_ux_layout.webp"
        }
      ],
      conclusion: "Mastering UI/UX design requires a deep understanding of both technical principles and human psychology. By focusing on user needs and implementing these essential principles, you can create digital experiences that are not only beautiful but also highly functional and user-friendly."
    }
  },
  {
    id: 3,
    title: "SEO Optimization: A Comprehensive Guide for 2024",
    excerpt: "Stay ahead of the curve with our comprehensive guide to SEO best practices and strategies for 2024.",
    imageUrl: "seo_opt.webp",
    author: "MK Verse",
    date: "March 13, 2025",
    category: "SEO",
    content: {
      introduction: "Search Engine Optimization (SEO) continues to evolve in 2024, with new algorithms and ranking factors emerging regularly. Understanding and implementing the latest SEO strategies is crucial for maintaining visibility in search results and driving organic traffic to your website.",
      sections: [
        {
          title: "Core Web Vitals and Performance",
          content: "Google's Core Web Vitals have become crucial ranking factors. These metrics measure real-world user experience, including loading performance, interactivity, and visual stability. Optimizing these factors not only improves your search rankings but also enhances user experience.",
          image: "seo_opt.webp"
        },
        {
          title: "Content Strategy and E-E-A-T",
          content: "Content remains king in SEO, but quality and expertise are more important than ever. Google's E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) guidelines emphasize the importance of creating content that demonstrates real expertise and provides genuine value to users.",
          image: "seo_opt.webp"
        }
      ],
      conclusion: "SEO in 2024 requires a holistic approach that combines technical optimization, high-quality content, and excellent user experience. By staying updated with the latest trends and best practices, you can maintain and improve your search visibility in an increasingly competitive digital landscape."
    }
  },
  {
    id: 4,
    title: "Custom Website Development: Turning Ideas into Digital Reality",
    excerpt: "Transform your vision into a stunning, responsive website that drives business growth. From e-commerce to corporate sites, we create digital masterpieces that exceed expectations.",
    imageUrl: "custom_web.avif",
    author: "MK Verse",
    date: "March 12, 2025",
    category: "Web Development",
    content: {
      introduction: "Custom website development is more than just coding; it's about bringing your unique vision to life while ensuring optimal performance, security, and user experience. In today's digital-first world, having a custom website that stands out is crucial for business success.",
      sections: [
        {
          title: "Planning and Strategy",
          content: "The foundation of successful custom website development lies in thorough planning and strategy. This includes understanding business goals, target audience, and key features. A well-planned website ensures that every element serves a purpose and contributes to your overall objectives.",
          image: "custom_web.avif"
        },
        {
          title: "Modern Development Stack",
          content: "Choosing the right technology stack is crucial for building a scalable and maintainable website. Modern development stacks include powerful frameworks, libraries, and tools that enable faster development, better performance, and enhanced security.",
          image: "custom_web.avif"
        }
      ],
      conclusion: "Custom website development is an investment in your digital future. By focusing on quality, performance, and user experience, you can create a website that not only looks great but also drives business growth and delivers real value to your users."
    }
  },
  {
    id: 5,
    title: "Mobile App Development: Building for Today's Digital World",
    excerpt: "Create powerful, user-friendly mobile applications that help your brand thrive. Our apps combine cutting-edge technology with intuitive design for exceptional performance.",
    imageUrl: "mobile_app.png",
    author: "MK Verse",
    date: "March 11, 2025",
    category: "App Development",
    content: {
      introduction: "Mobile app development has become essential for businesses looking to engage with their customers in today's mobile-first world. Creating successful mobile applications requires a deep understanding of user needs, platform capabilities, and modern development practices.",
      sections: [
        {
          title: "Native vs. Cross-Platform Development",
          content: "Choosing between native and cross-platform development is a crucial decision that impacts your app's performance, development time, and maintenance. Each approach has its advantages, and the choice depends on your specific requirements and target audience.",
          image: "mobile_app.png"
        },
        {
          title: "User Experience Design",
          content: "Mobile app UX design requires special consideration for touch interactions, screen sizes, and user context. Creating an intuitive and engaging user experience is essential for app success, requiring careful attention to navigation, feedback, and performance.",
          image: "mobile_app.png"
        }
      ],
      conclusion: "Successful mobile app development requires a balance of technical expertise, user-centered design, and strategic planning. By focusing on user needs and leveraging modern development practices, you can create mobile applications that deliver exceptional value to your users."
    }
  },
  {
    id: 6,
    title: "UI/UX Design: Creating Memorable Digital Experiences",
    excerpt: "Craft intuitive and engaging interfaces that users love. We combine modern design principles with user-centered approaches to deliver experiences that convert visitors into loyal customers.",
    imageUrl: "ui_ux_layout.webp",
    author: "MK Verse",
    date: "March 10, 2025",
    category: "UI/UX Design",
    content: {
      introduction: "Creating memorable digital experiences requires a deep understanding of both design principles and user psychology. Modern UI/UX design goes beyond aesthetics to create interfaces that are intuitive, engaging, and effective at achieving business goals.",
      sections: [
        {
          title: "Design Thinking Process",
          content: "The design thinking process helps create user-centered solutions through empathy, ideation, and iteration. This approach ensures that design decisions are based on real user needs and validated through testing and feedback.",
          image: "ui_ux_layout.webp"
        },
        {
          title: "Visual Design Principles",
          content: "Strong visual design creates emotional connections and guides users through interfaces. Understanding principles like color theory, typography, and visual hierarchy helps create cohesive and effective designs that communicate clearly and engage users.",
          image: "ui_ux_layout.webp"
        }
      ],
      conclusion: "Great UI/UX design combines creativity with user-centered thinking to create digital experiences that are both beautiful and functional. By focusing on user needs and following proven design principles, you can create interfaces that users love and that drive business success."
    }
  },
  {
    id: 7,
    title: "Startup Success: Digital Solutions for Growing Businesses",
    excerpt: "Launch your startup with confidence using our tailored digital solutions. From MVP development to full-scale applications, we help you establish a strong online presence.",
    imageUrl: "digital_startup.jpg",
    author: "MK Verse",
    date: "March 9, 2025",
    category: "Digital Solutions",
    content: {
      introduction: "In today's digital-first business landscape, startups need robust digital solutions to succeed. From establishing an online presence to implementing scalable systems, the right digital strategy can accelerate growth and create competitive advantages.",
      sections: [
        {
          title: "Building Your Digital Foundation",
          content: "A strong digital foundation is crucial for startup success. This includes a professional website, social media presence, and basic digital tools. These elements form the backbone of your online presence and help establish credibility with customers.",
          image: "digital_startup.jpg"
        },
        {
          title: "MVP Development Strategy",
          content: "Minimum Viable Product (MVP) development helps startups validate ideas quickly and efficiently. By focusing on core features and user feedback, you can build and refine your product based on real market needs.",
          image: "digital_startup.jpg"
        }
      ],
      conclusion: "Digital solutions are essential for startup success in today's competitive market. By building a strong digital foundation and implementing scalable solutions, startups can accelerate growth and create lasting competitive advantages."
    }
  },
  {
    id: 8,
    title: "Responsive Design: Building for Every Device",
    excerpt: "Ensure your website works flawlessly across all devices. Our responsive design approach delivers optimal user experience on desktop, tablet, and mobile screens.",
    imageUrl: "responsive.jpg",
    author: "MK Verse",
    date: "March 8, 2025",
    category: "Web Development",
    content: {
      introduction: "Responsive design is no longer optional in today's multi-device world. Creating websites that work seamlessly across all screen sizes is essential for reaching and engaging your audience effectively.",
      sections: [
        {
          title: "Mobile-First Approach",
          content: "The mobile-first approach to web design ensures that your website works perfectly on mobile devices first, then scales up for larger screens. This strategy helps prioritize essential content and create better user experiences across all devices.",
          image: "responsive.jpg"
        },
        {
          title: "Flexible Grid Systems",
          content: "Modern responsive design relies on flexible grid systems that adapt to different screen sizes. These systems help maintain consistent layouts and spacing while ensuring content remains readable and accessible on all devices.",
          image: "responsive.jpg"
        }
      ],
      conclusion: "Responsive design is essential for creating websites that work effectively across all devices. By implementing mobile-first strategies and flexible layouts, you can ensure your website delivers optimal experiences to all users, regardless of their device."
    }
  },
  {
    id: 9,
    title: "Digital Brand Growth: Strategies for Online Success",
    excerpt: "Establish your brand's authority with our comprehensive digital solutions. We combine creative design with smart technology to help your brand stand out and grow online.",
    imageUrl: "digital_market.webp",
    author: "MK Verse",
    date: "March 7, 2025",
    category: "Digital Solutions",
    content: {
      introduction: "Digital brand growth requires a strategic approach that combines creative design, technology, and marketing. In today's competitive online landscape, building a strong digital brand presence is crucial for business success.",
      sections: [
        {
          title: "Brand Identity Development",
          content: "A strong digital brand identity helps you stand out in the crowded online space. This includes developing a consistent visual language, tone of voice, and brand values that resonate with your target audience.",
          image: "digital_market.webp"
        },
        {
          title: "Content Marketing Strategy",
          content: "Content marketing is essential for building brand authority and engaging your audience. A well-planned content strategy helps you create valuable, relevant content that attracts and retains customers.",
          image: "digital_market.webp"
        }
      ],
      conclusion: "Digital brand growth requires a comprehensive approach that combines creative design, strategic marketing, and technology. By focusing on building a strong brand identity and engaging with your audience effectively, you can create lasting success in the digital space."
    }
  }
];

export default function page() {
  const [activePost, setActivePost] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (activePost && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activePost]);

  return (
    <>
    <div className="container mx-auto px-4 py-10">
    <h1 className="text-4xl font-bold mb-4 text-center">Our Blog</h1>
<p className="text-2xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">
  Welcome to our blog — your go-to resource for the latest trends, insights, and practical tips on web design, UI/UX, SEO, and digital solutions. Dive in and get inspired!
</p>


      {/* Cards Grid */}
      <div className={`grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${activePost ? 'opacity-50 pointer-events-none' : 'opacity-100 transition-opacity duration-500'}`}>
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => setActivePost(post.id)}
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.category} • {post.date}</p>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-blue-600 hover:underline font-medium">Read More →</p>
            </div>
          </div>
        ))}
      </div>

      {/* Active Post Content */}
      {activePost && (
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg animate-fade-in"
        >
          <button
            onClick={() => setActivePost(null)}
            className="text-blue-600 mb-4 hover:underline"
          >
            ← Back to Posts
          </button>

          {(() => {
            const post = blogPosts.find((p) => p.id === activePost);
            if (!post) return null;

            return (
              <div>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-md mb-6"
                />
                <p className="text-sm text-gray-500 mb-2">
                  {post.category} • {post.date}
                </p>
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{post.content.introduction}</p>

                {post.content.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                    <p className="text-gray-700 mb-2">{section.content}</p>
                    {section.image && (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full rounded-md mt-2"
                      />
                    )}
                  </div>
                ))}

                <p className="text-lg text-gray-800 font-medium mt-10">
                  {post.content.conclusion}
                </p>
              </div>
            );
          })()}
        </div>
      )}
    </div>
      <Footer/>

    </>

  );
}

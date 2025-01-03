"use client";

import { RoughNotation } from "react-rough-notation";
import Image from "next/image";

export const Hero = () => {
  const decorativeImages = [
    // Left Side Images
    {
      src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=300&q=80",
      alt: "Thumbnail preview",
      className: "absolute -left-10 top-1/4 w-48 h-32 -rotate-12 shadow-xl rounded-lg hidden md:block transform hover:scale-105 transition-transform duration-300 hover:z-20",
      style: { transform: "perspective(1000px) rotateY(10deg) rotateX(5deg)" }
    },
    {
      src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=300&q=80",
      alt: "Thumbnail preview",
      className: "absolute -left-4 top-1/2 w-40 h-28 rotate-6 shadow-xl rounded-lg hidden md:block transform hover:scale-105 transition-transform duration-300 hover:z-20",
      style: { transform: "perspective(1000px) rotateY(15deg) rotateX(-5deg)" }
    },
    // Right Side Images
    {
      src: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=300&q=80",
      alt: "Thumbnail preview",
      className: "absolute -right-10 top-1/4 w-48 h-32 rotate-12 shadow-xl rounded-lg hidden md:block transform hover:scale-105 transition-transform duration-300 hover:z-20",
      style: { transform: "perspective(1000px) rotateY(-10deg) rotateX(5deg)" }
    },
    {
      src: "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?auto=format&fit=crop&w=300&q=80",
      alt: "Thumbnail preview",
      className: "absolute -right-4 top-1/2 w-40 h-28 -rotate-6 shadow-xl rounded-lg hidden md:block transform hover:scale-105 transition-transform duration-300 hover:z-20",
      style: { transform: "perspective(1000px) rotateY(-15deg) rotateX(-5deg)" }
    },
    // Top Floating Images
    {
      src: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=300&q=80",
      alt: "Thumbnail preview",
      className: "absolute -top-10 left-1/4 w-36 h-24 -rotate-3 shadow-xl rounded-lg hidden md:block transform hover:scale-105 transition-transform duration-300 hover:z-20",
      style: { transform: "perspective(1000px) rotateY(5deg) rotateX(15deg)" }
    },
    {
      src: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?auto=format&fit=crop&w=300&q=80",
      alt: "Thumbnail preview",
      className: "absolute -top-8 right-1/4 w-36 h-24 rotate-3 shadow-xl rounded-lg hidden md:block transform hover:scale-105 transition-transform duration-300 hover:z-20",
      style: { transform: "perspective(1000px) rotateY(-5deg) rotateX(15deg)" }
    },
    // Bottom Floating Images
    {
      src: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=300&q=80",
      alt: "Thumbnail preview",
      className: "absolute -bottom-10 left-1/3 w-32 h-24 rotate-6 shadow-xl rounded-lg hidden md:block transform hover:scale-105 transition-transform duration-300 hover:z-20",
      style: { transform: "perspective(1000px) rotateY(8deg) rotateX(-12deg)" }
    },
    {
      src: "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?auto=format&fit=crop&w=300&q=80",
      alt: "Thumbnail preview",
      className: "absolute -bottom-8 right-1/3 w-32 h-24 -rotate-6 shadow-xl rounded-lg hidden md:block transform hover:scale-105 transition-transform duration-300 hover:z-20",
      style: { transform: "perspective(1000px) rotateY(-8deg) rotateX(-12deg)" }
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      {/* Decorative Images */}
      {decorativeImages.map((image, index) => (
        <div
          key={index}
          className={image.className}
          style={{
            ...image.style,
            animation: `float ${3 + index}s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            priority={index < 4}
            quality={90}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/400x300?text=Thumbnail";
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Trust Badge */}
        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 text-sm text-neutral-600 inline-block">
          Trust AI for your thumbnails
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Thumbnail Generation{" "}<br />
          <RoughNotation 
            type="underline" 
            show={true} 
            color="#FF0000"
            strokeWidth={2}
          >
            powered by AI
          </RoughNotation>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Create eye-catching thumbnails for your YouTube and Twitter videos in seconds. Generate up to 4 unique variations per use.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href="/generate"
            className="px-8 py-4 bg-black text-white rounded-lg hover:bg-neutral-800 transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-8 py-4 border-2 border-neutral-200 rounded-lg hover:bg-neutral-50 transition-all transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
        
        {/* Features Badge */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-neutral-600">
          <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Up to 4 images
          </div>
          <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Fast Generation
          </div>
          <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            2 Free Uses
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(var(--rotation));
          }
          50% {
            transform: translateY(-10px) translateX(5px) rotate(var(--rotation));
          }
        }
      `}</style>
    </div>
  );
};
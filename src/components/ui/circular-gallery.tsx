"use client";

import React, { useState, useEffect, useRef, HTMLAttributes } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  images: GalleryImage[];
  radius?: number;
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ images, className, radius = 560, autoRotateSpeed = 0.015, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const lastScrollY = useRef(0);
    const scrollDelta = useRef(0);

    // Scroll-driven rotation
    useEffect(() => {
      const handleScroll = () => {
        const delta = window.scrollY - lastScrollY.current;
        lastScrollY.current = window.scrollY;
        scrollDelta.current = delta;

        setIsScrolling(true);
        setRotation((prev) => prev + delta * 0.28);

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
          scrollDelta.current = 0;
        }, 120);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      };
    }, []);

    // Auto-rotate when not scrolling
    useEffect(() => {
      const tick = () => {
        if (!isScrolling) setRotation((prev) => prev + autoRotateSpeed);
        animationFrameRef.current = requestAnimationFrame(tick);
      };
      animationFrameRef.current = requestAnimationFrame(tick);
      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }, [isScrolling, autoRotateSpeed]);

    const anglePerItem = 360 / images.length;

    return (
      <div
        ref={ref}
        className={`relative w-full h-full flex items-center justify-center${className ? ` ${className}` : ""}`}
        style={{ perspective: "1800px" }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((image, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.15, 1 - normalizedAngle / 160);
            const isFront = normalizedAngle < 30;

            return (
              <div
                key={`${image.src}-${i}`}
                className="absolute"
                style={{
                  width: "320px",
                  height: "210px",
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-160px",
                  marginTop: "-105px",
                  opacity,
                  transition: "opacity 0.25s linear",
                }}
              >
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    boxShadow: isFront
                      ? "0 24px 64px rgba(0,0,0,0.45)"
                      : "0 8px 24px rgba(0,0,0,0.2)",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                  {/* Subtle bottom gradient on front card */}
                  {isFront && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(15,14,13,0.5) 0%, transparent 50%)",
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";
export { CircularGallery };

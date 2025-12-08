"use client";
import React, { useRef, useEffect, useState } from "react";

interface VideoProps {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "auto" | "metadata" | "none";
}

const LazyLoadedVideo: React.FC<VideoProps> = ({
  src,
  poster,
  width,
  height,
  controls = true,
  autoPlay = true,
  loop = true,
  muted = true,           // 👈 default muted so autoplay works
  preload = "auto",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Handle scroll-based visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.6, // Play when 60% visible
      }
    );

    const target = containerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // Play or pause on scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      if (autoPlay) {
        video
          .play()
          .catch(() => {
            // ignore autoplay error
          });
      }
    } else {
      video.pause();
    }
  }, [isInView, autoPlay]);

  return (
    <div ref={containerRef} className="absolute inset-0 object-cover">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls={controls}
        loop={loop}
        muted={muted}
        preload={preload}
        autoPlay={autoPlay}
        controlsList="nodownload"
        className="w-full h-full object-cover overflow-hidden"
        playsInline
      >
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
    </div>
  );
};

export default LazyLoadedVideo;
export { LazyLoadedVideo };

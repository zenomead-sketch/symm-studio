"use client";

import { Carousel } from "@ark-ui/react/carousel";

interface CarouselImage {
  src: string;
  alt: string;
}

export function ThumbnailsCarousel({ images }: { images: CarouselImage[] }) {
  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      className="w-full"
    >
      <Carousel.ItemGroup className="overflow-hidden mb-3" style={{ borderRadius: 0 }}>
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover"
              style={{ height: "clamp(280px, 52vh, 580px)" }}
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center gap-3">
        <Carousel.PrevTrigger
          className="shrink-0 w-9 h-9 border border-border flex items-center justify-center text-muted hover:border-paper hover:text-paper transition-colors text-sm"
          style={{ background: "#faf8f5" }}
        >
          ←
        </Carousel.PrevTrigger>

        <div className="flex gap-2 overflow-x-auto flex-1">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="shrink-0 border-2 border-transparent overflow-hidden cursor-pointer transition-all hover:border-muted"
              style={{ borderRadius: 0 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-16 h-11 object-cover"
                style={{ display: "block" }}
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger
          className="shrink-0 w-9 h-9 border border-border flex items-center justify-center text-muted hover:border-paper hover:text-paper transition-colors text-sm"
          style={{ background: "#faf8f5" }}
        >
          →
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}

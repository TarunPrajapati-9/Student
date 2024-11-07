import { images } from "@/lib/mainHomepage";
import { useEffect, useRef } from "react";

export function AutoScrollingCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollToNextImage = () => {
      const scrollAmount = scrollContainer.clientWidth;
      if (
        scrollContainer.scrollLeft + scrollAmount >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(scrollToNextImage, 5000); // Scroll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-full max-h-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll hide-scrollbar snap-x snap-mandatory"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full snap-center">
            <img
              src={src}
              alt={`Carousel image ${index + 1}`}
              className="w-full  h-auto lg:h-[580px] object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client"; // Required for Carousel hooks

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Import from the existing carousel component
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

// Define the structure for each image object
interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Define the props for the ImageGallery component
export interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: GalleryImage[];
  // Add options for carousel behavior if needed, e.g., loop, autoplay
  carouselOptions?: React.ComponentProps<typeof Carousel>['opts'];
}

const ImageGallery = React.forwardRef<HTMLDivElement, ImageGalleryProps>(
  ({ className, images, carouselOptions, ...props }, ref) => {
    // Optional: Manage Carousel API state if needed for features like thumbnails later
    // const [api, setApi] = React.useState<CarouselApi>()
    // const [current, setCurrent] = React.useState(0)

    // React.useEffect(() => {
    //   if (!api) {
    //     return
    //   }
    //   setCurrent(api.selectedScrollSnap())
    //   api.on("select", () => {
    //     setCurrent(api.selectedScrollSnap())
    //   })
    // }, [api])

    if (!images || images.length === 0) {
      return null; // Don't render anything if there are no images
    }

    return (
      <div ref={ref} className={cn("w-full relative", className)} {...props}>
        <Carousel
          opts={{
            align: "start",
            loop: true, // Loop the gallery
            ...carouselOptions, // Allow overriding options
          }}
          // setApi={setApi} // Uncomment if API state is needed
          className="w-full" // Make carousel take full width of container
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3"> {/* Adjust basis for responsiveness */}
                <div className="p-1">
                   {/* Using optimized image component for better performance */}
                   <div className="aspect-video relative overflow-hidden rounded-lg shadow-md">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      fill // Use fill layout
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Define responsive sizes
                      className="object-cover transition-transform duration-300 ease-in-out hover:scale-105" // Add hover effect
                      priority={index < 3} // Prioritize loading first few images
                      fadeIn={true}
                      lazyBoundary="300px" // Load slightly before coming into view
                    />
                   </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" /> {/* Adjust button position */}
          <CarouselNext className="right-4" />   {/* Adjust button position */}
        </Carousel>
        {/* Optional: Add thumbnails or dot indicators using the API state */}
        {/* <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current + 1} of {images.length}
        </div> */}
      </div>
    );
  }
);

ImageGallery.displayName = 'ImageGallery';

export default ImageGallery;

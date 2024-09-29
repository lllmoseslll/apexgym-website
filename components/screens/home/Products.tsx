import * as React from "react";

// import { Card, CardContent } from "@/components/ui/";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Products() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[220px] sm:max-w-md md:max-w-xl lg:max-w-4xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1  ">
              <Card className="bg-black ">
                <CardContent className="flex flex-col   items-center justify-center p-1">
                  {/* <span className="text-3xl w-full font-semibold">{index + 1}</span> */}
                  <Image
                    src={"/Home.svg"}
                    alt=""
                    width={600}
                    height={600}
                    className="w-full h-72 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-black text-white" />
      <CarouselNext className="bg-black text-white" />
    </Carousel>
  );
}

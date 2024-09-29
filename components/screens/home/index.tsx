"use client";
import Button from "@/components/common/Button";
import Image from "next/image";
import Card from "./Card";
import PricingCard from "./PricingCard";
import Contact from "./Contact";
import { Products } from "./Products";
import { CarouselGallery, CarouselGallery2, CarouselGallery3, CarouselGallery4 } from "./Gallery";

function HomeScreen() {
  const data = [
    {
      id: 1,
      name: "Aerobics/Zumba classes",
      image: "/images/arobic.jpg",
    },
    {
      id: 2,
      name: "Cardio and Physio",
      image: "/images/cardio1.jpg",
    },

    {
      id: 3,
      name: "Fitness/strecting",
      image: "/images/fitness.jpg",
    },
    {
      id: 4,
      name: "Body Building",
      image: "/images/bodybuild.jpg",
    },
    {
      id: 5,
      name: "Weightloss",
      image: "/images/weight.jpg",
    },
    {
      id: 6,
      name: "Nutrition Advice",
      image: "/images/food.jpg",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Hero section */}
      <section className="h-screen w-full relative  ">
        <Image
          src={"/Home.svg"}
          alt="herosection image"
          width={200}
          height={200}
          className="h-full w-full object-cover absolute "
        />
        <div className="w-full h-full pt-10 bg-black/[0.3] flex gap-5 justify-center items-center absolute">
          <div className="w-[90%] max-md:py-16 md:w-[50%] h-[60%] gap-10 md:gap-5 flex flex-col justify-center items-start">
            <Image
              src={"/Vector.svg"}
              alt="herosection image"
              width={200}
              height={200}
              className="h-[60px] w-full object-fill top-0 md:hidden"
            />
            <h1 className=" uppercase font-extrabold text-3xl md:text-4xl lg:text-5xl">
              Get that dream body <span className=" text-[#EBF400]">Now!</span>{" "}
            </h1>
            <div className="flex flex-col text-xl md:text-2xl">
              <p>
                Our professional trainers will help you stay active and healthy{" "}
              </p>
              <p>Remember Gym is all about Consistency </p>
            </div>
            <Button title={"Join Now"} />
          </div>
          <div className="w-[30%] h-[70%] hidden md:block">
            <Image
              src={"/Vector.svg"}
              alt="herosection image"
              width={200}
              height={200}
              className="h-full w-full object-fill top-0"
            />
          </div>
        </div>
      </section>

      {/* Serivces */}
      <section
        id="serivces"
        className="min-h-screen w-full flex justify-center items-center"
      >
        <div className="h-full w-full flex flex-col my-20 justify-center items-center gap-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            Exercises and Services at Apex
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[80%] gap-10">
            {data.map((item) => (
              <Card key={item.id} name={item.name} image={item.image} />
            ))}
          </div>
        </div>
      </section>
      <hr className=" h-3 bg-white" />
      {/* Gallery */}
      <section
        id="gallery"
        className="min-h-screen w-full md:py-20 py-10  flex flex-col justify-center items-center"
      >
        <div className="flex justify-center mb-10">
          <h1 className="text-4xl font-bold">Gallery</h1>
        </div>
        <div className="grid grid-flow-dense md:grid-cols-4 grid-row-3 gap-5 md:gap-10 min-h-[300px]  w-[80%]">
          <div className="col-span-2 row-span-2  h-[360px] ">
            <CarouselGallery />
          </div>{" "}
          <div className="col-span-2 row-span-1 hidden md:block  h-40">
            <CarouselGallery2 />
          </div>{" "}
          <div className="col-span- row-span- h-40 ">
            <CarouselGallery3 />
          </div>{" "}
          <div className="col-span- row-span- h-40 ">
            <CarouselGallery4 />
          </div>{" "}
        </div>
      </section>
      <hr className=" h-3 bg-white" />
      {/* pricing */}
      <section
        id="pricing"
        className="min-h-screen py-20 w-full flex flex-col justify-center items-center"
      >
        <div className="flex justify-center items-center flex-col gap-10 w-full">
          <h1 className="text-4xl font-bold ">Pricing</h1>
          <div className="grid md:grid-cols-3  gap-6 w-[85%] lg:w-[70%] ">
            <PricingCard
              className="my-[20px] "
              Water={"✅"}
              Instructions={"✅"}
              Classes="❌"
              Storage="❌"
              time="day"
              price={5}
              name="Basic Plan"
            />
            <PricingCard
              className="h-[340px] my-auto"
              Water={"✅"}
              Instructions={"✅"}
              Classes="✅"
              Storage="✅"
              time="month"
              price={100}
              name="Premium Plan"
            />
            <PricingCard
              className="my-[20px]"
              Water={"✅"}
              Instructions={"✅"}
              Classes="✅"
              Storage="✅"
              time="week"
              price={28}
              name="Pro Plan"
            />
          </div>
        </div>
      </section>

      {/* products */}
      <section
        id="product"
        className="bg-black min-h-[80vh] py-20 flex flex-col items-center justify-center gap-16"
      >
        <div>
          <h1 className="text-4xl  font-bold">Products</h1>
        </div>

        <Products />

       
      </section>
      {/* contact section */}
      <Contact id="contact" />
    </div>
  );
}

export default HomeScreen;

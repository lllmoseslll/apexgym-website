import Button from "@/components/common/Button";
import Image from "next/image";
import Card from "../home/Card";

function AboutUsScreen() {
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
              About<span className=" text-[#EBF400]">US</span>{" "}
            </h1>
            <div className="flex flex-col text-xl md:text-2xl">
              <p>
                Our professional trainers will help you stay active and healthy{" "}
              </p>
              <p>
                We are a humble gym around kampala that has been operating for a
                while now and we have created an a beautiful community and we
                will love to see you join us{" "}
              </p>
            </div>
            <Button title={"Join Now"} />
          </div>
          <div className="w-[30%] h-[70%] hidden md:block">
            <Image
              src={"/images/bodybuild.jpg"}
              alt="herosection image"
              width={200}
              height={200}
              className="h-full w-full object-cover rounded-full top-0"
            />
          </div>
        </div>
      </section>

      {/* about us */}
      <section className="min-h-screen w-full">
        <div className="w-full h-full flex flex-col py-20 justify-center items-center">
          <h1 className="text-4xl font-extrabold mb-10">Coaches</h1>
          <div className=" flex flex-col gap-20">
            <div className="flex flex-col md:flex-row w-[80%] justify-between mx-auto">
              <div className="w-full md:w-[30%] ">
                <Card name="John Doe" image="/images/weight.jpg" />
              </div>
              <div className="w-full md:w-[60%] p-10 space-y-6">
                <h1 className="text-3xl font-bold">Why do we use it?</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse w-[80%] justify-between mx-auto">
              <div className="w-full md:w-[30%] ">
                <Card name="John Doe" image="/images/weight.jpg" />
              </div>
              <div className="w-full md:w-[60%] p-10 space-y-6">
                <h1 className="text-3xl font-bold">Why do we use it?</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-[80%] justify-between mx-auto">
              <div className="w-full md:w-[30%] ">
                <Card name="John Doe" image="/images/weight.jpg" />
              </div>
              <div className="w-full md:w-[60%] p-10 space-y-6">
                <h1 className="text-3xl font-bold">Why do we use it?</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse w-[80%] justify-between mx-auto">
              <div className="w-full md:w-[30%] ">
                <Card name="John Doe" image="/images/weight.jpg" />
              </div>
              <div className="w-full md:w-[60%] p-10 space-y-6">
                <h1 className="text-3xl font-bold">Why do we use it?</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsScreen;

import Image from "next/image";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { AiFillTikTok } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";

function Contact({ id }: { id: string }) {
  const [value, setValue] = useState();

  return (
    <section
      id={id}
      className="min-h-screen py-20 flex flex-col justify-center items-center gap-16"
    >
      <h1 className="text-4xl font-bold">Contact us</h1>
      <div className="flex w-[80%] justify-center items-center gap-20 ">
        <form
          action=""
          className=" flex flex-col space-y-10 w-full md:w-[400px]"
        >
          <input
            type="text"
            name="username"
            id=""
            placeholder="Enter your name "
            className="w-full text-white bg-[#858502] p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            className="w-full text-white bg-[#858502] p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <PhoneInput
            international
            defaultCountry={"ug"}
            className=""
            inputClassName=""
            inputStyle={{
              backgroundColor: "#858502",
              marginLeft: 10,
              width: "100%",
              padding: "10px",
              border: "none",
              font: "bold",
            }}
            style={{
              backgroundColor: "#858502",
              padding: "9px",
              borderRadius: "5px",
            }}
            name="phoneNumber"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            required
          />
          <textarea
            name="message"
            id=""
            rows={5}
            placeholder="leave a message"
            className="w-full text-white bg-[#858502] p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          ></textarea>
          <div className="flex justify-between p-2 w-full">
            <button className="bg-[yellow] py-1 px-6 rounded-md text-black font-bold">
              Send
            </button>
            <div className="flex gap-5 text-[yellow]">
              <Link
                href={
                  "https://www.tiktok.com/@apexgym8?is_from_webapp=1&sender_device=pc"
                }
              >
                <AiFillTikTok size={50} />
              </Link>
              <Link href={""}>
                <BsInstagram size={50} />
              </Link>
              <Link href={"https://wa.me/256705366652"}>
                <RiWhatsappFill size={50} />
              </Link>
            </div>
          </div>
        </form>
        <Image
          src={"/images/call.jpg"}
          alt=""
          width={400}
          height={400}
          className="hidden md:block h-[550px] w-[40%] object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default Contact;

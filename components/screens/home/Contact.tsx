import Image from "next/image";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { AiFillTikTok } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";

function Contact({ id }: { id: string }) {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !value || !formData.message) {
      alert("Please fill in all the fields.");
      return;
    }

    setLoading(true); // Set loading to true

    // Simulate form submission or handle API request here
    setTimeout(() => {
      console.log("Form submitted:", { ...formData, phoneNumber: value });

      // Reset form after submission
      setFormData({
        username: "",
        email: "",
        message: "",
      });
      setValue("");

      setLoading(false); // Reset loading state
    }, 2000); // Simulating a 2-second loading time
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id={id}
      className="min-h-screen py-20 flex flex-col justify-center items-center gap-16"
    >
      <h1 className="text-4xl font-bold">Contact us</h1>
      <div className="flex w-[80%] justify-center items-center gap-20 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-10 w-full md:w-[400px]"
        >
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full text-white bg-[#858502] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full text-white bg-[#858502] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
          <PhoneInput
            defaultCountry={"ug"}
            inputStyle={{
              backgroundColor: "#858502",
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
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            placeholder="Leave a message"
            className="w-full text-white bg-[#858502] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          ></textarea>
          <div className="flex justify-between p-2 w-full">
            <button
              type="submit"
              className="bg-[yellow] py-1 px-6 rounded-md text-black font-bold"
              disabled={loading} // Disable the button when loading
            >
              {loading ? "Sending..." : "Send"}{" "}
              {/* Show sending text when loading */}
            </button>
            <div className="flex gap-5 text-[yellow]">
              <Link href="https://www.tiktok.com/@apexgym8?is_from_webapp=1&sender_device=pc">
                <AiFillTikTok size={50} />
              </Link>
              <Link href="">
                <BsInstagram size={50} />
              </Link>
              <Link href="https://wa.me/256705366652">
                <RiWhatsappFill size={50} />
              </Link>
            </div>
          </div>
        </form>
        <Image
          src="/images/call.jpg"
          alt="Contact image"
          width={400}
          height={400}
          className="hidden md:block h-[550px] w-[40%] object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default Contact;

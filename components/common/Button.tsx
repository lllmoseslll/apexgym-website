import Link from "next/link";

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <Link
      className="py-3 px-5 bg-[#EBF400] rounded text-black self-end text-2xl font-bold md:mr-20 lg:mr-28"
      href={"#"}
    >
      {title}
    </Link>
  );
}

export default Button;

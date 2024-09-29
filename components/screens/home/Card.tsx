import Image from "next/image";

interface Cardprops {
  name: string;
  image: string;
}

function Card({ name, image }: Cardprops) {
  console.log(image);

  return (
    <div className="bg-white  shadow-sm shadow-black rounded-md overflow-hidden">
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="h-[260px] w-full object-cover "
        
      />
      <div className="text-black font-bold flex justify-center items-center">
        <h1 className="p-5">{name}</h1>
      </div>
    </div>
  );
}

export default Card;

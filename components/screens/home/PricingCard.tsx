import Link from "next/link";

interface pricingStyle {
  className: string;
  name: string;
  Water: string;
  Instructions: string;
  Classes: string;
  Storage: string;
  price: number;
  time: string;
}

function PricingCard({
  className,
  name,
  Water,
  Instructions,
  Classes,
  Storage,
  price,
  time,
}: pricingStyle) {
  return (
    <div
      className={`${className} h-[300px] bg-[#EBF400] rounded-md shadow-md text-black flex justify-between items-center flex-col
       pb-5 px-2  `}
    >
      <div className="w-full flex justify-center items-center pt-3 gap-2 text-gray-700 font-bold flex-col">
        <h1>{name}</h1>
        <hr className="white h-3 w-full" />
      </div>
      <div className="font-extrabold ">
        <h1 className="text-5xl">{price},000</h1>
        <p className="text-gray-700 pl-2 text-xl">UGX/{time}</p>
        <div>
          <ol className="font-bold text-sm pl-3 pt-2 text-gray-700">
            <li>Free water {Water}</li>
            <li>Free instructions{Instructions} </li>
            <li>Free classes {Classes} </li>
            <li>Free storage {Storage}</li>
          </ol>
        </div>
      </div>

      <Link
        href={"https://wa.me/256705366652"}
        className="text-black bg-white font-extrabold text-xl py-1 px-10 rounded-md"
      >
        Subscribe now
      </Link>
    </div>
  );
}

export default PricingCard;

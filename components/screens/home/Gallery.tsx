import Image from "next/image";

export function CarouselGallery() {
  const Items = [
    { id: 1, image: "/images/arobic.jpg" },
    { id: 2, image: "/images/call.jpg" },
    { id: 3, image: "/images/food.jpg" },
    { id: 4, image: "/images/weight.jpg" },
    { id: 5, image: "/images/gallery.jpg" },
    { id: 6, image: "/images/cardio1.jpg" },
    { id: 7, image: "/images/bodybuild.jpg" },
  ];

  return (
    <div className="carousel rounded-box w-full h-full ">
      {Items.map((item) => {
        return (
          <div key={item.id} className="carousel-item w-full">
            <Image
              height={200}
              width={200}
              src={item.image}
              alt="picture"
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

export function CarouselGallery2() {
  const Items = [
    { id: 1, image: "/images/arobic.jpg" },
    { id: 2, image: "/images/call.jpg" },
    { id: 3, image: "/images/food.jpg" },
    { id: 4, image: "/images/weight.jpg" },
    { id: 5, image: "/images/gallery.jpg" },
    { id: 6, image: "/images/cardio1.jpg" },
    { id: 7, image: "/images/bodybuild.jpg" },
  ];

  const middleIndex = Math.floor(Items.length / 4);

  const reorderedItems = [
    ...Items.slice(middleIndex),
    ...Items.slice(0, middleIndex),
  ];

  return (
    <div className="carousel rounded-box w-full h-full">
      {reorderedItems.map((item) => (
        <div key={item.id} className="carousel-item w-full">
          <Image
            height={200}
            width={200}
            src={item.image}
            alt="picture"
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function CarouselGallery3() {
  const Items = [
    { id: 1, image: "/images/arobic.jpg" },
    { id: 2, image: "/images/call.jpg" },
    { id: 3, image: "/images/food.jpg" },
    { id: 4, image: "/images/weight.jpg" },
    { id: 5, image: "/images/gallery.jpg" },
    { id: 6, image: "/images/cardio1.jpg" },
    { id: 7, image: "/images/bodybuild.jpg" },
  ];

  const middleIndex = Math.floor(Items.length / 3);

  const reorderedItems = [
    ...Items.slice(middleIndex),
    ...Items.slice(0, middleIndex),
  ];

  return (
    <div className="carousel rounded-box w-full h-full">
      {reorderedItems.map((item) => (
        <div key={item.id} className="carousel-item w-full">
          <Image
            height={200}
            width={200}
            src={item.image}
            alt="picture"
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function CarouselGallery4() {
  const Items = [
    { id: 1, image: "/images/arobic.jpg" },
    { id: 2, image: "/images/call.jpg" },
    { id: 3, image: "/images/food.jpg" },
    { id: 4, image: "/images/weight.jpg" },
    { id: 5, image: "/images/gallery.jpg" },
    { id: 6, image: "/images/cardio1.jpg" },
    { id: 7, image: "/images/bodybuild.jpg" },
  ];

  const middleIndex = Math.floor(Items.length / 2);

  const reorderedItems = [
    ...Items.slice(middleIndex),
    ...Items.slice(0, middleIndex),
  ];

  return (
    <div className="carousel rounded-box w-full h-full">
      {reorderedItems.map((item) => (
        <div key={item.id} className="carousel-item w-full">
          <Image
            height={200}
            width={200}
            src={item.image}
            alt="picture"
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

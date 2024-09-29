import { CarouselGallery } from "./Gallery";

export interface style {
    className: string;
}

function Slider({className}:style ) {
  return (
      <div className={` rounded-lg bg-white ${className}`}>
          <CarouselGallery  />
      </div>
  )
}

export default Slider
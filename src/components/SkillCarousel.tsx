import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  images: string[];
  captions: string[];
}

function SkillCarousel({ images, captions }: Props) {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      showIndicators={false}
      dynamicHeight={false}
      emulateTouch={true}
      swipeable={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={33.33}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
          <p className="caption">{captions[index]}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default SkillCarousel;

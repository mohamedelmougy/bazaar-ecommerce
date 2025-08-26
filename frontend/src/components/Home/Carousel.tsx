import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as Slider } from 'react-responsive-carousel'
import { carouselSlides } from '@/constants'
import { cn } from '@/utils'

const Carousel = () => {
  return (
    <div>
      <Slider infiniteLoop emulateTouch autoPlay useKeyboardArrows dynamicHeight showStatus={false} showThumbs={false}>
        {carouselSlides.map((slide) => (
          <div className={cn('max-h-[300px] flex items-center justify-center px-4', slide.background)} key={slide.alt}>
            <div className="flex items-center justify-center mr-4">
              <img
                className="h-auto w-full"
                loading="lazy"
                src={slide.imgUrl}
                alt={slide.alt}
                height={300}
                width={500}
              />
            </div>
            <div className="space-y-1">
              <h4 className="text-[#915970] tracking-normal text-sm sm:text-2xl md:text-3xl lg:text-4xl ">
                {slide.headings}
              </h4>
              <p className="text-[#915970] tracking-normal text-sm sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {slide.paragraph}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel

import Image from 'next/image';
import { TbArrowUpRight } from 'react-icons/tb';

export default function HeroSection() {
  return (
    <div className="bg-zinc-50">
      <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
        <div className="lg:w-1/2 xl:py-14 lg:py-8">
          <p className="tracking-widest">OFFER FOR THE BEST INTERIOR</p>
          <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
            Hey there
            <br />I am Divyansh Somani
          </h1>
          <p className="pb-6 text-gray-500 xl:pb-10">
            I am absolutely passionate about transforming spaces into stunning
            works of art. With my keen eye for design and love for creativity
            I&apos;ve dedicated my life to the world of interior design. Whether
            it s giving a cozy living room a whole new look turning a corporate
            office into a productivity haven or curating the perfect ambiance
            for a trendy restaurant I thrive on bringing visions to life. I
            truly believe that every space has a unique story to tell and I&apos;m
            here to be its storyteller. My mission is to craft interiors that
            not only look breathtaking but also make a real difference in the
            lives of those who experience them. Let s collaborate and turn your
            space into a masterpiece that truly reflects your personality
            and aspirations!
          </p>
          <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
            Get Started <TbArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="w-1/2">
          <Image
            src="/image/kitchen.png"
            width={800}
            height={500}
            alt=""
            className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px]  hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}

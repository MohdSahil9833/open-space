import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'FLOOR PLAN ',
      description: 'Designing spaces that tell a story. ',
      image: '/image/facadee.jpg',
      link: '',
    },
    {
      id: 2,
      name: 'EXTERIOR DESIGN',
      description:
        'Crafting an inviting first impression. ',
      image: '/image/facade.jpg',
      link: '',
    },
    {
      id: 3,
      name: 'PUJA GHAR',
      description:
        'Elevate your spiritual space. ',
      image: '/image/mandir.jpg',
    },
    {
      id: 4,
      name: 'RETAIL',
      description:
        'Your retail experience with spaces. ',
      image: '/image/retail.jpg',
    },
    {
      id: 5,
      name: 'MASTER-BEDROOM',
      description:
        'Transform your bedroom into a sanctuary. ',
      image: '/image/bedroom.jpg',
    },
    {
      id: 6,
      name: 'DRAWING ROOM',
      description:
        'Drawing room with a comfortable design for your family. ',
      image: '/image/project4.png',
    },
    {
      id: 7,
      name: 'LIVING ROOM',
      description:
        'Where comfort meets style. ',
      image: '/image/cut1.jpg',
    },
    {
      id: 8,
      name: 'KIDS-ROOM',
      description:
        'Designing dreams in every corner of your childs room. ',
      image: '/image/KIDS.jpeg',
    },
    {
      id: 8,
      name: '',
      description:
        '',
      image: '/image/poster.jpeg',
    },
  ];
  return (
    <div className="">
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white ">
          PROVDING
        </h1>
      </div>
      <div className="container grid grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-5 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-1xl font-semibold">{project.name}</h1>
              <p className="py-1 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// ---------- images ----------
import member1 from "../../public/assets/images/member1.png";
import member2 from "../../public/assets/images/member2.png";
import member3 from "../../public/assets/images/member3.png";
import member4 from "../../public/assets/images/member4.png";

import linkedinIcon from "../../public/assets/images/linkedin.svg";

// ---------- data ----------
const team: TeamMember[] = [
  {
    id: 1,
    name: "გიორგი შერვაშიძე",
    description: "თანადამფუძნებელი, მარკეტინგისა და კომუნიკაციების მენეჯერი",
    image: member1,
    linkedin: "#",
  },
  {
    id: 2,
    name: "გიორგი შერვაშიძე",
    description: "თანადამფუძნებელი, მარკეტინგისა და კომუნიკაციების მენეჯერი",
    image: member2,
    linkedin: "#",
  },
  {
    id: 3,
    name: "გიორგი შერვაშიძე",
    description: "თანადამფუძნებელი, მარკეტინგისა და კომუნიკაციების მენეჯერი",
    image: member3,
    linkedin: "#",
  },
  {
    id: 4,
    name: "გიორგი შერვაშიძე",
    description: "თანადამფუძნებელი, მარკეტინგისა და კომუნიკაციების მენეჯერი",
    image: member4,
    linkedin: "#",
  },
];

// ---------- types ----------
type TeamMember = {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  linkedin: string;
};

// ---------- component ----------
const Team = () => {
  return (
    <section
      aria-labelledby="team-heading"
      className="px-4 md:px-6 lg:px-8 py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <h2 id="team-heading" className="mb-10 lg:text-[32px] font-bold">
          გაიცანი ჩვენი გუნდი
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map(({ id, name, description, image, linkedin }) => (
            <article
              aria-label={`Team member: ${name}`}
              key={id}
              className="flex flex-col group overflow-hidden rounded-2xl  transition-transform duration-300 group-hover:scale-[1.03] focus-within:scale-[1.03] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#8A2BE2]"
            >
              <Image
                src={image}
                alt={name}
                width={295}
                height={185}
                className="w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.3]"
              />

              <div className="p-4 hover:text-[#8A2BE2] transition-colors duration-500 hover:bg-white hover:rounded-2xl z-10">
                <h3 className="mt-4 text-2xl font-bold leading-[40px]">
                  {name}
                </h3>

                <p className="mt-4 mb-4 leading-[26px]">{description}</p>

                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}-ის LinkedIn პროფილი`}
                  className="mt-4 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A2BE2]"
                >
                  <Image
                    src={linkedinIcon}
                    alt=""
                    aria-hidden="true"
                    width={38}
                    height={38}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

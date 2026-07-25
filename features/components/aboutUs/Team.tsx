import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import LgvBebasText from "@/features/news/components/LgvBebasText";

// ---------- images ----------
import member1 from "../../../public/assets/images/aboutUs/member1.png";
import member2 from "../../../public/assets/images/aboutUs/member2.png";
import member3 from "../../../public/assets/images/aboutUs/member3.png";
import member4 from "../../../public/assets/images/aboutUs/member4.png";

import linkedinIcon from "../../../public/assets/images/aboutUs/linkedin.svg";
import linkedinIconPurple from "../../../public/assets/images/aboutUs/linkedin-purple.svg";

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
        <h2
          id="team-heading"
          className="mb-10 lg:text-[32px] font-bold font-display"
        >
          <LgvBebasText>გაიცანი ჩვენი გუნდი</LgvBebasText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map(({ id, name, description, image, linkedin }) => (
            <article
              aria-label={`Team member: ${name}`}
              key={id}
              className="flex flex-col group overflow-hidden rounded-2xl  transition-transform duration-300 group-hover:scale-[1.03] focus-within:scale-[1.03] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#8A2BE2]"
            >
              <div className="relative w-full h-[185px] overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.3]"
                />
              </div>

              <div className="p-4 transition-colors duration-500 group-hover:text-[#8A2BE2] group-hover:bg-white group-hover:rounded-2xl z-10">
                <h3 className="mt-4 text-2xl font-bold leading-[40px]">
                  {name}
                </h3>

                <p className="mt-4 mb-4 leading-[26px]">{description}</p>

                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}-ის LinkedIn პროფილი`}
                  className="relative block w-[38px] h-[38px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A2BE2]"
                >
                  <Image
                    src={linkedinIcon}
                    alt=""
                    aria-hidden="true"
                    width={38}
                    height={38}
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  />

                  <Image
                    src={linkedinIconPurple}
                    alt=""
                    aria-hidden="true"
                    width={38}
                    height={38}
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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

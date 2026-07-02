import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// ---------- images ----------
import member1 from "../../public/assets/images/member1.png";
import member2 from "../../public/assets/images/member2.png";
import member3 from "../../public/assets/images/member3.png";
import member4 from "../../public/assets/images/member4.png";

import linkedinIcon from "../../public/assets/images/linkedin.svg";

// ---------- data ----------
const team = [
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
interface TeamMember {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  linkedin: string;
}

// ---------- component ----------
const Team = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="mb-10 text-3xl md:text-4xl font-bold">
          გაიცანი ჩვენი გუნდი
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member: TeamMember) => (
            <article key={member.id} className="flex flex-col">
              <Image
                src={member.image}
                alt={member.name}
                width={295}
                height={185}
                className="w-full object-cover"
              />

              <h3 className="mt-4 text-xl font-bold">{member.name}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {member.description}
              </p>

              <Link href={member.linkedin} className="mt-4 w-fit">
                <Image
                  src={linkedinIcon}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

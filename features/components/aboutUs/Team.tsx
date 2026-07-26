"use client";

import Image from "next/image";
import Link from "next/link";
import LgvBebasText from "@/features/news/components/LgvBebasText";
import { useMembers } from "../aboutUs/hooks/useMembers";

// ---------- images ----------
import linkedinIcon from "../../../public/assets/images/aboutUs/linkedin.svg";
import linkedinIconPurple from "../../../public/assets/images/aboutUs/linkedin-purple.svg";

// ---------- component ----------
const Team = () => {
  const { data: team = [] } = useMembers();

  return (
    <section aria-labelledby="team-heading" className="w-full py-16">
      <div className="mx-auto max-w-[1240px]">
        <h2
          id="team-heading"
          className="mb-10 lg:text-[32px] font-bold font-display"
        >
          <LgvBebasText>გაიცანი ჩვენი გუნდი</LgvBebasText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map(({ id, name_surname, role, img, in_link }) => (
            <article
              aria-label={`Team member: ${name_surname}`}
              key={id}
              className="flex flex-col group overflow-hidden rounded-2xl  transition-transform duration-300 group-hover:scale-[1.03] focus-within:scale-[1.03] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#8A2BE2]"
            >
              <div className="relative w-full h-[185px] overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_UNIPODCAST_API_URL}/static/uploads/members/${img}`}
                  alt={name_surname}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.3]"
                />
              </div>

              <div className="p-4 transition-colors duration-500 group-hover:text-[#8A2BE2] group-hover:bg-white group-hover:rounded-2xl z-10">
                <h3 className="mt-4 text-2xl font-bold leading-[40px]">
                  {name_surname}
                </h3>

                <p className="mt-4 mb-4 leading-[26px]">{role}</p>

                <div className="mt-auto h-[38px]">
                  {in_link && (
                    <Link
                      href={in_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name_surname}-ის LinkedIn პროფილი`}
                      className="relative block h-[38px] w-[38px]"
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
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

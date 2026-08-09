import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  title: string;
  description: string;
  mobileImageSrc: string;
  tabletImageSrc: string;
  desktopImageSrc: string;
  date: string;
  dateTime: string;
  tags: readonly string[];
  href: string;
};

const NewsCard = ({
  title,
  description,
  mobileImageSrc,
  tabletImageSrc,
  desktopImageSrc,
  date,
  dateTime,
  tags,
  href,
}: NewsCardProps) => {
  return (
    <article
      className="
        group flex h-[453px] w-full flex-col
        overflow-hidden rounded-[32px]
        bg-[#16002C]
        font-['Noto_Sans_Georgian']
        text-white
      "
    >
      <div
        className="
          relative h-[229px] w-full shrink-0
          overflow-hidden rounded-t-[12px]

          xl:h-[192px]
        "
      >
        <Image
          src={mobileImageSrc}
          alt={title}
          fill
          sizes="358px"
          className="
            object-cover
            transition-transform duration-300
            group-hover:scale-[1.02]

            md:hidden
          "
        />

        <Image
          src={tabletImageSrc}
          alt={title}
          fill
          sizes="348px"
          className="
            hidden object-cover
            transition-transform duration-300
            group-hover:scale-[1.02]

            md:block
            xl:hidden
          "
        />

        <Image
          src={desktopImageSrc}
          alt={title}
          fill
          sizes="294px"
          className="
            hidden object-cover
            transition-transform duration-300
            group-hover:scale-[1.02]

            xl:block
          "
        />
      </div>

      <div
        className="
          flex min-h-0 flex-1 flex-col
          px-4 pb-4 pt-[14px]
        "
      >
        <div className="flex items-start justify-between gap-3">
          <h2
            className="
              min-w-0 text-[16px]
              font-bold leading-[23px]
            "
          >
            {title}
          </h2>

          <time
            dateTime={dateTime}
            className="
              flex shrink-0 items-center gap-1
              text-[10px] leading-[14px]
              text-[#C6C6C7]

              xl:text-[12px]
              xl:leading-[18px]
            "
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="
                h-[15px] w-[15px]
                fill-none stroke-current
              "
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M8 3v4M16 3v4M3 10h18" />
            </svg>

            {date}
          </time>
        </div>

        <p
          className="
            mt-[10px] line-clamp-3
            text-[14px] font-normal
            leading-[21px] text-white/90
          "
        >
          {description}
        </p>

        <div className="mt-[10px] flex flex-wrap gap-x-2 gap-y-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                text-[12px] leading-[18px]
                text-[#C6C6C7]/65
              "
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex justify-end pt-[14px]">
          <Link
            href={href}
            className="
              inline-flex h-9 items-center
              gap-[6px] rounded-full
              border border-[#8A2BE2]
              bg-transparent px-[15px]
              text-[12px] font-bold text-white

              transition-[border-color,box-shadow]
              duration-300 ease-out

              hover:border-[#8A2BE2]
              hover:bg-transparent
              hover:shadow-[0_0_10px_rgba(223,255,0,0.55)]

              focus-visible:border-[#8A2BE2]
              focus-visible:bg-transparent
              focus-visible:outline-none
              focus-visible:shadow-[0_0_10px_rgba(223,255,0,0.55)]
            "
          >
            ვრცლად
            <Image
              src="/assets/images/latestNews/arrow_outward.svg"
              alt=""
              width={22}
              height={22}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;

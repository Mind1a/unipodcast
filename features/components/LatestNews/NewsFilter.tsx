import { forwardRef } from "react";

type NewsFilterProps = {
  value: string;
  isHighlighted: boolean;
  onChange: (value: string) => void;
};

const NewsFilter = forwardRef<HTMLInputElement, NewsFilterProps>(
  function NewsFilter({ value, isHighlighted, onChange }, ref) {
    return (
      <div
        role="search"
        className={`
          flex h-[55px] w-full items-center
          rounded-[12px] border
          bg-[#393640] p-2
          transition-[border-color,box-shadow]
          duration-700 ease-out

          ${
            isHighlighted
              ? "border-[#73D7FF] shadow-[0_0_18px_rgba(115,215,255,0.55)]"
              : "border-white/10 shadow-none"
          }
        `}
      >
        <div className="flex min-w-0 flex-1 items-center gap-2 pl-1">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0 fill-none stroke-[#C6C6C7]"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16.5 16.5 4 4" />
          </svg>

          <input
            ref={ref}
            type="search"
            aria-label="სიახლეების მოძებნა"
            placeholder="მოძებნე სასურველი ეპიზოდი"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="
              min-w-0 flex-1
              bg-transparent
              text-[12px] leading-4
              text-white outline-none
              placeholder:text-[#C6C6C7]

              md:text-[13px]

              xl:text-[16px]
              xl:leading-6
            "
          />
        </div>

        <button
          type="button"
          className="
            ml-2 h-[39px] shrink-0
            rounded-[10px]
            bg-[#7546A8] px-4
            text-[12px] font-bold text-white
            transition-colors duration-200

            hover:bg-[#8A2BE2]

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white/70

            md:px-5

            xl:px-6
            xl:text-[14px]
          "
        >
          ფილტრი
        </button>
      </div>
    );
  }
);

export default NewsFilter;

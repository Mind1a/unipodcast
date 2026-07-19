import Image from "next/image";
import { DataType } from "./CardPropsType";
import LgvBebasText from "@/features/news/components/LgvBebasText";




export default function Card({ data }: DataType) {
  return (
    <article className="bg-[#10001F]   flex-col md:flex-row border border-[#28014D] flex w-full  gap-8 p-8 rounded-4xl min-w-0">
      <h2 className="md:hidden text-center font-bold font-display text-[#FED403] text-[32px] leading-[100%]">
        <LgvBebasText>{data.title}</LgvBebasText>
      </h2>
      <Image width={100} height={100}  src={data.image} alt={`${data.title} banner image`} className=" w-full xl:w-87.5 xl:h-59.5  object-cover rounded-3xl" />

      <div className="flex flex-col gap-8 w-full  min-w-0">
        <h2 className="hidden md:block font-bold  font-display text-[#FED403] text-[32px] leading-[100%]">
          <LgvBebasText>
            {data.title}
          </LgvBebasText>
        </h2>
        <p className="line-clamp-4 text-center sm:text-start text-[14px] leading-[150%] text-[#FFFFFF]">
          {data.description}
        </p>

        <div className="flex flex-col relative gap-4 items-center sm:items-start  xl:gap-0 xl:flex-row xl:items-center justify-between">
          <div className="flex items-center w-full max-w-full text-[16px] leading-[100%]  text-[#F4EAFD]">
            <span className="font-medium pr-2 pb-2">სტუმრები:</span>
            <div className="flex items-center  overflow-x-auto flex-1 min-w-0 w-full ">
              {
                data.guests.map((item, index) => (
                  <span key={index} className="flex pb-2 items-center text-nowrap gap-2">
                    {item}
                    {index < data.guests.length - 1 && <div className="mr-2 w-1.5 h-1.5 rounded-full bg-[#FED403] " />}
                  </span>
                ))
              }
            </div>
          </div>
          <div className="flex items-center sm:max-w-72.75  py-1.25 px-9 border text-[#F4EAFD] text-[16px] leading-[100%] gap-10  bg-[#3E2C50] border-[#512A76] rounded-full">
            <div className="flex items-center gap-2">
              <Image width={16} height={16} src={'/assets/images/icon/clock.svg'} alt="Clock icon" />
              {data.time}
            </div>

            <div className="flex items-center gap-2">
              <Image width={16} height={16} src={'/assets/images/icon/calendar.svg'} alt="Clock icon" />
              {data.date}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}


import Image from "next/image"

export default function LatestPodcasts() {
  return (
    <section className="my-30 w-full">
      <div className="max-w-310 mx-auto w-full">
        <h2 className='font-bold text-[32px] font-display text-center leading-[100%] text-[#FBF4FF]'>
          უახლესი პოდკასტები
        </h2>

        <div className='flex gap-8 my-10.25'>
          <div className='flex relative
            [clip-path:path("M_0_24_Q_0_0_24_0_L_402_0_Q_426_0_426_24_L_426_39_Q_426_63_450_63_L_580_63_Q_604_63_604_87_L_604_876_Q_604_900_580_900_L_24_900_Q_0_900_0_876_Z")]
            w-full items-end gap-4 pl-6.5 pr-14 pt-9.75 pb-8 bg-linear-to-t rounded-4xl from-[#7208D580] to-[#7208d5] border border-[#37115A]'>

            <Image width={100} height={100} src={'/assets/images/podcastsImages/podcast1.svg'} alt="" className="object-cover w-87.5 h-62.25" />

            <div className="flex flex-col gap-5 w-full text-white">
              <div className="w-full flex flex-col gap-4">
                <h3 className="font-medium text-[20px] py-1.25 leading-[100%]">
                  ეპიზოდი #13
                </h3>
                <span className="flex items-center gap-1 font-medium text-[14px] leading-[100%]">
                  <Image width={19} height={19} src={'/assets/images/icon/time_icon.svg'} alt="" className="" />
                  16:56წთ
                </span>

                <div className="flex flex-col gap-2 font-sans">
                  <span className="text-[14px] font-medium leading-[100%] ">კატეგორია: </span>
                  <span className="font-bold text-[14px] leading-[100%]">განათლება</span>
                </div>
              </div>

              <button className="text-[#FED403] w-38.5 flex items-center gap-2 pr-3.25 cursor-pointer justify-end py-2.5 bg-[#000000] border border-[#3D3302] rounded-full">
                მოუსმინე
                <span className="border rounded-full w-5.5 h-5.5 flex items-center justify-center border-[#FED403]">
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.666748 0.666504L7.33341 4.6665L0.666748 8.6665V0.666504Z" fill="black" stroke="#FED403" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className='flex relative
            [clip-path:path("M_0_900_L_0_87_Q_0_63_24_63_L_154_63_Q_178_63_178_39_L_178_24_Q_178_0_202_0_L_604_0_L_604_900_Z")]
            items-end justify-center flex-row-reverse w-full gap-4 pl-13.5 pr-7 py-8 bg-linear-to-t rounded-4xl from-[#7208D580] to-[#7208d5] border border-[#37115A]'>

            <Image width={100} height={100} src={'/assets/images/podcastsImages/podcast1.svg'} alt="" className="object-cover w-87.5 h-62.25" />

            <div className="flex flex-col gap-4 w-full text-white">
              <div className="w-full flex flex-col gap-4 items-end">
                <h3 className="font-medium text-[20px] leading-[100%]">
                  ეპიზოდი #6
                </h3>
                <span className="flex items-center">
                  <Image width={19} height={19} src={'/assets/images/icon/time_icon.svg'} alt="" className="" />
                  16:56წთ
                </span>

                <div className="flex flex-col gap-2 w-full font-sans">
                  <span className="text-[14px] text-end font-medium leading-[100%] ">კატეგორია: </span>
                  <span className="font-bold text-nowrap text-[14px] leading-[100%]">სტუდენტური ცხოვრება</span>
                </div>

                <button className="text-[#FED403] w-[154px] flex  items-center gap-2 pr-3.25 cursor-pointer justify-end py-2.5 bg-[#000000] border border-[#3D3302] rounded-full">
                  მოუსმინე
                  <span className="border rounded-full w-5.5 h-5.5 flex items-center justify-center border-[#FED403]">
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.666748 0.666504L7.33341 4.6665L0.666748 8.6665V0.666504Z" fill="black" stroke="#FED403" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

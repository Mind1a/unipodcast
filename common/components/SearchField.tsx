"use client"

import CustomCalendar from "@/features/calendar/CustomCalendar";
import { MouseEvent, useState } from "react"

const TYPES_BUTTON = [
  { id: 'all', label: 'ყველა' },
  { id: 'blog', label: 'ბლოგი' },
  { id: 'article', label: 'სტატია' },
  { id: 'videos', label: 'ახალი ვიდეო' },
  { id: 'social', label: 'სოც. მედიის პოსტი' },
  { id: "announcement", label: "ანონსი" }
];

const CATEGORIES_BUTTON = [
  { id: "education", label: "განათლება", quantity: 12 },
  { id: "science", label: "მეცნიერება", quantity: 8 },
  { id: "art", label: "ხელოვნება", quantity: 5 },
  { id: "technology", label: "ტექნოლოგია", quantity: 9 },
  { id: "public", label: "საზოგადოება", quantity: 7 },
  { id: "sport", label: "სპორტი", quantity: 3 }
];

const TAGS_BUTTON = [
  { id: "interview", label: "ინტერვიუ", quantity: 14 },
  { id: "lesson", label: "ლექცია", quantity: 9 },
  { id: "discussion", label: "დისკუსია", quantity: 6 },
  { id: "research", label: "კვლევა", quantity: 4 },
  { id: "students", label: "სტუდენტები", quantity: 11 },
  { id: "professor", label: "პროფესორი", quantity: 5 },
];

const DURABILITY = [
  { id: "short", label: "მოკლე < 15წთ" },
  { id: "medium", label: "საშუალო 15 - 60წთ" },
  { id: "long", label: "გრძელი > 60წთ" }
];

const DATE_PRESETS = [
  { id: "latest", label: "უახლესი" },
  { id: "last_week", label: "ბოლო კვირა" }
];

export default function SearchField() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [selectedTypes, setSelectedTypes] = useState<string[]>(["all"])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedDurability, setSelectedDurability] = useState<string[]>([])

  const [selectedDatePreset, setSelectedDatePreset] = useState<string>("")
  const [customDate, setCustomDate] = useState<string>("")

  const [minTime, setMinTime] = useState<number>(15)
  const [maxTime, setMaxTime] = useState<number>(90)

  const minLimit = 0
  const maxLimit = 120

  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isTagOpen, setIsTagOpen] = useState(false)
  const [isDurabilityOpen, setIsDurabilityOpen] = useState(false)
  const [isDateOpen, setIsDateOpen] = useState(false)

  const [isCalendarPickerOpen, setIsCalendarPickerOpen] = useState(false)
  const activeTags = TAGS_BUTTON.filter(tag => selectedTags.includes(tag.id))

  const toggleDropdown = (type: 'category' | 'tag' | 'durability' | 'date', e?: MouseEvent<HTMLButtonElement>) => {
    // prevent propagation if event provided
    if (e) e.stopPropagation()
    setIsCategoryOpen(type === 'category' ? !isCategoryOpen : false)
    setIsTagOpen(type === 'tag' ? !isTagOpen : false)
    setIsDurabilityOpen(type === 'durability' ? !isDurabilityOpen : false)
    setIsDateOpen(type === 'date' ? !isDateOpen : false)
    if (type !== 'date') setIsCalendarPickerOpen(false)
  }

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxTime - 1)
    setMinTime(value)
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minTime + 1)
    setMaxTime(value)
  }

  const minPercent = ((minTime - minLimit) / (maxLimit - minLimit)) * 100
  const maxPercent = ((maxTime - minLimit) / (maxLimit - minLimit)) * 100



  const handleClearAll = () => {
    setSelectedTypes(["all"])
    setSelectedCategories([])
    setSelectedTags([])
    setSelectedDurability([])
    setSelectedDatePreset("")
    setCustomDate("")
    setIsCalendarPickerOpen(false)
    setMinTime(15)
    setMaxTime(90)
  }

  const handleToggleSelect = (
    id: string,
    selectedItems: string[],
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>,
    hasAllOption: boolean = false
  ) => {
    if (hasAllOption) {
      if (id === "all") {
        setSelectedItems(["all"])
        return
      }
      let updated = [...selectedItems]
      if (updated.includes("all")) updated = updated.filter(item => item !== "all")
      if (updated.includes(id)) {
        updated = updated.filter(item => item !== id)
      } else {
        updated.push(id)
      }
      if (updated.length === 0) updated = ["all"]
      setSelectedItems(updated)
    } else {
      if (selectedItems.includes(id)) {
        setSelectedItems(selectedItems.filter(item => item !== id))
      } else {
        setSelectedItems([...selectedItems, id])
      }
    }
  }

  return (
    <div className='relative w-full max-w-full'>
      <div className='relative bg-[#1E1D2E] z-40 rounded-2xl border border-[#4A4A4A] mt-6 flex items-center justify-between py-2.5 px-4 gap-2' >
        <div className="flex items-center flex-1 min-w-0">
          <svg className="shrink-0" width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="6.25" stroke="#C6C6C7" strokeWidth="1.5" />
            <rect x="12" y="12" width="7" height="1.5" transform="rotate(45 12 12)" fill="#C6C6C7" />
          </svg>
          <input className='w-full pl-2 border-none outline-none text-[#C6C6C7] bg-transparent text-sm md:text-base truncate' type="text" placeholder='მოძებნე სასურველი ეპიზოდი' />
        </div>

        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className='bg-[#6422A1] shrink-0 cursor-pointer py-2 px-3 font-bold text-[13px] md:text-[14px] leading-[100%] rounded-[10px] text-[#FFFFFF] hover:bg-[#521b85] transition-colors'
        >
          ფილტრი
        </button>
      </div>

      {isFilterOpen && (
        <div className='absolute w-full left-0 right-4 md:left-0 md:right-0 z-40 pb-6 flex flex-col justify-between top-16 rounded-2xl min-h-75 bg-[#1E1D2E] border border-[#454545] md:border-none shadow-2xl'>
          <div className="flex flex-col gap-5 items-start px-4 w-full">

            <div className="mt-6 flex items-center gap-2 text-[#FFFFFF] flex-wrap w-full">
              <span className="text-[15px] md:text-[16px] leading-[100%] font-medium mr-1">ტიპი: </span>
              <div className="flex flex-wrap gap-2">
                {TYPES_BUTTON.map(btn => {
                  const isSelected = selectedTypes.includes(btn.id)
                  return (
                    <button
                      key={btn.id}
                      onClick={() => handleToggleSelect(btn.id, selectedTypes, setSelectedTypes, true)}
                      className={`text-[13px] md:text-[15px] leading-[100%] cursor-pointer py-2.25 px-4.25 rounded-full border transition-all ${isSelected
                        ? "bg-[#3F1F66] border-[#8A2BE2]"
                        : "border-[#454545] bg-[#89878733] hover:border-gray-500"
                        }`}
                    >
                      {btn.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="w-full flex gap-2.5 md:items-center flex-wrap relative md:static">

              <div className="md:relative">
                <button
                  onClick={() => toggleDropdown('category')}
                  className={`flex w-full md:w-auto rounded-xl justify-between md:justify-start cursor-pointer items-center gap-2 text-[14px] md:text-[15px] text-[#FFFFFF] font-medium px-4 py-2.5 bg-[#89878733] border  ${isCategoryOpen ? "border-[#8A2BE2]" : "border-[#454545]"}`}
                >
                  კატეგორია
                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}>
                    <path d="M5 5L0 0H10L5 5Z" fill="#D9D9D9" />
                  </svg>
                </button>

                {isCategoryOpen && (
                  <div className="absolute top-full left-0 right-0 md:top-12 md:right-auto md:w-107.5 bg-[#1E1D2E] border border-[#8A2BE2] p-4 flex flex-col gap-3.5 rounded-xl z-[60] shadow-xl" onClick={(e) => e.stopPropagation()}>
                    <span className="text-[#FFFFFF] text-sm font-medium">კატეგორია - აირჩიე რამდენიმე</span>
                    <div className="flex flex-wrap gap-2 max-h-45 overflow-y-auto pr-1">
                      {CATEGORIES_BUTTON.map(category => {
                        const isSelected = selectedCategories.includes(category.id)
                        return (
                          <button
                            key={category.id}
                            onClick={() => handleToggleSelect(category.id, selectedCategories, setSelectedCategories)}
                            className={`py-2 px-3.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${isSelected ? "bg-[#3F1F66] border-[#8A2BE2] text-white" : "border-[#454545] bg-[#89878733] text-gray-300 hover:border-gray-500"}`}
                          >
                            {category.label} <span className="mx-1 opacity-50">•</span> {category.quantity}
                          </button>
                        )
                      })}
                    </div>
                    <div className="flex items-center justify-between  ">
                      <button onClick={() => setSelectedCategories([])} className="text-[#C6C6C7] cursor-pointer text-[13px] hover:text-white">გასუფთავება</button>
                      <button onClick={() => setIsCategoryOpen(false)} className="py-2 cursor-pointer px-3.5 bg-[#6422A1] rounded-xl text-[#FFFFFF] text-[13px] font-bold hover:bg-[#521b85]">ჩვენება</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="md:relative">
                <button
                  onClick={(e) => toggleDropdown('tag', e)}
                  className={`flex w-full md:w-auto rounded-xl justify-between md:justify-start cursor-pointer items-center gap-2 text-[14px] md:text-[15px] text-[#FFFFFF] font-medium px-4 py-2.5 bg-[#89878733] border  ${isTagOpen ? "border-[#8A2BE2]" : "border-[#454545]"}`}
                >
                  თეგები
                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isTagOpen ? "rotate-180" : ""}`}>
                    <path d="M5 5L0 0H10L5 5Z" fill="#D9D9D9" />
                  </svg>
                </button>

                {isTagOpen && (
                  <div className="absolute top-full left-0 right-0 md:top-12 md:right-auto md:w-107.5 bg-[#1E1D2E] border border-[#8A2BE2] p-4 flex flex-col gap-3.5 rounded-xl z-60 shadow-xl" onClick={(e) => e.stopPropagation()}>
                    <input type="text" className="border outline-none rounded-[10px] border-[#454545] bg-[#89878733] text-[#C6C6C7] px-4 py-2 text-sm" placeholder="მოძებნე თეგი..." />
                    <div className="flex flex-wrap gap-2 max-h-45 overflow-y-auto pr-1">
                      {TAGS_BUTTON.map(tag => {
                        const isSelected = selectedTags.includes(tag.id)
                        return (
                          <button
                            key={tag.id}
                            onClick={() => handleToggleSelect(tag.id, selectedTags, setSelectedTags)}
                            className={`py-2 px-3.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${isSelected ? "bg-[#3F1F66] border-[#8A2BE2] text-white" : "border-[#454545] bg-[#89878733] text-gray-300 hover:border-gray-500"}`}
                          >
                            #{tag.label} <span className="mx-1 opacity-50">•</span> {tag.quantity}
                          </button>
                        )
                      })}
                    </div>
                    <div className="flex items-center justify-between  ">
                      <button onClick={() => setSelectedTags([])} className="text-[#C6C6C7] cursor-pointer text-[13px] hover:text-white">გასუფთავება</button>
                      <button onClick={() => setIsTagOpen(false)} className="py-2 cursor-pointer px-3.5 bg-[#6422A1] rounded-xl text-[#FFFFFF] text-[13px] font-bold hover:bg-[#521b85]">ჩვენება</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="md:relative">
                <button
                  onClick={(e) => toggleDropdown('durability', e)}
                  className={`flex w-full md:w-auto rounded-xl justify-between md:justify-start cursor-pointer items-center gap-2 text-[14px] md:text-[15px] text-[#FFFFFF] font-medium px-4 py-2.5 bg-[#89878733] border  ${isDurabilityOpen ? "border-[#8A2BE2]" : "border-[#454545]"}`}
                >
                  ხანგრძლივობა
                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isDurabilityOpen ? "rotate-180" : ""}`}>
                    <path d="M5 5L0 0H10L5 5Z" fill="#D9D9D9" />
                  </svg>
                </button>

                {isDurabilityOpen && (
                  <div className="absolute top-full left-0 right-0 md:top-12 md:left-auto md:right-0 md:w-107.5 bg-[#1E1D2E] border border-[#8A2BE2] p-4 flex flex-col gap-4 rounded-xl z-60 shadow-xl" onClick={(e) => e.stopPropagation()}>
                    <span className="text-[#FFFFFF] text-sm font-medium">ხანგრძლივობა - აირჩიე სასურველი</span>
                    <div className="flex flex-wrap gap-2">
                      {DURABILITY.map(durability => {
                        const isSelected = selectedDurability.includes(durability.id)
                        return (
                          <button
                            key={durability.id}
                            onClick={() => handleToggleSelect(durability.id, selectedDurability, setSelectedDurability)}
                            className={`py-2 px-3.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${isSelected ? "bg-[#3F1F66] border-[#8A2BE2] text-white" : "border-[#454545] bg-[#89878733] text-gray-300 hover:border-gray-500"}`}
                          >
                            {durability.label}
                          </button>
                        )
                      })}
                    </div>

                    <div className="flex flex-col gap-3 mt-2 px-1">
                      <div className="relative w-full h-5 flex items-center">
                        <div
                          className="absolute h-1.25 w-full rounded-full"
                          style={{
                            background: `linear-gradient(to right, #454545 ${minPercent}%, #8A2BE2 ${minPercent}%, #8A2BE2 ${maxPercent}%, #454545 ${maxPercent}%)`
                          }}
                        />
                        <input
                          type="range"
                          min={minLimit}
                          max={maxLimit}
                          value={minTime}
                          onChange={handleMinChange}
                          className="absolute w-full h-5 appearance-none bg-transparent pointer-events-none z-20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#8A2BE2] [&::-webkit-slider-thumb]:cursor-pointer"
                        />
                        <input
                          type="range"
                          min={minLimit}
                          max={maxLimit}
                          value={maxTime}
                          onChange={handleMaxChange}
                          className="absolute w-full h-5 appearance-none bg-transparent pointer-events-none z-20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#8A2BE2] [&::-webkit-slider-thumb]:cursor-pointer"
                        />
                      </div>
                      <div className="text-[#C6C6C7] text-[12px] md:text-[13px] font-medium flex justify-between">
                        <span className="text-white font-semibold">{minTime} - {maxTime} წთ</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between  ">
                      <button
                        onClick={() => {
                          setSelectedDurability([]);
                          setMinTime(15);
                          setMaxTime(90);
                        }}
                        className="text-[#C6C6C7] cursor-pointer text-[13px] hover:text-white"
                      >
                        გასუფთავება
                      </button>
                      <button onClick={() => setIsDurabilityOpen(false)} className="py-2 cursor-pointer px-3.5 bg-[#6422A1] rounded-xl text-[#FFFFFF] text-[13px] font-bold hover:bg-[#521b85]">ჩვენება</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="md:relative">
                <button
                  onClick={(e) => toggleDropdown('date', e)}
                  className="flex w-full md:w-auto rounded-xl justify-between md:justify-start cursor-pointer items-center gap-2 text-[14px] md:text-[15px] text-[#FFFFFF] font-medium px-3.5 py-2.5 bg-[#89878733] border border-[#454545]/40"
                >
                  თარიღი
                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isDateOpen ? "rotate-180" : ""}`}>
                    <path d="M5 5L0 0H10L5 5Z" fill="#D9D9D9" />
                  </svg>
                </button>

                {isDateOpen && (
                  <div className="absolute top-full left-0 right-0 md:top-12 md:left-auto md:right-0 md:w-90 xl:left-0 xl:right-auto bg-[#1E1D2E] border border-[#8A2BE2] p-4 flex flex-col gap-4 rounded-xl z-60 shadow-xl" onClick={(e) => e.stopPropagation()}>
                    <div
                      onClick={() => setIsCalendarPickerOpen(!isCalendarPickerOpen)}
                      className="relative flex items-center justify-between border rounded-xl border-[#454545] bg-[#89878733] px-4 py-2.5 cursor-pointer group hover:border-gray-500 transition-colors"
                    >
                      <span className={`text-[14px] ${customDate ? 'text-white font-medium' : 'text-[#C6C6C7]'}`}>
                        {customDate ? customDate : "თარიღიდან"}
                      </span>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C6C6C7]">
                        <path d="M6.66667 1.66666V4.16666M13.3333 1.66666V4.16666M2.5 7.5H17.5M4.16667 3.33333H15.8333C16.7538 3.33333 17.5 4.07952 17.5 5V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V5C2.5 4.07952 3.24619 3.33333 4.16667 3.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>

                    {isCalendarPickerOpen && (
                      <div className="absolute top-13.75 left-0 right-0 md:top-0 md:left-[375px] md:right-auto z-[70] bg-[#1E1D2E] rounded-xl shadow-2xl">
                        <CustomCalendar
                          onSelectDate={(date) => {
                            setCustomDate(date);
                            setSelectedDatePreset("");
                          }}
                          onClose={() => setIsCalendarPickerOpen(false)}
                        />
                      </div>
                    )}

                    <div className="flex gap-2">
                      {DATE_PRESETS.map(preset => {
                        const isSelected = selectedDatePreset === preset.id
                        return (
                          <button
                            key={preset.id}
                            onClick={() => {
                              setSelectedDatePreset(isSelected ? "" : preset.id);
                              setCustomDate("");
                              setIsCalendarPickerOpen(false);
                            }}
                            className={`text-[13px] md:text-[14px] cursor-pointer py-2 px-3.5 rounded-full border transition-all ${isSelected
                              ? "bg-[#3F1F66] border-[#8A2BE2] text-white"
                              : "border-[#454545] bg-[#89878733] text-gray-300 hover:border-gray-500"
                              }`}
                          >
                            {preset.label}
                          </button>
                        )
                      })}
                    </div>

                    <div className="flex items-center justify-between  ">
                      <button
                        onClick={() => {
                          setSelectedDatePreset("");
                          setCustomDate("");
                          setIsCalendarPickerOpen(false);
                        }}
                        className="text-[#C6C6C7] cursor-pointer text-[13px] hover:text-white"
                      >
                        გასუფთავება
                      </button>
                      <button
                        onClick={() => setIsDateOpen(false)}
                        className="py-2 cursor-pointer px-3.5 bg-[#6422A1] rounded-xl text-[#FFFFFF] text-[13px] font-bold hover:bg-[#521b85]"
                      >
                        ჩვენება
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {
              activeTags.length > 0 && (
                <div className="flex items-center gap-2.25">
                  <span className="text-[14px] text-[#C6C6C7] leading-[100%]">აქტიური: </span>
                  {
                    activeTags.map(tag => {
                      return (
                        <div key={tag.id} className="py-1.5 px-3.5 border border-[#8A2BE2] bg-[#8A2BE22E] rounded-full flex items-center gap-2">
                          <span className="text-[#FFFFFF] text-[14px] leading-[100%]">
                            {tag.label}
                          </span>
                          <button onClick={() => {
                            const filteredTags = selectedTags.filter(id => id !== tag.id)
                            setSelectedTags(filteredTags)
                          }} className="bg-transparent cursor-pointer border-none outline-none">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.75 6.86683L3.80842 3.80842L6.86683 6.86683M6.86683 0.75L3.80783 3.80842L0.75 0.75" stroke="#C6C6C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      )
                    })
                  }

                  <button onClick={() => {
                    setSelectedTags([])
                  }} className="text-[#FFFFFF] cursor-pointer bg-transparent border-none outline-none text-[16px] ">
                    გასუფთავება
                  </button>
                </div>
              )
            }
          </div>


          <div className="px-4 mt-8 flex items-center justify-between text-[#FFFFFF] text-sm md:text-base">
            <span className="text-gray-300 text-[14px]">ნაპოვნია: 24 ეპიზოდი</span>
            <button onClick={handleClearAll} className="flex items-center gap-1.5 font-normal cursor-pointer text-gray-300 hover:text-white text-[14px]">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12C7.59333 12 9.12 11.3733 10.2667 10.2667L9.26667 9.26667C8.84695 9.71115 8.34047 10.0647 7.77857 10.3056C7.21667 10.5464 6.61132 10.6693 6 10.6667C1.84 10.6667 -0.24 5.64 2.7 2.7C5.64 -0.24 10.6667 1.84667 10.6667 6H8.66667L11.3333 8.66667H11.4L14 6H12C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6Z" fill="currentColor" />
              </svg>
              გასუფთავება
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

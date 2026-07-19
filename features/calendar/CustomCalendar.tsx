"use client"

import { useState } from "react";

interface CustomCalendarProps {
  onSelectDate: (dateString: string) => void;
  onClose: () => void;
}

const MONTHS_GEO = [
  "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
  "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
];

const WEEKDAYS_GEO = ["ორ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ", "კვი"];

export default function CustomCalendar({ onSelectDate, onClose }: CustomCalendarProps) {
  // საწყისად ვაყენებთ სურათზე არსებულ თარიღს (აპრილი, 2026)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2026, 3, 27)); // სურათზე 27 აპრილია მონიშნული

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // თვის პირველი დღე და კვირის რომელი დღეა (0 = კვირა, 1 = ორშაბათი...)
  const firstDayOfMonth = new Date(year, month, 1);
  let startDayOfWeek = firstDayOfMonth.getDay();
  // გადავიყვანოთ ქართულ ფორმატზე (სადაც ორშაბათია 0 და კვირა 6)
  startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const daysArray = [];

  // 1. წინა თვის ბოლო დღეები (ნაცრისფერი)
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    daysArray.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      date: new Date(year, month - 1, daysInPrevMonth - i)
    });
  }

  // 2. მიმდინარე თვის დღეები
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push({
      day: i,
      isCurrentMonth: true,
      date: new Date(year, month, i)
    });
  }

  // 3. შემდეგი თვის პირველი დღეები (ბადის შესავსებად 42 უჯრამდე)
  const remainingCells = 42 - daysArray.length;
  for (let i = 1; i <= remainingCells; i++) {
    daysArray.push({
      day: i,
      isCurrentMonth: false,
      date: new Date(year, month + 1, i)
    });
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate(new Date(year, parseInt(e.target.value), 1));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate(new Date(parseInt(e.target.value), month, 1));
  };

  const handleSave = () => {
    if (selectedDate) {
      const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
      onSelectDate(formattedDate);
    }
    onClose();
  };

  return (
    <div className="w-[340px] bg-[#2D1B4E] border border-[#3D256A] rounded-[24px] p-5 flex flex-col items-center select-none shadow-2xl">

      {/* თვის და წლის სელექტორები */}
      <div className="flex gap-4 mb-5 text-white text-[16px] font-medium">
        <div className="relative flex items-center gap-1 group">
          <select
            value={month}
            onChange={handleMonthChange}
            className="bg-transparent cursor-pointer appearance-none outline-none pr-4 text-white font-semibold"
          >
            {MONTHS_GEO.map((m, idx) => (
              <option key={m} value={idx} className="bg-[#2D1B4E] text-white">{m}</option>
            ))}
          </select>
          <svg className="absolute right-0 pointer-events-none w-3 h-3 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="relative flex items-center gap-1 group">
          <select
            value={year}
            onChange={handleYearChange}
            className="bg-transparent cursor-pointer appearance-none outline-none pr-4 text-white font-semibold"
          >
            {[2024, 2025, 2026, 2027, 2028].map(y => (
              <option key={y} value={y} className="bg-[#2D1B4E] text-white">{y}</option>
            ))}
          </select>
          <svg className="absolute right-0 pointer-events-none w-3 h-3 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* კვირის დღეები */}
      <div className="grid grid-cols-7 w-full gap-y-2 text-center text-[14px] text-gray-300 mb-3">
        {WEEKDAYS_GEO.map(day => (
          <span key={day} className="font-medium opacity-90">{day}</span>
        ))}
      </div>

      {/* კალენდრის ბადე */}
      <div className="grid grid-cols-7 w-full gap-y-2 gap-x-1 text-center justify-items-center mb-6">
        {daysArray.map((cell, index) => {
          const isSelected = selectedDate &&
            cell.date.getDate() === selectedDate.getDate() &&
            cell.date.getMonth() === selectedDate.getMonth() &&
            cell.date.getFullYear() === selectedDate.getFullYear();

          // სურათზე მე-2 დღეს აქვს ღია იასამნისფერი background (მაგალითად hover/current ეფექტი)
          const isSpecialDay = cell.isCurrentMonth && cell.day === 2 && !isSelected;

          return (
            <div
              key={index}
              onClick={() => cell.isCurrentMonth && setSelectedDate(cell.date)}
              className={`
                w-9 h-9 flex items-center justify-center rounded-full text-[14px] font-medium transition-all duration-150
                ${cell.isCurrentMonth ? 'text-white cursor-pointer' : 'text-gray-600 pointer-events-none'}
                ${isSelected ? 'bg-[#6A1B9A] !text-white shadow-md font-bold' : ''}
                ${isSpecialDay ? 'bg-[#7E6E9E]/40 text-white font-medium' : ''}
                ${cell.isCurrentMonth && !isSelected && !isSpecialDay ? 'hover:bg-white/10' : ''}
              `}
            >
              {cell.day}
            </div>
          );
        })}
      </div>

      {/* მოქმედების ღილაკები */}
      <div className="grid grid-cols-2 gap-3 w-full">
        <button
          onClick={onClose}
          className="py-2.5 rounded-[12px] bg-[#F1F0F5] text-[#6A1B9A] text-[15px] font-semibold cursor-pointer active:scale-[0.98] transition-all text-center"
        >
          დაბრუნდი
        </button>
        <button
          onClick={handleSave}
          className="py-2.5 rounded-[12px] bg-[#6A1B9A] text-white text-[15px] font-semibold cursor-pointer active:scale-[0.98] transition-all text-center shadow-lg hover:bg-[#591483]"
        >
          დამატე
        </button>
      </div>

    </div>
  );
}

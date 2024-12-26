import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = ({ selectedStartDate, selectedEndDate, onDateSelect, isRange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const isSelected = (day) => {
    const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (!isRange) {
      if (!selectedStartDate) return false;
      return currentDate.getTime() === selectedStartDate.getTime();
    }

    if (!selectedStartDate || !selectedEndDate) return false;
    return currentDate >= selectedStartDate && currentDate <= selectedEndDate;
  };

  const isStartDate = (day) => {
    if (!selectedStartDate) return false;
    const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return currentDate.getTime() === selectedStartDate.getTime();
  };

  const isEndDate = (day) => {
    if (!selectedEndDate) return false;
    const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return currentDate.getTime() === selectedEndDate.getTime();
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onDateSelect(clickedDate);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h3 className="text-lg font-medium">{monthName}</h3>
        <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-sm font-medium text-gray-400">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {blanks.map((blank) => (
          <div key={`blank-${blank}`} className="h-10" />
        ))}
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleDateClick(day)}
            className={`h-10 rounded-full flex items-center justify-center transition-colors relative
              ${isSelected(day) 
                ? 'bg-orange-500 text-white' 
                : 'hover:bg-orange-100 text-gray-700'}
              ${isStartDate(day) && isRange ? 'rounded-r-none' : ''}
              ${isEndDate(day) && isRange ? 'rounded-l-none' : ''}
              ${isSelected(day) && !isStartDate(day) && !isEndDate(day) && isRange ? 'rounded-none bg-orange-100 text-orange-500' : ''}`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const DateTypeSelector = ({ dateType, onChange }) => {
  return (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={() => onChange('single')}
        className={`px-4 py-2 rounded-xl transition-colors ${
          dateType === 'single' 
            ? 'bg-orange-500 text-white' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Single Date
      </button>
      <button
        onClick={() => onChange('range')}
        className={`px-4 py-2 rounded-xl transition-colors ${
          dateType === 'range' 
            ? 'bg-orange-500 text-white' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Date Range
      </button>
    </div>
  );
};

const GuestSlider = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="text-orange-500">Number of guests</label>
      <div className="relative">
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <div className="mt-2">
          <span className="text-sm text-gray-600">Guests: {value}</span>
        </div>
      </div>
    </div>
  );
};

const Step2EventDetails = ({ formData, onNext, onPrev }) => {
  const [dateType, setDateType] = useState(formData?.dateType || 'single');
  const [startDate, setStartDate] = useState(formData?.startDate ? new Date(formData.startDate) : null);
  const [endDate, setEndDate] = useState(formData?.endDate ? new Date(formData.endDate) : null);
  const [guestCount, setGuestCount] = useState(formData?.guestCount || 45);

  const handleDateSelect = (date) => {
    if (dateType === 'single') {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (!startDate || (startDate && endDate)) {
        setStartDate(date);
        setEndDate(null);
      } else {
        if (date < startDate) {
          setEndDate(startDate);
          setStartDate(date);
        } else {
          setEndDate(date);
        }
      }
    }
  };

  const handleDateTypeChange = (type) => {
    setDateType(type);
    setStartDate(null);
    setEndDate(null);
  };

  const getSelectedDatesText = () => {
    if (!startDate) return 'No date selected';
    if (dateType === 'single') return startDate.toLocaleDateString();
    if (!endDate) return `Start: ${startDate.toLocaleDateString()}`;
    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-[#1D1B20]">What is Event date?</h3>
        <p className="text-orange-500 mt-1">Please select the event date this event is happening.</p>
      </div>
      
      <DateTypeSelector dateType={dateType} onChange={handleDateTypeChange} />
      
      <div className="text-sm text-gray-600 mb-4">
        {getSelectedDatesText()}
      </div>

      <Calendar 
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        onDateSelect={handleDateSelect}
        isRange={dateType === 'range'}
      />
      
      <div className="mt-8">
        <GuestSlider value={guestCount} onChange={setGuestCount} />
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onPrev}
          className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-50 transition duration-300"
        >
          Previous step
        </button>
        <button
          onClick={() => onNext({ 
            dateType,
            startDate,
            endDate,
            guestCount
          })}
          className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition duration-300"
          disabled={!startDate || (dateType === 'range' && !endDate)}
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default Step2EventDetails;


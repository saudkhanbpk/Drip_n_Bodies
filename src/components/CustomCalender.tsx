import React, { useState } from 'react';

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const handleShowCalendar = () => {
    // Get the calendar for the given year and month
    const cal = getMonthCalendar(year, month);
    console.log(cal);
  };

  const getMonthCalendar = (year, month) => {
    const cal = [];
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(0);
        } else if (day <= daysInMonth) {
          week.push(day);
          day++;
        } else {
          week.push(0);
        }
      }
      cal.push(week);
    }

    return cal;
  };

  return (
    <div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="number" id="year" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
      </div>
      <div>
        <label htmlFor="month">Month:</label>
        <input type="number" id="month" value={month} onChange={(e) => setMonth(parseInt(e.target.value))} />
      </div>
      <button onClick={handleShowCalendar}>Show Calendar</button>

      {/* Display Calendar */}
      {/* You can display the calendar here using the cal array generated from getMonthCalendar */}
    </div>
  );
};

export default Calendar;

import React from "react";
import "./style.css";

const GroupClassSchedule = () => {
  const scheduleData = Array(10).fill({
    date: "2/1",
    day: "Saturday",
    time: "10:00 am - 11:00 am",
    sport: "Track & Field",
    location: "Holy Family",
  });

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">GROUP CLASS SCHEDULE</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Time</th>
            <th>Sports</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.day}</td>
              <td>{entry.time}</td>
              <td>{entry.sport}</td>
              <td>{entry.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupClassSchedule;

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./style.css"; // Import the CSS file

const DropdownFilter = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("AM");
  const [selectedHours, setSelectedHours] = useState([]);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleCheckboxChange = (option, setSelected) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="dropdown-filter-container">
      {/* Filter By Button */}
      <div className="filter-dropdown">
        <div className="filter-header" onClick={() => toggleDropdown("filter")}>
          <span>Filter By</span> <FaChevronDown />
        </div>

        {/* Main Dropdown Menu */}
        {openDropdown === "filter" && (
          <div className="filter-options">
            <div className="filter-option" onClick={() => toggleDropdown("location")}>
              <span>Location</span> 
            </div>
            <div className="filter-option" onClick={() => toggleDropdown("weekday")}>
              <span>Weekday</span> 
            </div>
            <div className="filter-option" onClick={() => toggleDropdown("time")}>
              <span>Time</span> 
            </div>
          </div>
        )}

        {/* Location Dropdown */}
        {openDropdown === "location" && (
          <div className="dropdown-content left-dropdown">
            {["New York", "New Jersey", "Manhattan", "Queens"].map((location) => (
              <label key={location} className="dropdown-item">
              {location}
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleCheckboxChange(location, setSelectedLocations)}
                />
                
              </label>
            ))}
          </div>
        )}

        {/* Weekday Dropdown */}
        {openDropdown === "weekday" && (
          <div className="dropdown-content left-dropdown">
            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
              (day) => (
                <label key={day} className="dropdown-item">
                {day}
                  <input
                    type="checkbox"
                    checked={selectedWeekdays.includes(day)}
                    onChange={() => handleCheckboxChange(day, setSelectedWeekdays)}
                  />
                  
                </label>
              )
            )}
          </div>
        )}

        {/* Time Dropdown */}
        {openDropdown === "time" && (
          <div className="dropdown-content left-dropdown">
            {/* AM/PM Selection as Small Buttons */}
            <div className="time-period">
              <button
                className={selectedTimePeriod === "AM" ? "btn-selected" : ""}
                onClick={() => setSelectedTimePeriod("AM")}
              >
                AM
              </button>
              <button
                className={selectedTimePeriod === "PM" ? "btn-selected" : ""}
                onClick={() => setSelectedTimePeriod("PM")}
              >
                PM
              </button>
            </div>

            {/* Hour Selection */}
            <div className="hour-selection">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                <label key={hour} className="dropdown-item">
                {hour}
                  <input
                    type="checkbox"
                    checked={selectedHours.includes(hour)}
                    onChange={() => handleCheckboxChange(hour, setSelectedHours)}
                  />
                  
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownFilter;

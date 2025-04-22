import React from "react";
import "./style.css";

const ScheduleComponent = () => {
  return (
    <div className="schedule-wrapper">
      <h2 className="schedule-heading">
        Locations: Indoors and outdoors Holy Family and Jumpshotz
      </h2>
      <div className="schedule-main-table">
        <div className="schedule-main-header">
          <div className="schedule-thursday">EVERY THURSDAY</div>
          <div className="schedule-saturday">EVERY SATURDAY</div>
          <div className="schedule-sunday">EVERY SUNDAY</div>
        </div>
        <div className="schedule-main-body">
          <div className="schedule-thursday-body">
            <p>
              <strong>Bowling – 3:45pm–4:45pm</strong>
            </p>
          </div>
          <div className="schedule-saturday-body">
            <p>
              <strong>
                Ages: 12 and under
                <br />
                Track & Field 12:00–12:45PM
                <br />
                Football 12:45–1:30PM
              </strong>
            </p>
            <br />
            <p>
              <strong>
                Ages: 13 and up
                <br />
                Track & Field 1:30–2:15PM
                <br />
                Football 2:15 – 3:00PM
              </strong>
            </p>
          </div>
          <div className="schedule-sunday-body">
            <p>
              <strong>
                Ages: 12 and under
                <br />
                Track & Field 12:00–12:45PM
                <br />
                Football 12:45–1:30PM
              </strong>
            </p>
            <br />
            <p>
              <strong>
                Ages: 13 and up
                <br />
                Track & Field 1:30–2:15PM
                <br />
                Football 2:15 – 3:00PM
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponent;

import React from "react";
import { connect } from "react-redux";
import { CHANGE_MONTH } from "../../actions/calendarActions";
import { MONTH_LIST } from "../../constants/constants";
import "./Calendar.css";

function Calendar(props) {
  const changeMonth = (arrow) => {
    let selectedMonth;
    let selectedYear;
    if (arrow === "LEFT") {
      if (props.selectedMonth === 0) {
        selectedMonth = 11;
        selectedYear = props.selectedYear - 1;
      } else {
        selectedMonth = props.selectedMonth - 1;
        selectedYear = props.selectedYear;
      }
    } else if (arrow === "RIGHT") {
      if (props.selectedMonth === 11) {
        selectedMonth = 0;
        selectedYear = props.selectedYear + 1;
      } else {
        selectedMonth = props.selectedMonth + 1;
        selectedYear = props.selectedYear;
      }
    } else {
      selectedMonth = props.selectedMonth + 1;
      selectedYear = props.selectedYear;
    }

    props.dispatch({
      type: CHANGE_MONTH,
      payload: {
        selectedYear,
        selectedMonth,
      },
    });
  };

  return (
    <div className="calendar_container">
      <div className="calendar_inner_container">
        <h2>Calendar</h2>
        <div id="calendar-display">
          <div className="month-header">
            <div className="left-arrow" onClick={() => changeMonth("LEFT")}>
              {" "}
              {"<"}{" "}
            </div>
            <div id="month">
              {MONTH_LIST[props.selectedMonth]},{props.selectedYear}
            </div>
            <div className="right-arrow" onClick={() => changeMonth("RIGHT")}>
              {">"}
            </div>
          </div>

          <div className="calendar-container-child">
            <div>Sunday</div>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
          </div>
          <div className="calendar-container-child">
            {props.days.map((item, index) => (
              <div key={item + index}> {item} </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    startDay: state.startDay,
    endDay: state.endDay,
    selectedMonth: state.selectedMonth,
    selectedYear: state.selectedYear,
    days: state.days,
  };
};

export default connect(mapStateToProps)(Calendar);

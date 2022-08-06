import {
  selectedMonth,
  selectedYear,
  monthDays,
  daysInMonth,
} from "../utils/dateUtil";
import { getDays } from "../utils/calendarUtil";
import { CHANGE_MONTH } from "../actions/calendarActions";

const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);

const endDay = daysInMonth(selectedMonth, selectedYear);

const initialState = {
  startDay,
  endDay,
  selectedMonth,
  selectedYear,
  days: getDays(startDay, endDay),
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MONTH:
      const { selectedMonth, selectedYear } = action.payload;
      const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
      const endDay = daysInMonth(selectedMonth, selectedYear);
      const days = getDays(startDay, endDay);

      return { ...state, selectedMonth, selectedYear, days };
    default:
      return state;
  }
};

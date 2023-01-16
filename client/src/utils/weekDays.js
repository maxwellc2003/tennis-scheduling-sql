import moment from "moment";

export default function (date) {
  const days = [];

  let monday = moment(date.startOf("isoweek"));
  let tuesday = moment(monday).add(1, "days");
  let wednesday = moment(monday).add(2, "days");
  let thursday = moment(monday).add(3, "days");
  let friday = moment(monday).add(4, "days");
  let saturday = moment(monday).add(5, "days");
  let sunday = moment(date.endOf("isoweek"));

  days.push(monday.format("MM/DD/YY"));
  days.push(tuesday.format("MM/DD/YY"));
  days.push(wednesday.format("MM/DD/YY"));
  days.push(thursday.format("MM/DD/YY"));
  days.push(friday.format("MM/DD/YY"));
  days.push(saturday.format("MM/DD/YY"));
  days.push(sunday.format("MM/DD/YY"));

  return days;
}

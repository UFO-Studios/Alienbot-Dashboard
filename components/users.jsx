import React from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryLabel,
  VictoryScatter,
} from "victory";
import moment from "moment";

const Users = () => {
  const prev = [
    { x: "2020-01", y: 1.1235 },
    { x: "2020-02", y: 4.32332 },
    { x: "2020-03", y: 3.87543 },
    { x: "2020-04", y: 1.1251 },
    { x: "2020-05", y: 2.123241 },
    { x: "2020-06", y: 3.5231 },
  ];

  const curr = [
    { x: "2020-03", y: 4.54332 },
    { x: "2020-04", y: 2.125642 },
    { x: "2020-05", y: 3.12451 },
    { x: "2020-06", y: 3.1234 },
  ];

  const xAxisLabelFormatter = (tick, index, ticks) => {
    console.log(ticks);
    const [year, month] = tick.split("-");
    return moment()
      .year(year)
      .month(month - 1)
      .format("MMM YYYY");
  };

  const tickValues = [
    "2020-01",
    "2020-02",
    "2020-03",
    "2020-04",
    "2020-05",
    "2020-06",
  ];

  return (
    <div className="App">
      <VictoryChart>
        <VictoryAxis
          tickValues={tickValues}
          tickFormat={xAxisLabelFormatter}
          tickLabelComponent={<VictoryLabel angle={315} />}
        />
        <VictoryAxis dependentAxis />

        <VictoryLine data={curr} style={{ data: { stroke: "red" } }} />
        <VictoryScatter size={5} data={curr} />

        <VictoryLine data={prev} style={{ data: { stroke: "blue" } }} />
        <VictoryScatter size={5} data={prev} />
      </VictoryChart>
    </div>
  );
};
export default Users;

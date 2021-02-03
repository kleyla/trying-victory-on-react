import React from "react";
import { VictoryChart, VictoryLine, VictoryScatter } from "victory";

export const Chart = ({ data }) => {
  return (
    <VictoryChart polar={false} width={1000}>
      <VictoryLine
        interpolation="linear"
        data={data}
        style={{ data: { stroke: "#c43a31" } }}
      />
      <VictoryScatter
        data={data}
        size={3}
        style={{ data: { fill: "#c43a31" } }}
      />
    </VictoryChart>
  );
};

import React, { Fragment, useState, useEffect } from "react";
import styles from "../../styles/expensechart.module.scss";
import Card from "../Card";
import Logo from "../Logo";

// we could get the chart data in the chart component
// but in a real scenario, the balance and totals would
// likely come in the same API call, so getting it here
// Only one level to drill props, so ok.

import data from "../../data/data.json";
import Chart from "./Chart";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseHeader from "./ExpenseHeader";

const ExpenseChart = () => {
  const [chartData, setChartData] = useState(data);

  return (
    <div>
      <ExpenseHeader balance={921.48} />
      <Card>
        <h2>Spending - Last 7 days</h2>
        <Chart chartData={chartData} />
        <ExpenseSummary total={478.33} change={2.4} />
      </Card>
    </div>
  );
};

export default ExpenseChart;





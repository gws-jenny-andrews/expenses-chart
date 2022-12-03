import React from "react";
import styles from "../../styles/expensechart.module.scss";

const ExpenseSummary = ({ total, change }) => {
  return (
    <div className={styles.spendingSummary}>
      <div className="thisMonth">
        <div>Total this month</div>
        <div>${total}</div>
      </div>
      <div className={styles.change}>
        <div>+{change}%</div>
        <div>from last month</div>
      </div>
    </div>
  );
};

export default ExpenseSummary;

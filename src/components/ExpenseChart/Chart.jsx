import React, { Fragment, useState, useEffect } from "react";
import styles from "../../styles/expensechart.module.scss";

const Chart = ({ chartData }) => {
  const [highestAmount, setHighestAmount] = useState();

  useEffect(() => {
    if(chartData.length > 0) {
      // https://stackoverflow.com/a/52916675/3482632
      const maxAmount = chartData.reduce((p, c) => (p.amount > c.amount ? p : c));
      setHighestAmount(maxAmount);
    }
    return () => {
      setHighestAmount(undefined);
    };
  }, [chartData]);

  return (
    <div className={styles.chart}>
      { chartData?.length === 0 ? 
      <div>
        Loading
      </div> 
      : 
      <>
      {chartData &&
        chartData.map((day, index) => (
          <Fragment key={index}>
            {highestAmount && (
              <div
                className={`${styles.amount} ${
                  highestAmount.day === day.day ? `${styles.current}` : ""
                }`}
                style={{
                  height: `${(day.amount / highestAmount.amount) * 100}%`,
                }}
              ></div>
            )}
            <div className="day">{day.day}</div>
          </Fragment>
        ))}
        </>
        }
    </div>
  );
};

export default Chart;

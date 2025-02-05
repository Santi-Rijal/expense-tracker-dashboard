"use client";

import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import styles from "./MonthlyExpense.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{ label: "Expense ($)", data: [65, 59, 80, 81, 56, 55, 40] }],
};

const MonthlyExpense = () => {
  return (
    <div className={styles.monthlyExpenseContainer}>
      <h3>Monthly Expense</h3>
      <Line
        data={data}
        options={{
          responsive: true,
          borderColor: "rgba(255, 99, 132, 0.5)",
          hoverBorderColor: "rgba(255, 99, 132, 1)",
        }}
      />
    </div>
  );
};

export default MonthlyExpense;

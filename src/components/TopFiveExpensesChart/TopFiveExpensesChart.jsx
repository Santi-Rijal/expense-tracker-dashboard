"use client";

import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import styles from "./TopFiveExpensesChart.module.css";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Rent", "Groceries", "Transport", "Entertainment", "Utilities"],
  datasets: [
    {
      label: "Expense ($)",
      data: [800, 300, 100, 150, 120],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"],
      borderWidth: 1,
    },
  ],
};

const TopFiveExpensesChart = () => {
  return (
    <div className={styles.topFiveContainer}>
      <h3>Top 5 Expense Sources</h3>
      <Bar data={data} options={{ borderColor: "#fff", responsive: true }} />
    </div>
  );
};

export default TopFiveExpensesChart;

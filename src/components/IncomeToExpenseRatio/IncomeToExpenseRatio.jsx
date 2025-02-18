"use client";

import React from "react";

import styles from "./IncomeToExpenseRatio.module.css";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

import { FaArrowTrendUp } from "react-icons/fa6";
import Card from "../Card/Card";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Expenses", "Income"],
  datasets: [
    {
      label: "dollars",
      data: [500, 1026],
      backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(75, 192, 192, 0.5)"],
      borderWidth: 1,
    },
  ],
};

const IncomeToExpenseRatio = () => {
  return (
    <Card title="Income V.S. Expense">
      <div className={styles.chartContainer}>
        <PolarArea
          data={data}
          options={{
            hoverBackgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            responsive: true,
          }}
        />

        <div className={styles.trendDataContainer}>
          <p className={styles.title}>Income to expenses trend</p>
          <p className={styles.data}>
            <FaArrowTrendUp color="green" /> vs last 30 days
          </p>
        </div>
      </div>
    </Card>
  );
};

export default IncomeToExpenseRatio;

"use client";

import React, { useEffect, useState } from "react";

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

import Card from "../Card/Card";

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

const dummyData = {
  yearly: {
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Expense ($)",
          data: [65, 59, 80, 81, 56, 55, 40, 20, 9, 300, 11, 34],
        },
      ],
    },
  },
  monthly: {
    data: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
      datasets: [
        {
          label: "Expense ($)",
          data: [
            10, 2, 32, 14, 15, 0, 7, 0, 0, 10, 0, 2, 13, 1, 0, 0, 7, 0, 0, 0, 1,
            2, 21, 2, 0, 0, 0, 5, 0, 0,
          ],
        },
      ],
    },
  },
  weekly: {
    data: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Staturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "Expense ($)",
          data: [10, 2, 32, 14, 15, 0, 7],
        },
      ],
    },
  },
};

const MonthlyExpense = () => {
  const [currentTab, setCurrentTab] = useState("yearly");
  const [data, setData] = useState(dummyData.yearly.data);

  useEffect(() => {
    const getData = () => {
      switch (currentTab) {
        case "monthly":
          setData(dummyData.monthly.data);
          break;
        case "weekly":
          setData(dummyData.weekly.data);
          break;
        default:
          setData(dummyData.yearly.data);
          break;
      }
    };

    getData();
  }, [currentTab]);

  return (
    <Card title="Monthly Expense">
      <div className={styles.nav}>
        <p
          className={currentTab === "yearly" ? styles.activeTab : ""}
          onClick={() => setCurrentTab("yearly")}
        >
          Yearly
        </p>
        <p
          className={currentTab === "monthly" ? styles.activeTab : ""}
          onClick={() => setCurrentTab("monthly")}
        >
          Monthly
        </p>
        <p
          className={currentTab === "weekly" ? styles.activeTab : ""}
          onClick={() => setCurrentTab("weekly")}
        >
          Weekly
        </p>
      </div>

      <Line
        data={data}
        options={{
          responsive: true,
          borderColor: "rgba(255, 99, 132, 0.5)",
          hoverBorderColor: "rgba(255, 99, 132, 1)",
        }}
      />
    </Card>
  );
};

export default MonthlyExpense;

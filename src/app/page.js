"use client";

import Wallet from "@/components/Wallet/Wallet";
import styles from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";
import IncomeToExpenseRatio from "@/components/IncomeToExpenseRatio/IncomeToExpenseRatio";
import TopFiveExpensesChart from "@/components/TopFiveExpensesChart/TopFiveExpensesChart";
import MonthlyExpense from "@/components/MonthlyExpense/MonthlyExpense";

import { IoMdSend } from "react-icons/io";
import { useState } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("income");

  return (
    <main className={styles.mainContainer}>
      <div className={styles.leftSection}>
        <div className={styles.leftSectionDetails}>
          <UserCard />
          <TopFiveExpensesChart />
        </div>

        <div className={styles.leftSectionCharts}>
          <MonthlyExpense />
        </div>
      </div>

      <div className={styles.rightSection}>
        <Wallet />
        <IncomeToExpenseRatio />
        <div className={styles.userInput}>
          <div className={styles.nav}>
            <p
              className={currentTab === "income" ? styles.activeTab : ""}
              onClick={() => setCurrentTab("income")}
            >
              Income
            </p>
            <p
              className={currentTab === "expense" ? styles.activeTab : ""}
              onClick={() => setCurrentTab("expense")}
            >
              Expense
            </p>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="number"
              placeholder="Value"
              min="0"
              onInput={(e) => (e.target.value = Math.abs(e.target.value))}
            />
            <button>
              <IoMdSend />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

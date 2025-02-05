import Wallet from "@/components/Wallet/Wallet";
import styles from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";
import IncomeToExpenseRatio from "@/components/IncomeToExpenseRatio/IncomeToExpenseRatio";
import TopFiveExpensesChart from "@/components/TopFiveExpensesChart/TopFiveExpensesChart";
import MonthlyExpense from "@/components/MonthlyExpense/MonthlyExpense";

export default function Home() {
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
      </div>
    </main>
  );
}

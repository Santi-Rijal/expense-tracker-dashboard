import Wallet from "@/components/Wallet/Wallet";
import styles from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";
import IncomeToExpenseRatio from "@/components/IncomeToExpenseRatio/IncomeToExpenseRatio";
import TopFiveExpensesChart from "@/components/TopFiveExpensesChart/TopFiveExpensesChart";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.leftSection}>
        <UserCard />
        <TopFiveExpensesChart />
      </div>

      <div className={styles.rightSection}>
        <Wallet />
        <IncomeToExpenseRatio />
      </div>
    </main>
  );
}

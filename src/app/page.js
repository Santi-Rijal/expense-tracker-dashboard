import Wallet from "@/components/Wallet/Wallet";
import styles from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";
import IncomeToExpenseRatio from "@/components/IncomeToExpenseRatio/IncomeToExpenseRatio";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <UserCard />
      <div className={styles.walletChartContainer}>
        <Wallet />
        <IncomeToExpenseRatio />
      </div>
    </main>
  );
}

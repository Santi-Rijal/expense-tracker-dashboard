import styles from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <UserCard />
    </main>
  );
}

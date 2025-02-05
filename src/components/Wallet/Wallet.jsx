import React from "react";

import styles from "./Wallet.module.css";

import { FaDollarSign } from "react-icons/fa";
import Image from "next/image";

const balanceData = {
  id: "Wallet",
  walletBalance: 450,
  currency: "CAD",
  lastTransaction: {
    category: "Groceries",
    amount: 50,
    date: "2025-02-05T14:15:00Z",
    paymentMethod: "Credit Card",
  },
};

const Wallet = () => {
  return (
    <div className={styles.walletContainer}>
      <Image src="/walletArt.png" fill className={styles.walletArt} />

      <h3>{balanceData.id}</h3>
      <h1 className={styles.amount}>
        <FaDollarSign className={styles.dollarSign} />{" "}
        {balanceData.walletBalance} {balanceData.currency}
      </h1>

      <div className={styles.lastTransaction}>
        <div className={styles.lastTransactionHeader}>
          <p>
            {balanceData.lastTransaction.category}: - ${" "}
            {balanceData.lastTransaction.amount}
          </p>

          <div className={styles.details}>
            <p>{balanceData.lastTransaction.paymentMethod}</p>·
            <p>{balanceData.lastTransaction.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

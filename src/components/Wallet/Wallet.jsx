import React from "react";

import styles from "./Wallet.module.css";

import { FaDollarSign } from "react-icons/fa";
import Image from "next/image";
import Card from "../Card/Card";

const balanceData = {
  id: "Wallet",
  walletBalance: 450,
  currency: "CAD",
  lastTransaction: {
    category: "Groceries",
    amount: 50,
    date: "Yesturday",
    paymentMethod: "Credit Card",
  },
};

const Wallet = () => {
  return (
    <Card imageUrl="/walletArt.png" title={balanceData.id}>
      <div className={styles.walletContainer}>
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
    </Card>
  );
};

export default Wallet;

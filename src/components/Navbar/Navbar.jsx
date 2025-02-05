import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Expense Tracker DashBoard</span>
      <span className={styles.user}>User1</span>
    </nav>
  );
};

export default Navbar;

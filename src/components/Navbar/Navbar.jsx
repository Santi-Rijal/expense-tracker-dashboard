import React from "react";

import styles from "./Navbar.module.css";

import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Expense Tracker DashBoard</span>
      <IoSettingsOutline className={styles.gear} />
    </nav>
  );
};

export default Navbar;

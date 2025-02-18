import React from "react";

import { IoIosMore } from "react-icons/io";

import styles from "./CardHeader.module.css";

const CardHeader = ({ title = "" }) => {
  return (
    <div className={styles.header}>
      {title ? <h3>{title}</h3> : <span className={styles.filler}>a</span>}
      <IoIosMore className={styles.moreButton} />
    </div>
  );
};

export default CardHeader;

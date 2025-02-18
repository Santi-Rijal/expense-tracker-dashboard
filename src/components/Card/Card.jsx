import React from "react";
import CardHeader from "../CardHeader/CardHeader";

import styles from "./Card.module.css";
import Image from "next/image";

const Card = ({ title = "", imageUrl = "", children }) => {
  return (
    <div className={styles.cardContainer}>
      {imageUrl && (
        <div className={styles.imageContainer}>
          <Image src={imageUrl} fill alt="cardArt" className={styles.cardArt} />
        </div>
      )}
      <CardHeader title={title} />
      {children}
    </div>
  );
};

export default Card;

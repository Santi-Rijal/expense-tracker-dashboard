import React from "react";

import styles from "./UserCard.module.css";
import Image from "next/image";

const userData = {
  name: "Bob Cake",
  email: "bob@cake.com",
  bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptatum quibusdam architecto excepturi dolorum? Amet quo provident soluta dolor officia alias eveniet eaque?",
};

const UserCard = () => {
  return (
    <div className={styles.userCardContainer}>
      <Image src="/userCardArt.png" fill className={styles.cardArt} />

      <section className={styles.userBalanceSection}>
        <div className={styles.userProfile}>
          <Image src="/user.png" fill className={styles.image} />
        </div>

        <div className={styles.userData}>
          <h3 className={styles.name}>{userData.name}</h3>
          <p className={styles.email}>{userData.email}</p>
        </div>
      </section>

      <hr />

      <p>{userData.bio}</p>
    </div>
  );
};

export default UserCard;

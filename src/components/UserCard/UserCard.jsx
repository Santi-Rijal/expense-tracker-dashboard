import React from "react";

import styles from "./UserCard.module.css";
import Image from "next/image";
import Card from "../Card/Card";

const userData = {
  name: "Bob Cake",
  email: "bob@cake.com",
  bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptatum quibusdam architecto excepturi dolorum? Amet quo provident soluta dolor officia alias eveniet eaque?",
};

const UserCard = () => {
  return (
    <Card imageUrl="/userCardArt.png">
      <div className={styles.userCardContainer}>
        <section className={styles.userBalanceSection}>
          <div className={styles.userProfile}>
            <Image src="/user.png" fill className={styles.image} alt="user" />
          </div>

          <div className={styles.userData}>
            <h3 className={styles.name}>{userData.name}</h3>
            <p className={styles.email}>{userData.email}</p>
          </div>
        </section>

        <hr />

        <p className={styles.bio}>{userData.bio}</p>
      </div>
    </Card>
  );
};

export default UserCard;

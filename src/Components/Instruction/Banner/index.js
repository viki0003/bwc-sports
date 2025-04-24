import React from "react";
import styles from "./style.module.css";
import basketballBanner from "../../../Assets/Images/Instruction_Banner.png";

const InstructionCard = () => {
  return (
    <div className={styles.card}>
      <img src={basketballBanner} alt="Instruction" className={styles.image} />
      <h1 className={styles.heading}>INSTRUCTION</h1>
      <p className={styles.subtext}>Instruction by Sports</p>
    </div>
  );
};

export default InstructionCard;

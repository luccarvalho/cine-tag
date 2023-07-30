import React from "react";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";

export default function Card({ capa, titulo, id }) {
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
}

import React from "react";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.listitem}>Home</li>
        <li className={styles.listitem}>About</li>
        <li className={styles.listitem}>Documentation</li>
        <li className={styles.listitem}>Playground</li>
      </ul>
    </div>
  );
}
export default NavBar;

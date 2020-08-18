import React from "react";
import styles from "./Heading.module.css";
class Heading extends React.Component {
  render() {
    const pstyle = {
      fontSize: 16,
      letterSpacing: 2,
      margin: 0,
      textAlign: "end"
    };
    return (
      <div className={styles.abcd}>
        <div className={styles.container}>
          <h1 className={styles.apiheading}>
            {"The Breaking Bad A"}
            <mark className={styles.apimark}>{"P"}</mark>
            {"I"}
          </h1>
          <p style={pstyle}>...Tread Lightly</p>
        </div>
        <p className={styles.desp}>Now With Better Call Saul Data!</p>
      </div>
    );
  }
}

export default Heading;

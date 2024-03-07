import React from "react";
import styles from "./styles.module.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar"
import Content from "../../components/Content"
function Home() {
  return (
    <div className={styles.home}>
      <div className="left"><Sidebar></Sidebar></div>
      <div className="right">
          <div>
             <Navbar></Navbar>
          </div>
          <div>
            <Content></Content>
          </div>
      </div>
    </div>
  );
}

export default Home;

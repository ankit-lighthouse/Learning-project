import React from "react";
import styles from "./styles.module.scss";

export interface NavItemPropsInterface {
  id: number;
  name: string;
  isActive: boolean;
}
function NavItem(props: NavItemPropsInterface) {
  return (
    <div className={styles.nav_item__list}>
      <div
        className={`${styles.nav_item} ${
          props.isActive ? styles.nav_item__active : ""
        }`}
      >
        {" "}
        {props.name}
      </div>

      <div
        className={`${styles.line} ${
          props.isActive ? styles.line__active : ""
        }`}
      ></div>
    </div>
  );
}

export default NavItem;

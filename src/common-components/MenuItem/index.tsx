import React from "react";
import styles from "./styles.module.scss";
export interface MenuItemPropsInterface {
  id: number;
  name: string;
  svg: JSX.Element;
  isActive: boolean;
}

function MenuItem(props: MenuItemPropsInterface) {
  //console.log(props.isActive);
  // if(props.isActive===true){

  //   return (
  //   <div className={styles.menu_item}>
  //     <div className={styles.isActive}>
  //     <div className={styles.left}>
  //       <div className={styles.image}>{props.svg}</div>
  //       <div className={styles.name}>{props.name}</div>
  //     </div>
  //     <div className={styles.right}></div>
  //     </div>

  //   </div>
  // )

  // }

  return (
    <div
      className={`${styles.menu_item} ${
        props.isActive ? styles.menu_item__active : ""
      }`}
    >
      <div className={styles.left}>
        <div className={styles.image}>{props.svg}</div>
        <div className={styles.name}>{props.name}</div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default MenuItem;

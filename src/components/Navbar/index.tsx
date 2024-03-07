import React, { useState } from "react";
import styles from "./styles.module.scss";
import NavItem from "../../common-components/NavItem";
import { NavItemPropsInterface } from "../../common-components/NavItem";
function Navbar() {
  const [activeId,setActiveId]=useState(1);
  const navItemList: NavItemPropsInterface[] = [
    { id: 1, name: "Buy", isActive: true },
    { id: 2, name: "Sell", isActive: true },
    { id: 3, name: "Rent", isActive: true },
    { id: 4, name: "Compare", isActive: true },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.nav_list}>
        {navItemList.map((item) => {
          return (
            <div key={item.id} 
            onClick={()=>setActiveId(item.id)} className={styles.nav_item}>
              <NavItem {...item} isActive={activeId===item.id} ></NavItem>
            </div>
          );
          // return <NavItem={...item}></NavItem>
        })}
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

export default Navbar;

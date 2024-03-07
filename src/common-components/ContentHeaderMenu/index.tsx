import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
export interface ContentHeaderMenuPropsInterface {
  id: number;
  placeholder: string;
  showSeparator: boolean;
  isActive: boolean;
  iconSvg: JSX.Element;
  width: string;
  height: string;
  // value:string
  padding: string;
}
function ContentHeaderMenu({
  id,
  placeholder,
  showSeparator,
  isActive,
  iconSvg,
  width,
  height,
  padding
}: ContentHeaderMenuPropsInterface) {
  const [value, setValue] = useState<string>("");

  const myStyles: React.CSSProperties = {
    width: width,
    // height: height,
  };
  
  const inputPadding: React.CSSProperties = {
     // padding:padding
  };
  
  const inputStyles: React.CSSProperties = {
    color: isActive ? "#FFF" : "#b7bfc5",
    outline: "none",
    
  };
  const mergedStyles: React.CSSProperties = { ...inputPadding, ...inputStyles };
  return (
    <div
      style={myStyles}
      className={`${styles.search} ${isActive ? styles.active_background : ""}`}
    >
      <div className={styles.left}>
        <input
          style={ mergedStyles }
          className={`${styles.input} ${
            isActive ? styles.active_background : ""
          } `}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}

        ></input>
      </div>

      <div className={styles.right}>
        <div className={`${showSeparator ? styles.line : ""}`}></div>

        <div className={styles.icon}>{iconSvg}</div>
      </div>
    </div>
  );
}

export default ContentHeaderMenu;

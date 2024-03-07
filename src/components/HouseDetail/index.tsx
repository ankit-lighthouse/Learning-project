import React from "react";
import styles from "./styles.module.scss";
export interface HouseDetailPropsInterface {
  id: number;
  imgUrl: string;
  price: string;
  locationIcon: JSX.Element;
  location: string;
  icon: JSX.Element;
}
function HouseDetail({
  id,
  imgUrl,
  price,
  locationIcon,
  location,
  icon,
}: HouseDetailPropsInterface) {
  return (
    <div className={styles.house}>
      <img src={imgUrl}></img>
      <div className={styles.details}>
        {price}
        <div>
          <div>{locationIcon}</div>
          <div>{location}</div>
        </div>
        <div>line</div>
        <div>Overview</div>
      </div>

      <div>{icon}</div>
    </div>
  );
}

export default HouseDetail;

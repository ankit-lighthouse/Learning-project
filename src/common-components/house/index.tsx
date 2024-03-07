import React from "react";
import styles from "./styles.module.scss";
//import houusepublic\houseImage\house1.png
export interface HousePropsInterface {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  location: string;
}


function House({ id, imageUrl, title, price, location }: HousePropsInterface) {
  // console.log(imageUrl, "---------------------- IMAGE URL ---------------");

  return (
    <div className={styles.house}>
      <img className={styles.img} src={imageUrl}></img>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>$ {price}</div>
      </div>
      <div className={styles.location}>
        <div className={styles.location_icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_709_30)">
              <path
                d="M8.00004 1.33333C5.42004 1.33333 3.33337 3.42 3.33337 6C3.33337 9.5 8.00004 14.6667 8.00004 14.6667C8.00004 14.6667 12.6667 9.5 12.6667 6C12.6667 3.42 10.58 1.33333 8.00004 1.33333ZM8.00004 7.66667C7.08004 7.66667 6.33338 6.92 6.33338 6C6.33338 5.08 7.08004 4.33333 8.00004 4.33333C8.92004 4.33333 9.66671 5.08 9.66671 6C9.66671 6.92 8.92004 7.66667 8.00004 7.66667Z"
                fill="#7F7F7F"
              />
            </g>
            <defs>
              <clipPath id="clip0_709_30">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className={styles.location_name}>{location}</div>
      </div>
    </div>
  );
}

export default House;

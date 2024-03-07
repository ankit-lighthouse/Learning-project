import React from "react";
import House from "../../common-components/house";
import { HousePropsInterface } from "../../common-components/house";
import Right from "../ContentRight";
import styles from "./styles.module.scss";
import ContentHeader from "../ContentHeader";
import HouseDetail, { HouseDetailPropsInterface } from "../HouseDetail";
export default function Content() {
  const cards: HousePropsInterface[] = [
    {
      id: 1,
      imageUrl: "../../../public/houseImage/house1.png",
      title: "The Stables",
      price: 9540.99,
      location: "Terry Lane, Golden CO 80403",
    },
    {
      id: 2,
      imageUrl: "../../../public/houseImage/house2.png",
      title: "The Old Rectory",
      price: 5999.99,
      location: "Yule Street, Arvada CO 80007",
    },
    {
      id: 3,
      imageUrl: "../../../public/houseImage/house3.png",
      title: "Holly Cottage",
      price: 2998.99,
      location: "Alice Court, Annapolis MD 21401",
    },
    {
      id: 4,
      imageUrl: "../../../public/houseImage/house4.png",
      title: "Meadow View",
      price: 9540.99,
      location: "Doane Street, Fremont CA 94538",
    },
    {
      id: 5,
      imageUrl: "../../../public/houseImage/house5.png",
      title: "Greenacres",
      price: 5999.99,
      location: "Terry Lane, Golden CO 80403",
    },
    {
      id: 6,
      imageUrl: "../../../public/houseImage/house6.png",
      title: "White Cottage",
      price: 2998.99,
      location: "Yule Street, Arvada CO 80007",
    },
  ];

  const HouseDetailList: HouseDetailPropsInterface[] = [
    {
      id: 1,
      imgUrl: "../../../public/houseImage/house7.png",
      price: "$ 32,000/ Year",
      locationIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_705_191)">
            <path
              d="M8.00004 1.33334C5.42004 1.33334 3.33337 3.42001 3.33337 6.00001C3.33337 9.50001 8.00004 14.6667 8.00004 14.6667C8.00004 14.6667 12.6667 9.50001 12.6667 6.00001C12.6667 3.42001 10.58 1.33334 8.00004 1.33334ZM8.00004 7.66668C7.08004 7.66668 6.33338 6.92001 6.33338 6.00001C6.33338 5.08001 7.08004 4.33334 8.00004 4.33334C8.92004 4.33334 9.66671 5.08001 9.66671 6.00001C9.66671 6.92001 8.92004 7.66668 8.00004 7.66668Z"
              fill="#7F7F7F"
            />
          </g>
          <defs>
            <clipPath id="clip0_705_191">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      location: "Doane Street, Fremont CA 94538",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_705_194)">
            <path
              d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
              fill="#FF5B19"
            />
          </g>
          <defs>
            <clipPath id="clip0_705_194">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <ContentHeader></ContentHeader>
      </div>
      <div className={styles.content_wrap}>
        <div className={styles.house}>
          {cards.map((card) => {
            return (
              <div className={styles.card} key={card.id}>
                <House {...card}></House>
              </div>
            );
          })}

          <div className={styles.house_details}>
            {
                HouseDetailList.map((houseDetail)=>{
                  return (
                    <div key={houseDetail.id}>
                    <HouseDetail {...houseDetail}></HouseDetail>
                    </div>
                  )
                })
            }
           
          </div>
        </div>
        <div className={styles.right_content}>
          <Right></Right>
        </div>
      </div>
    </div>
  );
}

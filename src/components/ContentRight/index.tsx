import React from "react";
import styles from "./styles.module.scss";
import Message from "../../common-components/message";
import { MessagesPropsInterface } from "../../common-components/message";
function Right() {
  const list: MessagesPropsInterface[] = [
    {
      id: 1,
      imgUrl: "../../../public/messages/profile1.png",
      title: "James Benny",
      text: "Hey, Let me know if you’re still available...",
    },
    {
      id: 2,
      imgUrl: "../../../public/messages/profile2.png",
      title: "William Chynita",
      text: "Okay thanks",
    },
    {
      id: 3,
      imgUrl: "../../../public/messages/profile3.png",
      title: "Henry David",
      text: "Alright I’ll get back to you ASAP",
    },
    {
      id: 4,
      imgUrl: "../../../public/messages/profile4.png",
      title: "Charlotte Flair",
      text: "Sounds good buddy",
    },
  ];
  return (
    <div className={styles.right}>
      <div className={styles.messages_header}>
        <div className={styles.messages}>Recent Messages</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.33341 8.00001C7.33341 8.3682 7.63189 8.66667 8.00008 8.66667C8.36827 8.66667 8.66675 8.3682 8.66675 8.00001C8.66675 7.63182 8.36827 7.33334 8.00008 7.33334C7.63189 7.33334 7.33341 7.63182 7.33341 8.00001Z"
              stroke="#7F7F7F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.33341 12.6667C7.33341 13.0349 7.63189 13.3333 8.00008 13.3333C8.36827 13.3333 8.66675 13.0349 8.66675 12.6667C8.66675 12.2985 8.36827 12 8.00008 12C7.63189 12 7.33341 12.2985 7.33341 12.6667Z"
              stroke="#7F7F7F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.33341 3.33334C7.33341 3.70153 7.63189 4.00001 8.00008 4.00001C8.36827 4.00001 8.66675 3.70153 8.66675 3.33334C8.66675 2.96515 8.36827 2.66667 8.00008 2.66667C7.63189 2.66667 7.33341 2.96515 7.33341 3.33334Z"
              stroke="#7F7F7F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={styles.messages}>
        {list.map((msg) => {
          return (
            <div className={styles.message_item} key={msg.id}>
              {" "}
              <Message {...msg}></Message>{" "}
            </div>
          );
        })}
      </div>
      <div className={styles.map}>
        Map View
        <img className={styles.map_img} src="../../../public/Map.png"></img>
      </div>
    </div>
  );
}

export default Right;

import React from "react";
import styles from "./styles.module.scss";
export interface MessagesPropsInterface {
  id: number;
  imgUrl: string;
  title: string;
  text: string;
}
function Message({ id, imgUrl, title, text }: MessagesPropsInterface) {
  return (
    <div>
      <div className={styles.message}>
        <img src={imgUrl} />
        <div className={styles.about}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
      {/* <div className={styles.line}></div> */}
    </div>
    
  );
}

export default Message;

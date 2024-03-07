import React from "react";
import styles from "./styles.module.scss";
import ContentHeaderMenu from "../../common-components/ContentHeaderMenu";
import { ContentHeaderMenuPropsInterface } from "../../common-components/ContentHeaderMenu";
function ContentHeader() {
  const contentHeadeList: ContentHeaderMenuPropsInterface[] = [
    {
      id: 1,
      placeholder: "Search Here....",
      showSeparator: true,
      isActive: false,
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_705_119)">
            <path
              d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
              fill="#FF5B19"
            />
          </g>
          <defs>
            <clipPath id="clip0_705_119">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      width: "14.9375rem",
      height: "3rem",
      padding:"1rem 6.5rem 1rem 1.5rem"
    },
    {
      id: 2,
      placeholder: "Price",
      showSeparator: false,
      isActive: false,
      iconSvg: (
        <svg
          width="29"
          height="23"
          viewBox="0 0 29 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.95455 22.1818V0.363635H7.35227V22.1818H5.95455ZM10.6591 6.90909C10.5568 6.04545 10.142 5.375 9.41477 4.89773C8.6875 4.42045 7.79545 4.18182 6.73864 4.18182C5.96591 4.18182 5.28977 4.30682 4.71023 4.55682C4.13636 4.80682 3.6875 5.15057 3.36364 5.58807C3.04545 6.02557 2.88636 6.52273 2.88636 7.07954C2.88636 7.54545 2.99716 7.94602 3.21875 8.28125C3.44602 8.6108 3.7358 8.88636 4.08807 9.10795C4.44034 9.32386 4.80966 9.50284 5.19602 9.64489C5.58239 9.78125 5.9375 9.89205 6.26136 9.97727L8.03409 10.4545C8.48864 10.5739 8.99432 10.7386 9.55114 10.9489C10.1136 11.1591 10.6506 11.446 11.1619 11.8097C11.679 12.1676 12.1051 12.6278 12.4403 13.1903C12.7756 13.7528 12.9432 14.4432 12.9432 15.2614C12.9432 16.2045 12.696 17.0568 12.2017 17.8182C11.7131 18.5795 10.9972 19.1847 10.054 19.6335C9.11648 20.0824 7.97727 20.3068 6.63636 20.3068C5.38636 20.3068 4.30398 20.1051 3.3892 19.7017C2.48011 19.2983 1.7642 18.7358 1.24148 18.0142C0.724432 17.2926 0.431818 16.4545 0.363636 15.5H2.54545C2.60227 16.1591 2.82386 16.7045 3.21023 17.1364C3.60227 17.5625 4.09659 17.8807 4.69318 18.0909C5.29545 18.2955 5.94318 18.3977 6.63636 18.3977C7.44318 18.3977 8.16761 18.267 8.80966 18.0057C9.4517 17.7386 9.96023 17.3693 10.3352 16.8977C10.7102 16.4205 10.8977 15.8636 10.8977 15.2273C10.8977 14.6477 10.7358 14.1761 10.4119 13.8125C10.0881 13.4489 9.66193 13.1534 9.13352 12.9261C8.60511 12.6989 8.03409 12.5 7.42045 12.3295L5.27273 11.7159C3.90909 11.3239 2.82955 10.7642 2.03409 10.0369C1.23864 9.30966 0.840909 8.35795 0.840909 7.18182C0.840909 6.20454 1.10511 5.35227 1.63352 4.625C2.16761 3.89205 2.88352 3.32386 3.78125 2.92045C4.68466 2.51136 5.69318 2.30682 6.80682 2.30682C7.93182 2.30682 8.93182 2.50852 9.80682 2.91193C10.6818 3.30966 11.375 3.85511 11.8864 4.54829C12.4034 5.24148 12.6761 6.02841 12.7045 6.90909H10.6591ZM21.2592 22.1818V0.363635H22.657V22.1818H21.2592ZM25.9638 6.90909C25.8615 6.04545 25.4467 5.375 24.7195 4.89773C23.9922 4.42045 23.1001 4.18182 22.0433 4.18182C21.2706 4.18182 20.5945 4.30682 20.0149 4.55682C19.4411 4.80682 18.9922 5.15057 18.6683 5.58807C18.3501 6.02557 18.1911 6.52273 18.1911 7.07954C18.1911 7.54545 18.3018 7.94602 18.5234 8.28125C18.7507 8.6108 19.0405 8.88636 19.3928 9.10795C19.745 9.32386 20.1143 9.50284 20.5007 9.64489C20.8871 9.78125 21.2422 9.89205 21.5661 9.97727L23.3388 10.4545C23.7933 10.5739 24.299 10.7386 24.8558 10.9489C25.4183 11.1591 25.9553 11.446 26.4666 11.8097C26.9837 12.1676 27.4098 12.6278 27.745 13.1903C28.0803 13.7528 28.2479 14.4432 28.2479 15.2614C28.2479 16.2045 28.0007 17.0568 27.5064 17.8182C27.0178 18.5795 26.3018 19.1847 25.3587 19.6335C24.4212 20.0824 23.282 20.3068 21.9411 20.3068C20.6911 20.3068 19.6087 20.1051 18.6939 19.7017C17.7848 19.2983 17.0689 18.7358 16.5462 18.0142C16.0291 17.2926 15.7365 16.4545 15.6683 15.5H17.8501C17.907 16.1591 18.1286 16.7045 18.5149 17.1364C18.907 17.5625 19.4013 17.8807 19.9979 18.0909C20.6001 18.2955 21.2479 18.3977 21.9411 18.3977C22.7479 18.3977 23.4723 18.267 24.1143 18.0057C24.7564 17.7386 25.2649 17.3693 25.6399 16.8977C26.0149 16.4205 26.2024 15.8636 26.2024 15.2273C26.2024 14.6477 26.0405 14.1761 25.7166 13.8125C25.3928 13.4489 24.9666 13.1534 24.4382 12.9261C23.9098 12.6989 23.3388 12.5 22.7251 12.3295L20.5774 11.7159C19.2138 11.3239 18.1342 10.7642 17.3388 10.0369C16.5433 9.30966 16.1456 8.35795 16.1456 7.18182C16.1456 6.20454 16.4098 5.35227 16.9382 4.625C17.4723 3.89205 18.1882 3.32386 19.0859 2.92045C19.9893 2.51136 20.9979 2.30682 22.1115 2.30682C23.2365 2.30682 24.2365 2.50852 25.1115 2.91193C25.9865 3.30966 26.6797 3.85511 27.1911 4.54829C27.7081 5.24148 27.9808 6.02841 28.0092 6.90909H25.9638Z"
            fill="#FF5B19"
          />
        </svg>
      ),
      width: "9.375rem",
      height: "3rem",
      padding:"1rem 5.4375rem 1rem 1.rem"
    },
    {
      id: 3,
      placeholder: "2-4 Beds",
      showSeparator: false,
      isActive: true,
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 13.172L16.95 8.22198L18.364 9.63598L12 16L5.63601 9.63598L7.05001 8.22198L12 13.172Z"
            fill="white"
          />
        </svg>
      ),
      width: "10.625rem",
      height: "3rem",
      padding:"1rem 4.4375rem 1rem 1.75rem"
    },
    {
      id: 4,
      placeholder: "Property Type",
      showSeparator: false,
      isActive: false,
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 13.172L16.95 8.22198L18.364 9.63598L12 16L5.63601 9.63598L7.05001 8.22198L12 13.172Z"
            fill="#B7BFC5"
          />
        </svg>
      ),
      width: "15rem",
      height: "3rem",
      padding:"1rem 6.75rem 1rem 1.5rem "
    },
    {
      id: 5,
      placeholder: "Filters",
      showSeparator: false,
      isActive: false,
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 4L10 4"
            stroke="#B7BFC5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 4L21 4"
            stroke="#B7BFC5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 12L12 12"
            stroke="#B7BFC5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 12L21 12"
            stroke="#B7BFC5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 20L8 20"
            stroke="#B7BFC5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 20L21 20"
            stroke="#B7BFC5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 1L10 7"
            stroke="#B7BFC5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 9L16 15"
            stroke="#B7BFC5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 17L8 23"
            stroke="#B7BFC5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      width: "15.3125rem",
      height: "3rem",
      padding:"1rem 10.875rem 1rem 1.5rem"
    },
  ];
  return (
    <div className={styles.content_header}>
      <div className={styles.top}>
        <div className={styles.result}>293 Result</div>
        <div className={styles.map_btn}>
          <div className={styles.map_view}>Map view </div>
          <div className={styles.btn_icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="28"
              viewBox="0 0 50 28"
              fill="none"
            >
              <rect width="50" height="28" rx="14" fill="#EEEEEE" />
              <circle cx="14" cy="14" r="12" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.search_bar}>
        {contentHeadeList.map((list) => {
          return (
            <div key={list.id}>
              <ContentHeaderMenu {...list}></ContentHeaderMenu>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContentHeader;

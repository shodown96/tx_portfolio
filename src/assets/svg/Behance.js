import React from "react";

export default function BehanceSVG ({
    iColor = "#363941",
    iSize = { x: 20, y: 14 },
  }) {
    return (
      <svg
        width={iSize.x}
        height={iSize.y}
        viewBox="0 0 20 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.3331 2.41671H12.4999V0.750061H18.3331V2.41671ZM19.7715 10.75C19.4031 11.8308 18.0806 13.2499 15.5207 13.2499C12.959 13.2499 10.884 11.8091 10.884 8.52081C10.884 5.26251 12.8215 3.58753 15.439 3.58753C18.0073 3.58753 19.5756 5.07251 19.9181 7.27582C19.9831 7.69749 20.009 8.26581 19.9973 9.05914H13.3082C13.4165 11.7349 16.2107 11.8191 17.1315 10.75H19.7715ZM13.3665 7.41666H17.504C17.4165 6.1275 16.5573 5.56751 15.4398 5.56751C14.2182 5.56751 13.5424 6.2075 13.3665 7.41666ZM5.38828 13.2399H0V0.767561H5.7941C10.3574 0.83506 10.4441 5.30418 8.06075 6.5225C10.9449 7.57249 11.0415 13.2399 5.38828 13.2399ZM2.49997 5.75001H5.48661C7.57658 5.75001 7.90825 3.25003 5.22661 3.25003H2.49997V5.75001ZM5.32578 8.24998H2.49997V10.7633H5.28411C7.82992 10.7633 7.67408 8.24998 5.32578 8.24998Z"
        fill={iColor}/>

      </svg>
    );
  };
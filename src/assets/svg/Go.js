import React from 'react'

export default function GoSVG({
  iSize = { x: 16, y: 16 },
  iColor = "#000",
}) {
  return (
    <svg
      width={iSize.x}
      height={iSize.y}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_31_1662)">
        <path d="M13.6498 0.933472H5.83727V2.80847H12.0116L0.228516 14.5916L1.55414 15.9172L13.3373 4.1341V10.3085H15.2123V2.49597C15.2123 1.63472 14.5116 0.933472 13.6498 0.933472Z"
          fill={iColor} />
      </g>
      <defs>
        <clipPath id="clip0_31_1662">
          <rect width="15" height="15" fill="white" transform="translate(0.211914 0.933472)" />
        </clipPath>
      </defs>

    </svg>
  );
};
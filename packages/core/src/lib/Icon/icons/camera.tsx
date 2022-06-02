import React from 'react';

const cameraIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>camera icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.80658 4.0378C8.96113 3.80597 9.22132 3.66672 9.49995 3.66672H14.4999C14.7785 3.66672 15.0387 3.80597 15.1933 4.0378L16.6126 6.1667H19.4999C20.1629 6.1667 20.7988 6.43009 21.2676 6.89893C21.7365 7.36777 21.9999 8.00365 21.9999 8.66668V17.8333C21.9999 18.4963 21.7365 19.1322 21.2676 19.601C20.7988 20.0699 20.1629 20.3333 19.4999 20.3333H4.49998C3.83695 20.3333 3.20107 20.0699 2.73223 19.601C2.26339 19.1322 2 18.4963 2 17.8333V8.66668C2 8.00365 2.26339 7.36777 2.73223 6.89893C3.20107 6.43009 3.83695 6.1667 4.49998 6.1667H7.38731L8.80658 4.0378ZM9.94593 5.33337L8.52666 7.46228C8.37211 7.69411 8.11192 7.83336 7.83329 7.83336H4.49998C4.27897 7.83336 4.06701 7.92115 3.91073 8.07743C3.75445 8.23371 3.66666 8.44567 3.66666 8.66668V17.8333C3.66666 18.0543 3.75445 18.2663 3.91073 18.4225C4.06701 18.5788 4.27897 18.6666 4.49998 18.6666H19.4999C19.7209 18.6666 19.9329 18.5788 20.0891 18.4225C20.2454 18.2663 20.3332 18.0543 20.3332 17.8333V8.66668C20.3332 8.44567 20.2454 8.23371 20.0891 8.07743C19.9329 7.92115 19.7209 7.83336 19.4999 7.83336H16.1666C15.8879 7.83336 15.6278 7.69411 15.4732 7.46228L14.0539 5.33337H9.94593ZM11.9999 10.3333C10.6192 10.3333 9.49995 11.4526 9.49995 12.8333C9.49995 14.214 10.6192 15.3333 11.9999 15.3333C13.3806 15.3333 14.4999 14.214 14.4999 12.8333C14.4999 11.4526 13.3806 10.3333 11.9999 10.3333ZM7.83329 12.8333C7.83329 10.5322 9.69876 8.66668 11.9999 8.66668C14.3011 8.66668 16.1666 10.5322 16.1666 12.8333C16.1666 15.1345 14.3011 17 11.9999 17C9.69876 17 7.83329 15.1345 7.83329 12.8333Z"
            fill={fill}
        />
    </svg>
);
export default cameraIcon;

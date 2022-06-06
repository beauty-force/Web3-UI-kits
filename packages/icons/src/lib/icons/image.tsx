import { FC } from 'react';
import { TIconProps } from '../type';
const ImageIcon: FC<TIconProps> = ({ fill = 'inherit', size = 18, style }) => (
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
        <title>image icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.62025 4.59494C5.05399 4.59494 4.59494 5.05399 4.59494 5.62025V18.3797C4.59494 18.946 5.05399 19.4051 5.62025 19.4051H18.3797C18.946 19.4051 19.4051 18.946 19.4051 18.3797V5.62025C19.4051 5.05399 18.946 4.59494 18.3797 4.59494H5.62025ZM3 5.62025C3 4.17313 4.17313 3 5.62025 3H18.3797C19.8269 3 21 4.17313 21 5.62025V18.3797C21 19.8269 19.8269 21 18.3797 21H5.62025C4.17313 21 3 19.8269 3 18.3797V5.62025Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.81013 8.24051C8.49553 8.24051 8.24051 8.49553 8.24051 8.81013C8.24051 9.12472 8.49553 9.37975 8.81013 9.37975C9.12472 9.37975 9.37975 9.12472 9.37975 8.81013C9.37975 8.49553 9.12472 8.24051 8.81013 8.24051ZM6.64557 8.81013C6.64557 7.61467 7.61467 6.64557 8.81013 6.64557C10.0056 6.64557 10.9747 7.61467 10.9747 8.81013C10.9747 10.0056 10.0056 10.9747 8.81013 10.9747C7.61467 10.9747 6.64557 10.0056 6.64557 8.81013Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.0817 9.61332C15.3931 9.30189 15.898 9.30189 16.2095 9.61332L20.7664 14.1703C21.0779 14.4817 21.0779 14.9866 20.7664 15.2981C20.455 15.6095 19.9501 15.6095 19.6386 15.2981L15.6456 11.305L6.18415 20.7664C5.87272 21.0779 5.36779 21.0779 5.05636 20.7664C4.74493 20.455 4.74493 19.9501 5.05636 19.6386L15.0817 9.61332Z"
            fill={fill}
        />
    </svg>
);
export default ImageIcon;

import { FC } from 'react';
import { TIconProps } from '../type';
const LockOpenIcon: FC<TIconProps> = ({
    fill = 'inherit',
    size = 18,
    style,
}) => (
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
        <title>lock open icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.88574 9.625H6.14768C6.27706 7.23291 6.94843 5.60461 8.01517 4.5618C9.20657 3.39713 10.7262 3.125 11.9998 3.125C13.2733 3.125 14.793 3.39713 15.9844 4.5618C17.0511 5.60461 17.7225 7.23291 17.8518 9.625H19.1315C20.167 9.625 21.0065 10.4645 21.0065 11.5V19.1245C21.0065 20.16 20.167 20.9995 19.1315 20.9995H4.88574C3.85021 20.9995 3.01074 20.16 3.01074 19.1245V11.5C3.01074 10.4645 3.85021 9.625 4.88574 9.625ZM7.9004 9.625C8.02618 7.56658 8.598 6.43932 9.23849 5.8132C9.96512 5.10287 10.9455 4.875 11.9998 4.875C13.054 4.875 14.0344 5.10286 14.761 5.81317L15.9844 4.5618C17.0511 5.60461 17.7225 7.23291 17.8518 9.625H7.9004ZM4.76074 11.5C4.76074 11.431 4.81671 11.375 4.88574 11.375H19.1315C19.2005 11.375 19.2565 11.431 19.2565 11.5V19.1245C19.2565 19.1935 19.2005 19.2495 19.1315 19.2495H4.88574C4.81671 19.2495 4.76074 19.1935 4.76074 19.1245V11.5ZM12.8748 14.5C12.8748 14.0168 12.483 13.625 11.9998 13.625C11.5165 13.625 11.1248 14.0168 11.1248 14.5V16.5C11.1248 16.9832 11.5165 17.375 11.9998 17.375C12.483 17.375 12.8748 16.9832 12.8748 16.5V14.5Z"
            fill={fill}
        />
    </svg>
);
export default LockOpenIcon;

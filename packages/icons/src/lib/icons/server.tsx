import { FC } from 'react';
import { TIconProps } from '../type';
const ServerIcon: FC<TIconProps> = ({ fill = 'inherit', size = 18, style }) => (
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
        <title>server icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.45455 19.3636C5.00268 19.3636 4.63636 18.9973 4.63636 18.5455V15.2727C4.63636 14.8209 5.00268 14.4545 5.45455 14.4545H18.5455C18.9973 14.4545 19.3636 14.8209 19.3636 15.2727V18.5455C19.3636 18.9973 18.9973 19.3636 18.5455 19.3636H5.45455ZM3 18.5455C3 19.9011 4.09894 21 5.45455 21H18.5455C19.9011 21 21 19.9011 21 18.5455V15.2727C21 13.9171 19.9011 12.8182 18.5455 12.8182H5.45455C4.09894 12.8182 3 13.9171 3 15.2727V18.5455ZM6.27273 16.9091C6.27273 17.361 6.63904 17.7273 7.09091 17.7273H7.09909C7.55096 17.7273 7.91727 17.361 7.91727 16.9091C7.91727 16.4572 7.55096 16.0909 7.09909 16.0909H7.09091C6.63904 16.0909 6.27273 16.4572 6.27273 16.9091ZM5.45455 9.54545C5.00268 9.54545 4.63636 9.17914 4.63636 8.72727V5.45455C4.63636 5.00268 5.00268 4.63636 5.45455 4.63636H18.5455C18.9973 4.63636 19.3636 5.00268 19.3636 5.45455V8.72727C19.3636 9.17914 18.9973 9.54545 18.5455 9.54545H5.45455ZM3 8.72727C3 10.0829 4.09894 11.1818 5.45455 11.1818H18.5455C19.9011 11.1818 21 10.0829 21 8.72727V5.45455C21 4.09894 19.9011 3 18.5455 3H5.45455C4.09894 3 3 4.09894 3 5.45455V8.72727ZM6.27273 7.09091C6.27273 7.54278 6.63904 7.90909 7.09091 7.90909H7.09909C7.55096 7.90909 7.91727 7.54278 7.91727 7.09091C7.91727 6.63904 7.55096 6.27273 7.09909 6.27273H7.09091C6.63904 6.27273 6.27273 6.63904 6.27273 7.09091Z"
            fill={fill}
        />
        <path
            d="M9.5 7.09091C9.5 7.54278 9.86631 7.90909 10.3182 7.90909H10.3264C10.7782 7.90909 11.1445 7.54278 11.1445 7.09091C11.1445 6.63904 10.7782 6.27272 10.3264 6.27272H10.3182C9.86631 6.27272 9.5 6.63904 9.5 7.09091Z"
            fill={fill}
        />
    </svg>
);
export default ServerIcon;

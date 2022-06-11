import { FC } from 'react';
import { TIconProps } from '../type';
const Web3ApiIcon: FC<TIconProps> = ({
    fill = 'currentColor',
    size = 18,
    style,
}) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>web3api icon</title>
        <g clipPath="url(#clip0_12659_107961)" style={style}>
            <path
                d="M21.1951 19.982H15.0648C14.8515 19.982 14.6468 19.8972 14.4959 19.7463C14.345 19.5954 14.2603 19.3908 14.2603 19.1774C14.2603 18.964 14.345 18.7593 14.4959 18.6085C14.6468 18.4576 14.8515 18.3728 15.0648 18.3728H19.9447L19.2814 16.9162C19.1957 16.7224 19.19 16.5026 19.2654 16.3046C19.3408 16.1066 19.4913 15.9463 19.6842 15.8586C19.8771 15.7708 20.0968 15.7628 20.2957 15.8361C20.4945 15.9094 20.6563 16.0582 20.7461 16.2501L21.9276 18.8443C21.9833 18.9669 22.0074 19.1015 21.9977 19.2358C21.9879 19.3701 21.9446 19.4998 21.8717 19.613C21.7988 19.7262 21.6986 19.8193 21.5804 19.8838C21.4622 19.9482 21.3297 19.982 21.1951 19.982Z"
                fill={fill}
            />
            <path
                d="M15.0651 19.982H8.93447C8.72108 19.982 8.51643 19.8972 8.36554 19.7463C8.21465 19.5954 8.12988 19.3908 8.12988 19.1774C8.12988 18.964 8.21465 18.7593 8.36554 18.6085C8.51643 18.4576 8.72108 18.3728 8.93447 18.3728H15.0651C15.2784 18.3728 15.4831 18.4576 15.634 18.6085C15.7849 18.7593 15.8696 18.964 15.8696 19.1774C15.8696 19.3908 15.7849 19.5954 15.634 19.7463C15.4831 19.8972 15.2784 19.982 15.0651 19.982Z"
                fill={fill}
            />
            <path
                d="M15.064 19.982C14.8728 19.9817 14.6879 19.9134 14.5425 19.7892C14.3971 19.665 14.3007 19.4931 14.2707 19.3043L13.8558 16.71C13.8391 16.6057 13.8431 16.4991 13.8676 16.3964C13.8921 16.2936 13.9366 16.1967 13.9985 16.1111C14.0604 16.0256 14.1386 15.9531 14.2286 15.8977C14.3186 15.8424 14.4186 15.8053 14.5229 15.7886C14.6272 15.7719 14.7337 15.7759 14.8365 15.8003C14.9393 15.8248 15.0362 15.8693 15.1218 15.9312C15.2073 15.9932 15.2798 16.0714 15.3352 16.1613C15.3905 16.2513 15.4276 16.3513 15.4443 16.4556L15.8592 19.0498C15.8759 19.1542 15.8719 19.2607 15.8474 19.3635C15.8229 19.4662 15.7785 19.5632 15.7165 19.6487C15.6546 19.7343 15.5764 19.8068 15.4864 19.8622C15.3964 19.9175 15.2964 19.9546 15.1921 19.9713C15.1498 19.9784 15.1069 19.9819 15.064 19.982Z"
                fill={fill}
            />
            <path
                d="M8.93438 19.9819H2.8038C2.67054 19.9819 2.53936 19.9488 2.42207 19.8856C2.30477 19.8223 2.20503 19.7309 2.1318 19.6196C2.05858 19.5082 2.01417 19.3804 2.00257 19.2477C1.99096 19.1149 2.01253 18.9814 2.06532 18.859L3.18322 16.2648C3.26761 16.0689 3.42634 15.9146 3.6245 15.8358C3.82266 15.757 4.04401 15.7601 4.23987 15.8445C4.43572 15.9289 4.59004 16.0876 4.66886 16.2858C4.74768 16.4839 4.74456 16.7053 4.66018 16.9011L4.02635 18.3737H8.93438C9.14777 18.3737 9.35242 18.4585 9.50331 18.6094C9.6542 18.7602 9.73897 18.9649 9.73897 19.1783C9.73897 19.3917 9.6542 19.5963 9.50331 19.7472C9.35242 19.8981 9.14777 19.9829 8.93438 19.9829V19.9819Z"
                fill={fill}
            />
            <path
                d="M8.93538 19.982C8.89882 19.9819 8.86229 19.9795 8.82603 19.9748C8.72129 19.9606 8.62036 19.9259 8.52902 19.8727C8.43768 19.8195 8.35772 19.7488 8.2937 19.6647C8.22969 19.5806 8.18288 19.4847 8.15595 19.3825C8.12902 19.2802 8.12249 19.1737 8.13674 19.069L8.48859 16.4747C8.51743 16.2632 8.62912 16.0717 8.79911 15.9425C8.9691 15.8133 9.18345 15.7569 9.39502 15.7858C9.60658 15.8146 9.79802 15.9263 9.92723 16.0963C10.0564 16.2663 10.1128 16.4806 10.084 16.6922L9.73183 19.2864C9.70543 19.479 9.61024 19.6555 9.46385 19.7833C9.31745 19.9112 9.12974 19.9817 8.93538 19.982Z"
                fill={fill}
            />
            <path
                d="M20.0145 17.3874C19.8601 17.3876 19.7089 17.3434 19.5789 17.2601C19.449 17.1767 19.3457 17.0578 19.2813 16.9175L18.0992 14.3223C18.0553 14.2261 18.0307 14.1223 18.0269 14.0166C18.0231 13.911 18.0401 13.8056 18.0771 13.7065C18.114 13.6075 18.17 13.5166 18.2421 13.4392C18.3141 13.3618 18.4006 13.2994 18.4968 13.2555C18.691 13.1667 18.9125 13.1587 19.1126 13.2333C19.2116 13.2702 19.3025 13.3263 19.3799 13.3983C19.4572 13.4703 19.5197 13.5569 19.5636 13.653L20.7461 16.2482C20.802 16.3708 20.8263 16.5054 20.8166 16.6397C20.807 16.7741 20.7638 16.9038 20.691 17.0172C20.6182 17.1305 20.5181 17.2237 20.3999 17.2883C20.2817 17.3529 20.1492 17.3867 20.0145 17.3868V17.3874Z"
                fill={fill}
            />
            <path
                d="M20.0137 17.3874H14.6498C14.4364 17.3874 14.2318 17.3027 14.0809 17.1518C13.93 17.0009 13.8452 16.7962 13.8452 16.5828C13.8452 16.3695 13.93 16.1648 14.0809 16.0139C14.2318 15.863 14.4364 15.7783 14.6498 15.7783H20.0137C20.2271 15.7783 20.4317 15.863 20.5826 16.0139C20.7335 16.1648 20.8183 16.3695 20.8183 16.5828C20.8183 16.7962 20.7335 17.0009 20.5826 17.1518C20.4317 17.3027 20.2271 17.3874 20.0137 17.3874Z"
                fill={fill}
            />
            <path
                d="M14.6501 17.3874H9.28652C9.07313 17.3874 8.86848 17.3027 8.71759 17.1518C8.5667 17.0009 8.48193 16.7962 8.48193 16.5828C8.48193 16.3695 8.5667 16.1648 8.71759 16.0139C8.86848 15.863 9.07313 15.7783 9.28652 15.7783H14.6501C14.8635 15.7783 15.0682 15.863 15.219 16.0139C15.3699 16.1648 15.4547 16.3695 15.4547 16.5828C15.4547 16.7962 15.3699 17.0009 15.219 17.1518C15.0682 17.3027 14.8635 17.3874 14.6501 17.3874Z"
                fill={fill}
            />
            <path
                d="M14.6494 17.3874C14.4582 17.3872 14.2734 17.319 14.1279 17.1948C13.9825 17.0707 13.886 16.8989 13.8558 16.7101L13.6443 15.3763C13.6135 15.1669 13.6664 14.9538 13.7916 14.7831C13.9167 14.6125 14.1041 14.498 14.3131 14.4645C14.5221 14.4311 14.7358 14.4813 14.9081 14.6043C15.0803 14.7274 15.197 14.9133 15.2331 15.1219L15.4459 16.4544C15.4626 16.5587 15.4586 16.6653 15.4341 16.768C15.4096 16.8708 15.3651 16.9677 15.3032 17.0533C15.2413 17.1389 15.1631 17.2114 15.0731 17.2667C14.9831 17.3221 14.8831 17.3592 14.7788 17.3759C14.7361 17.3833 14.6928 17.3872 14.6494 17.3874Z"
                fill={fill}
            />
            <path
                d="M3.92183 17.3874C3.7887 17.3871 3.65774 17.3538 3.54066 17.2904C3.42358 17.2271 3.32403 17.1357 3.25093 17.0244C3.17782 16.9132 3.13344 16.7855 3.12176 16.6529C3.11008 16.5203 3.13145 16.3869 3.18398 16.2645L4.30281 13.6697C4.3446 13.5727 4.40507 13.4849 4.4808 13.4112C4.55652 13.3376 4.646 13.2796 4.74413 13.2406C4.84227 13.2015 4.94713 13.1822 5.05273 13.1837C5.15834 13.1852 5.26262 13.2074 5.35961 13.2492C5.45661 13.291 5.54443 13.3515 5.61806 13.4272C5.69168 13.5029 5.74967 13.5924 5.78872 13.6905C5.82776 13.7887 5.84709 13.8935 5.84561 13.9991C5.84413 14.1047 5.82186 14.209 5.78008 14.306L4.66124 16.9009C4.59916 17.0454 4.496 17.1686 4.36456 17.2551C4.23312 17.3416 4.07918 17.3876 3.92183 17.3874Z"
                fill={fill}
            />
            <path
                d="M9.28618 17.3874H3.92226C3.70887 17.3874 3.50422 17.3027 3.35333 17.1518C3.20244 17.0009 3.11768 16.7962 3.11768 16.5828C3.11768 16.3695 3.20244 16.1648 3.35333 16.0139C3.50422 15.863 3.70887 15.7783 3.92226 15.7783H9.28618C9.49957 15.7783 9.70422 15.863 9.85511 16.0139C10.006 16.1648 10.0908 16.3695 10.0908 16.5828C10.0908 16.7962 10.006 17.0009 9.85511 17.1518C9.70422 17.3027 9.49957 17.3874 9.28618 17.3874Z"
                fill={fill}
            />
            <path
                d="M9.28707 17.3874C9.25061 17.3873 9.2142 17.3849 9.17804 17.3802C8.96653 17.3515 8.77508 17.2399 8.64582 17.07C8.51656 16.9002 8.46006 16.6859 8.48876 16.4744L8.66954 15.1419C8.69991 14.9318 8.81206 14.7422 8.98157 14.6144C9.15107 14.4866 9.36421 14.4309 9.57456 14.4595C9.78492 14.4881 9.97546 14.5986 10.1047 14.767C10.2339 14.9354 10.2914 15.1481 10.2646 15.3587L10.0838 16.6921C10.0572 16.8846 9.96192 17.061 9.8155 17.1888C9.66908 17.3166 9.4814 17.3871 9.28707 17.3874Z"
                fill={fill}
            />
            <path
                d="M18.8319 14.7923C18.6774 14.7923 18.5261 14.7478 18.3962 14.6642C18.2662 14.5806 18.1631 14.4613 18.099 14.3207L17.1318 12.198H16.5707C16.3573 12.198 16.1527 12.1133 16.0018 11.9624C15.8509 11.8115 15.7661 11.6068 15.7661 11.3935C15.7661 11.1801 15.8509 10.9754 16.0018 10.8245C16.1527 10.6736 16.3573 10.5889 16.5707 10.5889H17.6494C17.8037 10.5888 17.9547 10.6331 18.0845 10.7164C18.2143 10.7998 18.3174 10.9186 18.3816 11.0588L19.5635 13.654C19.6517 13.8482 19.6592 14.0695 19.5843 14.2692C19.5095 14.469 19.3584 14.6308 19.1643 14.7193C19.0601 14.7673 18.9467 14.7922 18.8319 14.7923Z"
                fill={fill}
            />
            <path
                d="M18.8317 14.7923H16.14C15.9267 14.7923 15.722 14.7075 15.5711 14.5566C15.4202 14.4057 15.3354 14.2011 15.3354 13.9877C15.3354 13.7743 15.4202 13.5697 15.5711 13.4188C15.722 13.2679 15.9267 13.1831 16.14 13.1831H18.8317C19.0451 13.1831 19.2498 13.2679 19.4007 13.4188C19.5516 13.5697 19.6363 13.7743 19.6363 13.9877C19.6363 14.2011 19.5516 14.4057 19.4007 14.5566C19.2498 14.7075 19.0451 14.7923 18.8317 14.7923Z"
                fill={fill}
            />
            <path
                d="M5.0402 14.7923C4.90711 14.7919 4.77619 14.7586 4.65914 14.6953C4.54209 14.6319 4.44258 14.5405 4.3695 14.4293C4.29642 14.3181 4.25207 14.1905 4.2404 14.0579C4.22874 13.9253 4.25013 13.7919 4.30266 13.6697L5.42056 11.0751C5.48259 10.9307 5.58562 10.8077 5.71688 10.7213C5.84814 10.6348 6.00188 10.5888 6.15904 10.5889H7.38096C7.59435 10.5889 7.799 10.6736 7.94989 10.8245C8.10078 10.9754 8.18555 11.1801 8.18555 11.3935C8.18555 11.6068 8.10078 11.8115 7.94989 11.9624C7.799 12.1133 7.59435 12.198 7.38096 12.198H6.68854L5.77993 14.306C5.71788 14.4506 5.61468 14.5739 5.48315 14.6603C5.35163 14.7468 5.19759 14.7927 5.0402 14.7923Z"
                fill={fill}
            />
            <path
                d="M7.73308 14.7923H5.0414C4.82801 14.7923 4.62336 14.7075 4.47247 14.5566C4.32159 14.4057 4.23682 14.2011 4.23682 13.9877C4.23682 13.7743 4.32159 13.5697 4.47247 13.4188C4.62336 13.2679 4.82801 13.1831 5.0414 13.1831H7.73308C7.94647 13.1831 8.15112 13.2679 8.30201 13.4188C8.4529 13.5697 8.53767 13.7743 8.53767 13.9877C8.53767 14.2011 8.4529 14.4057 8.30201 14.5566C8.15112 14.7075 7.94647 14.7923 7.73308 14.7923Z"
                fill={fill}
            />
            <path
                d="M10.3158 9.02321C10.1504 9.02338 9.98889 8.97256 9.85335 8.87765C9.71781 8.78275 9.61481 8.64838 9.55837 8.49284C9.50194 8.3373 9.49481 8.16814 9.53796 8.0084C9.5811 7.84867 9.67243 7.70611 9.79951 7.60014L12.1675 5.62627H9.64003C9.53436 5.62631 9.42972 5.60552 9.33208 5.5651C9.23445 5.52468 9.14574 5.46542 9.07101 5.3907C8.99629 5.31598 8.93703 5.22727 8.89661 5.12963C8.85619 5.03199 8.83541 4.92735 8.83545 4.82168C8.83541 4.71601 8.85619 4.61136 8.89661 4.51373C8.93703 4.41609 8.99629 4.32738 9.07101 4.25266C9.14574 4.17794 9.23445 4.11867 9.33208 4.07825C9.42972 4.03783 9.53436 4.01705 9.64003 4.01709H14.3902C14.5559 4.01691 14.7176 4.06787 14.8533 4.16303C14.989 4.25819 15.0921 4.3929 15.1484 4.54878C15.2048 4.70428 15.2118 4.87337 15.1687 5.03304C15.1255 5.19271 15.0342 5.3352 14.9071 5.4411L10.8303 8.83678C10.6859 8.95719 10.5039 9.02316 10.3158 9.02321Z"
                fill={fill}
            />
            <path
                d="M12.0124 13.7784C10.5637 13.7784 9.63127 13.398 8.99555 12.5449C8.93231 12.4603 8.88636 12.3641 8.8603 12.2617C8.83425 12.1593 8.82861 12.0529 8.84371 11.9483C8.85881 11.8438 8.89435 11.7433 8.94831 11.6525C9.00226 11.5617 9.07357 11.4824 9.15816 11.4191C9.32901 11.2914 9.54359 11.2368 9.75471 11.2673C9.96582 11.2978 10.1562 11.4109 10.2839 11.5817C10.5126 11.8866 10.8792 12.1695 12.0124 12.1695C12.219 12.1695 12.4234 12.1288 12.6142 12.0498C12.805 11.9708 12.9784 11.855 13.1244 11.7089C13.2704 11.5629 13.3862 11.3896 13.4653 11.1988C13.5443 11.008 13.585 10.8035 13.585 10.597C13.585 10.3905 13.5443 10.186 13.4653 9.99523C13.3862 9.80444 13.2704 9.63109 13.1244 9.48507C12.9784 9.33905 12.805 9.22322 12.6142 9.14419C12.4234 9.06516 12.219 9.02449 12.0124 9.02449H10.3146C10.1012 9.02449 9.89656 8.93972 9.74567 8.78883C9.59478 8.63794 9.51001 8.43329 9.51001 8.2199C9.51001 8.00651 9.59478 7.80186 9.74567 7.65098C9.89656 7.50009 10.1012 7.41532 10.3146 7.41532H12.0124C12.4329 7.41115 12.85 7.49036 13.2397 7.64837C13.6294 7.80639 13.9838 8.04007 14.2826 8.33592C14.5814 8.63177 14.8186 8.98391 14.9805 9.37198C15.1424 9.76005 15.2257 10.1764 15.2257 10.5968C15.2257 11.0173 15.1424 11.4336 14.9805 11.8217C14.8186 12.2098 14.5814 12.5619 14.2826 12.8578C13.9838 13.1536 13.6294 13.3873 13.2397 13.5453C12.85 13.7033 12.4329 13.7825 12.0124 13.7784Z"
                fill={fill}
            />
        </g>
        <defs>
            <clipPath id="clip0_12659_107961">
                <rect
                    width="20"
                    height="15.9633"
                    fill="white"
                    transform="translate(2 4.01837)"
                />
            </clipPath>
        </defs>
    </svg>
);
export default Web3ApiIcon;

import { FC } from 'react';
import { TIconProps } from '../type';
const MaticIcon: FC<TIconProps> = ({
    fill = 'currentColor',
    size = 18,
    style,
}) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        id="polygon-matic-logo"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size / 1.13690194}
        viewBox="0 0 24 21.11"
        style={style}
    >
        <title>matic icon</title>
        <path
            id="Path_1721"
            data-name="Path 1721"
            d="M18.172,6.352a1.6,1.6,0,0,0-1.5,0L13.159,8.419,10.778,9.735,7.332,11.8a1.6,1.6,0,0,1-1.5,0L3.133,10.173a1.527,1.527,0,0,1-.752-1.315V5.726A1.545,1.545,0,0,1,3.133,4.41L5.828,2.844a1.6,1.6,0,0,1,1.5,0l2.695,1.629a1.527,1.527,0,0,1,.752,1.315V7.855l2.381-1.378V4.348a1.545,1.545,0,0,0-.752-1.315L7.394.088a1.6,1.6,0,0,0-1.5,0L.752,3.095A1.378,1.378,0,0,0,0,4.348v5.888a1.545,1.545,0,0,0,.752,1.315L5.828,14.5a1.6,1.6,0,0,0,1.5,0l3.446-2,2.381-1.378,3.446-2a1.6,1.6,0,0,1,1.5,0L20.8,10.674a1.527,1.527,0,0,1,.752,1.315v3.132a1.545,1.545,0,0,1-.752,1.315L18.172,18a1.6,1.6,0,0,1-1.5,0l-2.695-1.566a1.527,1.527,0,0,1-.752-1.315v-2L10.841,14.5v2.067a1.545,1.545,0,0,0,.752,1.315l5.076,2.944a1.6,1.6,0,0,0,1.5,0l5.076-2.944A1.527,1.527,0,0,0,24,16.562V10.612A1.545,1.545,0,0,0,23.248,9.3Z"
            transform="translate(0 0.1)"
            fill={fill || '#8247E5'}
        />
    </svg>
);
export default MaticIcon;

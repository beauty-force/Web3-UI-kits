import { FC } from 'react';
import styled from 'styled-components';
import { color } from '@web3uikit/styles';
import { Typography } from '../../Typography';
import { ICredentialsHeaderProps } from '../types';

const HeaderStyled = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
`;

const CredentialsHeader: FC<ICredentialsHeaderProps> = ({
    title,
    titleColor = color.blueDark,
    icon,
    iconColor = color.grey,
    iconSize = 24,
}) => {
    if (!title && !icon) return null;
    return (
        <HeaderStyled>
            {icon && icon}
            {title && (
                <Typography
                    variant="body16"
                    weight="600"
                    color={titleColor}
                    data-testid="cred-test-header-text"
                >
                    {title}
                </Typography>
            )}
        </HeaderStyled>
    );
};

export default CredentialsHeader;

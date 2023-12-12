import styled from 'styled-components';
import { ReactComponent as Shoppingsvg } from '../../assets/shopping-bag.svg'

export const ShoppingIcon = styled(Shoppingsvg)`
    width: 70px;
    height: 69px;
`;

export const CartIconContainer = styled.div`
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ItemCount = styled.span`
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    bottom: 7px;
`;
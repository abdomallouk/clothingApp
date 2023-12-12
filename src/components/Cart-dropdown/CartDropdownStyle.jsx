import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton} from '../Button/ButtonStyle';

export const CartDropdownContainer = styled.div`
      position: absolute;
      width: 240px;
      height: 369px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      border: 1px solid black;
      background-color: white;
      top: 90px;
      right: 106px;
      z-index: 5;

      ${BaseButton},
      ${GoogleSignInButton},
      ${InvertedButton}, {
        margin-top: auto;
      }
`

export const EmptyMessage = styled.span `
    font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

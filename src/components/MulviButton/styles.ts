import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled.a`
    @media (min-width: 375px) {
        padding: 16px 32px;
        background: ${({theme}) => theme.colors.text_menu};
        border-radius: 40px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        text-decoration: none;
        text-align: center;
        display: grid;
    }

  @media (min-width: 1024px) {
    padding: 16px 32px;
    background: ${({ theme }) => theme.colors.text_menu};
    border-radius: 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    text-decoration: none;
    width: 184px;
  }

  @media (min-width: 1440px) {
    padding: 16px 32px;
    background: ${({ theme }) => theme.colors.text_menu};
    border-radius: 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    text-decoration: none;
  }

  &:focus {
    color: #ffffff;
    outline: none;
  }

  a {
    color: #ffffff;
    outline: none;
  }
`;

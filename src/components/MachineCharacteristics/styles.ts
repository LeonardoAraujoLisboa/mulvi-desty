import styled from "styled-components";

export const Container = styled.div`

`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 8px;
    color: ${({theme}) => theme.colors.text_menu};
`

export const List = styled.ul`
    margin-bottom: 0px;
    padding-left: 0px;
`

export const ListItem = styled.li`
    list-style: none;
    color: ${({theme}) => theme.colors.text_secundary};

    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

    @media (min-width: 1024px) {
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
    }

    @media (min-width: 1440px) {
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
    }
`
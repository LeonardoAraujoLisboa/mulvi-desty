import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 375px) {
        display: flex;
    }

    @media (min-width: 1024px) {
        display: flex;
    }

    @media (min-width: 1440px) {
        display: flex;
    }
`

export const Icon = styled.img`

`

export const Title = styled.h2`
    @media (min-width: 375px) {
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;

        span {
            display: block;
            font-weight: 400;
            font-size: 14px;
            line-height: 19.07px;
        } 
    }

    @media (min-width: 1024px) {
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 0px;

        span {
            display: block;
            font-weight: 600;
            font-size: 13px;
            line-height: 17.7px;
        } 
    }

    @media (min-width: 1440px) {
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 0px;

        span {
            display: block;
            font-weight: 600;
            font-size: 13px;
            line-height: 17.7px;
        } 
    }
`
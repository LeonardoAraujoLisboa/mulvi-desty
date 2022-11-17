import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.background_primary};
    position: relative;

    @media (min-width: 375px) {
        margin-top: 40px;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    @media (min-width: 1024px) {
        margin-top: 80px;
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (min-width: 1440px) {
        margin-top: 0px;
        padding-top: 187.5px;
        padding-bottom: 187.5px;
    }
`

export const Title = styled.h1`
    @media (min-width: 375px) {
        padding-bottom: 32px;
        text-align: center;
        margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 48px;
        text-align: left;
        padding-left: 40px;
        margin-bottom: 0px;
    }

    @media (min-width: 1440px) {
        padding-bottom: 43px;
        text-align: left;
        padding-left: 65px;
        margin-bottom: 0px;
    }
`

export const Icon = styled.img`
    @media (min-width: 375px) {
        &.mulvi-icon-desktop {
            display: none;
        }

        &.mulvi-icon-tablet {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        position: absolute;
        right: 0px;
        top: 26px;

        &.mulvi-icon-desktop {
            display: none;
        }

        &.mulvi-icon-tablet {
            display: block;
        }
    }

    @media (min-width: 1440px) {
        position: absolute;
        right: -10px;
        top: 26px;

        &.mulvi-icon-desktop {
            display: block;
        }

        &.mulvi-icon-tablet {
            display: none;
        }
    }
`
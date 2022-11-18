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
        display: grid;
        justify-content: center;
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
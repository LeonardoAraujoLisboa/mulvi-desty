import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    @media (min-width: 375px) {
        #btn-mobile {
            margin-top: 40px;
            margin-bottom: 40px;
        }
    }

    @media (min-width: 1024px) {
        padding-left: 40px;
        padding-right: 40px;

        #btn-mobile {
            display: none;
        }
    }

    @media (min-width: 1440px) {
        #btn-mobile {
            display: none;
        }
    }
`

export const BannerImg = styled.img`
    @media (min-width: 375px) {
        &.banner-home {
            display: none;
        }

        &.banner-home-mobile {
            width: 100%;
        }
    }

    @media (min-width: 1024px) {
        &.banner-home {
            width: 100%;
            display: block;
        }

        &.banner-home-mobile {
            display: none;
        }
    }

    @media (min-width: 1440px) {
        &.banner-home {
            width: 100%;
            display: block;
        }

        &.banner-home-mobile {
            display: none;
        }
    }
`

export const ContentText = styled.div`
    position: absolute;

    @media (min-width: 375px) {
        top: 23px;
        left: 32px;
        margin-bottom: 24px;

        .btn-mulvi {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        top: 62px;
        left: 80px;

        .btn-mulvi {
            display: block;
        }
    }

    @media (min-width: 1440px) {
        top: 153px;
        left: 110px;

        .btn-mulvi {
            display: block;
        }
    }
`

export const Title = styled.h3`
    @media (min-width: 375px) {
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        color: ${({theme}) => theme.colors.text_secundary};
        max-width: 200px;
    }

    @media (min-width: 1024px) {
        font-weight: 700;
        font-size: 40px;
        line-height: 54px;
        color: ${({theme}) => theme.colors.text_secundary};
        max-width: 266px;
    }

    @media (min-width: 1440px) {
        font-weight: 700;
        font-size: 40px;
        line-height: 54px;
        color: ${({theme}) => theme.colors.text_secundary};
        max-width: 266px;
    }
`

export const SubTitle = styled.h4`
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    color: ${({theme}) => theme.colors.text_secundary};
    margin-bottom: 76px;
    max-width: 457px;

    @media (min-width: 375px) {
        font-size: 28px;
        line-height: 38px;
        max-width: 400px;
    }

    @media (min-width: 1024px) {
        max-width: 379px;
        margin-bottom: 52px;
    }
`


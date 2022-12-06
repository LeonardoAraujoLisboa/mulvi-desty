import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 375px) {
        padding-right: 15px;
        padding-left: 15px;
    }

    @media (min-width: 1024px) {
        padding-right: 40px;
        padding-left: 40px;
    }

    @media (min-width: 1440px) {
        padding-top: 80px;
        padding-right: 65px;
        padding-left: 177px;
    }
`

export const ContentWhoWeAre = styled.div`
    @media (min-width: 1440px) {
        display: flex;
        gap: 72px;
        align-items: center;
    }
`

export const WrapperImage = styled.div`
    @media (min-width: 375px) {
        width: 100%;
        text-align: center;
    }

    @media (min-width: 1024px) {
        width: 100%;
        text-align: center;
    }
`

export const WhoWeAreImg = styled.img`
    @media (min-width: 375px) {
        width: 201.15px;
        height: 192.7px;
    }

    @media (min-width: 1024px) {
        width: 556.5px;
        height: 533.12px;
    }

    @media (min-width: 1024px) {
        width: 415.37px;
        height: 397.92px;
    }
`

export const ContentText = styled.div`
    .know-more {
        display: flex;
        align-items: center;
    }

    @media (min-width: 375px) {
        padding-top: 40px;

        .know-more {
            margin-top: 21px;
            svg {
                margin-left: 16px;
            }
        }
    }

    @media (min-width: 1024px) {
        padding-top: 80px;
        .know-more {
            margin-top: 48px;
            svg {
                margin-left: 16px;
            }
        }
    }

    @media (min-width: 1440px) {
        .know-more {
            margin-top: 24px;
            svg {
                margin-left: 16px;
            }
        }
    }
`

export const Title = styled.p`
    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: ${({theme}) => theme.colors.text_secundary};
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: ${({theme}) => theme.colors.text_secundary};
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: ${({theme}) => theme.colors.text_secundary};
    }
`

export const SubTitle = styled.h1`
    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: ${({theme}) => theme.colors.text_secundary};
        margin-bottom: 24px;
    }

    @media (min-width: 1024px) {
        margin-bottom: 48px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 48px;
        font-weight: 400;
        font-size: 36px;
        line-height: 47px;
        max-width: 591px;
    }
`

export const Text = styled.p`
    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: ${({theme}) => theme.colors.text_secundary};

        &:nth-child(5) {
            margin-bottom: 0px;
        }
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: ${({theme}) => theme.colors.text_secundary};

        &:nth-child(5) {
            margin-bottom: 0px;
        }
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: ${({theme}) => theme.colors.text_secundary};

        &:nth-child(5) {
            margin-bottom: 0px;
        }
    }
`


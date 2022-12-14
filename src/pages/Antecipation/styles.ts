import styled from "styled-components";

export const Container = styled.div`
    
`

export const ContentPage = styled.div`

`

export const ContentTitle = styled.div`
`

export const PageTitle = styled.p`
    @media (min-width: 375px) {
        text-align: center;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        margin-top: 140px;
    }

    @media (min-width: 1024px) {
        margin-bottom: 60px;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: ${({theme}) => theme.colors.text_secundary};
        text-align: center;
        margin-top: 140px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 60px;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: ${({theme}) => theme.colors.text_secundary};
        text-align: center;
    }
`

export const Title = styled.h4`
    font-family: 'Elizeth Regular', Arial, Helvetica, sans-serif;

    @media (min-width: 375px) {
        text-align: center;
        margin: auto;
        margin-bottom: 16px;
        max-width: 375px;
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 48px;
        line-height: 68px;
        text-align: center;
        color: ${({theme}) => theme.colors.text_menu};
        margin-bottom: 16px;
        padding-left: 46px;
        padding-right: 46px;
        max-width: fit-content;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 48px;
        line-height: 68px;
        text-align: center;
        color: ${({theme}) => theme.colors.text_menu};
        margin-bottom: 16px;
        padding-left: 176px;
        padding-right: 176px;
        max-width: 1370px;
    }
`

export const Subtitle = styled.div`
    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        max-width: 347px;
        text-align: center;
        margin: auto;
        margin-bottom: 40px;
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 31px;
        text-align: center;
        color: ${({theme}) => theme.colors.text_menu};
        padding-left: 99px;
        padding-right: 99px;
        margin: auto;
        margin-bottom: 48px;
        max-width: 1088px;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 31px;
        text-align: center;
        color: ${({theme}) => theme.colors.text_menu};
        margin: auto;
        max-width: 1088px;
        margin-bottom: 48px;
    }
`

export const WrapperBanner = styled.div`
    @media (min-width: 1024px) {
        padding-left: 176px;
        padding-right: 176px;
        margin-bottom: 47px;
        text-align: center;
    }

    @media (min-width: 1440px) {
        padding-left: 116px;
        padding-right: 118px;
        margin-bottom: 40px;
    }
`

export const ContentBanner = styled.img`
    border-radius: 16px;
    width: 100%;
`

export const ContentInfo = styled.div`
    @media (min-width: 375px) {
        max-width: 343px;
        margin: auto;
        margin-top: 40px;
    }

    @media (min-width: 1024px) {
        margin-bottom: 80px;
        margin: auto;
        max-width: 640px;
    }

    @media (min-width: 1440px) {
        padding-left: 0px;
        padding-right: 0px;
        margin-bottom: 40px;
    }
`

export const Date = styled.p`
    @media (min-width: 1024px) {
        font-weight: 600;
        font-size: 13px;
        line-height: 36px;
        color: ${({theme}) => theme.colors.text_menu};
    }

    @media (min-width: 1440px) {
        font-weight: 600;
        font-size: 13px;
        line-height: 36px;
        color: ${({theme}) => theme.colors.text_menu};
    }
`

export const InfoTitle = styled.h5`
    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        color: ${({theme}) => theme.colors.text_secundary};
        margin-bottom: 16px;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        color: ${({theme}) => theme.colors.text_secundary};
    }
`

export const InfoText = styled.p`
    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 21.79px;
        color: ${({theme}) => theme.colors.text_secundary};
        margin-bottom: 16px;

        &.last-text {
            margin-bottom: 0px;
        }
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 21.79px;
        color: ${({theme}) => theme.colors.text_secundary};

        &.last-text {
            margin-bottom: 0px;
        }
    }
`

export const List = styled.ul`

`

export const ListItem = styled.li`

`


export const Divider = styled.div`
    @media (min-width: 375px) {
        margin-top: 40px;
        margin-bottom: 40px;
        background-color: ${({theme}) => theme.colors.border_color};
        height: 1px;
    }

    @media (min-width: 1024px) {
        margin-top: 40px;
        margin-bottom: 40px;
        background-color: ${({theme}) => theme.colors.border_color};
        height: 1px;
    }

    @media (min-width: 1440px) {
        margin-top: 40px;
        margin-bottom: 40px;
        background-color: ${({theme}) => theme.colors.border_color};
        height: 1px;
    }
`

export const MoreContents = styled.div`
    @media (min-width: 1440px) {
        margin-bottom: 120px;
    }
`

export const TitleMoreContent = styled.p`
    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: ${({theme}) => theme.colors.text_secundary};
        margin-bottom: 40px
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: ${({theme}) => theme.colors.text_secundary};
        margin-bottom: 40px
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: ${({theme}) => theme.colors.text_secundary};
        margin-bottom: 40px;
    }
`

export const Link = styled.a`
    text-decoration: underline;
    color: ${({theme}) => theme.colors.text_secundary};
    &:hover {
        color: ${({theme}) => theme.colors.text_secundary};
    }
`
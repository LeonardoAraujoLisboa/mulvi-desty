import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.background_solutions};

    @media (min-width: 375px) {
        margin-top: 40px;
    }

    @media (min-width: 1024px) {
        margin-top: 80px;
    }

    @media (min-width: 1440px) {
        margin-top: 87px;
    }
`

export const ContentIcon = styled.div`
    @media (min-width: 375px) {
        display: flex;
        justify-content: center;
        margin-bottom: 37.15px;

        svg {
            width: 272.2px;
            height: 112.8px;
        }
    }

    @media (min-width: 1024px) {
        padding-bottom: 31px;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        margin-bottom: 31px;
        display: flex;
        justify-content: center;

        svg {
            width: 603px;
            height: 250px;
        }
    }

    @media (min-width: 1440px) {
        display: flex;
        justify-content: center;

        svg {
            width: 603px;
            height: 250px;
        }
    }
`

export const WrapperFooter = styled.div`
    @media (min-width: 375px) {
        padding-left: 26px;
        padding-right: 18px;
    }   

    @media (min-width: 1024px) {
        padding-left: 40px;
        padding-right: 40px;
    }
    
    @media (min-width: 1440px) {
        padding-left: 65px;
        padding-right: 65px;
    }
`

export const ContentMenu = styled.div`
    @media (min-width: 375px) {
        text-align: center;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        padding-bottom: 32px;
    }

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        padding-bottom: 32px;
    }

    @media (min-width: 1440px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        padding-bottom: 32px;
        padding-top: 144px;
    }
`

export const MenuContainer = styled.div`
    @media (min-width: 375px) {
        display: none;
    }

    @media (min-width: 1024px) {
        display: flex;
        gap: 16px;
    }

    @media (min-width: 1440px) {
        display: flex;
        gap: 26.8px;
    }
`

export const MenuItem = styled.a`
    &:hover {
        color: ${({theme}) => theme.colors.text_link} !important;
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px; 
        color: ${({theme}) => theme.colors.text_menu};
        text-decoration: none;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px; 
        color: ${({theme}) => theme.colors.text_menu};
        text-decoration: none;
    }
`

export const ContainerCentralSocial = styled.div`
    @media (min-width: 375px) {
        margin-top: 32px;
    }

    @media (min-width: 1024px) {
        margin-top: 60px;
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr;
    }

    @media (min-width: 1440px) {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        padding-bottom: 76px;
    }
`

export const ContentCentral = styled.div`
    @media (min-width: 375px) {
        text-align: center;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
    }

    @media (min-width: 1024px) {
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        padding-bottom: 60px;
        margin: 0 auto;
        width: 100%;
    }

    @media (min-width: 1440px) {
        border-bottom: none;
        padding-bottom: 0px;
        margin: 0;
    }
`

export const Title = styled.h3`
    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: ${({theme}) => theme.colors.text_menu};
        margin-bottom: 32px;
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: ${({theme}) => theme.colors.text_menu};

        &.central-attendance {
            text-align: center;
            width: fit-content;
        }

        &.title-talk {
            text-align: center;
            margin-top: 60px;
        }
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: ${({theme}) => theme.colors.text_menu};
        margin-bottom: 32px;

        &.central-attendance {
            text-align: left;
        }

        &.title-talk {
            text-align: left;
            width: max-content;
            margin-top: 0px;
        }
    }
`

export const ContentContact = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        gap: 82px;
        justify-content: center;
        width: fit-content;
    }

    @media (min-width: 1440px) {
        display: flex;
        gap: 82px;
    }
`

export const ContentLocales = styled.div`
    @media (min-width: 375px) {
        margin-bottom: 32px;
        text-align: center;
    }

    @media (min-width: 1024px) {
        text-align: left;
    }

    @media (min-width: 1440px) {
        text-align: left;
    }
`

export const Contact = styled.p`
    color: ${({theme}) => theme.colors.text_menu};

    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 0px;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 0px;
    }
`


export const ContentSocialMedia = styled.div`
    @media (min-width: 375px) {
        margin-top: 32px;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        padding-bottom: 32px;
    }

    @media (min-width: 1024px) {
        margin-top: 0px;
        border-bottom: none;
        padding-bottom: 0px;
    }
`

export const ContentMedias = styled.div`
    @media (min-width: 375px) {
        text-align: center;

        a:nth-child(1), a:nth-child(2) {
            margin-right: 32px;
        }
    }

    @media (min-width: 1024px) {
        text-align: center;

        a:nth-child(1), a:nth-child(2) {
            margin-right: 24px;
        }
    }

    @media (min-width: 1440px) {
        display: flex;
        justify-content: flex-end;
        gap: 24px;
    }
`

export const ContainerPolitic = styled.div`
    @media (min-width: 375px) {
        margin-top: 32px;
    }

    @media (min-width: 1024px) {
        margin-top: 31px;
    }

    @media (min-width: 1440px){
        margin-top: 21.5px;
    }
`
export const ContentPolitic = styled.div`
    @media (min-width: 375px) {
        display: grid;
        justify-content: center;
    }

    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        gap: 62px;
    }

    @media (min-width: 1440px) {
        display: flex;
        justify-content: center;
        gap: 62px;
    }
`
export const PoliticItem = styled.a`
    &:hover {
        color: ${({theme}) => theme.colors.text_link} !important;
    }

    @media (min-width: 375px) {
        text-align: center;
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        color: ${({theme}) => theme.colors.text_menu};
        text-decoration: none;

        &:nth-child(1), &:nth-child(2), &:nth-child(3) {
            margin-bottom: 16px;
        }
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        color: ${({theme}) => theme.colors.text_menu};
        text-decoration: none;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        color: ${({theme}) => theme.colors.text_menu};
        text-decoration: none;
    }
`

export const ContainerInfoCompany = styled.div`
    background-color: ${({theme}) => theme.colors.background_company};

    @media (min-width: 375px) {
        margin-top: 23px;
        padding-left: 31px;
        padding-right: 23px;
        padding-bottom: 17px;
        padding-top: 8px;
    }

    @media (min-width: 1024px) {
        height: 50px;
        margin-top: 31px;
        display: grid;
        align-items: center;
    }

    @media (min-width: 1440px) {
        height: 59px;
        margin-top: 27.5px;
        display: grid;
        align-items: center;
    }
`

export const TextCompany = styled.p`
    @media (min-width: 375px)  {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        margin-bottom: 0px;
        color: ${({theme}) => theme.colors.text_menu};
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
        margin-bottom: 0px;
        color: ${({theme}) => theme.colors.text_menu};
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
        margin-bottom: 0px;
        color: ${({theme}) => theme.colors.text_menu};
    }
`
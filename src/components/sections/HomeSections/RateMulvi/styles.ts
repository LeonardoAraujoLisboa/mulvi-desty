import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 375px) {
        margin-top: 40px;
        padding-left: 16.5px;
        padding-right: 16.5px;
    }

    @media (min-width: 1440px) {
        margin-top: 166px;
        padding-left: 117px;
        padding-right: 117px;
    }

    @media (min-width: 1024px) {
        margin-top: 88.50px;
        padding-left: 40px;
        padding-right: 40px;
    }
`

export const ContentWrapper = styled.div`
    @media (min-width: 1024px) {
        margin-top: 48px;
        padding: 45px 104.45px;
        display: grid;
        justify-content: center;
        height: 545px;
        background-color: ${({theme}) => theme.colors.background_rate};
        border-radius: 32px;
    }

    @media (min-width: 1440px) {
        margin-top: 48px;
        padding: 54px 184px;
        display: grid;
        justify-content: center;
        height: 545px;
        background-color: ${({theme}) => theme.colors.background_rate};
        border-radius: 32px;
    }
`

export const ContentInformation = styled.div`
    @media (min-width: 375px) {
        .btn-mulvi {
            text-align: center;
            margin-bottom: 40px;
        }
    }

    @media (min-width: 1024px) {
        .btn-mulvi {
            text-align: center;
        }
    }

    @media (min-width: 1440px) {
        .btn-mulvi {
            text-align: center;
        }
    }
`

export const Title = styled.h1`
    @media (min-width: 375px) {
        text-align: left;
        padding-bottom: 24px;
        margin: 0 auto;
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        max-width: 341px;
    }

    @media (min-width: 1024px) {
        text-align: center;
        padding-bottom: 40px;
        margin: 0 auto;
        font-weight: 400;
        font-size: 36px;
        line-height: 47px;
    }

    @media (min-width: 1440px) {
        text-align: center;
        padding-bottom: 40px;
        margin: 0 auto;
        max-width: 306px;
        font-weight: 400;
        font-size: 36px;
        line-height: 47px;
    }
`

export const InfoText = styled.p`
    color: ${({theme}) => theme.colors.text_secundary};

    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: left;
        padding-bottom: 40px;
        margin: 0 auto;
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        padding-bottom: 48px;
        margin: 0 auto;
        max-width: 825px;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        padding-bottom: 51px;
        margin: 0 auto;
        max-width: 825px;
    }
`

export const ContentSimulate = styled.div`
    @media (min-width: 1440px) {
        display: flex;
        gap: 64px;
    }

    @media (min-width: 1024px) {
        display: flex;
        gap: 80px; 
    }
`

export const TitleSimulate = styled.h1`
    @media (min-width: 375px) {
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;

        .attention-strong {
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
        }
    } 

    @media (min-width: 1024px) {
        margin-bottom: 16px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 33px;
    }
`

export const SimulationData = styled.div`
    @media (min-width: 375px) {
        margin-bottom: 30px;
    }

    @media (min-width: 1440px) {
        width: 305px;
        height: 414px;
    }

    @media (min-width: 1024px) {
        width: 305px;
        height: 363px;
    }
`

export const WrapperInput = styled.div`
    @media (min-width: 1024px) {
        margin-bottom: 16px;

        &.card-flags {
            margin-bottom: 0px;
        }
    }

    @media (min-width: 1440px) {
        margin-bottom: 33px;

        &.card-flags {
            margin-bottom: 0px;
        }
    }
`

export const SimulationResults = styled.div`
    background-color: ${({theme}) => theme.colors.background_primary};

    @media (min-width: 375px) {
        border-radius: 34px;
        padding: 32px;
        height: fit-content;
        margin-top: 5px;
    }

    @media (min-width: 1024px) {
        width: 350px;
        border-radius: 34px;
        padding: 32px;
        height: fit-content;
        margin-top: 5px;
    }

    @media (min-width: 1440px) {
        width: 350px;
        border-radius: 34px;
        padding: 32px;
        height: 437px;
    }
`

export const TitleResults = styled.h1`
    color: ${({theme}) => theme.colors.text_secundary};

    @media (min-width: 375px) {
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 24px;

        &.title {
            display: none;
        }

        &.title-mobile {
            display: block;
        }
    }

    @media (min-width: 1024px) {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 16px;

        &.title {
            display: block;
        }

        &.title-mobile {
            display: none;
        }
    }

    @media (min-width: 1440px) {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 24px;

        &.title {
            display: block;
        }

        &.title-mobile {
            display: none;
        }
    }
`

export const ContainerResults = styled.div`
     @media (min-width: 375px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        padding-bottom: 24px;

        &.credit-result {
            margin-top: 16px;

            .content-rate {
                align-self: flex-end;
            }
        }

        &.credit-installments {
            margin-top: 16px;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            border-bottom: none;
            padding-bottom: 0px;
        }
    }

     @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        padding-bottom: 16px;

        &.credit-result {
            margin-top: 16px;

            .content-rate {
                align-self: flex-end;
            }
        }

        &.credit-installments {
            margin-top: 16px;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            border-bottom: none;
            padding-bottom: 0px;
        }
    }

    @media (min-width: 1440px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
        padding-bottom: 24px;

        &.credit-result {
            margin-top: 24px;

            .content-rate {
                align-self: flex-end;
            }
        }

        &.credit-installments {
            margin-top: 24px;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            border-bottom: none;
            padding-bottom: 0px;
        }
    }
`

export const ContentFlag = styled.div`
    @media (min-width: 375px) {
        align-self: flex-end;

        &.content-flag {
            width: 392px;
        }
    }

    @media (min-width: 1024px) {
        align-self: flex-end;

        &.content-flag {
            width: 392px;
        }
    }

    @media (min-width: 1440px) {
        align-self: flex-end;

        &.content-flag {
            width: 392px;
        }
    }
`

export const OptionTitle = styled.h3`
    color: ${({theme}) => theme.colors.text_secundary};

    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 24px;

        &.title-installments {
            margin-bottom: 38px;
        }
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 16px;

        &.title-installments {
            margin-bottom: 30px;
            padding-top: 10px;
        }
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 24px;

        &.title-installments {
            margin-bottom: 38px;
            padding-top: 10px;
        }
    }
`

export const ValueMoney = styled.p`
    color: ${({theme}) => theme.colors.text_menu};

    @media (min-width: 375px) {
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 0px;
    }

    @media (min-width: 1440px) {
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 0px;
    }
`

export const ContentRate = styled.div`
    @media (min-width: 375px) {
        .input-group {
            margin-bottom: 24px;
        }
    }

    @media (min-width: 1024px) {
        .input-group {
            margin-bottom: 16px;
        }

        &.content-installments {
            width: 100%;
        }
    }

    @media (min-width: 1440px) {
        .input-group {
            margin-bottom: 24px;
        }

        &.content-installments {
            width: 100%;
        }
    }
`

export const TitleRate = styled.p`
    color: ${({theme}) => theme.colors.text_menu};

    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 24px;
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 16px;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 24px;
    }
`

export const ValueRate = styled.p`
    color: ${({theme}) => theme.colors.text_menu};

    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 0px;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 0px;
    }
`
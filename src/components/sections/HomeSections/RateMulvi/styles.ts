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
    @media (min-width: 375px) {
        background-color: ${({theme}) => theme.colors.background_rate};
        padding: 32px 12px;
        border-radius: 24px;
    }

    @media (min-width: 1024px) {
        margin-top: 48px;
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr;
        justify-content: flex-start;
        height: auto;
        width: auto;
        padding: 40px 80px 40px 80px;
        background-color: ${({theme}) => theme.colors.background_rate};
        border-radius: 32px;
    }

    @media (min-width: 1440px) {
        margin-top: 48px;
        padding: 54px 91px;
        display: grid;
        justify-content: center;
        height: auto;
        width: auto;
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
            display: grid;
            justify-content: center;
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
        max-width: fit-content;
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
    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr;
    }

    @media (min-width: 1440px) {
        display: flex;
        gap: 64px;
        justify-content: center;
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
        font-weight: 400;
        font-size: 36px;
        line-height: 47px;
        grid-column: 1/-1;

        .attention-strong {
            font-weight: 700;
            font-size: 36px;
            line-height: 51.12px;
            color: ${({theme}) => theme.colors.text_menu};
        }
    }

    @media (min-width: 1440px) {
        margin-bottom: 33px;
    }
`

export const SimulationData = styled.div`
    @media (min-width: 375px) {
        margin-bottom: 30px;
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-bottom: 0px;
    }

    @media (min-width: 1440px) {
        width: 305px;
        height: 414px;
        display: grid;
        grid-template-columns: 1fr;
    }
`

export const WrapperInput = styled.div`
    @media (min-width: 1024px) {
        margin-bottom: 0px;
        width: 250px;

        &.card-flags {
            margin-bottom: 0px;
        }
    }

    @media (min-width: 1440px) {
        margin-bottom: 33px;
        width: auto;

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
        border-radius: 24px;
        margin-bottom: 32px;
        margin-top: 32px;
        padding: 32px;
        height: auto;
    }

    @media (min-width: 1440px) {
        width: 350px;
        margin-top: 0px;
        border-radius: 34px;
        padding: 32px;
        height: auto;
    }
`

export const SimulationAnotherAccount = styled.div`
    @media (min-width: 375px) {
        background: ${({theme}) => theme.colors.background_another_account};
        padding: 32px;
        margin-top: 30px;
        border-radius: 24px;
    }

    @media (min-width: 1024px) {
        border-radius: 24px;
        padding: 32px;
        height: auto;
        background-color: ${({theme}) => theme.colors.background_another_account};
    }

    @media (min-width: 1440px) {
        width: 355px;
        height: fit-content;
        margin-top: 0px;
        background-color: ${({theme}) => theme.colors.background_another_account};
    }
`

export const TitleResults = styled.h1`
    color: ${({theme}) => theme.colors.text_secundary};

    @media (min-width: 375px) {
        font-weight: 700;
        font-size: 20px;
        line-height: 27.24px;
        margin-bottom: 24px;
    }

    @media (min-width: 1024px) {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 16px;
    }

    @media (min-width: 1440px) {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 24px;
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
            width: 100px;
        }

        &.content-installments {
            display: grid;
            justify-content: end;
            text-align: right;
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
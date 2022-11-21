import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 375px) {
        margin-top: 40px;
    }

    @media (min-width: 1024px) {
        margin-top: 80px;
    }

    @media (min-width: 1440px) {
        margin-top: 80px; 
    }
`

export const FirstContainer = styled.div`
    @media (min-width: 1440px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export const ContentImg = styled.div`
    height: fit-content;
    &.bg-machine {
        background-color: ${({theme}) => theme.colors.background_secundary};
    }

    @media (min-width: 375px) {
        &.bg-machine {
            grid-row: 1;
            margin-top: 40px;
        }
    }

    @media (min-width: 1024px) {
        &.bg-machine {
            grid-row: 1;
            margin-top: -15px;
        }
    }

    @media (min-width: 1440px) {
        &.bg-machine {
            grid-column: 2;
            margin-top: 0px;
        }
    }
`

export const SingleSolutionsImg = styled.img`
     @media (min-width: 375px) {
        &.business-bg {
            width: 100%;
        }

        &.machine-bg {
            width: 100%;
        }
     }

    @media (min-width: 1024px) {
        &.business-bg {
            width: 100%;
        }

        &.machine-bg {
            width: auto;
        }
    }

    @media (min-width: 1440px) {
        &.business-bg {
            width: 100%;
        }

        &.machine-bg {
            width: 100%;
        }
    }
`

export const ContentSolution = styled.div`
    @media (min-width: 375px) {
        padding-left: 16px;
        padding-right: 16px;

        .btn-mulvi {
            margin-top: 24px;
        }

        .machine-characteristics {
            padding-top: 8px;
        }
    }

    @media (min-width: 1024px) {
        padding-left: 40px;
        padding-right: 40px;

        .btn-mulvi {
            margin-bottom: 80px;
            padding-left: 40px;
        }
    }

    @media (min-width: 1440px) {
        padding-left: 0px;
        padding-right: 0px;

        .machine-characteristics {
            padding-bottom: 121px;
            padding-left: 63px;
        }

        .btn-mulvi {
            /* margin-top: -10px; */
            margin-bottom: 0px;
            padding-left: 63px;
        }
    }
`
export const Title = styled.h1`
    margin-bottom: 0px;
    @media (min-width: 375px) {
        &.first-title {
            max-width: 790px;
            padding-bottom: 24px;
            padding-top: 40px;
            font-weight: 400;
            font-size: 24px;
            line-height: 34px;
            color: ${({theme}) => theme.colors.text_menu};
        }

        &.second-title {
            max-width: 890px;
            padding-top: 24px;
            padding-bottom: 40px;
            font-weight: 400;
            font-size: 24px;
            line-height: 34px;
            color: ${({theme}) => theme.colors.text_menu};
        }
    }

    @media (min-width: 1024px) {
        &.first-title {
            font-weight: 400;
            font-size: 36px;
            line-height: 47px;
            max-width: 790px;
            padding-bottom: 48px;
            padding-top: 48px;
            padding-left: 40px;
        }

        &.second-title {
            font-weight: 400;
            font-size: 36px;
            line-height: 47px;
            max-width: 890px;
            padding-top: 48px;
            padding-bottom: 40px;
        }
    }

    @media (min-width: 1440px) {
        &.first-title {
            font-weight: 400;
            font-size: 36px;
            line-height: 47px;
            padding-top: 50px;
            padding-bottom: 48px;
            padding-left: 63px;
            max-width: inherit;
        }

        &.second-title {
            font-weight: 400;
            font-size: 36px;
            line-height: 47px;
            padding-top: 127px; 
            padding-bottom: 40px;
            max-width: inherit;
            padding-left: 63px;
            padding-right: 42px;
        }
    }
`

export const ContentRent  = styled.div`
    margin-bottom: 40px;
    background-color: ${({theme}) => theme.colors.background_primary};
    border-radius: 16px;

    @media (min-width: 1024px) {
        margin-left: 0px;
        width: auto;
    }

    @media (min-width: 1440px) {
        margin-left: 63px;
        width: fit-content;
    }
`

export const RentText = styled.p`
     @media (min-width: 375px) {
        padding-left: 32px;
        padding-right: 25px;
        padding-top: 16px;
        padding-bottom: 16px;
        margin-bottom: 0px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20.8px;
        color: ${({theme}) => theme.colors.text_secundary};

        .attention-strong {
            font-size: 16px;
            line-height: 20.8px;
        }
     }

     @media (min-width: 1024px) {
        padding-left: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        margin-bottom: 0px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20.8px;
        color: ${({theme}) => theme.colors.text_secundary};

        .attention-strong {
            font-size: 16px;
            line-height: 20.8px;
        }
    }

    @media (min-width: 1440px) {
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        margin-bottom: 0px;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: ${({theme}) => theme.colors.text_secundary};

        .attention-strong {
            font-size: 18px;
            line-height: 23px;
        }
    }
`

export const SolutionText = styled.p`
    color: ${({theme}) => theme.colors.text_secundary};

    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 48px;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        padding-left: 40px;
        margin-bottom: 0px;
    }

    @media (min-width: 1440px) {
        padding-bottom: 40px;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        padding-left: 63px;
        padding-right: 63px;
        max-width: inherit;
        margin-bottom: 0px;
    }
`

export const ContainerBenefitsSolutions  = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 44px;

        &.container-benefits-first {
            gap: 36px;
            padding-left: 40px;
        }

        &.container-benefits-second {
            gap: 161px;
            margin-bottom: 48px;
        }
    }

    @media (min-width: 1440px) {
        display: flex;

        &.container-benefits-first {
            justify-content: flex-start;
            padding-left: 63px;
            gap: 80px;
        }

        &.container-benefits-second {
            margin-bottom: 58px;
            padding-left: 63px;
            justify-content: flex-start;
        }
    }
`

export const FirstContent  = styled.div`
    @media (min-width: 375px) {
        &.first-content-first {
            .container-benefitisSolutions {
                margin-bottom: 16px;
                align-items: center;
            }

            .container-benefitisSolutions:nth-child(1) {
                img {
                    margin-right: 19px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                img {
                    margin-right: 19px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                img {
                    margin-right: 21px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(4) {
                img {
                    margin-right: 19px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                img {
                    margin-right: 15px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(6) {
                img {
                    margin-right: 24px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }
        }

        &.first-content-second {
            .container-benefitisSolutions {
                align-items: center;
                margin-bottom: 16px;
                img {
                    margin-right: 16px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        &.first-content-first {
            margin-right: 36px;
            .container-benefitisSolutions:nth-child(1) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 19px;
                }

                h2 {
                    max-width: 200px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 19px;
                }

                h2 {
                    max-width: 180px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 19px;
                }

                h2 {
                    max-width: 180px;
                }
            }

            .container-benefitisSolutions:nth-child(4) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 17px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 13px;
                }
            }

            .container-benefitisSolutions:nth-child(6) {
                align-items: center;
                img {
                    margin-right: 22px;
                }
            }
        }

        &.first-content-second {
            .container-benefitisSolutions {
                align-items: center;
                margin-bottom: 26px;
                img {
                    margin-right: 16px;
                }
            }
        }
    }

    @media (min-width: 1440px) {
        &.first-content-first {
            margin-right: 36px;
            .container-benefitisSolutions:nth-child(1) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 19px;
                }

                h2 {
                    max-width: 200px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 19px;
                }

                h2 {
                    max-width: 180px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 19px;
                }

                h2 {
                    max-width: 180px;
                }
            }

            .container-benefitisSolutions:nth-child(4) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 17px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                margin-bottom: 31px;
                align-items: center;
                img {
                    margin-right: 13px;
                }
            }

            .container-benefitisSolutions:nth-child(6) {
                align-items: center;
                img {
                    margin-right: 22px;
                }
            }
        } 

        &.first-content-second {
            .container-benefitisSolutions {
                align-items: center;
                margin-bottom: 26px;
                img {
                    margin-right: 16px;
                }
            }
        }
    }
`

export const SecondContent = styled.div`
    @media (min-width: 375px) {
        &.second-content-first {
            .container-benefitisSolutions {
                margin-bottom: 16px;
                align-items: center;
            }

            .container-benefitisSolutions:nth-child(1) {
                img {
                    margin-right: 12px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                img {
                    margin-right: 22px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                img {
                    margin-right: 22px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }
            
            .container-benefitisSolutions:nth-child(4) {
                img {
                    margin-right: 19px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                img {
                    margin-right: 19px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }
        }

        &.second-content-second {
            .container-benefitisSolutions {
                align-items: center;
                margin-bottom: 16px;
                img {
                    margin-right: 16px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        &.second-content-first {
            .container-benefitisSolutions:nth-child(1) {
                margin-bottom: 52.75px;
                align-items: center;
                img {
                    margin-right: 21px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                align-items: center;
                margin-bottom: 51px;
                img {
                    margin-right: 21px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                align-items: center;
                margin-bottom: 33px;
                img {
                    margin-right: 21px;
                }
            }
            
            .container-benefitisSolutions:nth-child(4) {
                align-items: center;
                margin-bottom: 34.44px;
                img {
                    margin-right: 21px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                align-items: center;
                img {
                    margin-top: 3px;
                    margin-right: 21px;
                }
            }
        }

        &.second-content-second {
            .container-benefitisSolutions {
                align-items: center;
                margin-bottom: 26px;
                img {
                    margin-right: 16px;
                }
            }
        }
    }

    @media (min-width: 1440px) {
        &.second-content-first {
            .container-benefitisSolutions:nth-child(1) {
                margin-bottom: 52.75px;
                align-items: center;
                img {
                    margin-right: 21px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                align-items: center;
                margin-bottom: 51px;
                img {
                    margin-right: 21px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                align-items: center;
                margin-bottom: 33px;
                img {
                    margin-right: 21px;
                }
            }
            
            .container-benefitisSolutions:nth-child(4) {
                align-items: center;
                margin-bottom: 34.44px;
                img {
                    margin-right: 21px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                align-items: center;
                img {
                    margin-top: 3px;
                    margin-right: 21px;
                }
            }
        }

        &.second-content-second {
            .container-benefitisSolutions {
                align-items: center;
                margin-bottom: 26px;
                img {
                    margin-right: 16px;
                }
            }
        }
    }
`

export const SecondContainer = styled.div`
    @media (min-width: 375px) {
        display: grid;
        margin-bottom: 40px;
    }

    @media (min-width: 1024px) {
        display: grid;
    }

    @media (min-width: 1440px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 0px;
    }
`

export const MulviDestyContainer = styled.div`
    background-color: ${({theme}) => theme.colors.background_mulvi_desty};
    
    @media (min-width: 375px) {
        display: grid;

        .plus {
            display: block;
            text-align: center;
            font-weight: 400;
            font-size: 50px;
            line-height: 68px;
            color: ${({theme}) => theme.colors.text_menu};
        }
    }

    @media (min-width: 1024px) {
        margin-top: 80px;
        display: grid;
        grid-template-columns: 1fr;
        .plus {
            font-weight: 400;
            font-size: 50px;
            line-height: 68px;
            padding-left: 20px;
            color: ${({theme}) => theme.colors.text_menu};
        }
    }

    @media (min-width: 1440px) {
        margin-top: 0px;
        padding-left: 102px;
        padding-right: 107px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        .plus {
            font-weight: 400;
            font-size: 50px;
            line-height: 68px;
            padding-left: 34px;
            padding-right: 22px;
            color: ${({theme}) => theme.colors.text_menu};
        }
    }
`

export const WrapperImg = styled.div`
    @media (min-width: 375px) {
        grid-row: 2;
    }

    @media (min-width: 1024px) {
        text-align: center;
        background-color: ${({theme}) => theme.colors.background_mulvi_desty};
        grid-row: 2;
        grid-column: 1/-1;
    }

    @media (min-width: 1440px) {
        grid-row: 1;
        grid-column: 1;
    }
`

export const MulviDestyImg = styled.img`
    @media (min-width: 375px) {
        width: 100%;
    }

    @media (min-width: 1024px) {
        width: 577.93px;
    }

    @media (min-width: 1440px) {
        width: 577.93px;
    }
`

export const ContentLogos = styled.div`
    @media (min-width: 375px) {
        .mulvi-logo, .desty-logo {
            display: block;
            margin: 0 auto;
        }

        .mulvi-logo {
            width: 182.33px;
            height: 40px;
        }

        .desty-logo {
            width: 118.88px;
            height: 40px;
        }

        .attention-strong {
            display: grid;
            justify-content: center;
            margin-bottom: 24px;
        }
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 264.8px 32.68px 192.49px;
        column-gap: 25px;
        height: fit-content;
        align-items: center;
        margin-left: 40px;
        margin-top: 80px;

        .attention-strong {
            grid-column: 1/-1;
            padding-top: 8px;
            margin-bottom: 39px;
            width: max-content;
        }

        .mulvi-logo {
            width: auto;
            height: auto;
        }

        .desty-logo {
            width: auto;
            height: auto;
            margin-left: 10px;
        }
    }

    @media (min-width: 1440px) {
        display: grid;
        grid-template-columns: min-content min-content 1fr;
        height: fit-content;
        align-items: center;
        margin-left: 57px;
        margin-top: 0px;

        .attention-strong {
            grid-column: 1/-1;
            padding-top: 8px;
            margin-bottom: 39px;
        }

        .mulvi-logo {
            width: auto;
            height: auto;
        }

        .desty-logo {
            width: auto;
            height: auto;
        }
    }
`

export const ContentInfoMulviDesty = styled.div`
    @media (min-width: 375px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1024px) {
        width: max-content;
        margin-bottom: 180px;
        padding-left: 0px;
        padding-right: 0px;
    }

    @media (min-width: 1440px) {
        grid-column: 1/-1;
        margin-bottom: 157px;
    }
`

export const InfoMulviDestyText = styled.p`
    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: ${({theme}) => theme.colors.text_menu};
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: ${({theme}) => theme.colors.text_menu};
        &:nth-child(2) {
            max-width: 500px;
        }
    }
`

export const ContentCallBack = styled.div`
    @media (min-width: 375px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1024px) {
        grid-column: 1/-1;
    }

    @media (min-width: 1440px) {
        grid-column: 1/-1;
    }
`

export const CallBackTitle = styled.p`
     @media (min-width: 375px) {
        text-align: center;
     }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 19px;
        line-height: 26px;
        color: ${({theme}) => theme.colors.text_menu};
        margin-bottom: 20px;
        text-align: left;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 19px;
        line-height: 26px;
        color: ${({theme}) => theme.colors.text_menu};
        margin-bottom: 20px;
        text-align: left;
    }
`

export const ContentStore = styled.div`
    @media (min-width: 375px) {
        display: flex;
        gap: 31.75px;
    }

    @media (min-width: 1024px) {
    .google-play {
        margin-right: 24px;
        cursor: pointer;
    }

    .apple-store {
        cursor: pointer;
    }
    }

    @media (min-width: 1440px) {
        .google-play {
            margin-right: 24px;
            cursor: pointer;
        }

        .apple-store {
            cursor: pointer;
        }
    }
`
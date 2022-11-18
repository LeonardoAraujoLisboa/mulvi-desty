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

        .machine-characteristics {
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
            margin-bottom: 0px;
            padding-left: 63px;
        }
    }
`
export const Title = styled.h1`
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
            padding-left: 40px;
        }
    }

    @media (min-width: 1440px) {
        &.first-title {
            font-weight: 400;
            font-size: 36px;
            line-height: 47px;
            padding-top: 111px;
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

export const SolutionText = styled.p`
    color: ${({theme}) => theme.colors.text_secundary};

    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 48px;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        padding-left: 40px;
    }

    @media (min-width: 1440px) {
        padding-bottom: 40px;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        padding-left: 63px;
        padding-right: 63px;
        max-width: inherit;
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
            padding-left: 40px;
        }
    }

    @media (min-width: 1440px) {
        display: flex;

        &.container-benefits-first {
            margin-bottom: 48px;
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
                    margin-right: 27px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                img {
                    margin-right: 36px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                img {
                    margin-right: 30px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(4) {
                img {
                    margin-right: 33px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                img {
                    margin-right: 27px;
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
                margin-bottom: 40px;
                align-items: flex-start;
                img {
                    margin-top: 2px;
                    margin-right: 27px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                margin-bottom: 26.5px;
                align-items: flex-start;
                img {
                    margin-right: 35px;
                    margin-top: 7px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                margin-bottom: 40px;
                align-items: center;
                img {
                    margin-right: 28px;
                    margin-bottom: 7px;
                }
            }

            .container-benefitisSolutions:nth-child(4) {
                margin-bottom: 40px;
                align-items: center;
                img {
                    margin-right: 30px;
                    margin-bottom: 7px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                align-items: center;
                img {
                    margin-right: 20.5px;
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
                .container-benefitisSolutions:nth-child(1) {
                align-items: flex-start;
                max-width: 250px;
                margin-bottom: 40px;
                img {
                    margin-right: 16px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                align-items: flex-start;
                margin-bottom: 26px;
                img {
                    margin-right: 25px;
                    margin-top: 7px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                align-items: center;
                margin-bottom: 40px;
                img {
                    margin-right: 20px;
                    margin-bottom: 0px;
                }
            }
            
            .container-benefitisSolutions:nth-child(4) {
                align-items: center;
                margin-bottom: 40px;
                img {
                    margin-right: 23px;
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                align-items: center;
                img {
                    margin-right: 16px;
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
                    margin-right: 25px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                img {
                    margin-right: 36px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                img {
                    margin-right: 38px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }
            
            .container-benefitisSolutions:nth-child(4) {
                img {
                    margin-right: 34px;
                }

                h2 {
                    margin-bottom: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                img {
                    margin-right: 34px;
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
                margin-bottom: 38px;
                align-items: flex-start;
                img {
                    margin-top: 2px;
                    margin-right: 15px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                align-items: flex-start;
                margin-bottom: 40px;
                img {
                    margin-top: 5px;
                    margin-right: 20px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                align-items: flex-start;
                margin-bottom: 24px;
                img {
                    margin-top: 5px;
                    margin-right: 20px;
                }
            }
            
            .container-benefitisSolutions:nth-child(4) {
                align-items: flex-start;
                margin-bottom: 24px;
                img {
                    margin-top: 5px;
                    margin-right: 23px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                align-items: flex-start;
                img {
                    margin-top: 3px;
                    margin-right: 16px;
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
                margin-bottom: 38px;
                align-items: center;
                img {
                    margin-left: -7px;
                    margin-right: 15px;
                }
            }

            .container-benefitisSolutions:nth-child(2) {
                align-items: center;
                margin-bottom: 40px;
                img {
                    margin-right: 20px;
                    margin-top: 0px;
                }
            }

            .container-benefitisSolutions:nth-child(3) {
                align-items: flex-start;
                margin-bottom: 24px;
                img {
                    margin-right: 20px;
                }
            }
            
            .container-benefitisSolutions:nth-child(4) {
                align-items: flex-start;
                margin-bottom: 24px;
                img {
                    margin-right: 23px;
                }
            }

            .container-benefitisSolutions:nth-child(5) {
                align-items: center;
                img {
                    margin-right: 16px;
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
        /* padding-left: 64.5px;
        gap: 61.5px; */
        margin-bottom: 0px;
    }
`

export const MulviDestyContainer = styled.div`
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
        grid-row: 1;
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
    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 19px;
        line-height: 26px;
        color: ${({theme}) => theme.colors.text_menu};
        margin-bottom: 20px;
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 19px;
        line-height: 26px;
        color: ${({theme}) => theme.colors.text_menu};
        margin-bottom: 20px;
    }
`

export const ContentStore = styled.div`
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
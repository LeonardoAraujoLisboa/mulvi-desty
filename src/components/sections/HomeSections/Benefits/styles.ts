import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    @media (min-width: 1440px) {
        margin-top: 127px;
    }

    @media (min-width: 1024px) {
        margin-top: 80px;
    }

    @media (min-width: 1024px) {
        padding-left: 0px;
        padding-right: 0px;
        display: grid;
        justify-content: center;
    }
`

export const Title = styled.h1`
    @media (min-width: 375px) {
        text-align: center;
        margin-bottom: 40px;
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
    }

    @media (min-width: 1440px) {
        text-align: center;
        margin-bottom: 48px;
    }

    @media (min-width: 1024px) {
        text-align: center;
        margin-bottom: 48px;
        font-weight: 400;
        font-size: 36px;
        line-height: 47px;
    }
`

export const ContentCards = styled.div`
    @media (min-width: 375px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
        padding-left: 14px;
        padding-right: 14px;

        .card {
            width: 165.5px;
            height: 328px;
            padding: 40px 16px 40px 16px;

            .card-text {
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
            }
        }

        .card:nth-child(1) {
            .card-img-top {
                width: 69.14px !important;
                height: 90px !important;
            }

            .card-text {
                max-width: 150px;
                padding-top: 10px;
            }
        }

        .card:nth-child(2) {
            .card-img-top {
                margin-top: 25px;
                width: 125px !important;
                height: 61.46px !important;
            }

            .card-text {
                max-width: 120px;
                padding-top: 10px;
            }
        } 

        .card:nth-child(4) {
            .card-img-top {
                margin-top: 15px;
                width: 88.54px !important;
                height: 118px !important;
            }

            .card-text {
                max-width: 150px;
                padding-top: 10px;
            }
        }

        .card:nth-child(3) {
            .card-img-top {
                width: 83.29px !important;
                height: 111px !important;
            }

            .card-text {
                max-width: 150px;
                padding-top: 10px;
            }
        }
    }

    @media (min-width: 1024px) {
        padding-left: 40px;
        padding-right: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 32px;

        .card {
            width: 456px;
            height: 367.91px;
            padding: 60px 32px 60px 32px;

            .card-text {
                font-weight: 400;
                font-size: 24px;
                line-height: 31px;
            }
        }

        .card:nth-child(1) {
            .card-img-top {
                width: 89px !important;
                height: 117px !important;
            }

            .card-text {
                max-width: 150px;
                padding-top: 10px;
            }
        }

        .card:nth-child(2) {
            .card-img-top {
                margin-top: 25px;
                width: 180px !important;
                height: 88px !important;
            }

            .card-text {
                max-width: 150px;
                padding-top: 10px;
            }
        } 

        .card:nth-child(4) {
            .card-img-top {
                width: 88.54px !important;
                height: 118px !important;
            }

            .card-text {
                max-width: 150px;
                padding-top: 10px;
            }
        }

        .card:nth-child(3) {
            .card-img-top {
                width: 92.75px !important;
                height: 118px !important;
            }

            .card-text {
                max-width: 150px;
                padding-top: 10px;
            }
        }
    }

    @media (min-width: 1440px) {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
        padding-left: 0px;
        padding-right: 0px;

        .card {
            width: 305px;
            .card-text {
                font-weight: 400;
                font-size: 24px;
                line-height: 31px;
            }
        }

        .card:nth-child(1) {
            padding-left: 30px;
            padding-right: 30px;
            .card-img-top {
                width: 180px !important;
                height: 110px !important;
            }

            .card-text {
                padding-top: 21px;
            }
        }

        .card:nth-child(2) {
            padding-left: 30px;
            padding-right: 31px;
        }

        .card:nth-child(2), .card:nth-child(4) {
            .card-img-top {
                width: 97.28px !important;
                height: 96px !important;
            }

            .card-text {
                padding-top: 32px;
            }
        } 

        .card:nth-child(4) {
            padding-left: 26px;
            padding-right: 35px;
        }

        .card:nth-child(3) {
            padding-left: 30px;
            padding-right: 31px;
            padding-top: 25px;
            justify-content: flex-end !important;
            .card-img-top {
                width: 77.01px !important;
                height: 127px !important;
            }

            .card-text {
                padding-top: 16px;
            }
        }
    }
`

export const ContentFlags = styled.div`
    display: grid;

    @media (min-width: 375px) {
        margin-top: 40px;
    }

    @media (min-width: 1440px) {
        margin-top: 48px;
    }

    @media (min-width: 1024px) {
        margin-top: 48px;
    }
`

export const InfoText = styled.p`
    @media (min-width: 375px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: ${({theme}) => theme.colors.text_menu};
        margin-bottom: 0px;
        padding-bottom: 20px;
        padding-left: 32.27px;
        padding-left: 31.73px;
        max-width: 350px;
    }

    @media (min-width: 1024px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
        padding-bottom: 32px;
        max-width: fit-content;
        margin: 0 auto;
        color: ${({theme}) => theme.colors.text_menu};
    }

    @media (min-width: 1440px) {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        padding-bottom: 32px;
        margin-bottom: 0px;
        color: ${({theme}) => theme.colors.text_menu};
    }
`

export const AllFlags = styled.img`
    justify-self: center;
    width: 100%;

    @media (min-width: 375px) {
        &.flags-card {
            display: none;
            padding-left: 17.27px;
            padding-right: 17.27px;
        }

        &.flags-card-mobile {
            display: block;
        }
    }

    @media (min-width: 1024px) {
        &.flags-card-mobile {
            display: none;
        }

        &.flags-card {
            display: block;
            padding-left: 302px;
            padding-right: 281px;
        }
    }

    @media (min-width: 375px) {
        &.flags-card-mobile {
            display: none;
        }

        &.flags-card {
            display: block;
        }
    }
`
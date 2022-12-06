import styled from "styled-components";

export const Container = styled.div`
    
`

export const Title = styled.h1`
    @media (min-width: 375px) {
        padding-bottom: 32px;
        text-align: center;
        margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 48px;
        padding-left: 190px;
        margin-bottom: 0px;
        text-align: left;
        width: 893px;
    }

    @media (min-width: 1100px) {
        padding-left: 60px;
    }

    @media (min-width: 1200px) {
        padding-left: 120px;
    }

    @media (min-width: 1300px) {
        padding-left: 180px;
    }

    @media (min-width: 1400px) {
        padding-left: 55px;
    }

    @media (min-width: 1440px) {
        padding-bottom: 43px;
        text-align: left;
        padding-left: 0px;
        margin-left: 65px;
        margin-bottom: 0px;
    }
`

export const ContentCard = styled.div`
    .card {
        transition: 0.3s;
        width: 302px;
        border: none;
    }

    .card:hover {
        box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.25) !important; 
    }

    img {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    
    @media (min-width: 375px) {
        padding-left: 13.5px;
        padding-right: 19.5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;

        img {
            width: 100%;
            height: 157.59px;
        }

        .card {
            height: auto;
            box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.25) !important;
            border-radius: 16px !important;
            z-index: 1000;
            cursor: pointer;
        }

        .card-body {
            padding: 10px 30px 32px 30px;
        }

        .card-title {
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            color: ${({theme}) => theme.colors.text_secundary};
            margin-bottom: 15px;
            text-align: left;
        }

        .card-text {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: ${({theme}) => theme.colors.text_secundary};
            text-align: left;
        }
    }

    @media (min-width: 1024px) {
        padding-left: 40px;
        padding-right: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;

        img {
            width: 100%;
            height: 218px;
        }

        .card {
            height: auto;
            box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.25) !important;
            border-radius: 16px !important;
            z-index: 1000;
            cursor: pointer;
        }

        .card-body {
            padding: 32px 16px 32px 16px;
        }

        .card-title {
            font-weight: 400;
            font-size: 25px;
            line-height: 28px;
            color: ${({theme}) => theme.colors.text_secundary};
            margin-bottom: 15px;
            text-align: left;
        }

        .card-text {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: ${({theme}) => theme.colors.text_secundary};
            text-align: left;
        }
    }

    @media (min-width: 1440px) {
        padding-left: 65px;
        padding-right: 65px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 36px;

        .card {
            width: 300px;
            box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.25) !important;
            border-radius: 16px !important;
            z-index: 1000;
            cursor: pointer;
        }

        .card-body {
            padding: 25px 25px 35px 25px;
        }

        .card-title {
            font-weight: 400;
            font-size: 25px;
            line-height: 28px;
            color: ${({theme}) => theme.colors.text_secundary};
            margin-bottom: 15px;
            width: auto;
        }

        .card-text {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: ${({theme}) => theme.colors.text_secundary};
        }
    }
`
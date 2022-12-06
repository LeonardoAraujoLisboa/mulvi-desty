import styled from "styled-components";

export const Container = styled.div`
    .card:hover {
        .card-img-top {
            box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.25) !important; 
        }
    }

    .card-img-top {
        border-radius: 3.9084px;
    }

    @media (min-width: 375px) {
        .card {
            border: 0px;
            box-shadow: none !important;
            border-radius: 0px !important;
            justify-content: none !important;
        }

        .card:nth-child(1), .card:nth-child(2) {
            margin-bottom: 32px;
        }

        .card-text.title {
            margin-top: 8px;
            margin-bottom: 16px;
            text-align: left;
            font-weight: 700;
            font-size: 20px;
            line-height: 27px;
            color: ${({theme}) => theme.colors.text_link};
        }

        .card-text.date {
            font-weight: 400;
            font-size: 13px;
            line-height: 18px;
            color: ${({theme}) => theme.colors.text_link};
            text-align: left;
            max-width: 192px;
        }

        .card-img-top {
            width:  344.42px;
            height: 226.22px;
        }
    }

    @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

        .card {
            border: 0px;
            box-shadow: none !important;
            border-radius: 0px !important;
            justify-content: none !important;
        }

        .card-text.title {
            max-width: 192px;
            margin-top: 8px;
            margin-bottom: 8px;
            text-align: left;
            font-weight: 600;
            font-size: 16px;
            line-height: 26px;
            color: ${({theme}) => theme.colors.text_link};
        }

        .card-text.date {
            font-weight: 600;
            font-size: 13px;
            line-height: 18px;
            color: ${({theme}) => theme.colors.text_link};
            text-align: left;
            max-width: 192px;
        }

        .card-img-top {
            width: 192px;
            height: 127px;
        }
    }

    @media (min-width: 1440px) {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;

        .card {
            border: 0px;
            box-shadow: none !important;
            border-radius: 0px !important;
        }

        .card-text.title {
            width: 100%;
            margin-top: 8px;
            margin-bottom: 8px;
            text-align: left;
            font-weight: 600;
            font-size: 16px;
            line-height: 26px;
            color: ${({theme}) => theme.colors.text_link};
        }

        .card-text.date {
            font-weight: 600;
            font-size: 13px;
            line-height: 18px;
            color: ${({theme}) => theme.colors.text_link};
        }

        .card-img-top {
            width: 192px;
            height: 127px;
        }
    }
`
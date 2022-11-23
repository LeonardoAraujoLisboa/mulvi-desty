import styled from "styled-components";

export const Container = styled.div`
    .card:hover {
        box-shadow: 0px 1px 8px 5px rgba(0, 0, 0, 0.25) !important; 
    }

    @media (min-width: 1024px) {
        display: flex;
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
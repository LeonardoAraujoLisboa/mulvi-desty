import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        gap: 30px;

        .card {
            border: 0px;
            box-shadow: none !important;
            border-radius: 0px !important;
        }

        .card-text {
            width: 100%;
            margin-top: 8px;
            margin-bottom: 8px;
            text-align: left;
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

        .card-text {
            width: 100%;
            margin-top: 8px;
            margin-bottom: 8px;
            text-align: left;
        }
    }
`
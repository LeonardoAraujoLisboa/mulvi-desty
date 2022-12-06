import styled from "styled-components";
import ArrowDown from '../../../../assets/arrow-down.svg'

export const Container = styled.div`
    .accordion-item {
        border: none;
    }

     @media (min-width: 375px) {
        padding: 40px 16.5px 29px 16.5px;

        .accordion-item {
            margin-bottom: 8px;
        }

        .accordion-button {
            background: #FFFFFF;
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
            border-radius: 12px;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: ${({theme}) => theme.colors.text_menu};
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
        }

        .accordion-button::after {
            background-image: url(${ArrowDown});
        }

        .accordion-button:not(.collapsed)::after {
            background-image: url(${ArrowDown});
        }
     }

     @media (min-width: 1024px) {
        padding: 80px 40px 80px 40px;

        .accordion-item {
            margin-bottom: 16px;
        }

        .accordion-button {
            background: #FFFFFF;
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
            border-radius: 12px;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            color: ${({theme}) => theme.colors.text_menu};
            padding-top: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
        }

        .accordion-button::after {
            background-image: url(${ArrowDown});
        }

        .accordion-button:not(.collapsed)::after {
            background-image: url(${ArrowDown});
        }
     }

    @media (min-width: 1440px) {
        padding: 134.5px 175.45px 118.5px 87.5px;

        .accordion-item {
            margin-bottom: 16px;
        }

        .accordion-button {
            background: #FFFFFF;
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
            border-radius: 12px;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            color: ${({theme}) => theme.colors.text_menu};
            padding-top: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
        }

        .accordion-button::after {
            background-image: url(${ArrowDown});
        }

        .accordion-button:not(.collapsed)::after {
            background-image: url(${ArrowDown});
        }
    }
`

export const Title = styled.p`
    @media (min-width: 375px) {
        margin-bottom: 40px;
    }

    @media (min-width: 1024px) {
        margin-bottom: 48px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 56px;
    }
`
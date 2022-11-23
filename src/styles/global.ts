import { createGlobalStyle } from 'styled-components';
import ElizethBold from '../assets/fonts/Elizeth-Bold.otf'
import ElizethRegular from '../assets/fonts/Elizeth-Regular.otf'

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        border: none;
        box-sizing: border-box;
    }

    .form-label {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: ${({theme}) => theme.colors.text_link};
    }

    .input-group > .form-control, .input-group > .form-select {
        border-radius: 12px;
        border: 1px solid ${({theme}) => theme.colors.border_color};
        outline: none;
        box-shadow: none;
        height: 48px;
    }

    .input-group > .form-control:focus, .input-group > .form-control:focus {
        box-shadow: none;
    }

    .btn-mulvi {
        a:hover {
            background: ${({theme}) => theme.colors.text_link};
            color: #fff;
        }
    }

    @font-face {
        font-family: 'Elizeth Bold';
        src: url(${ElizethBold}) format('opentype');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Elizeth Regular';
        src: url(${ElizethRegular}) format('opentype');
        font-weight: 400;
    }

    @media (min-width: 375px) {
        .attention-strong {
            font-weight: 700;
            font-size: 24px;
            line-height: 34.08px;
            color: ${({theme}) => theme.colors.text_menu};
        }

        .know-more {
            font-weight: 700;
            font-size: 16px;
            line-height: 21px;
            color: ${({theme}) => theme.colors.text_link};
            text-decoration: none;
        }

        .central-contact {
            font-size: 20px;
            font-weight: 700;
            line-height: 27.24px;
            color: ${({theme}) => theme.colors.text_menu};
        }

        h1 {
            font-family: 'Elizeth Regular', Arial, Helvetica, sans-serif;
        }

        h2 {
            font-family: 'Elizeth Regular', Arial, Helvetica, sans-serif;
        }
    }

    @media (min-width: 1024px) {
        .attention-strong {
            font-family: 'Elizeth Bold', Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 36px;
            line-height: 51.12px;
            color: ${({theme}) => theme.colors.text_menu};
        }

        .know-more {
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: ${({theme}) => theme.colors.text_link};
            text-decoration: none;
        }

        h1 {
            font-family: 'Elizeth Regular', Arial, Helvetica, sans-serif;
            font-weight: 400;
            font-size: 36px;
            line-height: 51.12px;
            color: ${({theme}) => theme.colors.text_menu};
        }

        h2 {
            font-family: 'Elizeth Regular', Arial, Helvetica, sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;
            color: ${({theme}) => theme.colors.text_menu};
            margin-bottom: 0px;
        }

        .central-contact {
            font-size: 20px;
            font-weight: 600;
            line-height: 27.24px;
            color: ${({theme}) => theme.colors.text_menu};
        }
    }

    @media (min-width: 1440px) {
        .container-web {
            padding-left: 64px;
            padding-right: 64px;
        }

        h1 {
            font-family: 'Elizeth Regular', Arial, Helvetica, sans-serif;
            font-weight: 400;
            font-size: 36px;
            line-height: 51.12px;
            color: ${({theme}) => theme.colors.text_menu};
        }

        h2 {
            font-family: 'Elizeth Regular', Arial, Helvetica, sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;
            color: ${({theme}) => theme.colors.text_menu};
            margin-bottom: 0px;
        }

        .know-more {
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: ${({theme}) => theme.colors.text_link};
            text-decoration: none;
        }

        .attention-strong {
            font-family: 'Elizeth Bold', Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 36px;
            line-height: 51.12px;
            color: ${({theme}) => theme.colors.text_menu};
        }

        .central-contact {
            font-size: 20px;
            font-weight: 600;
            line-height: 27.24px;
            color: ${({theme}) => theme.colors.text_menu};
        }
    }
`;
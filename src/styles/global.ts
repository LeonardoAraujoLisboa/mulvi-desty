import { createGlobalStyle } from 'styled-components';

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
    }

    @media (min-width: 1024px) {
        .attention-strong {
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
            font-weight: 400;
            font-size: 36px;
            line-height: 51.12px;
            color: ${({theme}) => theme.colors.text_menu};
        }

        h2 {
            font-weight: 600;
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
            font-weight: 400;
            font-size: 36px;
            line-height: 51.12px;
            color: ${({theme}) => theme.colors.text_menu};
        }

        h2 {
            font-weight: 600;
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
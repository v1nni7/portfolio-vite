import { styled } from "./config/stitches.config";

export const SectionLogin = styled('section', {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const BoxLogin = styled('div', {
    width: 400,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "$darkBlueGray",
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

    '.error': {
        display: 'none',
        padding: 12,
    },

    '.error.show': {
        display: 'block',
    },

    '.error.show h5': {
        color: 'red',
        margin: 0,
        border: '1px red solid',
        fontSize: '1rem',
        fontWeight: '300',
        textAlign: 'center',
        padding: 12,
    }
});

export const TitleLogin = styled('h2', {
    padding: '0 12px',
});

export const FormGroup = styled('div', {
    padding: 12,
    position: 'relative',

    '.form-label.unfocused': {
        top: 28,
        left: 24,
        transition: 'linear 0.1s',
        position: 'absolute',
    },

    '.form-label.focus': {
        top: 16,
        left: 24,
        fontSize: '.8rem',
        transition: 'linear 0.1s',
        position: 'absolute',
    },

    '.form-control': {
        height: 50,
        width: '100%',
        padding: '16px 0 0px 12px',
        border: 'none',
        borderRadius: 4,

        '&:focus': {
            border: 'none',
            outline: 'none',
        }
    }
});

export const CheckInput = styled('input', {
    
});

export const Button = styled('button', {
    backgroundColor: "$lightBlueGray",
    fontWeight: 600,
    fontSize: '1rem',
    border: 'none',
    padding: '12px 24px',
    borderRadius: 4,
    transition: '0.4s',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#7c6dd1',
    }
});
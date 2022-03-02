import { globalCss, theme } from "../config/stitches.config";

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        fontFamily: 'Merriweather Sans',
    },

    'body': {
        margin: 0,
        color: "$textColor",
        backgroundColor: '$bgBodyColor',
    },

    'h1, h2, h3, h4, h5, h6': {
        fontWeight: 500,
        margin: '0 0 8px 0',
    },

    'p': {
        margin: '0 0 12px 0',
    }
});


import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            lightBlueGray: '#837E9F',
            darkGray: '#22212C',
            darkBlueGray: '#302F3D',
            lightPink: '#CB92B1',
        }
    },
    media: {
        sm: '(min-width: 576px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 992px)',
        xl: '(min-width: 1200px)',
        xxl: '(min-width: 1400px)',
    },
});
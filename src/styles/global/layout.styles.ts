import { styled } from "../config/stitches.config";
import type * as Stitches from '@stitches/react';

export const Container = styled('div', {
    maxWidth: '80%',
    margin: '0 auto 0 auto',
    padding: '0 12px 0 12px',

    '@sm': {
        maxWidth: 540,
    },

    '@md': {
        maxWidth: 720,
    },

    '@lg': {
        maxWidth: 960,
    },

    '@xl': {
        maxWidth: 1120,
    },

    '@xxl': {
        maxWidth: 1340,
    },
});

export const Row = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
});

export const Col = styled('div', {
    width: '100%',
    flex: '0 0 auto',
    padding: '6px 6px',

    '@md': {

    },

    variants: {
        columnsOccupation: {
            1: {
                '@xl': {
                    width: '8.333333333333333%',
                }
            },
            2: {
                '@xl': {
                    width: '16.66666666666667%',
                }
            },
            3: {
                '@xl': {
                    width: '25%',
                }
            },
            4: {
                '@xl': {
                    width: '33.33333333333333%',
                }
            },
            5: {
                '@xl': {
                    width: '41.66666666666666%',
                }
            },
            6: {
                '@xl': {
                    width: '50%',
                }
            },
            7: {
                '@xl': {
                    width: '58.33333333333333%',
                }
            },
            8: {
                '@xl': {
                    width: '66.66666666666667%',
                }
            },
            9: {
                '@xl': {
                    width: '75%',
                }
            },
            10: {
                '@xl': {
                    width: '83.33333333333333%',
                }
            },
            11: {
                '@xl': {
                    width: '91.66666666666666%',
                }
            },
            12: {
                '@xl': {
                    width: '100%',
                }
            },
        }
    }
});

type ColsVariants = Stitches.VariantProps<typeof Col>
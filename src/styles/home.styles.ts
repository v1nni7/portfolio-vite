import { styled, globalCss } from "./config/stitches.config";
import type * as Stitches from '@stitches/react';

export const rootGrid = globalCss({
    '#root': {
        display: 'grid',
        gridTemplateAreas: `
            'aside main'
            'aside main'
            'aside footer'
        `,
        gridTemplateColumns: '400px 1fr',
        gridTemplateRows: '1fr 100%'

    }
});

export const Aside = styled('aside', {
    padding: 24,
    display: 'flex',
    gridArea: 'aside',
    flexDirection: 'column',
});

export const Card = styled('div', {
    padding: 12,
    marginBottom: 24,
    borderRadius: 12,
    backgroundColor: "$bgCardColor",
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
});


export const Profile = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    'img': {
        width: 156,
        height: 156,
        borderRadius: '50%',
    },

    'h1': {
        margin: '16px 0 6px 0',
    },

    'h2': {
        fontSize: '1rem',
        fontWeight: 300,
    }
});

export const List = styled('ul', {
    paddingLeft: 18,
    listStyleType: 'none',
});

export const Item = styled('li', {
    display: 'flex',
    margin: '12px 0',
    alignItems: 'center',

    'i': {
        marginRight: 12,
        fontSize: '1.6rem',
    },

    'h4': {
        margin: 0,
    }
});

export const Tech = styled('h4', {
    margin: 0,
    fontSize: '.8rem',
    borderRadius: 24,
    color: '#000',
    padding: '4px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: "$bgTechsColor",
});

export const Main = styled('main', {
    gridArea: 'main',
    padding: 24,
});

export const Title = styled('div', {
    display: 'flex',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    'h1': {
        margin: 0,
    },

    'a': {
        textDecoration: 'none',
        color: "$textColor",

        '&:hover': {
            color: '#8178b3',
        }
    }
});

export const Row = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
});

export const Col = styled('div', {
    flex: '0 0 auto',
    padding: '6px',
    variants: {
        numberCols: {
            1: {
                width: '8.333333333333333%',
            },
            2: {
                width: '16.66666666666667%',
            },
            3: {
                width: '25%',
            },
            4: {
                width: '33.33333333333333%',
            },
            5: {
                width: '41.66666666666666%',
            },
            6: {
                width: '50%',
            },
            7: {
                width: '58.33333333333333%',
            },
            8: {
                width: '66.66666666666667%',
            },
            9: {
                width: '75%',
            },
            10: {
                width: '83.33333333333333%',
            },
            11: {
                width: '91.66666666666666%',
            },
            12: {
                width: '100%',
            },
        }
    }
});

export const ProjectPost = styled('div', {
    padding: 12,
});

export const PHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',

    'i': {
        fontSize: '1.8rem',
        marginRight: 12,
    },

    'h2': {
        margin: 0,
        fontSize: '1.2rem',
    }
});

export const PBody = styled('div', {
    'p': {
        margin: '12px 0',
        fontWeight: 300,
    }
});

export const PFooter = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'span': {
        marginRight: 6,
        padding: '24px 0',
        display: 'flex',
        alignItems: 'center',
    },

    'h6, h5': {
        margin: '0 0 0 6px',
        fontSize: '1rem',
    }
});

export const Info = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
});

export const UseLanguage = styled('div', {
    borderRadius: '50%',
    width: 15,
    height: 15,
    border: '2px #ccc solid',

    variants: {
        language: {
            html: {
                backgroundColor: '#f26d30',
            },
            javascript: {
                backgroundColor: '#e9f230',
            }
        }
    }

});

export const Post = styled('div', {
    'h2': {
        marginBottom: 6,
    },

    'h3': {
        fontWeight: 400,
        fontSize: '1rem',
    },

    'p': {
        margin: '16px 0',
        fontWeight: 300,  
    },

    'img': {
        width: '160px',
        height: '160px',
        borderRadius: '50%',
    },
}); 

export const ListTags = styled('ul', {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    listStyleType: 'none',
});

export const Tags = styled('li', {
    marginRight: 10,
});

type LanguageVariants = Stitches.VariantProps<typeof UseLanguage>














import { createTheme } from '@mui/material/styles';

const serif = "'Instrument Serif', Georgia, serif";
const sans = "'IBM Plex Sans', 'Helvetica Neue', sans-serif";
const mono = "'IBM Plex Mono', ui-monospace, monospace";

export const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#2F4BD9', contrastText: '#FFFFFF' },
        background: { default: '#F4F1EA', paper: '#FFFDF8' },
        text: { primary: '#1B1B18', secondary: '#45433C', tertiary: '#5C5A52' },
        divider: '#D6D0C2',
        rule: '#1B1B18',
        shadow: 'rgba(27, 27, 24, 0.45)',
        tint: {
          c1: '#E3A08C',
          c2: '#9DB3E0',
          c3: '#E3C87E',
          c4: '#93C7AB',
          c5: '#BCA6DA',
          c6: '#DDA2BD',
          ink: '#1B1B18',
        },
      },
    },
    dark: {
      palette: {
        primary: { main: '#8A9EFF', contrastText: '#121210' },
        background: { default: '#121210', paper: '#1C1B18' },
        text: { primary: '#EDE9DF', secondary: '#B5B0A3', tertiary: '#9A958A' },
        divider: '#34322C',
        rule: '#EDE9DF',
        shadow: 'rgba(0, 0, 0, 0.65)',
        tint: {
          c1: '#D9826B',
          c2: '#7F9BD6',
          c3: '#D9B866',
          c4: '#6FB894',
          c5: '#A58BC9',
          c6: '#D183A6',
          ink: '#121210',
        },
      },
    },
  },
  typography: {
    fontFamily: sans,
    h1: {
      fontFamily: serif,
      fontWeight: 400,
      fontSize: 'clamp(56px, 7.8vw, 112px)',
      lineHeight: 0.95,
      letterSpacing: '-0.02em',
    },
    h2: { fontFamily: serif, fontWeight: 400, fontSize: 44, lineHeight: 1.2 },
    h3: { fontSize: 22, fontWeight: 600, lineHeight: 1.3 },
    body1: { fontSize: 17, lineHeight: 1.55 },
    body2: { fontSize: 15, lineHeight: 1.5 },
    mono: { fontFamily: mono, fontSize: 14, lineHeight: 1.5 },
    button: { textTransform: 'none' },
  },
  components: {
    MuiTypography: {
      defaultProps: { variantMapping: { mono: 'span' } },
    },
    MuiLink: {
      defaultProps: { underline: 'none', color: 'inherit' },
      styleOverrides: {
        root: ({ theme }) => ({
          transition: 'color .2s',
          '&:hover': { color: theme.vars.palette.primary.main },
          '&:focus-visible': {
            outline: `3px solid ${theme.vars.palette.primary.main}`,
            outlineOffset: 4,
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: 44,
          height: 44,
          border: `1px solid ${theme.vars.palette.text.primary}`,
          color: theme.vars.palette.text.primary,
          transition: 'background-color .28s, color .28s, border-color .28s, transform .28s',
          '&:hover': {
            backgroundColor: theme.vars.palette.primary.main,
            borderColor: theme.vars.palette.primary.main,
            color: theme.vars.palette.primary.contrastText,
            transform: 'rotate(-20deg)',
          },
        }),
      },
    },
  },
});

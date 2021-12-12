import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
    // disable unused variants
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    subtitle1: false;
    body2: false;
    subtitle2: false;
    caption: false;
    overline: false;
    button: false;
    // if we need to customize text, we can directly pass sx or wrap with a Box
    inherit: false;
  }
}

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CommonColors extends Record<Color, string> {
  }
}

const pxToRem = createTheme().typography.pxToRem;

// TODO(design_system): put these exports in another module, possibly
export const colors: Record<Color, string | undefined> = {
  // grayscale
  basic100: '#FFFFFF',
  basic300: '#F4F6F9',
  basic500: '#E7E9EB',
  basic700: '#B6BCC2',
  basic900: '#86909A',
  basic1100: '#0D2135',
  // blues
  primary100: '#E6EEF6',
  primary300: '#CCDDED',
  primary500: '#0154A4',
  primary700: '#1B4774',
  primary900: '#0D2135',
  // greens
  success100: '#E7F5F1',
  success300: '#D0ECE2',
  success500: '#139F6F',
  success700: '#0E7753',
  success900: '#0A5038',
  //yellows
  warning100: '#FFF8EB',
  warning300: '#FFF1D6',
  warning500: '#FFB900',
  warning700: '#E5A701',
  warning900: '#926B01',
  // reds
  danger100: '#FEE6DA',
  danger300: '#FCA28F',
  danger500: '#F84647',
  danger700: '#C9393A',
  danger900: '#7A2223',
  inherit: undefined,
  transparent: undefined,
};

export const deprecatedTypeset: ThemeOptions['typography'] = {
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  body1: undefined,
  subtitle1: undefined,
  body2: undefined,
  subtitle2: undefined,
  caption: undefined,
  overline: undefined,
  button: undefined,
};

export const typography: ThemeOptions['typography'] = {
  fontFamily: "'Poppins', sans-serif, 'Lora', serif",
  // TODO(design_system): add responsive sizes for breakpoints
  h1: {
    fontSize: pxToRem(24),
    lineHeight: pxToRem(36),
  },
  h2: {
    fontSize: pxToRem(20),
    lineHeight: pxToRem(28),
  },
  p1: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
  },
  p2: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  p3: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
  },
};

export const componentOverrides: ThemeOptions['components'] = {
  MuiTypography: {
    defaultProps: {
      fontFamily: "'Poppins', sans-serif, 'Lora', serif",
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        fontFamily: "'Poppins', sans-serif, 'Lora', serif",
        borderRadius: 4,
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        alignItems: 'center',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        color: colors.basic700,
      },
    },
  },
};


export const theme = {
  palette: {
    common: { ...colors },
  },
  components: { ...componentOverrides },
  typography: {
    ...typography,
    ...deprecatedTypeset,
  },
};

export default createTheme(theme);


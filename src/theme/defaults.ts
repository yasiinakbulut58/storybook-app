const defaultTheme = {
  colors: {
    base: {
      light: '#FFFFFF',
      contrast: '#193B67'
    },

    primary: {
      light: '#1676F3',
      textLight: '#1676F3',
      contrast: '#FFFFFF'
    },

    error: {
      light: '#FF4238',
      textLight: '#F52419',
      contrast: '#FFFFFF'
    },

    success: {
      light: '#15C15D',
      textLight: '#00A344',
      contrast: '#FFFFFF'
    },

    dark: {
      light: '#192434',
      textLight: 'rgba(24, 39, 58, 0.94)',
      contrast: '#FFFFFF'
    },

    shade: {
      shade100: '#192434',
      shade90: 'rgba(24, 39, 58, 0.94)',
      shade80: 'rgba(26, 41, 61, 0.83)',
      shade70: 'rgba(27, 43, 65, 0.72)',
      shade60: 'rgba(28, 46, 69, 0.6)',
      shade50: 'rgba(28, 48, 74, 0.5)',
      shade40: 'rgba(28, 50, 79, 0.38)',
      shade30: 'rgba(28, 52, 84, 0.26)',
      shade20: 'rgba(28, 55, 90, 0.16)',
      shade10: 'rgba(26, 56, 96, 0.1)',
      shade5: 'rgba(25, 59, 103, 0.05)'
    },

    text: {
      header: '#192434',
      body: 'rgba(24, 39, 58, 0.94)',
      secondary: 'rgba(27, 43, 65, 0.72)',
      icon: 'rgba(28, 46, 69, 0.6)',
      tertiary: 'rgba(28, 48, 74, 0.5)',
      disabled: 'rgba(28, 52, 84, 0.26)'
    }
  },

  fonts: {
    body: 'Inter'
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    bolder: 700
  },

  fontSizes: {
    h1: '40px',
    h2: '28px',
    h3: '22px',
    h4: '18px',
    h5: '16px',
    h6: '13px',
    normal: '16px',
    small: '14px',
    xsmall: '13px'
  }
};

export default defaultTheme;

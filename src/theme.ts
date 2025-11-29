export const lightTheme = {
    colors: {
        primary: '#D4AF37', // African gold
        secondary: '#228B22', // Forest green
        accent: '#FF6B35', // Vibrant orange
        background: '#FFFFFF',
        surface: '#F5F5DC', // Beige for warmth
        text: '#2F4F2F', // Dark green for readability
        textSecondary: '#696969',
        error: '#DC143C',
        success: '#32CD32',
    },
    fonts: {
        regular: 'System',
        bold: 'System',
    },
    spacing: {
        small: 8,
        medium: 16,
        large: 24,
    },
};

export const darkTheme = {
    ...lightTheme,
    colors: {
        background: '#1A1A1A',
        surface: '#2E2E2E',
        text: '#F5F5DC',
        textSecondary: '#B0B0B0',
    },
};

export type Theme = typeof lightTheme;
import { IconButton, SvgIcon, useColorScheme } from '@mui/material';

const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const ThemeToggle = () => {
  const { mode, systemMode, setMode } = useColorScheme();
  if (!mode) return null; // mode is undefined until MUI has read the saved setting

  const isDark = (mode === 'system' ? systemMode : mode) === 'dark';

  return (
    <IconButton
      onClick={() => setMode(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      <SvgIcon sx={{ fontSize: 18 }} viewBox="0 0 24 24">
        {isDark ? (
          <g {...iconProps}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </g>
        ) : (
          <path {...iconProps} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        )}
      </SvgIcon>
    </IconButton>
  );
};

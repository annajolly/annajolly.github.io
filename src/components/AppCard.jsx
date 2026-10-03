/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

const TINTS = 6;
const ease = 'cubic-bezier(.2,.7,.2,1)';

export const AppCard = ({ index, title, description, link, image, stack = [], year }) => {
  const number = String(index + 1).padStart(2, '0');
  const meta = [...stack, year].filter(Boolean).join(' · ');
  const tint = `tint.c${(index % TINTS) + 1}`;

  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        height: '100%',
        borderRadius: '16px',
        transition: `transform .28s ${ease}, box-shadow .28s, border-color .28s`,
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: `0 22px 44px -22px ${theme.vars.palette.shadow}`,
          borderColor: 'primary.main',
        },
        '&:hover .shot': { transform: 'scale(1.04)' },
        '&:hover .arrow': {
          transform: 'rotate(-45deg)',
          bgcolor: 'primary.main',
          borderColor: 'primary.main',
          color: 'primary.contrastText',
        },
        '&:hover .visit, &:focus-within .visit': { opacity: 1, transform: 'none' },
        '@media (prefers-reduced-motion: reduce)': {
          '&, & *': { transition: 'none !important' },
          '&:hover, &:hover .shot': { transform: 'none' },
        },
      })}
    >
      <CardActionArea
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          '& .MuiCardActionArea-focusHighlight': { display: 'none' },
        }}
      >
        <Box sx={{ height: { xs: 200, sm: 240 }, overflow: 'hidden', bgcolor: tint }}>
          <Stack
            className="shot"
            spacing={2}
            sx={{ height: '100%', pt: 2.5, px: 3, color: 'tint.ink', transition: `transform .5s ${ease}` }}
          >
            <Typography variant="mono" sx={{ fontSize: 13 }}>
              {number}
            </Typography>
            {image && (
              <CardMedia
                component="img"
                image={image}
                alt={`Screenshot of ${title}`}
                sx={{
                  flex: 1,
                  minHeight: 0,
                  objectFit: 'cover',
                  objectPosition: 'top left',
                  borderRadius: '8px 8px 0 0',
                  boxShadow: '0 8px 24px -12px rgba(0,0,0,.35)',
                }}
              />
            )}
          </Stack>
        </Box>

        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5, p: 3, '&:last-child': { pb: 3 } }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <Typography variant="h3" component="h3">
              {title}
            </Typography>
            <Box
              className="arrow"
              aria-hidden="true"
              sx={{
                width: 44,
                height: 44,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 1,
                borderColor: 'text.primary',
                borderRadius: '50%',
                transition: 'transform .28s, background-color .28s, color .28s, border-color .28s',
              }}
            >
              <SvgIcon sx={{ fontSize: 18 }} viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </SvgIcon>
            </Box>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1.5} sx={{ mt: 'auto', pt: 0.5 }}>
            <Typography variant="mono" color="text.tertiary" sx={{ fontSize: 12 }}>
              {meta}
            </Typography>
            <Typography
              variant="mono"
              className="visit"
              sx={{
                fontSize: 12,
                color: 'primary.main',
                opacity: { xs: 1, sm: 0 },
                transform: { xs: 'none', sm: 'translateY(6px)' },
                transition: 'opacity .28s, transform .28s',
              }}
            >
              Visit site ↗
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

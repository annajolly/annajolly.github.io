import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { AppCards } from './components/AppCards';
import { ThemeToggle } from './components/ThemeToggle';

// Edit these to personalize the page. Leave a value empty ('') to hide it.
const SITE = {
  name: 'Anna Jolly',
  domain: 'annajolly.io',
  bio: 'Senior Software Developer based in Montréal, specializing in front-end development. I build scalable, intuitive web experiences primarily with React and Node.js, and I’m passionate about transforming product vision into polished, impactful software.',
  email: 'anna@annajolly.io',
  github: 'https://github.com/annajolly',
  linkedin: 'https://www.linkedin.com/in/anna-jolly-671478127',
  resume: '', // link to a résumé PDF
};

const external = { target: '_blank', rel: 'noopener noreferrer' };

function App() {
  const year = new Date().getFullYear();

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: 1440,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        px: { xs: 2, sm: 5, lg: 10 },
        pt: { xs: 3, sm: 5, lg: 7 },
        pb: { xs: 4, sm: 6, lg: 8 },
      }}
    >
      <Box
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          pb: 3,
          borderBottom: 1,
          borderColor: 'rule',
        }}
      >
        <Link
          href="#top"
          variant="mono"
          sx={{ fontSize: 15, fontWeight: 500, letterSpacing: '0.02em' }}
        >
          {SITE.domain}
        </Link>
        <Stack
          component="nav"
          aria-label="Main"
          direction="row"
          alignItems="center"
          spacing={{ xs: 3, sm: 5 }}
        >
          {SITE.github && (
            <Link
              href={SITE.github}
              variant="mono"
              sx={{ py: 1.5 }}
              {...external}
            >
              GitHub ↗
            </Link>
          )}
          {SITE.linkedin && (
            <Link
              href={SITE.linkedin}
              variant="mono"
              sx={{ py: 1.5 }}
              {...external}
            >
              LinkedIn ↗
            </Link>
          )}
          <ThemeToggle />
        </Stack>
      </Box>

      <Box component="main" sx={{ pb: 15 }}>
        <Box
          id="top"
          component="section"
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(12, minmax(0, 1fr))',
            },
            columnGap: 3,
            rowGap: 4,
            alignItems: 'end',
            py: { xs: 7, lg: 12 },
          }}
        >
          <Typography variant="h1" sx={{ gridColumn: { md: 'span 9' } }}>
            {SITE.name}{' '}
            <Box component="em" sx={{ color: 'primary.main' }}>
              software developer.
            </Box>
          </Typography>
          <Stack
            spacing={2}
            sx={{ gridColumn: { md: 'span 3' }, pb: 1.5, maxWidth: 520 }}
          >
            {SITE.bio && (
              <Typography color="text.secondary">{SITE.bio}</Typography>
            )}
            {SITE.email && (
              <Link
                href={`mailto:${SITE.email}`}
                variant="mono"
                sx={{ py: 1.5 }}
              >
                {SITE.email} →
              </Link>
            )}
          </Stack>
        </Box>

        <Box
          id="work"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: 1,
            columnGap: 3,
            pb: 4,
          }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: 36, sm: 44 } }}>
            Selected work
          </Typography>
          <Typography variant="mono" color="text.tertiary">
            Hover to preview · click to visit
          </Typography>
        </Box>

        <AppCards />
      </Box>

      <Box
        id="about"
        component="footer"
        sx={{
          mt: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 1,
          columnGap: 3,
          pt: 3,
          borderTop: 1,
          borderColor: 'rule',
        }}
      >
        <Typography variant="mono" color="text.secondary">
          © {year} {SITE.name}
        </Typography>
        {SITE.resume && (
          <Link
            href={SITE.resume}
            variant="mono"
            sx={{ py: 1.5 }}
            {...external}
          >
            Résumé ↗
          </Link>
        )}
      </Box>
    </Container>
  );
}

export default App;

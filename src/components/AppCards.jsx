import { Grid } from '@mui/material';
import { AppCard } from './AppCard';
import CardImage from '../images/my-media-diary.png';

// `stack` and `year` are optional; add more projects to this list.
const cards = [
  {
    id: 0,
    title: 'MyMediaDiary',
    description: 'Web app to track movies watched and books read',
    link: 'https://my-media-diary-auth.web.app',
    image: CardImage,
    stack: [],
    year: '',
  },
];

export const AppCards = () => {
  return (
    <Grid container spacing={{ xs: 3, md: 4 }}>
      {cards.map((card, i) => (
        <Grid key={card.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <AppCard index={i} {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

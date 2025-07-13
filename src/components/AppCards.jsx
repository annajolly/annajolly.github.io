import { Box, Grid } from '@mui/material';
import { AppCard } from './AppCard';
import CardImage from '../images/my-media-diary.png';

const cards = [
  {
    id: 0,
    title: 'MyMediaDiary',
    description: 'Web app to track movies watched and books read',
    link: 'https://my-media-diary-auth.web.app',
    image: CardImage,
  },
];

export const AppCards = () => {
  return (
    <Grid container>
      {cards.map(({ id, title, description, link, image }) => (
        <Grid key={id} size={{ sx: '12', md: '6' }}>
          <AppCard
            title={title}
            description={description}
            link={link}
            image={image}
          />
        </Grid>
      ))}
    </Grid>
  );
};

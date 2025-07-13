import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export const AppCard = (props) => {
  const { title, description, link, image: Image } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={link}>
        <CardMedia
          component="img"
          height="174"
          image={Image}
          alt={`image of ${title} app`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

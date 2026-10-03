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
    <div className="card-grid">
      {cards.map((card, i) => (
        <AppCard key={card.id} index={i} {...card} />
      ))}
    </div>
  );
};

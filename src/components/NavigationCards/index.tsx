import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type CardItem = {
  title: string;
  description: string;
  to: string;
};

const cards: CardItem[] = [
  {
    title: 'O Mundo',
    description: 'A Apostasia, a Umbra, as Piras Sagradas e o que restou da civilização.',
    to: '/wiki/o-mundo/dominio-de-lumen',
  },
  {
    title: 'Locais',
    description: 'Cidades, vilas e estradas do Domínio — de Encruzilhada às ruínas de Sino.',
    to: '/wiki/locais/encruzilhada',
  },
  {
    title: 'Facções & NPCs',
    description: 'As organizações que movem o mundo e os rostos que vocês encontraram.',
    to: '/wiki/faccoes/a-marcha',
  },
  {
    title: 'Diário de Campanha',
    description: 'Registros das sessões — o que aconteceu, decisão por decisão.',
    to: '/blog',
  },
];

function Card({title, description, to}: CardItem) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <p className={styles.cardDescription}>{description}</p>
    </Link>
  );
}

export default function NavigationCards(): ReactNode {
  return (
    <section className={styles.cards}>
      {cards.map((props, idx) => (
        <Card key={idx} {...props} />
      ))}
    </section>
  );
}

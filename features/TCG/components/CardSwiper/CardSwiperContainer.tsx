import { ContentModal } from '@/components/elements/Modal/ContentModal/ContentModal';
import { useState } from 'react';
import { useCardSwiper } from '../../hooks/useCardSwiper';
import { Card as CardType } from '../../types';
import { CardSwiper } from './CardSwiper';

type CardSwiperContainerProps = {
  cards: CardType[];
  onComplete: () => void;
};

export const CardSwiperContainer = ({
  cards,
  onComplete,
}: CardSwiperContainerProps) => {
  const [isModalOpen, setModalOpen] = useState(true);
  const { isEnd, handleReset, handleReachEnd } = useCardSwiper(cards, () => {
    setModalOpen(false);
    onComplete();
  });

  return (
    <ContentModal open={isModalOpen} onClose={() => setModalOpen(false)}>
      <CardSwiper
        cards={cards}
        isEnd={isEnd}
        onReset={handleReset}
        onReachEnd={handleReachEnd}
      />
    </ContentModal>
  );
};

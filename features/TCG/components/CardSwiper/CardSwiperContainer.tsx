import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import { Card as CardType } from '../../types';
import { CardSwiper } from './CardSwiper';

type CardSwiperContainerProps = {
  cards: CardType[];
  onComplete?: () => void;
};

export const CardSwiperContainer = ({
  cards,
  onComplete,
}: CardSwiperContainerProps) => {
  const [open, setOpen] = useState(true);

  const handleComplete = () => {
    setOpen(false);
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-modal="true"
        role="dialog"
      >
        <CardSwiper cards={cards} onClose={handleComplete} />
      </Modal>
    </Box>
  );
};

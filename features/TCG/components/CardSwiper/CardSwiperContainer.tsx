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
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: 'transparent', // 背景を透明に
              backdropFilter: 'blur(10px)', // 背景ぼかし効果
            },
          },
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-modal="true"
        role="dialog"
      >
        <Box
          sx={{
            bgcolor: '#f5f5f5',
            borderRadius: '16px',
            boxShadow: '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff',
            padding: { xs: 3, md: 5 },
            maxWidth: '600px',
            width: '90%',
            margin: 'auto',
            outline: 'none',
            position: 'relative',
          }}
        >
          <CardSwiper cards={cards} onClose={handleComplete} />
        </Box>
      </Modal>
    </Box>
  );
};

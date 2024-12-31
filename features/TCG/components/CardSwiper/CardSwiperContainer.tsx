import { Box, Modal } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
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
  const modalRef = useRef<HTMLDivElement | null>(null); // モーダル内要素の参照

  const handleComplete = () => {
    setOpen(false);
    if (onComplete) {
      onComplete();
    }
  };

  // モーダルが開いたときにフォーカスを設定
  useEffect(() => {
    if (open && modalRef.current) {
      modalRef.current.focus(); // モーダル内要素にフォーカスを設定
    }
  }, [open]);

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
          ref={modalRef} // フォーカスを設定する要素
          tabIndex={-1} // フォーカス可能にする
          sx={{
            maxWidth: '600px',
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

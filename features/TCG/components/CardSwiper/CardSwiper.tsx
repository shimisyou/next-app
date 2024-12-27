import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../../types';
import { TCGCard } from '../TCGCard/TCGCard';

type CardSwiperProps = {
  cards: Card[];
  onClose: () => void;
};

export const CardSwiper = ({ cards, onClose }: CardSwiperProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2, // 見切れ防止のための余白を追加
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 10,
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Swiper Component */}
      <Swiper
        slidesPerView={1}
        modules={[EffectCards]}
        effect="cards"
        grabCursor
        navigation
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        cardsEffect={{
          perSlideOffset: 1,
          rotate: false,
          perSlideRotate: 0,
          slideShadows: false,
        }}
      >
        {cards.map((card) => (
          <SwiperSlide
            key={card.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              minHeight: '400px', // スライドの最低高さを設定
              paddingBottom: '16px', // カードの下部が見切れないよう余白を設定
            }}
          >
            <TCGCard card={card} onClick={() => console.log(card)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

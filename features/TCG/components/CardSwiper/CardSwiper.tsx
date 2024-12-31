import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import { NeumorphicText } from '@/components/elements/Text/NeumorphicText/NeumorphicText';
import { Box, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { useState } from 'react';
import { EffectCards, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card as CardType } from '../../types';
import { TCGCard } from '../TCGCard/TCGCard';

type CardSwiperProps = {
  cards: CardType[];
  onClose: () => void;
};

export const CardSwiper = ({ cards, onClose }: CardSwiperProps) => {
  const [isEnd, setIsEnd] = useState(false);

  const handleReset = () => {
    onClose();
    setIsEnd(false);
  };
  const handleReachEnd = () => {
    setIsEnd(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, md: 4 },
        width: '100%',
      }}
    >
      <Card
        sx={{
          width: '100%',
          bgcolor: '#f5f5f5', // 柔らかな背景色
          borderRadius: '12px',
          boxShadow: '4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff', // 控えめな影
          margin: '16px 0', // 縦方向の余白
          overflow: 'hidden',
        }}
      >
        <CardHeader
          title={
            <Box sx={{ textAlign: 'center' }}>
              <NeumorphicText isInset>カードをめくろう!</NeumorphicText>
            </Box>
          }
        />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Swiper
            slidesPerView={1}
            modules={[EffectCards, Navigation]}
            effect="cards"
            grabCursor
            navigation={{
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            oneWayMovement
            speed={500}
            nested
            onReachEnd={handleReachEnd}
            allowSlideNext={!isEnd}
            style={{
              width: '100%',
              overflow: 'visible',
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
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'visible',
                }}
              >
                <TCGCard card={card} onClick={() => console.log(card)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'center',
            minHeight: '64px', // ボタンの高さを固定
            marginBottom: '8px', // Swiperとの隙間を調整
          }}
        >
          {!isEnd ? (
            <NeumorphicButton
              key="next"
              aria-label="めくる"
              className="swiper-button-next"
            >
              めくる
            </NeumorphicButton>
          ) : (
            <NeumorphicButton key="end" onClick={handleReset}>
              終了
            </NeumorphicButton>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

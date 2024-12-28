import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';
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
        p: 4,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: '600px',
          boxShadow: 3,
          borderRadius: 4,
        }}
      >
        <CardHeader title="カードをめくろう" />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '24px',
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
            <Button
              key="next"
              className="swiper-button-next"
              variant="contained"
              aria-label="めくる"
            >
              めくる
            </Button>
          ) : (
            <Button
              key="end"
              variant="contained"
              onClick={handleReset}
              aria-label="終了"
            >
              終了
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

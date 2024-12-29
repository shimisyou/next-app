import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
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
        p: { xs: 2, md: 4 },
        width: '100%',
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: '600px',
          boxShadow: '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff',
          borderRadius: '16px',
          background: '#f0f0f0',
          m: 2,
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h4"
              sx={{
                color: '#333',
                fontWeight: 'bold',
                textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              }}
              textAlign={'center'}
            >
              カードをめくろう!
            </Typography>
          }
        />
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

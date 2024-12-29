import {
  Box,
  Button,
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
            <Typography variant="h5" component="h2">
              <Box sx={{ textAlign: 'center', color: '#333' }}>
                {' '}
                カードをめくろう
              </Box>
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
            <Button
              key="next"
              className="swiper-button-next"
              variant="contained"
              aria-label="めくる"
              sx={{
                background: '#f0f0f0',
                boxShadow: '5px 5px 15px #d1d1d1, -5px -5px 15px #ffffff',
                color: '#333',
                borderRadius: '50px', // 楕円形にするためのスタイル
                padding: '10px 20px', // ボタンのパディングを調整
                '&:hover': {
                  background: '#e0e0e0',
                },
              }}
            >
              めくる
            </Button>
          ) : (
            <Button
              key="end"
              variant="contained"
              onClick={handleReset}
              aria-label="終了"
              sx={{
                background: '#f0f0f0',
                boxShadow: '5px 5px 15px #d1d1d1, -5px -5px 15px #ffffff',
                color: '#333',
                borderRadius: '50px', // 楕円形にするためのスタイル
                padding: '10px 20px', // ボタンのパディングを調整
                '&:hover': {
                  background: '#e0e0e0',
                },
              }}
            >
              終了
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

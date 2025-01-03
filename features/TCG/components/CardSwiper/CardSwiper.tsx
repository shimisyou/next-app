import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import { NeumorphicText } from '@/components/elements/Text/NeumorphicText/NeumorphicText';
import { Box, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { EffectCards, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card as CardType } from '../../types';
import { TCGCard } from '../TCGCard/TCGCard';

type CardSwiperProps = {
  cards: CardType[];
  isEnd: boolean;
  onReset: () => void;
  onReachEnd: () => void;
};

export const CardSwiper = ({
  cards,
  isEnd,
  onReset,
  onReachEnd,
}: CardSwiperProps) => {
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
          bgcolor: '#f5f5f5',
          borderRadius: '12px',
          boxShadow: '4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff',
          margin: '16px 0',
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
            navigation={{ nextEl: '.swiper-button-next' }}
            pagination={{ clickable: true }}
            oneWayMovement
            speed={500}
            nested
            onReachEnd={onReachEnd}
            allowSlideNext={!isEnd}
            style={{ width: '100%', overflow: 'visible' }}
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
                <TCGCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'center',
            minHeight: '64px',
            marginBottom: '8px',
          }}
        >
          {!isEnd ? (
            <NeumorphicButton
              text="めくる"
              key="next"
              aria-label="めくる"
              className="swiper-button-next"
            />
          ) : (
            <NeumorphicButton text="終了" key="end" onClick={onReset} />
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

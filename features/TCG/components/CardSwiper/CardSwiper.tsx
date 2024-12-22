import CloseIcon from '@mui/icons-material/Close';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card as CardType } from '../../types';

type CardSwiperProps = {
  cards: CardType[];
  onClose: () => void;
};

export const CardSwiper = ({ cards, onClose }: CardSwiperProps) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <IconButton
        onClick={onClose}
        sx={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}
      >
        <CloseIcon />
      </IconButton>
      <Swiper
        slidesPerView={1}
        modules={[EffectCards]}
        effect={'cards'}
        grabCursor
        style={{ height: '100%' }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Card
                sx={{
                  width: '80%',
                  maxWidth: '300px',
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: 'white',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Image
                    src={card.img.url}
                    alt={card.img.alt}
                    layout="responsive"
                    width={300}
                    height={400}
                    objectFit="cover"
                  />
                </CardContent>
              </Card>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {card.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {card.rarity}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

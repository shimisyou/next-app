import { Box } from '@mui/material';
import { ReactNode } from 'react';
import 'swiper/css';
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper/types';

type CoverFlowSwiperProps = {
  content: ReactNode[];
  onSlideChange?: (swiper: SwiperInstance) => void;
};

export const CoverFlowSwiper = ({
  content,
  onSlideChange,
}: CoverFlowSwiperProps) => {
  return (
    <Swiper
      effect={'coverflow'}
      spaceBetween={10}
      grabCursor
      loop
      centeredSlides
      slidesPerView={2}
      modules={[EffectCoverflow]}
      coverflowEffect={{
        depth: 100,
        rotate: -10,
        stretch: 0,
        modifier: 1,
        scale: 1,
        slideShadows: false,
      }}
      aria-label="Swiper container"
      role="region"
      onSlideChange={onSlideChange} // 型安全なイベント
    >
      {content.map((slideContent, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              py: 4,
              px: 2,
            }}
          >
            {slideContent}
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

import { Box, CircularProgress } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100); // 適切な遅延時間を設定

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {!isReady && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {isReady && (
        <Swiper
          effect={'coverflow'}
          spaceBetween={30}
          grabCursor
          loop
          centeredSlides
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
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
                  display: 'inline-block',
                }}
              >
                {slideContent}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

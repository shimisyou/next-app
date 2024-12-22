import { Box, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReversibleImage } from '../../types';

type ReversiblePackProps = {
  packImg: ReversibleImage;
};

const CardWithReflection = ({ url, alt }: { url: string; alt: string }) => (
  <Box
    sx={{
      position: 'relative',
      width: '200px',
      height: '380px', // カードの高さ + 影画像分
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    {/* メインカード */}
    <Card
      sx={{
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        zIndex: 2,
        borderRadius: '12px',
      }}
    >
      <CardContent
        sx={{
          p: 0,
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Image
          src={url}
          alt={alt}
          sizes="200px" // 固定サイズを指定
          style={{
            objectFit: 'fill',
          }}
          fill
        />
      </CardContent>
    </Card>
    {/* 反転影画像 */}
    <Box
      sx={{
        position: 'absolute',
        top: '320px',
        width: '200px',
        height: '60px',
        overflow: 'hidden',
        transform: 'scaleY(-1)',
        opacity: 0.3,
        clipPath: 'inset(0px 0px 0px 0px round 0px 0px 12px 12px)',
      }}
    >
      <Image
        src={url}
        alt={`${alt} Reflection`}
        sizes="200px" // 固定サイズを指定
        style={{
          objectFit: 'cover',
        }}
        fill
      />
    </Box>
  </Box>
);

export const ReversiblePack = ({ packImg }: ReversiblePackProps) => {
  return (
    <Swiper
      effect={'flip'}
      grabCursor
      modules={[EffectFlip]}
      flipEffect={{
        slideShadows: false,
      }}
      style={{
        width: '200px',
        height: '360px',
        overflow: 'hidden',
      }}
      loop
    >
      {[packImg.front, packImg.back].map((side, index) => (
        <SwiperSlide key={index}>
          <CardWithReflection url={side.url} alt={side.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

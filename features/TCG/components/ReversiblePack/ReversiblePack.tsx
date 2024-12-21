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
      height: '360px', // カードの高さ + 影画像分
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
        borderRadius: '12px', // カードの角を丸くする
      }}
    >
      <CardContent
        sx={{
          p: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={url}
          alt={alt}
          width={200}
          height={300}
          style={{
            objectFit: 'cover',
          }}
        />
      </CardContent>
    </Card>
    {/* 反転影画像 */}
    <Box
      sx={{
        position: 'absolute',
        top: '320px', // カードの下に余白を追加
        width: '200px',
        height: '60px',
        overflow: 'hidden',
        transform: 'scaleY(-1)', // 垂直反転
        opacity: 0.3, // 透過
        clipPath: 'inset(0px 0px 0px 0px round 0px 0px 12px 12px)', // 上は直角、下は丸角
      }}
    >
      <Image
        src={url}
        alt={`${alt} Reflection`}
        width={200}
        height={300}
        style={{
          objectFit: 'cover',
        }}
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
        height: '400px', // 全体の高さを調整
        overflow: 'visible', // 影画像が表示されるようにする
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

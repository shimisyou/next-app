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

const CardWithReflection = ({
  url,
  alt,
  showText,
}: {
  url: string;
  alt: string;
  showText: boolean;
}) => (
  <Box
    sx={{
      position: 'relative',
      width: { xs: '120px', md: '200px' },
      height: { xs: '220px', md: '380px' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto', // 中央に配置
    }}
  >
    {/* メインカード */}
    <Card
      sx={{
        width: '100%',
        height: { xs: '180px', md: '300px' },
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
          sizes="(max-width: 600px) 150px, 200px"
          style={{
            objectFit: 'fill',
          }}
          fill
        />
        {/* "Card Game" テキスト */}
        {showText && (
          <Box
            sx={{
              position: 'absolute',
              bottom: '40px', // テキストの位置をさらに上に調整
              width: '100%',
              textAlign: 'center',
              color: 'white',
              fontSize: { xs: '14px', md: '18px' }, // フォントサイズを調整
              fontWeight: 'bold',
              textShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
            }}
          >
            Card Game
          </Box>
        )}
      </CardContent>
    </Card>
    {/* 反転影画像 */}
    <Box
      sx={{
        position: 'absolute',
        top: { xs: '190px', md: '320px' },
        width: { xs: '120px', md: '200px' },
        height: { xs: '40px', md: '60px' },
        overflow: 'hidden',
        transform: 'scaleY(-1)',
        opacity: 0.3,
        clipPath: 'inset(0px 0px 0px 0px round 0px 0px 12px 12px)',
      }}
    >
      <Image
        src={url}
        alt={`${alt} Reflection`}
        sizes="(max-width: 600px) 150px, 200px"
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
    <Box
      sx={{
        width: { xs: '120px', md: '200px' },
        height: { xs: '230px', md: '380px' },
        margin: '0 auto', // 中央に配置
      }}
    >
      <Swiper
        effect={'flip'}
        grabCursor
        nested
        modules={[EffectFlip]}
        flipEffect={{
          slideShadows: false,
        }}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
        loop
      >
        {[packImg.front, packImg.back].map((side, index) => (
          <SwiperSlide key={index}>
            <CardWithReflection
              url={side.url}
              alt={side.alt}
              showText={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

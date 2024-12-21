import { CoverFlowSwiper } from '@/components/elements/CoverFlowSwiper/CoverFlowSwiper';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Swiper as SwiperInstance } from 'swiper/types';
import { Pack } from '../../types';
import { ReversiblePack } from '../ReversiblePack/ReversiblePack';

type PackSelectorProps = {
  packs: Pack[];
  onPackOpened: (openedPack: Pack) => void;
};

export const PackSelector = ({ packs, onPackOpened }: PackSelectorProps) => {
  const [selectedPack, setSelectedPack] = useState<Pack>(packs[0]);
  const handleSlideChange = (swiper: SwiperInstance) => {
    const activeIndex = swiper.realIndex; // 選択されたスライドのインデックス
    setSelectedPack(packs[activeIndex]); // 選択されたパックを状態に設定
  };

  const handleOpenPack = () => {
    onPackOpened(selectedPack); // 親に選択されたパックを通知
  };

  return (
    <>
      <CoverFlowSwiper
        content={packs.map((pack) => {
          return <ReversiblePack key={pack.id} packImg={pack.img} />;
        })}
        onSlideChange={handleSlideChange}
      />
      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
        }}
      >
        <Button variant="contained" color="primary" onClick={handleOpenPack}>
          開封する
        </Button>
      </Box>
    </>
  );
};

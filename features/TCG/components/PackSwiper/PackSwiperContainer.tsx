'use client';

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Pack } from '../../types';
import { CardSwiperContainer } from '../CardSwiper/CardSwiperContainer';
import PackSwiper from './PackSwiper';

type PackSwiperContainerProps = {
  packs: Pack[] | [];
  fallback: React.ReactNode;
};

export const PackSwiperContainer = ({
  packs,
  fallback,
}: PackSwiperContainerProps) => {
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);
  const [isPackOpened, setIsPackOpened] = useState(false);

  // packsのロードが完了したときに初期状態を設定
  useEffect(() => {
    if (packs && packs.length > 0) {
      setSelectedPack(packs[0]); // 最初のパックを選択
    }
  }, [packs]);

  const handleSlideChange = (pack: Pack) => {
    setSelectedPack(pack);
  };

  const handleOpenPack = () => {
    if (selectedPack) {
      setIsPackOpened(true);
    }
  };

  const handleOnClose = () => {
    setIsPackOpened(false);
  };

  // packsがロードされていない場合のフォールバック
  if (!packs) {
    return <>{fallback}</>;
  }

  return (
    <Box>
      {!isPackOpened ? (
        <>
          <PackSwiper
            packs={packs}
            onSlideChange={handleSlideChange}
            onOpenPack={handleOpenPack}
          />
        </>
      ) : (
        selectedPack && (
          <CardSwiperContainer
            cards={selectedPack.cards}
            onComplete={handleOnClose}
          />
        )
      )}
    </Box>
  );
};

export default PackSwiperContainer;
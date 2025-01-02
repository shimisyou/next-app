'use client';

import { Box } from '@mui/material';
import { usePackManager } from '../../hooks/usePackManager';
import { Pack } from '../../types';
import { CardSwiperContainer } from '../CardSwiper/CardSwiperContainer';
import PackSwiper from './PackSwiper';

type PackSwiperContainerProps = {
  packs: Pack[] | [];
  fallback: React.ReactNode;
};

export const PackSwiperContainer = ({
  packs: initialPacks,
  fallback,
}: PackSwiperContainerProps) => {
  const {
    packs,
    selectedPack,
    isPackOpened,
    handleSlideChange,
    handleOpenPack,
    handleOnComplete,
  } = usePackManager(initialPacks);

  if (packs.length === 0) {
    return <>{fallback}</>;
  }

  return (
    <Box>
      {!isPackOpened ? (
        <PackSwiper
          packs={packs}
          onSlideChange={handleSlideChange}
          onOpenPack={handleOpenPack}
        />
      ) : (
        selectedPack && (
          <CardSwiperContainer
            cards={selectedPack.cards}
            onComplete={handleOnComplete}
          />
        )
      )}
    </Box>
  );
};

export default PackSwiperContainer;

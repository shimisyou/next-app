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
  packs: initialPacks,
  fallback,
}: PackSwiperContainerProps) => {
  const [packs, setPacks] = useState<Pack[]>(initialPacks); // 初期値をpropsから設定
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

  const handleOnComplete = () => {
    if (selectedPack) {
      // 開封済みのパックをリストから削除
      const updatedPacks = packs.filter((pack) => pack.id !== selectedPack.id);
      setPacks(updatedPacks);

      // 次のパックを選択
      if (updatedPacks.length > 0) {
        setSelectedPack(updatedPacks[0]);
      } else {
        setSelectedPack(null); // パックがなくなった場合
      }
    }
    setIsPackOpened(false);
  };

  // packsがロードされていない場合のフォールバック
  if (!packs || packs.length === 0) {
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
            onComplete={handleOnComplete} // 完了時に削除処理を呼び出す
          />
        )
      )}
    </Box>
  );
};

export default PackSwiperContainer;

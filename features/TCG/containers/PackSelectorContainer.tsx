'use client';

import { useEffect, useState } from 'react';
import { CardSwiper } from '../components/CardSwiper/CardSwiper';
import { PackSelector } from '../components/PackSelector/PackSelector';
import { Pack } from '../types';

type PackSelectorContainerProps = {
  packs: Pack[] | null;
  fallback: React.ReactNode;
};

export const PackSelectorContainer = ({
  packs,
  fallback,
}: PackSelectorContainerProps) => {
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
      console.log('Opened pack:', selectedPack);
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
    <>
      {!isPackOpened ? (
        <PackSelector
          packs={packs}
          onSlideChange={handleSlideChange}
          onOpenPack={handleOpenPack}
        />
      ) : (
        selectedPack && (
          <CardSwiper cards={selectedPack.cards} onClose={handleOnClose} />
        )
      )}
    </>
  );
};

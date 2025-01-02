import { useEffect, useState } from 'react';
import { Pack } from '../types';

export const usePackManager = (initialPacks: Pack[]) => {
  const [packs, setPacks] = useState<Pack[]>(initialPacks);
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);
  const [isPackOpened, setIsPackOpened] = useState(false);

  useEffect(() => {
    if (packs.length > 0) {
      setSelectedPack(packs[0]); // 初期選択
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
      const updatedPacks = packs.filter((pack) => pack.id !== selectedPack.id);
      setPacks(updatedPacks);
      setSelectedPack(updatedPacks[0] || null);
    }
    setIsPackOpened(false);
  };

  return {
    packs,
    selectedPack,
    isPackOpened,
    handleSlideChange,
    handleOpenPack,
    handleOnComplete,
  };
};

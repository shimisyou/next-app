'use client';

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { generateMockPacks } from '../../mocks/packs';
import { Pack } from '../../types';
import { CardSwiperContainer } from '../CardSwiper/CardSwiperContainer';
import PackSwiper from './PackSwiper';

type PackSwiperContainerProps = {
  fallback: React.ReactNode; // ロード中に表示するコンテンツ
};

export const PackSwiperContainer = ({ fallback }: PackSwiperContainerProps) => {
  // パックの状態管理
  const [packs, setPacks] = useState<Pack[]>([]);
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);
  const [isPackOpened, setIsPackOpened] = useState(false);

  // モックデータを生成して設定
  useEffect(() => {
    const generatedPacks = generateMockPacks();
    console.log('Generated Packs:', generatedPacks); // 生成されたモックデータを確認
    setPacks(generatedPacks);
  }, []);

  // スワイパーのスライド変更時の処理
  const handleSlideChange = (pack: Pack) => {
    setSelectedPack(pack);
  };

  // パック開封時の処理
  const handleOpenPack = () => {
    setIsPackOpened(true);
  };

  // スワイパー完了時の処理
  const handleOnComplete = () => {
    setIsPackOpened(false);

    if (selectedPack) {
      setPacks((prevPacks) =>
        prevPacks.filter((pack) => pack.id !== selectedPack.id)
      );
      setSelectedPack(null); // 開封済みのパックをリセット
    }
  };

  // パックがロード中の場合の表示
  if (!packs.length) {
    return <>{fallback}</>;
  }

  // パックスワイパー or カードスワイパーの切り替え
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

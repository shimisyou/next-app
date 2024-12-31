'use client';

import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import { PackSwiperContainer } from '@/features/TCG/components/PackSwiper/PackSwiperContainer';
import { generateMockPacks } from '@/features/TCG/mocks/packs';
import { Pack } from '@/features/TCG/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const OpenPackPage = () => {
  const [packs, setPacks] = useState<Pack[]>([]);

  useEffect(() => {
    // クライアントサイドでモックデータを生成
    const generatedPacks = generateMockPacks();
    setPacks(generatedPacks);
  }, []);

  if (!packs.length) {
    return <div>Loading packs...</div>;
  }

  return (
    <>
      <Link href="/tcg/card" passHref>
        <NeumorphicButton>カード一覧へ</NeumorphicButton>
      </Link>
      <PackSwiperContainer
        packs={packs}
        fallback={<div>Loading packs...</div>}
      />
    </>
  );
};

export default OpenPackPage;

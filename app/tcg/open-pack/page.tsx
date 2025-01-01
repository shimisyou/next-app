'use client';

import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import { PackSwiperContainer } from '@/features/TCG/components/PackSwiper/PackSwiperContainer';
import { generateMockPacks } from '@/features/TCG/mocks/packs';
import { Pack } from '@/features/TCG/types';
import { Box } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const useMockPacks = () => {
  const [packs, setPacks] = useState<Pack[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // クライアントサイドでのみ実行
      const generatedPacks = generateMockPacks();
      setPacks(generatedPacks);
    }
  }, []);

  return packs;
};

const OpenPackPage = () => {
  const packs = useMockPacks();

  if (!packs.length) {
    return <div>Loading packs...</div>;
  }

  return (
    <>
      <Box sx={{ px: 2 }}>
        <Link href="/tcg/card" passHref>
          <NeumorphicButton>カード一覧へ</NeumorphicButton>
        </Link>
      </Box>
      <PackSwiperContainer
        packs={packs}
        fallback={<div>Loading packs...</div>}
      />
    </>
  );
};

export default OpenPackPage;

import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import { PackSwiperContainer } from '@/features/TCG/components/PackSwiper/PackSwiperContainer';
import { generateMockPacksWithCacheBuster } from '@/features/TCG/mocks/packs';
import Link from 'next/link';

const fetchPacks = async () => {
  return Promise.resolve(generateMockPacksWithCacheBuster());
};

const OpenPackPage = async () => {
  const packs = await fetchPacks();

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

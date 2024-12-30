import { PackSwiperContainer } from '@/features/TCG/components/PackSwiper/PackSwiperContainer';
import { mockPacks } from '@/features/TCG/mocks/packs';

const fetchPacks = async () => {
  return Promise.resolve(mockPacks);
};

const TCGTopPage = async () => {
  const packs = await fetchPacks();

  return (
    <PackSwiperContainer packs={packs} fallback={<div>Loading packs...</div>} />
  );
};

export default TCGTopPage;

import { PackSelectorContainer } from '@/features/TCG/containers/PackSelectorContainer';
import { mockPacks } from '@/features/TCG/mocks/packs';

const fetchPacks = async () => {
  return Promise.resolve(mockPacks);
};

const TCGTopPage = async () => {
  const packs = await fetchPacks();

  return (
    <PackSelectorContainer
      packs={packs}
      fallback={<div>Loading packs...</div>}
    />
  );
};

export default TCGTopPage;

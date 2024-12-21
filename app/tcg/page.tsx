import { PackSelectorContainer } from '@/features/TCG/containers/PackSelectorContainer';
import { mockPacks } from '@/features/TCG/mocks/packs';
import { Box, Typography } from '@mui/material';

const fetchPacks = async () => {
  return Promise.resolve(mockPacks);
};

const TCGTopPage = async () => {
  const packs = await fetchPacks();

  return (
    <>
      <Typography variant="h6" color="textSecondary" textAlign={'center'}>
        パックを選ぼう!
      </Typography>
      <Box display={'flex'} justifyContent={'center'}>
        <Box width={600}>
          <PackSelectorContainer
            packs={packs}
            fallback={<div>Loading packs...</div>}
          />
        </Box>
      </Box>
    </>
  );
};

export default TCGTopPage;

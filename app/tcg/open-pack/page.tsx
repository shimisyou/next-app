import { PackSwiperContainer } from '@/features/TCG/components/PackSwiper/PackSwiperContainer';
import { Box } from '@mui/material';

const OpenPackPage = () => {
  return (
    <Box>
      <PackSwiperContainer fallback={<div>Loading packs...</div>} />
    </Box>
  );
};

export default OpenPackPage;

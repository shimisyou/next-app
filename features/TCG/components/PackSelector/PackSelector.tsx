import { CoverFlowSwiper } from '@/components/elements/CoverFlowSwiper/CoverFlowSwiper';
import { Box, Button } from '@mui/material';
import { Pack } from '../../types';
import { ReversiblePack } from '../ReversiblePack/ReversiblePack';

type PackSelectorProps = {
  packs: Pack[];
  onSlideChange: (selectedPack: Pack) => void;
  onOpenPack: () => void;
};

export const PackSelector = ({
  packs,
  onSlideChange,
  onOpenPack,
}: PackSelectorProps) => {
  return (
    <>
      <CoverFlowSwiper
        content={packs.map((pack) => {
          return <ReversiblePack key={pack.id} packImg={pack.img} />;
        })}
        onSlideChange={(swiper) => onSlideChange(packs[swiper.realIndex])}
      />
      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
        }}
      >
        <Button variant="contained" color="primary" onClick={onOpenPack}>
          開封する
        </Button>
      </Box>
    </>
  );
};

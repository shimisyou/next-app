import { CoverFlowSwiper } from '@/components/elements/CoverFlowSwiper/CoverFlowSwiper';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
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
      <Card>
        <CardHeader
          title={
            <Typography variant="h6" color="textSecondary" textAlign={'center'}>
              パックを選ぼう!
            </Typography>
          }
        />
        <CardContent>
          <CoverFlowSwiper
            content={packs.map((pack) => {
              return <ReversiblePack key={pack.id} packImg={pack.img} />;
            })}
            onSlideChange={(swiper) => onSlideChange(packs[swiper.realIndex])}
          />
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              m: 4,
            }}
          >
            <Button variant="contained" color="primary" onClick={onOpenPack}>
              開封する
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

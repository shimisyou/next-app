import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import { CoverFlowSwiper } from '@/components/elements/CoverFlowSwiper/CoverFlowSwiper';
import {
  Box,
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

const PackSelector = ({
  packs,
  onSlideChange,
  onOpenPack,
}: PackSelectorProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        width: '100%',
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: '600px',
          boxShadow: '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff',
          borderRadius: '16px',
          background: '#f0f0f0',
          m: 2,
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h4"
              sx={{
                color: '#333',
                fontWeight: 'bold',
                textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              }}
              textAlign={'center'}
            >
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
        <CardActions
          sx={{
            justifyContent: 'center',
            minHeight: '64px',
            marginBottom: '8px',
          }}
        >
          <NeumorphicButton onClick={onOpenPack}>開封する</NeumorphicButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PackSelector;

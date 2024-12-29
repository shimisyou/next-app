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
        <CardActions
          sx={{
            justifyContent: 'center',
            minHeight: '64px',
            marginBottom: '8px',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={onOpenPack}
            sx={{
              background: '#f0f0f0',
              boxShadow: '5px 5px 15px #d1d1d1, -5px -5px 15px #ffffff',
              color: '#333',
              borderRadius: '50px',
              padding: '10px 20px',
              '&:hover': {
                background: '#e0e0e0',
              },
            }}
          >
            開封する
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

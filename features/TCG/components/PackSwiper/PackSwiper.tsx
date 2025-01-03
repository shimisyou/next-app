import NeumorphicButton from '@/components/elements/Button/NeumorphicButton/NeumorphicButton';
import { CoverFlowSwiper } from '@/components/elements/CoverFlowSwiper/CoverFlowSwiper';
import { NeumorphicText } from '@/components/elements/Text/NeumorphicText/NeumorphicText';
import { Box, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { Pack } from '../../types';
import { ReversiblePack } from '../ReversiblePack/ReversiblePack';

type PackSwiperProps = {
  packs: Pack[];
  onSlideChange: (selectedPack: Pack) => void;
  onOpenPack: () => void;
};

const PackSwiper = ({ packs, onSlideChange, onOpenPack }: PackSwiperProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 2,
        paddingX: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          bgcolor: '#f5f5f5', // 柔らかな背景色
          borderRadius: '12px',
          boxShadow: '4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff', // 控えめな影
          margin: '16px 0', // 縦方向の余白
          overflow: 'hidden', // 不要なスクロールを排除
        }}
      >
        <CardHeader
          title={
            <Box sx={{ textAlign: 'center' }}>
              <NeumorphicText isInset variant="h6" sx={{ textAlign: 'center' }}>
                パックを選ぼう!
              </NeumorphicText>
            </Box>
          }
        />
        <CardContent sx={{ padding: 1, pb: 0 }}>
          {/* コンテンツに適度な余白 */}
          <CoverFlowSwiper
            content={packs.map((pack) => (
              <ReversiblePack key={pack.id} packImg={pack.img} />
            ))}
            onSlideChange={(swiper) => onSlideChange(packs[swiper.realIndex])}
          />
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'center',
            pb: 2,
          }}
        >
          <NeumorphicButton text="開封" onClick={onOpenPack} />
        </CardActions>
      </Card>
    </Box>
  );
};

export default PackSwiper;

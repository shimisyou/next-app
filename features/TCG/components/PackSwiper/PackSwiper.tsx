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
        gap: 2, // 間隔を追加
        padding: 2, // 外側の余白
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
              <Typography
                variant="h6"
                sx={{
                  display: 'inline-block',
                  fontWeight: 600, // 少し軽めの太字
                  p: 1.5, // 適度な余白
                  px: 4,
                  bgcolor: '#f5f5f5', // 柔らかな背景色
                  borderRadius: '16px', // 角丸
                  textShadow: '0 0 3px rgba(0, 0, 0, 0.1)', // テキストの控えめなシャドウ
                  boxShadow:
                    'inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff', // 自然なインセット影
                  color: '#333',
                }}
              >
                パックを選ぼう!
              </Typography>
            </Box>
          }
        />
        <CardContent sx={{ padding: '16px' }}>
          {' '}
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
            padding: '16px', // アクション部分に余白
          }}
        >
          <NeumorphicButton onClick={onOpenPack}>開封</NeumorphicButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PackSwiper;

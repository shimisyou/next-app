import { Box, Card as MuiCard, Typography } from '@mui/material';
import Image from 'next/image';
import { Card as CardType } from '../../types';

// デフォルトスタイル
const defaultStyles = {
  backgroundColor: '#ffffff',
  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
  highlightColor: 'rgba(255, 255, 255, 0.3)',
  overlayBackgroundColor: 'rgba(0, 0, 0, 0.3)',
};

// レアリティスタイル
const getRarityStyles = (rarity: CardType['rarity']) => {
  switch (rarity) {
    case 'ultra-rare':
      return {
        backgroundColor: '#ffeb3b',
        boxShadow: '0 0 20px rgba(255, 223, 0, 0.8)',
        shineColor: 'rgba(255, 223, 0, 0.3)',
        highlightColor: 'rgba(255, 255, 255, 0.6)',
        overlayBackgroundColor: 'rgba(255, 223, 0, 0.8)', // ゴールド透過
      };
    case 'super-rare':
      return {
        backgroundColor: '#b0e0e6',
        boxShadow: '0 0 15px rgba(70, 130, 180, 0.5)',
        shineColor: 'rgba(70, 130, 180, 0.3)',
        highlightColor: 'rgba(255, 255, 255, 0.4)',
        overlayBackgroundColor: 'rgba(70, 130, 180, 0.8)', // ブルー透過
      };
    case 'rare':
      return {
        backgroundColor: '#dcdcdc',
        boxShadow: '0 0 10px rgba(192, 192, 192, 0.5)',
        shineColor: 'rgba(192, 192, 192, 0.3)',
        highlightColor: 'rgba(255, 255, 255, 0.3)',
        overlayBackgroundColor: 'rgba(192, 192, 192, 0.6)', // シルバー透過
      };
    default:
      return defaultStyles;
  }
};

// カードコンポーネント
type TCGCardProps = {
  card: CardType;
  onClick?: () => void;
};

export const TCGCard = ({ card, onClick }: TCGCardProps) => {
  const rarityStyles = getRarityStyles(card.rarity);

  return (
    <MuiCard
      onClick={onClick}
      sx={{
        width: { xs: '140px', md: '180px' },
        height: { xs: '220px', md: '280px' },
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: rarityStyles.backgroundColor,
        boxShadow: `4px 4px 8px rgba(0, 0, 0, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.8)`,
        position: 'relative',
        overflow: 'hidden',
        padding: '6px',
      }}
    >
      {/* 光の移動アニメーション */}
      {card.rarity !== 'common' && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '-50%',
            width: '150%', // 幅を小さく調整
            height: '100%',
            background: `linear-gradient(90deg, transparent, ${rarityStyles.highlightColor}, transparent)`,
            animation: 'moveLight 2.5s infinite',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* カードのメイン画像 */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          aspectRatio: '2 / 3',
          overflow: 'hidden',
          zIndex: 1,
          borderRadius: '8px',
        }}
      >
        <Image
          src={card.img}
          alt={card.name}
          style={{
            objectFit: 'cover',
          }}
          fill
        />

        {/* 名前（画像上部） */}

        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            top: '5px',
            left: '10%',
            right: '10%',
            width: '80%',
            fontSize: '0.5rem',
            backgroundColor: rarityStyles.overlayBackgroundColor,
            color: '#fff',
            pl: '4px',
            borderRadius: '4px',
            textAlign: 'left',
            zIndex: 3,
          }}
        >
          {card.name}
        </Typography>

        {/* レアリティ（画像下部） */}

        <Typography
          variant="caption"
          fontSize={'0.4rem'}
          sx={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            backgroundColor: rarityStyles.overlayBackgroundColor,
            color: '#fff',
            padding: '4px',
            fontWeight: 'medium',
            fontSize: '0.4rem',
            textAlign: 'center',
            zIndex: 3,
          }}
        >
          {card.rarity.toUpperCase()}
        </Typography>
      </Box>

      {/* アニメーションCSS */}
      <style>
        {`
          @keyframes moveLight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </MuiCard>
  );
};

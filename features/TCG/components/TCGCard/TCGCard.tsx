import { Box, Card as MuiCard, Typography } from '@mui/material';
import Image from 'next/image';
import { Card as CardType } from '../../types';

// デフォルトスタイル
const defaultStyles = {
  backgroundColor: '#ffffff',
  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
  nameBackgroundColor: '#f0f0f0',
  nameTextColor: '#333',
  rarityBackgroundColor: '#f0f0f0',
  rarityTextColor: '#333',
};

// スタイル定義の型を作成
type RarityStyles = {
  [key in CardType['rarity']]?: {
    backgroundColor: string;
    boxShadow: string;
    nameBackgroundColor: string;
    nameTextColor: string;
    rarityBackgroundColor: string;
    rarityTextColor: string;
  };
};

// レアリティごとのスタイル
const styles: RarityStyles = {
  'ultra-rare': {
    backgroundColor: '#ffeb3b',
    boxShadow: '0 0 10px rgba(255, 223, 0, 0.8)',
    nameBackgroundColor: '#ffd700',
    nameTextColor: '#000',
    rarityBackgroundColor: '#ffd700',
    rarityTextColor: '#000',
  },
  'super-rare': {
    backgroundColor: '#b0e0e6',
    boxShadow: '0 0 10px rgba(70, 130, 180, 0.5)',
    nameBackgroundColor: '#4682b4',
    nameTextColor: '#fff',
    rarityBackgroundColor: '#4682b4',
    rarityTextColor: '#fff',
  },
  rare: {
    backgroundColor: '#dcdcdc',
    boxShadow: '0 0 10px rgba(192, 192, 192, 0.5)',
    nameBackgroundColor: '#c0c0c0',
    nameTextColor: '#000',
    rarityBackgroundColor: '#c0c0c0',
    rarityTextColor: '#000',
  },
};

// レアリティスタイルを取得
const getRarityStyles = (rarity: CardType['rarity']) => {
  return { ...defaultStyles, ...(styles[rarity] || {}) };
};

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
        width: { xs: '140px', md: '200px' },
        height: { xs: '250px', md: '380px' },
        borderRadius: '12px',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: rarityStyles.backgroundColor,
        boxShadow: rarityStyles.boxShadow,
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      {/* カード名 */}
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: rarityStyles.nameBackgroundColor,
          color: rarityStyles.nameTextColor,
          padding: '2px 4px',
          fontWeight: 'bold',
          fontSize: '0.5rem',
          borderRadius: '8px 8px 0 0',
          // zIndex: 2,
        }}
      >
        <Typography variant="body2" noWrap>
          {card.name}
        </Typography>
      </Box>

      {/* カードのメイン画像 */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          aspectRatio: '2 / 3',
          overflow: 'hidden',
          // zIndex: 1,
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
      </Box>

      {/* レアリティ */}
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: rarityStyles.rarityBackgroundColor,
          color: rarityStyles.rarityTextColor,
          padding: '2px 4px',
          fontWeight: 'bold',
          fontSize: '0.5rem',
          borderRadius: '0 0 8px 8px',
          // zIndex: 2,
        }}
      >
        <Typography variant="body2">{card.rarity.toUpperCase()}</Typography>
      </Box>
    </MuiCard>
  );
};

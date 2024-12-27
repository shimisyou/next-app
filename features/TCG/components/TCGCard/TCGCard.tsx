import { Box, CardContent, Card as MuiCard, Typography } from '@mui/material';
import Image from 'next/image';
import { Card as CardType } from '../../types';

// レアリティごとのスタイルを動的に生成
const getRarityStyles = (rarity: CardType['rarity']) => {
  switch (rarity) {
    case 'ultra-rare':
      return {
        padding: '16px',
        borderColor: 'gold',
        backgroundColor: 'rgba(255,223,0,0.15)',
        boxShadow: '0 0 15px 5px rgba(255,223,0,0.8)',
        animation: 'glow 2s infinite alternate',
        rarityBackgroundColor: 'rgba(255,223,0,0.8)',
        rarityTextColor: 'black',
        keyframes: `
          @keyframes glow {
            0% { box-shadow: 0 0 15px 5px rgba(255,223,0,0.8); }
            100% { box-shadow: 0 0 25px 10px rgba(255,223,0,1); }
          }
        `,
      };
    case 'rare':
      return {
        padding: '16px',
        borderColor: 'goldenrod',
        backgroundColor: 'rgba(255,215,0,0.12)',
        boxShadow: '0 0 10px 3px rgba(255,215,0,0.6)',
        animation: 'softGlow 3s infinite alternate',
        rarityBackgroundColor: 'rgba(255,215,0,0.8)',
        rarityTextColor: 'black',
        keyframes: `
          @keyframes softGlow {
            0% { box-shadow: 0 0 10px 3px rgba(255,215,0,0.6); }
            100% { box-shadow: 0 0 15px 5px rgba(255,215,0,0.8); }
          }
        `,
      };
    case 'uncommon':
      return {
        padding: '16px',
        borderColor: 'steelblue',
        backgroundColor: 'rgba(200,200,255,0.1)',
        boxShadow: '0 0 8px 2px rgba(200,200,255,0.5)',
        animation: 'subtlePulse 4s infinite alternate',
        rarityBackgroundColor: 'rgba(200,200,255,0.8)',
        rarityTextColor: 'white',
        keyframes: `
          @keyframes subtlePulse {
            0% { box-shadow: 0 0 8px 2px rgba(200,200,255,0.5); }
            100% { box-shadow: 0 0 10px 4px rgba(200,200,255,0.7); }
          }
        `,
      };
    default:
      return {
        padding: '16px',
        borderColor: 'gray',
        backgroundColor: 'rgba(240,240,240)',
        boxShadow: 'none',
        rarityBackgroundColor: 'rgba(240,240,240,0.8)',
        rarityTextColor: 'black',
      };
  }
};

type TCGCardProps = {
  card: CardType;
  onClick: () => void;
};

export const TCGCard = ({ card, onClick }: TCGCardProps) => {
  const rarityStyles = getRarityStyles(card.rarity);

  return (
    <MuiCard
      onClick={onClick}
      sx={{
        width: '80%',
        maxWidth: '300px',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        padding: rarityStyles.padding,
        border: `4px solid ${rarityStyles.borderColor}`,
        backgroundColor: rarityStyles.backgroundColor,
        boxShadow: rarityStyles.boxShadow,
        animation: rarityStyles.animation,
      }}
    >
      <style>{rarityStyles.keyframes}</style>

      {/* カード名を上部に固定配置 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50px',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
          {card.name}
        </Typography>
      </Box>

      {/* カードのメイン画像 */}
      <CardContent sx={{ p: 0 }}>
        <Image
          src={card.img.url}
          alt={card.img.alt}
          layout="responsive"
          width={300}
          height={400}
          objectFit="cover"
          style={{ display: 'block', margin: 0 }}
        />
      </CardContent>

      {/* レアリティを下部に配置 */}
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: rarityStyles.rarityBackgroundColor,
          color: rarityStyles.rarityTextColor,
          padding: '4px 8px',
          borderRadius: '0 0 12px 12px',
          fontWeight: 'bold',
        }}
      >
        <Typography variant="body2">{card.rarity.toUpperCase()}</Typography>
      </Box>
    </MuiCard>
  );
};

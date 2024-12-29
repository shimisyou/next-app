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
        background:
          'linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)', // ゴールド系のグラデーション
        boxShadow: '0 0 20px 10px rgba(255,223,0,1)', // 常に金色のシャドウ
        animation: 'glow 2s infinite alternate',
        nameBackgroundColor:
          'linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)', // ゴールド系のグラデーション
        nameTextColor: 'black',
        rarityBackgroundColor:
          'linear-gradient(45deg, #ffd700 0%, #ffcc00 50%, #ffb700 100%)', // ゴールド系のグラデーション
        rarityTextColor: 'black',
        keyframes: `
          @keyframes glow {
            0% { box-shadow: 0 0 30px 15px rgba(255,223,0,0.8); }
            100% { box-shadow: 0 0 40px 20px rgba(255,223,0,1); }
          }
        `,
        reflection: `
          .reflection {
            display: inline-block;
            position: relative;
            overflow: hidden;
          }
          .reflection:after {
            content: "";
            height: 100%;
            width: 30px;
            position: absolute;
            top: -180px;
            left: 0;
            background-color: #fff;
            opacity: 0;
            transform: rotate(45deg);
            animation: reflection 2s ease-in-out infinite;
          }
          @keyframes reflection {
            0% { transform: scale(0) rotate(45deg); opacity: 0; }
            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
            81% { transform: scale(4) rotate(45deg); opacity: 1; }
            100% { transform: scale(50) rotate(45deg); opacity: 0; }
          }
        `,
      };
    case 'super-rare':
      return {
        padding: '16px',
        borderColor: 'steelblue',
        backgroundColor: '#b0e0e6', // 明るいブルー
        boxShadow: '0 0 8px 2px rgba(70,130,180,0.5)', // 柔らかいブルー
        animation: 'subtlePulse 4s infinite alternate',
        nameBackgroundColor: 'rgba(70,130,180,1)', // 濃いブルー
        nameTextColor: 'white',
        rarityBackgroundColor: 'rgba(70,130,180,1)', // 濃いブルー
        rarityTextColor: 'white',
        keyframes: `
          @keyframes subtlePulse {
            0% { box-shadow: 0 0 8px 2px rgba(70,130,180,0.5); }
            100% { box-shadow: 0 0 10px 4px rgba(70,130,180,0.7); }
          }
        `,
        reflection: `
          .reflection {
            display: inline-block;
            position: relative;
            overflow: hidden;
          }
          .reflection:after {
            content: "";
            height: 100%;
            width: 30px;
            position: absolute;
            top: -180px;
            left: 0;
            background-color: #fff;
            opacity: 0;
            transform: rotate(45deg);
            animation: reflection 2s ease-in-out infinite;
          }
          @keyframes reflection {
            0% { transform: scale(0) rotate(45deg); opacity: 0; }
            80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
            81% { transform: scale(4) rotate(45deg); opacity: 1; }
            100% { transform: scale(50) rotate(45deg); opacity: 0; }
          }
        `,
      };
    case 'rare':
      return {
        padding: '16px',
        borderColor: 'silver',
        backgroundColor: '#dcdcdc', // シルバー系の背景
        boxShadow: '0 0 15px 5px rgba(192,192,192,0.8)', // シルバーの輝き
        nameBackgroundColor: 'rgba(192,192,192,1)', // 濃いシルバー
        nameTextColor: 'black',
        rarityBackgroundColor: 'rgba(192,192,192,1)', // 濃いシルバー
        rarityTextColor: 'black',
      };
    default:
      return {
        padding: '16px',
        borderColor: 'gray',
        backgroundColor: 'white', // シンプルな白
        boxShadow: 'none',
        nameBackgroundColor: 'rgba(240,240,240,0.9)', // 明るいグレー
        nameTextColor: 'black',
        rarityBackgroundColor: 'rgba(240,240,240,1)', // 濃いグレー
        rarityTextColor: 'black',
      };
  }
};

type TCGCardProps = {
  card: CardType;
  onClick?: () => void;
};

export const TCGCard = ({ card, onClick }: TCGCardProps) => {
  const rarityStyles = getRarityStyles(card.rarity);

  return (
    <Box
      sx={{
        maxWidth: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MuiCard
        onClick={onClick}
        sx={{
          borderRadius: 4,
          padding: rarityStyles.padding,
          border: `4px solid ${rarityStyles.borderColor}`,
          background: rarityStyles.background,
          boxShadow: '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff', // ニューモフィズムの影
          transition: 'transform 0.2s', // ホバー時のアニメーションを追加
          '&:hover': {
            transform: 'scale(1.05)', // ホバー時に拡大
          },
        }}
        className={rarityStyles.reflection ? 'reflection' : ''}
      >
        <style>{rarityStyles.keyframes}</style>
        {rarityStyles.reflection && <style>{rarityStyles.reflection}</style>}

        {/* カードのメイン画像 */}
        <CardContent
          sx={{
            p: 0,
            '&.MuiCardContent-root': { paddingBottom: 0 },
          }}
        >
          <Box sx={{ maxWidth: '250px' }}>
            {/* カード名をレアリティ風に表示 */}
            <Box
              sx={{
                textAlign: 'left',
                backgroundColor: rarityStyles.nameBackgroundColor,
                color: rarityStyles.nameTextColor,
                padding: '8px 8px',
                borderRadius: '8px 8px 0 0',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              <Typography variant="body1">{card.name}</Typography>
            </Box>
            <Image
              src={card.img}
              alt={card.name}
              width={250}
              height={375}
              style={{
                display: 'block',
                margin: '0 auto',
                width: '100%',
              }}
            />

            {/* レアリティを下部に配置 */}
            <Box
              sx={{
                textAlign: 'center',
                backgroundColor: rarityStyles.rarityBackgroundColor,
                color: rarityStyles.rarityTextColor,
                padding: '4px 8px',
                borderRadius: '0 0 8px 8px',
                fontWeight: 'bold',
              }}
            >
              <Typography variant="body2">
                {card.rarity.toUpperCase()}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </MuiCard>
    </Box>
  );
};

import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import Style from '@mui/icons-material/Style';
import { Box } from '@mui/material';
import Link from 'next/link';
import NeumorphicIconButton from '../../elements/Button/NeumorphicIconButton/NeumorphicIconButton';

export const Header = () => {
  return (
    <Box
      sx={{
        position: 'fixed', // 上部に固定
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // 他のコンテンツの上に表示
        bgcolor: '#e0e0e0', // Boxと同じ背景色を設定
        borderRadius: '16px',
        boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff', // ニューモーフィズムスタイル
        width: '100%',
        maxWidth: '1200px',
        p: { xs: 2, md: 3 },
        mt: 2, // 上部に余白を追加
        mb: 3,
        display: 'flex',
        justifyContent: 'space-between', // 左右に配置
        alignItems: 'center',
        gap: 2, // アイコン間のスペース
        mx: 'auto', // 中央に配置
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Link href="/" legacyBehavior>
          <a>
            <NeumorphicIconButton>
              <HomeIcon sx={{ color: '#333', fontSize: { xs: 32, md: 40 } }} />
            </NeumorphicIconButton>
          </a>
        </Link>
        <Link href="/tcg" legacyBehavior>
          <a>
            <NeumorphicIconButton>
              <Style sx={{ color: '#333', fontSize: { xs: 32, md: 40 } }} />
            </NeumorphicIconButton>
          </a>
        </Link>
      </Box>
      <Link href="https://github.com/shimisyou/next-app" legacyBehavior>
        <a>
          <NeumorphicIconButton>
            <GitHubIcon sx={{ color: '#333', fontSize: { xs: 32, md: 40 } }} />
          </NeumorphicIconButton>
        </a>
      </Link>
    </Box>
  );
};

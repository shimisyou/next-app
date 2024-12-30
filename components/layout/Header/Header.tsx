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
        bgcolor: '#f5f5f5', // 柔らかな背景色
        borderRadius: '12px',
        boxShadow: '4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff', // 控えめな影
        width: '100%',
        maxWidth: '1200px',
        p: { xs: 2, md: 3 },
        mt: 2, // 上部に余白
        mb: 3,
        display: 'flex',
        justifyContent: 'space-between', // 左右に配置
        alignItems: 'center',
        gap: 2, // アイコン間のスペース
        mx: 'auto', // 中央に配置
      }}
    >
      {/* 左側のアイコン */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Link href="/" passHref>
          <NeumorphicIconButton>
            <HomeIcon sx={{ color: '#444', fontSize: { xs: 28, md: 36 } }} />
          </NeumorphicIconButton>
        </Link>
        <Link href="/tcg" passHref>
          <NeumorphicIconButton>
            <Style sx={{ color: '#444', fontSize: { xs: 28, md: 36 } }} />
          </NeumorphicIconButton>
        </Link>
      </Box>
      {/* 右側のGitHubアイコン */}
      <Link href="https://github.com/shimisyou/next-app" passHref>
        <NeumorphicIconButton>
          <GitHubIcon sx={{ color: '#444', fontSize: { xs: 28, md: 36 } }} />
        </NeumorphicIconButton>
      </Link>
    </Box>
  );
};

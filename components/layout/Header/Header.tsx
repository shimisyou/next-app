'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Style from '@mui/icons-material/Style';
import { Box } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import NeumorphicIconButton from '../../elements/Button/NeumorphicIconButton/NeumorphicIconButton';
import Sidebar from '../Sidebar/Sidebar';

export const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* ヘッダー */}
      <Box
        sx={{
          position: 'fixed', // 上部に固定
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000, // 他のコンテンツの上に表示
          bgcolor: '#f5f5f5', // 柔らかな背景色
          // borderRadius: '12px',
          boxShadow: '4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff', // 控えめな影
          width: '100%',
          maxWidth: '1200px',
          p: { xs: 2, md: 2 },
          display: 'flex',
          justifyContent: 'space-between', // 左右に配置
          alignItems: 'center',
          gap: 2, // アイコン間のスペース
          mx: 'auto', // 中央に配置
        }}
      >
        {/* 左側のアイコン */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* サイドバーのトグルボタン */}
          <NeumorphicIconButton onClick={toggleSidebar} icon={<MenuIcon />} />

          <Link href="/" passHref>
            <NeumorphicIconButton icon={<HomeIcon />} />
          </Link>
          <Link href="/tcg" passHref>
            <NeumorphicIconButton icon={<Style />} />
          </Link>
        </Box>
        {/* 右側のGitHubアイコン */}
        <Link href="https://github.com/shimisyou/next-app" passHref>
          <NeumorphicIconButton icon={<GitHubIcon />} />
        </Link>
      </Box>

      {/* サイドバー */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

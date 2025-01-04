import { Box, Container } from '@mui/material';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '../components/layout/Header/Header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '遊び場',
  description: 'お遊びページ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Box
          sx={{
            bgcolor: '#f5f5f5', // より柔らかな背景色
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 12, md: 14 }, // 余白を減らす
            px: { xs: 1, md: 2 }, // 横のパディングも控えめに
          }}
        >
          <Header />
          <Container
            maxWidth="lg"
            sx={{
              bgcolor: '#f5f5f5', // `Header`と合わせて統一
              borderRadius: '16px',
              boxShadow: '4px 4px 8px #e0e0e0, -4px -4px 8px #ffffff',
              padding: { xs: 1.5, md: 2.5 }, // コンテンツのパディングも少し減らす
              flex: 1,
              mt: 2, // マージントップを縮小
              overflow: 'hidden',
            }}
          >
            {children}
          </Container>
        </Box>
      </body>
    </html>
  );
}

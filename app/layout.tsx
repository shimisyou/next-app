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
        <Header />
        <Box
          sx={{
            bgcolor: '#e0e0e0',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, md: 16 }, // ヘッダーとの余白をさらに追加
            px: { xs: 2, md: 4 },
            boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
            overflow: 'hidden', // スクロールバーを隠す
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              bgcolor: '#ffffff', // 背景色を調整
              borderRadius: '16px',
              boxShadow: '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff',
              p: { xs: 2, md: 3 },
              flex: 1,
              mt: 3, // コンテンツの上部に余白を追加
              position: 'relative', // 固定するために追加
              overflow: 'hidden', // スクロールバーを隠す
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflowY: 'auto', // 縦スクロールを有効にする
                p: { xs: 2, md: 3 },
              }}
            >
              {children}
            </Box>
          </Container>
        </Box>
      </body>
    </html>
  );
}

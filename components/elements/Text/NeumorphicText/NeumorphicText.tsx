import { Typography, TypographyProps } from '@mui/material';

// 独自のプロパティを定義
interface NeumorphicTextCustomProps {
  isInset?: boolean; // true: インセット影, false: 通常影
  bgcolor?: string; // 背景色のカスタマイズ
  boxShadow?: string; // カスタムボックスシャドウ
}

// 型を合成
type NeumorphicTextProps = TypographyProps & NeumorphicTextCustomProps;

export const NeumorphicText = ({
  isInset = true, // デフォルトはインセット
  bgcolor = '#f5f5f5',
  boxShadow,
  sx = {},
  children,
  ...props
}: NeumorphicTextProps) => {
  return (
    <Typography
      {...props}
      sx={{
        display: 'inline-block',
        fontWeight: 600,
        p: 1.5,
        px: 4,
        bgcolor,
        borderRadius: '16px',
        textShadow: '0 0 3px rgba(0, 0, 0, 0.1)',
        boxShadow: boxShadow
          ? boxShadow
          : isInset
          ? 'inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff' // インセット影
          : '3px 3px 6px #cccccc, -3px -3px 6px #ffffff', // 通常影
        color: '#333',
        ...sx, // カスタムスタイルをマージ
      }}
    >
      {children}
    </Typography>
  );
};

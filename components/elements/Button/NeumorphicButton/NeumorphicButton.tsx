import { Button, ButtonProps, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface NeumorphicButtonProps extends ButtonProps {
  /**
   * ボタン内部に表示する子要素。
   * テキスト、アイコン、または他のReact要素が渡せます。
   */
  children?: ReactNode;
}

/**
 * Neumorphicスタイルのボタンコンポーネント。
 *
 * このボタンは、立体的な影効果とカスタマイズ可能なスタイルを提供します。
 *
 * @param {NeumorphicButtonProps} props - ボタンのプロパティ。
 * @returns {React.ReactNode} Neumorphicスタイルのボタンコンポーネント。
 */
const NeumorphicButton = ({
  children,
  sx = {},
  ...props
}: NeumorphicButtonProps): React.ReactNode => {
  return (
    <Button
      sx={{
        bgcolor: '#f5f5f5', // 背景色
        borderRadius: '16px', // 丸みを帯びた角
        boxShadow: '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff', // Neumorphic効果
        color: '#333', // テキストの色
        padding: '10px 20px', // 内側の余白
        '&:hover': {
          bgcolor: '#eaeaea', // ホバー時の背景色
        },
        ...sx, // 外部から渡されたスタイルをマージ
      }}
      {...props}
    >
      <Typography
        sx={{
          fontWeight: 'bold', // 太字
          textShadow: '0 0 5px rgba(0, 0, 0, 0.2)', // テキストの影
        }}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default NeumorphicButton;

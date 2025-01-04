import { Button, ButtonProps, Typography } from '@mui/material';
import React from 'react';

interface NeumorphicButtonProps extends Omit<ButtonProps, 'variant'> {
  /**
   * ボタンに表示するテキスト（必須）。
   */
  text: string;
  /**
   * カラータイプを指定 ('normal', 'danger', 'primary')。
   */
  colorVariant?: 'normal' | 'danger' | 'primary';
  /**
   * サイズを指定 ('small', 'medium', 'large')。
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * カラーごとのスタイル設定。
 */
const colorStyles = {
  normal: {
    backgroundColor: '#f5f5f5',
    textColor: '#333',
    shadow: '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff',
  },
  danger: {
    backgroundColor: '#ffe5e5',
    textColor: '#d32f2f',
    shadow: '6px 6px 12px #d1b1b1, -6px -6px 12px #ffffff',
  },
  primary: {
    backgroundColor: '#e3f2fd',
    textColor: '#1976d2',
    shadow: '6px 6px 12px #b1c1d1, -6px -6px 12px #ffffff',
  },
};

/**
 * サイズごとのスタイル設定。
 */
const sizeStyles = {
  small: {
    padding: '6px 12px',
    fontSize: 10,
  },
  medium: {
    padding: '10px 20px',
    fontSize: 14,
  },
  large: {
    padding: '14px 28px',
    fontSize: 18,
  },
};

/**
 * Neumorphicスタイルのボタンコンポーネント。
 */
const NeumorphicButton = ({
  text,
  colorVariant = 'normal',
  size = 'medium',
  sx = {},
  ...props
}: NeumorphicButtonProps): React.ReactNode => {
  const colorStyle = colorStyles[colorVariant];
  const sizeStyle = sizeStyles[size];

  return (
    <Button
      sx={{
        bgcolor: colorStyle.backgroundColor,
        borderRadius: '16px',
        boxShadow: colorStyle.shadow,
        color: colorStyle.textColor,
        padding: sizeStyle.padding,
        '&:hover': {
          bgcolor: colorStyle.backgroundColor,
          opacity: 0.9, // ホバー時の透明度を調整
        },
        ...sx,
      }}
      {...props}
    >
      <Typography
        variant="body2"
        fontSize={sizeStyle.fontSize}
        sx={{
          fontWeight: 600,
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default NeumorphicButton;

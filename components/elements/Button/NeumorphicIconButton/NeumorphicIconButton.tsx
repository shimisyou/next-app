import { IconButton, IconButtonProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { ReactElement } from 'react';

interface NeumorphicIconButtonProps extends IconButtonProps {
  isInset?: boolean;
  hideBoxShadow?: boolean;
  icon: ReactElement;
  colorVariant?: 'normal' | 'danger' | 'primary';
  size?: 'small' | 'medium' | 'large';
  customBoxShadow?: string;
  sx?: SxProps<Theme>;
}

const colorStyles = {
  normal: { backgroundColor: '#f5f5f5', hoverBackgroundColor: '#eaeaea' },
  danger: { backgroundColor: '#ffe5e5', hoverBackgroundColor: '#f8d7da' },
  primary: { backgroundColor: '#e3f2fd', hoverBackgroundColor: '#bbdefb' },
};

const sizeStyles = {
  small: { width: 40, height: 40, fontSize: 18 },
  medium: { width: 48, height: 48, fontSize: 24 },
  large: { width: 64, height: 64, fontSize: 32 },
};

const NeumorphicIconButton = ({
  isInset = false,
  hideBoxShadow = false,
  customBoxShadow,
  icon,
  colorVariant = 'normal',
  size = 'medium',
  sx = {},
  ...props
}: NeumorphicIconButtonProps) => {
  const boxShadow = hideBoxShadow
    ? 'none'
    : customBoxShadow ||
      (isInset
        ? 'inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff'
        : '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff');

  const colorStyle = colorStyles[colorVariant];
  const sizeStyle = sizeStyles[size];

  return (
    <IconButton
      sx={{
        bgcolor: colorStyle.backgroundColor,
        borderRadius: '50%',
        boxShadow,
        '&:hover': { bgcolor: colorStyle.hoverBackgroundColor },
        width: sizeStyle.width,
        height: sizeStyle.height,
        fontSize: sizeStyle.fontSize, // 子要素に適用するフォントサイズ
        ...sx,
      }}
      {...props}
    >
      {icon}
    </IconButton>
  );
};

export default NeumorphicIconButton;

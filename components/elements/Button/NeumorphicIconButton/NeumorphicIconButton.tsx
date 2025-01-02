import { IconButton, IconButtonProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { ReactNode, useMemo } from 'react';

interface NeumorphicIconButtonProps extends IconButtonProps {
  /**
   * インセット影を使用するかどうかを指定します。
   */
  isInset?: boolean;
  /**
   * ボタン内部にレンダリングする子要素。
   */
  children?: ReactNode;
  /**
   * IconButtonに追加で充てるスタイル。
   */
  sx?: SxProps<Theme>;
}

const NeumorphicIconButton = ({
  isInset = false,
  sx = {},
  children,
  ...props
}: NeumorphicIconButtonProps) => {
  const boxShadow = useMemo(
    () =>
      isInset
        ? 'inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff'
        : '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff',
    [isInset]
  );

  return (
    <IconButton
      sx={{
        bgcolor: '#f5f5f5',
        borderRadius: '50%',
        boxShadow,
        '&:hover': { bgcolor: '#eaeaea' },
        width: { xs: 48, md: 64 },
        height: { xs: 48, md: 64 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default NeumorphicIconButton;

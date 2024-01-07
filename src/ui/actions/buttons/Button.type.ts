import { PropsWithChildren, RefObject } from 'react';

export type ButtonType = {
  component?: 'button';
  buttonRef?: RefObject<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type LinkType = PropsWithChildren<
  {
    component: 'link';
    buttonRef?: RefObject<HTMLAnchorElement>;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

export type CustomButtonPropsType = {
  component: 'custom';
  children: (classname: string) => JSX.Element;
} & Pick<ButtonType, 'disabled'>;

export type ButtonTypes = ButtonType | LinkType | CustomButtonPropsType;

export enum ButtonVariation {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  LINK = 'LINK',
  FLAT = 'FLAT',
}
export type GlobalButtonProps = {
  size?: 'SMALL' | 'BIG' | 'DEFAULT';
  // startIcon?: IconName
  // endIcon?: IconName
  // iconOnly?: boolean | 'DARK_ICON'
  // smallIcon?: boolean
  // iconsClassName?: string
  // light?: boolean
  variation?: ButtonVariation;
  // colored?: 'NONE' | 'RED' | 'GREEN' | 'BLUE' | 'YELLOW'
  // className?: string
  // textSpanClassname?: string
  // animationDirection?: 'LEFT' | 'RIGHT' | 'TOP' | 'BOTTOM'
  // blockAnimation?: boolean
};

export type ButtonProps = GlobalButtonProps & ButtonTypes;

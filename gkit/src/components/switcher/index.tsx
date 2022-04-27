import './style.less';
import {
  ToggleGroupSingleProps,
  ToggleGroupMultipleProps,
  Root as ToggleRoot,
  Item as ToggleItem,
} from '@radix-ui/react-toggle-group';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CircleIcon } from '../icons/circle';

type TogglePropsKeys = 'type' | 'defaultValue' | 'onValueChange';

type ToggleProps = Pick<ToggleGroupSingleProps, TogglePropsKeys> | Pick<ToggleGroupMultipleProps, TogglePropsKeys>;

type SwitcherContainerProps = PropsWithChildren<{ className?: string } & ToggleProps>;

export function SwitcherContainer({ children, className, ...toggleProps }: SwitcherContainerProps) {
  return (
    <ToggleRoot className={classNames('gkit-switcher-container', className)} {...toggleProps}>
      {children}
    </ToggleRoot>
  );
}

type Sizes = 'medium' | 'large';

export type SwitcherItemProps = PropsWithChildren<{
  value?: string;
  size?: Sizes;
  hover?: boolean;
  active?: boolean;
  className?: string;
}>;

export function SwitcherItem({ children, value, size = 'medium', hover, active, className }: SwitcherItemProps) {
  return (
    <ToggleItem className={classNames('switcher-item', className, size, { hover, active })} value={value}>
      {children && <span className="switcher-span">{children}</span>}
    </ToggleItem>
  );
}

export function SwitcherCircle() {
  return <CircleIcon />;
}
import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonLinkVariant = 'default' | 'outline' | 'ghost';
type ButtonLinkSize = 'sm' | 'default' | 'lg' | 'icon';

interface ButtonLinkProps extends React.ComponentProps<'a'> {
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
}

const base =
"inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-150 outline-none active:scale-[0.96] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4";

const variants: Record<ButtonLinkVariant, string> = {
  default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
  outline: 'border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground'
};

const sizes: Record<ButtonLinkSize, string> = {
  sm: 'h-7 px-3',
  default: 'h-8 px-4',
  lg: 'h-9 px-5',
  icon: 'h-8 w-8 p-0'
};

export function ButtonLink({
  variant = 'default',
  size = 'default',
  className,
  ...props
}: ButtonLinkProps) {
  return <a className={twMerge(base, variants[variant], sizes[size], className)} {...props} />;
}

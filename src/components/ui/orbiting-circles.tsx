import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            className="stroke-border"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeWidth="1.25"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <div
            {...props}
            className={twMerge(
              'orbiting-circle absolute flex items-center justify-center rounded-full',
              className,
            )}
            style={{
              ...props.style,
              '--orbit-angle': angle,
              '--orbit-duration': calculatedDuration,
              '--orbit-radius': radius,
              animationDirection: reverse ? 'reverse' : 'normal',
              height: iconSize,
              left: '50%',
              marginLeft: iconSize / -2,
              marginTop: iconSize / -2,
              top: '50%',
              width: iconSize,
            } as React.CSSProperties}>
            {child}
          </div>
        );
      })}
    </>
  );
}

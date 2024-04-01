import type { ElementType, ComponentPropsWithoutRef } from 'react';

import type { text } from './text.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

export const colors = ['default', 'sub', 'info', 'disabled', 'white'] as const;
export const sizes = ['caption4', 'caption3', 'caption2', 'caption1', 'body', 'headline'] as const;
export const weights = ['regular', 'medium', 'semiBold'] as const;

export type Color = (typeof colors)[number];
export type Size = (typeof sizes)[number];
export type Weight = (typeof weights)[number];

export type TextVariants = RecipeVariants<typeof text>;

export type OverridableComponentPropsWithoutRef<T extends ElementType, P = unknown> = P &
  ComponentPropsWithoutRef<T> & { as?: T };
export type TextElement = Extract<ElementType, 'p' | 'span'>;

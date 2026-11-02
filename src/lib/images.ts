import type { ImageMetadata } from 'astro';

// Eager glob so a missing AI asset never breaks the build: components fall back to a gradient.
const generated = import.meta.glob<{ default: ImageMetadata }>('/src/assets/generated/*.jpg', { eager: true });
const photos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.jpg', { eager: true });

export const img = (name: string): ImageMetadata | undefined => generated[`/src/assets/generated/${name}.jpg`]?.default;
export const photo = (n: number): ImageMetadata | undefined => photos[`/src/assets/photos/photo-${n}.jpg`]?.default;
export const glyph = (i: number) => img(`glyphs-${i}`);
export const dataTile = (i: number) => img(`data-${i}`);

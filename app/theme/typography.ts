export const typography = {
  heading1: { fontSize: 60, fontWeight: 700 as const, lineHeight: 90 },
  heading2: { fontSize: 48, fontWeight: 700 as const, lineHeight: 72 },
  heading3: { fontSize: 36, fontWeight: 700 as const, lineHeight: 54 },
  heading4: { fontSize: 24, fontWeight: 600 as const, lineHeight: 36 },
  heading5: { fontSize: 20, fontWeight: 600 as const, lineHeight: 30 },
  heading6: { fontSize: 20, fontWeight: 500 as const, lineHeight: 30 },
  subtitle1: { fontSize: 30, fontWeight: 500 as const, lineHeight: 45 },
  subtitle2: { fontSize: 24, fontWeight: 500 as const, lineHeight: 36 },
  subtitle3: { fontSize: 18, fontWeight: 400 as const, lineHeight: 20 },
  body1: { fontSize: 24, fontWeight: 400 as const, lineHeight: 36 },
  body2: { fontSize: 16, fontWeight: 400 as const, lineHeight: 24 },
  body3: { fontSize: 14, fontWeight: 400 as const, lineHeight: 21 },
  body4: { fontSize: 12, fontWeight: 400 as const, lineHeight: 24 },
  body5: { fontSize: 12, fontWeight: 400 as const, lineHeight: 24 },
  button: { fontSize: 16, fontWeight: 500 as const, lineHeight: 24 },
};

export type Typography = typeof typography;
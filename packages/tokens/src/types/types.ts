export type ColorsType = {
  "primary-100": string;
  "primary-200": string;
  "primary-300": string;
  "primary-400": string;
  "primary-500": string;
};

export type SpacingsType = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export type ThemeType = {
  Colors: ColorsType;
  Spacings: SpacingsType;
};

export type ThemesType = {
  [key: string]: ThemeType;
};

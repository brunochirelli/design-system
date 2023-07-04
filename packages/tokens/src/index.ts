import { ThemeType, ThemesType } from "types/types";
import { DarkTheme } from "./themes/darkTheme";
import { LightTheme } from "./themes/lightTheme";

const DefineThemes = (
  customThemes?: Record<string, ThemeType>
): ThemesType => ({
  light: LightTheme,
  dark: DarkTheme,
  ...customThemes,
});

const buildTheme = (
  theme: keyof ThemesType = "light",
  override?: Partial<ThemeType>
): ThemeType => {
  const currentTheme = DefineThemes()[theme];
  return { ...currentTheme, ...override };
};

type CssVariablesType = {
  [key: string]: string;
};

const flattenAndMergeObject = (
  obj: ThemeType,
  prefix = ""
): CssVariablesType => {
  const flattenedObj: CssVariablesType = {};
  const lowerCasePrefix = prefix.toLowerCase();

  for (const key in obj) {
    if (
      typeof obj[key as keyof ThemeType] === "object" &&
      obj[key as keyof ThemeType] !== null
    ) {
      for (const subKey in obj[key as keyof ThemeType]) {
        flattenedObj[
          `${
            prefix.length > 0 ? "--" + lowerCasePrefix + "" : "-"
          }-${key.toLocaleLowerCase()}-${subKey}`
        ] =
          obj[key as keyof ThemeType][
            subKey as keyof ThemeType[keyof ThemeType]
          ];
      }
    } else {
      // @ts-expect-error - I don't know how to fix this
      flattenedObj[key] = obj[key as string];
    }
  }

  return flattenedObj;
};

const transformThemeToCssTokens = (prefix: string) => {
  const currentTheme = buildTheme();
  const flattenTheme = flattenAndMergeObject(currentTheme, prefix);

  for (const key in flattenTheme) {
    if (Object.prototype.hasOwnProperty.call(flattenTheme, key)) {
      document.documentElement.style.setProperty(`${key}`, flattenTheme[key]);
    }
  }
};

export const setTokens = (prefix: string) => {
  transformThemeToCssTokens(prefix);
};

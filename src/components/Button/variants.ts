import { variant, VariantArgs } from "styled-system";
import theme from "../../theme";

const { colors, tintedColors, radii, fontSizes, fonts } = theme;

export const size = variant({
  prop: "size",
  variants: {
    small: {
      fontSize: fontSizes[1],
      px: 4,
      py: 2,
    },
    medium: {
      fontSize: fontSizes[2],
      px: 6,
      py: 3,
    },
    large: {
      fontSize: fontSizes[3],
      px: 7,
      py: 4,
    },
  },
} as VariantArgs);

const common = {
  cursor: "pointer",
  borderRadius: radii[1],
  fontFamily: `${fonts.primary}, ${fonts.secondary}`,
  border: 0,
  textTransform: "uppercase",
  outline: "none",
  transition:
    "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;",
};

export const type = variant({
  variants: {
    primary: {
      bg: colors.blue,
      color: colors.white,
      ...common,
      "&:hover": {
        bg: tintedColors.blue,
      },
    },
    secondary: {
      bg: colors.orange,
      color: colors.white,
      ...common,
      "&:hover": {
        bg: tintedColors.orange,
      },
    },
    success: {
      bg: colors.green,
      color: colors.white,
      ...common,
      "&:hover": {
        bg: tintedColors.green,
      },
    },
    error: {
      bg: colors.red,
      color: colors.white,
      ...common,
      "&:hover": {
        bg: tintedColors.red,
      },
    },
  },
});

export default { type, size };

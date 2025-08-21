import { Colors } from "./colors";
import { Typography } from "./typography";


export type ThemeProps ={
    colors: Colors;
    typography: Typography;
    isDark: boolean;
    toggleTheme: () => void;
}

import colors from "material-colors";

const theme = {
    accentColor: colors.yellow[500],
    mainColor: colors.green[400],
    borderLight: colors.grey[100]
};
export default function useTheme() {
    return theme;
}

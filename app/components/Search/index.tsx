import { useTheme } from '@/app/theme/ThemeContext';
import { TextInput, View } from 'react-native';
import { searchStyles } from './search.styles';
import { Search as SearchIcon } from 'lucide-react-native';

export const Search = () => {
  const { colors } = useTheme();
  const styles = searchStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar..."
          placeholderTextColor={colors.textColor}
          style={[styles.input, { color: colors.textColor }]}
        />
        <SearchIcon color={colors.textColor} size={20} />
      </View>
    </View>
  );
};

import { Colors } from '@/app/theme/colors';
import { typography } from '@/app/theme/typography';
import { Platform, StyleSheet } from 'react-native';

export const searchStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      gap: 5,
    },
    label: {
      ...typography.body2,
      color: colors.textColor,
    },
    inputContainer: {
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: 8,
      paddingVertical: Platform.OS === 'ios' ? 12 : 3,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 40,
      gap: 8,
    },
    input: {
      ...typography.body2,
      flex: 1,
      paddingRight: 10,
      minHeight: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

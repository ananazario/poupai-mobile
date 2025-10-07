// import { Colors } from "@/app/theme/colors";
// import { typography } from "@/app/theme/typography";
// import { StyleSheet } from "react-native";


// export const homeStyles = (colors : Colors) => StyleSheet.create({
//     container: {
//         paddingVertical: 60,
//         paddingHorizontal: 30,
//         gap: 15,
//         backgroundColor: colors.background,
//         flex: 1
//     },
//     account:{
//          backgroundColor: colors.blue500,
//         padding: 20,
//         justifyContent: 'space-between',
//         borderRadius: 8,
//         flexDirection: 'row',
//     },
//     name:{
//         color: colors.white,
//         ...typography.heading4,
//     },
//     text: {
//         color: colors.white,
//         ...typography.subtitle3
//     },
//     amount: {
//         color: colors.white,
//         ...typography.heading3
//     },
//     config:{
//         padding: 15
//     },
//     containerActions:{
//         justifyContent: 'space-around',
//         flexDirection: 'row',
//     },
//     containerCard:{
//         justifyContent: 'center',
//         flexDirection: 'row',
//         gap: 10,
//         flexWrap: 'wrap',
//         alignItems: 'center'
//     },
// })

import { Colors } from "@/app/theme/colors";
import { typography } from "@/app/theme/typography";
import { StyleSheet } from "react-native";

export const homeStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      paddingVertical: 60,
      paddingHorizontal: 30,
      gap: 15,
      backgroundColor: colors.background,
      flex: 1,
    },
    account: {
      backgroundColor: colors.blue500,
      padding: 20,
      justifyContent: "space-between",
      borderRadius: 8,
      flexDirection: "row",
    },
    name: {
      color: colors.white,
      ...typography.heading4,
    },
    text: {
      color: colors.white,
      ...typography.subtitle3,
    },
    amount: {
      color: colors.white,
      ...typography.heading3,
    },
    config: {
      padding: 15,
    },
    containerActions: {
      justifyContent: "space-around",
      flexDirection: "row",
    },
    containerCard: {
      justifyContent: "center",
      flexDirection: "row",
      gap: 10,
      flexWrap: "wrap",
      alignItems: "center",
    },

    // --- ESTILOS ADICIONADOS ABAIXO ---
    
    // Para centralizar o 'ActivityIndicator' e a mensagem de 'lista vazia'
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    // Estilo para a mensagem de 'Nenhuma transação'
    emptyText: {
      ...typography.body1,
      color: colors.textColor,
      opacity: 0.6,
    },
    // Estilo para o container da lista, para garantir espaçamento
    listContainer: {
        flex: 1,
    },
    // Estilo para o conteúdo dentro da FlatList
    listContent: {
        paddingTop: 10, // Um espaçamento no topo da lista
        gap: 10, // Espaçamento entre os cards
    }
  });
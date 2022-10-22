import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/theme'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
      },
    products_container:{
        backgroundColor: COLORS.white,
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 10,
    }
})
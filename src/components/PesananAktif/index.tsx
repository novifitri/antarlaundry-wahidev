import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IconPesan} from '../../assets';
import {WARNA_UTAMA, WARNA_WARNING} from '../../utils/constants';

const PesananAktif = ({title, status}: {title: string; status: string}) => {
  const styles = React.useMemo(() => createStyles(status!), [status]);

  return (
    <TouchableOpacity style={styles.container}>
      <IconPesan />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const createStyles = (status: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 17,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      marginBottom: windowHeight * 0.02,
      alignItems: 'center',
    },
    text: {
      marginLeft: windowWidth * 0.02,
    },
    title: {
      fontSize: 18,
      fontFamily: 'TitilliumWeb-Bold',
    },
    status: {
      fontSize: 14,
      fontFamily: 'TitilliumWeb-Light',
      color: status === 'Masih dicuci' ? WARNA_WARNING : WARNA_UTAMA,
    },
  });

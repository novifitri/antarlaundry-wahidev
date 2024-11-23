import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {
  IconAddSaldo,
  IconGetPoint,
  IconKiloan,
  IconKarpet,
  IconVIP,
  IconSatuan,
  IconSetrika,
  IconEkspress,
} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constants';

const Icon = ({title}: {title: string}) => {
  switch (title) {
    case 'Add Saldo':
      return <IconAddSaldo />;
    case 'Get Point':
      return <IconGetPoint />;
    case 'Kiloan':
      return <IconKiloan />;
    case 'Satuan':
      return <IconSatuan />;
    case 'VIP':
      return <IconVIP />;
    case 'Karpet':
      return <IconKarpet />;
    case 'Setrika Saja':
      return <IconSetrika />;
    case 'Ekspress':
      return <IconEkspress />;
    default:
      return <IconAddSaldo />;
  }
};
const ButtonIcon = ({title, type}: Partial<{title: string; type: string}>) => {
  const styles = React.useMemo(() => createStyles(type!), [type]);

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <Icon title={title!} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

// Define a TypeScript interface for your dynamic styles
interface Styles {
  container: StyleProp<ViewStyle>;
  button: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
}

const createStyles = (type: string): Styles =>
  StyleSheet.create({
    container: {
      marginBottom: type === 'layanan' ? 23 : 0,
      marginRight: type === 'layanan' ? 30 : 0,
    },
    button: {
      backgroundColor: WARNA_SEKUNDER,
      padding: type === 'layanan' ? 12 : 7,
      borderRadius: 10,
    },
    text: {
      fontSize: type === 'layanan' ? 14 : 10,
      fontFamily:
        type === 'laynan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Reguler',
      textAlign: 'center',
    },
  });

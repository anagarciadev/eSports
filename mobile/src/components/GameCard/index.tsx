import { TouchableOpacity, TouchableOpacityProps ,ImageBackground, ImageSourcePropType, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

//@ts-ignore
export function GameCard({data, ...rest}) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>

        <ImageBackground

            style={styles.cover}
            source={data.cover}
        />

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >

          <Text style={styles.name}>
            {data.name}
          </Text>


        </LinearGradient>

    </TouchableOpacity>
  );
}
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { Check, CheckCircle } from 'phosphor-react-native'
import * as Clipboard from 'expo-clipboard';


import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';
import { useState } from 'react';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void ;
}

export function DuoMatch({ discord, onClose, ...rest }: Props ) {
    const [isCopying, setIsCopying] = useState (false);

    async function handleCopyDiscordToClipboard () {
        setIsCopying(true);
        await Clipboard.setStringAsync(discord);

        Alert.alert ('Copied!', 'Paste this Gamer Id in Discord and Start Playing!')
        setIsCopying (false);
    }

  return (
    <Modal
        animationType='fade'
        transparent
        statusBarTranslucent
        {...rest}
    > 
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={onClose}
                    style={styles.closeIcon}
                >
                    <MaterialIcons
                        name='close'
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>

                <CheckCircle
                    size={64}
                    color={THEME.COLORS.SUCCESS}
                    weight='bold'
                />

                <Heading 
                    title={'Let’s play!'} 
                    subtitle={'Now it’s just start playing!'} 
                    style={{alignItems:'center', marginTop: 24}}
                />

                <Text style={styles.label}>
                    Add your Discord
                </Text>

                <TouchableOpacity
                    style={styles.discordButton}
                    onPress={handleCopyDiscordToClipboard}
                    disabled={isCopying}
                >
                    <Text style={styles.discord}>
                        {isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> :  discord}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>

  );
}
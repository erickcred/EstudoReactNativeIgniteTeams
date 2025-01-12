import { TouchableOpacityProps } from 'react-native';
import { Container, ContentCard, Title, UsersIcon } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';
import { ButtonIconStyleProps } from '@components/ButtonIcon/styles';
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  title: string;
  showButtonIcon?: boolean;
  buttonIcon?: keyof typeof MaterialIcons.glyphMap;
  typeButtonIcon?: ButtonIconStyleProps;
  onButtonEvent?: (data?: any) => void
}

export function GroupCard({
  title,
  showButtonIcon = false,
  buttonIcon = 'add',
  typeButtonIcon = 'PRIMARY',
  onButtonEvent,
  ...rest
}: Props) {
  return (
    <Container { ...rest }>
      <ContentCard>
        <UsersIcon></UsersIcon>
        <Title>{ title }</Title>
      </ContentCard>

      { 
        showButtonIcon &&
        <ButtonIcon { ...rest }
          type={ typeButtonIcon }
          icon={ buttonIcon }
          onPress={ () => onButtonEvent ? onButtonEvent() : undefined }
        ></ButtonIcon>
      }
    </Container>
  )
}
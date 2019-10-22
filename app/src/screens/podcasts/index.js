import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  BackButton,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Cover,
  Episode,
  Title,
  Author,
} from './styles'

const Podcasts = ({navigation}) => {
  const podcast = navigation.getParam('podcast')

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <EpisodeList
        ListHeaderComponent={() => (
          <PodcastDetails>
            <Background source={{uri: podcast.cover}} />
            <BackButton onPress={() => handleBack()}>
              <Icon name="arrow-back" size={24} color="#fff" />
            </BackButton>
            <Cover source={{uri: podcast.cover}} />
            <PodcastTitle>{podcast.title}</PodcastTitle>
            <PlayButton>
              <PlayButtonText>REPRODUZIR</PlayButtonText>
            </PlayButton>
          </PodcastDetails>
        )}
        data={podcast.tracks}
        keyExtractor={episode => String(episode.id)}
        renderItem={({item: episode}) => (
          <Episode>
            <Title>{episode.title}</Title>
            <Author>{episode.title}</Author>
          </Episode>
        )}
      />
    </Container>
  )
}

export default Podcasts

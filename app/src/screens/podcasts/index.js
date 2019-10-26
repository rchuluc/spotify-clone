import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PlayerActions from '@store/ducks/player'
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

const Podcasts = ({navigation, setPodcastRequest, currentEpisode}) => {
  const podcast = navigation.getParam('podcast')

  const handleBack = () => {
    navigation.goBack()
  }

  const handlePlay = episodeId => {
    setPodcastRequest(podcast, episodeId)
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
              <PlayButtonText onPress={() => handlePlay()}>
                REPRODUZIR
              </PlayButtonText>
            </PlayButton>
          </PodcastDetails>
        )}
        data={podcast.tracks}
        keyExtractor={episode => String(episode.id)}
        renderItem={({item: episode}) => (
          <Episode onPress={() => handlePlay(episode.id)}>
            <Title active={currentEpisode && currentEpisode.id === episode.id}>
              {episode.title}
            </Title>
            <Author>{episode.title}</Author>
          </Episode>
        )}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  currentEpisode: state.player.podcast
    ? state.player.podcast.tracks.find(
        episode => episode.id === state.player.current,
      )
    : null,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Podcasts)

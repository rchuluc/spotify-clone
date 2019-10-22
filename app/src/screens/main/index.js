import React, {useEffect} from 'react'
import {
  Container,
  PodcastList,
  Podcast,
  Cover,
  Info,
  Title,
  Count,
  PageTitle,
} from './styles'
import '@config/statusBar'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PodcastActions from '@store/ducks/podcasts'

const Main = ({podcasts, loadRequest, navigation}) => {
  useEffect(() => {
    loadRequest()
  }, [])

  const handlePodcastPress = podcast => {
    navigation.navigate('Podcasts', {podcast})
  }

  return (
    <Container>
      <PodcastList
        ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
        data={podcasts}
        keyExtractor={podcasts => String(podcasts.id)}
        renderItem={({item: podcast}) => (
          <Podcast onPress={() => handlePodcastPress(podcast)}>
            <Cover source={{uri: podcast.cover}} />
            <Info>
              <Title>{podcast.title}</Title>
              <Count>{`${podcast.tracks.length} episódios`}</Count>
            </Info>
          </Podcast>
        )}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  podcasts: state.podcasts.data,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(PodcastActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)

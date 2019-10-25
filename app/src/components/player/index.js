import React from 'react'
import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
  ControlIcon,
} from './styles'

export default () => {
  return (
    <Container>
      <CoverBackground
        source={{uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover5.png'}}
      />
      <EpisodeInfo>
        <Title>Papercut</Title>
        <Author>Linkin Park</Author>
      </EpisodeInfo>
      <Controls>
        <ControlButton onPress={() => {}}>
          <ControlIcon name="skip-previous" />
        </ControlButton>
        <ControlButton onPress={() => {}}>
          <ControlIcon name="play-circle-filled" />
        </ControlButton>
        <ControlButton onPress={() => {}}>
          <ControlIcon name="skip-next" />
        </ControlButton>
      </Controls>
    </Container>
  )
}

import styled from 'styled-components'
import { LiveKitRoom } from 'livekit-react'
import 'livekit-react/dist/index.css'
import "react-aspect-ratio/aspect-ratio.css";

async function onConnected(room) {
    await room.localParticipant.setCameraEnabled(true)
    await room.localParticipant.setMicrophoneEnabled(true)
}

const LiveContainer = () => {
    const url = 'ws://localhost:7880'
    const token = 'your_token'

    return(
        <Container className={'roomContainer'}>
            <LiveKitRoom url={url} token={token} onConnected={room => onConnected(room)}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default LiveContainer;

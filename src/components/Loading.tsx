import { Player } from '@lottiefiles/react-lottie-player' // biblioteca de animação

export function Loading() {
    return(
        <Player 
        autoplay
        loop
        style={{color: 'red', width: '600px', height: '600px'}}
        src="https://assets1.lottiefiles.com/packages/lf20_g8ffpbcg.json">
        </Player>
    )
}
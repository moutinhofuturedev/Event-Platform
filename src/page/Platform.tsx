import { useParams } from "react-router-dom"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

import { Player } from '@lottiefiles/react-lottie-player' // biblioteca de animação LottieFiles

export function Platform() {
    const { slug } = useParams<{ slug: string}>() // o slug é uma string dentro de um objeto

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ? <Video lessonSlug={slug}/> : // se tiver algum parâmetro de slug, carrega o componente de vídeo, se não, carrega uma div com uma animação de loading
                    <div className="flex flex-1 items-center justify-center flex-col">
                        <Player
                            autoplay
                            loop
                            src="https://assets4.lottiefiles.com/packages/lf20_p8bfn5to.json"
                            style={{ height: '200px', width: '200px' }}>

                        </Player>
                        <span className=" text-xl text-gray-300">Opps...clique ao lado para carregar o vídeo</span>
                    </div>}
                <Sidebar />
            </main>
        </div>
    )
}
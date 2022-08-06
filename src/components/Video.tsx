import { DefaultUi, Player, Youtube } from "@vime/react" // biblioteca para player de vídeos
import '@vime/core/themes/default.css' // dando estilo aos controles do player
import { CaretRight, FileArrowDown, FileImage, Lightning, WhatsappLogo } from "phosphor-react" // biblioteca de icons em formato de componentes

import { Footer } from "./Footer"
import { Loading } from "./Loading"

import { gql, useQuery } from "@apollo/client"

const GET_LESSON_BY_SLUG_ID = gql`
  query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      bio
      avatarURL
      name
    }
  }
}
`

type GetLessonBySlugResponse = {
    lesson: {
        title: string
        videoId: string
        description: string
        teacher: {
            bio: string
            avatarURL: string
            name: string
        }
    }
}

type VideoProps = {
    lessonSlug: string
}

export function Video(props: VideoProps) {
    const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_ID, {
        variables: {
            slug: props.lessonSlug
        }
    })

    if(!data) {
        return(
            <div className="flex-1">
                <Loading /> 
            </div>
        )
    }

    return(
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            <div className="p-8 max-w-[1100px] mx-auto">
                <section className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            {data.lesson.description}
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <img className="w-16 h-16 rounded-[9999px] border-2 border-blue-500"
                            src={data.lesson.teacher.avatarURL} 
                            alt="Imagem de perfil do professor" 
                            title="Imagem de perfil do professor"/>
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                <p className="font-normal text-sm text-gray-300">{data.lesson.teacher.bio}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="#" className="flex items-center justify-center gap-2 p-4 bg-green-500 text-sm font-bold uppercase rounded hover:bg-green-700 transition-colors">
                            <WhatsappLogo size={25}/>
                            comunidade no whatsapp
                        </a>
                        <a href="#" className="flex items-center justify-center gap-2 p-4 bg-transparent text-blue-500 text-sm font-bold uppercase rounded border border-blue-500 hover:bg-blue-500 hover:text-black transition-colors">
                            <Lightning size={20}/>
                            acesse as provas
                        </a>
                    </div>
                </section>

                <section className="gap-8 mt-20 grid grid-cols-2">
                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full py-1 px-6 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>

                        <div className="py-4 leading-relaxed flex flex-col justify-center">
                            <strong className="font-bold text-2xl">
                                Material complementar
                            </strong>
                            <p className="font-normal text-sm text-gray-300 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>

                        <div className="flex justify-center items-center py-1 px-6">
                            <CaretRight size={40}/>
                        </div>
                    </a>

                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full py-1 px-6 flex items-center">
                            <FileImage size={40}/>
                        </div>

                        <div className="py-4 leading-relaxed flex flex-col justify-center">
                            <strong className="font-bold text-2xl">
                                Wallpapers exclusivos
                            </strong>
                            <p className="font-normal text-sm text-gray-300 mt-2"> 
                                Baixe wallpapers exclusivos do Ignite Lab e personalize sua máquina
                            </p>
                        </div>

                        <div className="flex justify-center items-center py-1 px-6">
                            <CaretRight size={40}/>
                        </div>
                    </a>
                </section>
                <Footer /> {/* Componente */}
            </div>
        </div>
    )
}


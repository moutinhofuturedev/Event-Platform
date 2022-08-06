import { CheckCircle, Lock } from 'phosphor-react'

import { isPast, format } from 'date-fns' // biblioteca de utilidades para datas em javascript
import ptBR from 'date-fns/locale/pt-BR'

import { Link, useParams } from 'react-router-dom'

type LessonProps = {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lesson(props: LessonProps) { // todo o componente será uma âncora
    const isLessonAvailable = isPast(props.availableAt) // na lib date-fns, o método 'isPast' compara a condicional do tempo da data
    const avaiableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { // formatando a data com a lib date-fns
        locale: ptBR
    })

    const { slug } = useParams<{ slug: string}>()
    const isActiveLesson = slug === props.slug

    return(
        <Link to={`/platform/lesson/${props.slug}`} className='group'> {/* criamos um caminho para acessar o parâmetro (slug) de cada vídeo dentro do componente platform*/}
            <span>{avaiableDateFormatted}</span>
            <div 
              className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${isActiveLesson ? 'bg-green-500' : ''}`}>
                <header className="flex justify-between items-center">
                    {isLessonAvailable ? (
                        <div className={`flex items-center gap-2 text-blue-500 ${isActiveLesson ? 'text-white' : ''}`}>
                            <CheckCircle size={20} />
                            <span className={`text-sm text-blue-500 font-medium ${isActiveLesson ? 'text-white' : ''}`}>Conteúdo Liberado</span>
                        </div>
                    ) : (
                        <div className='flex items-center gap-2 text-orange-500'>
                            <Lock size={20} />
                            <span className="text-sm text-orange-500 font-medium">Em breve</span>
                        </div>
                    )}
    
                    {props.type === 'live' ?
                        <span className='rounded border border-red-600 py-[2px] px-2 text-white text-xs font-bold'>AO VIVO</span>
                        :
                        <span className={`rounded border border-green-300 py-[2px] px-2 text-white text-xs font-bold ${isActiveLesson ? 'border-white' : ' '}`}>AULA PRÁTICA</span>
                    }
                </header>
                <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>{props.title}</strong> 
            </div>
        </Link>
    )

}


import RocketseatImg from '../assets/Logo-rockeat.svg'

export function Footer() { // O componente Footer está no final do componente da Vídeo
    return(
        <footer className="border-t border-gray-600 mt-16 flex items-center justify-between">
            <div className='flex items-center gap-6 justify-between mt-8'>
                <a href="https://www.rocketseat.com.br" target="_blank"><img src={RocketseatImg} alt="Logo da Rocketseat" title="Logo da Rocketseat"/></a>
                <p className='text-gray-300'>Rocketseat - Todos os direitos reservados</p>
            </div>
            <p className='text-gray-300 mt-8'>Políticas de privacidade</p>
        </footer>
    )
}
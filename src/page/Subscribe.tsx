import { FormEvent, useState } from "react"
import { Footer } from "../components/Footer"
import Icon from "../components/Icon"

import { gql, useMutation } from "@apollo/client"

import { useNavigate } from "react-router-dom" 
import toast from 'react-hot-toast'

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}
`

export function Subscribe() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const navigate = useNavigate()

    const [ createSubscriber, { loading } ] = useMutation(CREATE_SUBSCRIBE_MUTATION)

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()
        
        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        toast('Bem vindo a EBD', {
            duration: 6000,
            style: {
                background: '#00B37E',
                color: '#fff',
                border: '1px solid #29292E',
                minWidth: '250px',
                fontWeight: 'bold'
            }
        })
        
        navigate('/platform')
    }

    return(
        <div className="flex flex-col min-h-screen h-full">
            <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <aside className="w-full max-w-[1100px] bg-icon bg-cover bg-no-repeat flex items-center justify-between mt-20 m-auto">
                    <section className="max-w-[640px] leading-tight">
                        <Icon />
                        <h1 className="mt-8 text-[2.5rem]">
                            Construa uma <strong className="text-blue-500 ">aplicação completa</strong> do zero com <strong className="text-blue-500">React</strong>
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas
                            e com alta demanda para acessar as melhores oportunidades do mercado.
                        </p>
                    </section>

                    <section className="p-8 bg-gray-700 border border-gray-500 rounded">
                        <strong className="font-bold text-2xl block">Increva-se gratuitamente</strong>

                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full mt-5">
                            <input className="bg-gray-900 rounded px-5 h-14"
                                type="text"
                                placeholder="Digite seu nome completo"
                                name="name"
                                onChange={event => setName(event.target.value)}
                            />

                            <input className="bg-gray-900 rounded px-5 h-14"
                                type="email"
                                placeholder="Digite seu email"
                                name="email"
                                onChange={event => setEmail(event.target.value)}
                            />

                            <button className="bg-green-500 rounded px-5 h-14 font-bold text-sm mt-5 uppercase hover:bg-green-700 transition-colors disabled:opacity-50"
                                disabled={loading}
                                type="submit">
                                Garantir minha vaga
                            </button>
                        </form>
                    </section>
                </aside>
                <img src="/src/assets/group-background.png" alt="" />
            </div>
            <footer className="px-8 block mb-8">
                <Footer />
            </footer>
        </div>
    )
}
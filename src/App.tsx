import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { Router } from "./routes/Router"

import { Toaster } from 'react-hot-toast'

function App() {
    
  return(
    <div>
      <ApolloProvider client={client}> {/* este elemento da lib apollo esta por volta da rota para compartilhar informações da APIs que vem do GraphQl  */}
        <Router />
        <Toaster />
      </ApolloProvider>
    </div>
  )
}

export default App
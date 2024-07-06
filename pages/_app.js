import '../styles/globals.css'
import Layout from '../components/Layout'

import { Provider } from 'jotai'
import { stateAtom, derivedStateAtom } from '../store'
import { useHydrateAtoms } from 'jotai/utils'

const HydrateAtoms = ({ stateAtom, derivedStateAtom, initialState, children }) => {
  useHydrateAtoms(initialState ? [ stateAtom, derivedStateAtom, initialState ] : [])
  return children
}

export default function App({ Component, pageProps }) {

  const { initialState } = pageProps

  return (
    <Provider>
      <HydrateAtoms initialValues={ initialState && [[ stateAtom, derivedStateAtom, initialState ]] }>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrateAtoms>
    </Provider>
  )
}

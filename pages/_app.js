import { Provider } from 'react-redux'
import { useStore } from '../store'
import './styles.css';
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </Provider>
  )
}

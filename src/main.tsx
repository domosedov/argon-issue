import { RouterProvider } from '@argon-router/react'
import { allSettled } from 'effector'
import { Provider } from 'effector-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { appStarted } from './assets/model'
import './index.css'
import { router } from './routing'
import { scope } from './scope'

const root = createRoot(document.getElementById('root')!)

async function render() {
  await allSettled(appStarted, { scope })

  root.render(
    <StrictMode>
      <Provider value={scope}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </StrictMode>,
  )
}

render().catch(console.error)

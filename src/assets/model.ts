import { historyAdapter } from '@argon-router/core'
import { createEvent, sample } from 'effector'
import { createBrowserHistory } from 'history'
import { router } from '../routing'

export const appStarted = createEvent()

sample({
  clock: appStarted,
  fn: () => historyAdapter(createBrowserHistory()),
  target: router.setHistory,
})

import { createRoute, createRouter } from '@argon-router/core'
import { createEffect } from 'effector'

const sleepFx = createEffect<void, void, Error>(async () => {
  await new Promise((resolve) => setTimeout(resolve, 3_000))
})

export const routes = {
  feed: createRoute({ path: '/' }),
  profile: createRoute({ path: '/profile', beforeOpen: [sleepFx] }),
}

export const router = createRouter({
  routes: [routes.feed, routes.profile],
})

routes.profile.$isPending.watch((isPending) => {
  console.log('[profile route]: isPending', isPending)
})

routes.profile.$isOpened.watch((isOpened) => {
  console.log('[profile route]: isOpened', isOpened)
})

// @ts-expect-error
routes.profile.internal.openFx.watch((openFx) => {
  console.log('[profile route]: openFx', openFx)
})

// @ts-expect-error
routes.profile.internal.navigated.watch((navigated) => {
  console.log('[profile route]: navigated', navigated)
})

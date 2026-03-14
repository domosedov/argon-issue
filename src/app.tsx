import { createRoutesView, createRouteView, withLayout } from '@argon-router/react'
import * as stylex from '@stylexjs/stylex'
import type { ReactNode } from 'react'
import { Navbar } from './navbar'
import { routes } from './routing'

const styles = stylex.create({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    border: '1px solid black',
    borderRadius: 10,
    backgroundColor: 'lightblue',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    border: '1px solid black',
    borderRadius: 10,
    backgroundColor: 'white',
  },
})

const ProfileScreen = createRouteView({
  route: routes.profile,
  view: () => <div {...stylex.props(styles.content)}>PROFILE</div>,
})

const FeedScreen = createRouteView({
  route: routes.feed,
  view: () => <div {...stylex.props(styles.content)}>FEED</div>,
})

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div {...stylex.props(styles.layout)}>
      <Navbar />
      {children}
    </div>
  )
}

export const App = createRoutesView({
  routes: [...withLayout(Layout, [FeedScreen, ProfileScreen])],
  otherwise: () => <div>OOPS! 404</div>,
})

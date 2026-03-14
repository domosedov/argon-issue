import { Link } from '@argon-router/react'
import * as stylex from '@stylexjs/stylex'
import { routes } from './routing'

const styles = stylex.create({
  container: {
    display: 'flex',
    gap: 10,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
})

export const Navbar = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <Link to={routes.feed} {...stylex.props(styles.link)}>
        Feed
      </Link>
      <Link to={routes.profile} {...stylex.props(styles.link)}>
        Profile
      </Link>
    </div>
  )
}

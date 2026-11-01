import type { CSSProperties } from 'react'
import '../styles.css'

type Story = {
  category: string
  title: string[]
  author: string
  description: string
  href: string
}

const stories: Story[] = [
  {
    category: 'Category 1',
    title: ['Story', 'Title', 'One'],
    author: 'Author Name 1',
    description: 'Short description for story one. Replace this text with the story summary.',
    href: 'stories/last-scene.html',
  },
  {
    category: 'Category 2',
    title: ['Story', 'Title', 'Two'],
    author: 'Author Name 2',
    description: 'Short description for story two. Replace this text with the story summary.',
    href: 'stories/notes-from-a-small-country.html',
  },
  {
    category: 'Category 3',
    title: ['Story', 'Title', 'Three'],
    author: 'Author Name 3',
    description: 'Short description for story three. Replace this text with the story summary.',
    href: 'stories/the-art-of-looking-away.html',
  },
  {
    category: 'Category 4',
    title: ['Story', 'Title', 'Four'],
    author: 'Author Name 4',
    description: 'Short description for story four. Replace this text with the story summary.',
    href: 'stories/revisiting-the-brutalist-dream.html',
  },
  {
    category: 'Category 5',
    title: ['Story', 'Title', 'Five'],
    author: 'Author Name 5',
    description: 'Short description for story five. Replace this text with the story summary.',
    href: 'stories/writing-and-disappearance.html',
  },
]

const directions = [
  [-42, 18, -9, 0.94],
  [36, -24, 7, 1.02],
  [-28, -32, 5, 0.96],
  [48, 12, -6, 1.04],
  [-34, 28, 8, 0.97],
  [26, -20, -7, 1.03],
  [-46, -10, 6, 0.95],
  [32, 24, -5, 1.02],
  [-24, 34, 9, 0.96],
  [44, -28, -8, 1.04],
  [-38, 16, 5, 0.98],
  [30, -18, -6, 1.02],
] as const

function renderWord(word: string) {
  return [...word].map((char, index) => {
    const [x, y, r, s] = directions[index % directions.length]
    const style = {
      ['--x' as string]: `${x}px`,
      ['--y' as string]: `${y}px`,
      ['--r' as string]: `${r}deg`,
      ['--s' as string]: String(s),
      ['--delay' as string]: `${0.28 + Math.floor(index / 3) * 0.22}s`,
    } as CSSProperties

    return (
      <span key={`${word}-${index}`} className="letter" style={style}>
        {char}
      </span>
    )
  })
}

export default function App() {
  return (
    <div className="page">
      <header className="masthead">
        <div className="brand">
          <div className="logo-hover" id="logoHover" aria-label="The Hollywood Review logo">
            <div className="logo-layer black">
              <span className="name" aria-label="The Hollywood Review">
                <span className="row the">{renderWord('THE')}</span>
                <span className="row hollywood">{renderWord('HOLLYWOOD')}</span>
                <span className="row review">{renderWord('REVIEW')}</span>
              </span>
            </div>
          </div>
        </div>

        <nav className="top-nav right" aria-label="Main navigation">
          <a className="nav-button" href="#about">About</a>
          <a className="nav-button" href="#submit">Submit</a>
          <a className="nav-button" href="#events">Events</a>
          <a className="nav-button" href="#merch">THR Merch</a>
          <a
            className="social-button"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle className="social-dot" cx="17.4" cy="6.6" r="1"></circle>
            </svg>
          </a>
          <a
            className="social-button"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M21.5 6.1c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2c-.7.4-1.6.8-2.4.9A4 4 0 0 0 11.6 9c0 .3 0 .6.1.9A11.3 11.3 0 0 1 3.5 5.7a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.3.1-.7.1-1.1.1-.2 0-.5 0-.7-.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 19.1a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6 11.3-11.3V9A8 8 0 0 0 21.5 6.1Z"></path>
            </svg>
          </a>
        </nav>
      </header>

      <main className="articles" aria-label="Latest stories">
        {stories.map((story) => (
          <a key={story.href} className="article article-link" href={story.href} aria-label={`Read ${story.title.join(' ')} by ${story.author}`}>
            <article>
              <p className="category">{story.category}</p>
              <div className="headline-wrap">
                <span className="starburst" aria-hidden="true"></span>
                <h2 className="headline">
                  {story.title.map((line, index) => (
                    <span key={`${story.href}-${line}-${index}`}>
                      {line}
                      {index < story.title.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </h2>
              </div>
              <p className="byline">by {story.author}</p>
              <p className="dek">{story.description}</p>
            </article>
          </a>
        ))}
      </main>

      <footer className="footer">
        <div className="footer-left">
          <img className="footer-envelope" src="/Assets/envelope-transparent.png" alt="" />
          <a className="mailing-list-button bowlby-one-sc" href="#newsletter">
            <span className="mailing-list-text">Sign Up For Our Mailing List</span>
          </a>
        </div>
      </footer>
    </div>
  )
}

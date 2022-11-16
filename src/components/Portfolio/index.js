import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        ;(() => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        })()
    }, [])

    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'M',
                                'y',
                                ' ',
                                'p',
                                'o',
                                'r',
                                't',
                                'f',
                                'o',
                                'l',
                                'i',
                                'o',
                            ]}
                            idx={15}
                        />
                    </h1>
                    <p>Check out my projects!</p>
                </div>

                <div className="project-grid">
                    <ul className="full-stack">
                        <li>
                            <h1>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={[
                                        'F',
                                        'u',
                                        'l',
                                        'l',
                                        '-',
                                        'S',
                                        't',
                                        'a',
                                        'c',
                                        'k',
                                    ]}
                                    idx={15}
                                />
                            </h1>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://softwaregram.vercel.app/"
                            >
                                <h3>Softwaregram</h3>
                            </a>
                        </li>
                    </ul>

                    <ul className="games">
                        <li>
                            <h1>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={['G', 'a', 'm', 'e', 's']}
                                    idx={15}
                                />
                            </h1>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://squid-game-browser-game.vercel.app/"
                            >
                                <h3>Squid Game</h3>
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://tetris-browser-game.vercel.app/"
                            >
                                <h3>Tetris</h3>
                            </a>

                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/casancam/2D-Python-Game"
                            >
                                <h3>2D Python game</h3>
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/casancam/Space-Invaders-Pygame/"
                            >
                                <h3>Space Invaders</h3>
                            </a>
                        </li>
                    </ul>

                    <ul className="front-end">
                        <li>
                            <h1>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={[
                                        'F',
                                        'r',
                                        'o',
                                        'n',
                                        't',
                                        '-',
                                        'e',
                                        'n',
                                        'd',
                                    ]}
                                    idx={15}
                                />
                            </h1>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://redux-toolkit-ecommerce-site.vercel.app/"
                            >
                                <h3>Ecommerce Redux</h3>
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://ecommerce-shopping-cart-tsx.vercel.app/"
                            >
                                <h3>Ecommerce Typescript</h3>
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://dijkstra-s-pathfinding-algorithm.vercel.app/"
                            >
                                <h3>Djikstra Pathfinding</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio

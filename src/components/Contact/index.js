import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        ;(() => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        })()
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_2be1ql8',
                'template_g3d8t0o',
                refForm.current,
                'LyVRAX1s9b3M-aIZ4'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the email! Try again.')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'C',
                                'o',
                                'n',
                                't',
                                'a',
                                'c',
                                't',
                                ' ',
                                'm',
                                'e',
                            ]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm interested in web development, especially react
                        framework for front-end. I'm ambitious and I'm
                        interested in challenging opportunities. If you do have
                        a question, don't hesitate to contact me using the below
                        form.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        mame="message"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Carlos Sanchez
                    <br />
                    United Kingdom <br />
                    Clowes Street, M3 5NG <br />
                    Salford <br />
                    <span>carlossc999@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[53.4841, -2.249]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[53.4841, -2.249]}>
                            <Popup>
                                Carlos lives here, come over for a cup of
                                coffee!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact

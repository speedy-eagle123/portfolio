import AssignmentSummary from '../components/AssignmentSummary'
import PartSection from '../components/PartSection'
import styles from '../css/Responsive.module.css'
import { colors } from '../constants/Colors'

import rwz1 from '../assets/rwz1.png'
import rwz2 from '../assets/rwz2.png'
import rwz3 from '../assets/rwz3.png'
import rwzMac from '../assets/rwzMac.png'
import rwzIPAD from '../assets/rwzIPAD.png'
import rwzIPHONE from '../assets/rwsIPHONE.png'

import Carousel from 'react-material-ui-carousel'

export default function Responsive() {
    const rwz = [rwz1, rwz2, rwz3]
    const res = [rwzMac, rwzIPAD, rwzIPHONE]

    return (
        <div id={styles.container}>
            <AssignmentSummary
                description="The goal of this assignment is for you to practice the workflow of redesigning a simple website. You should take away the skills necessary to analyze and identify flaws in an existing interface, create low-fidelity and high-fidelity prototypes for various screen sizes, and build a responsive website based on those prototypes."
            />

            <PartSection title='Part 1'>
                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper} style={{ flexDirection: 'column' }}>
                        <h2 style={{ color: colors.text }}>Website to Redesign:</h2>
                        <h3 style={{ color: colors.text, fontWeight: '600', marginTop: 0 }}>The checkout page for buying tickets to Rodger Williams Zoo</h3>
                    </div>
                    <div>
                        <Carousel
                            height={'40vh'}
                            animation='slide'
                            autoPlay={false}
                            navButtonsAlwaysVisible={true}
                            navButtonsProps={{
                                style: {
                                    backgroundColor: colors.main,
                                }
                            }}
                            activeIndicatorIconButtonProps={{
                                style: {
                                    color: colors.main
                                }
                            }}
                        >

                            {rwz.map((i, idx) => (
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 15 }}>
                                    <img src={i} class={styles.image} />
                                    {/* <div style={{ width: '50%' }}>
                                        <h4 style={{ color: colors.text, }}>{captions[idx]}</h4>
                                    </div> */}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div style={{ width: '100%', height: 'auto', }}>
                        <button id={styles.link} onClick={() => window.open('https://3799.blackbaudhosting.com/3799/page.aspx?pid=196&tab=2&txobjid=3210549e-d49a-4334-a778-a2b6769a88e3', '_blank')}>
                            LINK TO SITE
                        </button>
                    </div>
                </div>

                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h2 style={{ color: colors.text }}>Why I Chose This Site:</h2>
                    </div>
                    <div>
                        {/* <img src={sketch} class={styles.image} /> */}
                        <h4 style={{ color: colors.text, textAlign: 'left' }}>
                            I recently went to the 'Jack O Lantern Spectacular' at Rodger Williams Zoo. While purchasing the tickets, I found myself confused when I first landed on the information page. There appeared to be a date select for the visit; however, I didn't see any options for payment or ticket select until scrolling down. I remember thinking that the site looked and felt very unprofessional. If I had not previously been to the Zoo, I would have been slightly worried about putting my card information into the site.
                        </h4>
                    </div>
                </div>

                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h2 style={{ color: colors.text }}>Problems:</h2>
                    </div>
                    <div style={{
                        textAlign: 'left'
                    }}>
                        <ol>
                            {/* {questions.map((q, idx) => (
                                <li style={{ color: colors.text }}>{q}</li>
                            ))} */}
                        </ol>
                    </div>
                </div>

                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h2 style={{ color: colors.text }}>Accessibility:</h2>
                    </div>
                    <div style={{
                        textAlign: 'left'
                    }}>
                        <ol>
                            {/* {questions.map((q, idx) => (
                                <li style={{ color: colors.text }}>{q}</li>
                            ))} */}
                        </ol>
                    </div>
                </div>
            </PartSection>

            <PartSection title='Part 2'>
                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h2 style={{ color: colors.text }}>Wireframing:</h2>
                    </div>
                    <div>
                        {/* <img src={sketch} class={styles.image} /> */}
                    </div>
                </div>

                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h2 style={{ color: colors.text }}>Style Guide:</h2>
                    </div>
                    <div>
                        {/* <img src={sketch} class={styles.image} /> */}
                    </div>
                </div>

                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h2 style={{ color: colors.text }}>High-Fidelity Prototypes:</h2>
                    </div>
                    <div>
                        {/* <img src={sketch} class={styles.image} /> */}
                    </div>
                </div>
            </PartSection>

            <PartSection title='Part 3'>
                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h2 style={{ color: colors.text }}>Redesigned Website:</h2>
                    </div>
                    <div>
                        <Carousel
                            style={{
                                minHeight: '50vh'
                            }}
                            animation='slide'
                            autoPlay={false}
                            navButtonsAlwaysVisible={true}
                            navButtonsProps={{
                                style: {
                                    backgroundColor: colors.main,
                                }
                            }}
                            activeIndicatorIconButtonProps={{
                                style: {
                                    color: colors.main
                                }
                            }}
                        >

                            {res.map((i, idx) => (
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 15 }}>
                                    <img src={i} class={styles.image} style={{ width: idx === 0 ? '50%' : '25%' }} />
                                    {/* <div style={{ width: '50%' }}>
                                        <h4 style={{ color: colors.text, }}>{captions[idx]}</h4>
                                    </div> */}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div>
                        <button id={styles.link} onClick={() => window.open('/rwz', '_blank')}>
                            LINK TO SITE
                        </button>
                    </div>
                </div>
            </PartSection>
        </div>
    )
}
import AssignmentSummary from '../components/AssignmentSummary'
import PartSection from '../components/PartSection'
import styles from '../css/Responsive.module.css'
import { colors } from '../constants/Colors'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import rwz1 from '../assets/rwz1.png'
import rwz2 from '../assets/rwz2.png'
import rwz3 from '../assets/rwz3.png'
import rwzMac from '../assets/rwzMac.png'
import rwzIPAD from '../assets/rwzIPAD.png'
import rwzIPHONE from '../assets/rwzIPHONE.png'

import fMac1 from '../assets/fMac1.png'
import fMac2 from '../assets/fMac2.png'
import fMac3 from '../assets/fMac3.png'

import fIPAD1 from '../assets/fIPAD1.png'
import fIPAD2 from '../assets/fIPAD2.png'
import fIPAD3 from '../assets/fIPAD3.png'

import fIPPHONE2 from '../assets/fIPHONE2.png'
import fIPPHONE1 from '../assets/fIPHONE1.png'
import fIPPHONE3 from '../assets/fIPHONE3.png'
import fIPPHONE4 from '../assets/fIPHONE4.png'
import fIPPHONE5 from '../assets/fIPHONE5.png'

import wf1 from '../assets/wf1.png'
import wf2 from '../assets/wf2.png'
import wf3 from '../assets/wf3.png'

import Carousel from 'react-material-ui-carousel'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export default function Responsive() {
    const rwz = [rwz1, rwz2, rwz3]
    const res = [rwzMac, rwzIPAD, rwzIPHONE]
    const fMac = [fMac1, fMac2, fMac3]
    const fIPHONE = [fIPPHONE1, fIPPHONE2, fIPPHONE3, fIPPHONE4, fIPPHONE5]
    const fIPAD = [fIPAD1, fIPAD2, fIPAD3]
    const wf = [wf1, wf2, wf3]

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
                        <div style={{ borderRadius: 5, overflow: 'hidden', marginBottom: 15 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: colors.text }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: colors.background,
                                    }}
                                >
                                    <Typography style={{ color: colors.text, fontWeight: 'bold' }}>Usability</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        backgroundColor: colors.background,
                                    }}
                                >
                                    <div style={{ textAlign: 'left' }}>
                                        <ul>
                                            <li style={{ color: colors.text }}>Add to cart is at bottom of page</li>
                                            <li style={{ color: colors.text }}>Little indication of other time slots</li>
                                            <li style={{ color: colors.text }}>Broken tab navigation on the time select</li>
                                        </ul>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        <div style={{ borderRadius: 5, overflow: 'hidden', marginBottom: 15 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: colors.text }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: colors.background,
                                    }}
                                >
                                    <Typography style={{ color: colors.text, fontWeight: 'bold' }}>Learnability</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        backgroundColor: colors.background,
                                    }}
                                >
                                    <div style={{ textAlign: 'left' }}>
                                        <ul>
                                            <li style={{ color: colors.text }}>A lot of information on the checkout page that should likely be elsewhere</li>
                                            <li style={{ color: colors.text }}>No concrete indicator of process</li>
                                            <li style={{ color: colors.text }}>No loading indicator</li>
                                        </ul>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        <div style={{ borderRadius: 5, overflow: 'hidden', marginBottom: 15 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: colors.text }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: colors.background,
                                    }}
                                >
                                    <Typography style={{ color: colors.text, fontWeight: 'bold' }}>Memorability</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        backgroundColor: colors.background,
                                    }}
                                >
                                    <div style={{ textAlign: 'left' }}>
                                        <ul>
                                            <li style={{ color: colors.text }}>Leaves a bad impression</li>
                                            <li style={{ color: colors.text }}>My main takeaway from purchasing tickets was that the site was very poor</li>
                                            <li style={{ color: colors.text }}>Was somewhat concerned about my payment being processed properly</li>
                                            <li style={{ color: colors.text }}>Green background seems out of place</li>
                                        </ul>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        <div style={{ borderRadius: 5, overflow: 'hidden', marginBottom: 15 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: colors.text }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: colors.background,
                                    }}
                                >
                                    <Typography style={{ color: colors.text, fontWeight: 'bold' }}>Conceptual Model</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        backgroundColor: colors.background,
                                    }}
                                >
                                    <div style={{ textAlign: 'left' }}>
                                        <p style={{ color: colors.text }}>
                                            When clicking on the ‘Buy Tickets’ button (which navigates to this page), I expect to see a summary of ticket prices, a little information about the reservation process, and an intuitive form to fill out with my ticket selection as well as billing information. However, the page I am brought to has a disorganized combination of these elements. Switching from ticket selection, to information, to ticket selection (below the fold) is a confusing way to navigate the checkout process and goes against the user’s conceptual model.
                                        </p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
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
                        <Carousel
                            style={{
                                minHeight: '80vh'
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

                            {wf.map((i, idx) => (
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 15 }}>
                                    <img src={i} class={styles.image} style={{ width: idx === 0 ? '60vw' : '30vw' }} />
                                    {/* <div style={{ width: '50%' }}>
                                        <h4 style={{ color: colors.text, }}>{captions[idx]}</h4>
                                    </div> */}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h2 style={{ color: colors.text }}>Annotations:</h2>
                    </div>
                    <div>
                        <ol>
                            <li>One of the main issues with the current site is that a user does not have a sense of where they are in the checkout process. This was likley why I was initially confused by the site, as I did not know if I was on the payment screen or simply an information screen. Therefore, this component shows the user where they are in the process: information, selecting their tickets, payment, or confirmation.</li>
                            <li>In addition to the lack of progress indication, the current site does not identify the total purchase price until navigating to the final payment page. It would be nice to see a running total before this to make the checkout process run more smoothly and avoid possible surprises when checking out.</li>
                            <li>The main improvement being made to the site is the consolodation of input fields. In the original page, there is a section to select your vist date and time followed immediately by a large amount of information. You must scroll past the paragraphs of information to find the ticket input fields. This is a very confusing and unintuitive process to go through. Therfore, by breaking the checkout process into different steps, and grouping the fields closer together, buying a ticket will likely be a more streamlined experience.</li>
                            <li>When the width of the user's screen hits a certain threshold, the position of the summary section will adjust to maintain its readability.</li>
                            <li>Similar to the condition in annotation four, when the screen shrinks futher, the alignment of the date and time selects will switch to a column direction to prevent squishing of the inputs.</li>
                        </ol>
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
                </div>

                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h3 style={{ color: colors.text }}>Desktop:</h3>
                    </div>
                    <div>
                        <Carousel
                            style={{
                                minHeight: '80vh'
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

                            {fMac.map((i, idx) => (
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 15 }}>
                                    <img src={i} class={styles.image} style={{ width: '60vw' }} />
                                    {/* <div style={{ width: '50%' }}>
                                        <h4 style={{ color: colors.text, }}>{captions[idx]}</h4>
                                    </div> */}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h3 style={{ color: colors.text }}>Tablet:</h3>
                    </div>
                    <div>
                        <Carousel
                            style={{
                                minHeight: '30vh'
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

                            {fIPAD.map((i, idx) => (
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 15 }}>
                                    <img src={i} class={styles.image} style={{ width: '30vw' }} />
                                    {/* <div style={{ width: '50%' }}>
                                        <h4 style={{ color: colors.text, }}>{captions[idx]}</h4>
                                    </div> */}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h3 style={{ color: colors.text }}>Phone:</h3>
                    </div>
                    <div>
                        <Carousel
                            style={{
                                minHeight: '40vh'
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

                            {fIPHONE.map((i, idx) => (
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 15 }}>
                                    <img src={i} class={styles.image} style={{ width: '30vw' }} />
                                    {/* <div style={{ width: '50%' }}>
                                        <h4 style={{ color: colors.text, }}>{captions[idx]}</h4>
                                    </div> */}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </PartSection >

            <PartSection title='Part 3'>
                <div class={styles.section} style={{ backgroundColor: colors.secondary }}>
                    <div id={styles.titleWrapper}>
                        <h2 style={{ color: colors.text }}>Redesigned Website:</h2>
                    </div>
                    <div>
                        <Carousel
                            style={{
                                minHeight: '60vh'
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
        </div >
    )
}
import { useEffect, useState } from 'react'
import styles from '../css/RWZ.module.css'
import PetsIcon from '@mui/icons-material/Pets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function RWZ() {
    return (
        <div id={styles.container}>
            <NavBar />

            <div id={styles.body}>
                <TitleView />
                <Body />
            </div>
        </div>
    )
}

function NavBar() {
    return (
        <div id={styles.navBar}>
            <img src='https://www.rwpzoo.org/wp-content/uploads/2022/05/logo-w-carousel.png' id={styles.logo} />
        </div>
    )
}

function TitleView() {
    return (
        <div id={styles.titleView}>
            <h1>General Admission</h1>
        </div>
    )
}

function Body() {
    const [rows, setRows] = useState([])
    const [seniorTickets, setSeniorTickets] = useState('')
    const [adultTickets, setAdultTickets] = useState('')
    const [childTickets, setChildTickets] = useState('')
    const [toddlerTickets, setToddlerTickets] = useState('')
    const [enabled, setEnabled] = useState(false)

    const seniorPrice = 16.95
    const adultPrice = 19.95
    const childPrice = 13.95

    useEffect(() => {
        let res = []

        if (seniorTickets !== '') {
            res.push(
                {
                    title: 'Senior Tickets:',
                    value: `$${(parseInt(seniorTickets) * seniorPrice).toFixed(2)}`
                }
            )
        }

        if (adultTickets !== '') {
            res.push(
                {
                    title: 'Adult Tickets:',
                    value: `$${(parseInt(adultTickets) * adultPrice).toFixed(2)}`
                }
            )
        }

        if (childTickets !== '') {
            res.push(
                {
                    title: 'Child Tickets:',
                    value: `$${(parseInt(childTickets) * childPrice).toFixed(2)}`
                }
            )
        }

        if (toddlerTickets !== '') {
            res.push(
                {
                    title: 'Toddler Tickets:',
                    value: `$0.00`
                }
            )
        }

        setEnabled(res.length !== 0)
        setRows(res)
    }, [seniorTickets, adultTickets, childTickets, toddlerTickets])

    return (
        <div id={styles.mainWrapper}>
            <ProgressBar />
            <div id={styles.contentWrapper}>
                <InputSection
                    seniorTickets={seniorTickets}
                    setSeniorTickets={setSeniorTickets}
                    adultTickets={adultTickets}
                    setAdultTickets={setAdultTickets}
                    childTickets={childTickets}
                    setChildTickets={setChildTickets}
                    toddlerTickets={toddlerTickets}
                    setToddlerTickets={setToddlerTickets}
                />
                <SummarySection rows={rows} />
            </div>
            <BtnSection enabled={enabled} />
        </div>
    )
}

function ProgressBar() {
    const titles = ['Information', 'Ticket Selection', 'Payment', 'Confirmation']

    return (
        <div id={styles.progressBar}>
            {titles.map((title) => {
                return (
                    <h3>{title}</h3>
                )
            })}
        </div>
    )
}

function InputSection({
    seniorTickets,
    setSeniorTickets,
    adultTickets,
    setAdultTickets,
    childTickets,
    setChildTickets,
    toddlerTickets,
    setToddlerTickets
}) {
    return (
        <div id={styles.inputDiv}>
            <div className={styles.titleWrapper}>
                <h3>Date and Time:</h3>
            </div>
            <div id={styles.dateTimeWrapper}>
                <DateSelect />
                <TimeSelect />
            </div>
            <div className={styles.titleWrapper}>
                <h3>Number of Tickets:</h3>
            </div>
            <TicketSelect
                seniorTickets={seniorTickets}
                setSeniorTickets={setSeniorTickets}
                adultTickets={adultTickets}
                setAdultTickets={setAdultTickets}
                childTickets={childTickets}
                setChildTickets={setChildTickets}
                toddlerTickets={toddlerTickets}
                setToddlerTickets={setToddlerTickets}
            />
        </div>
    )
}

function SummarySection({ rows }) {
    if (rows.length === 0) {
        return (
            <div id={styles.summaryDiv} style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '100%',
                }}>
                    <h3>Select tickets to view your total</h3>
                    <PetsIcon id={styles.petIcon} />
                </div>
            </div>
        )
    }
    return (
        <div id={styles.summaryDiv}>
            <h3>Summary:</h3>
            <div id={styles.summaryBody}>
                {rows.map((item) => (
                    <div className={styles.summaryRow}>
                        <h4>{item.title}</h4>
                        <h4>{item.value}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

function BtnSection({ enabled }) {
    return (
        <div id={styles.btnDiv}>
            <button id={enabled ? styles.next : styles.nextDisabled}>
                <h4>PAY</h4>
            </button>
        </div>
    )
}

function DateSelect() {
    return (
        <button className={styles.inputBtn}>
            <CalendarMonthIcon style={{ color: '#1e4276' }} />
            <h4>October 31st</h4>
            <ArrowDropDownIcon />
        </button>
    )
}

function TimeSelect() {
    return (
        <button className={styles.inputBtn}>
            <AccessTimeIcon style={{ color: '#1e4276' }} />
            <h4>8:00 pm - 9:00 pm</h4>
            <ArrowDropDownIcon />
        </button>
    )
}

function TicketSelect({
    seniorTickets,
    setSeniorTickets,
    adultTickets,
    setAdultTickets,
    childTickets,
    setChildTickets,
    toddlerTickets,
    setToddlerTickets
}) {
    const titles = [
        {
            title: 'Senior (62+):',
            set: setSeniorTickets
        },

        {
            title: 'Adult (13+)',
            set: setAdultTickets
        },

        {
            title: 'Child (2-12)',
            set: setChildTickets
        },

        {
            title: 'Toddler (0-1)',
            set: setToddlerTickets
        }
    ]

    return (
        <div id={styles.ticketSelectWrapper}>
            {titles.map((item) => (
                <div className={styles.ticketRow}>
                    <h4>{item.title}</h4>
                    <input onChange={(e) => item.set(e.target.value)} className={styles.ticketInput} />
                </div>
            ))}
        </div>
    )
}
import styles from '../css/AssignmentSummary.module.css'
import { colors } from '../constants/Colors'

export default function AssignmentSummary({ description }) {
	return (
		<div id={styles.container} style={{ backgroundColor: colors.secondary, borderRadius: 10 }}>
			<div id={styles.titleWrapper}>
				<h1 style={{ color: colors.text }}>Assignment Summary</h1>
			</div>
			<div style={{ width: '70%' }}>
				<h4 id='description' style={{ color: colors.text }}>{description}</h4>
			</div>
		</div>
	)
}
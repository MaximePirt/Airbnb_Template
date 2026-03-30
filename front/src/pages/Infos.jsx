// Infos.jsx
import { useTranslation } from 'react-i18next'
import InfoCard from '../components/ui/InfoCards'
import BackButton from '../components/ui/Backbutton'

function WelcomeCard({ title, message }) {
	return (
		<InfoCard title={title} centeredTitle>
			<p
				style={{
					color: 'var(--text-light)',
					fontSize: '0.95rem',
					lineHeight: '1.6',
				}}
			>
				{message}
			</p>
		</InfoCard>
	)
}

function ScheduleItem({ icon, label, value }) {
	return (
		<div
			className="flex-1 flex flex-col gap-1 p-3 rounded-lg"
			style={{ backgroundColor: 'var(--bg-main)' }}
		>
			<span className="text-2xl">{icon}</span>
			<span
				style={{
					color: 'var(--text-light)',
					fontSize: '0.75rem',
					textTransform: 'uppercase',
					letterSpacing: '0.05em',
				}}
			>
				{label}
			</span>
			<span
				style={{
					color: 'var(--text)',
					fontWeight: 600,
					fontSize: '0.95rem',
				}}
			>
				{value}
			</span>
		</div>
	)
}

function ScheduleCard({ title, checkin, checkout }) {
	return (
		<InfoCard title={title}>
			<div className="flex gap-3">
				<ScheduleItem {...checkin} />

				<div
					style={{
						width: '1px',
						backgroundColor: 'var(--border-thin)',
					}}
				/>

				<ScheduleItem {...checkout} />
			</div>
		</InfoCard>
	)
}

function RuleItem({ icon, text, showDivider }) {
	return (
		<li>
			<div className="flex items-center gap-3 py-3">
				<span
					style={{
						fontSize: '1.2rem',
						width: '28px',
						textAlign: 'center',
					}}
				>
					{icon}
				</span>

				<span style={{ color: 'var(--text)', fontSize: '0.95rem' }}>
					{text}
				</span>
			</div>

			{showDivider && <hr className="info-card-divider" />}
		</li>
	)
}

function RulesCard({ title, rules }) {
	return (
		<InfoCard title={title}>
			<ul className="flex flex-col">
				{rules.map((rule, index) => (
					<RuleItem
						key={rule.text}
						icon={rule.icon}
						text={rule.text}
						showDivider={index < rules.length - 1}
					/>
				))}
			</ul>
		</InfoCard>
	)
}

function Infos() {
	const { t } = useTranslation()

	const rules = t('infos.rules.items', { returnObjects: true })
	const checkin = t('infos.schedule.checkin', { returnObjects: true })
	const checkout = t('infos.schedule.checkout', { returnObjects: true })

	return (
		<main
			style={{ backgroundColor: 'var(--bg-secondary)' }}
			className="min-h-screen bg-gray-50 px-4 py-10"
		>
			<div className="w-full max-w-sm mx-auto flex flex-col gap-4">
				<BackButton
					label={t('nav.back')}
					onClick={() => window.history.back()}
				/>
				<div
					style={{ backgroundColor: 'var(--secondary)' }}
					className="flex flex-col items-center px-4 py-10 gap-4 w-full rounded-2xl shadow-md"
				>
					<h1
						className="text-xl font-bold self-start"
						style={{ color: 'var(--text)' }}
					>
						{t('infos.title')}
					</h1>

					<WelcomeCard
						title={t('infos.welcome.title')}
						message={t('infos.welcome.message')}
					/>

					<ScheduleCard
						title={t('infos.schedule.title')}
						checkin={checkin}
						checkout={checkout}
					/>

					<RulesCard
						title={t('infos.rules.title')}
						rules={rules}
					/>
				</div>
			</div>
		</main>
	)
}

export default Infos

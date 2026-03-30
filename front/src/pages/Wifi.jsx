import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import InfoCard from '../components/ui/InfoCards'
import BackButton from '../components/ui/Backbutton'

function WifiPasswordRow({ label, value }) {
	const [copied, setCopied] = useState(false)

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(value)
			setCopied(true)

			setTimeout(() => {
				setCopied(false)
			}, 2000)
		} catch (error) {
			console.error('Erreur de copie :', error)
		}
	}

	return (
		<div className="flex items-center justify-between gap-3 mt-2">
			<div className="flex items-center gap-2 min-w-0">
				<span className="w-24 shrink-0 text-lg font-semibold">{label}:</span>
				<span className="text-lg">{value}</span>
			</div>

			<button
				onClick={handleCopy}
				aria-label={copied ? 'Mot de passe copié' : 'Copier le mot de passe'}
				className="p-2 rounded-xl transition-all"
				style={{
					backgroundColor: copied ? '#16a34a' : 'var(--bg-main)',
					color: copied ? 'white' : 'var(--text)',
					border: copied ? '1px solid transparent' : '1px solid var(--border-thin)',
				}}
			>
				{copied ? (
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="w-5 h-5"
						aria-hidden="true"
					>
						<path d="M20 6L9 17l-5-5" />
					</svg>
				) : (
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="w-5 h-5"
						aria-hidden="true"
					>
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
						<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
					</svg>
				)}
			</button>
		</div>
	)
}

function Wifi() {
	const { t } = useTranslation()

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

				<InfoCard title={t('wifi.title')} centeredTitle>
					<p className="text-center var(--text-primary)">
						{t('wifi.description')}
					</p>
					<ul className="list-decimal list-inside mt-4 space-y-2">
						{t('wifi.setups', { returnObjects: true }).map((step, index) => (
							<li key={index} className="var(--text-primary)">
								{step}
							</li>
						))}
					</ul>
					<div className="mt-6 p-4 bg-gray-100 rounded-lg">
						<div className="flex items-center gap-2">
							<span className="w-24 shrink-0 text-lg font-semibold">
								{t('wifi.network.label')}:
							</span>
							<span className="text-lg">{t('wifi.network.value')}</span>
						</div>


						<WifiPasswordRow
							label={t('wifi.password.label')}
							value={t('wifi.password.value')}
						/>
					</div>
				</InfoCard>

				<InfoCard title={t('wifi.qr')} centeredTitle>
					<img src={"/qrCodeWifi.png"} alt={t('wifi.qrAlt')} className="mx-auto" />
				</InfoCard>

			</div>
		</main>
		
	)
}

export default Wifi

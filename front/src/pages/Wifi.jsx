import { useTranslation } from 'react-i18next'
import InfoCard from '../components/ui/InfoCards'
import BackButton from '../components/ui/Backbutton'

function Wifi() {
	const { t } = useTranslation()

	return (
		<div
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
						{t('infos.wifi')}
					</h1>

					<p
						style={{
							color: 'var(--text-light)',
							fontSize: '0.95rem',
							textAlign: 'center',
						}}
					>
						{t('infos.airbnb')}
					</p>

					<InfoCard title={t('infos.wifi')}>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<span className="font-medium">SSID:</span>
								<span>MyHomeWiFi</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-medium">Password:</span>
								<span>supersecret123</span>
							</div>
						</div>
					</InfoCard>
				</div>
			</div>
		</div>
	)
}

export default Wifi

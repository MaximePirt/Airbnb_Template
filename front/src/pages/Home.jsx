import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Home() {
	const { t } = useTranslation()
	const buttons = t('buttons', { returnObjects: true })

	const btnClass = `
		w-full flex items-center gap-4
		bg-white border border-gray-100 rounded-2xl
		px-5 py-4 shadow-sm
		hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 hover:border-gray-300
		active:scale-[0.98]
		transition-all duration-200 ease-in-out
		text-gray-800 font-medium text-base cursor-pointer
	`


	return (
		<main className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">

			{/* Hero */}
			<div className="flex flex-col items-center text-center mb-8">
			<div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden shadow-md">
				<img src="/favicon.svg" alt="Logo" className="w-full h-full object-cover" />
			</div>
			<h1 className="text-2xl font-bold text-gray-900">{t('hero.title')}</h1>
			<p className="text-gray-500 mt-1 text-sm">{t('hero.subtitle')}</p>
			</div>

			{/* Boutons */}
			<section className="flex flex-col gap-3 w-full max-w-sm">
			{buttons.map((btn, index) => {
				const isExternal = btn.href.startsWith('http')

				if (isExternal) {
				return (
					<a key={index} href={btn.href}
					target="_blank" rel="noopener noreferrer"
					className={btnClass}>
					<span className="text-2xl w-8 text-center">{btn.icon}</span>
					<span className="flex-1 text-left">{btn.label}</span>
					<span className="text-gray-300 text-sm">↗</span>
					</a>
				)
				}

				return (
				<Link key={index} to={btn.href} className={btnClass}>
					<span className="text-2xl w-8 text-center">{btn.icon}</span>
					<span className="flex-1 text-left">{btn.label}</span>
					<span className="text-gray-300 text-sm">›</span>
				</Link>
				)
			})}
			</section>

		</main>
	)
}

export default Home

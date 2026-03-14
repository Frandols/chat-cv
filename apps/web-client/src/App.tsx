import { CodeXml, FileText } from 'lucide-react'
import { useState } from 'react'
import CVEditor from './components/cv-editor'
import WelcomePopup from './components/welcome-popup'
import { useWelcomePopup } from './hooks/use-welcome-popup'

function App() {
	const [showXmlEditor, setShowXmlEditor] = useState(false)
	const { isVisible: showWelcome, dismiss: dismissWelcome } = useWelcomePopup()

	return (
		<div className='h-screen flex flex-col overflow-hidden bg-surface-100'>
			<header className='flex items-center justify-between px-4 py-3 border-b border-surface-200 bg-white/80 backdrop-blur-sm'>
				<div className='flex items-center gap-2.5'>
					<div className='w-8 h-8 rounded-lg bg-accent flex items-center justify-center'>
						<FileText
							className='w-4 h-4 text-white'
							strokeWidth={2.5}
						/>
					</div>
					<h1 className='text-lg font-semibold text-mist-700 hidden sm:block'>
						Chat CV
					</h1>
				</div>

				<button
					onClick={() => setShowXmlEditor((prev) => !prev)}
					className='flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border border-surface-200 bg-white hover:bg-surface-50 hover:border-surface-300 text-mist-700'
				>
					<CodeXml className='w-4 h-4' />
					<span className='hidden sm:inline'>
						{showXmlEditor ? 'Ocultar XML' : 'Editar XML'}
					</span>
				</button>
			</header>

			<main className='flex-1 overflow-hidden'>
				<CVEditor showXmlEditor={showXmlEditor} />
			</main>

			{showWelcome && <WelcomePopup onDismiss={dismissWelcome} />}
		</div>
	)
}

export default App

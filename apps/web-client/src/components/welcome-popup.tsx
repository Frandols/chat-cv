import { Github, Linkedin, X } from 'lucide-react'

interface WelcomePopupProps {
	onDismiss: () => void
}

export default function WelcomePopup({ onDismiss }: WelcomePopupProps) {
	return (
		<div className='fixed bottom-4 right-4 left-4 sm:left-auto z-50 w-auto sm:w-96 animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]'>
			<div className='bg-white rounded-2xl shadow-xl border border-surface-200 overflow-hidden'>
				<div className='relative flex items-center gap-4 px-5 py-4 bg-linear-to-r from-panel to-panel-light'>
					<div className='w-14 h-14 rounded-full border-2 border-white/30 overflow-hidden shrink-0'>
						<img
							src='/francisco.PNG'
							alt='Francisco De Los Santos'
							className='w-full h-full object-cover'
						/>
					</div>

					<div className='min-w-0'>
						<p className='text-base font-semibold text-white truncate'>
							Francisco De Los Santos
						</p>
						<p className='text-sm text-white/60 truncate'>
							Full-Stack · Lic. en Sistemas
						</p>
					</div>

					<button
						onClick={onDismiss}
						className='absolute top-2.5 right-2.5 p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer'
					>
						<X className='w-4 h-4' />
					</button>
				</div>

				<div className='px-5 py-4'>
					<p className='text-sm leading-relaxed text-mist-700/80'>
						Hice esta app para cubrir una necesidad básica:{' '}
						<span className='font-semibold text-mist-700'>
							versatilidad a la hora de necesitar un CV
						</span>
						. Generalo, editalo y personalizalo cuando necesites.
					</p>

					<div className='flex items-center gap-2.5 mt-4'>
						<a
							href='https://www.linkedin.com/in/francisco-nicolas-de-los-santos/'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors duration-200'
						>
							<Linkedin className='w-4 h-4' />
							LinkedIn
						</a>

						<a
							href='https://github.com/Frandols'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium bg-panel text-white hover:bg-panel-light transition-colors duration-200'
						>
							<Github className='w-4 h-4' />
							GitHub
						</a>

						<button
							onClick={onDismiss}
							className='ml-auto text-sm font-medium text-surface-400 hover:text-mist-700 transition-colors duration-200 cursor-pointer'
						>
							Cerrar
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

import { ArrowUp, Loader2, X } from 'lucide-react'
import { usePromptInput } from '../hooks/use-prompt-input'

interface PromptInputProps {
	value: string
	onValueChange: (value: string) => void
	isLoading?: boolean
	error: string | null
	onClearError: () => void
	onSubmit: () => void
}

export default function PromptInput({
	value,
	onValueChange,
	isLoading = false,
	error,
	onClearError,
	onSubmit,
}: PromptInputProps) {
	const { handleSubmit, handleKeyDown } = usePromptInput(onSubmit)

	return (
		<div className='max-w-2xl w-full mx-auto flex flex-col gap-2'>
			{error && (
				<div className='flex items-center gap-3 px-4 py-2.5 rounded-xl bg-error-bg border border-error-border text-error text-sm font-medium animate-[fadeIn_0.2s_ease-out]'>
					<span className='flex-1'>{error}</span>

					<button
						onClick={onClearError}
						className='p-1 rounded-lg hover:bg-error/10 transition-colors cursor-pointer'
					>
						<X className='w-4 h-4' />
					</button>
				</div>
			)}

			<form
				onSubmit={handleSubmit}
				className='relative w-full rounded-2xl bg-white border border-surface-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-end gap-2 p-2'
			>
				{isLoading && (
					<div className='absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl backdrop-blur-sm bg-white/60'>
						<Loader2 className='w-6 h-6 animate-spin text-accent mb-2' />
						<p className='text-sm font-medium text-mist-700'>
							Actualizando CV...
						</p>
					</div>
				)}

				<textarea
					value={value}
					onChange={(event) => onValueChange(event.target.value)}
					onKeyDown={handleKeyDown}
					name='prompt'
					disabled={isLoading}
					rows={2}
					className='flex-1 bg-transparent outline-none px-2 py-1.5 resize-none text-sm leading-relaxed text-mist-700 placeholder:text-surface-400 disabled:opacity-50 h-20'
					placeholder='Describí los cambios que querés hacer en el CV...'
				/>

				<button
					type='submit'
					disabled={isLoading || !value.trim()}
					className='shrink-0 w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_12px_var(--color-accent-glow)]'
				>
					<ArrowUp
						className='w-4.5 h-4.5'
						strokeWidth={2.5}
					/>
				</button>
			</form>
		</div>
	)
}

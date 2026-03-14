export function usePromptInput(onSubmit: () => void) {
	const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
		event.preventDefault()
		onSubmit()
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault()
			onSubmit()
		}
	}

	return {
		handleSubmit,
		handleKeyDown,
	}
}

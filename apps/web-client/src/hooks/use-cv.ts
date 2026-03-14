import type { CV } from '@app/domain'
import { useState } from 'react'
import defaultCV from '../consts/default-cv'
import updateCV from '../services/update-cv'

type Status =
	| {
			type: 'idle'
	  }
	| {
			type: 'loading'
	  }
	| {
			type: 'error'
			message: string
	  }

export default function useCV() {
	const [prompt, setPrompt] = useState<string>('')
	const [cv, setCV] = useState(defaultCV)
	const [status, setStatus] = useState<Status>({ type: 'idle' })

	const handleGenerateCV = async () => {
		if (status.type === 'loading') return

		setStatus({ type: 'loading' })

		try {
			const newCV = await updateCV(prompt, cv)

			setCV(newCV)
			setPrompt('')
			setStatus({ type: 'idle' })
		} catch (error) {
			const message =
				error instanceof Error ? error.message : 'Ocurrió un error inesperado.'

			setStatus({
				type: 'error',
				message,
			})
		}
	}

	const onPromptChange = (value: string) => {
		setPrompt(value)
	}

	const handleUpdateCV = (newCV: CV) => {
		setCV(newCV)
	}

	const isLoading = status.type === 'loading'

	const clearError = () => {
		setStatus({ type: 'idle' })
	}

	const error = status.type === 'error' ? status.message : null

	return {
		prompt,
		onPromptChange,
		cv,
		clearError,
		handleGenerateCV,
		handleUpdateCV,
		isLoading,
		error,
	}
}

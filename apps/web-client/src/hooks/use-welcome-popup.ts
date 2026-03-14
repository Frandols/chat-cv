import { useCallback, useState } from 'react'

export function useWelcomePopup() {
	const [isVisible, setIsVisible] = useState(true)

	const dismiss = useCallback(() => {
		setIsVisible(false)
	}, [])

	return {
		isVisible,
		dismiss,
	}
}

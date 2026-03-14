import type { CV } from '@app/domain'

export default async function updateCV(
	prompt: string,
	currentCV: CV,
): Promise<CV> {
	let response: Response

	try {
		response = await fetch(import.meta.env.VITE_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ prompt, currentCV }),
		})
	} catch {
		throw new Error('No se pudo conectar con el servidor.')
	}

	if (!response.ok) {
		throw new Error('El servidor respondió con un error. Intentá de nuevo.')
	}

	return response.json()
}

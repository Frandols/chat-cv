import type { CV } from '@app/domain'
import { jsonToXml, xmlToJson } from '@app/lib/src/mappers/'
import { cvSchema } from '@app/lib/src/schemas/cv-schema'
import { useCallback, useEffect, useRef, useState } from 'react'

const DEBOUNCE_MS = 1500

export function useXmlEditor(cv: CV, onChangeCV: (newCV: CV) => void) {
	const [xml, setXml] = useState(jsonToXml(cv))

	useEffect(() => {
		setXml(jsonToXml(cv))
	}, [cv])

	const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

	useEffect(() => {
		return () => {
			if (debounceTimer.current) clearTimeout(debounceTimer.current)
		}
	}, [])

	const debouncedChangeCV = useCallback(
		(newXml: string) => {
			if (debounceTimer.current) clearTimeout(debounceTimer.current)

			debounceTimer.current = setTimeout(() => {
				const json = xmlToJson(newXml)
				const parsing = cvSchema.safeParse(json)

				if (!parsing.success) return

				onChangeCV(parsing.data)
			}, DEBOUNCE_MS)
		},
		[onChangeCV],
	)

	const handleXmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newXml = e.target.value

		setXml(newXml)

		debouncedChangeCV(newXml)
	}

	return {
		xml,
		handleXmlChange,
	}
}

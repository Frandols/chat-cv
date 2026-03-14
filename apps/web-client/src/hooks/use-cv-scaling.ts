import { useCallback, useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'

const CV_WIDTH_PX = 794 // ~210mm at 96dpi

export function useCvScaling() {
	const cvRef = useRef<HTMLDivElement>(null)
	const wrapperRef = useRef<HTMLDivElement>(null)
	const [scale, setScale] = useState(1)

	const handlePrint = useReactToPrint({
		contentRef: cvRef,
		documentTitle: 'CV',
	})

	const updateScale = useCallback(() => {
		if (!wrapperRef.current) return

		const availableWidth = wrapperRef.current.clientWidth

		const newScale = Math.min(1, availableWidth / CV_WIDTH_PX)

		setScale(newScale)
	}, [])

	useEffect(() => {
		updateScale()

		const observer = new ResizeObserver(updateScale)

		if (wrapperRef.current) observer.observe(wrapperRef.current)

		return () => observer.disconnect()
	}, [updateScale])

	return {
		cvRef,
		wrapperRef,
		scale,
		handlePrint,
		CV_WIDTH_PX,
	}
}

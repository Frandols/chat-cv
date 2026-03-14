import type { DefaultTextPart, TextPart } from './text-part.js'

export type HeadingItem = {
	type: 'heading'
	props: {
		title: string
	}
}

export type CardItem = {
	type: 'card'
	props: {
		title: DefaultTextPart['props'][]
		subtitle: DefaultTextPart['props'][]
		details: {
			0: DefaultTextPart['props'][]
			1?: DefaultTextPart['props'][]
		}
		underline?: true
	}
}

export type TextItem = {
	type: 'text'
	props: {
		parts: TextPart[]
	}
}

export type Item = HeadingItem | CardItem | TextItem

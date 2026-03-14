import type { TextPartContent } from './text-part-content.js'

export type DefaultTextPart = {
	type: 'default'
	props: {
		content: TextPartContent
		bold?: true
		italic?: true
		underline?: true
	}
}

export type BrokenListTextPart = {
	type: 'broken'
	props: {
		items: { parts: DefaultTextPart['props'][] }[]
	}
}

export type JoinedListTextPart = {
	type: 'joined'
	props: {
		items: DefaultTextPart['props'][]
	}
}

export type ListTextPart = {
	type: 'list'
	props: BrokenListTextPart | JoinedListTextPart
}

export type TextPart = DefaultTextPart | ListTextPart

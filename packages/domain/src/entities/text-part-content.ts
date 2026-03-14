export type DefaultTextPartContent = {
	type: 'default'
	props: {
		value: string
	}
}

export type LinkTextPartContent = {
	type: 'link'
	props: {
		label: string
		url: string
	}
}

export type TextPartContent = DefaultTextPartContent | LinkTextPartContent

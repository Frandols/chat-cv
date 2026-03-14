import { CV, DefaultTextPart, TextPart } from '@app/domain/src/entities'
import { XMLParser } from 'fast-xml-parser'

const parser = new XMLParser({
	ignoreAttributes: false,
	preserveOrder: true,
})

function text(node: any): string {
	const content = node?.[0]?.['#text']

	return content ? `${content}` : ''
}

function attrs(node: any) {
	const a = node?.[':@'] ?? {}

	return {
		bold: a['@_bold'] ? true : undefined,
		italic: a['@_italic'] ? true : undefined,
		underline: a['@_underline'] ? true : undefined,
	} as const
}

function parseDefaultTextPart(node: any): DefaultTextPart['props'] {
	const type = Object.keys(node)[0]

	if (type === 'text') {
		return {
			content: {
				type: 'default',
				props: { value: text(node.text) },
			},
			...attrs(node),
		}
	}

	return {
		content: {
			type: 'link',
			props: {
				label: text(node.link),
				url: node[':@']['@_href'],
			},
		},
	}
}

function parseTextParts(nodes: any[]): DefaultTextPart['props'][] {
	return nodes.map(parseDefaultTextPart)
}

export function xmlToJson(xml: string): CV {
	const doc = parser.parse(xml)

	const rawCV = doc[0].cv

	const name = text(rawCV[0].name)

	const headerItems: CV['headerItems'] = rawCV[1].header.map((node: any) => {
		const type = Object.keys(node)[0]

		if (type === 'text') {
			return {
				content: {
					type: 'default',
					props: { value: text(node.text) },
				},
			}
		}

		return {
			content: {
				type: 'link',
				props: {
					label: text(node.link),
					url: node[':@']['@_href'],
				},
			},
		}
	})

	const summary = text(rawCV[2].summary)

	const items = rawCV.slice(3).map((item: any): CV['items'][number] => {
		const type = Object.keys(item)[0]

		if (type === 'heading') {
			return {
				type: 'heading',
				props: {
					title: text(item.heading),
				},
			}
		}

		if (type === 'block') {
			const parts = item.block.map((subitem: any): TextPart => {
				const subType = Object.keys(subitem)[0]

				if (subType === 'text') {
					return {
						type: 'default',
						props: {
							content: {
								type: 'default',
								props: { value: text(subitem.text) },
							},
							...attrs(subitem),
						},
					}
				}

				const listType = subitem[':@']['@_type'] as 'joined' | 'broken'

				if (listType === 'joined') {
					return {
						type: 'list',
						props: {
							type: 'joined',
							props: {
								items: subitem.list.map(({ item }: any) => ({
									content: {
										type: 'default',
										props: {
											value: text(item[0].text),
										},
									},
								})),
							},
						},
					}
				}

				return {
					type: 'list',
					props: {
						type: 'broken',
						props: {
							items: Object.values(subitem.list[0]).map((entry: any) => ({
								parts: entry.map(parseDefaultTextPart),
							})),
						},
					},
				}
			})

			return {
				type: 'text',
				props: { parts },
			}
		}

		const card = item.card

		const title = parseTextParts(card[0].title)
		const subtitle = parseTextParts(card[1].subtitle)
		const firstDetail = parseTextParts(card[2].detail)

		return {
			type: 'card',
			props: {
				underline: item[':@']?.['@_underline'] ? true : undefined,
				title,
				subtitle,
				details: [
					firstDetail,
					...(card[3] ? [parseTextParts(card[3].detail)] : []),
				],
			},
		}
	})

	return {
		name,
		summary,
		headerItems,
		items,
	}
}

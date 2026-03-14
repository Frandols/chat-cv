import { CV, DefaultTextPart } from '@app/domain/src/entities'

function partToXml(
	part: DefaultTextPart['props'],
	isLast: boolean,
	leftSpaces: number,
) {
	const content =
		part.content.type === 'default'
			? part.content.props.value
			: `<link href="${part.content.props.url}">\n` +
				`${' '.repeat(leftSpaces + 1)}${part.content.props.label}\n` +
				`${' '.repeat(leftSpaces)}</link>`

	const props = `${part.bold ? ` bold="true"` : ''}${part.italic ? ` italic="true"` : ''}${part.underline ? ` underline="true"` : ''}`

	if (props === '' && part.content.type === 'link')
		return `${' '.repeat(leftSpaces)}${content}${!isLast ? '\n' : ''}`

	return `${' '.repeat(leftSpaces)}<text${props}>${content}</text>${!isLast ? '\n' : ''}`
}

function partsToXml(
	parts: DefaultTextPart['props'][],
	leftSpaces: number,
): string {
	return `${parts
		.map((part, index) => {
			return partToXml(part, index === parts.length - 1, leftSpaces)
		})
		.join('\n')}\n`
}

export function jsonToXml(cv: CV) {
	return (
		`<cv>\n` +
		` <name>${cv.name}</name>\n` +
		`\n` +
		` <header>\n` +
		`${cv.headerItems
			.map((headerItem) => {
				if (headerItem.content.type === 'default')
					return (
						`  <text>\n` +
						`   ${headerItem.content.props.value}\n` +
						`  </text>`
					)

				return (
					`  <link href="${headerItem.content.props.url}">\n` +
					`   ${headerItem.content.props.label}\n` +
					`  </link>`
				)
			})
			.join('\n\n')}\n` +
		` </header>\n` +
		`\n` +
		` <summary>\n` +
		`  ${cv.summary}\n` +
		` </summary>\n` +
		`\n` +
		`${cv.items
			.map((item) => {
				if (item.type === 'heading')
					return ` <heading>\n` + `  ${item.props.title}\n` + ` </heading>`

				if (item.type === 'card')
					return (
						` <card${item.props.underline ? ` underline="true"` : ''}>\n` +
						`  <title>\n` +
						`${partsToXml(item.props.title, 3)}` +
						`  </title>\n\n` +
						`  <subtitle>\n` +
						`${partsToXml(item.props.subtitle, 3)}` +
						`  </subtitle>\n\n` +
						`  <detail>\n` +
						`${partsToXml(item.props.details[0], 3)}` +
						`  </detail>\n` +
						`${
							item.props.details[1]
								? `\n  <detail>\n` +
									`${partsToXml(item.props.details[1], 3)}` +
									`  </detail>\n`
								: ''
						}` +
						` </card>`
					)

				return (
					` <block>\n` +
					`${item.props.parts
						.map((itemPart, index) => {
							if (itemPart.type === 'default')
								return partToXml(
									itemPart.props,
									index === item.props.parts.length - 1,
									2,
								)

							return (
								`  <list type="${itemPart.props.type}">\n` +
								`${itemPart.props.props.items
									.map((listItemPart, index) => {
										const content =
											itemPart.props.type === 'joined'
												? partToXml(
														listItemPart as DefaultTextPart['props'],
														index === itemPart.props.props.items.length - 1,
														4,
													)
												: partsToXml(
														(
															listItemPart as {
																parts: DefaultTextPart['props'][]
															}
														).parts,
														4,
													)

										return (
											`   <item>\n` +
											`${content}${index === itemPart.props.props.items.length - 1 && itemPart.props.type === 'joined' ? '\n' : ''}` +
											`   </item>${index < itemPart.props.props.items.length - 1 ? '\n' : ''}`
										)
									})
									.join('\n')}\n` +
								`  </list>`
							)
						})
						.join('\n')}\n` +
					` </block>`
				)
			})
			.join('\n\n')}\n` +
		`</cv>`
	)
}

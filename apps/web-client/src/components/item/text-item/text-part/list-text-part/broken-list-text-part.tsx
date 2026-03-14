import type { BrokenListTextPart as BrokenListTextPartVariant } from '@app/domain/src/entities'
import { TextParts } from '..'

export default function BrokenListTextPart(
	props: BrokenListTextPartVariant['props'],
) {
	return (
		<ul className='list-disc list-inside'>
			{props.items.map((item, index) => (
				<li key={index}>
					<TextParts
						parts={item.parts.map((part) => ({
							type: 'default',
							props: part,
						}))}
					/>
				</li>
			))}
		</ul>
	)
}

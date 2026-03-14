import type { TextItem as TextItemVariant } from '@app/domain/src/entities'
import { TextParts } from './text-part'

export default function TextItem(props: TextItemVariant['props']) {
	return (
		<tr>
			<td
				colSpan={2}
				className='text-left'
			>
				<p>
					<TextParts parts={props.parts} />
				</p>
			</td>
		</tr>
	)
}

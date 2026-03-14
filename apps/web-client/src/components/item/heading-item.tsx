import type { HeadingItem as HeadingItemVariant } from '@app/domain/src/entities'

export default function HeadingItem(props: HeadingItemVariant['props']) {
	return (
		<tr className='border-b'>
			<td
				colSpan={2}
				className='text-left'
			>
				<p className='uppercase'>{props.title}</p>
			</td>
		</tr>
	)
}

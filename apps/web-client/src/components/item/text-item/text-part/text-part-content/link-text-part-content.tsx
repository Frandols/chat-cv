import type { LinkTextPartContent as LinkTextPartContentVariant } from '@app/domain/src/entities'

export default function LinkTextPartContent(
	props: LinkTextPartContentVariant['props'],
) {
	return (
		<a
			href={props.url}
			target='_blank'
			className='text-blue-600 underline'
		>
			{props.label}
		</a>
	)
}

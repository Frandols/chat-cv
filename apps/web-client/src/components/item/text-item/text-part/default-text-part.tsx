import type { DefaultTextPart as DefaultTextPartVariant } from '@app/domain/src/entities'
import { cn } from '../../../../lib/utils'
import TextPartContent from './text-part-content'

export default function DefaultTextPart(
	props: DefaultTextPartVariant['props'],
) {
	if (!props.bold && !props.italic && !props.underline)
		return <TextPartContent {...props.content} />

	return (
		<span
			className={cn(
				props.bold ? 'font-bold' : undefined,
				props.italic ? 'italic' : undefined,
				props.underline ? 'underline' : undefined,
			)}
		>
			<TextPartContent {...props.content} />
		</span>
	)
}

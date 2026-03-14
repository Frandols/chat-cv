import type { TextPart as TextPartProps } from '@app/domain/src/entities'
import DefaultTextPart from './default-text-part'
import ListTextPart from './list-text-part'

export default function TextPart({ type, props }: TextPartProps) {
	if (type === 'default') return <DefaultTextPart {...props} />

	if (type === 'list') return <ListTextPart {...props} />

	return null
}

export function TextParts({ parts }: { parts: TextPartProps[] }) {
	return parts.map((part, index) => (
		<TextPart
			key={index}
			{...part}
		/>
	))
}

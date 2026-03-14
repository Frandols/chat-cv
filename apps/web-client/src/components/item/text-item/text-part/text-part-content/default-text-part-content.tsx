import type { DefaultTextPartContent as DefaultTextPartContentVariant } from '@app/domain/src/entities'

export default function DefaultTextPartContent(
	props: DefaultTextPartContentVariant['props'],
) {
	return props.value
}

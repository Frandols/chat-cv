import type { TextPartContent } from '@app/domain/src/entities'
import DefaultTextPartContent from './default-text-part-content'
import LinkTextPartContent from './link-text-part-content'

export default function TextPartContent({ type, props }: TextPartContent) {
	if (type === 'default') return <DefaultTextPartContent {...props} />

	if (type === 'link') return <LinkTextPartContent {...props} />

	return null
}

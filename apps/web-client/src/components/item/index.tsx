import type { Item as ItemProps } from '@app/domain/src/entities'
import CardItem from './card-item'
import HeadingItem from './heading-item'
import TextItem from './text-item'

export default function Item({ type, props }: ItemProps) {
	if (type === 'heading') return <HeadingItem {...props} />

	if (type === 'card') return <CardItem {...props} />

	if (type === 'text') return <TextItem {...props} />

	return null
}

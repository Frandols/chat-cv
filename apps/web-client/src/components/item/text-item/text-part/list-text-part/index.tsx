import type { ListTextPart as ListTextPartVariant } from '@app/domain/src/entities'
import BrokenListTextPart from './broken-list-text-part'
import JoinedListTextPart from './joined-list-text-part'

export default function ListTextPart({
	type,
	props,
}: ListTextPartVariant['props']) {
	if (type === 'broken') return <BrokenListTextPart {...props} />

	if (type === 'joined') return <JoinedListTextPart {...props} />

	return null
}

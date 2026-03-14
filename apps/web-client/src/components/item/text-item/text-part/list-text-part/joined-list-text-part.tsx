import type { JoinedListTextPart as JoinedListTextPartVariant } from '@app/domain/src/entities'
import TextPart from '..'

export default function JoinedListTextPart(
	props: JoinedListTextPartVariant['props'],
) {
	return props.items.map((item, index) => {
		if (index === props.items.length - 1)
			return (
				<TextPart
					key={index}
					type='default'
					props={item}
				/>
			)

		return (
			<span key={index}>
				<TextPart
					type='default'
					props={item}
				/>
				&nbsp;·&nbsp;
			</span>
		)
	})
}

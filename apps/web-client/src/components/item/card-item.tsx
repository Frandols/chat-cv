import type { CardItem as CardItemVariant } from '@app/domain/src/entities'
import { cn } from '../../lib/utils'
import TextPart from './text-item/text-part'

export default function CardItem(props: CardItemVariant['props']) {
	return (
		<tr className={cn(props.underline ? 'border-b' : undefined)}>
			<td className='w-1/2 text-left'>
				<p>
					{props.title.map((titleParts, index) => (
						<TextPart
							key={index}
							type='default'
							props={titleParts}
						/>
					))}
				</p>

				<p>
					{props.subtitle.map((subtitleParts, index) => (
						<TextPart
							key={index}
							type='default'
							props={subtitleParts}
						/>
					))}
				</p>
			</td>

			<td className='w-1/2 text-right'>
				<p>
					{props.details[0].map((firstDetailParts, index) => (
						<TextPart
							key={index}
							type='default'
							props={firstDetailParts}
						/>
					))}
				</p>

				{props.details[1] ? (
					<p>
						{props.details[1].map((secondDetailParts, index) => (
							<TextPart
								key={index}
								type='default'
								props={secondDetailParts}
							/>
						))}
					</p>
				) : null}
			</td>
		</tr>
	)
}

import type { CV as CVProps } from '@app/domain'
import { Download } from 'lucide-react'
import { useCvScaling } from '../hooks/use-cv-scaling'
import Item from './item'
import TextPart from './item/text-item/text-part'

export default function CV(props: CVProps) {
	const { cvRef, wrapperRef, scale, handlePrint, CV_WIDTH_PX } = useCvScaling()

	return (
		<div
			ref={wrapperRef}
			className='relative w-full max-w-[210mm]'
		>
			<button
				onClick={handlePrint}
				className='absolute top-2 right-2 z-10 p-2.5 rounded-xl bg-white border border-surface-200 text-mist-700 hover:bg-surface-50 hover:border-surface-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer print:hidden'
				title='Descargar PDF'
			>
				<Download
					size={16}
					strokeWidth={2.5}
				/>
			</button>

			<div
				style={{
					transform: `scale(${scale})`,
					transformOrigin: 'top center',
					width: `${CV_WIDTH_PX}px`,
					marginLeft:
						scale < 1 ? `calc((100% - ${CV_WIDTH_PX}px) / 2)` : undefined,
				}}
			>
				<div ref={cvRef}>
					<div className='bg-white w-full min-h-[297mm] p-[1cm] text-[10.5pt] wrap-break-word'>
						<h1 className='text-center text-2xl font-bold'>{props.name}</h1>

						<table className='w-full border-collapse'>
							<tbody>
								<tr className='border-b'>
									<td
										colSpan={2}
										className='text-center'
									>
										{props.headerItems.map((item, index) => {
											if (index === props.headerItems.length - 1)
												return (
													<TextPart
														key={index}
														type='default'
														props={item}
													/>
												)

											return (
												<span
													className='whitespace-nowrap'
													key={index}
												>
													<TextPart
														type='default'
														props={item}
													/>
													&nbsp;·&nbsp;
												</span>
											)
										})}
									</td>
								</tr>

								<tr>
									<td
										colSpan={2}
										className='text-left'
									>
										<p>{props.summary}</p>
									</td>
								</tr>

								{props.items.map((item, index) => (
									<Item
										key={index}
										{...item}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

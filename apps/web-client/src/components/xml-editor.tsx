import type { CV } from '@app/domain'
import { useXmlEditor } from '../hooks/use-xml-editor'

interface XmlEditorProps {
	cv: CV
	onChangeCV: (newCV: CV) => void
}

export default function XmlEditor({ cv, onChangeCV }: XmlEditorProps) {
	const { xml, handleXmlChange } = useXmlEditor(cv, onChangeCV)

	return (
		<div className='h-full flex flex-col'>
			<div className='flex items-center justify-between px-4 py-3 border-b border-panel-border bg-panel'>
				<div className='flex items-center gap-2'>
					<div className='w-2 h-2 rounded-full bg-accent animate-pulse' />
					<span className='text-sm font-medium text-surface-300'>
						XML Editor
					</span>
				</div>
			</div>

			<textarea
				value={xml}
				onChange={handleXmlChange}
				className='flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none leading-relaxed placeholder:text-surface-400 transition-colors duration-200 bg-panel text-surface-200'
				spellCheck={false}
				placeholder='<cv>...</cv>'
			/>
		</div>
	)
}

import useCV from '../hooks/use-cv'
import CV from './cv'
import PromptInput from './prompt-input'
import XmlEditor from './xml-editor'

interface CVEditorProps {
	showXmlEditor: boolean
}

export default function CVEditor({ showXmlEditor }: CVEditorProps) {
	const {
		prompt,
		onPromptChange,
		cv,
		clearError,
		handleGenerateCV,
		handleUpdateCV,
		isLoading,
		error,
	} = useCV()

	return (
		<div className='h-full flex flex-col lg:flex-row overflow-hidden'>
			{showXmlEditor && (
				<aside className='w-full lg:w-105 xl:w-120 h-64 lg:h-full border-b lg:border-b-0 lg:border-r border-surface-200 overflow-hidden shrink-0'>
					<XmlEditor
						cv={cv}
						onChangeCV={handleUpdateCV}
					/>
				</aside>
			)}

			<div className='flex-1 flex flex-col overflow-hidden relative'>
				<div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex justify-center'>
					<CV {...cv} />
				</div>

				<div className='p-3 sm:p-4 border-t border-surface-200  backdrop-blur-sm'>
					<PromptInput
						value={prompt}
						onValueChange={onPromptChange}
						isLoading={isLoading}
						error={error}
						onClearError={clearError}
						onSubmit={handleGenerateCV}
					/>
				</div>
			</div>
		</div>
	)
}

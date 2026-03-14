import type { Item } from './item.js'
import type { DefaultTextPart } from './text-part.js'

export type CV = {
	name: string
	headerItems: DefaultTextPart['props'][]
	summary: string
	items: Item[]
}

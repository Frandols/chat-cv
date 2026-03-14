import { z } from 'zod'

export const defaultTextPartContentSchema = z.object({
	value: z.string(),
})

export const linkTextPartContentSchema = z.object({
	label: z.string(),
	url: z.url(),
})

export const textPartContentSchema = z.discriminatedUnion('type', [
	z.object({
		type: z.literal('default'),
		props: defaultTextPartContentSchema,
	}),
	z.object({
		type: z.literal('link'),
		props: linkTextPartContentSchema,
	}),
])

export const defaultTextPartSchema = z.object({
	content: textPartContentSchema,
	bold: z.literal(true).optional(),
	italic: z.literal(true).optional(),
	underline: z.literal(true).optional(),
})

export const joinedListTextPartSchema = z.object({
	items: z.array(defaultTextPartSchema),
})

export const brokenListTextPartSchema = z.object({
	items: z.array(
		z.object({
			parts: z.array(defaultTextPartSchema),
		}),
	),
})

export const listTextPartSchema = z.discriminatedUnion('type', [
	z.object({
		type: z.literal('broken'),
		props: brokenListTextPartSchema,
	}),
	z.object({
		type: z.literal('joined'),
		props: joinedListTextPartSchema,
	}),
])

export const textPartSchema = z.discriminatedUnion('type', [
	z.object({
		type: z.literal('default'),
		props: defaultTextPartSchema,
	}),
	z.object({
		type: z.literal('list'),
		props: listTextPartSchema,
	}),
])

export const headingItemSchema = z.object({
	title: z.string(),
})

export const cardItemSchema = z.object({
	title: z.array(defaultTextPartSchema),
	subtitle: z.array(defaultTextPartSchema),
	details: z
		.tuple([z.array(defaultTextPartSchema)])
		.rest(z.array(defaultTextPartSchema)),
	underline: z.literal(true).optional(),
})

export const textItemSchema = z.object({
	parts: z.array(textPartSchema),
})

export const itemSchema = z.discriminatedUnion('type', [
	z.object({
		type: z.literal('heading'),
		props: headingItemSchema,
	}),
	z.object({
		type: z.literal('card'),
		props: cardItemSchema,
	}),
	z.object({
		type: z.literal('text'),
		props: textItemSchema,
	}),
])

export const cvSchema = z.object({
	name: z.string(),
	headerItems: z.array(defaultTextPartSchema),
	summary: z.string(),
	items: z.array(itemSchema),
})

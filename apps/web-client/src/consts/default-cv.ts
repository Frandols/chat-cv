import type { CV } from '@app/domain/src/entities'

const defaultCV: CV = {
	name: 'Alex Carter',
	headerItems: [
		{
			content: {
				type: 'default',
				props: {
					value: 'Austin, Texas',
				},
			},
		},
		{
			content: {
				type: 'link',
				props: {
					label: 'LinkedIn',
					url: 'https://linkedin.com/in/alexcarter',
				},
			},
		},
		{
			content: {
				type: 'link',
				props: {
					label: 'GitHub',
					url: 'https://github.com/alexcarter',
				},
			},
		},
		{
			content: {
				type: 'default',
				props: {
					value: '+1 512 555 0183',
				},
			},
		},
		{
			content: {
				type: 'default',
				props: {
					value: 'alex.carter@email.com',
				},
			},
		},
	],
	summary:
		'Software Developer with experience building web applications and backend services. Skilled in modern JavaScript frameworks and scalable backend architectures. Passionate about creating reliable products, writing maintainable code, and collaborating with teams to deliver high-quality software.',
	items: [
		{
			type: 'text',
			props: {
				parts: [
					{
						type: 'default',
						props: {
							content: {
								type: 'default',
								props: {
									value: 'Technical Skills',
								},
							},
							underline: true,
						},
					},
					{
						type: 'default',
						props: {
							content: {
								type: 'default',
								props: {
									value: ': ',
								},
							},
						},
					},
					{
						type: 'list',
						props: {
							type: 'joined',
							props: {
								items: [
									{
										content: {
											type: 'default',
											props: {
												value: 'JavaScript',
											},
										},
									},
									{
										content: {
											type: 'default',
											props: {
												value: 'React',
											},
										},
									},
									{
										content: {
											type: 'default',
											props: {
												value: 'Node.js',
											},
										},
									},
								],
							},
						},
					},
				],
			},
		},
		{
			type: 'heading',
			props: {
				title: 'Professional Experience',
			},
		},
		{
			type: 'card',
			props: {
				underline: true,
				title: [
					{
						content: {
							type: 'default',
							props: { value: 'Software Developer' },
						},
						bold: true,
					},
				],
				subtitle: [
					{
						content: {
							type: 'link',
							props: {
								label: 'TechNova Solutions',
								url: 'https://technova.example.com',
							},
						},
					},
				],
				details: [
					[
						{
							content: {
								type: 'default',
								props: { value: 'Remote' },
							},
							bold: true,
						},
					],
					[
						{
							content: {
								type: 'default',
								props: { value: 'Jan 2023 - Present' },
							},
							italic: true,
						},
					],
				],
			},
		},
		{
			type: 'text',
			props: {
				parts: [
					{
						type: 'default',
						props: {
							content: {
								type: 'default',
								props: {
									value:
										'Worked as part of a development team building internal web tools and client-facing applications.',
								},
							},
						},
					},
				],
			},
		},
		{
			type: 'text',
			props: {
				parts: [
					{
						type: 'default',
						props: {
							content: {
								type: 'default',
								props: {
									value: 'Key Achievements:',
								},
							},
							underline: true,
						},
					},
					{
						type: 'list',
						props: {
							type: 'broken',
							props: {
								items: [
									{
										parts: [
											{
												content: {
													type: 'default',
													props: {
														value:
															'Developed and maintained web applications used by internal teams to manage business operations.',
													},
												},
											},
										],
									},
								],
							},
						},
					},
				],
			},
		},
		{
			type: 'text',
			props: {
				parts: [
					{
						type: 'default',
						props: {
							content: {
								type: 'default',
								props: {
									value: 'Technologies Used',
								},
							},
							underline: true,
						},
					},
					{
						type: 'default',
						props: {
							content: {
								type: 'default',
								props: {
									value: ': ',
								},
							},
						},
					},
					{
						type: 'list',
						props: {
							type: 'joined',
							props: {
								items: [
									{
										content: {
											type: 'default',
											props: {
												value: 'React',
											},
										},
									},
									{
										content: {
											type: 'default',
											props: {
												value: 'Node.js',
											},
										},
									},
								],
							},
						},
					},
				],
			},
		},
		{
			type: 'heading',
			props: {
				title: 'Projects',
			},
		},
		{
			type: 'card',
			props: {
				underline: true,
				title: [
					{
						content: {
							type: 'default',
							props: { value: 'TaskFlow' },
						},
						bold: true,
					},
					{
						content: {
							type: 'default',
							props: {
								value: ' — ',
							},
						},
					},
					{
						content: {
							type: 'default',
							props: {
								value: '2024',
							},
						},
						italic: true,
					},
				],
				subtitle: [
					{
						content: {
							type: 'default',
							props: { value: 'Node.js, PostgreSQL, React' },
						},
					},
				],
				details: [
					[
						{
							content: {
								type: 'link',
								props: {
									label: 'taskflow.example.com',
									url: 'https://taskflow.example.com',
								},
							},
						},
					],
					[
						{
							content: {
								type: 'link',
								props: {
									label: 'github.com/alexcarter/taskflow',
									url: 'https://github.com/alexcarter/taskflow',
								},
							},
						},
					],
				],
			},
		},
		{
			type: 'text',
			props: {
				parts: [
					{
						type: 'default',
						props: {
							content: {
								type: 'default',
								props: {
									value:
										'A simple project management application that helps teams organize tasks and track progress.',
								},
							},
						},
					},
				],
			},
		},
		{
			type: 'heading',
			props: {
				title: 'Education',
			},
		},
		{
			type: 'card',
			props: {
				title: [
					{
						content: {
							type: 'default',
							props: { value: 'Bachelor of Computer Science' },
						},
						bold: true,
					},
				],
				subtitle: [
					{
						content: {
							type: 'default',
							props: { value: 'State University' },
						},
					},
				],
				details: [
					[
						{
							content: {
								type: 'default',
								props: { value: '2019 - 2023' },
							},
							italic: true,
						},
					],
				],
			},
		},
		{
			type: 'heading',
			props: {
				title: 'Courses & Certifications',
			},
		},
		{
			type: 'text',
			props: {
				parts: [
					{
						type: 'list',
						props: {
							type: 'broken',
							props: {
								items: [
									{
										parts: [
											{
												content: {
													type: 'default',
													props: {
														value: 'Modern Web Development',
													},
												},
											},
										],
									},
								],
							},
						},
					},
				],
			},
		},
		{
			type: 'heading',
			props: {
				title: 'Languages',
			},
		},
		{
			type: 'text',
			props: {
				parts: [
					{
						type: 'list',
						props: {
							type: 'broken',
							props: {
								items: [
									{
										parts: [
											{
												content: {
													type: 'default',
													props: {
														value: 'English — Fluent',
													},
												},
											},
										],
									},
								],
							},
						},
					},
				],
			},
		},
		{
			type: 'heading',
			props: {
				title: 'Soft Skills',
			},
		},
		{
			type: 'text',
			props: {
				parts: [
					{
						type: 'list',
						props: {
							type: 'broken',
							props: {
								items: [
									{
										parts: [
											{
												content: {
													type: 'default',
													props: {
														value: 'Team Collaboration',
													},
												},
												underline: true,
											},
											{
												content: {
													type: 'default',
													props: {
														value: ': ',
													},
												},
											},
											{
												content: {
													type: 'default',
													props: {
														value:
															'Comfortable working with multidisciplinary teams and communicating technical ideas clearly.',
													},
												},
											},
										],
									},
								],
							},
						},
					},
				],
			},
		},
	],
}

export default defaultCV

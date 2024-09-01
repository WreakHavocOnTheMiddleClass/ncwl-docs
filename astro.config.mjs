import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://WreakHavocOnTheMiddleClass.github.io',
	base: 'ncwl-docs',
	integrations: [
		starlight({
			title: 'NCWL Docs',
			sidebar: [
				"introductory-guide",
				{
					label: 'Shipyard',
					autogenerate: { directory: 'shipyard' },
				},
			],
			components: {
				MarkdownContent: './src/components/MarkdownContent.astro',
			},
			customCss: ['./src/styles/custom.css']
		}),
	],
});
// contentlayer.config.ts
import { defineDocumentType, makeSource } from '@contentlayer/source-files'


export const Blog = defineDocumentType(() => ({
    name: 'Blog',
  filePathPattern: "blogs/*.mdx",
  fields: {
    title: { type: 'string', required: true },
	  date: { type: 'date', required: true },
	  published: { type: 'boolean', required: false },
    },
  computedFields: {
    url: {
		type: "string",
		resolve: (doc) => {
			return `/${doc._raw.flattenedPath}`;
		},
	},
	slug: {
		type: "string",
		resolve: (doc) => {	
			return `${doc._raw.flattenedPath.split("/").slice(1).join("/")}`;
		},
	},
},
}))

export default makeSource({ contentDirPath: './content', documentTypes: [Blog] })
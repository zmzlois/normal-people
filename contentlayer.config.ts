// contentlayer.config.ts
import { defineDocumentType, makeSource } from '@contentlayer/source-files'


export const Blog = defineDocumentType(() => ({
    name: 'Blog',
 
  filePathPattern: "./blogs/**/*.mdx",
  fields: {
    title: { type: 'string', required: true },
      date: { type: 'date', required: true },
    
    },
  
  computedFields: {
    url: {
		type: "string",
		resolve: (doc) => {
			if (!doc._raw || !doc._raw.flattenedPath) {
				return null;
			}

			return `/${doc._raw.flattenedPath}`;
		},
	},
	slug: {
		type: "string",
		resolve: (doc) => {
			if (!doc._raw || !doc._raw.flattenedPath) {
				return null;
			}

			return doc._raw.flattenedPath.split("/").slice(1).join("/");
		},
	},
},
}))

export default makeSource({ contentDirPath: './content', documentTypes: [Blog] })
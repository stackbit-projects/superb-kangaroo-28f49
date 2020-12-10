export default {
    "type": "document",
    "name": "post",
    "title": "Post",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the post",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The text shown just below the title or the featured image",
            "validation": null
        },
        {
            "type": "date",
            "name": "date",
            "title": "Date",
            "validation": Rule => Rule.required()
        },
        {
            "type": "reference",
            "name": "author",
            "title": "Author",
            "description": "Post author",
            "validation": null,
            "to": [
                {
                    "type": "person"
                }
            ]
        },
        {
            "type": "string",
            "name": "excerpt",
            "title": "Excerpt",
            "description": "The excerpt of the post displayed in the blog feed",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Featured Image",
            "description": "The image shown below the title",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Featured Image Alt Text",
            "description": "The alt text of the featured image",
            "validation": null
        },
        {
            "type": "image",
            "name": "thumb_image",
            "title": "Blog Feed Image",
            "description": "The image shown in the blog feed",
            "validation": null
        },
        {
            "type": "string",
            "name": "thumb_image_alt",
            "title": "Blog Feed Image Alt Text",
            "description": "The alt text of the blog feed image",
            "validation": null
        },
        {
            "type": "string",
            "name": "meta_title",
            "title": "Meta title",
            "description": "The meta title of the post (recommended length is 50–60 characters)",
            "validation": null
        },
        {
            "type": "string",
            "name": "meta_description",
            "title": "Meta description",
            "description": "The meta description of the post (recommended length is 50–160 characters)",
            "validation": null
        },
        {
            "type": "string",
            "name": "canonical_url",
            "title": "Canonical URL",
            "description": "The canonical url of the post",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "no_index",
            "title": "No Index",
            "description": "Tell search engines not to index this post",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "post"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}
export default {
    "type": "object",
    "name": "action",
    "title": "Action",
    "fields": [
        {
            "type": "string",
            "name": "label",
            "title": "Label",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "url",
            "title": "URL",
            "validation": Rule => Rule.required()
        },
        {
            "type": "boolean",
            "name": "primary",
            "title": "Primary",
            "description": "Use primary color for this action",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "new_window",
            "title": "Open in new window",
            "description": "Should the link open a new tab",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "no_follow",
            "title": "No follow",
            "description": "Add rel=\"nofollow\" attribute to the link",
            "validation": null
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "action"
                ]
            }
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
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "label"
        }
    }
}
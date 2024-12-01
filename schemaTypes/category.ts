import { defineField, defineType } from 'sanity'

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [{
        name: 'name',
        type: 'string',
        title: 'Category',
        validation: rule => rule.required()
    },
    {
        name: 'description',
        type: 'string',
        title: 'Category description',
        validation: rule => rule.required()
    },
    {
        name: 'image',
        type: 'image',
        title: 'image of category',
    },
    ],
})
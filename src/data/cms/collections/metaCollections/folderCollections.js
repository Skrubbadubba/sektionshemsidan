const widgets = Object.values(import.meta.glob(['./widgets/*', '!**/widgets/commonOptions.js'], {eager:true, import:'default'}))
import commonOptions from './commonCollectionOptions'

const collection = {
  name: "folder_collections",
  label: "Folder collections",
  label_singular: "collection",
  create: true,
  extension: "json",
  identifier_field: "name",
  summary: "{{label}}",
  folder: "src/data/cms/collections/folder",
  fields: [
  {
    name: "folder",
    widget: "string",
    required: false
  },
  ...commonOptions,
  {
    name: "create",
    widget: "boolean",
    default: false
  },
  {
    name: "delete",
    widget: "boolean",
    default: true
  },
  {
    name: "filter",
    widget: "object",
    collapsed: true,
    fields: [
      {
        name: "field",
        widget: "string"
      },
      {
        name: "value",
        widget: "string"
      }
    ],
    required: false
  },
  {
    name: "fields",
    label_singular: "field",
    widget: "list",
    add_to_top: false,
    type_key: "widget",
    types: widgets,
    required: false
  }
  ]
}
export default collection

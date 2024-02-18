/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  // remove
  collection.schema.removeField("ytqy0rbn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ytqy0rbn",
    "name": "department",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Marketing",
        "Sales",
        "Engineering"
      ]
    }
  }))

  return dao.saveCollection(collection)
})

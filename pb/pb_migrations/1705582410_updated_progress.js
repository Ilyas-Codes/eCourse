/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p3zwlmhocgdrly")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ofhioiwz",
    "name": "course",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7jo5p6lzwwht0s5",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p3zwlmhocgdrly")

  // remove
  collection.schema.removeField("ofhioiwz")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x0j4d4zz",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x0j4d4zz",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 1000,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})

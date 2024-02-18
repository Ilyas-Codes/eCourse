/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b36lt0a0v5anqh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "plloys8j",
    "name": "downloads",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "maxSize": 2147483648,
      "mimeTypes": [],
      "thumbs": [],
      "protected": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b36lt0a0v5anqh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "plloys8j",
    "name": "downloads",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "maxSize": 2147483648,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})

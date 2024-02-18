/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b36lt0a0v5anqh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cjtumftq",
    "name": "video",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "video/mp4",
        "video/x-ms-wmv",
        "video/quicktime",
        "video/3gpp"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 2147483648,
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
    "id": "cjtumftq",
    "name": "video",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "video/mp4",
        "video/x-ms-wmv",
        "video/quicktime",
        "video/3gpp"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 2147483648,
      "protected": true
    }
  }))

  return dao.saveCollection(collection)
})

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
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bidfp7ks",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 10485760,
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "giyugoaq",
    "name": "captions",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "text/vtt"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "plloys8j",
    "name": "downloads",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 10,
      "maxSize": 2147483648,
      "protected": false
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bidfp7ks",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 10485760,
      "protected": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "giyugoaq",
    "name": "captions",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "text/vtt"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "plloys8j",
    "name": "downloads",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 10,
      "maxSize": 2147483648,
      "protected": true
    }
  }))

  return dao.saveCollection(collection)
})

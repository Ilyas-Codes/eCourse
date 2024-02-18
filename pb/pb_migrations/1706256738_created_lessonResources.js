/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cflmwtgulbeuubc",
    "created": "2024-01-26 08:12:18.347Z",
    "updated": "2024-01-26 08:12:18.347Z",
    "name": "lessonResources",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wndfjyrc",
        "name": "lesson",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "b36lt0a0v5anqh3",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "cqlkaxpp",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5g0kvpay",
        "name": "link",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id != \"\" && lesson.course.assignees.id ?= @request.auth.id",
    "viewRule": "@request.auth.id != \"\" && lesson.course.assignees.id ?= @request.auth.id",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cflmwtgulbeuubc");

  return dao.deleteCollection(collection);
})

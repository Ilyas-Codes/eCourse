/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ysmth6sfdopg06j");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ysmth6sfdopg06j",
    "created": "2024-01-15 11:37:47.573Z",
    "updated": "2024-01-15 15:51:00.421Z",
    "name": "statuses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fntzr9pu",
        "name": "module",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "7jo5p6lzwwht0s5",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "n4znobsv",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "kscipci4",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Not Started",
            "In Progress",
            "Completed"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": "user.id = @request.data.id",
    "viewRule": "user.id = @request.data.id",
    "createRule": null,
    "updateRule": "user.id = @request.data.id",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})

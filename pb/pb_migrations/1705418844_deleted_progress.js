/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3f6klc5cfogwc8h");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "3f6klc5cfogwc8h",
    "created": "2024-01-16 15:17:13.582Z",
    "updated": "2024-01-16 15:17:13.582Z",
    "name": "progress",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vgvlrxi3",
        "name": "course",
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
        "id": "dbxyqmnq",
        "name": "assignee",
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
        "id": "l2agyryl",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})

from pymongo import MongoClient
from bson.objectid import ObjectId

class GatewayBase():
    def __init__(self, table):
        self.mongo_client = MongoClient()
        self.current_table = self.mongo_client['FrontInFloripa'][table]

    def get_all(self):
        return self.current_table.find()

    def get_by_id(self, register_id):
        return self.current_table.find_one({'_id': ObjectId(register_id)})

    def get_by_objectid(self, object_id):
        return self.current_table.find_one({'_id': object_id})

    def add(self, new_record):
        return self.current_table.save(new_record)

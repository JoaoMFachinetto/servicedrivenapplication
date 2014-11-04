class RecordAlreadyExistsException(Exception):
    def __init__(self, record):
        Exception.__init__(self, 'Record already exists in the database.')
        self.record = record

class RecordNotFoundException(Exception):
    def __init__(self):
        Exception.__init__(self, 'Record not found in the database.')

class PasswordInvalidException(Exception):
    def __init__(self):
        Exception.__init__(self, 'The password is invalid.')
        self.record = record

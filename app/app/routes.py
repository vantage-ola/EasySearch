from app import app

@app.route('/', methods=['GET'])
def get_data():
    return "Hello, World"

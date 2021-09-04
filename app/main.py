import routes
from app import app
from models import db

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask


app = Flask(__name__)
#app.config.from_object(Config)

from app import routes


app.run(debug=True)  #Development Server
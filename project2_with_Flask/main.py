from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:7000@localhost/demoDB"
db = SQLAlchemy(app)

# Define db model.
class Customers(db.Model):
    __tablename__ = "customers"
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(120))
    lastname = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True)
    total = db.Column(db.Integer)

    def __init__(self, firstname, lastname, email, total):
        self.email = email
        self.firstname = firstname
        self.lastname = lastname
        self.total = total

# homepage when application is ran
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/shop")
def shop():
    return render_template("shop_all.html")

@app.route("/cart")
def cart():
    return render_template("cart.html")

@app.route("/cart", methods=["POST"])
def checkout():
    if request.method == "POST":
        firstname = request.form["fname"]
        lastname = request.form["lname"]
        email = request.form["email_name"]
        total = float(request.form["total_cost"])

        data = Customers(firstname, lastname, email, total)
        db.session.add(data)
        db.session.commit()

    return render_template("success.html")

if __name__ == "__main__":
    # app.run(debug=True)
    app.run(host="0.0.0.0", debug=True)

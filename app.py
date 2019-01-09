import os
from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy


project_dir = os.path.dirname(os.path.abspath(__file__))
database_file = "sqlite:///{}".format(os.path.join(project_dir, "bookdatabase.db"))

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = database_file

db = SQLAlchemy(app)


class Item(db.Model):
    item = db.Column(db.String(80), unique=True, nullable=False, primary_key=True)

    def __repr__(self):
        return "<To-Do Item: {}>".format(self.title)


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.form:
        try:
            item = Item(item=request.form.get('item'))
            db.session.add(item)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            print('unable to add item!')
            print(e)

    items = Item.query.all()
    return render_template('home.html', items=items)


@app.route('/delete', methods = ['POST'])
def delete():
    item = request.form.get('item')
    dbitem = Item.query.filter_by(item=item).first()
    db.session.delete(dbitem)
    db.session.commit()

    return redirect('/')


if __name__== "__main__":
    app.run(debug=True)
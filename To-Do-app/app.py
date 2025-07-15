from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#konfiguraatio SQLAlchemyyn
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
db = SQLAlchemy(app)

#ToDoItem, tietokannan taulukko ja yksittäiset tehtävät
class ToDoItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    completed = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<ToDoItem {self.id}>'
    
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        #luo uusi ToDoItem objekti ja lisää tietokantaan
        content = request.form['content']
        if content.strip() != '':
            new_item = ToDoItem(content=content)
            db.session.add(new_item)
            db.session.commit()
        return redirect('/')
    else:
        #listaa objektit tietokannasta
        items = ToDoItem.query.all()
        return render_template('index.html', items=items)
    
@app.route('/complete/<int:item_id>')
def complete(item_id):
    #hae ToDoItem id avulla, merkitse tehdyksi
    item = ToDoItem.query.get_or_404(item_id)
    item.completed = True
    db.session.commit()
    return redirect('/')

@app.route('/delete/<int:item_id>')
def delete(item_id):
    #hae ToDoItem id avulla, poistaa
    item = ToDoItem.query.get_or_404(item_id)
    db.session.delete(item)
    db.session.commit()
    return redirect('/')

if __name__ == '__main__':
    #luo tietokanta taulukko
    with app.app_context():
        db.create_all()
    app.run(debug=True)
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
  return render_template('index.html')

@app.route('/yoman')
def yo_man():
  return render_template('yo.html')

if __name__ == '__main__':
  app.run(debug=True)
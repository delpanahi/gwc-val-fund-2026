from flask import Flask, request, render_template

app = Flask(__name__)

# Route for serving the main letter page
# Route for the "open letter" page
@app.route("/")
def home():
    return render_template("openletter.html")  # First page prompts to open a letter


# Route for the "love note" page
@app.route("/lovenote")
def lovenote():
    return render_template("index.html")  # Different content and animations




if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)


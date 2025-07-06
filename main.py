from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")  # looks in templates/

if __name__ == "__main__":
    # Render / Replit set an env var called PORT.
    port = int(os.environ.get("PORT", 3000))
    app.run(host="0.0.0.0", port=port)

from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    # Render and Replit both respect PORT env, default to 3000 locally
    port = int(os.environ.get("PORT", 3000))
    app.run(host="0.0.0.0", port=port)

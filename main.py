from flask import Flask, render_template
import os

app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/healthz")
def health():
    return "ok", 200

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    app.run(host="0.0.0.0", port=port)

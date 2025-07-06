<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Fun Interactive Periodic Table</title>

  <!-- Flask will expand these to /static/… -->
  <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
  <h1>🧪 Fun Interactive Periodic Table 🧪</h1>

  <!-- element grid -->
  <div id="table"></div>

  <!-- pop-up card -->
  <div id="popup" class="hidden" role="dialog" aria-modal="true">
    <span id="close" aria-label="Close" tabindex="0">×</span>

    <!-- ✨ Kid/Adult mode buttons inside the popup -->
    <div id="mode-buttons">
      <button id="kidMode"  class="active">Kid Facts</button>
      <button id="adultMode">Adult Data</button>
    </div>

    <h2 id="symbol"></h2>
    <p  id="name"></p>
    <p  id="funfact"></p>
  </div>

  <!-- JS -->
  <script src="{{ url_for('static', filename='script.js') }}"></script>
</body>
</html>


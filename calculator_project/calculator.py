import webview
import os

html_file = os.path.abspath("index.html")
webview.create_window("Animated Neumorphic Calculator", html_file, width=400, height=600)
webview.start()

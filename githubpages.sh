#!/bin/bash
webpack -p --output-path docs
git add .
git commit -m "Commiting For Production On GitHub Pages"
git push origin master
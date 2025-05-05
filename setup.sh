#!/bin/bash
yes | npx create-next-app@latest lovable-groq-app \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git

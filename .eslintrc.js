module.exports = {
    "extends": [
      "airbnb",
      "prettier",
      "prettier/react"
    ],
    "plugins": [
      "prettier"
    ],
    "env": {
      "browser": true,
      "jest": true,
      "node": true
    },
    "settings": {
      "import/resolver": {
        "node": {
          "paths": [
            "src"
          ]
        }
      }
    },
    "parser": "babel-eslint",
    "rules": {
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "no-use-before-define": 0,
      "newline-after-var": 2,
      "react/no-multi-comp": 0,
      "template-curly-spacing": 0,
      "no-underscore-dangle": [
        "error",
        {
          "allowAfterThis": true
        }
      ],
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [
            ".js"
          ]
        }
      ],
      "prettier/prettier": [
        "error",
        {
          "trailingComma": "es5",
          "singleQuote": true,
          "printWidth": 120
        }
      ]
    }
  }
  
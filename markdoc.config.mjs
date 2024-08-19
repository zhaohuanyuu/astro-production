import shiki from "@astrojs/markdoc/shiki"
import { defineMarkdocConfig } from "@astrojs/markdoc/config"


export default defineMarkdocConfig({
  extends: [
    shiki({
      theme: "one-dark-pro"
    })
  ]
})

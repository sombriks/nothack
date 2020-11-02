import serve from "rollup-plugin-serve"
import copy from "rollup-plugin-copy"
import livereload from "rollup-plugin-livereload"
import sass from "rollup-plugin-sass"

export default {
  input: "src/main.js",
  output: {
    file: "docs/bundle.js"
  },
  watch: true,
  plugins: [
    serve({
      contentBase: "docs"
    }),
    copy({
      targets: [
        { src: "public/**", dest: "docs" }
      ]
    }),
    livereload(),
    sass({output: true})
  ]
}

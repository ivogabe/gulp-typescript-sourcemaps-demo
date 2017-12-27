# Demo for sourcemaps in gulp-typescript without inlining sources

Configuring the paths for sourcemaps can be a pain. This repo has examples that show how source maps can be configured with relative paths and no inlined sources. See `gulpfile.js` for the examples.

Sourcemaps of files in subdirectories are also working properly. This can be seen by running `gulp default`, `gulp outdir` or `gulp tsconfig` and opening `index.html` in a browser that supports source maps.

The basic rule is:

- If you don't provide the `outDir` option to TypeScript, the `sourceRoot` option of gulp-sourcemaps should be the relative path from the `gulp.dest` path to the source directory (from `gulp.src`)
- If you set the `outDir` option to the same value as the directory in `gulp.dest`, you should set the `sourceRoot` to `./`.
- If you set the `outDir` option to a different value, there is no easy rule to configure gulp-sourcemaps. I'd advise to change the value of outDir if possible.

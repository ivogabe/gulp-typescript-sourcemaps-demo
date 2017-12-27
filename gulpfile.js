const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const project = ts.createProject('./src/tsconfig.json');

gulp.task('default', () => {
	return gulp.src('src/**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(ts())
		.pipe(sourcemaps.write('.', { sourceRoot: '../src', includeContent: false }))
		.pipe(gulp.dest("dist"));
});

gulp.task('outdir', () => {
	return gulp.src('src/**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(ts({ outDir: 'dist' }))
		.pipe(sourcemaps.write('.', { sourceRoot: './', includeContent: false }))
		.pipe(gulp.dest("dist"));
});

// Note: The tsconfig.json file has set the `outDir` field, so the setup is almost the same
// as the `outdir` example. If your tsconfig.json file has no `outDir`, your setup should be
// similar to the first example.
gulp.task('tsconfig', () => {
	return project.src()
		.pipe(sourcemaps.init())
		.pipe(project())
		.pipe(sourcemaps.write('.', { sourceRoot: './', includeContent: false }))
		.pipe(gulp.dest("dist"));
});

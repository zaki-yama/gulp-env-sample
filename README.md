Compare node-env-file and gulp-env
==================================

gulp タスクで `.env` に記載した環境変数を使うために [gulp-env](https://www.npmjs.com/package/gulp-env) と [node-env-file](https://www.npmjs.com/package/node-env-file) を比較したサンプル。

## Installation & Usage

```zsh
$ npm install
```

```zsh
### node-env-file の場合
$ gulp node-env-file
[21:51:19] Starting 'node-env-file'...
foo
[21:51:19] Finished 'node-env-file' after 139 μs

# コマンド実行時に上書きできる
$ FOO=hoge gulp node-env-file
[21:51:23] Starting 'node-env-file'...
hoge
[21:51:23] Finished 'node-env-file' after 160 μs

### gulp-env の場合
$ gulp gulp-env
[21:51:02] Starting 'gulp-env'...
bar
[21:51:02] Finished 'gulp-env' after 137 μs

# コマンド実行時に上書きできない
$ BAR=hoge gulp gulp-env
[21:50:48] Starting 'gulp-env'...
bar
[21:50:48] Finished 'gulp-env' after 134 μs
```

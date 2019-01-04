set -e

at_exit() {
  error_code=$?
  [ $error_code -eq 0 ] || echo "Aborted with error code $error_code"
  exit $error_code
}
trap 'at_exit' 0
(
  cd "$(dirname "$0")"/..
  [ -d "tmp" ] || mkdir tmp

  echo RuboCop...
  bundle exec rubocop --parallel

  echo ESLint...
  yarn run lint
)

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
  cd backend
  bundle exec rubocop --parallel

  cd ../client
  echo ESLint...
  yarn run lint
)

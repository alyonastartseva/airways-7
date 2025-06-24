export default {
  '**/*.{ts,tsx}': [() => 'tsc --noEmit', 'eslint --fix --max-warnings 0', 'prettier --write'],
  '*.{js,jsx}': ['eslint --fix --max-warnings 0', 'prettier --write'],
  '*.{css,scss}': ['stylelint --fix', 'prettier --write'],
};

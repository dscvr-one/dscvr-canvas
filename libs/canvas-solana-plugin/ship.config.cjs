module.exports = {
  installCommand: () => 'npm ci --prefer-offline --no-audit',
  buildCommand: () => 'npm run build',
  publishCommand: ({ defaultCommand, tag }) =>
    `${defaultCommand} --access public`,
};

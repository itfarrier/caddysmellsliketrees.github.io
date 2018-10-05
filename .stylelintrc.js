module.exports = {
    extends: ['stylelint-config-idiomatic-order', 'stylelint-config-recommended-scss'],
    plugins: 'stylelint-images',
    rules: {
        'images/broken': true,
        'images/prefer-data-uri': 256,
    },
};

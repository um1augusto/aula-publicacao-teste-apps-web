module.exports = [
    {
      files: ['**/*.js'],
      rules: {
        'no-console': 'error', // Erro em console.log
        'eqeqeq': 'error', // Proíbe ==
        'curly': 'error', // Exige chaves em todos os blocos
        'semi': ['error', 'always'], // Exige ponto e vírgula
        'quotes': ['error', 'single'], // Apenas aspas simples
        'indent': ['error', 2], // Indentação de 2 espaços
        'no-var': 'error', // Proíbe uso de var
        'prefer-const': 'error', // Prefere const ao invés de let
        'arrow-spacing': 'error', // Espaçamento em arrow functions
        'comma-dangle': ['error', 'always-multiline'], // Vírgula no final de objetos/arrays multilinha
      },
    },
  ];
    
module.exports = [
    {
      files: ['**/*.js'],
      rules: {
        'no-console': 'warn', // Gera um aviso para console.log
        'eqeqeq': 'error',    // Exige o uso de === e !==
        'curly': 'error',     // Exige uso de chaves para todos os blocos
        'semi': ['error', 'always'], // Exige ponto e vírgula
        'quotes': ['error', 'single'], // Força o uso de aspas simples
        'indent': ['error', 2], // Exige indentação de 2 espaços
      },
      ignores: ['**/node_modules/**'], // Ignorar a pasta node_modules
    },
  ];
    
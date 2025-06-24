// postcss.config.js (na raiz do projeto, ao lado de angular.json, package.json, etc.)
module.exports = {
  plugins: [
    require('postcss-preset-env'), // Garante que features CSS modernas sejam compatíveis
    require('@fullhuman/postcss-purgecss')({
      // Caminhos para os arquivos que contêm classes CSS usadas
      // O './src/**/*.html' e './src/**/*.ts' geralmente cobrem a maioria dos projetos Angular
      content: [
        './src/**/*.html',
        './src/**/*.ts',
      ],
      // Extrator padrão para encontrar classes. O padrão é bom para a maioria dos casos.
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      // Lista de classes que você NÃO quer que o PurgeCSS remova, mesmo que não as encontre no HTML/TS.
      // Isso é comum para classes de bibliotecas (Material, CDK), ou classes adicionadas via JS dinamicamente.
      safelist: [
        /^cdk-/,    // Ex: classes do Angular CDK
        /^mat-/,    // Ex: classes do Angular Material
        /highlight/, // Ex: uma classe que você adiciona para destaque via JS
        // Adicione outras classes ou padrões regex aqui se perceber que algo está faltando no CSS final
      ],
      // Importante: Desabilite o PurgeCSS para builds de desenvolvimento para facilitar o debug
      // Ele só deve rodar em builds de produção para otimização de tamanho
      keyframes: true, // Otimiza também keyframes CSS
    }),
  ],
};

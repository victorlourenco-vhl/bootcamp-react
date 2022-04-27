# Bootcamp React - Carrefour Web Developer
## Webpack 
- É um module bundler(um empacotaor de módulos para aplicações JS)
- Gerar bundler que será utilizado no HTML, em ES5

### Souporte 
- Fontes
- CSS
- Imagens
- HTML
- JS
- Plugins

### Configuração:
- Entry - utilizado grafo, o Webpack precisa de um ponto de entrada
- Output - É para determinar quais são os bundlers que ele irá emitir
- Loaders - Gerencia arquivos
- Plugins - São utilizados para otimização de pacotes, minificação, injeção de scripts...
- Mode - Configuração zero(production, development ou none)
- Developmente - É executado com 3 plugins(UglifyJsPlugin, ModuleConcatenationPlugin e NoEmitOnErrosPlugin)

### Criação do arquivo de webpack.config.JS
- npm i -D webpack webpack-cli "build": "webpack --mode production"
    - npm i -D webpack webpack-cli
    - npm install --save-dev webpack webpack-cli
- npm i @babel/core babel-loader @babel/present-env @babel/preset-react --save-dev
## Stateful: usa estados
- Ciclo de vida (Initialization, Mounting, Updation, Unmounting)

## Stateless: Não usa estados
- Não possoui gerenciamento de estados no componente
- Construídos usando funções em JS

## Formulários: Mantém um estado interno
- Componente controlado
    - Select, input ou textarea aceitam um atributo value
    - Podemos mudar esse valor usando o atributo onChange

- Componente não controlado
    - A tag input é read-only

- Bibliotecas
    - Formik
    - Redux-forms

## Flux
- Padrão de projeto para tráfego unidirecional
- Arquitetura do Flux:
    - Action: É como um telégrafo - Formata a mensagem a ser enviada
    - Dispatcher: É um um telefonista - Sabe todos os callbacks para diferentes stores
    - Store: Gerente - Controla e executa as alterações
    - View: Gerente intermediário(middleware) - Recebe alterações e passa os dados para as visões abaixo dela
- Principais implementações:
    - Redux
    - Reflux
    - Mobx
    - Vuex 
    - NgRx/store
- Bibliotecas baseadas em Flux
    - Serve para comunicação entre componentes
    - Centraliza informações 
## Redux
1. Single source of truth: Uma única store
2. State é read-only
3. Mudanças são feitas com pure functions
- Views
    - Provider
    - Connect
    - Selector
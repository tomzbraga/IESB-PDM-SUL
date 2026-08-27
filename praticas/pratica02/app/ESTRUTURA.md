Abra o projeto no VS Code e, no próprio README desta prática (ou em um arquivo `ESTRUTURA.md` na pasta do app), escreva **em uma frase** o papel de cada item abaixo (use a Aula 02 como referência):

* [Contém metadados, dependencias e instruções de como rodar e construir o projeto. ] `package.json`
* [Garante que as versões das dependencias instaladas não alterem durante o desenvolvimento do sistema] `package-lock.json`
* [Componente raíz do aplicativo. Normalmente onde o aplicativo é sanduichado em um único componente <App />] `App.js` / `App.tsx` (ou pasta `app/`, se o template usar)
* [Arquivo de configuração do Expo: nome do app, ícone, splash screen] `app.json`
* [Local onde normalmente ficariam os arquivos de imagem] `assets/`
* [Local onde ficam fisicamente as dependencias do projeto. useEffect, useState que utilizamos está implementado aqui, por exemplo.] `node_modules/`
* [Arquivo de configuração do que deve ser ignorado pelo git para versionar] `.gitignore`
* [Pasta de configuração e cache armazenada localmente] `.expo/` (se aparecer após rodar o Expo)
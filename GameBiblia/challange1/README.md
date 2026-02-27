<p align="center">
 <img src="https://bibliagame.vercel.app/assets/logo-bg-1.png" width="120 height="120" /></p>

<p align="center"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" /><img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-green?style=for-the-badge" /></p><p align="center"><strong>"Desafie seus conhecimentos e mergulhe nas Escrituras de uma forma interativa."</strong></p>🌟 O Projeto Bíblia Game é uma experiência gamificada desenvolvida para testar o conhecimento bíblico de forma dinâmica. Utilizando uma mecânica inspirada em jogos de palavras clássicos, o usuário deve identificar personagens e temas marcantes, acumulando pontos e superando recordes.


 🎯 O que o usuário encontra? Temas Segmentados: Categorias como mulheres_marcantes, profetas, milagres, etc.Sistema de Vidas: O jogador começa com 10 tentativas, exigindo estratégia na escolha das letras.Scoreboard: Persistência de recordes para incentivar o progresso contínuo.UI/UX Clean: Interface construída com tons de verde (esperança/vida) e componentes arredondados, garantindo conforto visual.🎨 Layout e VisualO design foi pensado para ser mobile-first e extremamente intuitivo. O uso do Tailwind CSS permitiu a criação de botões com efeitos de profundidade e transições suaves.

<div align="center"></div>🛠️ Stack Tecnológica <img src="https://cdn.simpleicons.org/react/61DAFB" width="20" height="20" /> React: Biblioteca core para a construção de componentes funcionais e hooks.<img src="https://cdn.simpleicons.org/tailwindcss/38B2AC" width="20" height="20" /> Tailwind: Utilizado para toda a estilização, garantindo responsividade e tokens de design.<img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="20" height="20" /> JavaScript: Lógica de validação das letras e manipulação do estado do jogo.<img src="https://cdn.simpleicons.org/lucide/FF4500" width="20" height="20" /> Lucide IconsÍcones minimalistas para Troféus, Livros e Chat.

🧠 Lógica de Jogo (Game Logic)A aplicação utiliza um sistema de estados centralizado para gerenciar a partida:Sorteio: Uma palavra é selecionada aleatoriamente de um banco de dados local baseado no tema.Input: O usuário insere uma letra por vez.Validação: O sistema verifica se a letra pertence à palavra (array.includes()) e atualiza o display ou reduz as tentativas.Conclusão: Ao completar a palavra, o score é incrementado e o recorde é atualizado via localStorage.

# <h1 width="20" height="20">🚀 Como Rodar o Game: <h1/>


# Bash 1. Clone este repositório
$ git clone https://github.com/UlissesNunes/biblia-game.git

# 2. Acesse a pasta do projeto
$ cd biblia-game

# 3. Instale as dependências
$ npm install

# 4. Inicie o modo de desenvolvimento
$ npm run dev


📈 Próximos Passos (Roadmap)[ ] Implementar cronômetro para bônus de pontuação.[ ] Adicionar efeitos sonoros de acerto e erro.[ ] Criar um "Dicionário Bíblico" que explica o termo após o acerto.[ ] Modo Multiplayer local.<p align="center"><sub>Desenvolvido com 🤍 e código por <strong>Ulisses</strong>.</sub><i>"Tudo posso naquele que me fortalece." - Filipenses 4:13</i></p>

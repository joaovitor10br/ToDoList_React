📝 React ToDo List

Uma aplicação de lista de tarefas moderna construída com React.js, focada em praticar conceitos fundamentais do ecossistema React e boas práticas de organização de projeto.

Este projeto foi desenvolvido como parte do meu aprendizado em Front-End com o objetivo de evoluir minhas habilidades e compor meu portfólio.

🚀 Demonstração

Em breve: deploy online 🌍

✨ Funcionalidades

A aplicação permite:

➕ Adicionar novas tarefas
✅ Marcar tarefas como concluídas
❌ Remover tarefas individuais
🔎 Filtrar tarefas:
Todas
Pendentes
Concluídas
🔢 Contador de tarefas pendentes
🧹 Limpar todas as tarefas concluídas
💾 Persistência de dados com LocalStorage

As tarefas permanecem salvas mesmo após atualizar a página.

🧠 Conceitos praticados

Este projeto foi criado com foco em treinar conceitos essenciais de React:

Componentização
Props
Hooks (useState / useEffect)
Manipulação de listas
Gerenciamento de estado
Persistência no navegador
Organização de pastas
CSS modular simples
🛠️ Tecnologias utilizadas
React.js
JavaScript (ES6+)
HTML5
CSS3
LocalStorage API
📁 Estrutura do projeto
src/
 ├─ components/
 │   ├─ TaskForm.jsx
 │   ├─ TaskList.jsx
 │   └─ TaskItem.jsx
 ├─ App.jsx
 ├─ App.css
 └─ main.jsx
Responsabilidade dos componentes
Componente	Função
App.jsx	Estado global e lógica principal
TaskForm	Entrada de novas tarefas
TaskList	Renderização da lista
TaskItem	Item individual da tarefa
⚙️ Como rodar o projeto
1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/react-todo-list.git
2️⃣ Entrar na pasta
cd react-todo-list
3️⃣ Instalar dependências
npm install
4️⃣ Rodar o projeto
npm run dev

O app abrirá em:

http://localhost:5173
🎯 Próximas melhorias (Roadmap)

Ideias futuras para evolução do projeto:

🌙 Dark mode
✏️ Editar tarefas
📱 Responsividade mobile
🔔 Notificações
☁️ Backend com API
👤 Autenticação de usuário
👨‍💻 Autor

Desenvolvido por João Vitor Alves Martins
Projeto criado para fins de estudo e portfólio.

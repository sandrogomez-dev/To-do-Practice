# React Todo List - Fase 2

```jsx
// 📂 Estructura de archivos
src/
├── App.js           // Estado principal
├── App.css          // Estilos modernos
├── index.js         // Punto de entrada
└── components/
    ├── TodoList.js  // Lógica de lista
    ├── TodoItem.js  // Item interactivo
    └── AddTodo.js   // Formulario controlado
css
/* 🎨 Variables CSS (App.css) */
:root {
  --primary: #4361ee;
  --shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.todo-item {
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}
jsx
// 🛠 Código clave (App.js)
const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
bash
# 🚀 Comandos para ejecutar
npm install   # Instalar dependencias
npm start    # Iniciar servidor
npm run build # Crear versión producción
🌟 Características
✅ Estado persistente (localStorage)

✅ Diseño responsive

✅ Animaciones CSS

✅ Componentes reutilizables

📌 Próximos pasos
Filtros (All/Active/Completed)

Tests con Jest

Drag-and-drop
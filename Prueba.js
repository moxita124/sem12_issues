export async function crearTarea(task) {
try {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    body: JSON.stringify(task),
  });
  const data = await response.json();
  setTasks([...tasks, data]);
} catch (error) {
  console.error('Error al crear la tarea:', error);
}
  
}

export async function crearTarea(task) {
  try {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Error al crear la tarea");
    }

    const data = await response.json();
    console.log(" Tarea creada correctamente:", data);
    return data;

  } catch (error) {
    console.error(" Error al crear tarea:", error.message);
    throw error;
  }
}

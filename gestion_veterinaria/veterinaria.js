const citas = [];

function agregarCita(nuevaCita) {
  citas.push(nuevaCita);
  renderizarCitas();
}

function editarCita(index) {
  const nombre = prompt('Nuevo nombre:');
  const fecha = prompt('Nueva fecha:');

  if (nombre !== null && fecha !== null) {
    citas[index] = { nombre, fecha };
    renderizarCitas();
  }
}

function eliminarCita(index) {
  const confirmacion = confirm('¿Seguro que quieres eliminar esta cita?');

  if (confirmacion) {
    citas.splice(index, 1);
    renderizarCitas();
  }
}

function renderizarCitas() {
  const citasContainer = document.getElementById('citas-container');
  citasContainer.innerHTML = '<h2>Citas Programadas</h2>';

  citas.forEach((cita, index) => {
    const citaElement = document.createElement('div');
    citaElement.innerHTML = `
      <p>Nombre: ${cita.nombre}</p>
      <p>Fecha: ${cita.fecha}</p>
      <button onclick="editarCita(${index})">Editar</button>
      <button onclick="eliminarCita(${index})">Eliminar</button>
    `;
    citasContainer.appendChild(citaElement);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;

  const nuevaCita = { nombre, fecha };
  agregarCita(nuevaCita);

  document.getElementById('nombre').value = '';
  document.getElementById('fecha').value = '';
}

document.getElementById('app').innerHTML = `
  <h1>Gestión de Citas Veterinarias</h1>
  <div>
    <h2>Agendar Nueva Cita</h2>
    <form onsubmit="handleSubmit(event)">
      <label>Nombre:</label>
      <input type="text" id="nombre" required>

      <label>Fecha:</label>
      <input type="date" id="fecha" required>

      <button type="submit">Agregar Cita</button>
    </form>
  </div>
  <div id="citas-container"></div>
`;

agregarCita({ nombre: 'Ejemplo1', fecha: '2024-03-01' });
agregarCita({ nombre: 'Ejemplo2', fecha: '2024-03-15' });

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-tarea');
    const listaTareas = document.getElementById('lista-tareas');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('input-nombre').value;
        const fecha = document.getElementById('input-fecha').value;
        const descripcion = document.getElementById('input-descripcion').value;
        const tipo = document.getElementById('select-tipo').value;
        const prioridad = document.querySelector('input[name="prioridad"]:checked');

        if (!nombre || !fecha || !prioridad) {
            alert("🚨 ¡Faltan campos obligatorios!");
            return;
        }

        const tarjetaTarea = document.createElement('div');
        tarjetaTarea.className = 'tarea-card';
        tarjetaTarea.innerHTML = `
            <h3>${nombre}</h3>
            <p><strong>📅 Fecha:</strong> ${fecha}</p>
            ${descripcion ? `<p><strong>📝 Descripción:</strong> ${descripcion}</p>` : ''}
            <p><strong>🏷️ Tipo:</strong> ${tipo || 'Sin especificar'}</p>
            <p class="tarea-prioridad ${prioridad.value.toLowerCase()}">
                <strong>⚠️ Prioridad:</strong> ${prioridad.value}
            </p>
            <div class="botones-tarea">
                <button class="boton-cumplida">✓ Cumplida</button>
                <button class="boton-eliminar">🗑️ Eliminar</button>
            </div>
        `;

        tarjetaTarea.querySelector('.boton-eliminar').addEventListener('click', function() {
            tarjetaTarea.remove();
        });

        tarjetaTarea.querySelector('.boton-cumplida').addEventListener('click', function() {
            tarjetaTarea.style.opacity = '0.5';
            tarjetaTarea.style.borderLeft = '4px solid #2ecc71'; 
            this.disabled = true; 
        });

        listaTareas.appendChild(tarjetaTarea);
        formulario.reset();
    });
});
const internados = [
	{
		paciente: {
			nombre: 'Manuel',
			edad: 25,
			sexo: 'H'
		},
		diasIngresado: 3,
		dieta: 'Baja en fibra'
	},
	{
		paciente: {
			nombre: 'Marta',
			edad: 56,
			sexo: 'M'
		},
		diasIngresado: 5,
		dieta: 'Diabetes'
	},
	{
		paciente: {
			nombre: 'Julia',
			edad: 38,
			sexo: 'M'
		},
		diasIngresado: 1,
		dieta: 'Sin sal'
	},
	{
		paciente: {
			nombre: 'Esteban',
			edad: 40,
			sexo: 'H'
		},
		diasIngresado: 3,
		dieta: 'Diabetes'
	},
	{
		paciente: {
			nombre: 'Arturo',
			edad: 19,
			sexo: 'H'
		},
		diasIngresado: 2,
		dieta: 'Baja en fibra'
	},
	{
		paciente: {
			nombre: 'Isabel',
			edad: 63,
			sexo: 'M'
		},
		diasIngresado: 6,
		dieta: 'Sin sal'
	}
];

datos(internados);

function datos(ingresados) {
	const acumula = (acc, valorActual) => acc + valorActual;
	cantidadPacientes = ingresados.length;
	personasMayores = ingresados.filter(ingresados => ingresados.paciente.edad >= 18);
	cantidadHombresDiabeticos = ingresados.filter(ingresados => ingresados.paciente.sexo === 'H' && ingresados.dieta === 'Diabetes');
	diasInternado = ingresados.map(ingresados => ingresados.diasIngresado).reduce(acumula);
	mediaMujeres = ingresados
		.filter(ingresados => ingresados.paciente.sexo === 'M')
		.map(ingresados => ingresados.paciente.edad)
		.reduce(acumula) / ingresados
			.filter(ingresados => ingresados.paciente.sexo === 'M').length;

	return {
		nPacientes: cantidadPacientes,
		nMayoresEdad: personasMayores.length,
		nHombresDiabeticos: cantidadHombresDiabeticos.length,
		totalDiasIngreso: diasInternado,
		mediaEdadMujeres: mediaMujeres,
	}

};
console.log(datos(internados))
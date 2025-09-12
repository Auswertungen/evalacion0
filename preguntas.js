const preguntas = [
  {
    pregunta: "¿En qué año se consumó la Independencia de México?",
    opciones: ["1810", "1821", "1824", "1815"],
    respuestaCorrecta: 1,
    retroalimentacion: "La Independencia de México se consumó el 27 de septiembre de 1821 con la entrada del Ejército Trigarante a la Ciudad de México."
  },
  {
    pregunta: "¿Quién fue el primer emperador de México?",
    opciones: ["Benito Juárez", "Agustín de Iturbide", "Maximiliano de Habsburgo", "Miguel Hidalgo"],
    respuestaCorrecta: 1,
    retroalimentacion: "Agustín de Iturbide fue proclamado emperador de México en 1822, tras la consumación de la Independencia."
  },
  {
    pregunta: "¿Qué suceso marcó el inicio de la Guerra de Independencia de México?",
    opciones: ["La Batalla de Chapultepec", "El Grito de Dolores", "La Firma de los Tratados de Córdoba", "El Plan de Iguala"],
    respuestaCorrecta: 1,
    retroalimentacion: "El Grito de Dolores, emitido por Miguel Hidalgo el 16 de septiembre de 1810, es considerado el acto que dio inicio a la lucha por la Independencia."
  },
  {
    pregunta: "¿En qué año se nacionalizó la industria petrolera en México?",
    opciones: ["1917", "1938", "1968", "1910"],
    respuestaCorrecta: 1,
    retroalimentacion: "El presidente Lázaro Cárdenas del Río decretó la Expropiación Petrolera el 18 de marzo de 1938."
  },
  {
    pregunta: "¿Quién fue el presidente de México durante la Guerra de Reforma?",
    opciones: ["Antonio López de Santa Anna", "Porfirio Díaz", "Benito Juárez", "Francisco I. Madero"],
    respuestaCorrecta: 2,
    retroalimentacion: "Benito Juárez fue el presidente constitucionalista que encabezó a los liberales durante la Guerra de Reforma."
  },
  {
    pregunta: "¿A qué cultura prehispánica perteneció la ciudad de Teotihuacán?",
    opciones: ["Mexica", "Maya", "Zapoteca", "No se conoce con certeza"],
    respuestaCorrecta: 3,
    retroalimentacion: "Aunque se le atribuye a los teotihuacanos, el origen étnico de esta gran ciudad aún es objeto de debate y no se conoce con certeza."
  },
  {
    pregunta: "¿En qué batalla las fuerzas mexicanas derrotaron al ejército francés el 5 de mayo de 1862?",
    opciones: ["Batalla de Chapultepec", "Batalla de Puebla", "Batalla de la Angostura", "Batalla de La Cañada"],
    respuestaCorrecta: 1,
    retroalimentacion: "La Batalla de Puebla, librada el 5 de mayo de 1862, fue una victoria importante del ejército mexicano sobre las tropas francesas."
  },
  {
    pregunta: "¿Quién fue el líder revolucionario conocido como 'El Caudillo del Sur'?",
    opciones: ["Francisco Villa", "Venustiano Carranza", "Emiliano Zapata", "Álvaro Obregón"],
    respuestaCorrecta: 2,
    retroalimentacion: "Emiliano Zapata fue el principal líder del movimiento agrarista y caudillo de la Revolución en el sur de México."
  },
  {
    pregunta: "¿Qué presidente de México firmó el Tratado de Guadalupe Hidalgo?",
    opciones: ["Benito Juárez", "Santa Anna", "José Joaquín de Herrera", "Antonio López de Santa Anna"],
    respuestaCorrecta: 3,
    retroalimentacion: "El Tratado de Guadalupe Hidalgo fue firmado en 1848, durante el gobierno de Antonio López de Santa Anna."
  },
  {
    pregunta: "¿Cuál fue la primera cultura en Mesoamérica?",
    opciones: ["Zapoteca", "Olmeca", "Maya", "Mexica"],
    respuestaCorrecta: 1,
    retroalimentacion: "La cultura Olmeca, conocida como la 'cultura madre', se considera la primera en desarrollarse en la región de Mesoamérica."
  },
  {
    pregunta: "¿Qué evento marca el fin del Porfiriato?",
    opciones: ["La Decena Trágica", "La Batalla de Celaya", "El Plan de San Luis", "La renuncia de Porfirio Díaz"],
    respuestaCorrecta: 3,
    retroalimentacion: "La renuncia de Porfirio Díaz en 1911, como resultado de la Revolución Mexicana, puso fin a su largo periodo de gobierno."
  },
  {
    pregunta: "¿Quién fue el autor del mural 'Sueño de una tarde dominical en la Alameda Central'?",
    opciones: ["David Alfaro Siqueiros", "Diego Rivera", "José Clemente Orozco", "Frida Kahlo"],
    respuestaCorrecta: 1,
    retroalimentacion: "Diego Rivera fue el creador de este famoso mural, que representa la historia de México a través de sus personajes más importantes."
  },
  {
    pregunta: "¿Qué presidente mexicano es conocido por el 'Desarrollo Estabilizador'?",
    opciones: ["Adolfo López Mateos", "Gustavo Díaz Ordaz", "Adolfo Ruiz Cortines", "Lázaro Cárdenas"],
    respuestaCorrecta: 0,
    retroalimentacion: "Adolfo López Mateos es reconocido por impulsar el 'Desarrollo Estabilizador', una época de crecimiento económico y estabilidad en México."
  },
  {
    pregunta: "¿En qué año se llevó a cabo la matanza de Tlatelolco?",
    opciones: ["1968", "1972", "1958", "1985"],
    respuestaCorrecta: 0,
    retroalimentacion: "La masacre estudiantil de Tlatelolco ocurrió el 2 de octubre de 1968."
  },
  {
    pregunta: "¿Quién fue el último tlatoani del Imperio Mexica?",
    opciones: ["Moctezuma II", "Cuitláhuac", "Cuauhtémoc", "Tizoc"],
    respuestaCorrecta: 2,
    retroalimentacion: "Cuauhtémoc, que significa 'águila que desciende', fue el último emperador azteca, capturado por los españoles en 1521."
  },
  {
    pregunta: "¿Qué tratado le quitó a México la mitad de su territorio?",
    opciones: ["Tratados de Córdoba", "Tratado de Guadalupe Hidalgo", "Tratado McLane-Ocampo", "Tratado de la Mesilla"],
    respuestaCorrecta: 1,
    retroalimentacion: "El Tratado de Guadalupe Hidalgo (1848) puso fin a la guerra entre México y Estados Unidos y resultó en la pérdida de gran parte del territorio mexicano."
  },
  {
    pregunta: "¿Qué es la 'Decena Trágica'?",
    opciones: ["Un periodo de diez años de gobierno", "Diez días de bombardeos en la Ciudad de México", "Un golpe militar para derrocar a Madero", "Una guerra de diez días"],
    respuestaCorrecta: 2,
    retroalimentacion: "La Decena Trágica fue un golpe militar de diez días que culminó con el asesinato del presidente Francisco I. Madero en 1913."
  },
  {
    pregunta: "¿Cuál fue el objetivo principal del Plan de San Luis?",
    opciones: ["Reinstaurar el Porfiriato", "Llamar a la rebelión para derrocar a Porfirio Díaz", "Crear una nueva Constitución", "Nacionalizar el petróleo"],
    respuestaCorrecta: 1,
    retroalimentacion: "Francisco I. Madero proclamó el Plan de San Luis en 1910, convocando a una rebelión armada contra la dictadura de Porfirio Díaz."
  },
  {
    pregunta: "¿En qué año se creó la Universidad Nacional Autónoma de México (UNAM)?",
    opciones: ["1910", "1929", "1936", "1945"],
    respuestaCorrecta: 1,
    retroalimentacion: "La UNAM fue fundada el 22 de septiembre de 1910 como la Universidad Nacional de México, pero su autonomía fue otorgada en 1929."
  },
  {
    pregunta: "¿Quién fue el primer presidente de México, después de la caída del imperio de Iturbide?",
    opciones: ["Guadalupe Victoria", "Benito Juárez", "Vicente Guerrero", "Antonio López de Santa Anna"],
    respuestaCorrecta: 0,
    retroalimentacion: "Guadalupe Victoria fue el primer presidente de México, asumiendo el cargo en 1824."
  }
];
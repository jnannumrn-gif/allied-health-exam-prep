-- Allied Health Exam Prep Seed Data: Questions & Flashcards (Bilingual EN/ES)
-- 100 questions across 4 domains + 40 flashcards

-- DOMAIN: medical_assisting (Medical Assisting) - 25 questions
-- DOMAIN: pharmacy_tech (Pharmacy Technician) - 25 questions
-- DOMAIN: health_info_tech (Health Information Technology) - 25 questions
-- DOMAIN: patient_care_safety (Patient Care & Safety) - 25 questions

-- ═══════════════════════════════════════════════════════════════════
-- DOMAIN: medical_assisting — 25 questions
-- ═══════════════════════════════════════════════════════════════════

INSERT INTO questions VALUES ('q001','medical_assisting','easy',
'What is the normal adult oral temperature range?',
'Cual es el rango normal de temperatura oral en adultos?',
'97.6°F - 99.6°F (36.4°C - 37.6°C)','97.6°F - 99.6°F (36.4°C - 37.6°C)',
'95.0°F - 97.0°F (35.0°C - 36.1°C)','95.0°F - 97.0°F (35.0°C - 36.1°C)',
'100.0°F - 102.0°F (37.8°C - 38.9°C)','100.0°F - 102.0°F (37.8°C - 38.9°C)',
'94.0°F - 96.0°F (34.4°C - 35.6°C)','94.0°F - 96.0°F (34.4°C - 35.6°C)','A',
'Normal oral temperature for adults ranges from 97.6°F to 99.6°F (36.4°C to 37.6°C).',
'La temperatura oral normal para adultos varia de 97.6°F a 99.6°F (36.4°C a 37.6°C).');

INSERT INTO questions VALUES ('q002','medical_assisting','easy',
'Which of the following is the correct order for a venipuncture using the evacuated tube method?',
'Cual es el orden correcto para una venopuncion usando el metodo de tubo al vacio?',
'Apply tourniquet, cleanse site, insert needle, fill tubes, release tourniquet','Aplicar torniquete, limpiar sitio, insertar aguja, llenar tubos, soltar torniquete',
'Insert needle, apply tourniquet, cleanse site, fill tubes','Insertar aguja, aplicar torniquete, limpiar sitio, llenar tubos',
'Cleanse site, fill tubes, apply tourniquet, insert needle','Limpiar sitio, llenar tubos, aplicar torniquete, insertar aguja',
'Apply tourniquet, insert needle, cleanse site, fill tubes','Aplicar torniquete, insertar aguja, limpiar sitio, llenar tubos','A',
'The correct order is: apply tourniquet, cleanse the site, perform venipuncture, fill tubes in correct order, then release the tourniquet before removing the needle.',
'El orden correcto es: aplicar torniquete, limpiar el sitio, realizar venopuncion, llenar tubos en orden correcto, luego soltar el torniquete antes de retirar la aguja.');

INSERT INTO questions VALUES ('q003','medical_assisting','medium',
'A medical assistant is preparing to administer an intramuscular injection to an adult. The preferred site is:',
'Un asistente medico se prepara para administrar una inyeccion intramuscular a un adulto. El sitio preferido es:',
'Deltoid muscle or ventrogluteal site','Musculo deltoides o sitio ventrogluteo',
'Anterior forearm','Antebrazo anterior',
'Dorsal hand','Dorso de la mano',
'Medial thigh only','Solo muslo medial','A',
'The deltoid and ventrogluteal sites are preferred for adult IM injections due to good blood supply and fewer nerves.',
'Los sitios deltoides y ventrogluteo son preferidos para inyecciones IM en adultos debido al buen suministro sanguineo y menos nervios.');

INSERT INTO questions VALUES ('q004','medical_assisting','medium',
'The medical assistant should verify which "rights" before administering medication?',
'Que "derechos" debe verificar el asistente medico antes de administrar medicamentos?',
'Right patient, right drug, right dose, right route, right time','Paciente correcto, medicamento correcto, dosis correcta, via correcta, hora correcta',
'Right patient, right insurance, right dose','Paciente correcto, seguro correcto, dosis correcta',
'Right drug, right cost, right time','Medicamento correcto, costo correcto, hora correcta',
'Right patient, right drug only','Paciente correcto, solo medicamento correcto','A',
'The "Five Rights" of medication administration are: right patient, right drug, right dose, right route, and right time.',
'Los "Cinco Derechos" de la administracion de medicamentos son: paciente correcto, medicamento correcto, dosis correcta, via correcta y hora correcta.');

INSERT INTO questions VALUES ('q005','medical_assisting','easy',
'Normal adult blood pressure is considered:',
'La presion arterial normal del adulto se considera:',
'Less than 120/80 mmHg','Menos de 120/80 mmHg',
'140/90 mmHg','140/90 mmHg',
'160/100 mmHg','160/100 mmHg',
'90/50 mmHg','90/50 mmHg','A',
'Normal blood pressure for adults is less than 120 mmHg systolic and less than 80 mmHg diastolic.',
'La presion arterial normal para adultos es menos de 120 mmHg sistolica y menos de 80 mmHg diastolica.');

INSERT INTO questions VALUES ('q006','medical_assisting','medium',
'When performing a 12-lead EKG, lead V1 is placed at:',
'Al realizar un EKG de 12 derivaciones, la derivacion V1 se coloca en:',
'Fourth intercostal space, right sternal border','Cuarto espacio intercostal, borde esternal derecho',
'Fourth intercostal space, left sternal border','Cuarto espacio intercostal, borde esternal izquierdo',
'Fifth intercostal space, midclavicular line','Quinto espacio intercostal, linea medioclavicular',
'Second intercostal space, right sternal border','Segundo espacio intercostal, borde esternal derecho','A',
'V1 is placed at the 4th intercostal space at the right sternal border.',
'V1 se coloca en el 4to espacio intercostal en el borde esternal derecho.');

INSERT INTO questions VALUES ('q007','medical_assisting','hard',
'A patient presents with a glucose reading of 45 mg/dL. This indicates:',
'Un paciente presenta una lectura de glucosa de 45 mg/dL. Esto indica:',
'Hypoglycemia','Hipoglucemia',
'Hyperglycemia','Hiperglucemia',
'Normal fasting glucose','Glucosa en ayunas normal',
'Pre-diabetes','Pre-diabetes','A',
'Normal fasting glucose is 70-100 mg/dL. A reading of 45 mg/dL is critically low (hypoglycemia) and requires immediate intervention.',
'La glucosa en ayunas normal es 70-100 mg/dL. Una lectura de 45 mg/dL es criticamente baja (hipoglucemia) y requiere intervencion inmediata.');

INSERT INTO questions VALUES ('q008','medical_assisting','easy',
'The medical term for high blood pressure is:',
'El termino medico para presion arterial alta es:',
'Hypertension','Hipertension',
'Hypotension','Hipotension',
'Tachycardia','Taquicardia',
'Bradycardia','Bradicardia','A',
'Hypertension refers to elevated blood pressure, typically above 130/80 mmHg.',
'Hipertension se refiere a presion arterial elevada, tipicamente por encima de 130/80 mmHg.');

INSERT INTO questions VALUES ('q009','medical_assisting','medium',
'Which tube color is used for a complete blood count (CBC)?',
'Que color de tubo se usa para un hemograma completo (CBC)?',
'Lavender/Purple (EDTA)','Lavanda/Morado (EDTA)',
'Red (no additive)','Rojo (sin aditivo)',
'Light blue (sodium citrate)','Azul claro (citrato de sodio)',
'Green (heparin)','Verde (heparina)','A',
'Lavender/purple top tubes contain EDTA anticoagulant and are used for CBC and other hematology tests.',
'Los tubos de tapa lavanda/morada contienen anticoagulante EDTA y se usan para hemograma completo y otras pruebas de hematologia.');

INSERT INTO questions VALUES ('q010','medical_assisting','medium',
'A medical assistant notices a patient has an allergic reaction after receiving a medication. The first action should be:',
'Un asistente medico nota que un paciente tiene una reaccion alergica despues de recibir un medicamento. La primera accion debe ser:',
'Notify the physician immediately','Notificar al medico inmediatamente',
'Document the reaction in the chart','Documentar la reaccion en el expediente',
'Administer an antihistamine','Administrar un antihistaminico',
'Call the pharmacy','Llamar a la farmacia','A',
'The first priority is to notify the physician so they can assess the patient and order appropriate emergency treatment.',
'La primera prioridad es notificar al medico para que pueda evaluar al paciente y ordenar el tratamiento de emergencia apropiado.');

INSERT INTO questions VALUES ('q011','medical_assisting','easy',
'The prefix "brady-" means:',
'El prefijo "bradi-" significa:',
'Slow','Lento',
'Fast','Rapido',
'Painful','Doloroso',
'Difficult','Dificil','A',
'Brady- means slow. Bradycardia = slow heart rate. Brady- is the opposite of tachy- (fast).',
'Bradi- significa lento. Bradicardia = frecuencia cardiaca lenta. Bradi- es lo opuesto de taqui- (rapido).');

INSERT INTO questions VALUES ('q012','medical_assisting','medium',
'When measuring a patient''s weight on a balance beam scale, the medical assistant should:',
'Al medir el peso de un paciente en una bascula de balanza, el asistente medico debe:',
'Have the patient remove shoes and heavy outer clothing','Pedir al paciente que se quite zapatos y ropa exterior pesada',
'Weigh the patient with all clothing and shoes on','Pesar al paciente con toda la ropa y zapatos puestos',
'Have the patient hold onto the scale for balance','Pedir al paciente que se agarre de la bascula para equilibrio',
'Only weigh patients in the morning','Solo pesar pacientes en la manana','A',
'For accurate weight measurement, patients should remove shoes and heavy outer clothing. Consistency in measurement technique is important.',
'Para una medicion precisa del peso, los pacientes deben quitarse zapatos y ropa exterior pesada. La consistencia en la tecnica de medicion es importante.');

INSERT INTO questions VALUES ('q013','medical_assisting','hard',
'The normal range for adult respiratory rate is:',
'El rango normal de frecuencia respiratoria en adultos es:',
'12-20 breaths per minute','12-20 respiraciones por minuto',
'6-10 breaths per minute','6-10 respiraciones por minuto',
'25-35 breaths per minute','25-35 respiraciones por minuto',
'40-60 breaths per minute','40-60 respiraciones por minuto','A',
'Normal adult respiratory rate is 12-20 breaths per minute at rest.',
'La frecuencia respiratoria normal del adulto es de 12-20 respiraciones por minuto en reposo.');

INSERT INTO questions VALUES ('q014','medical_assisting','easy',
'Which position is used for a gynecological exam?',
'Que posicion se usa para un examen ginecologico?',
'Lithotomy position','Posicion de litotomia',
'Prone position','Posicion prona',
'Trendelenburg position','Posicion de Trendelenburg',
'Sims position','Posicion de Sims','A',
'The lithotomy position (patient lying on back with legs in stirrups) is standard for gynecological examinations.',
'La posicion de litotomia (paciente acostada boca arriba con piernas en estribos) es estandar para examenes ginecologicos.');

INSERT INTO questions VALUES ('q015','medical_assisting','medium',
'Autoclaving uses which method of sterilization?',
'El autoclave usa que metodo de esterilizacion?',
'Steam under pressure','Vapor bajo presion',
'Dry heat','Calor seco',
'Chemical immersion','Inmersion quimica',
'Ultraviolet light','Luz ultravioleta','A',
'Autoclaving uses pressurized steam (typically 250°F/121°C at 15 psi for 15-20 minutes) to achieve sterilization.',
'El autoclave usa vapor presurizado (tipicamente 250°F/121°C a 15 psi por 15-20 minutos) para lograr la esterilizacion.');

INSERT INTO questions VALUES ('q016','medical_assisting','medium',
'The Chain of Infection includes all of the following EXCEPT:',
'La Cadena de Infeccion incluye todo lo siguiente EXCEPTO:',
'Medication administration','Administracion de medicamentos',
'Infectious agent','Agente infeccioso',
'Mode of transmission','Modo de transmision',
'Susceptible host','Huesped susceptible','A',
'The Chain of Infection includes: infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, and susceptible host.',
'La Cadena de Infeccion incluye: agente infeccioso, reservorio, puerta de salida, modo de transmision, puerta de entrada y huesped susceptible.');

INSERT INTO questions VALUES ('q017','medical_assisting','easy',
'The abbreviation "qid" on a prescription means:',
'La abreviatura "qid" en una receta significa:',
'Four times a day','Cuatro veces al dia',
'Every other day','Cada otro dia',
'Twice a day','Dos veces al dia',
'At bedtime','A la hora de dormir','A',
'qid = quater in die = four times a day. Common prescription abbreviations: bid (twice), tid (three times), qid (four times).',
'qid = quater in die = cuatro veces al dia. Abreviaturas comunes de recetas: bid (dos veces), tid (tres veces), qid (cuatro veces).');

INSERT INTO questions VALUES ('q018','medical_assisting','hard',
'A capillary puncture is preferred over venipuncture when:',
'Una puncion capilar se prefiere sobre la venopuncion cuando:',
'The patient is an infant or has fragile veins','El paciente es un bebe o tiene venas fragiles',
'A large volume of blood is needed','Se necesita un gran volumen de sangre',
'Blood cultures are ordered','Se ordenan hemocultivos',
'Coagulation studies are needed','Se necesitan estudios de coagulacion','A',
'Capillary puncture is preferred for infants, patients with fragile/difficult veins, and when only a small sample is needed (e.g., glucose testing).',
'La puncion capilar se prefiere para bebes, pacientes con venas fragiles/dificiles, y cuando solo se necesita una muestra pequena (ej. prueba de glucosa).');

INSERT INTO questions VALUES ('q019','medical_assisting','medium',
'The medical assistant should wash hands for a minimum of:',
'El asistente medico debe lavarse las manos por un minimo de:',
'20 seconds','20 segundos',
'5 seconds','5 segundos',
'60 seconds','60 segundos',
'2 minutes','2 minutos','A',
'CDC guidelines recommend washing hands with soap and water for at least 20 seconds to effectively remove pathogens.',
'Las guias del CDC recomiendan lavarse las manos con jabon y agua por al menos 20 segundos para eliminar eficazmente los patogenos.');

INSERT INTO questions VALUES ('q020','medical_assisting','easy',
'Which vital sign should be counted for a full 60 seconds if irregular?',
'Que signo vital debe contarse por 60 segundos completos si es irregular?',
'Pulse','Pulso',
'Blood pressure','Presion arterial',
'Temperature','Temperatura',
'Weight','Peso','A',
'An irregular pulse must be counted for a full 60 seconds to obtain an accurate reading.',
'Un pulso irregular debe contarse por 60 segundos completos para obtener una lectura precisa.');

INSERT INTO questions VALUES ('q021','medical_assisting','medium',
'When performing a urinalysis, the preferred specimen type is:',
'Al realizar un analisis de orina, el tipo de muestra preferido es:',
'Clean-catch midstream','Chorro medio con tecnica limpia',
'Random void','Miccion aleatoria',
'First morning void only','Solo primera miccion de la manana',
'Catheterized specimen only','Solo muestra por cateter','A',
'Clean-catch midstream reduces contamination and is the standard method for routine urinalysis.',
'El chorro medio con tecnica limpia reduce la contaminacion y es el metodo estandar para analisis de orina de rutina.');

INSERT INTO questions VALUES ('q022','medical_assisting','hard',
'A spirometry test measures:',
'Una espirometria mide:',
'Lung function and airflow','Funcion pulmonar y flujo de aire',
'Heart rhythm','Ritmo cardiaco',
'Blood oxygen levels','Niveles de oxigeno en sangre',
'Blood glucose','Glucosa en sangre','A',
'Spirometry measures lung function by assessing the volume and flow of air during inhalation and exhalation.',
'La espirometria mide la funcion pulmonar evaluando el volumen y flujo de aire durante la inhalacion y exhalacion.');

INSERT INTO questions VALUES ('q023','medical_assisting','easy',
'The normal adult pulse rate at rest is:',
'La frecuencia de pulso normal del adulto en reposo es:',
'60-100 beats per minute','60-100 latidos por minuto',
'40-60 beats per minute','40-60 latidos por minuto',
'100-120 beats per minute','100-120 latidos por minuto',
'120-150 beats per minute','120-150 latidos por minuto','A',
'Normal resting heart rate for adults is 60-100 beats per minute.',
'La frecuencia cardiaca normal en reposo para adultos es de 60-100 latidos por minuto.');

INSERT INTO questions VALUES ('q024','medical_assisting','medium',
'The purpose of a tourniquet during venipuncture is to:',
'El proposito de un torniquete durante la venopuncion es:',
'Temporarily restrict venous blood flow to distend the veins','Restringir temporalmente el flujo sanguineo venoso para distender las venas',
'Stop all blood flow to the arm','Detener todo el flujo sanguineo al brazo',
'Increase arterial blood flow','Aumentar el flujo sanguineo arterial',
'Prevent infection at the site','Prevenir infeccion en el sitio','A',
'A tourniquet restricts venous return, causing veins to distend and become easier to locate and puncture. It should not be left on for more than 1 minute.',
'Un torniquete restringe el retorno venoso, causando que las venas se distendan y sean mas faciles de localizar y puncionar. No debe dejarse por mas de 1 minuto.');

INSERT INTO questions VALUES ('q025','medical_assisting','hard',
'Which of the following specimens requires a light blue top tube?',
'Cual de los siguientes especimenes requiere un tubo de tapa azul claro?',
'Coagulation studies (PT/INR)','Estudios de coagulacion (TP/INR)',
'Complete blood count','Hemograma completo',
'Blood glucose','Glucosa en sangre',
'Liver function tests','Pruebas de funcion hepatica','A',
'Light blue top tubes contain sodium citrate and are used for coagulation studies such as PT, INR, PTT, and fibrinogen.',
'Los tubos de tapa azul claro contienen citrato de sodio y se usan para estudios de coagulacion como TP, INR, TTP y fibrinogeno.');

-- ═══════════════════════════════════════════════════════════════════
-- DOMAIN: pharmacy_tech — 25 questions
-- ═══════════════════════════════════════════════════════════════════

INSERT INTO questions VALUES ('q026','pharmacy_tech','easy',
'A prescription reads "Amoxicillin 500mg PO TID x 10 days." How many capsules are needed?',
'Una receta dice "Amoxicilina 500mg PO TID x 10 dias." Cuantas capsulas se necesitan?',
'30 capsules','30 capsulas',
'10 capsules','10 capsulas',
'20 capsules','20 capsulas',
'40 capsules','40 capsulas','A',
'TID means three times daily. 3 capsules/day x 10 days = 30 capsules total.',
'TID significa tres veces al dia. 3 capsulas/dia x 10 dias = 30 capsulas en total.');

INSERT INTO questions VALUES ('q027','pharmacy_tech','easy',
'Which DEA schedule has the highest potential for abuse?',
'Que clasificacion de la DEA tiene el mayor potencial de abuso?',
'Schedule II','Clasificacion II',
'Schedule III','Clasificacion III',
'Schedule IV','Clasificacion IV',
'Schedule V','Clasificacion V','A',
'Schedule II drugs (e.g., oxycodone, fentanyl, methylphenidate) have high abuse potential with accepted medical use. Schedule I has no accepted medical use.',
'Los medicamentos de Clasificacion II (ej. oxicodona, fentanilo, metilfenidato) tienen alto potencial de abuso con uso medico aceptado. Clasificacion I no tiene uso medico aceptado.');

INSERT INTO questions VALUES ('q028','pharmacy_tech','medium',
'The generic name for Lipitor is:',
'El nombre generico de Lipitor es:',
'Atorvastatin','Atorvastatina',
'Simvastatin','Simvastatina',
'Rosuvastatin','Rosuvastatina',
'Pravastatin','Pravastatina','A',
'Lipitor is the brand name for atorvastatin, a statin medication used to lower cholesterol.',
'Lipitor es el nombre comercial de atorvastatina, un medicamento de la clase estatinas usado para reducir el colesterol.');

INSERT INTO questions VALUES ('q029','pharmacy_tech','medium',
'A patient weighs 154 pounds. What is their weight in kilograms?',
'Un paciente pesa 154 libras. Cual es su peso en kilogramos?',
'70 kg','70 kg',
'77 kg','77 kg',
'154 kg','154 kg',
'35 kg','35 kg','A',
'To convert pounds to kilograms, divide by 2.2. 154 / 2.2 = 70 kg.',
'Para convertir libras a kilogramos, divida entre 2.2. 154 / 2.2 = 70 kg.');

INSERT INTO questions VALUES ('q030','pharmacy_tech','easy',
'The abbreviation "PRN" means:',
'La abreviatura "PRN" significa:',
'As needed','Segun sea necesario',
'By mouth','Por boca',
'Before meals','Antes de las comidas',
'At bedtime','A la hora de dormir','A',
'PRN = pro re nata = as needed/as the situation arises.',
'PRN = pro re nata = segun sea necesario/segun la situacion lo requiera.');

INSERT INTO questions VALUES ('q031','pharmacy_tech','medium',
'Which medication class is used to treat hypertension?',
'Que clase de medicamento se usa para tratar la hipertension?',
'ACE inhibitors','Inhibidores de la ECA',
'Antihistamines','Antihistaminicos',
'Antifungals','Antimicoticos',
'Bronchodilators','Broncodilatadores','A',
'ACE inhibitors (e.g., lisinopril, enalapril) lower blood pressure by blocking the angiotensin-converting enzyme.',
'Los inhibidores de la ECA (ej. lisinopril, enalapril) reducen la presion arterial bloqueando la enzima convertidora de angiotensina.');

INSERT INTO questions VALUES ('q032','pharmacy_tech','hard',
'When compounding a medication, the pharmacy technician should follow:',
'Al preparar un medicamento compuesto, el tecnico de farmacia debe seguir:',
'USP 795 or USP 797 standards depending on the preparation type','Estandares USP 795 o USP 797 dependiendo del tipo de preparacion',
'Only the pharmacist instructions','Solo las instrucciones del farmaceutico',
'FDA manufacturing guidelines','Guias de fabricacion de la FDA',
'Hospital policy only','Solo politica del hospital','A',
'USP 795 governs non-sterile compounding and USP 797 governs sterile compounding. Both set quality and safety standards.',
'USP 795 rige la preparacion no esteril y USP 797 rige la preparacion esteril. Ambos establecen estandares de calidad y seguridad.');

INSERT INTO questions VALUES ('q033','pharmacy_tech','easy',
'The route of administration "SL" means:',
'La via de administracion "SL" significa:',
'Sublingual (under the tongue)','Sublingual (debajo de la lengua)',
'Subcutaneous','Subcutaneo',
'Sustained release','Liberacion sostenida',
'Solution','Solucion','A',
'SL = sublingual, meaning the medication is placed under the tongue for rapid absorption into the bloodstream.',
'SL = sublingual, significa que el medicamento se coloca debajo de la lengua para absorcion rapida al torrente sanguineo.');

INSERT INTO questions VALUES ('q034','pharmacy_tech','medium',
'How many milliliters are in one teaspoon?',
'Cuantos mililitros hay en una cucharadita?',
'5 mL','5 mL',
'10 mL','10 mL',
'15 mL','15 mL',
'30 mL','30 mL','A',
'One teaspoon = 5 mL. One tablespoon = 15 mL. One ounce = 30 mL.',
'Una cucharadita = 5 mL. Una cucharada = 15 mL. Una onza = 30 mL.');

INSERT INTO questions VALUES ('q035','pharmacy_tech','medium',
'Which law requires pharmacies to offer counseling to Medicaid patients?',
'Que ley requiere que las farmacias ofrezcan consejeria a pacientes de Medicaid?',
'OBRA 90 (Omnibus Budget Reconciliation Act)','OBRA 90 (Ley de Reconciliacion Presupuestaria Omnibus)',
'HIPAA','HIPAA',
'DEA Act','Ley de la DEA',
'Kefauver-Harris Amendment','Enmienda Kefauver-Harris','A',
'OBRA 90 requires pharmacists to offer counseling and perform drug utilization review for Medicaid patients.',
'OBRA 90 requiere que los farmaceuticos ofrezcan consejeria y realicen revision de utilizacion de medicamentos para pacientes de Medicaid.');

INSERT INTO questions VALUES ('q036','pharmacy_tech','easy',
'Insulin should be stored:',
'La insulina debe almacenarse:',
'Refrigerated at 36°F-46°F (2°C-8°C) until opened','Refrigerada a 36°F-46°F (2°C-8°C) hasta abrirse',
'At room temperature always','A temperatura ambiente siempre',
'In the freezer','En el congelador',
'In direct sunlight','Bajo luz solar directa','A',
'Unopened insulin should be refrigerated at 36-46°F. Once opened, most insulin can be kept at room temperature for up to 28 days.',
'La insulina sin abrir debe refrigerarse a 36-46°F. Una vez abierta, la mayoria de insulinas pueden mantenerse a temperatura ambiente por hasta 28 dias.');

INSERT INTO questions VALUES ('q037','pharmacy_tech','hard',
'The purpose of a laminar flow hood in a pharmacy is to:',
'El proposito de una campana de flujo laminar en una farmacia es:',
'Provide a sterile work environment for compounding IV medications','Proporcionar un ambiente de trabajo esteril para preparar medicamentos IV',
'Store medications at proper temperature','Almacenar medicamentos a temperatura adecuada',
'Count controlled substances','Contar sustancias controladas',
'Mix oral medications','Mezclar medicamentos orales','A',
'A laminar flow hood provides HEPA-filtered air to create an ISO 5 clean environment for sterile compounding.',
'Una campana de flujo laminar proporciona aire filtrado HEPA para crear un ambiente limpio ISO 5 para preparacion esteril.');

INSERT INTO questions VALUES ('q038','pharmacy_tech','medium',
'A medication recall classified as Class I means:',
'Un retiro de medicamento clasificado como Clase I significa:',
'The product may cause serious health problems or death','El producto puede causar problemas graves de salud o muerte',
'The product may cause minor health problems','El producto puede causar problemas menores de salud',
'The product has a labeling error only','El producto solo tiene un error de etiquetado',
'The product has expired','El producto ha expirado','A',
'Class I recalls are the most serious: there is reasonable probability that use of the product will cause serious adverse health consequences or death.',
'Los retiros Clase I son los mas serios: hay probabilidad razonable de que el uso del producto cause consecuencias adversas graves para la salud o muerte.');

INSERT INTO questions VALUES ('q039','pharmacy_tech','easy',
'The NDC (National Drug Code) number identifies:',
'El numero NDC (Codigo Nacional de Medicamentos) identifica:',
'The manufacturer, product, and package size','El fabricante, producto y tamano del empaque',
'Only the drug name','Solo el nombre del medicamento',
'The DEA schedule','La clasificacion de la DEA',
'The prescriber','El prescriptor','A',
'The NDC is a unique 10-digit number: first segment = labeler/manufacturer, second = product, third = package size.',
'El NDC es un numero unico de 10 digitos: primer segmento = fabricante, segundo = producto, tercero = tamano del empaque.');

INSERT INTO questions VALUES ('q040','pharmacy_tech','medium',
'Which auxiliary label should be placed on a tetracycline prescription?',
'Que etiqueta auxiliar debe colocarse en una receta de tetraciclina?',
'Avoid sunlight and dairy products','Evitar luz solar y productos lacteos',
'Take with food','Tomar con alimentos',
'May cause drowsiness','Puede causar somnolencia',
'Keep frozen','Mantener congelado','A',
'Tetracycline increases photosensitivity and chelates with calcium in dairy products, reducing absorption.',
'La tetraciclina aumenta la fotosensibilidad y se quela con el calcio de los productos lacteos, reduciendo la absorcion.');

INSERT INTO questions VALUES ('q041','pharmacy_tech','hard',
'If a prescription calls for 240 mL of a 2% solution, how many grams of active ingredient are needed?',
'Si una receta requiere 240 mL de una solucion al 2%, cuantos gramos de ingrediente activo se necesitan?',
'4.8 grams','4.8 gramos',
'2.4 grams','2.4 gramos',
'24 grams','24 gramos',
'0.48 grams','0.48 gramos','A',
'2% means 2 g per 100 mL. For 240 mL: (2/100) x 240 = 4.8 grams.',
'2% significa 2 g por 100 mL. Para 240 mL: (2/100) x 240 = 4.8 gramos.');

INSERT INTO questions VALUES ('q042','pharmacy_tech','easy',
'Metformin is used to treat:',
'La metformina se usa para tratar:',
'Type 2 diabetes','Diabetes tipo 2',
'Hypertension','Hipertension',
'Asthma','Asma',
'Depression','Depresion','A',
'Metformin is a first-line oral medication for type 2 diabetes that works by decreasing glucose production in the liver.',
'La metformina es un medicamento oral de primera linea para diabetes tipo 2 que funciona disminuyendo la produccion de glucosa en el higado.');

INSERT INTO questions VALUES ('q043','pharmacy_tech','medium',
'A "DAW" code on a prescription means:',
'Un codigo "DAW" en una receta significa:',
'Dispense As Written — no generic substitution','Dispensar Como Esta Escrito — sin sustitucion generica',
'Drug Allergy Warning','Advertencia de Alergia a Medicamento',
'Daily Administration Warning','Advertencia de Administracion Diaria',
'Dose Adjustment Warranted','Ajuste de Dosis Justificado','A',
'DAW (Dispense As Written) indicates the prescriber wants the brand-name product dispensed, not a generic substitute.',
'DAW (Dispensar Como Esta Escrito) indica que el prescriptor quiere que se dispense el producto de marca, no un sustituto generico.');

INSERT INTO questions VALUES ('q044','pharmacy_tech','medium',
'Controlled substances must be stored:',
'Las sustancias controladas deben almacenarse:',
'In a locked cabinet or safe with limited access','En un gabinete o caja fuerte con acceso limitado',
'On open shelves for easy access','En estantes abiertos para facil acceso',
'In the refrigerator','En el refrigerador',
'In the pharmacist office only','Solo en la oficina del farmaceutico','A',
'DEA regulations require controlled substances to be stored in a securely locked cabinet with access limited to authorized personnel.',
'Las regulaciones de la DEA requieren que las sustancias controladas se almacenen en un gabinete cerrado con llave y acceso limitado a personal autorizado.');

INSERT INTO questions VALUES ('q045','pharmacy_tech','easy',
'The abbreviation "HS" on a prescription means:',
'La abreviatura "HS" en una receta significa:',
'At bedtime (hora somni)','A la hora de dormir (hora somni)',
'Half strength','Media concentracion',
'High speed','Alta velocidad',
'Health services','Servicios de salud','A',
'HS = hora somni = at bedtime/at the hour of sleep.',
'HS = hora somni = a la hora de dormir/a la hora del sueno.');

INSERT INTO questions VALUES ('q046','pharmacy_tech','hard',
'Which organization sets standards for compounding pharmacies?',
'Que organizacion establece estandares para farmacias de preparacion magistral?',
'United States Pharmacopeia (USP)','Farmacopea de los Estados Unidos (USP)',
'American Medical Association (AMA)','Asociacion Medica Americana (AMA)',
'Centers for Disease Control (CDC)','Centros para el Control de Enfermedades (CDC)',
'Food and Drug Administration (FDA)','Administracion de Alimentos y Medicamentos (FDA)','A',
'USP sets compounding standards: USP 795 for non-sterile, USP 797 for sterile, and USP 800 for hazardous drug handling.',
'USP establece estandares de preparacion: USP 795 para no esteril, USP 797 para esteril y USP 800 para manejo de medicamentos peligrosos.');

INSERT INTO questions VALUES ('q047','pharmacy_tech','medium',
'Nitroglycerin tablets should be stored in:',
'Las tabletas de nitroglicerina deben almacenarse en:',
'An amber glass container, tightly closed','Un envase de vidrio ambar, bien cerrado',
'A plastic bag','Una bolsa de plastico',
'A clear glass container','Un envase de vidrio transparente',
'The refrigerator in any container','El refrigerador en cualquier envase','A',
'Nitroglycerin is light-sensitive and volatile. It must be stored in the original amber glass container, tightly closed, at room temperature.',
'La nitroglicerina es sensible a la luz y volatil. Debe almacenarse en el envase original de vidrio ambar, bien cerrado, a temperatura ambiente.');

INSERT INTO questions VALUES ('q048','pharmacy_tech','easy',
'The "sig" on a prescription refers to:',
'El "sig" en una receta se refiere a:',
'Directions for use (signa)','Instrucciones de uso (signa)',
'Signature of the prescriber','Firma del prescriptor',
'Significant drug interaction','Interaccion medicamentosa significativa',
'Signal for refill','Senal de resurtido','A',
'Sig = signa = write/label. It contains the directions for use that will appear on the prescription label.',
'Sig = signa = escribir/etiquetar. Contiene las instrucciones de uso que apareceran en la etiqueta de la receta.');

INSERT INTO questions VALUES ('q049','pharmacy_tech','hard',
'Beyond-use dating (BUD) for non-sterile compounded preparations is determined by:',
'La fecha de uso mas alla (BUD) para preparaciones compuestas no esteriles se determina por:',
'USP 795 guidelines based on formulation type','Guias USP 795 basadas en el tipo de formulacion',
'The manufacturer expiration date','La fecha de vencimiento del fabricante',
'The pharmacy manager preference','La preferencia del gerente de farmacia',
'State law only','Solo la ley estatal','A',
'USP 795 provides BUD guidelines: aqueous preparations typically 14 days refrigerated, non-aqueous up to 180 days.',
'USP 795 proporciona guias BUD: preparaciones acuosas tipicamente 14 dias refrigeradas, no acuosas hasta 180 dias.');

INSERT INTO questions VALUES ('q050','pharmacy_tech','medium',
'Which vitamin is also known as ascorbic acid?',
'Que vitamina tambien se conoce como acido ascorbico?',
'Vitamin C','Vitamina C',
'Vitamin A','Vitamina A',
'Vitamin D','Vitamina D',
'Vitamin B12','Vitamina B12','A',
'Vitamin C (ascorbic acid) is a water-soluble vitamin important for immune function and collagen synthesis.',
'La vitamina C (acido ascorbico) es una vitamina hidrosoluble importante para la funcion inmune y la sintesis de colageno.');

-- ═══════════════════════════════════════════════════════════════════
-- DOMAIN: health_info_tech — 25 questions
-- ═══════════════════════════════════════════════════════════════════

INSERT INTO questions VALUES ('q051','health_info_tech','easy',
'HIPAA stands for:',
'HIPAA significa:',
'Health Insurance Portability and Accountability Act','Ley de Portabilidad y Responsabilidad del Seguro Medico',
'Health Information Privacy and Access Act','Ley de Privacidad y Acceso a Informacion de Salud',
'Hospital Insurance Protection and Accountability Act','Ley de Proteccion y Responsabilidad del Seguro Hospitalario',
'Health Integrity and Patient Advocacy Act','Ley de Integridad de Salud y Defensa del Paciente','A',
'HIPAA (Health Insurance Portability and Accountability Act) of 1996 protects patient health information privacy.',
'HIPAA (Ley de Portabilidad y Responsabilidad del Seguro Medico) de 1996 protege la privacidad de la informacion de salud del paciente.');

INSERT INTO questions VALUES ('q052','health_info_tech','easy',
'PHI stands for:',
'PHI significa:',
'Protected Health Information','Informacion de Salud Protegida',
'Patient Health Insurance','Seguro de Salud del Paciente',
'Public Health Initiative','Iniciativa de Salud Publica',
'Personal Health Index','Indice de Salud Personal','A',
'PHI (Protected Health Information) is any individually identifiable health information that is protected under HIPAA.',
'PHI (Informacion de Salud Protegida) es cualquier informacion de salud individualmente identificable que esta protegida bajo HIPAA.');

INSERT INTO questions VALUES ('q053','health_info_tech','medium',
'ICD-10-CM codes are used for:',
'Los codigos ICD-10-CM se usan para:',
'Diagnosis coding','Codificacion de diagnosticos',
'Procedure coding in hospitals','Codificacion de procedimientos en hospitales',
'Billing for physician services only','Facturacion solo de servicios medicos',
'Drug identification','Identificacion de medicamentos','A',
'ICD-10-CM (International Classification of Diseases, 10th Revision, Clinical Modification) is used for diagnosis coding in all healthcare settings.',
'ICD-10-CM (Clasificacion Internacional de Enfermedades, 10a Revision, Modificacion Clinica) se usa para codificacion de diagnosticos en todos los entornos de salud.');

INSERT INTO questions VALUES ('q054','health_info_tech','medium',
'CPT codes are used for:',
'Los codigos CPT se usan para:',
'Reporting medical procedures and services','Reportar procedimientos y servicios medicos',
'Diagnosis coding','Codificacion de diagnosticos',
'Identifying medications','Identificar medicamentos',
'Patient registration','Registro de pacientes','A',
'CPT (Current Procedural Terminology) codes are used to report medical, surgical, and diagnostic procedures and services.',
'Los codigos CPT (Terminologia de Procedimientos Actuales) se usan para reportar procedimientos y servicios medicos, quirurgicos y diagnosticos.');

INSERT INTO questions VALUES ('q055','health_info_tech','easy',
'An EHR is:',
'Un EHR es:',
'Electronic Health Record','Expediente Electronico de Salud',
'Emergency Health Response','Respuesta de Emergencia de Salud',
'Essential Health Requirement','Requisito Esencial de Salud',
'Enrolled Health Registry','Registro de Salud Inscrito','A',
'An EHR (Electronic Health Record) is a digital version of a patient''s chart that can be shared across healthcare organizations.',
'Un EHR (Expediente Electronico de Salud) es una version digital del expediente del paciente que puede compartirse entre organizaciones de salud.');

INSERT INTO questions VALUES ('q056','health_info_tech','medium',
'The minimum necessary standard under HIPAA requires:',
'El estandar de minimo necesario bajo HIPAA requiere:',
'Accessing only the minimum PHI needed to perform job duties','Acceder solo al minimo de PHI necesario para realizar funciones laborales',
'Sharing all patient information with other providers','Compartir toda la informacion del paciente con otros proveedores',
'Allowing patients full access to other patients records','Permitir a pacientes acceso total a expedientes de otros pacientes',
'Publishing health records online','Publicar expedientes medicos en linea','A',
'The minimum necessary standard requires that PHI access, use, and disclosure be limited to the minimum amount needed for the intended purpose.',
'El estandar de minimo necesario requiere que el acceso, uso y divulgacion de PHI se limite a la cantidad minima necesaria para el proposito previsto.');

INSERT INTO questions VALUES ('q057','health_info_tech','hard',
'HCPCS Level II codes are used primarily for:',
'Los codigos HCPCS Nivel II se usan principalmente para:',
'Durable medical equipment, supplies, and non-physician services','Equipo medico duradero, suministros y servicios no medicos',
'Inpatient hospital procedures','Procedimientos hospitalarios de internacion',
'Laboratory tests only','Solo pruebas de laboratorio',
'Physician office visits','Visitas medicas de consultorio','A',
'HCPCS Level II codes cover items and services not included in CPT, such as DME, ambulance services, and prosthetics.',
'Los codigos HCPCS Nivel II cubren articulos y servicios no incluidos en CPT, como equipo medico duradero, servicios de ambulancia y protesis.');

INSERT INTO questions VALUES ('q058','health_info_tech','easy',
'The SOAP note format stands for:',
'El formato de nota SOAP significa:',
'Subjective, Objective, Assessment, Plan','Subjetivo, Objetivo, Evaluacion, Plan',
'Signs, Observations, Actions, Prognosis','Signos, Observaciones, Acciones, Pronostico',
'Summary, Overview, Analysis, Procedure','Resumen, Panorama, Analisis, Procedimiento',
'Status, Outcome, Activity, Progress','Estado, Resultado, Actividad, Progreso','A',
'SOAP notes organize clinical documentation: Subjective (patient complaints), Objective (measurable findings), Assessment (diagnosis), Plan (treatment).',
'Las notas SOAP organizan la documentacion clinica: Subjetivo (quejas del paciente), Objetivo (hallazgos medibles), Evaluacion (diagnostico), Plan (tratamiento).');

INSERT INTO questions VALUES ('q059','health_info_tech','medium',
'Under HIPAA, a covered entity includes:',
'Bajo HIPAA, una entidad cubierta incluye:',
'Health plans, healthcare providers, and healthcare clearinghouses','Planes de salud, proveedores de salud y camaras de compensacion de salud',
'Only hospitals','Solo hospitales',
'Only insurance companies','Solo companias de seguros',
'Only government agencies','Solo agencias gubernamentales','A',
'HIPAA covered entities are: health plans, healthcare providers who transmit health information electronically, and healthcare clearinghouses.',
'Las entidades cubiertas por HIPAA son: planes de salud, proveedores de salud que transmiten informacion de salud electronicamente y camaras de compensacion de salud.');

INSERT INTO questions VALUES ('q060','health_info_tech','medium',
'The release of patient information requires:',
'La divulgacion de informacion del paciente requiere:',
'Written authorization from the patient or legal representative','Autorizacion escrita del paciente o representante legal',
'Verbal permission only','Solo permiso verbal',
'No authorization for any healthcare provider','Ninguna autorizacion para cualquier proveedor de salud',
'Approval from insurance company only','Solo aprobacion de la compania de seguros','A',
'Patient authorization for release of PHI must be in writing and include specific elements as defined by HIPAA.',
'La autorizacion del paciente para divulgacion de PHI debe ser por escrito e incluir elementos especificos definidos por HIPAA.');

INSERT INTO questions VALUES ('q061','health_info_tech','hard',
'DRG (Diagnosis Related Group) is used for:',
'DRG (Grupo Relacionado con el Diagnostico) se usa para:',
'Medicare inpatient hospital reimbursement','Reembolso hospitalario de internacion de Medicare',
'Outpatient billing only','Solo facturacion ambulatoria',
'Pharmacy claims','Reclamos de farmacia',
'Physician office visits','Visitas medicas de consultorio','A',
'DRGs are used to classify hospital inpatient cases into groups for Medicare reimbursement purposes.',
'Los DRG se usan para clasificar casos hospitalarios de internacion en grupos para propositos de reembolso de Medicare.');

INSERT INTO questions VALUES ('q062','health_info_tech','easy',
'Medical records must be maintained for a minimum of:',
'Los expedientes medicos deben mantenerse por un minimo de:',
'The period required by state and federal law (typically 6-10 years for adults)','El periodo requerido por la ley estatal y federal (tipicamente 6-10 anos para adultos)',
'1 year','1 ano',
'30 days','30 dias',
'Indefinitely with no exceptions','Indefinidamente sin excepciones','A',
'Record retention requirements vary by state but typically range from 6-10 years for adults. Minors records are kept longer.',
'Los requisitos de retencion de expedientes varian por estado pero tipicamente van de 6-10 anos para adultos. Los expedientes de menores se conservan mas tiempo.');

INSERT INTO questions VALUES ('q063','health_info_tech','medium',
'E/M codes (Evaluation and Management) are used to report:',
'Los codigos E/M (Evaluacion y Manejo) se usan para reportar:',
'Office visits, hospital visits, and consultations','Visitas de consultorio, visitas hospitalarias y consultas',
'Surgical procedures only','Solo procedimientos quirurgicos',
'Laboratory tests','Pruebas de laboratorio',
'Medication dispensing','Dispensacion de medicamentos','A',
'E/M codes (99201-99499) report the level of service provided during patient encounters like office visits and hospital care.',
'Los codigos E/M (99201-99499) reportan el nivel de servicio proporcionado durante encuentros con pacientes como visitas de consultorio y atencion hospitalaria.');

INSERT INTO questions VALUES ('q064','health_info_tech','hard',
'The Meaningful Use program (now Promoting Interoperability) requires:',
'El programa de Uso Significativo (ahora Promoviendo la Interoperabilidad) requiere:',
'Demonstrating effective use of certified EHR technology','Demostrar uso efectivo de tecnologia EHR certificada',
'Using paper records exclusively','Usar expedientes de papel exclusivamente',
'Eliminating all patient communications','Eliminar todas las comunicaciones con pacientes',
'Using only proprietary software systems','Usar solo sistemas de software propietario','A',
'The Promoting Interoperability program incentivizes meaningful use of certified EHR technology to improve quality, safety, and efficiency.',
'El programa de Promoviendo la Interoperabilidad incentiva el uso significativo de tecnologia EHR certificada para mejorar calidad, seguridad y eficiencia.');

INSERT INTO questions VALUES ('q065','health_info_tech','easy',
'A patient''s date of birth, Social Security number, and medical record number are examples of:',
'La fecha de nacimiento, numero de Seguro Social y numero de expediente medico de un paciente son ejemplos de:',
'Patient identifiers (PHI)','Identificadores del paciente (PHI)',
'Diagnosis codes','Codigos de diagnostico',
'Procedure codes','Codigos de procedimiento',
'Insurance plan numbers','Numeros de plan de seguro','A',
'These are examples of PHI identifiers that are protected under HIPAA. There are 18 recognized identifiers total.',
'Estos son ejemplos de identificadores PHI protegidos bajo HIPAA. Hay 18 identificadores reconocidos en total.');

INSERT INTO questions VALUES ('q066','health_info_tech','medium',
'A breach notification under HIPAA must be provided to affected individuals within:',
'Una notificacion de violacion bajo HIPAA debe proporcionarse a las personas afectadas dentro de:',
'60 days of discovery','60 dias del descubrimiento',
'24 hours','24 horas',
'1 year','1 ano',
'30 days','30 dias','A',
'HIPAA requires notification to affected individuals without unreasonable delay and no later than 60 days after discovery of a breach.',
'HIPAA requiere notificacion a las personas afectadas sin demora irrazonable y no mas de 60 dias despues del descubrimiento de una violacion.');

INSERT INTO questions VALUES ('q067','health_info_tech','medium',
'The primary purpose of health information exchange (HIE) is to:',
'El proposito principal del intercambio de informacion de salud (HIE) es:',
'Allow secure sharing of patient data between different healthcare organizations','Permitir el intercambio seguro de datos de pacientes entre diferentes organizaciones de salud',
'Replace all paper records','Reemplazar todos los expedientes de papel',
'Eliminate the need for patient consent','Eliminar la necesidad de consentimiento del paciente',
'Reduce the number of healthcare providers','Reducir el numero de proveedores de salud','A',
'HIE enables the electronic sharing of health information among different healthcare organizations to improve care coordination.',
'HIE permite el intercambio electronico de informacion de salud entre diferentes organizaciones de salud para mejorar la coordinacion de atencion.');

INSERT INTO questions VALUES ('q068','health_info_tech','easy',
'A modifier in CPT coding is used to:',
'Un modificador en la codificacion CPT se usa para:',
'Provide additional information about a procedure or service','Proporcionar informacion adicional sobre un procedimiento o servicio',
'Replace the CPT code entirely','Reemplazar completamente el codigo CPT',
'Identify the patient','Identificar al paciente',
'Indicate the diagnosis','Indicar el diagnostico','A',
'CPT modifiers (two-digit codes) provide additional information to describe circumstances that modify a service or procedure.',
'Los modificadores CPT (codigos de dos digitos) proporcionan informacion adicional para describir circunstancias que modifican un servicio o procedimiento.');

INSERT INTO questions VALUES ('q069','health_info_tech','hard',
'Under HIPAA, the penalty for knowingly obtaining PHI under false pretenses is:',
'Bajo HIPAA, la penalidad por obtener PHI a sabiendas bajo pretextos falsos es:',
'Up to $100,000 fine and up to 5 years imprisonment','Hasta $100,000 de multa y hasta 5 anos de prision',
'A warning letter only','Solo una carta de advertencia',
'Up to $1,000 fine','Hasta $1,000 de multa',
'No penalty if no harm occurred','Ninguna penalidad si no hubo dano','A',
'HIPAA criminal penalties: up to $50,000/1 year for knowing violations, up to $100,000/5 years for false pretenses, up to $250,000/10 years for personal gain.',
'Penalidades criminales de HIPAA: hasta $50,000/1 ano por violaciones a sabiendas, hasta $100,000/5 anos por pretextos falsos, hasta $250,000/10 anos por beneficio personal.');

INSERT INTO questions VALUES ('q070','health_info_tech','medium',
'ICD-10-PCS codes are used for:',
'Los codigos ICD-10-PCS se usan para:',
'Inpatient hospital procedure coding','Codificacion de procedimientos hospitalarios de internacion',
'Outpatient diagnosis coding','Codificacion de diagnosticos ambulatorios',
'Pharmacy billing','Facturacion de farmacia',
'Dental procedure coding','Codificacion de procedimientos dentales','A',
'ICD-10-PCS (Procedure Coding System) is used exclusively for coding inpatient hospital procedures in the United States.',
'ICD-10-PCS (Sistema de Codificacion de Procedimientos) se usa exclusivamente para codificar procedimientos hospitalarios de internacion en Estados Unidos.');

INSERT INTO questions VALUES ('q071','health_info_tech','easy',
'Which organization maintains the CPT code set?',
'Que organizacion mantiene el conjunto de codigos CPT?',
'American Medical Association (AMA)','Asociacion Medica Americana (AMA)',
'World Health Organization (WHO)','Organizacion Mundial de la Salud (OMS)',
'Centers for Medicare and Medicaid Services (CMS)','Centros de Servicios de Medicare y Medicaid (CMS)',
'American Hospital Association (AHA)','Asociacion Americana de Hospitales (AHA)','A',
'The AMA develops and maintains the CPT code set, which is updated annually.',
'La AMA desarrolla y mantiene el conjunto de codigos CPT, que se actualiza anualmente.');

INSERT INTO questions VALUES ('q072','health_info_tech','medium',
'Revenue cycle management in healthcare begins with:',
'La gestion del ciclo de ingresos en salud comienza con:',
'Patient scheduling and registration','Programacion y registro del paciente',
'Claim submission','Envio de reclamos',
'Payment posting','Registro de pagos',
'Denial management','Gestion de denegaciones','A',
'Revenue cycle management starts with patient scheduling/registration and ends with payment collection and account resolution.',
'La gestion del ciclo de ingresos comienza con la programacion/registro del paciente y termina con la recoleccion de pagos y resolucion de cuentas.');

INSERT INTO questions VALUES ('q073','health_info_tech','hard',
'The HITECH Act of 2009:',
'La Ley HITECH de 2009:',
'Strengthened HIPAA enforcement and promoted EHR adoption','Fortalecio la aplicacion de HIPAA y promovio la adopcion de EHR',
'Replaced HIPAA entirely','Reemplazo HIPAA por completo',
'Only applied to government hospitals','Solo aplico a hospitales gubernamentales',
'Eliminated electronic health records','Elimino los expedientes electronicos de salud','A',
'HITECH (Health Information Technology for Economic and Clinical Health Act) strengthened HIPAA, expanded breach notification, and incentivized EHR adoption.',
'HITECH (Ley de Tecnologia de Informacion de Salud para la Salud Economica y Clinica) fortalecio HIPAA, expandio la notificacion de violaciones e incentivo la adopcion de EHR.');

INSERT INTO questions VALUES ('q074','health_info_tech','easy',
'An advance directive is a legal document that:',
'Una directiva anticipada es un documento legal que:',
'States a patient''s healthcare wishes in case they cannot communicate','Expresa los deseos de atencion medica del paciente en caso de que no pueda comunicarse',
'Assigns a new doctor to the patient','Asigna un nuevo medico al paciente',
'Authorizes insurance payments','Autoriza pagos de seguros',
'Transfers medical records','Transfiere expedientes medicos','A',
'An advance directive documents a patient''s preferences for medical treatment if they become unable to make decisions for themselves.',
'Una directiva anticipada documenta las preferencias del paciente para tratamiento medico si no puede tomar decisiones por si mismo.');

INSERT INTO questions VALUES ('q075','health_info_tech','medium',
'The main purpose of clinical documentation improvement (CDI) is to:',
'El proposito principal de la mejora de documentacion clinica (CDI) es:',
'Ensure accurate and complete clinical documentation for proper coding and reimbursement','Asegurar documentacion clinica precisa y completa para codificacion y reembolso adecuados',
'Reduce the number of patient visits','Reducir el numero de visitas de pacientes',
'Eliminate the need for physicians','Eliminar la necesidad de medicos',
'Speed up discharge processes only','Solo acelerar procesos de alta','A',
'CDI programs ensure clinical documentation accurately reflects patient acuity, supporting accurate coding, quality metrics, and appropriate reimbursement.',
'Los programas CDI aseguran que la documentacion clinica refleje con precision la agudeza del paciente, apoyando codificacion precisa, metricas de calidad y reembolso apropiado.');

-- ═══════════════════════════════════════════════════════════════════
-- DOMAIN: patient_care_safety — 25 questions
-- ═══════════════════════════════════════════════════════════════════

INSERT INTO questions VALUES ('q076','patient_care_safety','easy',
'Standard precautions should be used:',
'Las precauciones estandar deben usarse:',
'With all patients regardless of diagnosis','Con todos los pacientes sin importar el diagnostico',
'Only with patients who have known infections','Solo con pacientes que tienen infecciones conocidas',
'Only in surgical settings','Solo en entornos quirurgicos',
'Only with elderly patients','Solo con pacientes ancianos','A',
'Standard precautions apply to all patients in all healthcare settings, regardless of suspected or confirmed infection status.',
'Las precauciones estandar aplican a todos los pacientes en todos los entornos de salud, sin importar el estado de infeccion sospechado o confirmado.');

INSERT INTO questions VALUES ('q077','patient_care_safety','easy',
'The single most effective way to prevent the spread of infection is:',
'La forma mas efectiva de prevenir la propagacion de infecciones es:',
'Hand hygiene','Higiene de manos',
'Wearing gloves','Usar guantes',
'Using antibiotics','Usar antibioticos',
'Wearing a mask','Usar mascarilla','A',
'Proper hand hygiene is the single most important measure to prevent healthcare-associated infections.',
'La higiene de manos adecuada es la medida mas importante para prevenir infecciones asociadas a la atencion de salud.');

INSERT INTO questions VALUES ('q078','patient_care_safety','medium',
'When lifting a heavy object, the healthcare worker should:',
'Al levantar un objeto pesado, el trabajador de salud debe:',
'Bend at the knees and keep the back straight','Doblar las rodillas y mantener la espalda recta',
'Bend at the waist','Doblarse por la cintura',
'Keep legs straight and bend forward','Mantener las piernas rectas y doblarse hacia adelante',
'Twist the body while lifting','Girar el cuerpo mientras levanta','A',
'Proper body mechanics require bending at the knees, keeping the back straight, and using leg muscles to lift.',
'La mecanica corporal adecuada requiere doblar las rodillas, mantener la espalda recta y usar los musculos de las piernas para levantar.');

INSERT INTO questions VALUES ('q079','patient_care_safety','medium',
'A fire extinguisher is operated using the PASS method. What does PASS stand for?',
'Un extintor de incendios se opera usando el metodo PASS. Que significa PASS?',
'Pull, Aim, Squeeze, Sweep','Tirar, Apuntar, Apretar, Barrer',
'Push, Activate, Spray, Stop','Empujar, Activar, Rociar, Detener',
'Prepare, Aim, Shoot, Secure','Preparar, Apuntar, Disparar, Asegurar',
'Pull, Activate, Spray, Secure','Tirar, Activar, Rociar, Asegurar','A',
'PASS: Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep from side to side.',
'PASS: Tirar del pasador, Apuntar a la base del fuego, Apretar la manija, Barrer de lado a lado.');

INSERT INTO questions VALUES ('q080','patient_care_safety','easy',
'Personal Protective Equipment (PPE) includes:',
'El Equipo de Proteccion Personal (EPP) incluye:',
'Gloves, gowns, masks, and eye protection','Guantes, batas, mascarillas y proteccion ocular',
'Only gloves','Solo guantes',
'Only masks','Solo mascarillas',
'Stethoscope and thermometer','Estetoscopio y termometro','A',
'PPE includes gloves, gowns, masks (surgical and N95), face shields, and eye protection, used based on anticipated exposure.',
'El EPP incluye guantes, batas, mascarillas (quirurgicas y N95), protectores faciales y proteccion ocular, usados segun la exposicion anticipada.');

INSERT INTO questions VALUES ('q081','patient_care_safety','medium',
'An incident report should be completed when:',
'Un reporte de incidente debe completarse cuando:',
'Any unexpected event occurs that could harm a patient, visitor, or staff member','Ocurre cualquier evento inesperado que pueda danar a un paciente, visitante o personal',
'Only when a patient is injured','Solo cuando un paciente resulta lesionado',
'Only at the end of each shift','Solo al final de cada turno',
'Only when requested by a supervisor','Solo cuando lo solicita un supervisor','A',
'Incident reports document any unexpected event — falls, medication errors, equipment failures — to improve safety and reduce future risks.',
'Los reportes de incidentes documentan cualquier evento inesperado — caidas, errores de medicacion, fallas de equipo — para mejorar la seguridad y reducir riesgos futuros.');

INSERT INTO questions VALUES ('q082','patient_care_safety','hard',
'Airborne precautions are required for which of the following diseases?',
'Las precauciones aereas son necesarias para cual de las siguientes enfermedades?',
'Tuberculosis, measles, and varicella','Tuberculosis, sarampion y varicela',
'Influenza only','Solo influenza',
'MRSA only','Solo MRSA',
'C. difficile only','Solo C. difficile','A',
'Airborne precautions (negative pressure room, N95 respirator) are required for TB, measles, varicella, and disseminated herpes zoster.',
'Las precauciones aereas (habitacion de presion negativa, respirador N95) son necesarias para TB, sarampion, varicela y herpes zoster diseminado.');

INSERT INTO questions VALUES ('q083','patient_care_safety','easy',
'The correct order for donning PPE is:',
'El orden correcto para colocarse el EPP es:',
'Gown, mask/respirator, goggles, gloves','Bata, mascarilla/respirador, gafas, guantes',
'Gloves, gown, mask, goggles','Guantes, bata, mascarilla, gafas',
'Mask, gloves, gown, goggles','Mascarilla, guantes, bata, gafas',
'Goggles, gloves, gown, mask','Gafas, guantes, bata, mascarilla','A',
'Donning order: gown first, then mask/respirator, then goggles/face shield, then gloves last. Removal is reverse order.',
'Orden de colocacion: bata primero, luego mascarilla/respirador, luego gafas/protector facial, luego guantes al final. La remocion es en orden inverso.');

INSERT INTO questions VALUES ('q084','patient_care_safety','medium',
'A patient is choking and cannot cough, speak, or breathe. The first action is:',
'Un paciente se esta asfixiando y no puede toser, hablar ni respirar. La primera accion es:',
'Perform abdominal thrusts (Heimlich maneuver)','Realizar compresiones abdominales (maniobra de Heimlich)',
'Call 911 and wait','Llamar al 911 y esperar',
'Give the patient water','Darle agua al paciente',
'Pat the patient on the back gently','Dar palmaditas suaves en la espalda del paciente','A',
'For a conscious adult with a complete airway obstruction, perform abdominal thrusts until the object is expelled or the person becomes unconscious.',
'Para un adulto consciente con obstruccion completa de via aerea, realizar compresiones abdominales hasta que el objeto sea expulsado o la persona pierda la consciencia.');

INSERT INTO questions VALUES ('q085','patient_care_safety','easy',
'Sharps (used needles, scalpels) should be disposed of in:',
'Los objetos punzocortantes (agujas usadas, bisturis) deben desecharse en:',
'A puncture-resistant sharps container','Un contenedor de punzocortantes resistente a perforaciones',
'The regular trash','La basura regular',
'A biohazard bag','Una bolsa de riesgo biologico',
'By recapping and placing in the trash','Tapando y colocando en la basura','A',
'Used sharps must be immediately placed in a puncture-resistant, labeled sharps container. Never recap needles.',
'Los punzocortantes usados deben colocarse inmediatamente en un contenedor de punzocortantes resistente a perforaciones y etiquetado. Nunca tape las agujas.');

INSERT INTO questions VALUES ('q086','patient_care_safety','medium',
'When using a wheelchair for patient transport, the healthcare worker should:',
'Al usar una silla de ruedas para transportar pacientes, el trabajador de salud debe:',
'Lock the brakes before the patient sits or stands','Bloquear los frenos antes de que el paciente se siente o se pare',
'Push the wheelchair as fast as possible','Empujar la silla lo mas rapido posible',
'Leave the footrests down while transferring','Dejar los reposapiés abajo mientras se transfiere',
'Allow the patient to stand on the footrests','Permitir que el paciente se pare en los reposapiés','A',
'Always lock wheelchair brakes before transfers to prevent the chair from rolling. Footrests should be raised during transfers.',
'Siempre bloquear los frenos de la silla antes de transferencias para evitar que la silla ruede. Los reposapiés deben estar levantados durante las transferencias.');

INSERT INTO questions VALUES ('q087','patient_care_safety','hard',
'The concept of "sentinel event" refers to:',
'El concepto de "evento centinela" se refiere a:',
'An unexpected event that results in death or serious injury','Un evento inesperado que resulta en muerte o lesion grave',
'A scheduled surgery','Una cirugia programada',
'A routine medication administration','Una administracion rutinaria de medicamentos',
'A patient complaint','Una queja de un paciente','A',
'A sentinel event is an unexpected occurrence involving death or serious physical/psychological injury. It requires a root cause analysis.',
'Un evento centinela es un suceso inesperado que involucra muerte o lesion fisica/psicologica grave. Requiere un analisis de causa raiz.');

INSERT INTO questions VALUES ('q088','patient_care_safety','easy',
'Contact precautions require the healthcare worker to wear:',
'Las precauciones de contacto requieren que el trabajador de salud use:',
'Gloves and a gown','Guantes y bata',
'Only a mask','Solo mascarilla',
'Only gloves','Solo guantes',
'N95 respirator and goggles','Respirador N95 y gafas','A',
'Contact precautions require gloves and gown for any patient contact. Used for MRSA, VRE, C. difficile, and other contact-transmitted organisms.',
'Las precauciones de contacto requieren guantes y bata para cualquier contacto con el paciente. Se usan para MRSA, VRE, C. difficile y otros organismos transmitidos por contacto.');

INSERT INTO questions VALUES ('q089','patient_care_safety','medium',
'When communicating with a patient who has hearing loss, the healthcare worker should:',
'Al comunicarse con un paciente con perdida auditiva, el trabajador de salud debe:',
'Face the patient directly and speak clearly at a normal pace','Mirar al paciente directamente y hablar claramente a un ritmo normal',
'Shout loudly','Gritar fuerte',
'Stand behind the patient','Pararse detras del paciente',
'Write everything down without speaking','Escribir todo sin hablar','A',
'Face the patient, maintain eye contact, speak clearly (not shouting), use gestures, and minimize background noise.',
'Mirar al paciente, mantener contacto visual, hablar claramente (sin gritar), usar gestos y minimizar el ruido de fondo.');

INSERT INTO questions VALUES ('q090','patient_care_safety','easy',
'The purpose of patient identification (using two identifiers) before any procedure is to:',
'El proposito de la identificacion del paciente (usando dos identificadores) antes de cualquier procedimiento es:',
'Prevent medical errors by ensuring the correct patient receives care','Prevenir errores medicos asegurando que el paciente correcto reciba atencion',
'Speed up the registration process','Acelerar el proceso de registro',
'Comply with insurance requirements only','Cumplir solo con requisitos del seguro',
'Satisfy hospital accreditation standards only','Solo satisfacer estandares de acreditacion hospitalaria','A',
'Two patient identifiers (name, DOB, MRN) must be verified before administering medications, blood, or performing procedures to prevent errors.',
'Dos identificadores del paciente (nombre, fecha de nacimiento, numero de expediente) deben verificarse antes de administrar medicamentos, sangre o realizar procedimientos para prevenir errores.');

INSERT INTO questions VALUES ('q091','patient_care_safety','medium',
'Bloodborne pathogen exposure from a needlestick requires the healthcare worker to:',
'La exposicion a patogenos transmitidos por sangre por un pinchazo de aguja requiere que el trabajador de salud:',
'Wash the area immediately and report to supervisor/occupational health','Lave el area inmediatamente y reporte al supervisor/salud ocupacional',
'Apply a bandage and continue working','Aplique un vendaje y continue trabajando',
'Ignore it if wearing gloves','Lo ignore si usaba guantes',
'Wait until the end of the shift to report','Espere hasta el final del turno para reportar','A',
'After a needlestick: immediately wash with soap and water, report to supervisor, seek medical evaluation, and complete an incident report.',
'Despues de un pinchazo: lavar inmediatamente con jabon y agua, reportar al supervisor, buscar evaluacion medica y completar un reporte de incidente.');

INSERT INTO questions VALUES ('q092','patient_care_safety','hard',
'Ergonomic principles in healthcare include:',
'Los principios ergonomicos en salud incluyen:',
'Adjusting the work environment to reduce strain and prevent injury','Ajustar el ambiente de trabajo para reducir tension y prevenir lesiones',
'Working as fast as possible regardless of body position','Trabajar lo mas rapido posible sin importar la posicion del cuerpo',
'Using manual lifting for all patients','Usar levantamiento manual para todos los pacientes',
'Ignoring repetitive motion symptoms','Ignorar sintomas de movimiento repetitivo','A',
'Ergonomics adapts the workplace to the worker: proper workstation height, mechanical lifts, anti-fatigue mats, and breaks to prevent musculoskeletal injuries.',
'La ergonomia adapta el lugar de trabajo al trabajador: altura adecuada de estacion, elevadores mecanicos, tapetes antifatiga y descansos para prevenir lesiones musculoesqueleticas.');

INSERT INTO questions VALUES ('q093','patient_care_safety','easy',
'A Material Safety Data Sheet (MSDS/SDS) provides information about:',
'Una Hoja de Datos de Seguridad (MSDS/SDS) proporciona informacion sobre:',
'Hazardous chemicals in the workplace','Quimicos peligrosos en el lugar de trabajo',
'Patient medications','Medicamentos del paciente',
'Employee schedules','Horarios de empleados',
'Insurance coverage','Cobertura de seguros','A',
'SDS (Safety Data Sheets) provide detailed information about hazardous chemicals: properties, health hazards, first aid, storage, and spill procedures.',
'Las SDS (Hojas de Datos de Seguridad) proporcionan informacion detallada sobre quimicos peligrosos: propiedades, riesgos a la salud, primeros auxilios, almacenamiento y procedimientos de derrames.');

INSERT INTO questions VALUES ('q094','patient_care_safety','medium',
'The healthcare professional should use therapeutic communication by:',
'El profesional de salud debe usar comunicacion terapeutica mediante:',
'Actively listening and using open-ended questions','Escuchar activamente y usar preguntas abiertas',
'Giving personal opinions and advice','Dar opiniones personales y consejos',
'Interrupting the patient to save time','Interrumpir al paciente para ahorrar tiempo',
'Using medical jargon extensively','Usar jerga medica extensamente','A',
'Therapeutic communication includes active listening, open-ended questions, empathy, reflecting, and clarifying to build rapport and understanding.',
'La comunicacion terapeutica incluye escucha activa, preguntas abiertas, empatia, reflexion y clarificacion para construir rapport y comprension.');

INSERT INTO questions VALUES ('q095','patient_care_safety','hard',
'The principle of informed consent requires:',
'El principio de consentimiento informado requiere:',
'That the patient understands the procedure, risks, benefits, and alternatives before agreeing','Que el paciente entienda el procedimiento, riesgos, beneficios y alternativas antes de aceptar',
'Only a signature on a form','Solo una firma en un formulario',
'Verbal agreement without explanation','Acuerdo verbal sin explicacion',
'Consent from the insurance company','Consentimiento de la compania de seguros','A',
'Informed consent requires disclosure of the procedure, risks, benefits, alternatives, and the right to refuse, ensuring the patient can make a voluntary decision.',
'El consentimiento informado requiere divulgacion del procedimiento, riesgos, beneficios, alternativas y el derecho a rechazar, asegurando que el paciente pueda tomar una decision voluntaria.');

INSERT INTO questions VALUES ('q096','patient_care_safety','easy',
'Universal precautions were designed primarily to prevent transmission of:',
'Las precauciones universales fueron disenadas principalmente para prevenir la transmision de:',
'Bloodborne pathogens such as HIV and Hepatitis B','Patogenos transmitidos por sangre como VIH y Hepatitis B',
'Airborne diseases only','Solo enfermedades aereas',
'Foodborne illnesses','Enfermedades transmitidas por alimentos',
'Waterborne diseases','Enfermedades transmitidas por agua','A',
'Universal precautions were developed to prevent transmission of bloodborne pathogens (HIV, HBV, HCV) through blood and body fluids.',
'Las precauciones universales fueron desarrolladas para prevenir la transmision de patogenos sanguineos (VIH, VHB, VHC) a traves de sangre y fluidos corporales.');

INSERT INTO questions VALUES ('q097','patient_care_safety','medium',
'When a patient falls, the healthcare worker should first:',
'Cuando un paciente se cae, el trabajador de salud debe primero:',
'Stay with the patient and assess for injuries','Quedarse con el paciente y evaluar lesiones',
'Help the patient stand up immediately','Ayudar al paciente a levantarse inmediatamente',
'Leave to get help','Irse a buscar ayuda',
'Fill out the incident report','Llenar el reporte de incidente','A',
'First priority: stay with the patient, do not move them, assess for injuries. Then call for help and complete an incident report.',
'Primera prioridad: quedarse con el paciente, no moverlo, evaluar lesiones. Luego llamar por ayuda y completar un reporte de incidente.');

INSERT INTO questions VALUES ('q098','patient_care_safety','medium',
'The correct hand hygiene technique with alcohol-based hand rub requires:',
'La tecnica correcta de higiene de manos con gel a base de alcohol requiere:',
'Rubbing all surfaces of hands until dry (about 20 seconds)','Frotar todas las superficies de las manos hasta secar (aproximadamente 20 segundos)',
'A quick dab on the palms','Una aplicacion rapida en las palmas',
'Rinsing with water after application','Enjuagar con agua despues de la aplicacion',
'Using paper towels to dry','Usar toallas de papel para secar','A',
'Apply sufficient product, rub all surfaces (palms, backs, between fingers, fingertips, thumbs) until completely dry. No rinsing needed.',
'Aplicar suficiente producto, frotar todas las superficies (palmas, dorsos, entre dedos, puntas, pulgares) hasta secar completamente. No se necesita enjuagar.');

INSERT INTO questions VALUES ('q099','patient_care_safety','hard',
'The ethical principle of "beneficence" means:',
'El principio etico de "beneficencia" significa:',
'Acting in the best interest of the patient','Actuar en el mejor interes del paciente',
'Doing no harm','No hacer dano',
'Treating all patients equally','Tratar a todos los pacientes por igual',
'Respecting patient autonomy','Respetar la autonomia del paciente','A',
'Beneficence is the duty to promote good and act in the patient''s best interest. It differs from non-maleficence (do no harm).',
'La beneficencia es el deber de promover el bien y actuar en el mejor interes del paciente. Se diferencia de la no maleficencia (no hacer dano).');

INSERT INTO questions VALUES ('q100','patient_care_safety','easy',
'The abbreviation "STAT" means:',
'La abreviatura "STAT" significa:',
'Immediately','Inmediatamente',
'Scheduled','Programado',
'Standing order','Orden permanente',
'Standard treatment','Tratamiento estandar','A',
'STAT = statim = immediately/at once. Used when an order needs to be carried out right away.',
'STAT = statim = inmediatamente/de una vez. Se usa cuando una orden necesita ejecutarse de inmediato.');

-- ═══════════════════════════════════════════════════════════════════
-- FLASHCARDS — 40 total (10 per domain)
-- ═══════════════════════════════════════════════════════════════════

-- Medical Assisting Flashcards
INSERT INTO flashcards VALUES ('f001','medical_assisting','What are the five vital signs?','Cuales son los cinco signos vitales?','Temperature, Pulse, Respiration, Blood Pressure, Pain','Temperatura, Pulso, Respiracion, Presion Arterial, Dolor');
INSERT INTO flashcards VALUES ('f002','medical_assisting','What does EKG/ECG stand for?','Que significa EKG/ECG?','Electrocardiogram — a test that records the electrical activity of the heart','Electrocardiograma — una prueba que registra la actividad electrica del corazon');
INSERT INTO flashcards VALUES ('f003','medical_assisting','What is the correct order of draw for venipuncture?','Cual es el orden correcto de extraccion para venopuncion?','Blood cultures, Light blue, Red/Gold, Green, Lavender, Gray','Hemocultivos, Azul claro, Rojo/Dorado, Verde, Lavanda, Gris');
INSERT INTO flashcards VALUES ('f004','medical_assisting','What does the suffix "-itis" mean?','Que significa el sufijo "-itis"?','Inflammation (e.g., arthritis = inflammation of joints)','Inflamacion (ej. artritis = inflamacion de articulaciones)');
INSERT INTO flashcards VALUES ('f005','medical_assisting','What are the "Five Rights" of medication administration?','Cuales son los "Cinco Derechos" de la administracion de medicamentos?','Right patient, Right drug, Right dose, Right route, Right time','Paciente correcto, Medicamento correcto, Dosis correcta, Via correcta, Hora correcta');
INSERT INTO flashcards VALUES ('f006','medical_assisting','What is a normal adult blood pressure reading?','Cual es una lectura normal de presion arterial en adultos?','Less than 120/80 mmHg','Menos de 120/80 mmHg');
INSERT INTO flashcards VALUES ('f007','medical_assisting','What angle is used for an intramuscular injection?','Que angulo se usa para una inyeccion intramuscular?','90-degree angle','Angulo de 90 grados');
INSERT INTO flashcards VALUES ('f008','medical_assisting','What does "NPO" mean?','Que significa "NPO"?','Nothing by mouth (nil per os)','Nada por boca (nil per os)');
INSERT INTO flashcards VALUES ('f009','medical_assisting','What is the purpose of an autoclave?','Cual es el proposito de un autoclave?','To sterilize instruments using pressurized steam at 250°F (121°C)','Esterilizar instrumentos usando vapor presurizado a 250°F (121°C)');
INSERT INTO flashcards VALUES ('f010','medical_assisting','What does "hypo-" mean as a prefix?','Que significa "hipo-" como prefijo?','Below normal, under, deficient (e.g., hypoglycemia = low blood sugar)','Por debajo de lo normal, bajo, deficiente (ej. hipoglucemia = azucar baja en sangre)');

-- Pharmacy Technician Flashcards
INSERT INTO flashcards VALUES ('f011','pharmacy_tech','What does "bid" mean on a prescription?','Que significa "bid" en una receta?','Twice a day (bis in die)','Dos veces al dia (bis in die)');
INSERT INTO flashcards VALUES ('f012','pharmacy_tech','How many mL are in 1 tablespoon?','Cuantos mL hay en 1 cucharada?','15 mL','15 mL');
INSERT INTO flashcards VALUES ('f013','pharmacy_tech','What is the generic name for Tylenol?','Cual es el nombre generico de Tylenol?','Acetaminophen','Acetaminofen');
INSERT INTO flashcards VALUES ('f014','pharmacy_tech','What does DEA stand for?','Que significa DEA?','Drug Enforcement Administration — regulates controlled substances','Administracion de Control de Drogas — regula sustancias controladas');
INSERT INTO flashcards VALUES ('f015','pharmacy_tech','Convert: 1 kg = ? pounds','Convertir: 1 kg = ? libras','2.2 pounds','2.2 libras');
INSERT INTO flashcards VALUES ('f016','pharmacy_tech','What is a formulary?','Que es un formulario terapeutico?','A list of approved medications covered by an insurance plan or institution','Una lista de medicamentos aprobados cubiertos por un plan de seguro o institucion');
INSERT INTO flashcards VALUES ('f017','pharmacy_tech','What Schedule are benzodiazepines (e.g., alprazolam)?','En que Clasificacion estan las benzodiazepinas (ej. alprazolam)?','Schedule IV — lower potential for abuse, accepted medical use','Clasificacion IV — menor potencial de abuso, uso medico aceptado');
INSERT INTO flashcards VALUES ('f018','pharmacy_tech','What does USP 797 regulate?','Que regula USP 797?','Standards for sterile compounding in pharmacies','Estandares para preparacion esteril en farmacias');
INSERT INTO flashcards VALUES ('f019','pharmacy_tech','What is the generic name for Zithromax?','Cual es el nombre generico de Zithromax?','Azithromycin','Azitromicina');
INSERT INTO flashcards VALUES ('f020','pharmacy_tech','What does "ac" mean on a prescription?','Que significa "ac" en una receta?','Before meals (ante cibum)','Antes de las comidas (ante cibum)');

-- Health Information Technology Flashcards
INSERT INTO flashcards VALUES ('f021','health_info_tech','What does HIPAA protect?','Que protege HIPAA?','Protected Health Information (PHI) — patient privacy and data security','Informacion de Salud Protegida (PHI) — privacidad del paciente y seguridad de datos');
INSERT INTO flashcards VALUES ('f022','health_info_tech','What is ICD-10-CM used for?','Para que se usa ICD-10-CM?','Diagnosis coding in all healthcare settings','Codificacion de diagnosticos en todos los entornos de salud');
INSERT INTO flashcards VALUES ('f023','health_info_tech','What is CPT used for?','Para que se usa CPT?','Coding medical procedures and services for billing','Codificar procedimientos y servicios medicos para facturacion');
INSERT INTO flashcards VALUES ('f024','health_info_tech','What are the 18 HIPAA identifiers?','Cuales son los 18 identificadores de HIPAA?','Name, DOB, SSN, address, phone, email, MRN, account numbers, and others that can identify a patient','Nombre, fecha de nacimiento, SSN, direccion, telefono, correo, numero de expediente, numeros de cuenta y otros que pueden identificar a un paciente');
INSERT INTO flashcards VALUES ('f025','health_info_tech','What does SOAP stand for in medical charting?','Que significa SOAP en expedientes medicos?','Subjective, Objective, Assessment, Plan','Subjetivo, Objetivo, Evaluacion, Plan');
INSERT INTO flashcards VALUES ('f026','health_info_tech','What is a DRG?','Que es un DRG?','Diagnosis Related Group — used for Medicare inpatient hospital reimbursement','Grupo Relacionado con el Diagnostico — usado para reembolso hospitalario de internacion de Medicare');
INSERT INTO flashcards VALUES ('f027','health_info_tech','What is an EHR?','Que es un EHR?','Electronic Health Record — a digital patient chart shareable across organizations','Expediente Electronico de Salud — un expediente digital del paciente compartible entre organizaciones');
INSERT INTO flashcards VALUES ('f028','health_info_tech','What is the HITECH Act?','Que es la Ley HITECH?','Health Information Technology for Economic and Clinical Health Act — strengthened HIPAA and promoted EHR adoption','Ley de Tecnologia de Informacion de Salud para la Salud Economica y Clinica — fortalecio HIPAA y promovio la adopcion de EHR');
INSERT INTO flashcards VALUES ('f029','health_info_tech','What is the minimum necessary standard?','Que es el estandar de minimo necesario?','Access only the minimum PHI needed to perform your job duties','Acceder solo al minimo de PHI necesario para realizar tus funciones laborales');
INSERT INTO flashcards VALUES ('f030','health_info_tech','What is revenue cycle management?','Que es la gestion del ciclo de ingresos?','The process from patient scheduling through final payment collection','El proceso desde la programacion del paciente hasta la recoleccion final del pago');

-- Patient Care & Safety Flashcards
INSERT INTO flashcards VALUES ('f031','patient_care_safety','What does RACE stand for in a fire emergency?','Que significa RACE en una emergencia de incendio?','Rescue, Alarm, Contain, Extinguish/Evacuate','Rescatar, Alarma, Contener, Extinguir/Evacuar');
INSERT INTO flashcards VALUES ('f032','patient_care_safety','What does PASS stand for (fire extinguisher)?','Que significa PASS (extintor de incendios)?','Pull, Aim, Squeeze, Sweep','Tirar, Apuntar, Apretar, Barrer');
INSERT INTO flashcards VALUES ('f033','patient_care_safety','What are Standard Precautions?','Que son las Precauciones Estandar?','Infection prevention practices used with ALL patients regardless of diagnosis','Practicas de prevencion de infecciones usadas con TODOS los pacientes sin importar el diagnostico');
INSERT INTO flashcards VALUES ('f034','patient_care_safety','What PPE is needed for Contact Precautions?','Que EPP se necesita para Precauciones de Contacto?','Gloves and gown','Guantes y bata');
INSERT INTO flashcards VALUES ('f035','patient_care_safety','What are the four ethical principles in healthcare?','Cuales son los cuatro principios eticos en salud?','Autonomy, Beneficence, Non-maleficence, Justice','Autonomia, Beneficencia, No maleficencia, Justicia');
INSERT INTO flashcards VALUES ('f036','patient_care_safety','What is informed consent?','Que es el consentimiento informado?','Patient understands and agrees to a procedure after learning about risks, benefits, and alternatives','El paciente entiende y acepta un procedimiento despues de conocer riesgos, beneficios y alternativas');
INSERT INTO flashcards VALUES ('f037','patient_care_safety','What are the links in the Chain of Infection?','Cuales son los eslabones de la Cadena de Infeccion?','Infectious agent, Reservoir, Portal of exit, Mode of transmission, Portal of entry, Susceptible host','Agente infeccioso, Reservorio, Puerta de salida, Modo de transmision, Puerta de entrada, Huesped susceptible');
INSERT INTO flashcards VALUES ('f038','patient_care_safety','What is a sentinel event?','Que es un evento centinela?','An unexpected event resulting in death or serious physical/psychological injury','Un evento inesperado que resulta en muerte o lesion fisica/psicologica grave');
INSERT INTO flashcards VALUES ('f039','patient_care_safety','How should sharps be disposed of?','Como deben desecharse los punzocortantes?','In a puncture-resistant, labeled sharps container — never recap needles','En un contenedor de punzocortantes resistente a perforaciones y etiquetado — nunca tape las agujas');
INSERT INTO flashcards VALUES ('f040','patient_care_safety','What are two patient identifiers used before procedures?','Cuales son dos identificadores del paciente usados antes de procedimientos?','Patient name and date of birth (or medical record number)','Nombre del paciente y fecha de nacimiento (o numero de expediente medico)');

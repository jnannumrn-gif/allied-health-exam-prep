-- Allied Health Exam Prep Seed Data: Questions & Flashcards (Bilingual EN/ES)
-- 75 questions across 3 certifications + 30 flashcards

-- CERTIFICATION: medical_assisting (Medical Assistant - CMA/RMA) - 25 questions
-- CERTIFICATION: pharmacy_tech (Pharmacy Technician - PTCB/ExCPT) - 25 questions
-- CERTIFICATION: phlebotomy_tech (Phlebotomy Technician - CPT/PBT) - 25 questions

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
-- CERTIFICATION: phlebotomy_tech — 25 questions
-- ═══════════════════════════════════════════════════════════════════

INSERT INTO questions VALUES ('q051','phlebotomy_tech','easy',
'The most commonly used vein for venipuncture is the:',
'La vena mas comunmente usada para venopuncion es la:',
'Median cubital vein','Vena cubital mediana',
'Basilic vein','Vena basilica',
'Cephalic vein','Vena cefalica',
'Radial vein','Vena radial','A',
'The median cubital vein in the antecubital fossa is the preferred site for venipuncture because it is large, well-anchored, and less painful.',
'La vena cubital mediana en la fosa antecubital es el sitio preferido para venopuncion porque es grande, esta bien anclada y es menos dolorosa.');

INSERT INTO questions VALUES ('q052','phlebotomy_tech','easy',
'The correct order of draw for evacuated tubes begins with:',
'El orden correcto de extraccion para tubos al vacio comienza con:',
'Blood cultures (yellow/black)','Hemocultivos (amarillo/negro)',
'Lavender top (EDTA)','Tapa lavanda (EDTA)',
'Red top (no additive)','Tapa roja (sin aditivo)',
'Green top (heparin)','Tapa verde (heparina)','A',
'The order of draw is: blood cultures, light blue (citrate), red/gold (SST), green (heparin), lavender (EDTA), gray (oxalate/fluoride).',
'El orden de extraccion es: hemocultivos, azul claro (citrato), rojo/dorado (SST), verde (heparina), lavanda (EDTA), gris (oxalato/fluoruro).');

INSERT INTO questions VALUES ('q053','phlebotomy_tech','medium',
'A tourniquet should not be left on for more than:',
'Un torniquete no debe dejarse puesto por mas de:',
'1 minute','1 minuto',
'5 minutes','5 minutos',
'30 seconds','30 segundos',
'3 minutes','3 minutos','A',
'A tourniquet left on for more than 1 minute can cause hemoconcentration, which alters test results.',
'Un torniquete dejado por mas de 1 minuto puede causar hemoconcentracion, lo cual altera los resultados de las pruebas.');

INSERT INTO questions VALUES ('q054','phlebotomy_tech','medium',
'The angle of needle insertion for routine venipuncture is:',
'El angulo de insercion de la aguja para venopuncion de rutina es:',
'15-30 degrees','15-30 grados',
'45-60 degrees','45-60 grados',
'90 degrees','90 grados',
'5-10 degrees','5-10 grados','A',
'The needle should be inserted at a 15-30 degree angle with the bevel up for routine venipuncture.',
'La aguja debe insertarse en un angulo de 15-30 grados con el bisel hacia arriba para venopuncion de rutina.');

INSERT INTO questions VALUES ('q055','phlebotomy_tech','easy',
'Lavender/purple top tubes contain which anticoagulant?',
'Los tubos de tapa lavanda/morada contienen cual anticoagulante?',
'EDTA','EDTA',
'Sodium citrate','Citrato de sodio',
'Heparin','Heparina',
'Potassium oxalate','Oxalato de potasio','A',
'Lavender/purple top tubes contain EDTA (ethylenediaminetetraacetic acid) and are used for CBC, ESR, and blood bank testing.',
'Los tubos de tapa lavanda/morada contienen EDTA (acido etilendiaminotetraacetico) y se usan para hemograma, VSG y pruebas de banco de sangre.');

INSERT INTO questions VALUES ('q056','phlebotomy_tech','medium',
'A capillary puncture on an infant should be performed on the:',
'Una puncion capilar en un bebe debe realizarse en:',
'Medial or lateral plantar surface of the heel','Superficie plantar medial o lateral del talon',
'Fingertip','Punta del dedo',
'Earlobe','Lobulo de la oreja',
'Back of the hand','Dorso de la mano','A',
'Capillary punctures on infants younger than 1 year are performed on the medial or lateral plantar surface of the heel to avoid the calcaneus bone.',
'Las punciones capilares en bebes menores de 1 ano se realizan en la superficie plantar medial o lateral del talon para evitar el hueso calcaneo.');

INSERT INTO questions VALUES ('q057','phlebotomy_tech','hard',
'Hemolysis of a blood specimen can be caused by:',
'La hemolisis de una muestra de sangre puede ser causada por:',
'Using too small a needle gauge, excessive shaking, or drawing back the plunger too fast','Usar un calibre de aguja muy pequeno, agitacion excesiva o tirar del embolo muy rapido',
'Using the correct tube','Usar el tubo correcto',
'Proper centrifugation','Centrifugacion adecuada',
'Room temperature storage','Almacenamiento a temperatura ambiente','A',
'Hemolysis (rupture of red blood cells) can be caused by using too small a needle, mixing too vigorously, forcing blood through the needle, or using a syringe incorrectly.',
'La hemolisis (ruptura de globulos rojos) puede ser causada por usar una aguja muy pequena, mezclar muy vigorosamente, forzar la sangre a traves de la aguja o usar una jeringa incorrectamente.');

INSERT INTO questions VALUES ('q058','phlebotomy_tech','easy',
'Before performing a venipuncture, the phlebotomist must:',
'Antes de realizar una venopuncion, el flebotomista debe:',
'Verify patient identity using two identifiers','Verificar la identidad del paciente usando dos identificadores',
'Start drawing blood immediately','Comenzar a extraer sangre inmediatamente',
'Apply the tourniquet first','Aplicar el torniquete primero',
'Check insurance information','Verificar informacion del seguro','A',
'Patient identification using at least two identifiers (name, DOB, MRN) is the first and most critical step before any blood collection procedure.',
'La identificacion del paciente usando al menos dos identificadores (nombre, fecha de nacimiento, numero de expediente) es el primer y mas critico paso antes de cualquier procedimiento de extraccion de sangre.');

INSERT INTO questions VALUES ('q059','phlebotomy_tech','medium',
'Light blue top tubes are used for:',
'Los tubos de tapa azul claro se usan para:',
'Coagulation studies (PT, PTT, INR)','Estudios de coagulacion (TP, TTP, INR)',
'Complete blood count','Hemograma completo',
'Blood glucose','Glucosa en sangre',
'Blood cultures','Hemocultivos','A',
'Light blue top tubes contain sodium citrate and are used for coagulation testing. They must be filled to the correct volume for accurate results.',
'Los tubos de tapa azul claro contienen citrato de sodio y se usan para pruebas de coagulacion. Deben llenarse al volumen correcto para resultados precisos.');

INSERT INTO questions VALUES ('q060','phlebotomy_tech','medium',
'The antiseptic most commonly used to clean the venipuncture site is:',
'El antiseptico mas comunmente usado para limpiar el sitio de venopuncion es:',
'70% isopropyl alcohol','Alcohol isopropilico al 70%',
'Hydrogen peroxide','Peroxido de hidrogeno',
'Betadine only','Solo betadine',
'Soap and water','Jabon y agua','A',
'70% isopropyl alcohol is the standard antiseptic for routine venipuncture. Povidone-iodine (Betadine) is used for blood cultures and blood alcohol testing.',
'El alcohol isopropilico al 70% es el antiseptico estandar para venopuncion de rutina. Povidona yodada (Betadine) se usa para hemocultivos y pruebas de alcohol en sangre.');

INSERT INTO questions VALUES ('q061','phlebotomy_tech','hard',
'A hematoma at the venipuncture site is most likely caused by:',
'Un hematoma en el sitio de venopuncion es mas probablemente causado por:',
'The needle penetrating through the vein','La aguja penetrando a traves de la vena',
'Using the correct angle','Usar el angulo correcto',
'Applying pressure after removal','Aplicar presion despues de la remocion',
'Using a butterfly needle','Usar una aguja de mariposa','A',
'Hematomas occur when blood leaks into surrounding tissue, usually from the needle going through both walls of the vein or inadequate pressure after needle removal.',
'Los hematomas ocurren cuando la sangre se filtra al tejido circundante, usualmente por la aguja atravesando ambas paredes de la vena o presion inadecuada despues de retirar la aguja.');

INSERT INTO questions VALUES ('q062','phlebotomy_tech','easy',
'After a venipuncture, the patient should apply pressure to the site for at least:',
'Despues de una venopuncion, el paciente debe aplicar presion al sitio por al menos:',
'3-5 minutes','3-5 minutos',
'30 seconds','30 segundos',
'10 minutes','10 minutos',
'No pressure is needed','No se necesita presion','A',
'Pressure should be applied for 3-5 minutes to promote hemostasis. Patients on anticoagulants may need longer pressure.',
'Se debe aplicar presion por 3-5 minutos para promover la hemostasia. Pacientes con anticoagulantes pueden necesitar presion mas prolongada.');

INSERT INTO questions VALUES ('q063','phlebotomy_tech','medium',
'A butterfly (winged infusion) needle is preferred for:',
'Una aguja de mariposa (infusion alada) es preferida para:',
'Difficult veins, hand veins, pediatric, and elderly patients','Venas dificiles, venas de la mano, pacientes pediatricos y ancianos',
'All routine blood draws','Todas las extracciones de sangre de rutina',
'Only IV infusions','Solo infusiones intravenosas',
'Large volume blood draws only','Solo extracciones de sangre de gran volumen','A',
'Butterfly needles are ideal for small, fragile, or difficult veins, such as in hand veins, pediatric patients, and elderly patients.',
'Las agujas de mariposa son ideales para venas pequenas, fragiles o dificiles, como en venas de la mano, pacientes pediatricos y pacientes ancianos.');

INSERT INTO questions VALUES ('q064','phlebotomy_tech','hard',
'If a patient begins to faint (syncope) during a blood draw, the phlebotomist should:',
'Si un paciente comienza a desmayarse (sincope) durante una extraccion de sangre, el flebotomista debe:',
'Remove the needle, apply pressure, lower the patient''s head, and call for help','Retirar la aguja, aplicar presion, bajar la cabeza del paciente y pedir ayuda',
'Continue the blood draw quickly','Continuar la extraccion rapidamente',
'Give the patient water immediately','Darle agua al paciente inmediatamente',
'Leave to get a doctor','Irse a buscar un medico','A',
'If a patient feels faint: remove the tourniquet and needle, apply pressure, lower their head or lay them down, use cold compresses, and call for assistance.',
'Si un paciente se siente debil: retirar el torniquete y la aguja, aplicar presion, bajar su cabeza o acostarlo, usar compresas frias y pedir ayuda.');

INSERT INTO questions VALUES ('q065','phlebotomy_tech','easy',
'The gauge of a needle refers to:',
'El calibre de una aguja se refiere a:',
'The diameter of the needle bore — higher numbers mean smaller needles','El diametro del orificio de la aguja — numeros mayores significan agujas mas pequenas',
'The length of the needle only','Solo la longitud de la aguja',
'The color of the needle cap','El color de la tapa de la aguja',
'The type of blood tube used','El tipo de tubo de sangre usado','A',
'Needle gauge indicates bore diameter. Common gauges: 21G (routine), 22G (smaller veins), 23G (pediatric/butterfly). Higher gauge = smaller needle.',
'El calibre de aguja indica el diametro del orificio. Calibres comunes: 21G (rutina), 22G (venas pequenas), 23G (pediatrico/mariposa). Mayor calibre = aguja mas pequena.');

INSERT INTO questions VALUES ('q066','phlebotomy_tech','medium',
'Specimens for blood gas analysis (ABG) must be:',
'Las muestras para analisis de gases en sangre (ABG) deben:',
'Transported on ice and analyzed within 30 minutes','Transportarse en hielo y analizarse dentro de 30 minutos',
'Left at room temperature for 1 hour','Dejarse a temperatura ambiente por 1 hora',
'Frozen immediately','Congelarse inmediatamente',
'Centrifuged before transport','Centrifugarse antes del transporte','A',
'ABG specimens must be placed on ice immediately and analyzed within 30 minutes to prevent metabolism of oxygen and carbon dioxide by blood cells.',
'Las muestras de ABG deben colocarse en hielo inmediatamente y analizarse dentro de 30 minutos para prevenir el metabolismo de oxigeno y dioxido de carbono por las celulas sanguineas.');

INSERT INTO questions VALUES ('q067','phlebotomy_tech','medium',
'Which of the following is a preanalytical error in phlebotomy?',
'Cual de los siguientes es un error preanalitico en flebotomia?',
'Mislabeling a specimen tube','Etiquetar incorrectamente un tubo de muestra',
'Using the correct order of draw','Usar el orden correcto de extraccion',
'Proper centrifugation','Centrifugacion adecuada',
'Correct test result reporting','Reporte correcto de resultados','A',
'Preanalytical errors occur before testing: mislabeling, incorrect tube, hemolysis, wrong patient ID, and improper specimen handling.',
'Los errores preanaliticos ocurren antes de la prueba: etiquetado incorrecto, tubo equivocado, hemolisis, identificacion erronea del paciente y manejo inadecuado de la muestra.');

INSERT INTO questions VALUES ('q068','phlebotomy_tech','easy',
'Red top tubes (no additive) are used for:',
'Los tubos de tapa roja (sin aditivo) se usan para:',
'Serum chemistry tests, serology, and blood bank','Pruebas de quimica de suero, serologia y banco de sangre',
'CBC only','Solo hemograma',
'Coagulation studies','Estudios de coagulacion',
'Blood gas analysis','Analisis de gases en sangre','A',
'Red top tubes have no anticoagulant and allow blood to clot, producing serum for chemistry tests, serology, and immunohematology.',
'Los tubos de tapa roja no tienen anticoagulante y permiten que la sangre se coagule, produciendo suero para pruebas de quimica, serologia e inmunohematologia.');

INSERT INTO questions VALUES ('q069','phlebotomy_tech','hard',
'Chain of custody procedures are required when:',
'Los procedimientos de cadena de custodia son requeridos cuando:',
'Collecting specimens for legal or forensic purposes (e.g., drug testing)','Recolectando muestras para propositos legales o forenses (ej. pruebas de drogas)',
'Drawing blood for a CBC','Extrayendo sangre para un hemograma',
'Performing a glucose test','Realizando una prueba de glucosa',
'Collecting routine urine samples','Recolectando muestras de orina de rutina','A',
'Chain of custody ensures specimen integrity for legal testing: documented collection, sealed containers, signatures at each transfer, and tamper-evident packaging.',
'La cadena de custodia asegura la integridad de la muestra para pruebas legales: recoleccion documentada, contenedores sellados, firmas en cada transferencia y empaque a prueba de manipulacion.');

INSERT INTO questions VALUES ('q070','phlebotomy_tech','medium',
'Green top tubes contain which anticoagulant?',
'Los tubos de tapa verde contienen cual anticoagulante?',
'Heparin (sodium or lithium)','Heparina (sodio o litio)',
'EDTA','EDTA',
'Sodium citrate','Citrato de sodio',
'No additive','Sin aditivo','A',
'Green top tubes contain heparin (sodium, lithium, or ammonium) and are used for chemistry tests requiring plasma, ammonia levels, and some special chemistry tests.',
'Los tubos de tapa verde contienen heparina (sodio, litio o amonio) y se usan para pruebas de quimica que requieren plasma, niveles de amoniaco y algunas pruebas de quimica especial.');

INSERT INTO questions VALUES ('q071','phlebotomy_tech','easy',
'After completing a blood draw, used needles should be disposed of in:',
'Despues de completar una extraccion de sangre, las agujas usadas deben desecharse en:',
'A puncture-resistant sharps container','Un contenedor de punzocortantes resistente a perforaciones',
'The regular trash','La basura regular',
'A biohazard bag','Una bolsa de riesgo biologico',
'The patient''s bedside table','La mesa de noche del paciente','A',
'Used needles must be immediately placed in a puncture-resistant, labeled sharps container at the point of use. Never recap needles.',
'Las agujas usadas deben colocarse inmediatamente en un contenedor de punzocortantes resistente a perforaciones y etiquetado en el punto de uso. Nunca tape las agujas.');

INSERT INTO questions VALUES ('q072','phlebotomy_tech','medium',
'The term "phlebotomy" literally means:',
'El termino "flebotomia" literalmente significa:',
'Incision of a vein','Incision de una vena',
'Drawing blood','Extraccion de sangre',
'Puncture of an artery','Puncion de una arteria',
'Collection of specimens','Recoleccion de muestras','A',
'Phlebotomy comes from Greek: phlebo (vein) + tomy (incision/cut). It refers to the practice of making an incision in a vein for blood collection.',
'Flebotomia viene del griego: flebo (vena) + tomia (incision/corte). Se refiere a la practica de hacer una incision en una vena para recoleccion de sangre.');

INSERT INTO questions VALUES ('q073','phlebotomy_tech','hard',
'Which condition would require a phlebotomist to avoid using a patient''s arm for venipuncture?',
'Que condicion requeriria que un flebotomista evite usar el brazo de un paciente para venopuncion?',
'An IV line running in that arm, mastectomy on that side, or an AV fistula','Una linea IV en ese brazo, mastectomia en ese lado o una fistula AV',
'A small bruise from a previous draw','Un pequeno moreton de una extraccion anterior',
'The patient is right-handed','El paciente es diestro',
'The patient is wearing long sleeves','El paciente usa mangas largas','A',
'Do not draw from an arm with an IV (contamination risk), on the mastectomy side (lymphedema risk), or near an AV fistula/graft (dialysis access).',
'No extraer de un brazo con IV (riesgo de contaminacion), del lado de la mastectomia (riesgo de linfedema) o cerca de una fistula/injerto AV (acceso de dialisis).');

INSERT INTO questions VALUES ('q074','phlebotomy_tech','easy',
'Blood culture specimens require which type of site preparation?',
'Las muestras de hemocultivo requieren que tipo de preparacion del sitio?',
'Antiseptic scrub with chlorhexidine or povidone-iodine','Limpieza antiseptica con clorhexidina o povidona yodada',
'Regular alcohol swab only','Solo algodol con alcohol regular',
'No preparation needed','No se necesita preparacion',
'Soap and water','Jabon y agua','A',
'Blood cultures require thorough antiseptic preparation (chlorhexidine or povidone-iodine) to prevent contamination by skin flora.',
'Los hemocultivos requieren preparacion antiseptica completa (clorhexidina o povidona yodada) para prevenir contaminacion por flora de la piel.');

INSERT INTO questions VALUES ('q075','phlebotomy_tech','medium',
'The term "lipemia" in a blood specimen refers to:',
'El termino "lipemia" en una muestra de sangre se refiere a:',
'A milky or cloudy appearance due to high fat content','Una apariencia lechosa o turbia debido a alto contenido de grasa',
'A clear and normal sample','Una muestra clara y normal',
'Red-tinged serum from hemolysis','Suero con tono rojizo por hemolisis',
'A dark-colored specimen from dehydration','Una muestra de color oscuro por deshidratacion','A',
'Lipemia causes a milky/turbid appearance in serum or plasma due to high triglyceride levels, often from eating before a fasting test.',
'La lipemia causa una apariencia lechosa/turbia en suero o plasma debido a altos niveles de trigliceridos, frecuentemente por comer antes de una prueba en ayunas.');

-- ═══════════════════════════════════════════════════════════════════
-- FLASHCARDS — 30 total (10 per certification)
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

-- Phlebotomy Technician Flashcards
INSERT INTO flashcards VALUES ('f021','phlebotomy_tech','What is the most commonly used vein for venipuncture?','Cual es la vena mas comunmente usada para venopuncion?','Median cubital vein in the antecubital fossa','Vena cubital mediana en la fosa antecubital');
INSERT INTO flashcards VALUES ('f022','phlebotomy_tech','What is the correct order of draw?','Cual es el orden correcto de extraccion?','Blood cultures, Light blue (citrate), Red/Gold (SST), Green (heparin), Lavender (EDTA), Gray (oxalate/fluoride)','Hemocultivos, Azul claro (citrato), Rojo/Dorado (SST), Verde (heparina), Lavanda (EDTA), Gris (oxalato/fluoruro)');
INSERT INTO flashcards VALUES ('f023','phlebotomy_tech','What does a lavender/purple top tube contain?','Que contiene un tubo de tapa lavanda/morada?','EDTA anticoagulant — used for CBC, ESR, and blood bank testing','Anticoagulante EDTA — usado para hemograma, VSG y pruebas de banco de sangre');
INSERT INTO flashcards VALUES ('f024','phlebotomy_tech','What angle should the needle be inserted for venipuncture?','A que angulo debe insertarse la aguja para venopuncion?','15-30 degrees with bevel facing up','15-30 grados con el bisel hacia arriba');
INSERT INTO flashcards VALUES ('f025','phlebotomy_tech','How long should a tourniquet be left on?','Cuanto tiempo debe dejarse un torniquete?','No more than 1 minute to prevent hemoconcentration','No mas de 1 minuto para prevenir hemoconcentracion');
INSERT INTO flashcards VALUES ('f026','phlebotomy_tech','What is hemolysis?','Que es la hemolisis?','The rupture of red blood cells, causing a reddish tint in serum — invalidates many test results','La ruptura de globulos rojos, causando un tono rojizo en el suero — invalida muchos resultados de pruebas');
INSERT INTO flashcards VALUES ('f027','phlebotomy_tech','What two patient identifiers must be verified before a blood draw?','Que dos identificadores del paciente deben verificarse antes de una extraccion de sangre?','Patient name and date of birth (or medical record number)','Nombre del paciente y fecha de nacimiento (o numero de expediente medico)');
INSERT INTO flashcards VALUES ('f028','phlebotomy_tech','What antiseptic is used for blood culture collection?','Que antiseptico se usa para la recoleccion de hemocultivos?','Chlorhexidine or povidone-iodine (not regular alcohol)','Clorhexidina o povidona yodada (no alcohol regular)');
INSERT INTO flashcards VALUES ('f029','phlebotomy_tech','Where should capillary punctures be performed on infants?','Donde deben realizarse las punciones capilares en bebes?','Medial or lateral plantar surface of the heel','Superficie plantar medial o lateral del talon');
INSERT INTO flashcards VALUES ('f030','phlebotomy_tech','What does "phlebotomy" literally mean?','Que significa literalmente "flebotomia"?','Incision of a vein (from Greek: phlebo = vein, tomy = incision)','Incision de una vena (del griego: flebo = vena, tomia = incision)');


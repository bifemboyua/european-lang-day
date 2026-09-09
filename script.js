const translations = {
  ru:{
    brand:"Европейский день языков",
    heroMonth:"сентября",
    heroTitle:"Европейский<br>день языков",
    heroTagline:"Языки объединяют",
    heroSub2026:"Languages unite! — 2026",
    exploreBtn:"Исследовать языки",
    mapTitle:"Языковая карта Европы",
    mapHint:"Нажмите на точку, чтобы услышать приветствие",
    langsTitle:"Пять языков",
    meaningTitle:"Язык — это больше, чем слова",
    meaningText:"Европейский день языков напоминает о языковом разнообразии континента, культурном взаимодействии и ценности изучения языков как пути к взаимопониманию.",
    quizTitle:"Викторина",
    quizIntro:"Ответьте на 3 случайных вопроса о языках Европы",
    quizStartBtn:"Начать викторину",
    quizRetryBtn:"Пройти ещё раз",
    footerText:"Разные языки. Один континент.",
    phraseLabel:"Разные языки. Один континент.",
    speakersLabel:"носителей",
    resultLabels:{3:"Отличный результат",2:"Очень хорошо",1:"Есть куда расти",0:"Пора открыть для себя ещё один язык"}
  },
  en:{
    brand:"European Day of Languages",
    heroMonth:"September",
    heroTitle:"European<br>Day of Languages",
    heroTagline:"Languages unite",
    heroSub2026:"Languages unite! — 2026",
    exploreBtn:"Explore the languages",
    mapTitle:"Language map of Europe",
    mapHint:"Click a point to hear a greeting",
    langsTitle:"Five languages",
    meaningTitle:"A language is more than words",
    meaningText:"The European Day of Languages celebrates linguistic diversity, cultural exchange and the value of learning languages as a path to mutual understanding.",
    quizTitle:"Quiz",
    quizIntro:"Answer 3 random questions about the languages of Europe",
    quizStartBtn:"Start the quiz",
    quizRetryBtn:"Try again",
    footerText:"Different languages. One continent.",
    phraseLabel:"Different languages. One continent.",
    speakersLabel:"speakers",
    resultLabels:{3:"Excellent result",2:"Very good",1:"Room to grow",0:"Time to discover another language"}
  },
  de:{
    brand:"Europäischer Tag der Sprachen",
    heroMonth:"September",
    heroTitle:"Europäischer<br>Tag der Sprachen",
    heroTagline:"Sprachen verbinden",
    heroSub2026:"Languages unite! — 2026",
    exploreBtn:"Sprachen entdecken",
    mapTitle:"Sprachenkarte Europas",
    mapHint:"Klicken Sie auf einen Punkt für einen Gruß",
    langsTitle:"Fünf Sprachen",
    meaningTitle:"Eine Sprache ist mehr als Worte",
    meaningText:"Der Europäische Tag der Sprachen erinnert an die sprachliche Vielfalt des Kontinents, den kulturellen Austausch und den Wert des Sprachenlernens für gegenseitiges Verständnis.",
    quizTitle:"Quiz",
    quizIntro:"Beantworten Sie 3 zufällige Fragen zu den Sprachen Europas",
    quizStartBtn:"Quiz starten",
    quizRetryBtn:"Nochmal versuchen",
    footerText:"Verschiedene Sprachen. Ein Kontinent.",
    phraseLabel:"Verschiedene Sprachen. Ein Kontinent.",
    speakersLabel:"Sprecher",
    resultLabels:{3:"Ausgezeichnetes Ergebnis",2:"Sehr gut",1:"Noch Luft nach oben",0:"Zeit, eine weitere Sprache zu entdecken"}
  },
  fr:{
    brand:"Journée européenne des langues",
    heroMonth:"septembre",
    heroTitle:"Journée<br>européenne des langues",
    heroTagline:"Les langues nous unissent",
    heroSub2026:"Languages unite! — 2026",
    exploreBtn:"Explorer les langues",
    mapTitle:"Carte linguistique de l'Europe",
    mapHint:"Cliquez sur un point pour entendre une salutation",
    langsTitle:"Cinq langues",
    meaningTitle:"Une langue, c'est plus que des mots",
    meaningText:"La Journée européenne des langues célèbre la diversité linguistique du continent, l'échange culturel et la valeur de l'apprentissage des langues pour la compréhension mutuelle.",
    quizTitle:"Quiz",
    quizIntro:"Répondez à 3 questions aléatoires sur les langues d'Europe",
    quizStartBtn:"Commencer le quiz",
    quizRetryBtn:"Réessayer",
    footerText:"Des langues différentes. Un seul continent.",
    phraseLabel:"Des langues différentes. Un seul continent.",
    speakersLabel:"locuteurs",
    resultLabels:{3:"Excellent résultat",2:"Très bien",1:"Il y a une marge de progression",0:"Il est temps de découvrir une autre langue"}
  },
  es:{
    brand:"Día Europeo de las Lenguas",
    heroMonth:"septiembre",
    heroTitle:"Día Europeo<br>de las Lenguas",
    heroTagline:"Las lenguas nos unen",
    heroSub2026:"Languages unite! — 2026",
    exploreBtn:"Explorar los idiomas",
    mapTitle:"Mapa lingüístico de Europa",
    mapHint:"Haz clic en un punto para escuchar un saludo",
    langsTitle:"Cinco idiomas",
    meaningTitle:"Un idioma es más que palabras",
    meaningText:"El Día Europeo de las Lenguas celebra la diversidad lingüística del continente, el intercambio cultural y el valor de aprender idiomas como camino al entendimiento mutuo.",
    quizTitle:"Cuestionario",
    quizIntro:"Responde 3 preguntas aleatorias sobre los idiomas de Europa",
    quizStartBtn:"Comenzar el cuestionario",
    quizRetryBtn:"Intentar de nuevo",
    footerText:"Idiomas diferentes. Un solo continente.",
    phraseLabel:"Idiomas diferentes. Un solo continente.",
    speakersLabel:"hablantes",
    resultLabels:{3:"Resultado excelente",2:"Muy bien",1:"Hay margen de mejora",0:"Es hora de descubrir otro idioma"}
  }
};

const languages = [
  {
    code:"ru",
    x:520,y:220,
    color:"var(--blue)",
    name:{ru:"Русский",en:"Russian",de:"Russisch",fr:"Russe",es:"Ruso"},
    greeting:{ru:"Привет!",en:"Privet!",de:"Privet!",fr:"Privet !",es:"¡Privet!"},
    mark:{ru:"Славянская группа",en:"Slavic family",de:"Slawische Sprachfamilie",fr:"Famille slave",es:"Familia eslava"},
    detail:{
      ru:"Русский — один из наиболее распространённых славянских языков, использующий кириллический алфавит.",
      en:"Russian is one of the most widely spoken Slavic languages and uses the Cyrillic alphabet.",
      de:"Russisch ist eine der am weitesten verbreiteten slawischen Sprachen und verwendet das kyrillische Alphabet.",
      fr:"Le russe est l'une des langues slaves les plus parlées et utilise l'alphabet cyrillique.",
      es:"El ruso es una de las lenguas eslavas más habladas y utiliza el alfabeto cirílico."
    },
    speakers:"258M"
  },
  {
    code:"en",
    x:250,y:150,
    color:"var(--red)",
    name:{ru:"English",en:"English",de:"Englisch",fr:"Anglais",es:"Inglés"},
    greeting:{ru:"Hello!",en:"Hello!",de:"Hello!",fr:"Hello !",es:"¡Hello!"},
    mark:{ru:"Германская группа",en:"Germanic family",de:"Germanische Sprachfamilie",fr:"Famille germanique",es:"Familia germánica"},
    detail:{
      ru:"English — один из самых изучаемых языков в Европе, широко используемый в бизнесе и науке.",
      en:"English is one of the most widely learned languages in Europe, used extensively in business and science.",
      de:"Englisch ist eine der meistgelernten Sprachen Europas und wird intensiv in Wirtschaft und Wissenschaft genutzt.",
      fr:"L'anglais est l'une des langues les plus apprises en Europe, très utilisée dans les affaires et les sciences.",
      es:"El inglés es uno de los idiomas más aprendidos en Europa, muy utilizado en negocios y ciencia."
    },
    speakers:"1.5B"
  },
  {
    code:"de",
    x:480,y:170,
    color:"var(--ink)",
    name:{ru:"Deutsch",en:"German",de:"Deutsch",fr:"Allemand",es:"Alemán"},
    greeting:{ru:"Hallo!",en:"Hallo!",de:"Hallo!",fr:"Hallo !",es:"¡Hallo!"},
    mark:{ru:"Германская группа",en:"Germanic family",de:"Germanische Sprachfamilie",fr:"Famille germanique",es:"Familia germánica"},
    detail:{
      ru:"Deutsch — язык с самым большим числом носителей в Европейском союзе как родного языка.",
      en:"German has the largest number of native speakers within the European Union.",
      de:"Deutsch hat die meisten Muttersprachler innerhalb der Europäischen Union.",
      fr:"L'allemand compte le plus grand nombre de locuteurs natifs au sein de l'Union européenne.",
      es:"El alemán tiene el mayor número de hablantes nativos dentro de la Unión Europea."
    },
    speakers:"135M"
  },
  {
    code:"fr",
    x:370,y:270,
    color:"var(--green)",
    name:{ru:"Français",en:"French",de:"Französisch",fr:"Français",es:"Francés"},
    greeting:{ru:"Bonjour!",en:"Bonjour!",de:"Bonjour!",fr:"Bonjour !",es:"¡Bonjour!"},
    mark:{ru:"Романская группа",en:"Romance family",de:"Romanische Sprachfamilie",fr:"Famille romane",es:"Familia románica"},
    detail:{
      ru:"Français — официальный язык более чем 25 стран мира и один из рабочих языков ЕС.",
      en:"French is an official language of more than 25 countries and one of the EU's working languages.",
      de:"Französisch ist offizielle Sprache in mehr als 25 Ländern und eine der Arbeitssprachen der EU.",
      fr:"Le français est langue officielle dans plus de 25 pays et l'une des langues de travail de l'UE.",
      es:"El francés es idioma oficial en más de 25 países y una de las lenguas de trabajo de la UE."
    },
    speakers:"320M"
  },
  {
    code:"es",
    x:270,y:400,
    color:"var(--yellow)",
    name:{ru:"Español",en:"Spanish",de:"Spanisch",fr:"Espagnol",es:"Español"},
    greeting:{ru:"¡Hola!",en:"¡Hola!",de:"¡Hola!",fr:"¡Hola !",es:"¡Hola!"},
    mark:{ru:"Романская группа",en:"Romance family",de:"Romanische Sprachfamilie",fr:"Famille romane",es:"Familia románica"},
    detail:{
      ru:"Español является официальным языком в Испании и в большинстве стран Латинской Америки.",
      en:"Spanish is the official language of Spain and most Latin American countries.",
      de:"Spanisch ist die Amtssprache Spaniens und der meisten lateinamerikanischen Länder.",
      fr:"L'espagnol est la langue officielle de l'Espagne et de la plupart des pays d'Amérique latine.",
      es:"El español es el idioma oficial de España y de la mayoría de los países de América Latina."
    },
    speakers:"485M"
  }
];

const quizPool = [
  {id:1,question:{ru:"Какой из этих языков относится к романской языковой группе?",en:"Which of these languages belongs to the Romance family?",de:"Welche dieser Sprachen gehört zur romanischen Sprachfamilie?",fr:"Laquelle de ces langues appartient à la famille romane ?",es:"¿Cuál de estos idiomas pertenece a la familia románica?"},
   answers:[{ru:"Français",en:"French",de:"Französisch",fr:"Français",es:"Francés"},{ru:"Deutsch",en:"German",de:"Deutsch",fr:"Allemand",es:"Alemán"},{ru:"Русский",en:"Russian",de:"Russisch",fr:"Russe",es:"Ruso"}],correct:0},
  {id:2,question:{ru:"Какой алфавит используется в русском языке?",en:"Which alphabet is used for the Russian language?",de:"Welches Alphabet wird für die russische Sprache verwendet?",fr:"Quel alphabet est utilisé pour la langue russe ?",es:"¿Qué alfabeto se usa para el idioma ruso?"},
   answers:[{ru:"Кириллица",en:"Cyrillic",de:"Kyrillisch",fr:"Cyrillique",es:"Cirílico"},{ru:"Латиница",en:"Latin",de:"Lateinisch",fr:"Latin",es:"Latino"},{ru:"Греческий",en:"Greek",de:"Griechisch",fr:"Grec",es:"Griego"}],correct:0},
  {id:3,question:{ru:"Какой язык является германским по происхождению?",en:"Which language is Germanic in origin?",de:"Welche Sprache ist germanischen Ursprungs?",fr:"Quelle langue est d'origine germanique ?",es:"¿Qué idioma es de origen germánico?"},
   answers:[{ru:"Español",en:"Spanish",de:"Spanisch",fr:"Espagnol",es:"Español"},{ru:"Deutsch",en:"German",de:"Deutsch",fr:"Allemand",es:"Alemán"},{ru:"Français",en:"French",de:"Französisch",fr:"Français",es:"Francés"}],correct:1},
  {id:4,question:{ru:"В какой стране испанский имеет официальный статус наряду с другими языками?",en:"In which country does Spanish have official status alongside other languages?",de:"In welchem Land hat Spanisch neben anderen Sprachen offiziellen Status?",fr:"Dans quel pays l'espagnol a-t-il un statut officiel à côté d'autres langues ?",es:"¿En qué país el español tiene estatus oficial junto a otros idiomas?"},
   answers:[{ru:"Испания",en:"Spain",de:"Spanien",fr:"Espagne",es:"España"},{ru:"Германия",en:"Germany",de:"Deutschland",fr:"Allemagne",es:"Alemania"},{ru:"Швеция",en:"Sweden",de:"Schweden",fr:"Suède",es:"Suecia"}],correct:0},
  {id:5,question:{ru:"Какое из этих слов имеет французское происхождение?",en:"Which of these words has a French origin?",de:"Welches dieser Wörter hat einen französischen Ursprung?",fr:"Lequel de ces mots a une origine française ?",es:"¿Cuál de estas palabras tiene origen francés?"},
   answers:[{ru:"Ресторан",en:"Restaurant",de:"Restaurant",fr:"Restaurant",es:"Restaurante"},{ru:"Спутник",en:"Sputnik",de:"Sputnik",fr:"Spoutnik",es:"Sputnik"},{ru:"Кемпинг",en:"Camping",de:"Camping",fr:"Camping",es:"Camping"}],correct:0},
  {id:6,question:{ru:"Сколько официальных языков имеет Европейский союз?",en:"How many official languages does the European Union have?",de:"Wie viele Amtssprachen hat die Europäische Union?",fr:"Combien de langues officielles compte l'Union européenne ?",es:"¿Cuántos idiomas oficiales tiene la Unión Europea?"},
   answers:[{ru:"24",en:"24",de:"24",fr:"24",es:"24"},{ru:"12",en:"12",de:"12",fr:"12",es:"12"},{ru:"30",en:"30",de:"30",fr:"30",es:"30"}],correct:0},
  {id:7,question:{ru:"Какой язык имеет наибольшее число носителей как родного в Европейском союзе?",en:"Which language has the most native speakers in the European Union?",de:"Welche Sprache hat die meisten Muttersprachler in der Europäischen Union?",fr:"Quelle langue compte le plus de locuteurs natifs dans l'Union européenne ?",es:"¿Qué idioma tiene más hablantes nativos en la Unión Europea?"},
   answers:[{ru:"Deutsch",en:"German",de:"Deutsch",fr:"Allemand",es:"Alemán"},{ru:"Français",en:"French",de:"Französisch",fr:"Français",es:"Francés"},{ru:"Español",en:"Spanish",de:"Spanisch",fr:"Espagnol",es:"Español"}],correct:0},
  {id:8,question:{ru:"Какой язык чаще всего изучают как иностранный в мире?",en:"Which language is most commonly learned as a foreign language worldwide?",de:"Welche Sprache wird weltweit am häufigsten als Fremdsprache gelernt?",fr:"Quelle langue est la plus souvent apprise comme langue étrangère dans le monde ?",es:"¿Qué idioma se aprende más comúnmente como lengua extranjera en el mundo?"},
   answers:[{ru:"English",en:"English",de:"Englisch",fr:"Anglais",es:"Inglés"},{ru:"Deutsch",en:"German",de:"Deutsch",fr:"Allemand",es:"Alemán"},{ru:"Русский",en:"Russian",de:"Russisch",fr:"Russe",es:"Ruso"}],correct:0},
  {id:9,question:{ru:"Какая из этих стран не является испаноговорящей официально?",en:"Which of these countries is not officially Spanish-speaking?",de:"Welches dieser Länder ist nicht offiziell spanischsprachig?",fr:"Lequel de ces pays n'est pas officiellement hispanophone ?",es:"¿Cuál de estos países no es oficialmente hispanohablante?"},
   answers:[{ru:"Португалия",en:"Portugal",de:"Portugal",fr:"Portugal",es:"Portugal"},{ru:"Мексика",en:"Mexico",de:"Mexiko",fr:"Mexique",es:"México"},{ru:"Аргентина",en:"Argentina",de:"Argentinien",fr:"Argentine",es:"Argentina"}],correct:0},
  {id:10,question:{ru:"Какой языковой семье принадлежит греческий язык?",en:"Which language family does Greek belong to?",de:"Zu welcher Sprachfamilie gehört Griechisch?",fr:"À quelle famille de langues appartient le grec ?",es:"¿A qué familia lingüística pertenece el griego?"},
   answers:[{ru:"Отдельная греческая ветвь",en:"A separate Hellenic branch",de:"Ein eigener hellenischer Zweig",fr:"Une branche hellénique distincte",es:"Una rama helénica independiente"},{ru:"Романская",en:"Romance",de:"Romanisch",fr:"Romane",es:"Románica"},{ru:"Славянская",en:"Slavic",de:"Slawisch",fr:"Slave",es:"Eslava"}],correct:0},
  {id:11,question:{ru:"Какое из этих слов пришло в русский из немецкого языка?",en:"Which of these words came into Russian from German?",de:"Welches dieser Wörter kam aus dem Deutschen ins Russische?",fr:"Lequel de ces mots est passé en russe depuis l'allemand ?",es:"¿Cuál de estas palabras pasó al ruso desde el alemán?"},
   answers:[{ru:"Бутерброд",en:"Buterbrod (sandwich)",de:"Butterbrot",fr:"Boutèrbrod",es:"Butterbrot"},{ru:"Кофе",en:"Coffee",de:"Kaffee",fr:"Café",es:"Café"},{ru:"Шоколад",en:"Chocolate",de:"Schokolade",fr:"Chocolat",es:"Chocolate"}],correct:0},
  {id:12,question:{ru:"Сколько падежей в немецком языке?",en:"How many grammatical cases does German have?",de:"Wie viele Fälle hat die deutsche Sprache?",fr:"Combien de cas grammaticaux compte l'allemand ?",es:"¿Cuántos casos gramaticales tiene el alemán?"},
   answers:[{ru:"4",en:"4",de:"4",fr:"4",es:"4"},{ru:"6",en:"6",de:"6",fr:"6",es:"6"},{ru:"2",en:"2",de:"2",fr:"2",es:"2"}],correct:0},
  {id:13,question:{ru:"Сколько падежей в русском языке?",en:"How many grammatical cases does Russian have?",de:"Wie viele Fälle hat die russische Sprache?",fr:"Combien de cas grammaticaux compte le russe ?",es:"¿Cuántos casos gramaticales tiene el ruso?"},
   answers:[{ru:"6",en:"6",de:"6",fr:"6",es:"6"},{ru:"3",en:"3",de:"3",fr:"3",es:"3"},{ru:"8",en:"8",de:"8",fr:"8",es:"8"}],correct:0},
  {id:14,question:{ru:"Какой язык использует буквы ñ и ll как отдельные звуки?",en:"Which language uses the letters ñ and ll as distinct sounds?",de:"Welche Sprache verwendet die Buchstaben ñ und ll als eigene Laute?",fr:"Quelle langue utilise les lettres ñ et ll comme sons distincts ?",es:"¿Qué idioma usa las letras ñ y ll como sonidos distintos?"},
   answers:[{ru:"Español",en:"Spanish",de:"Spanisch",fr:"Espagnol",es:"Español"},{ru:"Français",en:"French",de:"Französisch",fr:"Français",es:"Francés"},{ru:"Deutsch",en:"German",de:"Deutsch",fr:"Allemand",es:"Alemán"}],correct:0},
  {id:15,question:{ru:"Какой язык использует умляуты ä, ö, ü?",en:"Which language uses the umlauts ä, ö, ü?",de:"Welche Sprache verwendet die Umlaute ä, ö, ü?",fr:"Quelle langue utilise les trémas ä, ö, ü ?",es:"¿Qué idioma usa las diéresis ä, ö, ü?"},
   answers:[{ru:"Deutsch",en:"German",de:"Deutsch",fr:"Allemand",es:"Alemán"},{ru:"English",en:"English",de:"Englisch",fr:"Anglais",es:"Inglés"},{ru:"Español",en:"Spanish",de:"Spanisch",fr:"Espagnol",es:"Español"}],correct:0},
  {id:16,question:{ru:"Какой язык является родным для наибольшего числа людей в мире?",en:"Which language has the most native speakers in the world?",de:"Welche Sprache hat weltweit die meisten Muttersprachler?",fr:"Quelle langue compte le plus de locuteurs natifs dans le monde ?",es:"¿Qué idioma tiene más hablantes nativos en el mundo?"},
   answers:[{ru:"Китайский (мандарин)",en:"Mandarin Chinese",de:"Mandarin-Chinesisch",fr:"Chinois mandarin",es:"Chino mandarín"},{ru:"English",en:"English",de:"Englisch",fr:"Anglais",es:"Inglés"},{ru:"Español",en:"Spanish",de:"Spanisch",fr:"Espagnol",es:"Español"}],correct:0},
  {id:17,question:{ru:"Какое европейское государство имеет четыре официальных языка?",en:"Which European country has four official languages?",de:"Welches europäische Land hat vier Amtssprachen?",fr:"Quel pays européen a quatre langues officielles ?",es:"¿Qué país europeo tiene cuatro idiomas oficiales?"},
   answers:[{ru:"Швейцария",en:"Switzerland",de:"Schweiz",fr:"Suisse",es:"Suiza"},{ru:"Португалия",en:"Portugal",de:"Portugal",fr:"Portugal",es:"Portugal"},{ru:"Ирландия",en:"Ireland",de:"Irland",fr:"Irlande",es:"Irlanda"}],correct:0},
  {id:18,question:{ru:"Кто из перечисленных является кириллическим языком?",en:"Which of the following is written in the Cyrillic alphabet?",de:"Welche der folgenden Sprachen wird mit dem kyrillischen Alphabet geschrieben?",fr:"Laquelle des langues suivantes s'écrit en alphabet cyrillique ?",es:"¿Cuál de los siguientes idiomas se escribe en alfabeto cirílico?"},
   answers:[{ru:"Русский",en:"Russian",de:"Russisch",fr:"Russe",es:"Ruso"},{ru:"Français",en:"French",de:"Französisch",fr:"Français",es:"Francés"},{ru:"Español",en:"Spanish",de:"Spanisch",fr:"Espagnol",es:"Español"}],correct:0},
  {id:19,question:{ru:"В каком году отмечается первый Европейский день языков?",en:"In which year was the first European Day of Languages celebrated?",de:"In welchem Jahr wurde der erste Europäische Tag der Sprachen gefeiert?",fr:"En quelle année a eu lieu la première Journée européenne des langues ?",es:"¿En qué año se celebró el primer Día Europeo de las Lenguas?"},
   answers:[{ru:"2001",en:"2001",de:"2001",fr:"2001",es:"2001"},{ru:"1995",en:"1995",de:"1995",fr:"1995",es:"1995"},{ru:"2010",en:"2010",de:"2010",fr:"2010",es:"2010"}],correct:0},
  {id:20,question:{ru:"Какая организация учредила Европейский день языков?",en:"Which organization established the European Day of Languages?",de:"Welche Organisation hat den Europäischen Tag der Sprachen eingeführt?",fr:"Quelle organisation a instauré la Journée européenne des langues ?",es:"¿Qué organización estableció el Día Europeo de las Lenguas?"},
   answers:[{ru:"Совет Европы",en:"Council of Europe",de:"Europarat",fr:"Conseil de l'Europe",es:"Consejo de Europa"},{ru:"НАТО",en:"NATO",de:"NATO",fr:"OTAN",es:"OTAN"},{ru:"ООН",en:"United Nations",de:"Vereinte Nationen",fr:"Nations unies",es:"Naciones Unidas"}],correct:0},
  {id:21,question:{ru:"Какой из этих языков не является романским?",en:"Which of these languages is not a Romance language?",de:"Welche dieser Sprachen ist keine romanische Sprache?",fr:"Laquelle de ces langues n'est pas une langue romane ?",es:"¿Cuál de estos idiomas no es una lengua románica?"},
   answers:[{ru:"Русский",en:"Russian",de:"Russisch",fr:"Russe",es:"Ruso"},{ru:"Français",en:"French",de:"Französisch",fr:"Français",es:"Francés"},{ru:"Español",en:"Spanish",de:"Spanisch",fr:"Espagnol",es:"Español"}],correct:0},
  {id:22,question:{ru:"Какой язык является рабочим языком ООН, но не государственным ни в одной стране Европы кроме России?",en:"Which language is a UN working language and, in Europe, official only in Russia?",de:"Welche Sprache ist eine Arbeitssprache der UNO und in Europa nur in Russland Amtssprache?",fr:"Quelle langue est langue de travail de l'ONU et officielle en Europe uniquement en Russie ?",es:"¿Qué idioma es lengua de trabajo de la ONU y oficial en Europa solo en Rusia?"},
   answers:[{ru:"Русский",en:"Russian",de:"Russisch",fr:"Russe",es:"Ruso"},{ru:"Français",en:"French",de:"Französisch",fr:"Français",es:"Francés"},{ru:"Español",en:"Spanish",de:"Spanisch",fr:"Espagnol",es:"Español"}],correct:0},
  {id:23,question:{ru:"Какое слово общего происхождения встречается в английском и немецком языках?",en:"Which word of common origin appears in both English and German?",de:"Welches gemeinsprachige Wort erscheint sowohl im Englischen als auch im Deutschen?",fr:"Quel mot d'origine commune apparaît en anglais et en allemand ?",es:"¿Qué palabra de origen común aparece en inglés y en alemán?"},
   answers:[{ru:"Water / Wasser",en:"Water / Wasser",de:"Water / Wasser",fr:"Water / Wasser",es:"Water / Wasser"},{ru:"Bonjour / Adiós",en:"Bonjour / Adiós",de:"Bonjour / Adiós",fr:"Bonjour / Adiós",es:"Bonjour / Adiós"},{ru:"Привет / Hola",en:"Привет / Hola",de:"Привет / Hola",fr:"Привет / Hola",es:"Привет / Hola"}],correct:0}
];

const state={
  lang:localStorage.getItem("eld_lang")||"ru",
  theme:localStorage.getItem("eld_theme")||"light",
  quizQuestions:[],
  quizIndex:0,
  quizScore:0,
  currentAnswers:[],
  answered:false
};

function applyTheme(){
  document.documentElement.setAttribute("data-theme",state.theme==="dark"?"dark":"light");
  localStorage.setItem("eld_theme",state.theme);
}

function applyLanguage(){
  document.documentElement.setAttribute("lang",state.lang);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    const val=translations[state.lang][key];
    if(val!==undefined) el.innerHTML=val;
  });
  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.lang===state.lang);
  });
  localStorage.setItem("eld_lang",state.lang);
  renderLanguages();
  renderPhrases();
  if(!document.getElementById("quizPlay").hidden){
    renderQuestion();
  }
  if(!document.getElementById("quizResult").hidden){
    renderResult();
  }
}

function renderLanguages(){
  const grid=document.getElementById("languagesGrid");
  grid.innerHTML="";
  languages.forEach(l=>{
    const card=document.createElement("div");
    card.className="lang-card reveal";
    card.tabIndex=0;
    card.setAttribute("role","button");
    card.setAttribute("aria-expanded","false");
    card.innerHTML=`
      <span class="lang-mark">${l.mark[state.lang]}</span>
      <span class="lang-name">${l.name[state.lang]}</span>
      <span class="lang-greeting">${l.greeting[state.lang]}</span>
      <span class="lang-detail">${l.detail[state.lang]}</span>
      <span class="lang-stat">${l.speakers} ${translations[state.lang].speakersLabel}</span>
    `;
    const toggle=()=>{
      const isOpen=card.classList.contains("open");
      document.querySelectorAll(".lang-card").forEach(c=>{
        c.classList.remove("open");
        c.setAttribute("aria-expanded","false");
      });
      if(!isOpen){
        card.classList.add("open");
        card.setAttribute("aria-expanded","true");
      }
    };
    card.addEventListener("click",toggle);
    card.addEventListener("keydown",e=>{
      if(e.key==="Enter"||e.key===" "){
        e.preventDefault();
        toggle();
      }
    });
    grid.appendChild(card);
  });
  observeReveal();
}

function renderPhrases(){
  const stack=document.getElementById("phraseStack");
  stack.innerHTML="";
  languages.forEach(l=>{
    const line=document.createElement("div");
    line.className="phrase-line reveal";
    line.innerHTML=`<span>${translations[l.code].phraseLabel}</span><span>${l.name[state.lang]}</span>`;
    stack.appendChild(line);
  });
  observeReveal();
}

function buildMap(){
  const linesG=document.querySelector(".map-lines");
  const pointsG=document.querySelector(".map-points");
  linesG.innerHTML="";
  pointsG.innerHTML="";
  for(let i=0;i<languages.length;i++){
    for(let j=i+1;j<languages.length;j++){
      const a=languages[i],b=languages[j];
      const line=document.createElementNS("http://www.w3.org/2000/svg","line");
      line.setAttribute("x1",a.x);
      line.setAttribute("y1",a.y);
      line.setAttribute("x2",b.x);
      line.setAttribute("y2",b.y);
      line.setAttribute("stroke","var(--line)");
      line.setAttribute("stroke-width","1");
      linesG.appendChild(line);
    }
  }
  languages.forEach(l=>{
    const g=document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttribute("class","map-point");
    g.setAttribute("tabindex","0");
    g.setAttribute("role","button");
    g.setAttribute("data-lang",l.code);
    const circle=document.createElementNS("http://www.w3.org/2000/svg","circle");
    circle.setAttribute("cx",l.x);
    circle.setAttribute("cy",l.y);
    circle.setAttribute("r","10");
    circle.setAttribute("fill",l.color);
    const text=document.createElementNS("http://www.w3.org/2000/svg","text");
    text.setAttribute("x",l.x);
    text.setAttribute("y",l.y-18);
    text.setAttribute("text-anchor","middle");
    text.textContent=l.name.en;
    g.appendChild(circle);
    g.appendChild(text);
    g.addEventListener("click",e=>showMapTooltip(l,e));
    g.addEventListener("keydown",e=>{
      if(e.key==="Enter"||e.key===" "){
        e.preventDefault();
        showMapTooltip(l,e);
      }
    });
    pointsG.appendChild(g);
  });
}

function showMapTooltip(l,evt){
  let tooltip=document.querySelector(".map-tooltip");
  if(!tooltip){
    tooltip=document.createElement("div");
    tooltip.className="map-tooltip";
    document.querySelector(".map-wrap").appendChild(tooltip);
  }
  const rect=document.querySelector(".europe-map").getBoundingClientRect();
  const wrapRect=document.querySelector(".map-wrap").getBoundingClientRect();
  const scale=rect.width/900;
  const left=(l.x*scale)+(rect.left-wrapRect.left);
  const top=(l.y*scale)+(rect.top-wrapRect.top);
  tooltip.style.left=left+"px";
  tooltip.style.top=top+"px";
  tooltip.textContent=l.greeting[state.lang]+" — "+l.name[state.lang];
  tooltip.classList.add("show");
  clearTimeout(tooltip._t);
  tooltip._t=setTimeout(()=>tooltip.classList.remove("show"),2200);
}

function shuffle(arr){
  const a=arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function startQuiz(){
  const picked=shuffle(quizPool).slice(0,3);
  state.quizQuestions=picked.map(q=>{
    const answerOrder=shuffle(q.answers.map((a,idx)=>idx));
    return {...q,order:answerOrder};
  });
  state.quizIndex=0;
  state.quizScore=0;
  document.getElementById("quizStart").hidden=true;
  document.getElementById("quizResult").hidden=true;
  document.getElementById("quizPlay").hidden=false;
  renderQuestion();
}

function renderQuestion(){
  const q=state.quizQuestions[state.quizIndex];
  document.getElementById("quizStep").textContent=state.quizIndex+1;
  document.getElementById("quizProgressBar").style.width=((state.quizIndex)/3*100)+"%";
  document.getElementById("quizQuestion").textContent=q.question[state.lang];
  const answersBox=document.getElementById("quizAnswers");
  answersBox.innerHTML="";
  state.answered=false;
  q.order.forEach(origIdx=>{
    const btn=document.createElement("button");
    btn.className="quiz-answer";
    btn.textContent=q.answers[origIdx][state.lang];
    btn.setAttribute("data-orig",origIdx);
    btn.addEventListener("click",()=>handleAnswer(origIdx,btn));
    answersBox.appendChild(btn);
  });
}

function handleAnswer(origIdx,btn){
  if(state.answered) return;
  state.answered=true;
  const q=state.quizQuestions[state.quizIndex];
  const correct=origIdx===q.correct;
  if(correct) state.quizScore++;
  document.querySelectorAll(".quiz-answer").forEach(b=>{
    b.disabled=true;
    const idx=parseInt(b.getAttribute("data-orig"));
    if(idx===q.correct) b.classList.add("correct");
    else if(b===btn) b.classList.add("wrong");
  });
  setTimeout(()=>{
    state.quizIndex++;
    if(state.quizIndex<3){
      renderQuestion();
    }else{
      finishQuiz();
    }
  },900);
}

function finishQuiz(){
  document.getElementById("quizProgressBar").style.width="100%";
  document.getElementById("quizPlay").hidden=true;
  document.getElementById("quizResult").hidden=false;
  renderResult();
}

function renderResult(){
  document.getElementById("resultScore").textContent=state.quizScore+" / 3";
  document.getElementById("resultText").textContent=translations[state.lang].resultLabels[state.quizScore];
}

function resetQuiz(){
  document.getElementById("quizResult").hidden=true;
  document.getElementById("quizStart").hidden=false;
}

function observeReveal(){
  const els=document.querySelectorAll(".reveal:not(.in)");
  if(!("IntersectionObserver" in window)){
    els.forEach(el=>el.classList.add("in"));
    return;
  }
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.15});
  els.forEach(el=>observer.observe(el));
}

function initRevealSections(){
  document.querySelectorAll(".section-head,.meaning-text,.quiz-box,.map-wrap").forEach(el=>{
    el.classList.add("reveal");
  });
  observeReveal();
}

document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    state.lang=btn.dataset.lang;
    applyLanguage();
  });
});

document.getElementById("themeToggle").addEventListener("click",()=>{
  state.theme=state.theme==="dark"?"light":"dark";
  applyTheme();
});

document.getElementById("exploreBtn").addEventListener("click",()=>{
  document.getElementById("mapSection").scrollIntoView({behavior:"smooth"});
});

document.getElementById("startQuizBtn").addEventListener("click",startQuiz);
document.getElementById("retryQuizBtn").addEventListener("click",()=>{
  resetQuiz();
  startQuiz();
});

applyTheme();
buildMap();
applyLanguage();
initRevealSections();

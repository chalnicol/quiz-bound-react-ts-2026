import type { Topic } from "../type";

export const topics: Topic[] = [
	// {
	// 	id: "t1",
	// 	name: "JavaScript Fundamentals",
	// 	brief: "Covers variables, loops, and basic syntax.",
	// 	timeLimit: "00:00:05",
	// 	questions: [
	// 		{
	// 			text: "Which keyword is used to declare a constant?",
	// 			options: ["let", "var", "const", "define"],
	// 			answer: "const",
	// 		},
	// 		{
	// 			text: "Which type is not a primitive in JS?",
	// 			options: ["String", "Number", "Object", "Boolean"],
	// 			answer: "Object",
	// 		},
	// 		{
	// 			text: "What does '===' check for?",
	// 			options: ["Value only", "Value and Type", "Reference", "None"],
	// 			answer: "Value and Type",
	// 		},
	// 		{
	// 			text: "How do you write a comment?",
	// 			options: ["//", "#", "/* */", "Both // and /* */"],
	// 			answer: "Both // and /* */",
	// 		},
	// 		{
	// 			text: "Which method adds an element to an array?",
	// 			options: ["push", "add", "insert", "append"],
	// 			answer: "push",
	// 		},
	// 	],
	// },
	// {
	// 	id: "t2",
	// 	name: "React Core",
	// 	brief: "Covers components, props, and state.",
	// 	timeLimit: "00:01:00",

	// 	questions: [
	// 		{
	// 			text: "What is the primary way to pass data?",
	// 			options: ["State", "Props", "Context", "Redux"],
	// 			answer: "Props",
	// 		},
	// 		{
	// 			text: "Which hook manages state?",
	// 			options: ["useRef", "useEffect", "useState", "useMemo"],
	// 			answer: "useState",
	// 		},
	// 		{
	// 			text: "What is the return type of a component?",
	// 			options: ["HTML", "JSX", "XML", "JSON"],
	// 			answer: "JSX",
	// 		},
	// 		{
	// 			text: "How do you handle side effects?",
	// 			options: ["useEffect", "useLayout", "useCallback", "useMemo"],
	// 			answer: "useEffect",
	// 		},
	// 		{
	// 			text: "Which tool bundles React apps?",
	// 			options: ["Vite", "Grunt", "Gulp", "Bower"],
	// 			answer: "Vite",
	// 		},
	// 	],
	// },
	// {
	// 	id: "t3",
	// 	name: "CSS Layouts",
	// 	brief: "Covers Flexbox, Grid, and Positioning.",
	// 	timeLimit: "00:01:00",

	// 	questions: [
	// 		{
	// 			text: "Which display type aligns items in a row?",
	// 			options: ["block", "flex", "inline", "none"],
	// 			answer: "flex",
	// 		},
	// 		{
	// 			text: "Which property centers items on cross axis?",
	// 			options: ["justify-content", "align-items", "gap", "padding"],
	// 			answer: "align-items",
	// 		},
	// 		{
	// 			text: "What property creates space between items?",
	// 			options: ["margin", "padding", "gap", "border"],
	// 			answer: "gap",
	// 		},
	// 		{
	// 			text: "How to fix an element to the screen?",
	// 			options: ["relative", "absolute", "fixed", "static"],
	// 			answer: "fixed",
	// 		},
	// 		{
	// 			text: "What is the default position?",
	// 			options: ["static", "relative", "absolute", "sticky"],
	// 			answer: "static",
	// 		},
	// 	],
	// },
	// {
	// 	id: "t4",
	// 	name: "Web Performance",
	// 	brief: "Covers loading, caching, and optimization.",
	// 	timeLimit: "00:01:00",

	// 	questions: [
	// 		{
	// 			text: "What does LCP stand for?",
	// 			options: [
	// 				"Large Content Paint",
	// 				"Last Content Paint",
	// 				"Load Content Point",
	// 				"Large Content Point",
	// 			],
	// 			answer: "Large Content Paint",
	// 		},
	// 		{
	// 			text: "Which file format is best for icons?",
	// 			options: ["PNG", "JPEG", "SVG", "GIF"],
	// 			answer: "SVG",
	// 		},
	// 		{
	// 			text: "What is tree shaking?",
	// 			options: [
	// 				"Removing dead code",
	// 				"Compressing files",
	// 				"Caching assets",
	// 				"Lazy loading",
	// 			],
	// 			answer: "Removing dead code",
	// 		},
	// 		{
	// 			text: "What does CDN stand for?",
	// 			options: [
	// 				"Content Data Network",
	// 				"Content Delivery Network",
	// 				"Central Data Node",
	// 				"Cloud Delivery Node",
	// 			],
	// 			answer: "Content Delivery Network",
	// 		},
	// 		{
	// 			text: "Which header enables caching?",
	// 			options: [
	// 				"Cache-Control",
	// 				"Set-Cookie",
	// 				"Content-Type",
	// 				"Connection",
	// 			],
	// 			answer: "Cache-Control",
	// 		},
	// 	],
	// },
	{
		id: "t5",
		name: "Clerical Operations - Alphabetizing",
		brief: "Arrange each group of items in alphabetical order.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "A. Commission on The Filipino Language<br/> B. Commission of Human Rights<br/> C. Commission of Higher Education <br/> D. Commission on Population",
				options: ["ABCD", "CBDA", "BCDA", "ACBD"],
				answer: "CBDA",
			},
			{
				text: "A. Cooperative Development Authority<br/> B. Cottage Industry Development Enterprise<br/> C. Cottage Industry Technology Center<br/> D. Council for the welfare of Children",
				options: ["ABCD", "ACBD", "BCAD", "CBAD"],
				answer: "ABCD",
			},
			{
				text: "A. Food and Nutrition Research Institute<br/> B. Fiber Industry Development Authority<br/> C. Foreign  Service Institute<br/> D. Family Planning Organization of the Philippines",
				options: ["ABCD", "BACD", "DBCA", "DBAC"],
				answer: "DBAC",
			},
			{
				text: "A. Insurance Commission<br/> B. Industrial Technology Development Institute<br/> C. Institute of Labor and Manpower Studies<br/> D. Instructional Materials Corporation",
				options: ["BDCA", "BACD", "BCDA", "BADC"],
				answer: "BCDA",
			},
			{
				text: "A. Presidential Commission on Good Goverment<br/> B. Presidential Commission to Fight Poverty<br/> C. Presidential Commission for the Urban Poor<br/> D. Presidential Commission on Human Rights",
				options: ["CBAD", "CBDA", "CABD", "CADB"],
				answer: "CADB",
			},
			{
				text: "A. AA Industrial Chemical Supply<br/> B. AB Capital and Investment Corporation<br/> C. A Soriano Aviation Incorporated<br/> D. A-1 Driving Company Incorporated",
				options: ["DCAB", "DCBA", "ABCD", "CABD"],
				answer: "DCAB",
			},
			{
				text: "A. Ayala Plans InC. <br/> B. Ayala Health Care InC. <br/> C. Ayala Land InC. <br/> D. Ayala Life Insurance InC. ",
				options: ["BCDA", "ABCD", "DCBA", "BACD"],
				answer: "BCDA",
			},
			{
				text: "A. Filspin Incorporated<br/> B. Filway Marketing InC. <br/> C. Filsov Shipping Company<br/> D. Fina Products InC. ",
				options: ["ACDB", "CABD", "BCAD", "BACD"],
				answer: "CABD",
			},
			{
				text: "A. John Shannon Montessori<br/> B. John Paul Hospital<br/> C. John Robert Powers<br/> D. John Nelson and Associates",
				options: ["DACB", "DBCA", "DCBA", "DABC"],
				answer: "DBCA",
			},
			{
				text: "A. Sports Zone Restaurant<br/> B. Sports Resources InC. <br/> C. Sports Values InC. <br/> D. Sports House and General Merchandise",
				options: ["ABCD", "BCDA", "CBDA", "DBCA"],
				answer: "DBCA",
			},
			{
				text: "A. Abad, Josephine<br/> B. Abad, Jason<br/> C. Abad, Joseph<br/> D. Abad, Jane",
				options: ["DBCA", "DBAC", "BDCA", "BCDA"],
				answer: "DBCA",
			},
			{
				text: "A. St. Stephen's School<br/> B. St. Stephen's University<br/> C. St. Scholastica's Academy<br/> D. St. Scholastica's College",
				options: ["ABCD", "CDBA", "CDAB", "DCAB"],
				answer: "CDAB",
			},
			{
				text: "A. Santos, Anita<br/> B. Santos, Ana<br/> C. Santos, Antonio<br/> D. Santos, Anthony",
				options: ["CDBA", "DCBA", "BADC", "BACD"],
				answer: "BADC",
			},
			{
				text: "A. Philippine Daily Inquirer<br/> B. Philippine Star<br/> C. Philippine Herald<br/> D. Philippine Tribune",
				options: ["ABCD", "ACBD", "ADCB", "ACDB"],
				answer: "ACBD",
			},
			{
				text: "A. Luna, Antonio<br/> B. Luna, Juan<br/> C. Luna, Olive<br/> D. Luna, Oliver",
				options: ["ABCD", "ABDC", "ACBD", "ADCB"],
				answer: "ABCD",
			},
			{
				text: "A. Felimon, Jason<br/> B. Felipe, Julian<br/> C. Felimon, Jamie<br/> D. Felipe, Julia",
				options: ["CADB", "ACBD", "CABD", "ACDB"],
				answer: "CADB",
			},
			{
				text: "A. UP Institute for Small Scale Industries<br/> B. UP Institute for Science and Math Education<br/> C. UP Institute of Biology<br/> D. UP Institute of Chemistry",
				options: ["ABCD", "BACD", "CDAB", "CDBA"],
				answer: "CDBA",
			},
			{
				text: "A. Bureau of Post<br/> B. Bureau of Internal Revenue<br/> C. Bureau of Mines<br/> D. Bureau of Fisheries and Aquatic Resources",
				options: ["DBCA", "DABC", "DCBA", "DBAC"],
				answer: "DBCA",
			},
			{
				text: "A. Rancho, Elian<br/> B. Railon, Michel<br/> C. Ramirez, Sean<br/> D. Rancho, Elaine",
				options: ["BCAD", "BDAC", "BCDA", "BACD"],
				answer: "BCDA",
			},
			{
				text: "A. Quesada, Arianne<br/> B. Quisumbing, Armie<br/> C. Quintin, Adela<br/> D. Quezon, Aurora",
				options: ["ABCD", "ADCB", "ACBD", "ABDC"],
				answer: "ADCB",
			},
		],
	},
	{
		id: "t6",
		name: "English - Synonyms",
		brief: "Choose the letter that corresponds to the word closest in meaning to the bold and italicized word in the sentence.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "We should never be <b class='font-bold italic text-slate-500 dark:text-slate-400'>apathetic</b> towards other people for we have a social responsibility to fulfill.",
				options: ["indifferent", "concerned", "generous", "worried"],
				answer: "indifferent",
			},
			{
				text: "A good leader should be <b class='font-bold italic text-slate-500 dark:text-slate-400'>cognizant</b> of the numerous issues that affect his constituents.",
				options: ["aware", "uninformed", "confused", "idealistic"],
				answer: "aware",
			},
			{
				text: "Always be careful not to issue any <b class='font-bold italic text-slate-500 dark:text-slate-400'>disparaging</b> remarks against other people.",
				options: ["praising", "confusing", "damaging", "discouraging"],
				answer: "damaging",
			},
			{
				text: "Flowers are <b class='font-bold italic text-slate-500 dark:text-slate-400'>ephermal</b> ; they bloom yet whiter in a week or so later.",
				options: ["shrivel", "long lasting", "beautiful", "short lived"],
				answer: "short lived",
			},
			{
				text: "A <b class='font-bold italic text-slate-500 dark:text-slate-400'>fastidious</b> person will never find true happiness.",
				options: ["simple", "choosy", "greedy", "contented"],
				answer: "choosy",
			},
			{
				text: "The Ortigas Center is filled with <b class='font-bold italic text-slate-500 dark:text-slate-400'>gargantuan</b> buildings, some having up to 50 floors.",
				options: ["crowded", "old and weak", "first class", "gigantic"],
				answer: "gigantic",
			},
			{
				text: "Nobody liked <b class='font-bold italic text-slate-500 dark:text-slate-400'>haughty</b> Monty who kept bragging about his riches.",
				options: ["arrogant", "foolish", "respectable", "dependable"],
				answer: "arrogant",
			},
			{
				text: "The corrupt policeman was discharged from service due to his <b class='font-bold italic text-slate-500 dark:text-slate-400'>ignominous</b> act of accepting bribes.",
				options: ["honorable", "disrespectable", "unwanted", "remarkable"],
				answer: "disrespectable",
			},
			{
				text: "The <b class='font-bold italic text-slate-500 dark:text-slate-400'>impudent</b> child was scolded for answering back to older people.",
				options: ["respectful", "honorable", "clever", "rude"],
				answer: "rude",
			},
			{
				text: "Spores are <b class='font-bold italic text-slate-500 dark:text-slate-400'>infinitesimal</b> reproductive units of fungi and lower plants.",
				options: ["invisible", "interesting", "microscopic", "large"],
				answer: "microscopic",
			},
			{
				text: "Never trust an <b class='font-bold italic text-slate-500 dark:text-slate-400'>insidious</b> person because you'll never know what goes on in his mind. ",
				options: ["honest", "treacherous", "loyal", "trustworthy"],
				answer: "treacherous",
			},
			{
				text: "Jessica is an <b class='font-bold italic text-slate-500 dark:text-slate-400'>irascible</b> girl who frequently has tantrums.",
				options: ["impatient", "cheerful", "hot-tempered", "jolly"],
				answer: "hot-tempered",
			},
			{
				text: "Surgeons should be <b class='font-bold italic text-slate-500 dark:text-slate-400'>meticulous</b> especially when performing operations",
				options: ["careful", "careless", "strict", "lenient"],
				answer: "careful",
			},
			{
				text: "Christ teaches us to be concerned about putting up riches in heaven and not to be obsessed with <b class='font-bold italic text-slate-500 dark:text-slate-400'>mundane</b> things.",
				options: ["temporary", "worldly", "insignificant", "important"],
				answer: "worldly",
			},
			{
				text: "Rochelle has difficulty seeing things from afar because she is <b class='font-bold italic text-slate-500 dark:text-slate-400'>myopic</b>",
				options: ["cross-eyed", "eagle-eyed", "farsighted", "nearsighted"],
				answer: "nearsighted",
			},
			{
				text: "Regina, being a child of three, is <b class='font-bold italic text-slate-500 dark:text-slate-400'>oblivious</b> to the world around her.",
				options: ["careful", "carefree", "aware", "unmindful"],
				answer: "unmindful",
			},
			{
				text: "Man can never be <b class='font-bold italic text-slate-500 dark:text-slate-400'>omniscient</b> like God. ",
				options: ["all-knowing", "logical", "immortal", "miraculous"],
				answer: "all-knowing",
			},
			{
				text: "The <b class='font-bold italic text-slate-500 dark:text-slate-400'>piquant</b> mouse was able to find its way out of the maze in a short while.",
				options: ["dumb", "clever", "small", "unusual"],
				answer: "clever",
			},
			{
				text: "It is now <b class='font-bold italic text-slate-500 dark:text-slate-400'>plausible</b> to say that someday, interplanetary travel will no longer be impossible.",
				options: ["reasonable", "unusual", "illogical", "extraordinary"],
				answer: "reasonable",
			},
			{
				text: "A <b class='font-bold italic text-slate-500 dark:text-slate-400'>prudent</b> person is not easily deceived. ",
				options: ["loyal", "careless", "wise", "foolish"],
				answer: "wise",
			},
			{
				text: "\"Spare the rod and spoil the child\" is a common <b class='font-bold italic text-slate-500 dark:text-slate-400'>aphorism</b>.",
				options: ["slogan", "battle cry", "proverb", "motto"],
				answer: "proverb",
			},
			{
				text: "Charmaine's <b class='font-bold italic text-slate-500 dark:text-slate-400'>deportment</b> is highly commendable.",
				options: ["belief", "behavior", "intelligence", "competence"],
				answer: "behavior",
			},
			{
				text: "For <b class='font-bold italic text-slate-500 dark:text-slate-400'>enmity</b> and hate are contrary to friendship and concord. ",
				options: ["agreement", "mutual hatred", "confusion", "division"],
				answer: "mutual hatred",
			},
			{
				text: "The Filipino's <b class='font-bold italic text-slate-500 dark:text-slate-400'>fortitude</b> is the reason why he seldom complains.",
				options: [
					"endurance",
					"peace-loving",
					"discontent",
					"satisfaction",
				],
				answer: "endurance",
			},
			{
				text: "Poverty should never viewed as an <b class='font-bold italic text-slate-500 dark:text-slate-400'>impedement</b> towards attaining good education.",
				options: ["reason", "way", "link", "obstruction"],
				answer: "obstruction",
			},
			{
				text: "The students were <b class='font-bold italic text-slate-500 dark:text-slate-400'>upbraided</b> for misbehaving during the assembly.",
				options: ["praised", "honored", "scolded", "stopped"],
				answer: "scolded",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Urbane</b> people are appalled by rude behavior.",
				options: ["well-mannered", "ill-mannered", "modern", "rich"],
				answer: "well-mannered",
			},
			{
				text: "Clowns are never <b class='font-bold italic text-slate-500 dark:text-slate-400'>vapid</b> but the sick usually are.",
				options: [
					"lively and energetic",
					"lacking spirits and liveliness",
					"clumsy",
					"funny",
				],
				answer: "lacking spirits and liveliness",
			},
			{
				text: "The client was asked to verify the <b class='font-bold italic text-slate-500 dark:text-slate-400'>veracity</b> of the statement of accounts issued. ",
				options: ["accuracy", "discrepancy", "redundancy", "mistake"],
				answer: "accuracy",
			},
			{
				text: "Dentists believe that babies should be <b class='font-bold italic text-slate-500 dark:text-slate-400'>weaned</b> from freeding bottles as soon as possible to prevent <br/> malformation of the infant's erupting teeth.",
				options: [
					"get used to",
					"develop hatred for",
					"free from dependence",
					"make more dependent",
				],
				answer: "free from dependence",
			},
			{
				text: "Some people believe that Balete Drive is haunted because a <b class='font-bold italic text-slate-500 dark:text-slate-400'>wraith</b> of a woman appears here.",
				options: ["shadow", "statue", "reflection", "ghost"],
				answer: "ghost",
			},
			{
				text: "She looks <b class='font-bold italic text-slate-500 dark:text-slate-400'>unkempt</b> with her wavy coarse hair falling freely behind her back.",
				options: ["pretty", "neat", "prim and proper", "untidy"],
				answer: "untidy",
			},
			{
				text: "The room is <b class='font-bold italic text-slate-500 dark:text-slate-400'>topsy-turvy</b> , as if a hurricane just passed through.",
				options: ["disorderly", "destroyed", "orderly", "clean"],
				answer: "disorderly",
			},
			{
				text: "Sherloch Holmes is a famous <b class='font-bold italic text-slate-500 dark:text-slate-400'>sleuth</b>.",
				options: ["adventurer", "scientist", "detective", "criminal"],
				answer: "detective",
			},
			{
				text: "Mindy <b class='font-bold italic text-slate-500 dark:text-slate-400'>rummaged</b> through the chest of old clothes for something usable to donate.",
				options: [
					"searched through",
					"wandered through",
					"passed through",
					"scattered",
				],
				answer: "searched through",
			},
			{
				text: "Only a <b class='font-bold italic text-slate-500 dark:text-slate-400'>ruffian</b> could do such a heinous act of killing a helpless child. ",
				options: [
					"an insane person",
					"a brutal person",
					"a lovable person",
					"a confused person",
				],
				answer: "a brutal person",
			},
			{
				text: "To <b class='font-bold italic text-slate-500 dark:text-slate-400'>augment</b> the policemen's income, the goverment allowed them to take part-time jobs.",
				options: ["increase", "contribute", "limit", "remove"],
				answer: "increase",
			},
			{
				text: "A person's reputation is very important so be very careful not to <b class='font-bold italic text-slate-500 dark:text-slate-400'>caluminate</b> anybody.",
				options: ["embarass", "abuse", "tease", "slander"],
				answer: "slander",
			},
			{
				text: "The footprints were <b class='font-bold italic text-slate-500 dark:text-slate-400'>effaced</b> when the floor was mopped. ",
				options: ["printed", "erased", "deformed", "developed"],
				answer: "erased",
			},
			{
				text: "The plane <b class='font-bold italic text-slate-500 dark:text-slate-400'>overshot</b> the runway and landed on a ditch.",
				options: [
					"passed through",
					"passed by",
					"went beyond",
					"did not reach",
				],
				answer: "went beyond",
			},
		],
	},
	{
		id: "t7",
		name: "English - Antonym",
		brief: "Choose the letter that corresponds to the word opposite in meaning to the italicized word or phrase in the sentence.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "Czarmaine <b class='font-bold italic text-slate-500 dark:text-slate-400'>accompanied</b> her sister to the drugstore.",
				options: [
					"followed",
					"let go on one's own",
					"left behind",
					"stopped",
				],
				answer: "let go on one's own",
			},
			{
				text: "Beside the <b class='font-bold italic text-slate-500 dark:text-slate-400'>boulevard</b> are gigantic buildings.",
				options: ["alley", "street", "avenue", "road"],
				answer: "alley",
			},
			{
				text: "He often got into trouble because he was <b class='font-bold italic text-slate-500 dark:text-slate-400'>brusque</b>.",
				options: ["blunt", "rude", "refined", "curt"],
				answer: "refined",
			},
			{
				text: "The reporter's <b class='font-bold italic text-slate-500 dark:text-slate-400'>candid</b> remarks caught the mayoralty candidate off-guarD. ",
				options: ["secret", "frank", "well-thought", "reserved"],
				answer: "well-thought",
			},
			{
				text: "The mean boys <b class='font-bold italic text-slate-500 dark:text-slate-400'>derided</b> the sickly boy.",
				options: ["made fun of", "ridiculed", "praised", "abandoned"],
				answer: "praised",
			},
			{
				text: "Charm was <b class='font-bold italic text-slate-500 dark:text-slate-400'>ecstatic</b> when she won the first prixe in the short story writing contest.",
				options: ["melancholic", "overjoyed", "worried", "energetic"],
				answer: "melancholic",
			},
			{
				text: "Migraine headaches are <b class='font-bold italic text-slate-500 dark:text-slate-400'>excruciating</b>.",
				options: ["extremely painful", "mild pain", "painless", "healing"],
				answer: "painless",
			},
			{
				text: "The quiz proved to be <b class='font-bold italic text-slate-500 dark:text-slate-400'>facile</b> so the students got high scores.",
				options: ["difficult", "easy", "average", "answerable"],
				answer: "difficult",
			},
			{
				text: "The <b class='font-bold italic text-slate-500 dark:text-slate-400'>garrulous</b> girls were distanced from each other.",
				options: ["mute", "talkative", "behaved", "quiet"],
				answer: "quiet",
			},
			{
				text: "The <b class='font-bold italic text-slate-500 dark:text-slate-400'>heathens</b> used to practice cannibalism.",
				options: [
					"uncivilized people",
					"barbaric people",
					"old people",
					"cultured people",
				],
				answer: "cultured people",
			},
			{
				text: "Keep on believing that physical disability is not a <b class='font-bold italic text-slate-500 dark:text-slate-400'>hindrance</b> to success.",
				options: ["block", "stepping stone", "opportunity", "difficulty"],
				answer: "stepping stone",
			},
			{
				text: "Never operate a machine once you are <b class='font-bold italic text-slate-500 dark:text-slate-400'>inebriated</b>.",
				options: ["sober", "drunk", "sleepy", "active"],
				answer: "sober",
			},
			{
				text: "The people <b class='font-bold italic text-slate-500 dark:text-slate-400'>inveighed</b> against the sharp increase in oil prices.",
				options: ["admitted", "amended", "accepted", "deliberated"],
				answer: "accepted",
			},
			{
				text: "Some people believe that breaking mirror is a <b class='font-bold italic text-slate-500 dark:text-slate-400'>jinx</b>.",
				options: ["bad luck", "evil", "expensive", "good luck"],
				answer: "good luck",
			},
			{
				text: "The players were confused when the <b class='font-bold italic text-slate-500 dark:text-slate-400'>kibitzers</b> suddenly buttered-in during the team's huddle.",
				options: ["advisers", "spectators", "onlookers", "crowd"],
				answer: "advisers",
			},
			{
				text: "The <b class='font-bold italic text-slate-500 dark:text-slate-400'>lanky</b> lad stood out among the average-sized students.",
				options: [
					"fierce-looking",
					"gigantic",
					"short and stout",
					"tall and thin",
				],
				answer: "short and stout",
			},
			{
				text: "The sickly dog was given <b class='font-bold italic text-slate-500 dark:text-slate-400'>lethal</b> dose of morphine tablets.",
				options: ["fatal", "safe", "deadly", "nasty"],
				answer: "safe",
			},
			{
				text: "Heinous criminals are truly <b class='font-bold italic text-slate-500 dark:text-slate-400'>loathsome</b>.",
				options: ["repugnant", "foul", "adorable", "nasty"],
				answer: "adorable",
			},
			{
				text: "We listened attentively to the <b class='font-bold italic text-slate-500 dark:text-slate-400'>mellifluous</b> sound produced by the Philippine Philharmonic OrchestrA. ",
				options: ["harsh", "resonant", "melodious", "mellow"],
				answer: "harsh",
			},
			{
				text: "The free medical and dental checkup conducted by the AFP Group is just a proof of their <b class='font-bold italic text-slate-500 dark:text-slate-400'>munifecence</b>.",
				options: [
					"committment",
					"generosity",
					"extravagance",
					"stinginess",
				],
				answer: "stinginess",
			},
			{
				text: "Justice calls for penalizing <b class='font-bold italic text-slate-500 dark:text-slate-400'>nefarious</b> acts.",
				options: ["honorable", "detestable", "infamous", "vile"],
				answer: "honorable",
			},
			{
				text: "The MSA Reviewer Books are <b class='font-bold italic text-slate-500 dark:text-slate-400'>noteworthy</b> materials.",
				options: ["remarkable", "substantial", "trivial", "significant"],
				answer: "trivial",
			},
			{
				text: "You will never get sufficient nourishment if you are <b class='font-bold italic text-slate-500 dark:text-slate-400'>obdurate</b> in refusing to eat vegetables.",
				options: ["stubborn", "obedient", "firm", "willful"],
				answer: "obedient",
			},
			{
				text: "Don't be so <b class='font-bold italic text-slate-500 dark:text-slate-400'>obtrusive</b> but instead, mind your own business.",
				options: ["reserved", "snoopy", "nosey", "interfering"],
				answer: "reserved",
			},
			{
				text: "I admire people who are modest their <b class='font-bold italic text-slate-500 dark:text-slate-400'>opulence</b>.",
				options: ["great wealth", "poverty", "affluence", "lavishness"],
				answer: "poverty",
			},
			{
				text: "Do you always try to be a <b class='font-bold italic text-slate-500 dark:text-slate-400'>paragon</b> of virtue.",
				options: ["model", "example", "yardstick", "anomaly"],
				answer: "anomaly",
			},
			{
				text: "Tragic stories had so much <b class='font-bold italic text-slate-500 dark:text-slate-400'>pathos</b> that it left me feeling down.",
				options: ["anguish", "woe", "intrigue", "humor"],
				answer: "humor",
			},
			{
				text: "Chin is such <b class='font-bold italic text-slate-500 dark:text-slate-400'>precocious</b> girl who can already read at age three.",
				options: ["slow learner", "bright", "inquisitive", "advanced"],
				answer: "slow learner",
			},
			{
				text: "She had the <b class='font-bold italic text-slate-500 dark:text-slate-400'>quixotic</b> idea that she was a reincarnation of a British princess.",
				options: ["wild", "fantastic", "realistic", "dreamy"],
				answer: "realistic",
			},
			{
				text: "The <b class='font-bold italic text-slate-500 dark:text-slate-400'>ramshackle</b> building collapsed easily.",
				options: ["new", "old", "outdated", "shabby"],
				answer: "new",
			},
			{
				text: "An A-rating represents the <b class='font-bold italic text-slate-500 dark:text-slate-400'>ultimate</b> honor a film will ever have.",
				options: ["greatest", "pinnacle", "least", "supreme"],
				answer: "least",
			},
			{
				text: "CJ de Silva's painting abilities are <b class='font-bold italic text-slate-500 dark:text-slate-400'>uncanny</b>.",
				options: ["remarkable", "ordinary", "astonishing", "unbelievable"],
				answer: "ordinary",
			},
			{
				text: "Lea Salonga's performance was <b class='font-bold italic text-slate-500 dark:text-slate-400'>utterly</b> delightful.",
				options: ["somewhat", "entirely", "thoroughly", "absolutely"],
				answer: "somewhat",
			},
			{
				text: "The strong current of the floodwaters caused the wooden bridge to <b class='font-bold italic text-slate-500 dark:text-slate-400'>vacillate</b>.",
				options: ["collapse", "sway", "vibrate", "be firm"],
				answer: "be firm",
			},
			{
				text: "The <b class='font-bold italic text-slate-500 dark:text-slate-400'>vindictive</b> politician spread rumors about his opponent.",
				options: ["revengeful", "forgiving", "spiteful", "malicious"],
				answer: "forgiving",
			},
			{
				text: "If words were swords, then her <b class='font-bold italic text-slate-500 dark:text-slate-400'>vitriolic</b> remarks could really kill.",
				options: ["scathing", "sarcastic", "satirical", "kind"],
				answer: "kind",
			},
			{
				text: "Many students <b class='font-bold italic text-slate-500 dark:text-slate-400'>vouch</b> for the effectiveness of the MSA review classes.",
				options: ["guarantee", "endorse", "affirm", "refute"],
				answer: "refute",
			},
			{
				text: "That <b class='font-bold italic text-slate-500 dark:text-slate-400'>yonder</b> youths is more studious than the nearer one.",
				options: ["lonesome", "farther", "closer", "thither"],
				answer: "closer",
			},
			{
				text: "MSA tutors are all <b class='font-bold italic text-slate-500 dark:text-slate-400'>zealous</b> tutors who nourish eager minds.",
				options: ["vigorous", "earnest", "indifference", "enthusiastic"],
				answer: "indifference",
			},
			{
				text: "Don't let <b class='font-bold italic text-slate-500 dark:text-slate-400'>trivial</b> things upset you.",
				options: ["important", "trifling", "ordinary", "inconsequential"],
				answer: "important",
			},
		],
	},
	{
		id: "t8",
		name: "English - Double-Word Analogy",
		brief: "Choose the letter that corresponds to the pair of words that is related in the same way as the given pair of words.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "blend : mix : :",
				options: [
					"blare : whisper ",
					"bleach : whiten",
					"blink : blind",
					"bloom : flower",
				],
				answer: "bleach : whiten",
			},
			{
				text: "abattoir : slaughterhouse : :",
				options: [
					"quay : wharf",
					"quack : duck",
					"snail : slow",
					"clown : fun",
				],
				answer: "quay : wharf",
			},
			{
				text: "marriageable : nubile : :",
				options: [
					"single : group",
					"music : mobile",
					"puzzle : answer",
					"decipherable : comprehensible",
				],
				answer: "decipherable : comprehensible",
			},
			{
				text: "numismatist : money : :",
				options: [
					"aesthetics : beauty",
					"fetish : obsession",
					"linguist : language",
					"scientist : sense",
				],
				answer: "linguist : language",
			},
			{
				text: "anxious : uneasy : :",
				options: [
					"egocentric : self-centered",
					"wary : placid",
					"feeble : strong",
					"scornful : admirable",
				],
				answer: "egocentric : self-centered",
			},
			{
				text: "goat : kid : :",
				options: [
					"bear : club",
					"chicken : hen",
					"dog : Dalmatians",
					"tiger : tigress",
				],
				answer: "bear : club",
			},
			{
				text: "key : lock : :",
				options: [
					"litter : trash",
					"pestle : pound",
					"table : desk",
					"sword : scabbard",
				],
				answer: "sword : scabbard",
			},
			{
				text: "dog : kennel : :",
				options: [
					"whale : pond",
					"socks : feet",
					"pig : sty",
					"eagle : barn",
				],
				answer: "pig : sty",
			},
			{
				text: "book : leaves : :",
				options: [
					"house : kitchen",
					"chimney : roof",
					"fan : electricity",
					"chair : sitting",
				],
				answer: "house : kitchen",
			},
			{
				text: "panda : China : :",
				options: [
					"grizzly : Africa",
					"polar bear : America",
					"Pooh : Disneyland",
					"koala : Austtralia",
				],
				answer: "koala : Austtralia",
			},
			{
				text: "jubilant : morose : :",
				options: [
					"humble : modest",
					"joyous : happy",
					"simple : lavish",
					"pompous : pretentious",
				],
				answer: "simple : lavish",
			},
			{
				text: "tiny : microscopic : :",
				options: [
					"uproar : laughter",
					"large : mammoth",
					"argument : meeting",
					"storm : weather",
				],
				answer: "large : mammoth",
			},
			{
				text: "to smile : to guffaw : :",
				options: [
					"to walk : to stroll",
					"to frown : to weep",
					"to munch : eat",
					"to lift : carry",
				],
				answer: "to frown : to weep",
			},
			{
				text: "hang : arm : :",
				options: [
					"foot : leg",
					"hips : sway",
					"waist : belt",
					"shoulder : neck",
				],
				answer: "foot : leg",
			},
			{
				text: "pre : post : :",
				options: ["anti : pro", "semi : equi", "able : can", "demi : half"],
				answer: "anti : pro",
			},
			{
				text: "auditorium : audience : :",
				options: [
					"hall : pictures",
					"movie house : cinema",
					"coliseum : spectators",
					"commuters : transportation",
				],
				answer: "coliseum : spectators",
			},
			{
				text: "Edgar Allan Poe : Annabel Lee : :",
				options: [
					"Robert Frost : Medea",
					"Pygmalion : Galatea",
					"Chaucer : Antigone",
					"Shakespeare : Romeo and Juliet",
				],
				answer: "Shakespeare : Romeo and Juliet",
			},
			{
				text: "advise : counsel : :",
				options: [
					"lead : direct",
					"loss : lost",
					"peace : piece",
					"want : quality",
				],
				answer: "lead : direct",
			},
			{
				text: "perspire : sweat : : ",
				options: [
					"clouds : rain",
					"cry : tears",
					"fan : wind",
					"sad : lonely",
				],
				answer: "cry : tears",
			},
			{
				text: "extricate : set free : :",
				options: [
					"journey : far",
					"liquidate : liquefy",
					"implicate : involve",
					"migrate : stay",
				],
				answer: "implicate : involve",
			},
			{
				text: "maggot : fly : :",
				options: [
					"caterpillar : leaves",
					"bees : warp",
					"butterfly : moth",
					"tadpole : frog",
				],
				answer: "tadpole : frog",
			},
			{
				text: "he : him : :",
				options: ["me : I", "they : them", "you : yours", "her : she"],
				answer: "they : them",
			},
			{
				text: "lie : to recline : :",
				options: [
					"lay : put down",
					"macabre : beauty",
					"nab : release",
					"quench : to thirst",
				],
				answer: "lay : put down",
			},
			{
				text: "igloo : eskimo : :",
				options: [
					"cavemen : cave",
					"palace : kings",
					"destitute : shanty",
					"bees : behive",
				],
				answer: "palace : kings",
			},
			{
				text: "dictionary : word meanings : : ",
				options: [
					"almanac : synonyms",
					"encyclopedia : word origin",
					"atlas : maps",
					"thesaurus : dinosaurs",
				],
				answer: "atlas : maps",
			},
			{
				text: "extemporaneous : rehearsed : :",
				options: [
					"live : taped",
					"momentous : important",
					"nefarious : wicked",
					"salubrious : healthful",
				],
				answer: "live : taped",
			},
			{
				text: "tavern : bar : :",
				options: [
					"inn : hotel",
					"apartment : loft",
					"condominium : office",
					"attic : chimney",
				],
				answer: "inn : hotel",
			},
			{
				text: "duchess : duke : :",
				options: [
					"count : countess",
					"ewe : ram",
					"gentleman : lady",
					"wizard : witch",
				],
				answer: "ewe : ram",
			},
			{
				text: "dwindle : decrease : :",
				options: [
					"defer : act promptly",
					"deny : grant",
					"forge : stop",
					"multiply : increase",
				],
				answer: "multiply : increase",
			},
			{
				text: "prowess : cowardice : :",
				options: [
					"adept : skilled",
					"adroit : uncoordinated",
					"garrulous : talkative",
					"hubris : pride",
				],
				answer: "adroit : uncoordinated",
			},
			{
				text: "charisma : charismata : :",
				options: [
					"deer : deers",
					"bacterium : bacteriums",
					"basis : bases",
					"eighty : eighty's",
				],
				answer: "basis : bases",
			},
			{
				text: "quintuplet : five : :",
				options: [
					"tripet : three",
					"quartuplet : four",
					"doublet : two",
					"sexton : six",
				],
				answer: "tripet : three",
			},
			{
				text: "attention : attn : :",
				options: [
					"approximate : appro.",
					"bal : balance",
					"building : bldng",
					"manager : mgr",
				],
				answer: "manager : mgr",
			},
			{
				text: "arachnophobia : fear of spiders : :",
				options: [
					"hydrophobia : fear of wet objects",
					"claustrophobia : fear of clauses",
					"photophobia : fear of light",
					"xenophobia : fear of sin",
				],
				answer: "photophobia : fear of light",
			},
			{
				text: "unscrew : tighten : :",
				options: [
					"remove : restore",
					"relinquish : give up",
					"sensitize : make sensitive",
					"stupefy : make insensible",
				],
				answer: "remove : restore",
			},
			{
				text: "verbose : speechless : :",
				options: [
					"voracious : greedy",
					"vicious : kind",
					"wanton : lewd",
					"waspish : irritable",
				],
				answer: "vicious : kind",
			},
			{
				text: "COD : cash on delivery : :",
				options: [
					"DST : daylight saving time",
					"PO : public office",
					"NA : not appointed",
					"RSVP : please approve",
				],
				answer: "DST : daylight saving time",
			},
			{
				text: "adjacent : near : :",
				options: [
					"congruent : dissimilar",
					"converge : separate",
					"deliberate : intentional",
					"delude : guide",
				],
				answer: "deliberate : intentional",
			},
			{
				text: "firmament : sky : :",
				options: [
					"clouds : air",
					"moon : planer",
					"star : gas",
					"soil : ground",
				],
				answer: "soil : ground",
			},
			{
				text: "languid : strong : :",
				options: [
					"feeble : active",
					"innocuous : harmless",
					"opportune : timely",
					"truculent : restless",
				],
				answer: "feeble : active",
			},
		],
	},
];

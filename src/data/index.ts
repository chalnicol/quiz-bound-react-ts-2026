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
	{
		id: "t9",
		name: "English - Correct Usage",
		brief: "Choose the letter that corresponds to the word or phrase that will correctly complete each sentence.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "Czarmaine ____________ remarkable poems even at her young age.",
				options: ["rites", "rights", "writes", "write"],
				answer: "writes",
			},
			{
				text: "Being too ____________ will undoubtebly make other men hate you.",
				options: ["vane", "vain", "vein", "vanity"],
				answer: "vain",
			},
			{
				text: "Due to bad weather, the airline company decided ____________ postpone the flight.",
				options: ["two", "to", "too", "then"],
				answer: "to",
			},
			{
				text: "Drunk driving was the reason for ____________ accident.",
				options: ["their", "they're", "there", "there are"],
				answer: "their",
			},
			{
				text: "May I ____________ your Titanic compact disk?",
				options: ["borrow", "lend", "loan", "credit"],
				answer: "borrow",
			},
			{
				text: "____________ the three girls, the eldest is the most diligent.",
				options: ["Between", "Among", "In", "By"],
				answer: "Among",
			},
			{
				text: "Exposure to air pollution will ____________ your asthma.",
				options: ["cure", "deteriorate", "aggravate", "annoy"],
				answer: "aggravate",
			},
			{
				text: "His ____________ to Mount Apo was carefully documented.",
				options: ["assent", "ascent", "descent", "decrease"],
				answer: "ascent",
			},
			{
				text: "The children ____________ the ill effects of war.",
				options: ["have borne", "have born", "has borne", "had born"],
				answer: "have borne",
			},
			{
				text: "The teachers distributed different ____________ outlines for the students to follow.",
				options: ["coarse", "corps", "course", "corpse"],
				answer: "course",
			},
			{
				text: "Carl juggles oranges, __________ you?",
				options: ["why", "may", "should", "can"],
				answer: "can",
			},
			{
				text: "The refugees decided to ____________ their homes because of the war.",
				options: ["desert", "dessert", "deserve", "reserve"],
				answer: "desert",
			},
			{
				text: "My sister ____________ to Zamboanga seven years ago.",
				options: ["migrated", "migrating", "immigrated", "immigrating"],
				answer: "immigrated",
			},
			{
				text: "We used ____________ sauce for the spaghetti last Sunday.",
				options: ["less", "few", "a number of", "pieces of"],
				answer: "less",
			},
			{
				text: "If we work together, we could finish this __________ in a short time.",
				options: ["piece", "peace", "please", "peas"],
				answer: "piece",
			},
			{
				text: "When the Apartheid Policy was still in effect, the Black were ____________ by the Whites.",
				options: ["praised", "hailed", "persecuted", "prosecuted"],
				answer: "persecuted",
			},
			{
				text: "When we ____________ the flag, we should all stand up.",
				options: ["rice", "rise", "risen", "raise"],
				answer: "raise",
			},
			{
				text: "The DPWH crew worked ____________ the night to repair the damaged bridge.",
				options: ["threw", "through", "trough", "true"],
				answer: "through",
			},
			{
				text: "__________ the leader of your group?",
				options: ["Who's", "Whose", "Which", "Whom's"],
				answer: "Who's",
			},
			{
				text: "The village elder told many interesting ____________.",
				options: ["tale", "tail", "tails", "tales"],
				answer: "tales",
			},
			{
				text: "Marty ________ Evelyn _____ to dinner.",
				options: [
					"asked - out",
					"asked - after",
					"called - out",
					"called - up",
				],
				answer: "asked - out",
			},
			{
				text: "The celebrant ____________ the candles after we sang.",
				options: ["blew off", "blew up", "blew out", "blew over"],
				answer: "blew out",
			},
			{
				text: "The secretary ____________ due to stress.",
				options: ["broke even", "broke out", "broke in", "broke down"],
				answer: "broke down",
			},
			{
				text: "The Edsa People's Revolution ____________ the Marcos regime.",
				options: [
					"brought in",
					"brought on",
					"brought forth",
					"brought down",
				],
				answer: "brought down",
			},
			{
				text: "The unexpected ____________ of vehicles along Marcos Highway caused heavy traffic.",
				options: ["build up", "build on", "build in", "build over"],
				answer: "build up",
			},
			{
				text: "After cleaning the entire house, I felt ____________.",
				options: ["burned in", "burned out", "burned up", "burned over"],
				answer: "burned out",
			},
			{
				text: "The drug pushers tried to ____________ the arresting cops.",
				options: ["buy in", "buy off", "buy out", "buy up"],
				answer: "buy off",
			},
			{
				text: "The Cabinet meeting was ___________ on account of the President's ill health.",
				options: ["called in", "called up", "called out", "called off"],
				answer: "called off",
			},
			{
				text: "The tele-novela viewers cried helplessly when they got ___________ by the tragedy that befell the main character.",
				options: [
					"carried out",
					"carried away",
					"carried over",
					"carried on",
				],
				answer: "carried away",
			},
			{
				text: "We should ___________ on our expenditures and spend only on our needs.",
				options: ["cut short", "cut up", "cut back", "cut out"],
				answer: "cut back",
			},
			{
				text: "People of all races should try to ___________ with each other.",
				options: ["get around", "get along", "get at", "get over"],
				answer: "get along",
			},
			{
				text: "We should grow wiser as time _______________.",
				options: ["goes along", "goes by", "goes down", "goes through"],
				answer: "goes by",
			},
			{
				text: "The partying teens were told to ___________ the noise.",
				options: ["hold down", "hold forth", "hold on", "hold with"],
				answer: "hold down",
			},
			{
				text: "A gust of strong wind ___________ the old wooden swing.",
				options: [
					"knocked around",
					"knocked back",
					"knocked down",
					"knocked out",
				],
				answer: "knocked down",
			},
			{
				text: "A number of factory workers were ___________ due to retrenchment.",
				options: ["laid aside", "laid away", "laid off", "laid out"],
				answer: "laid off",
			},
			{
				text: "We should never ___________ people with disabilities for they also have the right to live.",
				options: [
					"look down on",
					"look forward to",
					"look out to",
					"look up to",
				],
				answer: "look down on",
			},
			{
				text: "Stop ___________ your younger brother so he will stop crying.",
				options: ["picking at", "picking on", "picking out", "picking up"],
				answer: "picking on",
			},
			{
				text: "Always ___________ your best effort in everything you do.",
				options: ["put across", "put down", "put forth", "put up"],
				answer: "put forth",
			},
			{
				text: "Did you help in ___________ the table.",
				options: [
					"setting apart",
					"setting back",
					"setting down",
					"setting up",
				],
				answer: "setting up",
			},
			{
				text: "She ___________ the details of the program.",
				options: ["wrote in", "wrote off", "wrote over", "wrote up"],
				answer: "wrote up",
			},
		],
	},
	{
		id: "t10",
		name: "Filipino - Kasing-Kahulugan",
		brief: "Piliin ang salitang kasing-kahulugan ng salitang nakapahilig.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Nauulinigan</b> ang pag-uusap ng grupo dahil sa lakas ng tinig nila. ",
				options: [
					"nahihimigan",
					"napapakinggan",
					"nakikita",
					"nararamdaman",
				],
				answer: "napapakinggan",
			},
			{
				text: "Karapatan ng bawat batang Pilipino ang magkaroon ng pamilyang <b class='font-bold italic text-slate-500 dark:text-slate-400'>mag-aaruga</b> sa kanya. ",
				options: ["mag-aalaga", "magsasaway", "gagabay", "tutulong"],
				answer: "mag-aalaga",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Nagugulumihan</b> si Rochelle kung anong kurso ang kanyang kukuning sa kolehiyo.",
				options: ["nagtataka", "natutuwa", "nagpapasalamat", "nalilito"],
				answer: "nalilito",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Tigib</b> na ng pasahero ang dyip nang ito ay umalis.",
				options: [
					"punong-puno",
					"kulang-kulang",
					"nagpapasalamat",
					"nalilito",
				],
				answer: "punong-puno",
			},
			{
				text: "Hindi na nakapagpigil ang kaawa-awang katulong kaya <b class='font-bold italic text-slate-500 dark:text-slate-400'>ibinulalas</b> ang sama ng loob sa mapag-aping amo.",
				options: ["isinabi", "inilahad", "isinigaw", "ibinulgar"],
				answer: "ibinulgar",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Iminungkahi</b> ang pagbabawal magtapon ng basura sa di-wastong lugar.",
				options: ["ipinatupad", "inilahad", "siniwalat", "kinalat"],
				answer: "ipinatupad",
			},
			{
				text: "Madalas silang mapaaway dahil sa kanilang <b class='font-bold italic text-slate-500 dark:text-slate-400'>kapalaluan</b>.",
				options: [
					"kalabisan",
					"kayabangan",
					"kagandahan",
					"kasinungalingan",
				],
				answer: "kayabangan",
			},
			{
				text: "Pakiramdam niya ay labis-labis ang kanyang suliranin kung kaya siya ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>maligalig</b>.",
				options: [
					"matalino",
					"masaya",
					"magulo ang isip",
					"malinaw ang isip",
				],
				answer: "magulo ang isip",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Maalwan</b> lang ang nararapat na dalahin ng isang bata. ",
				options: ["magaan", "maganda", "malaki", "maliit"],
				answer: "magaan",
			},
			{
				text: "Sa <b class='font-bold italic text-slate-500 dark:text-slate-400'>palihan</b> nagagawa ang mga itak, espada at iba pang yari sa bakal.",
				options: ["palikuran", "pamilihang-bayan", "palengke", "pandayan"],
				answer: "pandayan",
			},
			{
				text: "Hindi mo dapat gawing katuwaan ang <b class='font-bold italic text-slate-500 dark:text-slate-400'>pagkutya</b> sa kapwa. ",
				options: ["pagsumbong", "panunukso", "pagtampo", "pagkurot"],
				answer: "panunukso",
			},
			{
				text: "Ang pag-eensayo ng banda ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>nakabubulahaw</b>.",
				options: ["nakaiinis", "nakakagulo", "nakatutuwa", "nakababahala"],
				answer: "nakakagulo",
			},
			{
				text: "Dapat kang <b class='font-bold italic text-slate-500 dark:text-slate-400'>magkamal</b> ng salapi sa mabuting paraan.",
				options: ["magmana", "magnakaw", "mag-ipon", "maghanda"],
				answer: "mag-ipon",
			},
			{
				text: "Ilang taon ding <b class='font-bold italic text-slate-500 dark:text-slate-400'>siniil</b> ng mga dayuhan ang mga Pilipino.",
				options: ["tinago", "inapi", "tinimpi", "pinalaya"],
				answer: "inapi",
			},
			{
				text: "Ang anumang <b class='font-bold italic text-slate-500 dark:text-slate-400'>alitan</b> ay di dapat hayaang magtagal.",
				options: [
					"proyekto",
					"pagkakaibigan",
					"hiniram",
					"di-pagkakasunduan",
				],
				answer: "di-pagkakasunduan",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Laganap</b> ang krisis kaya tayo ay dapat magtipid. ",
				options: ["kalat", "kapos", "limitado", "pantay"],
				answer: "kalat",
			},
			{
				text: "Madaling <b class='font-bold italic text-slate-500 dark:text-slate-400'>nababalino</b> sa lihis na gawain ang mga kabataang laki sa langsangan.",
				options: ["natutuwa", "namamalik-mata", "nagaganyak", "nakakaiwas"],
				answer: "nagaganyak",
			},
			{
				text: "Maraming <b class='font-bold italic text-slate-500 dark:text-slate-400'>himutok</b> ang mga manggagawa laban sa kanilang kumpanya gaya ng di pagtaas ng kanilang sahod. ",
				options: ["nais", "balakid", "kilos", "reklamo"],
				answer: "reklamo",
			},
			{
				text: "Walang <b class='font-bold italic text-slate-500 dark:text-slate-400'>minimithi</b> ang iyong magulang kungdi ang mabigyan ka ng magandang kinabukasan.",
				options: ["dinadalangin", "ninanais", "ikinatutuwa", "tinitiis"],
				answer: "ninanais",
			},
			{
				text: "Iwasang <b class='font-bold italic text-slate-500 dark:text-slate-400'>sumugba</b> sa alanganin.",
				options: ["lumusong", "tumigil", "lumayo", "lumapit"],
				answer: "lumusong",
			},
			{
				text: "Huwag mong <b class='font-bold italic text-slate-500 dark:text-slate-400'>pukawin</b> ang batang nahihimlay.",
				options: ["libangin", "palayain", "pigilin", "gisingin"],
				answer: "gisingin",
			},
			{
				text: "Hindi ka dapat <b class='font-bold italic text-slate-500 dark:text-slate-400'>magmaktol</b> kung ika'y napagsasabihan.",
				options: ["umiyak", "magtampo", "magdabog", "lumayas"],
				answer: "magtampo",
			},
			{
				text: "Tuwing Marso, ang puno ng mangga ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>namumutiktik</b> sa bunga. ",
				options: [
					"maraming-marami",
					"bilang na bilang",
					"kakaunti",
					"malalaki",
				],
				answer: "maraming-marami",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Kumipot</b> ang Maynila sa dami ng taong naninirahan dito..",
				options: ["lumuwag", "lumaki", "sumikip", "lumiit"],
				answer: "sumikip",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Patang-pata</b> siya nang marating ang tuktok ng bundok Apo.",
				options: [
					"pagod na pagod",
					"masiglang-masigla",
					"masayang-masaya",
					"hinayang na hinayang",
				],
				answer: "pagod na pagod",
			},
		],
	},
	{
		id: "t11",
		name: "Filipino - Kasalungat",
		brief: "Piliin ang salitang kasalungat ng salitang nakapahilig.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "Ang pag-iibigan nina Florante at Laura ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>matimyas</b>.",
				options: ["di-magmamaliw", "di-totoo", "dalisay", "wagas"],
				answer: "di-totoo",
			},
			{
				text: "Dinidiligan ng pataba ang halaman upang ito'y <b class='font-bold italic text-slate-500 dark:text-slate-400'>yumabong</b>.",
				options: ["lumago", "dumami", "malanta", "lumiit"],
				answer: "malanta",
			},
			{
				text: "Namamasyal siya sa parke upang mapawi ang <b class='font-bold italic text-slate-500 dark:text-slate-400'>lumbay</b>.",
				options: ["galak", "lungkot", "sama ng loob", "gulat"],
				answer: "galak",
			},
			{
				text: "Hinintay namin ang <b class='font-bold italic text-slate-500 dark:text-slate-400'>pagdaong</b> ng Superferry upang salubungin si Ate.",
				options: ["pag-alis", "paglapag", "paghimpil", "pagtigil"],
				answer: "pag-alis",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Palasak</b> na ang paggamit ng kompyuter.",
				options: ["pambihira", "pangkaraniwan", "laganap", "matipid"],
				answer: "pambihira",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Nabaghan</b> siya nang dumating ang kanyang amang dalawang taong naghanap-buhay sa ibang bansa. ",
				options: ["nagulat", "nagtaka", "nainis", "nahimatay"],
				answer: "nainis",
			},
			{
				text: "Huwag mong ugaliin ang <b class='font-bold italic text-slate-500 dark:text-slate-400'>umalipusta</b> ng iyong kapwa. ",
				options: ["laitin", "purihin", "kagalitan", "bastusin"],
				answer: "purihin",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Pahapay</b> na ang mga maliliit na kumpanya dahil sa pagbagsak ng ekonomiya. ",
				options: ["paunlad", "tagilid", "pabagsak", "pasara"],
				answer: "paunlad",
			},
			{
				text: "Makapal at <b class='font-bold italic text-slate-500 dark:text-slate-400'>magalas</b> ang palad ng mga mason at karpintero.",
				options: ["mabuto", "magaspang", "maliksi", "makinis"],
				answer: "makinis",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Masalimuot</b> man ang buhay natin, di tayo dapat mawalan ng pag-asa. ",
				options: ["mahirap", "magulo", "maayos", "malungkot"],
				answer: "maayos",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Sinaplutan</b> man lamang sana nila ang sanggol bago ito ginamit sa paglilimos.",
				options: ["binalutan", "tinakpan", "dinamitan", "hinubaran"],
				answer: "hinubaran",
			},
			{
				text: "Hindi dapat pagkatiwalaan ang mga taong <b class='font-bold italic text-slate-500 dark:text-slate-400'>taksil</b> na mabait lamang kung kaharap mo.",
				options: ["suwail", "matapat", "hunghang", "matalino"],
				answer: "matapat",
			},
			{
				text: "Tila walang kapaguran ang <b class='font-bold italic text-slate-500 dark:text-slate-400'>mabungalngal</b> na bibig ni Lina. ",
				options: ["tahimik", "masalita", "madaldal", "matalino"],
				answer: "tahimik",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Napakakupad</b> ng takbo ng karitela kung ikukumpara sa traysikel at dyip.",
				options: [
					"napakabilis",
					"napakabagal",
					"napakakuyad",
					"napakadali",
				],
				answer: "napakabilis",
			},
			{
				text: "Patuloy na <b class='font-bold italic text-slate-500 dark:text-slate-400'>magdarahop</b> ang taong tamad. ",
				options: ["asenso", "maghihikahos", "magiging salat", "maghihirap"],
				answer: "asenso",
			},
			{
				text: "Mahirap pakinggan ang sinasabi ng taong <b class='font-bold italic text-slate-500 dark:text-slate-400'>garil</b>.",
				options: ["utal", "bulol", "matalino", "matatas"],
				answer: "matatas",
			},
			{
				text: "Kumain ka ng masustansiyang pagkain nang hindi maging <b class='font-bold italic text-slate-500 dark:text-slate-400'>hawas</b>.",
				options: ["payat", "matipuno", "manipis", "sakitin"],
				answer: "sakitin",
			},
			{
				text: "Ang labis na pagiging <b class='font-bold italic text-slate-500 dark:text-slate-400'>hidhid</b> ay nakasasama rin lalo pa't hindi ka marunong magbigay sa nangangailangan.",
				options: ["waldas", "kuripot", "matipid", "mapera"],
				answer: "waldas",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Hungkag</b> ang bigasan dahil nasira ng bagyo ang mga palay.",
				options: ["salat", "puno", "matipid", "mapera"],
				answer: "puno",
			},
			{
				text: "Ang mga bulaklak ng orkidya ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>naluoy</b> sa tindi ng init.",
				options: ["nabulok", "natuyo", "namumukadkad", "nalaglag"],
				answer: "namumukadkad",
			},
			{
				text: "Totoo bang <b class='font-bold italic text-slate-500 dark:text-slate-400'>walang latoy</b> ang pagkain sa ospital.",
				options: ["walang lasa", "walang sangkap", "malasa", "kakaunti"],
				answer: "malasa",
			},
			{
				text: "Hindi <b class='font-bold italic text-slate-500 dark:text-slate-400'>linubayan</b> ng mga manunulat ang pagtatanong sa panauhing pandangal.",
				options: ["tinigilan", "iniwasan", "dinikitan", "pinagpatuloy"],
				answer: "pinagpatuloy",
			},
			{
				text: "Ang mga tirahan ng mayayaman ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>maagwat</b> sa isa't isa. ",
				options: ["hiwa-hiwalay", "magkakadikit", "manhid", "mahapdi"],
				answer: "magkakadikit",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Maantak</b> ang sugat kapag napatakan ng kalamansi.",
				options: ["malaki", "maliit", "manhid", "mahapdi"],
				answer: "manhid",
			},
			{
				text: "Tunay na <b class='font-bold italic text-slate-500 dark:text-slate-400'>mabalasik</b> ang leon at ang tigre.",
				options: ["maamo", "matapang", "masungit", "maliit"],
				answer: "maamo",
			},
		],
	},
	{
		id: "t12",
		name: "Filipino - Mga Kawikaan",
		brief: "Piliin ang salitang kasing-kahulugan ng salitang nakapahilig.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Nag-alsa balutan</b> ang katulong sa bahay dahil sa kalupitan ng kanyang amo.",
				options: ["nagtampo", "lumayas", "nagtago", "nagmaktol"],
				answer: "lumayas",
			},
			{
				text: "Hindi totoo ang kanyang katapangan sapagkat <b class='font-bold italic text-slate-500 dark:text-slate-400'>bahag ang buntot</b> niya sa harap ng paghihirap.",
				options: ["malakas ang loob", "matapang", "duwag", "matiyaga"],
				answer: "duwag",
			},
			{
				text: "Dahil sa paulit-ulit na pagsisinungaling, <b class='font-bold italic text-slate-500 dark:text-slate-400'>basa ang papel</b> niya sa karamihan.",
				options: [
					"ayaw nang paniwalaan",
					"ayaw nang pagbigyan",
					"ayaw nang pakinggan",
					"ayaw nang makasama",
				],
				answer: "ayaw nang paniwalaan",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Kumukulo ang dugo</b> ng ina ni Robin sa kanya sapagkat hindi siya nag-aral.",
				options: [
					"tuwang-tuwang",
					"galit na galit",
					"lungkot na lungkot",
					"nakapapaso ang dugo sa init",
				],
				answer: "galit na galit",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Di-mahapayang gatang</b> ang pagpapalitan ng kuro-kuro ng mga mambabatas.",
				options: [
					"hindi maumpisahan",
					"hindi magulo",
					"hindi masaya",
					"hindi maawat",
				],
				answer: "hindi maawat",
			},
			{
				text: "Noong panahon ng pananakop ng Kastila, ang mga Pilipino ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>hawak sa tainga</b> ng mga ito.",
				options: ["sunud-sunuran", "katuwang", "kakampi", "alipin"],
				answer: "sunud-sunuran",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Mabulaklak ang landas</b> ng taong masikap.",
				options: [
					"malabo ang kinabukasan",
					"makulay ang kinabukasan",
					"magulo ang kinabukasan",
					"maganda ang kinabukasan",
				],
				answer: "maganda ang kinabukasan",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Maliit ang sisidlan</b> ni Mhon kaya iniiwasan siyang biruin.",
				options: [
					"walang lakas-loob",
					"walang galang",
					"walang malay",
					"walang pasensiya",
				],
				answer: "walang pasensiya",
			},
			{
				text: "Mahilig kasing magbasa kahit sa madilim si Tina kaya siya ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>nagmamatang-manok</b>.",
				options: [
					"lumiliit ang mata",
					"malabo ang mata",
					"lumuluwa ang mata",
					"kumikislap ang mata",
				],
				answer: "malabo ang mata",
			},
			{
				text: "Kung minsan, inggit ang nagiging dahilan sa <b class='font-bold italic text-slate-500 dark:text-slate-400'>pagsasaulian ng kandila</b>.",
				options: [
					"pagkasira ng tiwala",
					"pagkasira ng pamilya",
					"pagkasira ng pagkakaibigan",
					"pagkasira ng lipunan",
				],
				answer: "pagkasira ng pagkakaibigan",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Pabalat-bunga</b> lang pala ang pagiging bukas-palad niya; may pulitikal pala itong kadahilanan kaya siya mapagbigay.",
				options: ["taos-puso", "pakunwari", "pasikreto", "sapilitan"],
				answer: "pakunwari",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Tiklop-tuhod</b> ang akusado na siya ay patawarin ng biktima. ",
				options: ["nagkukunwari", "nananakot", "pasikreto", "sapilitan"],
				answer: "pasikreto",
			},
			{
				text: "Ni ayaw man lamang humarap sa tao ang <b class='font-bold italic text-slate-500 dark:text-slate-400'>talo-saling</b> na si Eula. ",
				options: ["masungit", "isnabera", "mahiyain", "pangit"],
				answer: "mahiyain",
			},
			{
				text: "Di dapat tularan ang mga taong <b class='font-bold italic text-slate-500 dark:text-slate-400'>walang kusang-palo</b>.",
				options: [
					"walang kusang-loob",
					"walang bait sa sarili",
					"walang nalalaman",
					"walang direksiyon",
				],
				answer: "walang kusang-loob",
			},
			{
				text: "Hindi tama ang ika'y <b class='font-bold italic text-slate-500 dark:text-slate-400'>walang lingon-likod</b>. Dapat ay suklian ang kabutihan ng iba sa iyo.",
				options: [
					"mayabang",
					"mapagmataas",
					"walang utang na loob",
					"walang pagkakautang",
				],
				answer: "walang utang na loob",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Makapigil-hininga</b> ang pelikulang Muro Ami.",
				options: ["nakakasabik", "nakaaantok", "nakaiinis", "nakasusuya"],
				answer: "nakakasabik",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Halang ang kaluluwa</b> ng taong gumagawa ng karumal-dumal na krimen.",
				options: ["mabait", "bastos", "maitim ang budhi", "matapang"],
				answer: "maitim ang budhi",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Di-maliparan ng uwak</b> ang lupain ng mga Aquino sa Tarlac. ",
				options: ["napakaliit", "napakalawak", "napakadami", "napakasikip"],
				answer: "napakalawak",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Makunat pa sa patola</b> si Lola Rosa kaya uugud-ugod na. ",
				options: [
					"masayahin pa",
					"masigla pa",
					"mukhang bata",
					"napakatanda na",
				],
				answer: "napakatanda na",
			},
			{
				text: "<b class='font-bold italic text-slate-500 dark:text-slate-400'>Nilubugan ng araw</b> ang mga taong nasalanta ng bagyo ang mga tirahan.",
				options: [
					"nawalan ng pag-asa",
					"dumilim ang paligid",
					"naputulan ng kuryente",
					"naghirap",
				],
				answer: "nawalan ng pag-asa",
			},
			{
				text: "Hindi mo matatagpuan sa kanilang bahay si Cecile palibhasa ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>may puyo sa talampakan</b>.",
				options: [
					"mahilig matulog",
					"mahilig mamasyal",
					"mahilig tumakbo",
					"mahilig mag-aral",
				],
				answer: "mahilig mamasyal",
			},
			{
				text: "Binata na si JB kaya siya ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>naniningalang-pugad</b> na. ",
				options: [
					"naninigarilyo",
					"nagbabarkada",
					"nanliligaw",
					"naninirahan",
				],
				answer: "nanliligaw",
			},
			{
				text: "Malimit na may kabanggaan si Malou sa opisina dahil <b class='font-bold italic text-slate-500 dark:text-slate-400'>maanghang ang kanyang dila</b>.",
				options: [
					"pikon",
					"walang pakialam",
					"masakit magsalita",
					"masayahin",
				],
				answer: "masakit magsalita",
			},
			{
				text: "Di napaunlakan ni Ana ang imbitasyong manood sila ng sine sapagkat <b class='font-bold italic text-slate-500 dark:text-slate-400'>butas ang kanyang bulsa</b>.",
				options: [
					"sira ang pantalon",
					"walang pera",
					"nagtitipid",
					"walang panahon",
				],
				answer: "walang pera",
			},
			{
				text: "Si Karl ay <b class='font-bold italic text-slate-500 dark:text-slate-400'>nagtataingang-kawali</b>. Animo'y wala siyang naririnig kahit tinatawag na. ",
				options: [
					"matigas ang tainga",
					"mahina ang pandinig",
					"barado ang tainga",
					"nagbibingi-bingihan",
				],
				answer: "nagbibingi-bingihan",
			},
		],
	},
	{
		id: "t13",
		name: "Filipino - Pagkilala sa Mali",
		brief: "Basahing mabuti ang bawat pangungusap. Hanapin ang salita o grupo ng mga salitang may salangguhit na di wasto ang gamit. Kung walang mali, piliin ang titik e.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "Ang walang kamatayang Mi Ultimo Adios ay sinulat ng Rizal sa Fort Santiago.",
				options: [
					"Ang",
					"kamatayang",
					"ay sinulat",
					"ng Rizal",
					"Walang Mali.",
				],
				answer: "ng Rizal",
			},
			{
				text: "Si Teodora Alonzo at Francisco Mercado ang mga magulang ni Jose Rizal.",
				options: ["Si", "at", "ang mga", "ni", "Walang Mali."],
				answer: "Si",
			},
			{
				text: "Hindi dapat lumikha nang buwis na hindi makakayang bayaran ng kahit sino.",
				options: ["lumikha", "nang", "makakayang", "ng", "Walang Mali."],
				answer: "nang",
			},
			{
				text: "Iniisip rin ng ating pamahalaan ang kapakanan ng mga maralita.",
				options: ["rin", "ng ating", "ang", "ng mga", "Walang Mali."],
				answer: "Walang Mali.",
			},
			{
				text: "Mainam sa lahat ng paraan ng pag-aaral ang magbalik-aral ng mga aralin bago pa man dumating ang mga pagsusulit sa paaralan.",
				options: [
					"Mainam",
					"magbalik-aral",
					"dumating",
					"pagsusulit",
					"Walang Mali.",
				],
				answer: "Mainam",
			},
			{
				text: "Ang mga payo kung binitawan ay dapat mong pakinggan.",
				options: [
					"payo",
					"kung",
					"binitawan",
					"pakinggan.",
					"Walang Mali.",
				],
				answer: "kung",
			},
			{
				text: "Mag-aral ng mabuti upang hindi masayang ang iyong pera at panahon.",
				options: ["Mag-aral", "ng", "upang", "masayang", "Walang Mali."],
				answer: "ng",
			},
			{
				text: "Tunay nga na masipag at maalahanin ang panganay na si Rochell.",
				options: [
					"Tunay nga",
					"masipag",
					"maalahanin",
					"ang panganay",
					"Walang Mali.",
				],
				answer: "maalahanin",
			},
			{
				text: "Hindi lamang sipag kundi tiyaga din ang kinakailangan upang magtagumpay sa isang negosyo.",
				options: [
					"kundi",
					"din",
					"kinakailangan",
					"magtagumpay",
					"Walang Mali.",
				],
				answer: "din",
			},
			{
				text: "Upang maiwasan ang pagkasira ng ngipin, ipinapayo ng mga dentista na nagsisipilyo matapos kumain.",
				options: [
					"Upang",
					"ipinapayo",
					"nagsisipilyo",
					"kumain.",
					"Walang Mali.",
				],
				answer: "nagsisipilyo",
			},
			{
				text: "Haluin mo ang sopas ng iba't ibang gulay.",
				options: ["Haluin", "ang", "ng", "iba't ibang", "Walang Mali."],
				answer: "Haluin",
			},
			{
				text: "Kundi ka kikilos at di gagawin ang iyong proyekto ay wala kang mapapala.",
				options: [
					"Kundi",
					"kikilos",
					"gagawin",
					"mapapala.",
					"Walang Mali.",
				],
				answer: "Kundi",
			},
			{
				text: 'Alam mo ba na mayroon proyekto ang DECS na tinaguriang "Study Now, Pay Later"?',
				options: ["Alam", "mayroon", "ang", "tinaguriang", "Walang Mali."],
				answer: "mayroon",
			},
			{
				text: "Nagtutulungan ang mga ninuno nating Ipugaw kaya nayari ang hagdan-hagdang taniman ng palay.",
				options: [
					"Nagtutulungan",
					"nating",
					"nayari",
					"palay.",
					"Walang Mali.",
				],
				answer: "Nagtutulungan",
			},
			{
				text: "Ginigising lamang daw ng Maykapal ang mga taong nakakalimot sa Kanya sapagkat nagkakaroon ng kalamidad.",
				options: [
					"Ginigising",
					"ng Maykapal",
					"nakakalimot",
					"sapagkat",
					"Walang Mali.",
				],
				answer: "sapagkat",
			},
			{
				text: "Maganda siya ngunit masungit kaya hindi siya popular sa mga kamag-aral.",
				options: [
					"ngunit",
					"kaya",
					"popular",
					"kamag-aral.",
					"Walang Mali.",
				],
				answer: "Walang Mali.",
			},
			{
				text: "Upang umunlad ang bayan kailangan ang pagtutulungan nang lahat.",
				options: [
					"Upang",
					"umunlad",
					"pagtutulungan",
					"nang",
					"Walang Mali.",
				],
				answer: "nang",
			},
			{
				text: "Hindi nawawalan ng pag-asa ang mga mayron matibay na paniniwala.",
				options: [
					"nawawalan",
					"mayron",
					"matibay",
					"paniniwala.",
					"Walang Mali.",
				],
				answer: "mayron",
			},
			{
				text: "Ipinakiusap mo ba na pinayagan kang gamitin ang kompyuter?",
				options: [
					"Ipinakiusap",
					"pinayagan",
					"gamitin",
					"kompyuter?",
					"Walang Mali.",
				],
				answer: "pinayagan",
			},
			{
				text: "Hanapan mo ng sagot sa iyong katanungan ang iyong guro.",
				options: ["Hanapan", "ng", "sa", "katanungan", "Walang Mali."],
				answer: "Walang Mali.",
			},
			{
				text: "Ayon sa mga dalubhasa, malaki raw ang naitutulong ng pag-eehersisiyo ng pag-iwas sa pagkakaroon ng sakit sa puso.",
				options: ["raw", "naitutulong", "ng", "sa", "Walang Mali."],
				answer: "ng",
			},
			{
				text: "Dapat natin iiwasan ang labis na pagkain ng mga maalat na pagkain.",
				options: ["Dapat", "iiwasan", "pagkain", "maalat", "Walang Mali."],
				answer: "iiwasan",
			},
			{
				text: "Panatilihin natin laging malinis at malayo sa polusyon ang ating kapaligiran para na rin sa ating kalusugan.",
				options: ["Panatilihin", "sa", "ang", "para", "Walang Mali."],
				answer: "Walang Mali.",
			},
			{
				text: "Laban sa batas ang smuggling dahil ito ay isang paraan ng pagsabotahe sa ekonomiya.",
				options: ["Laban", "dahil", "ng", "sa", "Walang Mali."],
				answer: "Laban",
			},
			{
				text: "Walang kabutihang naidudulot ang droga, bagkus ito pa nga ang nakasisira nang tahanan at lipunan.",
				options: [
					"naidudulot",
					"bagkus",
					"nakasisira",
					"nang",
					"Walang Mali.",
				],
				answer: "nang",
			},
		],
	},
	{
		id: "t14",
		name: "Constitution",
		brief: "Choose letter that corresponds to the answer that will make each statement correct.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: "What do you call the introductory part of the Constitution?",
				options: ["Preface", "Amendments", "Preamble", "Bill of Rights"],
				answer: "Preamble",
			},
			{
				text: "What form of goverment does the Philippine adopt?",
				options: [
					"Republican",
					"Democratic",
					"neither a nor b",
					"both a and b",
				],
				answer: "both a and b",
			},
			{
				text: "What is the power of the State to take private property for public use upon payment of a just compensation?",
				options: [
					"right of confiscation",
					"right of limiting resources",
					"right of sequestration",
					"right of eminent domain",
				],
				answer: "right of eminent domain",
			},
			{
				text: "Who among the following may issue a warrant of arrest or a search warrant?",
				options: ["a senator", "a judge", "a congressman", "the President"],
				answer: "a judge",
			},
			{
				text: "A foreigner may acquire Filipino citizenship through",
				options: [
					"naturalization",
					"extradition",
					"rebirth",
					"Visa application",
				],
				answer: "naturalization",
			},
			{
				text: "The right to vote is also known as ____________.",
				options: ["suffrage", "naturalization", "democracy", "plebiscite"],
				answer: "suffrage",
			},
			{
				text: "How many Senators are there in the Senate?",
				options: ["twenty-five", "twenty-four", "twelve", "thirty"],
				answer: "twenty-four",
			},
			{
				text: "What is the minimum age requirement of a Senator?",
				options: ["thirty", "twenty-five", "twenty", "thirty-five"],
				answer: "thirty-five",
			},
			{
				text: "Which of the following bills <strong>do not</strong> originate from the House of Representative?",
				options: [
					"Appropriation bills",
					"Revenue or tariff bills",
					"Amnesty",
					"Private bills",
				],
				answer: "Amnesty",
			},
			{
				text: "The members of the Lower House are",
				options: [
					"elected by region and by party list.",
					"elected by region and appointed by the President.",
					"elected by district and party list.",
					"elected by district and appointed by the Senators.",
				],
				answer: "elected by district and party list.",
			},
			{
				text: "The legislative power of the government shall be vested in the",
				options: [
					"President",
					"Congress",
					"Supreme Court",
					"all of the above",
				],
				answer: "Congress",
			},
			{
				text: "Which of the following may disqualify a person from running for Presidency?",
				options: [
					"He is sixty years old on the day of the election.",
					"He lived abroad five years preceding the election.",
					"He has Filipino parents but was born in the United States.",
					"He is registered voter.",
				],
				answer: "He lived abroad five years preceding the election.",
			},
			{
				text: "Which of the following shows the transfer of power should the President be incapable of dischargin his duties.",
				options: [
					"President → Vice President → Senate President → House Speaker",
					"President → Vice President → Chief Justice → Senate President",
					"President → Vice President → Chief Justice → House Speaker",
					"President → Vice President → House Speaker → Senate President",
				],
				answer:
					"President → Vice President → Senate President → House Speaker",
			},
			{
				text: "A member of the Supreme Court",
				options: [
					"must have been for fifteen years or more, a judge of a lower court.",
					"must have been for ten years, a judge of the Court of Appeals.",
					"may not be a member of the Philippine Bar.",
					"may be a naturalized citizen.",
				],
				answer:
					"must have been for fifteen years or more, a judge of a lower court.",
			},
			{
				text: "The Supreme Court is composed of",
				options: [
					"a Chief Justice and fourteen Associate Justices.",
					"two Chief Justice and fourteen Associate Justices.",
					"a chief Justice and twelve Associate Justices.",
					"a chief Justice and an indefinite number of Associate Justices.",
				],
				answer: "a Chief Justice and fourteen Associate Justices.",
			},
			{
				text: "Which of the following is a Constitutional Commission?",
				options: [
					"Commission of Human Rights",
					"Philippine Commission on Good Goverment",
					"Civil Service Commission",
					"Commission on Natural Resources",
				],
				answer: "Civil Service Commission",
			},
			{
				text: "What branch of goverment has the sole right to initiate all cases of impeachment?",
				options: [
					"Senate",
					"Commission of Election",
					"House of Representative",
					"Judiciary",
				],
				answer: "House of Representative",
			},
			{
				text: "Which of the following is not removable from office by impeachment?",
				options: [
					"Member of the Supreme Court",
					"Member of the Constitutional Commissions",
					"The Ombudsman",
					"Senators",
				],
				answer: "Senators",
			},
			{
				text: "The national language of the Philippines is",
				options: [
					"Pilipino",
					"English and Filipino",
					"Tagalog",
					"Filipino",
				],
				answer: "Filipino",
			},
			{
				text: "Who may propose any amendment to, or revision of the Constitution?",
				options: [
					"Congress or a Constitutional Convention",
					"Congress and a Constitutional Convention",
					"Judiciary and Congress",
					"Judiciary and Constitutional Convention",
				],
				answer: "Congress or a Constitutional Convention",
			},
			{
				text: "What tax is paid by individuals who derive compensation income?",
				options: [
					"Value Added Tax",
					"Excise Tax",
					"Income Tax",
					"Real estate tax",
				],
				answer: "Income Tax",
			},
			{
				text: "When is the deadline for filing income tax returns for every taxable year?",
				options: ["April 15", "April 30", "March 15", "March 30"],
				answer: "April 15",
			},
			{
				text: "Which of the following statements is <strong>true</strong> about taxes.",
				options: [
					"It is a voluntary payment.",
					"It is payable both in cash and in kinD. ",
					"It is an enforced contribution.",
					"It is based on one's desire to pay.",
				],
				answer: "It is an enforced contribution.",
			},
			{
				text: "What tax is imposed on one's right to transmit property at death, and is measured by the value of the property?",
				options: [
					"Excise tax",
					"Withholding tax",
					"Donor's tax",
					"Estate tax",
				],
				answer: "Estate tax",
			},
			{
				text: 'Which of the following is classified as being a "Head of the Family" for income tax purposes?',
				options: [
					"a married individual with dependents",
					"an unmarried individual with dependents",
					"a married individual without dependents",
					"an unmarried individual without dependents",
				],
				answer: "an unmarried individual with dependents",
			},
			{
				text: 'What Act implements the mandate for the "State to make essential goods, health and other social services available to all the people at affordable cost?".',
				options: [
					"Land Reform Program",
					"Generics Act",
					"Resettlement Act",
					"Freedom Act",
				],
				answer: "Generics Act",
			},
			{
				text: "Which of the following is true about elective local officials?",
				options: [
					"The term of office is three years.",
					"Barangay officials' term of office is indefinite.",
					"An official may be reelected indefinitely.",
					"An official may not serve for less than three terms.",
				],
				answer: "The term of office is three years.",
			},
			{
				text: "What may be classified as alienable land of the public domain?",
				options: [
					"forest",
					"mineral lands",
					"national park",
					"agricultural lands",
				],
				answer: "agricultural lands",
			},
			{
				text: "What is the maximum equity for aliens in a corporation or association in the exploration development and utilization of natural resources?",
				options: ["60%", "40%", "50%", "30%"],
				answer: "40%",
			},
			{
				text: "What is recognized by the State as the foundation of the nation?",
				options: ["barangay", "community", "family", "municipality"],
				answer: "family",
			},
		],
	},
	{
		id: "t15",
		name: "Inductive Reasoning",
		brief: "Discover the principle involved in each of the following series. Choose the letter that corresponds to the best answer.",
		timeLimit: "00:15:00",
		questions: [
			{
				text: '<div class="space-x-3"><span>3</span><span>6</span><span>9</span><span>12</span><span>15</span></div>',
				options: ["2", "18", "22", "20"],
				answer: "18",
			},
			{
				text: '<div class="space-x-3"><span>C</span><span>E</span><span>G</span><span>I</span><span>K</span></div>',
				options: ["L", "M", "N", "O"],
				answer: "M",
			},
			{
				text: '<div class="space-x-3"><span>IK</span><span>M</span><span>O</span><span>Q</span></div>',
				options: ["R", "T", "S", "P"],
				answer: "S",
			},
			{
				text: '<div class="space-x-3"><span>B</span><span>D</span><span>F</span><span>H</span><span>J</span></div>',
				options: ["L", "M", "N", "P"],
				answer: "L",
			},
			{
				text: '<div class="space-x-3"><span>10</span><span>17</span><span>26</span><span>37</span></div>',
				options: ["48", "49", "50", "51"],
				answer: "50",
			},
			{
				text: '<div class="space-x-3"><span>37</span><span>50</span><span>65</span><span>82</span></div>',
				options: ["98", "99", "100", "101"],
				answer: "101",
			},
			{
				text: '<div class="space-x-3"><span>3</span><span>9</span><span>5</span><span>25</span><span>8</span><span>64</span><span>12</span><span>144</span></div>',
				options: ["15", "17", "20", "16"],
				answer: "17",
			},
			{
				text: '<div class="space-x-3"><span>AB</span><span>EF</span><span>IJ</span><span>MN</span></div>',
				options: ["OP", "PQ", "QR", "RS"],
				answer: "QR",
			},
			{
				text: '<div class="space-x-3"><span>ZY</span><span>WV</span><span>TS</span><span>QP</span></div>',
				options: ["NM", "ML", "LK", "KJ"],
				answer: "NM",
			},
			{
				text: '<div class="space-x-3"><span>DC</span><span>HG</span><span>LK</span><span>PO</span></div>',
				options: ["OP", "RQ", "SR", "TS"],
				answer: "TS",
			},
			{
				text: '<div class="space-x-3"><span>1</span><span>2</span><span>5</span><span>6</span><span>11</span><span>12</span><span>19</span><span>20</span></div>',
				options: ["25", "27", "29", "31"],
				answer: "29",
			},
			{
				text: '<div class="space-x-3"><span>4</span><span>9</span><span>5</span><span>11</span><span>6</span><span>13</span><span>7</span><span>15</span></div>',
				options: ["19", "9", "8", "17"],
				answer: "8",
			},
			{
				text: '<div class="space-x-3"><span>6</span><span>12</span><span>36</span><span>72</span><span>216</span></div>',
				options: ["250", "300", "400", "432"],
				answer: "432",
			},
			{
				text: '<div class="space-x-3"><span>A</span><span>C</span><span>C</span><span>F</span><span>F</span><span>F</span></div>',
				options: ["J", "G", "K", "V"],
				answer: "J",
			},
			{
				text: '<div class="space-x-3"><span>1</span><span>2</span><span>6</span><span>12</span><span>36</span></div>',
				options: ["50", "52", "70", "72"],
				answer: "72",
			},
			{
				text: '<div class="space-x-3"><span>H</span><span>H</span><span>L</span><span>L</span><span>P</span><span>P</span><span>T</span><span>T</span></div>',
				options: ["V", "X", "Y", "Z"],
				answer: "X",
			},
			{
				text: '<div class="space-x-3"><span>E</span><span>F</span><span>H</span><span>G</span><span>I</span><span>J</span></div>',
				options: ["LK", "JL", "KM", "MN"],
				answer: "LK",
			},
			{
				text: '<div class="space-x-3"><span>6</span><span>12</span><span>7</span><span>11</span><span>8</span><span>10</span></div>',
				options: ["13", "7", "10", "9"],
				answer: "9",
			},
			{
				text: '<div class="space-x-3"><span>A</span><span>C</span><span>F</span><span>J</span><span>O</span></div>',
				options: ["T", "U", "S", "R"],
				answer: "U",
			},
			{
				text: '<div class="space-x-3"><span>B</span><span>DE</span><span>GHI</span></div>',
				options: ["MNDP", "LMNO", "JKLM", "KLMN"],
				answer: "KLMN",
			},
			{
				text: '<div class="space-x-3"><span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span></div>',
				options: ["J", "I", "H", "G"],
				answer: "G",
			},
			{
				text: '<div class="space-x-3"><span>N</span><span>O</span><span>P</span><span>Q</span><span>R</span><span>S</span><span>T</span></div>',
				options: ["W", "V", "U", "T"],
				answer: "T",
			},
			{
				text: '<div class="space-x-3"><span>3</span><span>8</span><span>48</span><span>55</span><span>440</span></div>',
				options: ["448", "449", "450", "451"],
				answer: "449",
			},
			{
				text: '<div class="space-x-3"><span>16</span><span>12</span><span>17</span><span>11</span><span>18</span></div>',
				options: ["7", "9", "10", "12"],
				answer: "10",
			},
			{
				text: '<div class="space-x-3"><span>28</span><span>58</span><span>29</span><span>145</span><span>29</span></div>',
				options: ["231", "232", "233", "234"],
				answer: "232",
			},
			{
				text: '<div class="space-x-3"><span>MZ</span><span>KX</span><span>IV</span><span>GT</span></div>',
				options: ["ER", "FS", "DQ", "CP"],
				answer: "ER",
			},
			{
				text: '<div class="space-x-3"><span>LO</span><span>KP</span><span>JQ</span><span>IR</span><span>HS</span></div>',
				options: ["GT", "FU", "EV", "DW"],
				answer: "GT",
			},
			{
				text: '<div class="space-x-3"><span>G</span><span>F</span><span>I</span><span>H</span><span>K</span></div>',
				options: ["J", "M", "L", "O"],
				answer: "J",
			},
			{
				text: '<div class="space-x-3"><span>AZ</span><span>BY</span><span>CX</span><span>DW</span><span>EV</span></div>',
				options: ["GT", "FU", "HS", "JR"],
				answer: "FU",
			},
			{
				text: '<div class="space-x-3"><span>396</span><span>384</span><span>370</span><span>354</span><span>336</span></div>',
				options: ["318", "314", "316", "314"],
				answer: "316",
			},
			{
				text: '<div class="space-x-3"><span>15</span><span>17</span><span>18</span><span>21</span><span>22</span></div>',
				options: ["23", "25", "24", "26"],
				answer: "26",
			},
			{
				text: '<div class="space-x-3"><span>7</span><span>21</span><span>14</span><span>42</span><span>42</span></div>',
				options: ["84", "96", "124", "126"],
				answer: "126",
			},
			{
				text: '<div class="space-x-3"><span>314</span><span>321</span><span>322</span><span>330</span><span>332</span></div>',
				options: ["340", "341", "342", "343"],
				answer: "341",
			},
			{
				text: '<div class="space-x-3"><span>F21</span><span>H19</span><span>K16</span><span>012</span></div>',
				options: ["A26", "Z1", "X3", "B25"],
				answer: "Z1",
			},
			{
				text: '<div class="space-x-3"><span>I18</span><span>K16</span><span>M14</span><span>012</span></div>',
				options: ["P10", "Q11", "Q10", "P11"],
				answer: "Q10",
			},
			{
				text: '<div class="space-x-3"><span>BO</span><span>DQ</span><span>FS</span><span>HU</span><span>JW</span></div>',
				options: ["KX", "IV", "LY", "MZ"],
				answer: "LY",
			},
			{
				text: '<div class="space-x-3"><span>BC</span><span>PQ</span><span>EF</span><span>ST</span></div>',
				options: ["UJ", "KL", "VW", "HI"],
				answer: "HI",
			},
			{
				text: '<div class="space-x-3"><span>E4</span><span>G6</span><span>18</span><span>K10</span><span>M12</span></div>',
				options: ["O14", "Q16", "N14", "L16"],
				answer: "O14",
			},
			{
				text: '<div class="space-x-3"><span>DQ4</span><span>GT7</span><span>CP3</span><span>HU8</span><span>BO2</span></div>',
				options: ["IV9", "KX11", "JW10", "MZ13"],
				answer: "IV9",
			},
			{
				text: '<div class="space-x-3"><span>AN1</span><span>CP3</span><span>ER5</span><span>GT7</span><span>IV9</span><span>KX11</span></div>',
				options: ["LY12", "MZ13", "JW10", "HU8"],
				answer: "MZ13",
			},
			{
				text: '<div class="space-x-3"><span>A1</span><span>C3</span><span>E5</span></div>',
				options: ["F6", "G7", "J11", "K19"],
				answer: "G7",
			},
			{
				text: '<div class="space-x-3"><span>A26</span><span>C24</span><span>EF21</span></div>',
				options: ["P12", "H14", "J17", "L19"],
				answer: "J17",
			},
			{
				text: '<div class="space-x-3"><span>J10</span><span>L12</span><span>N14</span></div>',
				options: ["O15", "P16", "G14", "U34"],
				answer: "P16",
			},
			{
				text: '<div class="space-x-3"><span>8R</span><span>6T</span><span>4V</span></div>',
				options: ["17j", "15e", "24w", "2x"],
				answer: "2x",
			},
			{
				text: '<div class="space-x-3"><span>J1017</span><span>L1215</span><span>N1413</span></div>',
				options: ["R125", "P1611", "T416", "Q678"],
				answer: "P1611",
			},
			{
				text: '<div class="space-x-3"><span>AC</span><span>FH</span><span>KM</span></div>',
				options: ["AB", "EF", "PR", "VW"],
				answer: "PR",
			},
			{
				text: '<div class="space-x-3"><span>1516</span><span>1819</span><span>2122</span></div>',
				options: ["1716", "1115", "2324", "2425"],
				answer: "2425",
			},
			{
				text: '<div class="space-x-3"><span>1121</span><span>2242</span><span>3483</span></div>',
				options: ["4964", "6766", "4844", "4994"],
				answer: "4964",
			},
			{
				text: '<div class="space-x-3"><span>aa33bb</span><span>cc77dd</span><span>ee1111ff</span></div>',
				options: ["gg1516hh", "gg1515hh", "gg1717hh", "gg1816hh"],
				answer: "gg1515hh",
			},
			{
				text: '<div class="space-x-3"><span>b9b9</span><span>c7c7</span><span>d5d5</span></div>',
				options: ["e3e2", "e4e4", "e2e2", "e3e3"],
				answer: "e3e3",
			},
		],
	},
];

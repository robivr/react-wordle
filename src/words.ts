const techWords = [
  'allow',
  'apply',
  'array',
  'arrow',
  'avoid',
  'await',
  'blank',
  'block',
  'bonus',
  'break',
  'cache',
  'calls',
  'chart',
  'class',
  'click',
  'close',
  'cloud',
  'const',
  'crash',
  'digit',
  'enter',
  'error',
  'event',
  'exact',
  'exist',
  'false',
  'fetch',
  'float',
  'frame',
  'guard',
  'image',
  'index',
  'inner',
  'input',
  'issue',
  'items',
  'logic',
  'login',
  'lower',
  'match',
  'media',
  'model',
  'mouse',
  'patch',
  'pause',
  'point',
  'query',
  'ratio',
  'react',
  'redux',
  'shell',
  'slice',
  'stack',
  'state',
  'teams',
  'tests',
  'theme',
  'title',
  'topic',
  'upper',
  'users',
  'views',
];

const generalWords = [
  'about',
  'above',
  'above',
  'acute',
  'admit',
  'adopt',
  'adopt',
  'after',
  'agree',
  'alive',
  'alive',
  'allow',
  'allow',
  'alone',
  'alone',
  'alter',
  'anger',
  'angry',
  'apple',
  'apply',
  'argue',
  'argue',
  'arise',
  'avoid',
  'award',
  'aware',
  'aware',
  'awful',
  'awful',
  'basic',
  'beach',
  'begin',
  'black',
  'blame',
  'blame',
  'blank',
  'blind',
  'blind',
  'blood',
  'brave',
  'brave',
  'bread',
  'break',
  'break',
  'brief',
  'bring',
  'broad',
  'brown',
  'build',
  'burst',
  'carry',
  'catch',
  'cause',
  'cause',
  'chain',
  'chair',
  'cheap',
  'check',
  'chest',
  'chief',
  'chief',
  'child',
  'civil',
  'claim',
  'clean',
  'clear',
  'climb',
  'close',
  'count',
  'court',
  'cover',
  'cover',
  'crazy',
  'cream',
  'cross',
  'crowd',
  'crown',
  'daily',
  'dance',
  'dance',
  'death',
  'depth',
  'dirty',
  'doubt',
  'doubt',
  'drama',
  'dream',
  'drink',
  'drink',
  'drive',
  'drive',
  'early',
  'earth',
  'empty',
  'enemy',
  'enjoy',
  'enter',
  'entry',
  'equal',
  'every',
  'exact',
  'exist',
  'exist',
  'extra',
  'faint',
  'faith',
  'false',
  'fault',
  'field',
  'fifth',
  'fight',
  'final',
  'first',
  'floor',
  'focus',
  'focus',
  'force',
  'force',
  'fresh',
  'front',
  'front',
  'fruit',
  'funny',
  'giant',
  'glass',
  'grail',
  'grain',
  'grand',
  'grass',
  'great',
  'green',
  'green',
  'gross',
  'group',
  'guard',
  'guess',
  'happy',
  'harsh',
  'heavy',
  'horse',
  'hotel',
  'human',
  'ideal',
  'image',
  'imply',
  'inner',
  'issue',
  'joint',
  'judge',
  'judge',
  'large',
  'laugh',
  'layer',
  'learn',
  'leave',
  'legal',
  'level',
  'level',
  'light',
  'light',
  'limit',
  'limit',
  'local',
  'logic',
  'loose',
  'lucky',
  'lunch',
  'magic',
  'major',
  'major',
  'march',
  'marry',
  'match',
  'match',
  'mayor',
  'metal',
  'minor',
  'model',
  'month',
  'moral',
  'mouse',
  'mouth',
  'music',
  'naked',
  'nasty',
  'naval',
  'night',
  'noise',
  'north',
  'novel',
  'nurse',
  'occur',
  'offer',
  'offer',
  'order',
  'order',
  'other',
  'other',
  'outer',
  'owner',
  'panel',
  'paper',
  'party',
  'pause',
  'peace',
  'phase',
  'phone',
  'phone',
  'piece',
  'pilot',
  'pitch',
  'place',
  'place',
  'plain',
  'plane',
  'plant',
  'plate',
  'point',
  'point',
  'pound',
  'power',
  'press',
  'press',
  'price',
  'pride',
  'prime',
  'prior',
  'prize',
  'proof',
  'proud',
  'prove',
  'queen',
  'quick',
  'quiet',
  'radio',
  'raise',
  'range',
  'rapid',
  'ratio',
  'reach',
  'ready',
  'refer',
  'relax',
  'reply',
  'right',
  'right',
  'river',
  'roman',
  'rough',
  'round',
  'round',
  'route',
  'royal',
  'rugby',
  'rural',
  'scale',
  'scene',
  'scope',
  'score',
  'sense',
  'serve',
  'shall',
  'shape',
  'share',
  'share',
  'sharp',
  'sheep',
  'sheer',
  'sheet',
  'shift',
  'shift',
  'shirt',
  'shock',
  'shoot',
  'short',
  'sight',
  'silly',
  'sixth',
  'skill',
  'slash',
  'sleep',
  'sleep',
  'small',
  'smart',
  'smile',
  'smoke',
  'solid',
  'solve',
  'sorry',
  'sound',
  'sound',
  'south',
  'space',
  'spare',
  'speak',
  'speed',
  'spend',
  'spite',
  'split',
  'sport',
  'squad',
  'staff',
  'stage',
  'stand',
  'start',
  'start',
  'state',
  'state',
  'steam',
  'steel',
  'steep',
  'stick',
  'still',
  'stock',
  'stone',
  'store',
  'study',
  'study',
  'stuff',
  'style',
  'sugar',
  'super',
  'sweet',
  'table',
  'taste',
  'teach',
  'teach',
  'teams',
  'thank',
  'theme',
  'there',
  'thick',
  'thing',
  'think',
  'third',
  'throw',
  'tight',
  'title',
  'topic',
  'total',
  'total',
  'touch',
  'touch',
  'tough',
  'tower',
  'track',
  'trade',
  'train',
  'train',
  'treat',
  'trend',
  'trial',
  'trust',
  'trust',
  'truth',
  'uncle',
  'union',
  'unity',
  'until',
  'upper',
  'upset',
  'urban',
  'usual',
  'vague',
  'valid',
  'value',
  'video',
  'visit',
  'visit',
  'vital',
  'voice',
  'voice',
  'waste',
  'waste',
  'watch',
  'watch',
  'water',
  'where',
  'while',
  'whine',
  'white',
  'white',
  'whole',
  'whole',
  'woman',
  'world',
  'worry',
  'would',
  'write',
  'write',
  'wrong',
  'young',
  'youth',
  'aback',
  'abide',
  'abode',
  'abort',
  'about',
  'abuse',
  'abuzz',
  'aches',
  'achoo',
  'acids',
  'actor',
  'acute',
  'adapt',
  'added',
  'admin',
  'admit',
  'adobe',
  'adopt',
  'adorn',
  'adult',
  'affix',
  'after',
  'again',
  'agent',
  'aging',
  'agony',
  'agree',
  'ahead',
  'ahold',
  'aided',
  'aimed',
  'aired',
  'aisle',
  'alarm',
  'alert',
  'alias',
  'alien',
  'alike',
  'alloy',
  'aloft',
  'alone',
  'aloof',
  'aloud',
  'alpha',
  'amaze',
  'amber',
  'amend',
  'among',
  'amuse',
  'angel',
  'anger',
  'angle',
  'angry',
  'anime',
  'ankle',
  'annul',
  'anvil',
  'apart',
  'apple',
  'apron',
  'arena',
  'armed',
  'armor',
  'arose',
  'array',
  'arson',
  'artsy',
  'aside',
  'asked',
  'asset',
  'atone',
  'audio',
  'audit',
  'aunty',
  'avert',
  'avoid',
  'await',
  'awake',
  'award',
  'aware',
  'awful',
  'babel',
  'bacon',
  'badge',
  'badly',
  'bagel',
  'baggy',
  'baked',
  'baker',
  'bakes',
  'balmy',
  'bands',
  'bandy',
  'banks',
  'barks',
  'baron',
  'based',
  'basic',
  'basil',
  'basin',
  'batch',
  'baths',
  'baton',
  'batty',
  'beach',
  'beans',
  'beard',
  'beast',
  'bebop',
  'began',
  'begin',
  'belch',
  'below',
  'bench',
  'bends',
  'bendy',
  'bible',
  'bicep',
  'bides',
  'bidet',
  'biked',
  'biker',
  'bikes',
  'binge',
  'bingo',
  'bipod',
  'birch',
  'birth',
  'bison',
  'bites',
  'black',
  'blade',
  'blame',
  'blank',
  'blaze',
  'bleak',
  'bleed',
  'bleep',
  'blend',
  'bless',
  'blimp',
  'blind',
  'bling',
  'blink',
  'bliss',
  'bloat',
  'block',
  'blond',
  'blood',
  'bloom',
  'blown',
  'blows',
  'blues',
  'bluff',
  'blunt',
  'blurs',
  'board',
  'boast',
  'bogus',
  'boils',
  'boned',
  'bones',
  'books',
  'boost',
  'booth',
  'booze',
  'bored',
  'bound',
  'bowel',
  'boxed',
  'boxer',
  'boxes',
  'brace',
  'braid',
  'brail',
  'brain',
  'brake',
  'brand',
  'brass',
  'brawl',
  'bread',
  'breed',
  'bribe',
  'bridge',
  'bring',
  'broad',
  'broke',
  'brown',
  'brush',
  'brute',
  'budge',
  'built',
  'bully',
  'bumpy',
  'bunch',
  'bunny',
  'burns',
  'burnt',
  'bushy',
  'buyer',
  'cabin',
  'cable',
  'cache',
  'caddy',
  'cadet',
  'caked',
  'cakes',
  'calve',
  'camel',
  'cameo',
  'camps',
  'canal',
  'candy',
  'canoe',
  'canon',
  'cards',
  'cargo',
  'carol',
  'carry',
  'carts',
  'carve',
  'cased',
  'casts',
  'catch',
  'cause',
  'caved',
  'caves',
  'cease',
  'cedar',
  'cello',
  'celts',
  'chain',
  'chair',
  'chalk',
  'champ',
  'chart',
  'chase',
  'cheap',
  'cheat',
  'check',
  'cheek',
  'cheer',
  'chefs',
  'chess',
  'chest',
  'chews',
  'chewy',
  'chick',
  'chief',
  'child',
  'chime',
  'chips',
  'chirp',
  'chive',
  'choir',
  'choke',
  'chomp',
  'chore',
  'chuck',
  'churn',
  'chute',
  'cider',
  'cigar',
  'claim',
  'clasp',
  'class',
  'clean',
  'cleat',
  'cliff',
  'climb',
  'cloak',
  'clone',
  'close',
  'cloth',
  'cloud',
  'clout',
  'clown',
  'coast',
  'coded',
  'color',
  'combo',
  'comes',
  'comfy',
  'condo',
  'cones',
  'coral',
  'cords',
  'corny',
  'costs',
  'couch',
  'cough',
  'could',
  'count',
  'cover',
  'covid',
  'crabs',
  'crack',
  'craft',
  'crane',
  'crawl',
  'craze',
  'crazy',
  'cream',
  'cribs',
  'cried',
  'cries',
  'crime',
  'crisp',
  'croak',
  'crowd',
  'crown',
  'crude',
  'crumb',
  'cupid',
  'cured',
  'curly',
  'curry',
  'curve',
  'curvy',
  'cuter',
  'daddy',
  'daily',
  'dairy',
  'daisy',
  'dance',
  'dandy',
  'darts',
  'dated',
  'dates',
  'deals',
  'dealt',
  'death',
  'debts',
  'debut',
  'decaf',
  'decay',
  'decks',
  'decor',
  'decoy',
  'deeds',
  'deity',
  'delay',
  'delta',
  'delve',
  'demon',
  'denim',
  'dense',
  'depth',
  'derby',
  'desks',
  'deter',
  'detox',
  'diary',
  'diced',
  'dices',
  'diets',
  'dingy',
  'dirty',
  'discs',
  'ditch',
  'ditto',
  'ditty',
  'dives',
  'docks',
  'dodge',
  'doggy',
  'doing',
  'dolls',
  'donor',
  'doors',
  'doped',
  'doted',
  'dotty',
  'dough',
  'doves',
  'downs',
  'dowry',
  'dozer',
  'dozes',
  'draft',
  'drags',
  'drain',
  'drake',
  'drama',
  'drank',
  'drape',
  'drawl',
  'drawn',
  'draws',
  'dread',
  'dream',
  'dress',
  'dried',
  'drier',
  'drill',
  'drink',
  'drive',
  'droid',
  'drone',
  'drool',
  'drops',
  'drove',
  'drown',
  'drugs',
  'druid',
  'drums',
  'drunk',
  'dryer',
  'duals',
  'ducts',
  'dudes',
  'duets',
  'duked',
  'dukes',
  'dumps',
  'dunce',
  'dunes',
  'duped',
  'dusty',
  'duvet',
  'dwarf',
  'dweeb',
  'dwell',
  'dying',
  'eager',
  'eagle',
  'early',
  'earns',
  'earth',
  'eased',
  'eaten',
  'eater',
  'ebony',
  'edema',
  'edges',
  'edits',
  'eight',
  'eject',
  'elate',
  'elbow',
  'elder',
  'elect',
  'elite',
  'elope',
  'elude',
  'email',
  'embed',
  'ember',
  'emend',
  'emoji',
  'emote',
  'empty',
  'enact',
  'ended',
  'enema',
  'enemy',
  'enjoy',
  'enter',
  'entry',
  'equal',
  'equip',
  'erase',
  'erect',
  'erode',
  'error',
  'erupt',
  'essay',
  'ether',
  'ethic',
  'euros',
  'event',
  'every',
  'exact',
  'exams',
  'excel',
  'exile',
  'exist',
  'exits',
  'expel',
  'extra',
  'fable',
  'faced',
  'faces',
  'facet',
  'facts',
  'fades',
  'fails',
  'faint',
  'fairs',
  'fairy',
  'fakes',
  'falls',
  'false',
  'famed',
  'fancy',
  'fangs',
  'farce',
  'farms',
  'fatal',
  'fated',
  'fatty',
  'favor',
  'fazed',
  'fears',
  'feast',
  'fecal',
  'feeds',
  'feels',
  'feint',
  'fella',
  'felon',
  'fence',
  'ferry',
  'fetal',
  'fetch',
  'fever',
  'fiber',
  'field',
  'fiend',
  'fifth',
  'fifty',
  'fight',
  'files',
  'films',
  'filth',
  'final',
  'finds',
  'fined',
  'fired',
  'fires',
  'first',
  'fishy',
  'fists',
  'fitch',
  'fiver',
  'fives',
  'fixed',
  'fixer',
  'fixes',
  'fizzy',
  'flags',
  'flake',
  'flame',
  'flank',
  'flaps',
  'flare',
  'flash',
  'flask',
  'flats',
  'fleas',
  'fleet',
  'flesh',
  'flied',
  'flies',
  'fling',
  'flips',
  'flirt',
  'float',
  'flock',
  'flood',
  'floor',
  'flora',
  'flour',
  'flown',
  'fluff',
  'fluid',
  'fluke',
  'flume',
  'flush',
  'flute',
  'flyer',
  'foamy',
  'focus',
  'foggy',
  'folks',
  'fonts',
  'foods',
  'fools',
  'force',
  'forge',
  'forgo',
  'forks',
  'forth',
  'forty',
  'forum',
  'found',
  'frail',
  'frame',
  'frank',
  'fraud',
  'freak',
  'freed',
  'fresh',
  'fried',
  'fries',
  'frisk',
  'frock',
  'frogs',
  'front',
  'frost',
  'frown',
  'fruit',
  'fryer',
  'fudge',
  'fuels',
  'fully',
  'fumed',
  'fumes',
  'funds',
  'funny',
  'fused',
  'fussy',
  'fuzzy',
];

const words = [...techWords, ...generalWords];

export default words;

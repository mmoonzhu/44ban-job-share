/*
  《火星探索·中国号》游戏配置参考
  这个文件不是必须直接运行，可以让 Codex 参考并整合进 index.html。
*/

const STAGES = [
  {
    id: 'product',
    icon: '🚀',
    role: '产品岗',
    nickname: '任务队长',
    shortAction: '想清楚',
    description: '听大家的愿望，想清楚这次任务最重要的目标。'
  },
  {
    id: 'design',
    icon: '🎨',
    role: '设计岗',
    nickname: '飞船造型师',
    shortAction: '画出来',
    description: '让飞船变得好看、好认、好使用。'
  },
  {
    id: 'develop',
    icon: '💻',
    role: '开发岗',
    nickname: '代码驾驶员',
    shortAction: '做出来',
    description: '写下一条条指令，让飞船真的动起来。'
  },
  {
    id: 'maintain',
    icon: '🛠️',
    role: '维护岗',
    nickname: '故障救援员',
    shortAction: '守护它',
    description: '飞船遇到问题时，快速判断并修好它。'
  }
];

const PRODUCT_WISHES = [
  {
    id: 'shield',
    child: '小明',
    icon: '🛡️',
    title: '最强防护罩',
    subtitle: '抵抗火星沙尘暴',
    benefit: '飞船更安全。',
    tradeoff: '防护越强，飞船可能越重。'
  },
  {
    id: 'science',
    child: '小红',
    icon: '🔬',
    title: '最多科学仪器',
    subtitle: '研究更多火星秘密',
    benefit: '可以带回更多科学发现。',
    tradeoff: '仪器太多，飞船会更复杂、更重。'
  },
  {
    id: 'speed',
    child: '小刚',
    icon: '⚡',
    title: '极速往返',
    subtitle: '减少太空飞行时间',
    benefit: '来回更快。',
    tradeoff: '速度越快，风险可能越高。'
  }
];

const DESIGN_COLORS = [
  { id: 'red', name: '中国红', value: '#e53935' },
  { id: 'gold', name: '金色', value: '#f6c343' },
  { id: 'blue', name: '蓝色', value: '#42a5f5' },
  { id: 'silver', name: '银色', value: '#cfd8dc' },
  { id: 'white', name: '白色', value: '#ffffff' }
];

const DESIGN_PARTS = [
  { id: 'body', name: '机身主体' },
  { id: 'shieldStripe', name: '防护盾条纹' },
  { id: 'arm', name: '探测臂' },
  { id: 'tail', name: '尾翼' }
];

const FLAG_POSITIONS = [
  { id: 'bodyLeft', name: '机身左侧' },
  { id: 'bodyRight', name: '机身右侧' },
  { id: 'tail', name: '尾翼' },
  { id: 'shield', name: '防护盾旁边' }
];

const COMMANDS = {
  forward: {
    label: 'forward()',
    buttonText: '⬆️ 前进',
    type: 'move'
  },
  turnLeft: {
    label: 'turnLeft()',
    buttonText: '↩️ 左转90°',
    type: 'turnLeft'
  },
  turnRight: {
    label: 'turnRight()',
    buttonText: '↪️ 右转90°',
    type: 'turnRight'
  }
};

const DIRECTION_ORDER = ['up', 'right', 'down', 'left'];

const DIRECTION_DELTA = {
  up: { x: 0, y: -1, rotation: -45 },
  right: { x: 1, y: 0, rotation: 45 },
  down: { x: 0, y: 1, rotation: 135 },
  left: { x: -1, y: 0, rotation: -135 }
};

/*
  迷宫坐标说明：
  - x 从左到右：0 到 size - 1
  - y 从上到下：0 到 size - 1
  - 起点固定：{ x: 0, y: size - 1 }
  - 终点固定：{ x: size - 1, y: 0 }
  - 初始方向：up
*/
const MAZE_PRESETS = {
  5: {
    easy: {
      obstacles: [
        { x: 1, y: 3 },
        { x: 2, y: 3 },
        { x: 2, y: 1 }
      ],
      sampleSolution: ['forward', 'forward', 'forward', 'forward', 'turnRight', 'forward', 'forward', 'forward', 'forward']
    },
    normal: {
      obstacles: [
        { x: 0, y: 2 },
        { x: 2, y: 4 },
        { x: 2, y: 2 },
        { x: 3, y: 1 }
      ],
      sampleSolution: ['forward', 'turnRight', 'forward', 'turnLeft', 'forward', 'forward', 'forward', 'turnRight', 'forward', 'forward', 'forward']
    },
    challenge: {
      obstacles: [
        { x: 0, y: 3 },
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: 2 },
        { x: 3, y: 0 }
      ],
      sampleSolution: ['turnRight', 'forward', 'forward', 'forward', 'forward', 'turnLeft', 'forward', 'forward', 'forward', 'forward']
    }
  },
  6: {
    easy: {
      obstacles: [
        { x: 1, y: 4 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 1 }
      ],
      sampleSolution: ['forward', 'forward', 'forward', 'forward', 'forward', 'turnRight', 'forward', 'forward', 'forward', 'forward', 'forward']
    },
    normal: {
      obstacles: [
        { x: 0, y: 3 },
        { x: 2, y: 4 },
        { x: 3, y: 3 },
        { x: 4, y: 1 },
        { x: 1, y: 1 }
      ],
      sampleSolution: ['forward', 'turnRight', 'forward', 'turnLeft', 'forward', 'forward', 'forward', 'forward', 'turnRight', 'forward', 'forward', 'forward', 'forward']
    },
    challenge: {
      obstacles: [
        { x: 0, y: 4 },
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 1 },
        { x: 4, y: 3 },
        { x: 2, y: 5 }
      ],
      sampleSolution: ['turnRight', 'forward', 'forward', 'forward', 'forward', 'forward', 'turnLeft', 'forward', 'forward', 'forward', 'forward', 'forward']
    }
  },
  7: {
    easy: {
      obstacles: [
        { x: 1, y: 5 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 2 },
        { x: 5, y: 1 }
      ],
      sampleSolution: ['forward', 'forward', 'forward', 'forward', 'forward', 'forward', 'turnRight', 'forward', 'forward', 'forward', 'forward', 'forward', 'forward']
    },
    normal: {
      obstacles: [
        { x: 0, y: 4 },
        { x: 1, y: 2 },
        { x: 2, y: 5 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 1 }
      ],
      sampleSolution: ['forward', 'turnRight', 'forward', 'turnLeft', 'forward', 'forward', 'forward', 'forward', 'forward', 'turnRight', 'forward', 'forward', 'forward', 'forward', 'forward']
    },
    challenge: {
      obstacles: [
        { x: 0, y: 5 },
        { x: 1, y: 3 },
        { x: 2, y: 4 },
        { x: 3, y: 2 },
        { x: 4, y: 5 },
        { x: 5, y: 3 },
        { x: 3, y: 0 }
      ],
      sampleSolution: ['turnRight', 'forward', 'forward', 'forward', 'forward', 'forward', 'forward', 'turnLeft', 'forward', 'forward', 'forward', 'forward', 'forward', 'forward']
    }
  }
};

const CRISIS_LIST = [
  {
    id: 'cold',
    name: '低温结冰',
    message: '飞船进入低温区，外壳开始结冰！',
    effectClass: 'ship-cold',
    correctAction: 'heat',
    correctText: '🔥 加温',
    emoji: '❄️'
  },
  {
    id: 'hot',
    name: '高温过热',
    message: '飞船温度太高，系统快过热了！',
    effectClass: 'ship-hot',
    correctAction: 'cool',
    correctText: '❄️ 降温',
    emoji: '🔥'
  },
  {
    id: 'power',
    name: '电量不足',
    message: '飞船电量不足，快没电了！',
    effectClass: 'ship-dark',
    correctAction: 'charge',
    correctText: '☀️ 展开太阳帆板充电',
    emoji: '🌫️'
  },
  {
    id: 'damage',
    name: '碎片击中',
    message: '太空碎片击中了飞船外壳！',
    effectClass: 'ship-damaged',
    correctAction: 'repair',
    correctText: '🧑‍🚀 太空行走维修',
    emoji: '💥'
  }
];

const MAINTAIN_ACTIONS = [
  { id: 'heat', text: '🔥 加温' },
  { id: 'cool', text: '❄️ 降温' },
  { id: 'charge', text: '☀️ 展开太阳帆板充电' },
  { id: 'repair', text: '🧑‍🚀 太空行走维修' }
];

const MAINTAIN_SPEEDS = {
  fast: { label: '快速', minMs: 3000, maxMs: 5000 },
  normal: { label: '普通', minMs: 5000, maxMs: 8000 },
  slow: { label: '慢速', minMs: 8000, maxMs: 12000 }
};

const SUMMARY_CARDS = {
  product: {
    title: '产品岗 = 帮大家想清楚：到底先做什么。',
    text: '有很多愿望时，产品同学要听大家的想法，根据目标做取舍，最后做出清楚的任务单。'
  },
  design: {
    title: '设计岗 = 让东西变得好看、好认、好使用。',
    text: '设计同学不只是涂颜色，还要让大家一眼看懂这是什么、哪里重要、怎么使用。'
  },
  develop: {
    title: '开发岗 = 把任务单和设计图，变成真的能运行的程序。',
    text: '开发同学会写下一条条指令，让软件按照计划工作。'
  },
  maintain: {
    title: '维护岗 = 软件上线后，继续保护它稳定运行。',
    text: '如果系统出问题，维护同学要快速发现、判断、修复，让软件继续安全工作。'
  }
};

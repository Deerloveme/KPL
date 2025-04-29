// 选手数据库
const players = [
    {
        name: "一诺",
        age: 23,
        team: "AG超玩会",
        championships: 4,
        fmvp: "有",
        img: "images/yn.jpg",
        desc: "顶级发育路选手"
    },
    {
        name: "花海",
        age: 24,
        team: "武汉eStarPro",
        championships: 7,
        fmvp: "有",
        img: "images/hh.jpg",
        desc: "野区霸主"
    },
    {
        name: "暖阳",
        age: 22,
        team: "北京WB",
        championships: 3,
        fmvp: "有",
        img: "images/ny.jpg",
        desc: "天才打野选手"
    }
];

// 其他游戏配置数据
const gameConfig = {
    maxAttempts: 10,
    difficultySettings: {
        easy: { hiddenFields: [] },
        normal: { hiddenFields: ["age"] },
        hard: { hiddenFields: ["age", "team"] }
    }
};
// 选手数据库
const players = [
    { name: "一诺", age: 23, team: "成都AG超玩会", championships: 4, fmvp: "有", img: "images/yn.jpg"},
            { name: "钟意", age: 20, team: "成都AG超玩会", championships: 4, fmvp: "有", img: "images/zy.jpg"},
            { name: "大帅", age: 21, team: "成都AG超玩会", championships: 3, fmvp: "无", img: "images/ds.jpg" },
            { name: "花海", age: 24, team: "武汉eStarPro", championships: 7, fmvp: "有",img: "images/hh.jpg" },
            { name: "长生", age: 21, team: "成都AG超玩会", championships: 4, fmvp: "有",img: "images/cs.jpg" },
            { name: "fly", age: 25, team: "济南RW侠", championships: 8, fmvp: "有",img: "images/fly.jpg" },
            { name: "梦岚", age: 21, team: "佛山DRG", championships: 0, fmvp: "无",img: "images/ml.jpg" },
            { name: "小胖", age: 20, team: "重庆狼队", championships: 5, fmvp: "有",img: "images/xp.jpg" },
            {name: "归期", realName: "双小钧", age: "未知", team: "重庆狼队", championships: 2, img: "images/gq.jpg"},
              {name: "紫幻 ", realName: "黄广顺", age: "未知", team: "重庆狼队", position: "中路",
                championships: 1,  // 2025年新加入狼队，暂无冠军记录:cite[2]:cite[5]
                img:"images/zh.jpg"},
              {name: "道崽", realName: "杨凯博", age: "未知", team: "重庆狼队", position: "发育路", championships: 0,  // 2025赛季首发，替代原发育路妖刀:cite[7]:cite[8]
                fmvp: "无",
                img: "images/dz.jpg"
              },
              {
                name: "一笙",
                realName: "未知",  // 搜索结果未提及真实姓名
                age: "未知",
                team: "重庆狼队",
                position: "游走位",
                championships: 2,  // 2025赛季首发游走:cite[5]:cite[7]
                fmvp: "无",
                img: "images/ys.jpg"
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

// 在game.js中添加分享功能
function initShare() {
    const shareData = {
        title: 'KPL选手猜猜猜',
        text: '快来挑战你的KPL知识！',
        url: window.location.href
    };
    
    document.getElementById('shareBtn').addEventListener('click', async () => {
        try {
            await navigator.share(shareData);
        } catch (err) {
            prompt('复制链接分享：', window.location.href);
        }
    });
}

// 选手数据库
const players = [
            { name: "一诺", realName: "徐必成", age: 23, team: "成都AG超玩会", position: "发育路", championships: 4, fmvp: "有", img: "images/yn.jpg"},
            { name: "钟意", realName: "", age: 20, team: "成都AG超玩会", position: "打野", championships: 4, fmvp: "有", img: "images/zy.jpg"},
            { name: "大帅", realName: "孟家俊", age: 21, team: "成都AG超玩会", position: "游走", championships: 3, fmvp: "无", img: "images/ds.jpg" },
            { name: "花海", realName: "罗思源", age: 24, team: "武汉eStarPro", position: "打野", championships: 7, fmvp: "有",img: "images/hh.jpg" },
            { name: "长生", realName: "谢承俊", age: 21, team: "成都AG超玩会", position: "中路", championships: 4, fmvp: "有",img: "images/cs.jpg" },
            { name: "fly", realName: "彭云飞", age: 25, team: "济南RW侠", position: "对抗路", championships: 8, fmvp: "有",img: "images/fly.jpg" },
            { name: "梦岚", realName: "未知", age: 21, team: "佛山DRG", position: "发育路", championships: 0, fmvp: "无",img: "images/ml.jpg" },
            { name: "小胖", realName: "李达亨", age: 20, team: "重庆狼队", position: "打野", championships: 5, fmvp: "有",img: "images/xp.jpg" },
            { name: "归期", realName: "双小钧", age: "未知", team: "重庆狼队", position: "对抗路", championships: 2, img: "images/gq.jpg"},
            { name: "紫幻", realName: "黄广顺", age: "未知", team: "重庆狼队", position: "中路", championships: 1, img:"images/zh.jpg"},
            { name: "道崽", realName: "杨凯博", age: "未知", team: "重庆狼队", position: "发育路", championships: 0, fmvp: "无", img: "images/dz.jpg"},
            { name: "北诗", realName: "未知", age: "26", team: "成都AG超玩会", position: "对抗路", championships: 0, fmvp: "无", img: "images/bs.jpg"},
            { name: "梓墨", realName: "吴喆杰", age: "未知", team: "北京WB", position: "对抗路", championships: "未知", fmvp: "无", img: "images/zm.jpg"},
            { name: "暖阳", realName: "林恒", age: "未知", team: "北京WB", position: "打野", championships:"", fmvp: "有", img: "images/ny.jpg"},
            { name: "听悦", realName: "未知", age: "未知", team: "北京WB", position: "中路", championships: "", fmvp: "无", img: "images/ty.jpg"},
            { name: "小麦", realName: "彭超平", age: "未知", team: "北京WB", position: "发育路", championships: "", fmvp: "无", img: "images/xm.jpg"},
            { name: "梦溪", realName: "未知", age: "未知", team: "北京WB", position: "游走", championships: "", fmvp: "无", img: "images/mx.jpg"},
            { name: "小泽", realName: "沈宇泽", age: "未知", team: "上海EDG.M", position: "对抗路", championships: "", fmvp: "无", img: "images/xz.jpg"},
            { name: "初晨", realName: "陶传凯", age: 24, team: "上海EDG.M", position: "打野", championships: "", fmvp: "无", img: "images/cc.jpg"},
            { name: "花卷", realName: "陶传凯", age: 23, team: "上海EDG.M", position: "中路", championships: "", fmvp: "无", img: "images/hj.jpg"},
            { name: "凌云", realName: "未知", age: "未知", team: "上海EDG.M", position: "发育路", championships: "", fmvp: "无", img: "images/ly.jpg"},
            { name: "笑影", realName: "汤佳杰", age: 25, team: "上海EDG.M", position: "游走", championships: "", fmvp: "无", img: "images/xy.jpg"},
            { name: "小落", realName: "王科", age: "未知", team: "杭州LGD.NBW", position: "对抗路", championships: 0, fmvp: "无", img: "images/xl.jpg"},
            { name: "赤辰", realName: "伯晨赫", age: "未知", team: "杭州LGD.NBW", position: "打野", championships: 0, fmvp: "无", img: "images/cc1.jpg"},
            { name: "九尾", realName: "许鑫蓁", age: 22, team: "杭州LGD.NBW", position: "中路", championships: "", fmvp: "无", img: "images/jw.jpg"},
            { name: "小久", realName: "未知", age: "未知", team: "杭州LGD.NBW", position: "发育路", championships: "", fmvp: "无", img: "images/xj.jpg"},
            { name: "小崽", realName: "夏肇汛", age: "未知", team: "杭州LGD.NBW", position: "游走", championships: "", fmvp: "无", img: "images/xz1.jpg"},
            { name: "花缘", realName: "谭锦威", age: "未知", team: "佛山DRG", position: "对抗路", championships: "", fmvp: "无", img: "images/hy.jpg"},
            { name: "皖皖", realName: "未知", age: "未知", team: "佛山DRG", position: "打野", championships: "", fmvp: "无", img: "images/ww.jpg"},
            { name: "早点", realName: "沈若飞", age: "未知", team: "佛山DRG", position: "中路", championships: "", fmvp: "无", img: "images/zd.jpg"},
            { name: "四宝", realName: "未知", age: "未知", team: "佛山DRG", position: "游走", championships: "", fmvp: "无", img: "images/sb.jpg"},
            { name: "晨风", realName: "樊首谦", age: "未知", team: "佛山DRG", position: "中路", championships: "", fmvp: "无", img: "images/cf.jpg"},
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


// ========== 主題顏色功能 ==========
var themes = window.AppThemes || (window.AppThemes = [
    {
        id: 'pink',
        name: '粉色主題',
        icon: '💖',
        buttonIcon: '💗',
        preview: 'linear-gradient(135deg, #ffeef5 0%, #fff5f9 100%)',
        color: '#ff69b4',
        category: 'basic'
    },
    {
        id: 'blue',
        name: '藍色主題',
        icon: '💙',
        buttonIcon: '💙',
        preview: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)',
        color: '#4a90e2',
        category: 'basic'
    },
    {
        id: 'green',
        name: '綠色主題',
        icon: '🌿',
        buttonIcon: '🌱',
        preview: 'linear-gradient(135deg, #c6efce 0%, #e5f8e8 100%)',
        color: '#34c759',
        color: '#4caf50',
        category: 'basic'
    },
    {
        id: 'purple',
        name: '紫色主題',
        icon: '💜',
        buttonIcon: '💜',
        preview: 'linear-gradient(135deg, #f3e5f5 0%, #fce4ec 100%)',
        color: '#9c27b0',
        category: 'basic'
    },
    {
        id: 'orange',
        name: '橙色主題',
        icon: '🧡',
        buttonIcon: '🧡',
        preview: 'linear-gradient(135deg, #fff3e0 0%, #fff8f0 100%)',
        color: '#ff9800',
        category: 'basic'
    },
    {
        id: 'cyan',
        name: '青色主題',
        icon: '🩵',
        buttonIcon: '🩵',
        preview: 'linear-gradient(135deg, #e0f7fa 0%, #f0fdfe 100%)',
        color: '#00bcd4',
        category: 'basic'
    },
    {
        id: 'red',
        name: '紅色主題',
        icon: '❤️',
        buttonIcon: '❤️',
        preview: 'linear-gradient(135deg, #ffebee 0%, #fce4ec 100%)',
        color: '#e53935',
        category: 'basic'
    },
    {
        id: 'yellow',
        name: '黃色主題',
        icon: '💛',
        buttonIcon: '💛',
        preview: 'linear-gradient(135deg, #fffde7 0%, #fffef5 100%)',
        color: '#fbc02d',
        category: 'basic'
    },
    {
        id: 'indigo',
        name: '靛藍主題',
        icon: '🔵',
        buttonIcon: '🔵',
        preview: 'linear-gradient(135deg, #e8eaf6 0%, #f3f4f9 100%)',
        color: '#5c6bc0',
        category: 'basic'
    },
    {
        id: 'teal',
        name: '茶色主題',
        icon: '💚',
        buttonIcon: '💚',
        preview: 'linear-gradient(135deg, #e0f2f1 0%, #f0f9f8 100%)',
        color: '#26a69a',
        category: 'basic'
    },
    {
        id: 'forest',
        name: '森林清風',
        icon: '🌿',
        buttonIcon: '🌲',
        preview: 'linear-gradient(135deg, #03130d 0%, #103524 45%, #2f855a 100%)',
        color: '#2f855a',
        category: 'nature'
    },
    {
        id: 'snow',
        name: '飄雪主題',
        icon: '❄️',
        buttonIcon: '❄️',
        preview: 'linear-gradient(135deg, #e8f1ff 0%, #ffffff 100%)',
        color: '#93c5fd',
        category: 'nature'
    },
    {
        id: 'star',
        name: '星空主題',
        icon: '✨',
        buttonIcon: '✨',
        preview: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        color: '#8b7cf6',
        category: 'cosmic'
    },
    {
        id: 'aurora',
        name: '極光主題',
        icon: '🌈',
        buttonIcon: '🌈',
        preview: 'linear-gradient(135deg, #071a52 0%, #0b8457 50%, #7c3aed 100%)',
        color: '#00d4ff',
        category: 'cosmic'
    },
    {
        id: 'firefly',
        name: '螢火蟲主題',
        icon: '✨',
        buttonIcon: '✨',
        preview: 'linear-gradient(135deg, #0b1020 0%, #1a2b3f 100%)',
        color: '#facc15',
        category: 'cosmic'
    },
    {
        id: 'neon',
        name: '霓虹波動',
        icon: '🟣',
        buttonIcon: '🟣',
        preview: 'linear-gradient(135deg, #0b1020 0%, #1f1147 50%, #00d4ff 100%)',
        color: '#7c3aed',
        category: 'cosmic'
    },
    {
        id: 'midnight',
        name: '午夜深色',
        icon: '🌙',
        buttonIcon: '🌙',
        preview: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        color: '#6366f1',
        category: 'dark'
    },
    {
        id: 'space',
        name: '星際宇航',
        icon: '🚀',
        buttonIcon: '🛸',
        preview: 'linear-gradient(135deg, #001428 0%, #002850 60%, #8a2be2 100%)',
        color: '#00d4ff',
        category: 'cosmic'
    },
    {
        id: 'totoro',
        name: '龍貓主題',
        icon: '🌼',
        buttonIcon: '🌼',
        preview: 'url("https://i.pinimg.com/736x/f6/e9/10/f6e910dc17992265ad9833055ff153ac.jpg") center/cover',
        color: '#4682B4',
        category: 'anime',
        backgroundImage: 'https://i.pinimg.com/736x/f6/e9/10/f6e910dc17992265ad9833055ff153ac.jpg'
    },
    {
        id: 'noface',
        name: '無臉男主題',
        icon: '🎭',
        buttonIcon: '🎭',
        preview: 'url("https://i.pinimg.com/1200x/fe/b3/f9/feb3f9990f903e1b7b0f4a2066a97722.jpg") center/cover',
        color: '#f6c343',
        category: 'anime',
        backgroundImage: 'https://i.pinimg.com/1200x/fe/b3/f9/feb3f9990f903e1b7b0f4a2066a97722.jpg'
    },
    {
        id: 'demonslayer',
        name: '鬼滅之刃主題',
        icon: '🗡️',
        buttonIcon: '🗡️',
        preview: 'url("https://i.pinimg.com/736x/73/3c/b0/733cb0696372d66f16702dd385a5aa5b.jpg") center/cover',
        color: '#00c2d1',
        category: 'anime',
        backgroundImage: 'https://i.pinimg.com/736x/73/3c/b0/733cb0696372d66f16702dd385a5aa5b.jpg'
    },
    {
        id: 'money',
        name: '金錢滿滿',
        icon: '💸',
        buttonIcon: '💸',
        preview: 'url("https://i.pinimg.com/736x/cc/56/8d/cc568d4109c2c92d507f597ba0ece7be.jpg") center/cover',
        color: '#16f49a',
        category: 'wealth',
        backgroundImage: 'https://i.pinimg.com/736x/cc/56/8d/cc568d4109c2c92d507f597ba0ece7be.jpg'
    },
    {
        id: 'caitu',
        name: '財兔滿滿',
        icon: '🐰',
        buttonIcon: '🐰',
        preview: 'url("https://i.pinimg.com/736x/85/9c/7c/859c7c50479b84c65089909c4acec1f3.jpg") center/cover',
        color: '#FFD700',
        category: 'wealth',
        backgroundImage: 'https://i.pinimg.com/736x/85/9c/7c/859c7c50479b84c65089909c4acec1f3.jpg'
    },
    {
        id: 'goldenTree',
        name: '金樹計畫',
        icon: '🌳',
        buttonIcon: '🌳',
        preview: 'url("https://i.pinimg.com/736x/28/a0/be/28a0be222d619be4c2944dbd309c4153.jpg") center/cover',
        color: '#8B4513',
        category: 'wealth',
        backgroundImage: 'https://i.pinimg.com/736x/28/a0/be/28a0be222d619be4c2944dbd309c4153.jpg'
    },
    {
        id: 'chaonengli',
        name: '鈔能力',
        icon: '💰',
        buttonIcon: '💰',
        preview: 'url("https://i.pinimg.com/736x/cc/56/8d/cc568d4109c2c92d507f597ba0ece7be.jpg") center/cover',
        color: '#D4AF37',
        category: 'wealth',
        backgroundImage: 'https://i.pinimg.com/736x/cc/56/8d/cc568d4109c2c92d507f597ba0ece7be.jpg'
    },
    {
        id: 'fruit',
        name: '水果清爽',
        icon: '🍓',
        buttonIcon: '🍋',
        preview: 'url("https://i.pinimg.com/736x/3a/57/69/3a576934dcdf3bb2ba06b3d2964ab296.jpg") center/cover',
        color: '#40E0D0',
        category: 'cute',
        backgroundImage: 'https://i.pinimg.com/736x/3a/57/69/3a576934dcdf3bb2ba06b3d2964ab296.jpg'
    },
    {
        id: 'meow',
        name: '喵喵喵',
        icon: '🐱',
        buttonIcon: '🐈',
        preview: 'url("https://i.pinimg.com/736x/9b/c1/cd/9bc1cd5e89c11cd36a290ef3cf707919.jpg") center/cover',
        color: '#87CEEB',
        category: 'cute',
        backgroundImage: 'https://i.pinimg.com/736x/9b/c1/cd/9bc1cd5e89c11cd36a290ef3cf707919.jpg'
    },
    {
        id: 'cute',
        name: '可愛圖片主題',
        icon: '🐾',
        buttonIcon: '🐾',
        preview: 'url("image/BMG.jpg") center/cover',
        color: '#4dd0e1',
        category: 'cute',
        backgroundImage: 'image/BMG.jpg'
    },
    {
        id: 'bluerose',
        name: '藍玫瑰騎士',
        icon: '🌹',
        buttonIcon: '🗡️',
        preview: 'url("https://i.pinimg.com/1200x/d5/a1/c1/d5a1c149ab3b2a049576504e83fd21f7.jpg") center/cover',
        color: '#007bff',
        category: 'fantasy',
        backgroundImage: 'https://i.pinimg.com/1200x/d5/a1/c1/d5a1c149ab3b2a049576504e83fd21f7.jpg'
    },
    {
        id: 'emeraldPrince',
        name: '翡翠王子',
        icon: '👑',
        buttonIcon: '🗡️',
        preview: 'url("https://i.pinimg.com/736x/55/40/2f/55402fb6bcf0c65c832636ad5504499f.jpg") center/cover',
        color: '#2E8B57',
        category: 'fantasy',
        backgroundImage: 'https://i.pinimg.com/736x/55/40/2f/55402fb6bcf0c65c832636ad5504499f.jpg'
    },
    {
        id: 'cuteCats',
        name: '可愛貓咪',
        icon: '🐱',
        buttonIcon: '🐈',
        preview: 'url("https://i.pinimg.com/736x/fe/2a/cf/fe2acfb6eedcf65941dad52ad03e3490.jpg") center/cover',
        color: '#FFB6C1',
        category: 'cute',
        backgroundImage: 'https://i.pinimg.com/736x/fe/2a/cf/fe2acfb6eedcf65941dad52ad03e3490.jpg',
        investmentCardImage: 'https://i.pinimg.com/736x/bf/bb/d8/bfbbd8069018715418b04a38e199a34d.jpg',
        accountingCardImage: 'https://i.pinimg.com/736x/a7/bb/f9/a7bbf99031a6d722e01446217985af5f.jpg',
        walletBudgetCardImage: 'https://i.pinimg.com/1200x/95/64/99/956499812b93c3c5bf8226051c7e627f.jpg'
    },
    {
        id: 'dreamy',
        name: '夢幻境域',
        icon: '🌈',
        buttonIcon: '🎨',
        preview: 'url("https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg") center/cover',
        color: '#87CEEB',
        category: 'cute',
        backgroundImage: 'https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg',
        investmentCardImage: 'https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg',
        accountingCardImage: 'https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg',
        walletBudgetCardImage: 'https://i.pinimg.com/1200x/95/64/99/956499812b93c3c5bf8226051c7e627f.jpg',
        monthlyPlanningCardImage: 'https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg',
        investmentSettingsCardImage: 'https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg',
        holdingCardImage: 'https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg',
        buyingCardImage: 'https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg',
        sellingCardImage: 'https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg',
        dividendCardImage: 'https://i.pinimg.com/736x/21/4d/cc/214dccff6dac6b30bebd621afc60669d.jpg'
    },
    {
        id: 'chick',
        name: '萌雞樂園',
        icon: '🐥',
        buttonIcon: '🐣',
        preview: 'url("https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg") center/cover',
        color: '#98FB98',
        category: 'cute',
        backgroundImage: 'https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg',
        investmentCardImage: 'https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg',
        accountingCardImage: 'https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg',
        walletBudgetCardImage: 'https://i.pinimg.com/1200x/95/64/99/956499812b93c3c5bf8226051c7e627f.jpg',
        monthlyPlanningCardImage: 'https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg',
        investmentSettingsCardImage: 'https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg',
        holdingCardImage: 'https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg',
        buyingCardImage: 'https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg',
        sellingCardImage: 'https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg',
        dividendCardImage: 'https://i.pinimg.com/736x/e0/43/7a/e0437a16e63e214acd07430c25dfc251.jpg'
    },
    {
        id: 'dreamyfish',
        name: '夢幻魚語',
        icon: '🐠',
        buttonIcon: '🐟',
        preview: 'url("https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg") center/cover',
        color: '#87CEEB',
        category: 'cute',
        backgroundImage: 'https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg',
        investmentCardImage: 'https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg',
        accountingCardImage: 'https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg',
        walletBudgetCardImage: 'https://i.pinimg.com/1200x/95/64/99/956499812b93c3c5bf8226051c7e627f.jpg',
        monthlyPlanningCardImage: 'https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg',
        investmentSettingsCardImage: 'https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg',
        holdingCardImage: 'https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg',
        buyingCardImage: 'https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg',
        sellingCardImage: 'https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg',
        dividendCardImage: 'https://i.pinimg.com/736x/a3/82/37/a382370de3785e43c0bd8db75fa13e67.jpg'
    },
    {
        id: 'emerald',
        name: '翠綠之夢',
        icon: '💎',
        buttonIcon: '🌿',
        preview: 'url("https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg") center/cover',
        color: '#2E8B57',
        category: 'fantasy',
        backgroundImage: 'https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg',
        investmentCardImage: 'https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg',
        accountingCardImage: 'https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg',
        walletBudgetCardImage: 'https://i.pinimg.com/1200x/95/64/99/956499812b93c3c5bf8226051c7e627f.jpg',
        monthlyPlanningCardImage: 'https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg',
        investmentSettingsCardImage: 'https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg',
        holdingCardImage: 'https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg',
        buyingCardImage: 'https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg',
        sellingCardImage: 'https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg',
        dividendCardImage: 'https://i.pinimg.com/736x/54/58/17/5458177129997fbd8f56b713e39d2d0f.jpg'
    },
    {
        id: 'graffiti',
        name: '塗鴉風格',
        icon: '🎨',
        buttonIcon: '🎭',
        preview: 'url("https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg") center/cover',
        color: '#1E90FF',
        category: 'fantasy',
        backgroundImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg',
        investmentCardImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg',
        accountingCardImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg',
        walletBudgetCardImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg',
        monthlyPlanningCardImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg',
        investmentSettingsCardImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg',
        holdingCardImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg',
        buyingCardImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg',
        sellingCardImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg',
        dividendCardImage: 'https://i.pinimg.com/1200x/fa/a1/0c/faa10cd0b7816efb3ac74d940bc4bda4.jpg'
    },
    {
        id: 'shinobu',
        name: '蝴蝶忍',
        icon: '🦋',
        buttonIcon: '🗡️',
        preview: 'url("https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg") center/cover',
        color: '#9B59B6',
        category: 'anime',
        backgroundImage: 'https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg',
        investmentCardImage: 'https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg',
        accountingCardImage: 'https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg',
        walletBudgetCardImage: 'https://i.pinimg.com/736x/8b/18/2b/8b182b4b3bdc6420ae9bb42b08025854.jpg',
        monthlyPlanningCardImage: 'https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg',
        investmentSettingsCardImage: 'https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg',
        holdingCardImage: 'https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg',
        buyingCardImage: 'https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg',
        sellingCardImage: 'https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg',
        dividendCardImage: 'https://i.pinimg.com/736x/26/c9/c0/26c9c0297b0cad3dfa8d6d5c41ccfc18.jpg'
    },
    {
        id: 'dreamyBlue',
        name: '夢幻藍夜',
        icon: '🌙',
        buttonIcon: '🐰',
        preview: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e8ba3 100%)',
        color: '#1e3c72',
        category: 'fantasy',
        backgroundImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg',
        investmentCardImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg',
        accountingCardImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg',
        walletBudgetCardImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg',
        monthlyPlanningCardImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg',
        investmentSettingsCardImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg',
        holdingCardImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg',
        buyingCardImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg',
        sellingCardImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg',
        dividendCardImage: 'https://i.pinimg.com/736x/6f/af/e2/6fafe2a9d450965373f9829a386805d1.jpg'
    }
]);

// 主題分類定義
const themeCategories = {
    basic: {
        name: '經典色彩',
        icon: '🎨',
        description: '純色經典主題'
    },
    nature: {
        name: '自然風光',
        icon: '🌿',
        description: '森林、雪景等自然主題'
    },
    cosmic: {
        name: '宇宙星空',
        icon: '🌌',
        description: '星空、極光等宇宙主題'
    },
    dark: {
        name: '深色主題',
        icon: '🌙',
        description: '深色護眼主題'
    },
    anime: {
        name: '動漫風格',
        icon: '🎌',
        description: '吉卜力、鬼滅等動漫主題'
    },
    wealth: {
        name: '財富金錢',
        icon: '💰',
        description: '金錢、財富相關主題'
    },
    cute: {
        name: '可愛風格',
        icon: '🐾',
        description: '可愛、萌系主題'
    },
    fantasy: {
        name: '奇幻風格',
        icon: '🗡️',
        description: '騎士、奇幻主題'
    }
};

const themeAnimations = {};

const themeVideoController = (() => {
    let moneyVideoEl = null;
    let spaceVideoEl = null;
    let containerEl = null;

    const ensureElements = () => {
        if (!moneyVideoEl) {
            moneyVideoEl = document.getElementById('moneyThemeVideo');
        }
        if (!spaceVideoEl) {
            spaceVideoEl = document.getElementById('spaceThemeVideo');
        }
        if (!containerEl) {
            containerEl = document.querySelector('.theme-video-background');
        }
        return moneyVideoEl && spaceVideoEl && containerEl;
    };

    const setActive = (themeId) => {
        if (!ensureElements()) return;
        moneyVideoEl.pause();
        spaceVideoEl.pause();

        const isActive = themeId === 'money' || themeId === 'space';
        containerEl.classList.toggle('active', isActive);

        if (isActive) {
            let activeVideo = null;
            if (themeId === 'money') {
                activeVideo = moneyVideoEl;
                moneyVideoEl.style.display = 'block';
                spaceVideoEl.style.display = 'none';
            } else if (themeId === 'space') {
                activeVideo = spaceVideoEl;
                spaceVideoEl.style.display = 'block';
                moneyVideoEl.style.display = 'none';
            }

            if (activeVideo) {
                activeVideo.currentTime = 0;
                const playPromise = activeVideo.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => {});
                }
            }
        } else {
            moneyVideoEl.style.display = 'none';
            spaceVideoEl.style.display = 'none';
        }
    };

    return { setActive };
})();

function getCurrentTheme() {
    // 優先使用 selectedTheme，如果沒有則使用舊的 theme 鍵值以保持向後兼容
    return localStorage.getItem('selectedTheme') || localStorage.getItem('theme') || 'blue';
}

function applyTheme(themeId) {
    const root = document.documentElement;
    root.setAttribute('data-theme', themeId);
    localStorage.setItem('selectedTheme', themeId);
    localStorage.setItem('theme', themeId); // 保持向後兼容
    root.style.removeProperty('--bg-white');
    
    // 自動應用主題背景圖片
    const theme = themes.find(t => t.id === themeId);
    if (theme && theme.backgroundImage) {
        applyThemeBackgroundImage(theme.backgroundImage);
    } else {
        // 如果主題沒有背景圖片，清除背景
        document.body.style.backgroundImage = '';
        document.body.style.backgroundSize = '';
        document.body.style.backgroundPosition = '';
        document.body.style.backgroundRepeat = '';
    }
    
    updateThemeButtons(themeId);
    themeVideoController.setActive(themeId);

    const pageChart = document.getElementById('pageChart');
    if (pageChart && pageChart.style.display !== 'none') {
        if (typeof updateAllCharts === 'function') {
            updateAllCharts();
        }
    }
}

function applyThemeBackgroundImage(imageUrl) {
    if (!imageUrl) return;
    
    // 檢查圖片是否可以載入
    const img = new Image();
    img.onload = function() {
        // 圖片載入成功，應用背景
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
        
        // 可選：添加載入成功的視覺反饋
        console.log(`✅ 主題背景圖片載入成功: ${imageUrl}`);
    };
    
    img.onerror = function() {
        // 圖片載入失敗，清除背景
        document.body.style.backgroundImage = '';
        document.body.style.backgroundSize = '';
        document.body.style.backgroundPosition = '';
        document.body.style.backgroundRepeat = '';
        
        console.warn(`⚠️ 主題背景圖片載入失敗: ${imageUrl}`);
    };
    
    // 開始載入圖片
    img.src = imageUrl;
}

function updateThemeButtons(themeId) {
    const buttonIcons = {
        pink: {
            fab: '✏️',
            navLedger: '📖',
            navWallet: '💰',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '⚙️'
        },
        blue: {
            fab: '✍️',
            navLedger: '📘',
            navWallet: '💵',
            navInvestment: '📉',
            navChart: '📋',
            navSettings: '🔧'
        },
        green: {
            fab: '📝',
            navLedger: '📗',
            navWallet: '💴',
            navInvestment: '📊',
            navChart: '📈',
            navSettings: '⚙️'
        },
        purple: {
            fab: '🖊️',
            navLedger: '📕',
            navWallet: '💶',
            navInvestment: '💹',
            navChart: '📉',
            navSettings: '🎛️'
        },
        orange: {
            fab: '✎',
            navLedger: '📓',
            navWallet: '💷',
            navInvestment: '📌',
            navChart: '📑',
            navSettings: '🔩'
        },
        cyan: {
            fab: '✐',
            navLedger: '📙',
            navWallet: '💸',
            navInvestment: '📍',
            navChart: '📄',
            navSettings: '🛠️'
        },
        star: {
            fab: '⭐',
            navLedger: '🌌',
            navWallet: '💫',
            navInvestment: '🌟',
            navChart: '🔭',
            navSettings: '🌠'
        },
        red: {
            fab: '❤️',
            navLedger: '📕',
            navWallet: '💴',
            navInvestment: '📊',
            navChart: '📈',
            navSettings: '⚙️'
        },
        yellow: {
            fab: '💛',
            navLedger: '📒',
            navWallet: '💰',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '🔧'
        },
        indigo: {
            fab: '💙',
            navLedger: '📘',
            navWallet: '💵',
            navInvestment: '📉',
            navChart: '📋',
            navSettings: '🔧'
        },
        teal: {
            fab: '💚',
            navLedger: '📗',
            navWallet: '💶',
            navInvestment: '💹',
            navChart: '📉',
            navSettings: '🎛️'
        },
                aurora: {
            fab: '🌈',
            navLedger: '🌈',
            navWallet: '💎',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '⚙️'
        },
                noface: {
            fab: '🪙',
            navLedger: '📜',
            navWallet: '💰',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '⚙️'
        },
        demonslayer: {
            fab: '🗡️',
            navLedger: '📓',
            navWallet: '💠',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '⚙️'
        },
        totoro: {
            fab: '🌱',
            navLedger: '📗',
            navWallet: '💰',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '⚙️'
        },
        firefly: {
            fab: '✨',
            navLedger: '✨',
            navWallet: '💫',
            navInvestment: '🌟',
            navChart: '🔭',
            navSettings: '🌠'
        },
        snow: {
            fab: '❄️',
            navLedger: '❄️',
            navWallet: '💎',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '⚙️'
        },
        cute: {
            fab: '🐾',
            navLedger: '🐾',
            navWallet: '💰',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '⚙️'
        },
        neon: {
            fab: '🟣',
            navLedger: '🟣',
            navWallet: '💎',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '⚙️'
        },
        money: {
            fab: '💸',
            navLedger: '📒',
            navWallet: '💰',
            navInvestment: '💹',
            navChart: '📊',
            navSettings: '⚙️'
        },
        space: {
            fab: '🚀',
            navLedger: '🛸',
            navWallet: '🌌',
            navInvestment: '🛰️',
            navChart: '🔭',
            navSettings: '⚙️'
        },
        fruit: {
            fab: '🍓',
            navLedger: '🍉',
            navWallet: '🍋',
            navInvestment: '🥝',
            navChart: '🍊',
            navSettings: '🍇'
        },
        meow: {
            fab: '🐱',
            navLedger: '🐈',
            navWallet: '🐾',
            navInvestment: '🐭',
            navChart: '🐹',
            navSettings: '🐰'
        },
        bluerose: {
            fab: '🗡️',
            navLedger: '📜',
            navWallet: '💎',
            navInvestment: '🛡️',
            navChart: '🏰',
            navSettings: '⚔️'
        },
        emeraldPrince: {
            fab: '👑',
            navLedger: '📜',
            navWallet: '💎',
            navInvestment: '🗡️',
            navChart: '🏰',
            navSettings: '⚔️'
        },
        goldenElegance: {
            fab: '🦋',
            navLedger: '📜',
            navWallet: '💎',
            navInvestment: '🗡️',
            navChart: '🏰',
            navSettings: '⚔️'
        },
        cuteCats: {
            fab: '🐱',
            navLedger: '🐈',
            navWallet: '🐾',
            navInvestment: '🐭',
            navChart: '🐹',
            navSettings: '🐰'
        },
        dreamy: {
            fab: '🌈',
            navLedger: '🎨',
            navWallet: '💖',
            navInvestment: '🌸',
            navChart: '🦋',
            navSettings: '✨'
        },
        chick: {
            fab: '🐥',
            navLedger: '🐣',
            navWallet: '🐤',
            navInvestment: '🐥',
            navChart: '🐣',
            navSettings: '🐤'
        },
        dreamyfish: {
            fab: '🐠',
            navLedger: '🐟',
            navWallet: '🐡',
            navInvestment: '🦈',
            navChart: '🐙',
            navSettings: '🦑'
        },
        emerald: {
            fab: '💎',
            navLedger: '🌿',
            navWallet: '🍃',
            navInvestment: '🌱',
            navChart: '🍀',
            navSettings: '🌳'
        },
        graffiti: {
            fab: '🎨',
            navLedger: '🎭',
            navWallet: '💰',
            navInvestment: '📈',
            navChart: '📊',
            navSettings: '⚙️'
        },
        shinobu: {
            fab: '🦋',
            navLedger: '🗡️',
            navWallet: '💜',
            navInvestment: '🌸',
            navChart: '🦋',
            navSettings: '⚡'
        },
        dreamyBlue: {
            fab: '🌙',
            navLedger: '🐰',
            navWallet: '🌟',
            navInvestment: '⭐',
            navChart: '🌌',
            navSettings: '✨'
        }
    };

    const iconAssetsCute = {
        nav: {
            ledger: 'image/1.png',
            wallet: 'image/2.png',
            investment: 'image/3.png',
            chart: 'image/4.png',
            settings: 'image/5.png'
        },
        fab: 'image/6.png'
    };

    const setButtonImgIcon = (btn, src) => {
        btn.innerHTML = `<img src="${src}" alt="icon" class="ui-icon-img" style="width: 28px; height: 28px; object-fit: contain;" />`;
    };

    const icons = buttonIcons[themeId] || buttonIcons.pink;
    const iconAssets = themeId === 'cute' ? iconAssetsCute : null;

    const fabBtn = document.getElementById('fabBtn');
    if (fabBtn) {
        if (themeId === 'cute') {
            setButtonImgIcon(fabBtn, iconAssetsCute.fab);
        } else {
            fabBtn.textContent = icons.fab;
        }
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const page = item.dataset.page;
        const navIcon = item.querySelector('.nav-icon');
        if (navIcon) {
            if (navIcon.tagName === 'IMG') {
                const src = iconAssets && iconAssets.nav && iconAssets.nav[page];
                if (src) {
                    navIcon.src = src;
                }
            } else {
                switch(page) {
                    case 'ledger':
                        navIcon.textContent = icons.navLedger;
                        break;
                    case 'wallet':
                        navIcon.textContent = icons.navWallet;
                        break;
                    case 'investment':
                        navIcon.textContent = icons.navInvestment;
                        break;
                    case 'chart':
                        navIcon.textContent = icons.navChart;
                        break;
                    case 'settings':
                        navIcon.textContent = icons.navSettings;
                        break;
                }
            }
        }
    });

    restoreButtonIcons();
}

const originalButtonIcons = {
    accountBtn: '💳',
    emojiBtn: '😊',
    memberBtn: '👤',
    imageBtn: '📷',
    checkBtn: '✓',
    searchBtn: '🔍',
    addCategoryBtn: '➕',
    quickNotes: {
        '早餐': '🍳',
        '午餐': '🍱',
        '晚餐': '🍽️',
        '交通': '🚗',
        '購物': '🛒',
        '娛樂': '🎮'
    }
};

function restoreButtonIcons() {
    document.querySelectorAll('[data-original-icon]').forEach(btn => {
        const originalIcon = btn.dataset.originalIcon;
        if (originalIcon) {
            if (btn.classList.contains('quick-note-btn')) {
                btn.innerHTML = originalIcon;
            } else {
                btn.textContent = originalIcon;
            }
            btn.removeAttribute('data-original-icon');
        }
    });

    const quickNoteButtons = document.querySelectorAll('.quick-note-btn');
    quickNoteButtons.forEach(btn => {
        const note = btn.dataset.note;
        if (note && originalButtonIcons.quickNotes[note]) {
            btn.innerHTML = `${originalButtonIcons.quickNotes[note]} ${note}`;
        }
    });

    const accountBtn = document.querySelector('.account-btn');
    if (accountBtn && !accountBtn.dataset.originalIcon) {
        accountBtn.textContent = originalButtonIcons.accountBtn;
    }

    const emojiBtn = document.querySelector('.emoji-btn');
    if (emojiBtn && !emojiBtn.dataset.originalIcon) {
        emojiBtn.textContent = originalButtonIcons.emojiBtn;
    }

    const memberBtn = document.getElementById('memberBtn');
    if (memberBtn && !memberBtn.dataset.originalIcon) {
        memberBtn.textContent = originalButtonIcons.memberBtn;
    }

    const imageBtn = document.getElementById('imageBtn');
    if (imageBtn && !imageBtn.dataset.originalIcon) {
        imageBtn.textContent = originalButtonIcons.imageBtn;
    }

    const checkBtn = document.getElementById('saveBtn');
    if (checkBtn && !checkBtn.dataset.originalIcon) {
        checkBtn.textContent = originalButtonIcons.checkBtn;
    }

    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn && !searchBtn.dataset.originalIcon) {
        searchBtn.textContent = originalButtonIcons.searchBtn;
    }

    const addCategoryBtn = document.getElementById('addCategoryBtn');
    if (addCategoryBtn && !addCategoryBtn.dataset.originalIcon) {
        addCategoryBtn.textContent = originalButtonIcons.addCategoryBtn;
    }

    const equalBtnRestore = document.querySelector('.key-btn.equal');
    if (equalBtnRestore && equalBtnRestore.dataset.key === '=' && !equalBtnRestore.dataset.originalIcon) {
        equalBtnRestore.textContent = '=';
    }
}

function getCustomTheme() {
    return JSON.parse(localStorage.getItem('customTheme') || '{}');
}

function saveCustomTheme(theme) {
    localStorage.setItem('customTheme', JSON.stringify(theme));
}

function applyCustomTheme() {
    const customTheme = getCustomTheme();
    const root = document.documentElement;

    if (!customTheme || Object.keys(customTheme).length === 0) {
        root.style.removeProperty('--color-primary');
        root.style.removeProperty('--color-primary-light');
        root.style.removeProperty('--color-primary-lighter');
        root.style.removeProperty('--color-primary-dark');
        root.style.removeProperty('--border-primary');
        root.style.removeProperty('--bg-white');
        root.style.removeProperty('--bg-primary');
        document.body.style.background = '';
        document.body.style.backgroundImage = '';
        document.body.style.backgroundSize = '';
        document.body.style.backgroundPosition = '';
        document.body.style.backgroundRepeat = '';
        return;
    }

    if (customTheme.primaryColor) {
        root.style.setProperty('--color-primary', customTheme.primaryColor);
        root.style.setProperty('--border-primary', customTheme.primaryColor);

        const hex = customTheme.primaryColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        const lightR = Math.min(255, Math.floor(r + (255 - r) * 0.3));
        const lightG = Math.min(255, Math.floor(g + (255 - g) * 0.3));
        const lightB = Math.min(255, Math.floor(b + (255 - b) * 0.3));
        root.style.setProperty('--color-primary-light', `rgb(${lightR}, ${lightG}, ${lightB})`);

        const lighterR = Math.min(255, Math.floor(r + (255 - r) * 0.5));
        const lighterG = Math.min(255, Math.floor(g + (255 - g) * 0.5));
        const lighterB = Math.min(255, Math.floor(b + (255 - b) * 0.5));
        root.style.setProperty('--color-primary-lighter', `rgb(${lighterR}, ${lighterG}, ${lighterB})`);

        const darkR = Math.max(0, Math.floor(r * 0.8));
        const darkG = Math.max(0, Math.floor(g * 0.8));
        const darkB = Math.max(0, Math.floor(b * 0.8));
        root.style.setProperty('--color-primary-dark', `rgb(${darkR}, ${darkG}, ${darkB})`);
    }

    if (customTheme.buttonColor) {
        root.style.setProperty('--color-primary', customTheme.buttonColor);
    }

    const effectivePrimaryColor = customTheme.buttonColor || customTheme.primaryColor;
    if (effectivePrimaryColor) {
        const parseRgb = (color) => {
            const c = String(color || '').trim();
            if (/^#?[0-9a-fA-F]{6}$/.test(c)) {
                const hex = c.replace('#', '');
                return {
                    r: parseInt(hex.slice(0, 2), 16),
                    g: parseInt(hex.slice(2, 4), 16),
                    b: parseInt(hex.slice(4, 6), 16)
                };
            }
            const m = c.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);
            if (m) {
                return {
                    r: Math.min(255, Math.max(0, parseInt(m[1], 10))),
                    g: Math.min(255, Math.max(0, parseInt(m[2], 10))),
                    b: Math.min(255, Math.max(0, parseInt(m[3], 10)))
                };
            }
            return null;
        };

        const base = parseRgb(effectivePrimaryColor);
        if (base) {
            const { r, g, b } = base;

            root.style.setProperty('--color-primary', effectivePrimaryColor);
            root.style.setProperty('--border-primary', effectivePrimaryColor);

            const lightR = Math.min(255, Math.floor(r + (255 - r) * 0.3));
            const lightG = Math.min(255, Math.floor(g + (255 - g) * 0.3));
            const lightB = Math.min(255, Math.floor(b + (255 - b) * 0.3));
            root.style.setProperty('--color-primary-light', `rgb(${lightR}, ${lightG}, ${lightB})`);

            const lighterR = Math.min(255, Math.floor(r + (255 - r) * 0.5));
            const lighterG = Math.min(255, Math.floor(g + (255 - g) * 0.5));
            const lighterB = Math.min(255, Math.floor(b + (255 - b) * 0.5));
            root.style.setProperty('--color-primary-lighter', `rgb(${lighterR}, ${lighterG}, ${lighterB})`);

            const darkR = Math.max(0, Math.floor(r * 0.8));
            const darkG = Math.max(0, Math.floor(g * 0.8));
            const darkB = Math.max(0, Math.floor(b * 0.8));
            root.style.setProperty('--color-primary-dark', `rgb(${darkR}, ${darkG}, ${darkB})`);

            const setAlpha = (suffix, alpha) => {
                root.style.setProperty(`--color-primary-rgba-${suffix}`, `rgba(${r}, ${g}, ${b}, ${alpha})`);
            };
            setAlpha('08', '0.08');
            setAlpha('10', '0.1');
            setAlpha('12', '0.12');
            setAlpha('15', '0.15');
            setAlpha('18', '0.18');
            setAlpha('20', '0.2');
            setAlpha('25', '0.25');
            setAlpha('30', '0.3');

            const setLightAlpha = (suffix, alpha) => {
                root.style.setProperty(`--color-primary-light-rgba-${suffix}`, `rgba(${lightR}, ${lightG}, ${lightB}, ${alpha})`);
            };
            setLightAlpha('08', '0.08');
            setLightAlpha('10', '0.1');
            setLightAlpha('15', '0.15');
            setLightAlpha('20', '0.2');
            setLightAlpha('25', '0.25');
        }
    }

    if (customTheme.boxColor) {
        root.style.setProperty('--bg-white', customTheme.boxColor);
    }

    if (customTheme.backgroundColor) {
        root.style.setProperty('--bg-primary', customTheme.backgroundColor);
        if (!customTheme.backgroundColor.includes('gradient')) {
            document.body.style.background = customTheme.backgroundColor;
        } else {
            document.body.style.background = customTheme.backgroundColor;
        }
    }

    if (customTheme.backgroundImage) {
        document.body.style.backgroundImage = `url(${customTheme.backgroundImage})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
    } else {
        document.body.style.backgroundImage = '';
        document.body.style.backgroundSize = '';
        document.body.style.backgroundPosition = '';
        document.body.style.backgroundRepeat = '';
    }
}

function showThemeSelector() {
    const modal = document.createElement('div');
    modal.className = 'theme-modal-v2';
    modal.innerHTML = `
        <div class="theme-modal-overlay"></div>
        <div class="theme-modal-container">
            <div class="theme-modal-header-v2">
                <h2 class="theme-modal-title-v2">🎨 選擇主題</h2>
                <button class="theme-modal-close-v2">✕</button>
            </div>
            <div class="theme-modal-content-v2">
                <div class="theme-view-controls">
                    <div class="theme-view-toggle">
                        <button class="view-btn active" data-view="all">全部主題</button>
                        <button class="view-btn" data-view="category">分類檢視</button>
                    </div>
                </div>
                <div class="theme-cards-container" id="themeCardsContainer"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 渲染主題卡片
    renderThemeCards(modal, 'all');
    
    // 添加事件監聽器
    setupModalEvents(modal);
    setupViewToggle(modal);
    
    // 顯示動畫
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function setupViewToggle(modal) {
    const viewButtons = modal.querySelectorAll('.view-btn');
    const container = modal.querySelector('#themeCardsContainer');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按鈕狀態
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 重新渲染卡片
            const view = btn.dataset.view;
            renderThemeCards(modal, view);
        });
    });
}

function renderThemeCards(modal, view = 'all') {
    const container = modal.querySelector('#themeCardsContainer');
    const currentTheme = getCurrentTheme();
    
    let html = '';
    
    if (view === 'all') {
        // 全部主題檢視 - 直式卡片
        container.className = 'theme-cards-container theme-cards-vertical';
        themes.forEach(theme => {
            const isActive = theme.id === currentTheme;
            const hasBackgroundImage = theme.backgroundImage;
            
            html += `
                <div class="theme-card-vertical ${isActive ? 'active' : ''}" data-theme="${theme.id}">
                    <div class="theme-card-vertical-preview ${hasBackgroundImage ? 'has-background' : ''}" style="background: ${hasBackgroundImage ? `url('${theme.backgroundImage}') center/cover` : theme.preview}">
                        <div class="theme-card-vertical-icon">${theme.icon}</div>
                        ${isActive ? '<div class="theme-card-vertical-badge">✓</div>' : ''}
                        ${hasBackgroundImage ? '<div class="theme-card-vertical-image-indicator">🖼️</div>' : ''}
                    </div>
                    <div class="theme-card-vertical-info">
                        <div class="theme-card-vertical-name">${theme.name}</div>
                        <div class="theme-card-vertical-category">${themeCategories[theme.category]?.icon} ${themeCategories[theme.category]?.name || '其他'}</div>
                        <button class="theme-card-vertical-apply-btn" data-theme="${theme.id}">套用</button>
                    </div>
                </div>
            `;
        });
    } else {
        // 分類檢視 - 按分類組織
        container.className = 'theme-cards-container theme-cards-category';
        
        // 按分類分組
        const groupedThemes = {};
        themes.forEach(theme => {
            const category = theme.category || 'basic';
            if (!groupedThemes[category]) {
                groupedThemes[category] = [];
            }
            groupedThemes[category].push(theme);
        });
        
        Object.entries(groupedThemes).forEach(([categoryId, categoryThemes]) => {
            const categoryInfo = themeCategories[categoryId] || { name: '其他', icon: '📁', description: '' };
            
            html += `
                <div class="theme-category-section-v2">
                    <div class="theme-category-header-v2">
                        <div class="theme-category-icon-v2">${categoryInfo.icon}</div>
                        <div class="theme-category-info-v2">
                            <h3 class="theme-category-name-v2">${categoryInfo.name}</h3>
                            <p class="theme-category-description-v2">${categoryInfo.description || '精選主題'}</p>
                        </div>
                        <div class="theme-category-count-v2">${categoryThemes.length} 個主題</div>
                    </div>
                    <div class="theme-category-cards-v2">
            `;
            
            categoryThemes.forEach(theme => {
                const isActive = theme.id === currentTheme;
                const hasBackgroundImage = theme.backgroundImage;
                
                html += `
                    <div class="theme-card-vertical ${isActive ? 'active' : ''}" data-theme="${theme.id}">
                        <div class="theme-card-vertical-preview ${hasBackgroundImage ? 'has-background' : ''}" style="background: ${hasBackgroundImage ? `url('${theme.backgroundImage}') center/cover` : theme.preview}">
                            <div class="theme-card-vertical-icon">${theme.icon}</div>
                            ${isActive ? '<div class="theme-card-vertical-badge">✓</div>' : ''}
                            ${hasBackgroundImage ? '<div class="theme-card-vertical-image-indicator">🖼️</div>' : ''}
                        </div>
                        <div class="theme-card-vertical-info">
                            <div class="theme-card-vertical-name">${theme.name}</div>
                            <button class="theme-card-vertical-apply-btn" data-theme="${theme.id}">套用</button>
                        </div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
    }
    
    container.innerHTML = html;
    
    // 添加卡片點擊事件
    container.querySelectorAll('.theme-card-vertical').forEach(card => {
        card.addEventListener('click', (e) => {
            // 如果點擊的是套用按鈕，直接套用
            if (e.target.classList.contains('theme-card-vertical-apply-btn')) {
                e.stopPropagation();
                const themeId = e.target.dataset.theme;
                applyTheme(themeId);
                closeModal(modal);
                return;
            }
            
            // 點擊卡片其他地方，直接套用主題
            const themeId = card.dataset.theme;
            applyTheme(themeId);
            
            // 更新活躍狀態
            container.querySelectorAll('.theme-card-vertical').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // 關閉模態框
            setTimeout(() => {
                closeModal(modal);
            }, 300);
        });
    });
    
    // 添加套用按鈕事件
    container.querySelectorAll('.theme-card-vertical-apply-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const themeId = btn.dataset.theme;
            applyTheme(themeId);
            closeModal(modal);
        });
    });
}

function setupModalEvents(modal) {
    // 關閉按鈕
    const closeBtn = modal.querySelector('.theme-modal-close-v2');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(modal));
    }
    
    // 背景點擊關閉
    const overlay = modal.querySelector('.theme-modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', () => closeModal(modal));
    }
    
    // ESC鍵關閉
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        if (document.body.contains(modal)) {
            document.body.removeChild(modal);
        }
    }, 300);
}

function initTheme() {
    const savedTheme = getCurrentTheme();
    applyTheme(savedTheme);
    applyCustomTheme();
    const customTheme = getCustomTheme();
    if (customTheme.backgroundImage) {
        document.body.style.backgroundImage = `url(${customTheme.backgroundImage})`;
    }
    setTimeout(() => {
        updateThemeButtons(savedTheme);
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});
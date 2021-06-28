module.exports = {
    title: '「美訂美當」訂餐系統',
    description: '訂餐系統官方文檔',
    themeConfig: {
        nav: [
            {text: '最新消息', link: '/news/'}
        ],
        sidebar: [
            {
                title: '基本介紹',
                collapsable: true,
                children: [
                    ['/basic/intro', '介紹']
                ]
            },
            {
                title: '使用教學 (客戶端)',
                collapsable: true,
                children: [
                    ['/usage/customer/query', '搜尋商品']
                ]
            },
            {
                title: '使用教學 (商家端)',
                collapsable: true,
                children: [
                    ['/usage/customer/query', '介紹']
                ]
            },
            {
                title: '政策規範',
                collapsable: true,
                children: [
                    ['/policy/EULA', '使用條款'],
                    ['/policy/privacy', '隱私權政策']
                ]
            },/*
            '/intro',
            {
                title: 'Guide',
                collapsable: false,
                children: [
                    ['/guide/Frontend', 'Frontend'],
                    ['/guide/Backend', 'Backend']

            },*/
        ]
    }
}
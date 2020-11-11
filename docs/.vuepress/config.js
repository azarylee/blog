module.exports = {
    plugins: [
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine', 
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'LpVsJXPC1FAUOs5Bm26DQG8K-MdYXbMMI',
                    appKey: 'zcveekQKzTRJRx0G1SVLtRFn'
                }
            }
        ]
    ],
    title: "Will Blog", // 设置网站标题
    description: "阿木林的博客",
    name: 'Will',
    theme: 'yuu',
    base: "/", // 设置站点根路径
    dest: "./ROOT", // 设置输出目录
    port: 4030,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
        ['meta', { name: 'renderer', content: 'webkit' }],
        ['meta', { name: 'force-rendering', content: 'webkit' }],
        ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
        ['meta', { name: 'author', content: 'Yijun <liyijun430.com>' }]
    ],
    
    themeConfig: {
        yuu: {
            colorThemes: ['blue', 'red', 'purple'],
            defaultDarkTheme: true,
        },
        // 添加导航栏
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                nav: [
                    { text: "Home", link: "/" },
                    { text: "Node", link: "/node/" },
                    {
                        text: "Front-end Framework",
                        items: [
                            { text: "Vue", link: "/vue/" },
                            { text: "Vue Source Code", link: "/vueSourceCode/" },
                            { text: "React", link: "/react/" },
                            { text: "GraphQL", link: "/graphql/" },
                        ]
                    },
                    // { text: "Blog", link: "/zh/frontEnd/" },
                    // {
                    //     text: "Articulate",
                    //     items: [
                    //         { text: "3K", link: "/3k-game/" },
                    //     ]
                    // }
                ],
                // 为以下路由添加左侧边栏
                sidebar: {
                    "/node/": [
                        {
                            title: "Node.js",
                            collapsable: false,
                            children: [
                                { title: "What is node?", path: "/node/what_is_node" },
                                { title: "How to use node?", path: "/node/how_to_use" },
                                { title: "Callbacks", path: "/node/Callback" },
                            ],
                        },
                    ],
                    "/vueSourceCode/": [
                        {
                            title: "Learn Vue Source Code",
                            collapsable: false,
                            children: [
                                { title: "Listen the data change", path: "/vueSourceCode/ListenerToVar" },
                                { title: "Virtual Dom", path: "/vueSourceCode/VirtualDom"},
                                { title: "Template Compilation", path: "/vueSourceCode/TemplateCompilation"},
                                { title: "Life Cycle", path: "/vueSourceCode/LifeCycle"},
                                { title: "Instance", path: "/vueSourceCode/Instance"},
                                { title: "API", path: "/vueSourceCode/Api"}
                            ],
                        }
                    ],
                    "/react/": [
                        {
                            title: "Learn React Make Better",
                            collapsable: false,
                            children: [
                                { title: "Create a Project", path: "/react/CreateProject" },
                            ],
                        }
                    ],
                    "/3k-game/": [
                        {
                            title: "3K GAMES",
                            collapsable: false,
                            children: [
                                { title: "Project Structure", path: "/3k-game/structure/" },
                                { title: "Fish Game", path: "/3k-game/fish" }
                            ],
                        },
                    ],
                },
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                nav: [
                    { text: "主页", link: "/zh/" },
                    { text: "Node", link: "/zh/node/" },
                    {
                        text: "前端框架",
                        items: [
                            { text: "Vue", link: "/zh/vue/" },
                            { text: "Vue源码解读", link: "/zh/vueSourceCode/" },
                            { text: "React", link: "/zh/react/" },
                            { text: "GraphQL", link: "/zh/graphql/" },
                        ]
                    },
                    { text: "博客", link: "/zh/frontEnd/" },
                    // {
                    //     text: "Articulate",
                    //     items: [
                    //         { text: "3K", link: "/zh/3k-game/" },
                    //     ]
                    // }
                ],
                // 为以下路由添加左侧边栏
                sidebar: {
                    "/zh/node/": [
                        {
                            title: "Node.js",
                            collapsable: false,
                            children: [
                                { title: "Node.js前世今生", path: "/zh/node/what_is_node" },
                                { title: "Node.js葵花宝典", path: "/zh/node/how_to_use" },
                                { title: "Callbacks必杀技", path: "/zh/node/Callback" },
                            ],
                        },
                    ],
                    "/zh/vueSourceCode/": [
                        {
                            title: "Vue 源码解读",
                            collapsable: false,
                            children: [
                                { title: "监听数据变化", path: "/zh/vueSourceCode/ListenerToVar" },
                                { title: "虚拟Dom", path: "/zh/vueSourceCode/VirtualDom"},
                                { title: "模板编译篇", path: "/zh/vueSourceCode/TemplateCompilation"},
                                { title: "生命周期篇", path: "/zh/vueSourceCode/LifeCycle"},
                                { title: "实例方法篇", path: "/zh/vueSourceCode/Instance"},
                                { title: "全局API篇", path: "/zh/vueSourceCode/Api"}
                            ],
                        }
                    ],
                    "/zh/react/": [
                        {
                            title: "学习React，不一样的编程",
                            collapsable: false,
                            children: [
                                { title: "创建项目", path: "/zh/react/CreateProject" },
                            ],
                        }
                    ],
                    "/zh/3k-game/": [
                        {
                            title: "3K 游戏",
                            collapsable: false,
                            children: [
                                { title: "项目结构", path: "/zh/3k-game/structure/" },
                                { title: "捕鱼游戏", path: "/zh/3k-game/fish" }
                            ],
                        },
                    ],
                },
            }
        },
        sidebarDepth: 2, //左侧导航显示的层级
        smoothScroll: true,
        lastUpdated: "Last Updated",
        serviceWorker: true,
    },
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Will\'s Blog',
            description: 'Keep Calm and Make Epic Shit',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '阿木林的博客',
            description: '前端小菜鸟',
        }
    }
};


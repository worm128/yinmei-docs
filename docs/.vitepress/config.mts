import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        // 首屏 HTML 就给 <html> 加上粉色主题类，避免闪烁
        ['script', {}, `
      try {
        var t = localStorage.getItem('vitepress-theme');
        if (!t) { localStorage.setItem('vitepress-theme', 'sakura'); t = 'sakura'; }
        document.documentElement.classList.add('theme-' + t);
      } catch (e) {}
        `],
        [
    'script',
    {},
    `(function(){var hm=document.createElement('script');hm.src='https://hm.baidu.com/hm.js?ea78086b4e805db206b39ad35e71eec9';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm,s);})();`,
        ],
    ],
    ignoreDeadLinks: true,
    themeConfig: {
        search: {
            provider: 'local'
        },
    },

    locales: {
        root: {
            title: "AI吟美",
            label: '中文',
            lang: 'zh-CN',
            link: '/',
            description: 'AI吟美|AI情感|AI情绪|AI长期记忆|AI短期记忆|AI扩散思维|AI人工智能|AI意图分析|RAG|KAG|AI鉴黄NSFW|OBS直播|AI表情|Vtube Studio|AI桌宠|AI唱歌|AI绘画|语音合成|语音对话|funasr|VAD活检|声纹识别|语音识别|AI搜索|AI QBot|AI机器人|积分系统|AI抽奖系统|Live2D皮肤',
            themeConfig: {
                // https://vitepress.dev/reference/default-theme-config
                logo: "https://www.yinmei.vip/ymlogo.png",
                nav: [
                    {text: '首页', link: '/'},
                    {text: '快速开始', link: '/cn/README'},
                    {text: '官网', link: 'https://www.yinmei.vip/'},
                    {text: '演示', link: 'http://demo.yinmei.vip/'}
                ],
                search: {
                    provider: 'local'
                },

                sidebar: [
                    {
                        text: '核心配置',
                        items: [
                            {text: '首页', link: '/cn/README.md'},
                            {text: '下载与介绍', link: '/cn/link.md'},
                            {text: '吟美核心', link: '/cn/yinmei-core.md'},
                            {text: '吟美分析', link: '/cn/yinmei-analysis.md'},
                            {text: '吟美桌宠', link: '/cn/yinmei-desktop-plus.md'},
                            {text: '吟美唱歌', link: '/cn/yinmei-music.md'},
                            {text: 'CosyVoice', link: '/cn/yinmei-cosyvoice.md'},
                            {text: '开放平台', link: '/cn/openapi.md'},
                            {text: '版本更新', link: '/cn/update.md'},
                            {text: '接口文档', link: 'http://api.yinmei.vip/docs'},
                        ],
                    }
                ],

                socialLinks: [
                    {icon: 'github', link: 'https://github.com/worm128/AI-YinMei'}
                ],

                footer: {
                    message: '粤ICP备2026065892号-1',
                    copyright: 'Copyright © 2024-2026 AI吟美'
                }

            }
        },
        en: {
            title: "AI YinMei",
            label: 'English',
            lang: 'en-US', // 可选，将作为 `lang` 属性添加到 `html` 标签中
            link: '/en/', // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
            description: 'AI Yinmei | AI Emotion | AI Emotion | AI Long Term Memory | AI Short Term Memory | AI Diffusion Thinking | AI Artificial Intelligence | AI Intent Analysis | RAG | KAG | AI Yellow Recognition NSFW | OBS Live Streaming | AI Emotions | Vtube Studio | AI Table Pet | AI Singing | AI Painting | Speech Synthesis | Speech Dialogue | Funasr | VAD Biopsy | Voiceprint Recognition | Speech Recognition | AI Search | AI QBot | AI Robot | Integral System | AI Lottery System | Live2D Skin',
            themeConfig: {
                logo: "https://www.yinmei.vip/ymlogo.png",
                nav: [
                    {text: 'Home', link: '/en/'},
                    {text: 'Quick', link: '/en/README'},
                    {text: 'Official ', link: 'https://www.yinmei.vip/index-en.html'},
                    {text: 'Demo', link: 'http://demo.yinmei.vip/'}
                ],
                search: {
                    provider: 'local'
                },

                sidebar: [
                    {
                        text: 'Core-Config',
                        items: [
                            {text: 'Home', link: '/en/README.md'},
                            {text: 'Download and Introduction', link: '/en/link.md'},
                            {text: 'Yinmei Core', link: '/en/yinmei-core.md'},
                            {text: 'Yinmei Analysi', link: '/en/yinmei-analysis.md'},
                            {text: 'Yinmei Desktop Pet', link: '/en/yinmei-desktop-plus.md'},
                            {text: 'Yinmei Singing', link: '/en/yinmei-music.md'},
                            {text: 'CosyVoice', link: '/en/yinmei-cosyvoice.md'},
                            {text: 'Open Platform', link: '/en/openapi.md'},
                            {text: 'Version Update', link: '/en/update.md'},
                            {text: 'API Documentation', link: 'http://api.yinmei.vip/docs'},
                        ],
                    }
                ],

                socialLinks: [
                    {icon: 'github', link: 'https://github.com/worm128/AI-YinMei'}
                ],

                footer: {
                    message: 'GD ICP Filing No. 2026065892-1',
                    copyright: 'Copyright © 2024-2026 AI YinMei'
                }

            }
        },
        jp: {
            title: "AI吟美",
            label: '日語',
            lang: 'ja', // 可选，将作为 `lang` 属性添加到 `html` 标签中
            link: '/jp/', // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
            description: 'AI吟美|AI感情|AI情緒|AI長期記憶|AI短期記憶|AI拡散的思考|AI人工知能|AI意図分析|RAG|KAG|AIによるNSFW（不適切コンテンツ）検知|OBSライブ配信|AI表情|Vtube Studio|AIデスクトップペット|AI歌唱|AI作画|音声合成|音声対話|funasr|VAD（音声区間検出）|声紋認識|音声認識|AI検索|AI QBot|AIロボット|ポイントシステム|AI抽選システム|Live2Dスキン',
            themeConfig: {
                logo: "https://www.yinmei.vip/ymlogo.png",
                nav: [
                    {text: 'ホーム', link: '/jp/'},
                    {text: 'クイックガイド', link: '/jp/README'},
                    {text: '公式サイト ', link: 'https://www.yinmei.vip/index-jp.html'},
                    {text: 'デモ', link: 'http://demo.yinmei.vip/'}
                ],
                search: {
                    provider: 'local'
                },

                sidebar: [
                    {
                        text: 'Core-Config',
                        items: [
                            {text: 'ホーム', link: '/jp/README.md'},
                            {text: 'ダウンロード・紹介', link: '/jp/link.md'},
                            {text: '吟美コア', link: '/jp/yinmei-core.md'},
                            {text: '吟美分析', link: '/jp/yinmei-analysis.md'},
                            {text: '吟美デスクトップマスコット', link: '/jp/yinmei-desktop-plus.md'},
                            {text: '吟美の歌唱', link: '/jp/yinmei-music.md'},
                            {text: 'CosyVoice', link: '/jp/yinmei-cosyvoice.md'},
                            {text: 'オープン・プラットフォーム', link: '/jp/openapi.md'},
                            {text: 'アップデート情報', link: '/jp/update.md'},
                            {text: 'APIドキュメント', link: 'http://api.yinmei.vip/docs'},
                        ],
                    }
                ],

                socialLinks: [
                    {icon: 'github', link: 'https://github.com/worm128/AI-YinMei'}
                ],

                footer: {
                    message: '粤ICP備2026065892号-1',
                    copyright: 'Copyright © 2024-2026 AI吟美'
                }

            }
        }
    }
})

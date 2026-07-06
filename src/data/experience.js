const myExperience = [
    {
        type: "Work",
        date: "2025/10 - 至今",
        title: "全端工程師 | 智聯服務股份有限公司",
        description: [
            {
                text: "擔任全端工程師，負責維護和開發行動端（Flutter）、前端（React）與後端（Go）的系統。"
            },
            {
                text: "開發 LINE LIFF 課程報名系統，取代人工詢問與登記流程。"
            },
            {
                parts: [
                    { type: "text", content: "開發 " },
                    { type: "link", content: "新竹攻城獅", url: "/project/lioneers-ast" },
                    { type: "text", content: "官方 App，成功服務上千名活躍用戶，並確保雙平台流暢的使用體驗。" }
                ]
            },
            {
                text: "負責服務容器化與雲端環境部署，建置自動化更新流程，確保系統維護的便利性。"
            }
        ]
    },
    {
        type: "Work",
        date: "2025/03 - 2025/09",
        title: "APP工程師 | 艾捷科技有限公司",
        description: [
            {
                text: "基於開源專案 Chromium 原始碼進行客製化 Android 瀏覽器開發。"
            },
            {
                text: "使用 Java 撰寫 Android Unit Test，實現 50% 以上的測試覆蓋率，確保程式碼品質與穩定性。"
            }
        ]
    },
    {
        type: "Work",
        date: "2023/11 - 2025/02",
        title: "APP工程師 | 發條橘子科技股份有限公司",
        description: [
            {
                text: "擔任 APP 團隊主要開發者，交付超過 5 款 Kotlin/Java 及 Flutter 應用。"
            },
            {
                text: "主導 IoT 智慧裝置 App 開發，處理複雜的 BLE / BluFi 藍牙通訊協定，優化斷線重連機制，使硬體串接成功率提升至 90% 以上。"
            },
            {
                text: "在確保系統流暢度的前提下進行技術選型與重構，完成跨平台的程式開發，為團隊縮減後續 50% 以上的開發與維護成本。"
            }
        ]
    },
    {
        type: "Work",
        date: "2020/09 - 2023/07",
        title: "實習工程師 | 國立台中科技大學",
        description: [
            {
                text: "於國立台中科技大學擔任長期實習工程師，協助校內系統與 Android APP 開發與維護。"
            },
            {
                text: "參與「台達機械助手」等校內合作專案，支援系統設計與功能開發。"
            },
            {
                text: "參與「Dr.Voice 嗓音衛教」與「口腔衛教系統」等專案，負責行動應用程式開發與裝置整合。"
            },
            {
                text: "與警政署合作專案，使用 Kotlin 開發 App，實現網路封包與 UI 行為側錄與分析。"
            },
            {
                text: "在學期間長期使用 Java 開發與維護校內 Android APP，支援 IoT 資料串流、藍芽連線與健康照護、機器人控制等應用。"
            }
        ]
    },
    {
        type: "Education",
        date: "2017/09 - 2023/07",
        title: "國立台中科技大學 | 資訊工程系 學士／碩士",
        description: [
            {
                parts: [
                    { type: "text", content: "完成資訊工程學士與碩士學位，研究領域聚焦於 AI 影像辨識與智慧應用開發。" }
                ]
            },
            {
                parts: [
                    { type: "text", content: "發表碩士論文 " },
                    { type: "link", content: "《運用 5PKC 骨架分區策略於時空圖卷積網路之健身動作識別》", url: "https://hdl.handle.net/11296/sc5g86" },
                    { type: "text", content: "：創新引入五大動力鏈（5PKC）策略優化 ST-GCN 深度學習模型，排除背景雜訊，實現高精準度的人體骨架健身動作識別與正確性評估。" }
                ]
            },
            {
                parts: [
                    { type: "text", content: "碩士研究成果發表於國際期刊 " },
                    { type: "link", content: "《Applied Soft Computing》(2024)", url: "https://www.sciencedirect.com/science/article/abs/pii/S1568494624007373" },
                    { type: "text", content: "。" }
                ]
            },
            {
                parts: [
                    { type: "text", content: "碩士研究成果發表於 Springer 國際學術叢書 " },
                    { type: "link", content: "《Advances in Intelligent Systems and Computing》", url: "https://link.springer.com/chapter/10.1007/978-981-99-2287-1_100" },
                    { type: "text", content: "。" }
                ]
            },
            {
                parts: [
                    { type: "text", content: "於 2022 年獲得 " },
                    { type: "link", content: "聯發科技「智在家鄉」競賽", url: "https://corp.mediatek.tw/corporate-social-responsibility/corporate-social-responsibility-news/two-winners-announced-for-genius-for-home" },
                    { type: "text", content: "首獎。" }
                ]
            }
        ]
    }
];

export default myExperience;

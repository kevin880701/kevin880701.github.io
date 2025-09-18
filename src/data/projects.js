const PROJECTS = [
    {
        // 基本資訊
        title: "Dental Guard 口腔衛教系統",
        description: "榮獲2022聯發科「智在家鄉」首獎。此專案整合 Flutter APP、AI 牙菌斑影像辨識與 Go 後端服務，並導入 Docker 與 CI/CD 流程。",
        logo: "/images/dental-guard-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/229df9661292801b843ddcd1c8acb897?pvs=21",

        // 詳細說明
        descriptions: [
            "Dental Guard 是一個結合 AI 影像辨識技術與口腔衛教的創新系統，旨在解決民眾無法及時發現牙菌斑問題的困擾。透過手機相機拍攝口腔照片，系統能即時分析並標示出牙菌斑位置，提供個人化的清潔建議。",
            "此專案榮獲 2022 聯發科「智在家鄉」競賽首獎，不僅具備學術價值，更有實際的社會影響力。我們從零開始訓練 AI 模型，並將研究成果發表於國際期刊 Applied Soft Computing。",
            "技術架構採用 Flutter 開發跨平台 APP，Go 語言建構後端 RESTful API，並運用 Docker 進行容器化部署。整個開發流程導入 CI/CD 自動化，確保程式碼品質與部署效率。"
        ],

        // 技術特色
        features: [
            "AI 牙菌斑影像辨識技術",
            "Flutter 跨平台開發",
            "Go 後端 RESTful API",
            "Docker 容器化部署",
            "CI/CD 自動化流程"
        ],

        // 專案成果
        achievements: [
            "榮獲 2022 聯發科「智在家鄉」競賽首獎",
            "成功整合 AI 模型與行動應用",
            "建立完整的 DevOps 流程"
        ],

        // 媒體資源
        media: {
            images: [
                {
                    src: "/images/dental-guard-class-list.png",
                    caption: "班級列表"
                },
                {
                    src: "/images/dental-guard-member.png",
                    caption: "成員管理"
                },
                {
                    src: "/images/dental-guard-analyze.png",
                    caption: "牙菌斑分析"
                },
                {
                    src: "/images/dental-guard-chart-1.png",
                    caption: "動態圖表展示"
                },
                {
                    src: "/images/dental-guard-chart-2.png",
                    caption: "長條圖選取變化"
                },
                {
                    src: "/images/dental-guard-chart-3.png",
                    caption: "趨勢圖選取變化"
                },
                {
                    src: "/images/dental-guard-date-picker.png",
                    caption: "時間範圍挑選"
                }
            ],
            videos: [
                {
                    src: "/videos/dental-guard-demo.mp4",
                    caption: "完整功能展示影片"
                }
            ]
        }
    },
    {
        title: "廚事寶智慧廚電",
        description: "使用 Flutter 開發的 IoT 應用，串接 BluFi 硬體通訊與 Go 後端，實現智慧廚電控制，並成功上架雙平台。",
        logo: "/images/home-link-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/18edf966129280aeb148d25d75ec9857?pvs=21",

        descriptions: [
            "廚事寶是一款智慧廚電控制應用，讓使用者能透過手機遠端操控各種廚房設備。專案的核心挑戰在於建立穩定的 IoT 設備通訊機制，我們採用 BluFi 協定實現硬體連接，並透過 MQTT 協定進行即時數據傳輸。",
            "應用程式提供直覺的操作介面，支援預約煮飯、溫度監控、智慧食譜推薦等功能。使用者可以設定個人化的烹飪排程，讓智慧廚電在最適當的時間開始工作。",
            "此專案成功上架 iOS 與 Android 雙平台，獲得使用者良好回饋。後端採用 Go 語言開發，提供穩定的 API 服務，支援多使用者同時操作與設備狀態同步。"
        ],

        features: [
            "BluFi 硬體通訊協定",
            "IoT 設備控制",
            "即時數據監控",
            "智慧排程功能",
            "雙平台上架"
        ],

        achievements: [
            "成功上架 iOS 與 Android 雙平台",
            "穩定的 IoT 設備通訊機制",
            "優秀的使用者體驗設計",
            "商業化產品成功案例"
        ],

        media: {
            images: [
                {
                    src: "/images/home-link-1.jpg",
                    caption: "主控制面板，可即時監控所有連接的智慧廚電狀態"
                },
                {
                    src: "/images/home-link-2.jpg",
                    caption: "設備連線設定頁面，支援 BluFi 快速配對"
                },
                {
                    src: "/images/home-link-3.jpg"
                    // 無caption
                }
            ],
            videos: [
                {
                    src: "/videos/home-link-demo.mp4",
                    caption: "智慧廚電控制功能展示"
                }
            ]
        }
    },
    {
        title: "移動FDA",
        description: "協助食藥署將傳統紙本稽查流程數位化。透過 Flutter App 導入數位表單與電子簽名功能，有效提升行政效率。",
        logo: "/images/fda-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/211df966129280b58b4ffbc8f85489d9?pvs=21",

        descriptions: [
            "移動FDA 專案協助食品藥物管理署將傳統紙本稽查流程全面數位化。稽查人員可透過平板或手機完成現場檢查，系統提供標準化的數位表單，支援照片上傳、電子簽名、GPS 定位等功能。",
            "此系統大幅提升稽查效率，減少人工作業錯誤，並能即時產生稽查報告。離線作業功能確保在網路訊號不佳的環境下仍能正常使用，待網路恢復時自動同步數據。",
            "專案採用 Flutter 開發，確保在不同設備上都有一致的使用體驗。與政府單位的合作經驗讓我深刻理解公部門的特殊需求，包括資安要求、使用者習慣與系統穩定性的重要性。"
        ],

        features: [
            "數位表單系統",
            "電子簽名功能",
            "離線數據同步",
            "政府單位合作",
            "紙本流程數位化"
        ],

        achievements: [
            "協助政府單位數位轉型",
            "提升行政作業效率",
            "減少紙本作業流程",
            "獲得使用單位正面回饋"
        ],

        media: {
            images: [
                {
                    src: "/images/fda-1.jpg",
                    caption: "數位稽查表單介面，將紙本流程完全數位化"
                },
                {
                    src: "/images/fda-2.jpg",
                    caption: "電子簽名功能，支援現場即時確認"
                }
            ],
            videos: []
        }
    },
    {
        title: "Android 行為側錄系統",
        description: "與警政署合作，使用 Kotlin 開發 Android App，實現網路封包側錄、UI 操作行為紀錄等關鍵資安功能。",
        logo: "/images/packet-recorder-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/210df9661292807cb615e24e74c2620e?pvs=21",

        descriptions: [
            "此專案與警政署合作開發，旨在提供關鍵的資安監控功能。系統能夠記錄 Android 設備上的網路封包傳輸與使用者操作行為，協助進行數位鑑識與安全分析。",
            "技術實現包括底層網路封包擷取、UI 操作事件記錄、系統行為分析等功能。所有資料都經過加密處理，確保符合政府資安標準。系統採用 Kotlin 原生開發，充分利用 Android 平台的深層功能。",
            "此專案讓我累積了豐富的系統底層開發經驗，並學習到政府級應用的高標準要求。與執法單位的合作也讓我更深入理解資安監控系統的實際應用場景。"
        ],

        features: [
            "網路封包側錄",
            "UI 操作行為記錄",
            "資安監控功能",
            "政府單位合作",
            "Kotlin 原生開發"
        ],

        achievements: [
            "與警政署成功合作",
            "提供關鍵資安監控功能",
            "穩定的系統運行表現",
            "政府認證的安全性"
        ],

        media: {
            images: [
                {
                    src: "/images/packet-recorder-1.jpg"
                    // 基於資安考量，此圖片不提供詳細說明
                },
                {
                    src: "/images/packet-recorder-2.jpg"
                    // 基於資安考量，此圖片不提供詳細說明
                }
            ],
            videos: []
        }
    },
    {
        title: "EMS 能源管理系統",
        description: "負責規劃整體系統架構，以 Flutter 開發客製化能源動態圖表，並串接第三方登入及儲能櫃硬體。",
        logo: "/images/ems-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/18edf966129280918b0dc958cf1fa353?pvs=21",

        descriptions: [
            "EMS（Energy Management System）是一套企業級能源管理解決方案，幫助企業即時監控能源消耗、分析用電模式、優化能源配置。系統整合多種硬體設備，包括智慧電錶、儲能櫃、太陽能板等。",
            "我負責整體系統架構規劃，設計客製化的動態圖表展示能源數據，並整合第三方登入系統提升使用便利性。系統支援多層級權限管理，滿足不同角色的使用需求。",
            "此專案的技術挑戰在於處理大量即時數據並提供直觀的視覺化介面。我們採用 Flutter 開發前端，利用 Chart.js 創建豐富的圖表功能，並建立穩定的 WebSocket 連線確保數據即時更新。"
        ],

        features: [
            "客製化動態圖表",
            "第三方登入整合",
            "儲能櫃硬體串接",
            "即時能源監控",
            "系統架構規劃"
        ],

        achievements: [
            "完整的系統架構規劃",
            "成功整合多項第三方服務",
            "提供直觀的數據視覺化",
            "滿足企業級需求"
        ],

        media: {
            images: [
                {
                    src: "/images/ems-1.jpg",
                    caption: "能源監控儀表板，即時顯示各項能源數據"
                },
                {
                    src: "/images/ems-2.jpg",
                    caption: "動態圖表功能，支援多種數據視覺化形式"
                },
                {
                    src: "/images/ems-3.jpg",
                    caption: "系統設定頁面，支援多層級權限管理"
                }
            ],
            videos: []
        }
    },
    {
        title: "Smart Security",
        description: "以 Flutter 實現 App 內即時影像串流功能，並負責重構 UI/UX 與優化 App 整體效能。",
        logo: "/images/android-security-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/18edf9661292808eaa8ceb03f0fa10b3?pvs=21",

        descriptions: [
            "Smart Security 是一套安全監控系統的 APP 重構專案。原有系統存在效能瓶頸與使用者體驗問題，我負責進行全面的 UI/UX 重新設計與效能優化。",
            "核心功能包括即時影像串流、多鏡頭切換、錄影回放、異常警報等。技術重點在於優化影像串流的穩定性與減少延遲，確保監控系統的即時性要求。",
            "重構後的應用在效能上有顯著提升，使用者介面更加直觀易用。採用 Flutter 開發確保跨平台的一致性，並運用 WebRTC 技術實現高品質的即時影像傳輸。"
        ],

        features: [
            "即時影像串流",
            "UI/UX 重構",
            "效能優化",
            "安全監控系統",
            "Flutter 開發"
        ],

        achievements: [
            "大幅提升應用效能",
            "改善使用者介面體驗",
            "穩定的即時串流功能",
            "成功的產品重構案例"
        ],

        media: {
            images: [
                {
                    src: "/images/android-security-1.jpg",
                    caption: "重構後的監控主畫面，提供清晰直觀的影像顯示"
                },
                {
                    src: "/images/android-security-2.jpg",
                    caption: "多鏡頭切換介面，支援同時監控多個位置"
                }
            ],
            videos: [
                {
                    src: "/videos/smart-security-demo.mp4",
                    caption: "即時影像串流與介面操作展示"
                }
            ]
        }
    },
    {
        title: "ShouGo 車載系統",
        description: "使用 Java 開發，建立車機與手機的資料同步機制，並實現旅程規劃、GPS 即時更新與地點推薦等功能。",
        logo: "/images/shou-go-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/229df966129280728e66e8663b47078f?pvs=21",

        descriptions: [
            "ShouGo 是一套創新的車載系統，實現車機與手機的無縫數據同步。系統提供旅程規劃、即時導航、地點推薦、行車記錄等功能，讓駕駛體驗更加智慧化。",
            "技術核心在於建立穩定的車機與手機通訊機制，支援藍牙與 WiFi 雙重連線方式。GPS 定位系統提供準確的即時位置更新，智慧演算法根據使用者習慣推薦最佳路線與景點。",
            "此專案採用 Java 原生開發，充分利用 Android 平台的硬體整合能力。地圖服務整合多家供應商，提供最準確的導航資訊。使用者回饋顯示系統在提升駕駛便利性方面有顯著成效。"
        ],

        features: [
            "車機手機同步",
            "GPS 即時更新",
            "旅程規劃功能",
            "地點推薦系統",
            "Java 原生開發"
        ],

        achievements: [
            "創新的車機同步機制",
            "準確的GPS定位服務",
            "智慧化的旅程規劃",
            "良好的用戶體驗回饋"
        ],

        media: {
            images: [
                {
                    src: "/images/shou-go-1.jpg",
                    caption: "車載系統主介面，整合導航與媒體控制功能"
                },
                {
                    src: "/images/shou-go-2.jpg"
                    // 無caption
                }
            ],
            videos: []
        }
    }
];

export default PROJECTS;
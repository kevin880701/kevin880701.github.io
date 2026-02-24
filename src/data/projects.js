const PROJECTS = [
    {
        // 基本資訊
        title: "Dental Guard 口腔衛教系統",
        slug: "dental-guard",
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
        slug: "link-home",
        description: "使用 Flutter 開發的 IoT 應用，串接 BluFi 硬體通訊與 Go 後端，實現智慧廚電控制，並成功上架雙平台。",
        logo: "/images/link-home-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/18edf966129280aeb148d25d75ec9857?pvs=21",

        descriptions: [
            "廚事寶是一款智慧廚電控制應用，讓使用者能透過手機遠端操控各種廚房設備。專案的核心挑戰在於建立穩定的 IoT 設備通訊機制，我們採用 BluFi 協定實現硬體連接，並透過 MQTT 協定進行即時數據傳輸。",
            "應用程式提供直覺的操作介面，支援預約煮飯、溫度監控、智慧食譜推薦等功能。使用者可以設定個人化的烹飪排程，讓智慧廚電在最適當的時間開始工作。",
            "此專案成功上架 iOS 與 Android 雙平台。"
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
                    src: "/images/link-home-login.png",
                    caption: "登入頁面"
                },
                {
                    src: "/images/link-home-user-home.png",
                    caption: "使用者主頁，可即時監控所有連接的智慧廚電狀態"
                },
                {
                    src: "/images/link-home-search-device.png",
                    caption: "搜尋設備頁面，可透過QR code進行連接"
                },
                {
                    src: "/images/link-home-add-device.png",
                    caption: "新增設備頁面"
                },
                {
                    src: "/images/link-home-device-detail1.png",
                    caption: "設備控制面板"
                },
                {
                    src: "/images/link-home-device-detail2.png",
                    caption: "設備詳細資訊"
                },
                {
                    src: "/images/link-home-notification.png",
                    caption: "通知中心"
                },
                {
                    src: "/images/link-home-unit-manager.png",
                    caption: "單位管理介面"
                },
                {
                    src: "/images/link-home-engineer-home.png",
                    caption: "工程模式主頁，可看到任務排程"
                },
                {
                    src: "/images/link-home-engineer-info.png",
                    caption: "工程人員資訊，可出示給客戶看"
                },
                {
                    src: "/images/link-home-engineer-task-list.png",
                    caption: "工程師任務列表"
                },
                {
                    src: "/images/link-home-engineer-task-detail.png",
                    caption: "任務詳細資訊"
                },
                {
                    src: "/images/link-home-engineer-repair-order.png",
                    caption: "維修工單"
                },
                {
                    src: "/images/link-home-engineer-sign.png",
                    caption: "客戶電子簽名確認"
                }
            ]
        }
    },
    {
        title: "移動FDA",
        slug: "fda",
        description: "協助食藥署將傳統紙本稽查流程數位化。透過 Flutter App 導入數位表單與電子簽名功能，有效提升行政效率。",
        logo: "/images/fda-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/211df966129280b58b4ffbc8f85489d9?pvs=21",

        descriptions: [
            "移動FDA 專案協助食品藥物管理署將傳統紙本稽查流程全面數位化。稽查人員可透過平板或手機完成現場檢查，系統提供標準化的數位表單，支援照片上傳、電子簽名等功能。",
            "此系統大幅提升稽查效率，減少人工作業錯誤，並能即時產生稽查報告。離線作業功能確保在網路訊號不佳的環境下仍能正常使用，待網路恢復時自動同步數據。",
            "專案採用 Flutter 開發，確保在不同設備上都有一致的使用體驗。"
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
        ],

        media: {
            images: [
                {
                    src: "/images/fda-home.png",
                    caption: "系統主頁，顯示待辦事項與本月工作"
                },
                {
                    src: "/images/fda-sampling-list.png",
                    caption: "抽樣案件列表"
                },
                {
                    src: "/images/fda-sampling.png",
                    caption: "抽樣紀錄表單，支援現場拍照上傳"
                },
                {
                    src: "/images/fda-temperature.png",
                    caption: "溫度紀錄單，用於記錄疫苗或藥品的保存溫度"
                },
                {
                    src: "/images/fda-seal.png",
                    caption: "檢體會同簽封條，用於確認檢體封存資訊"
                },
                {
                    src: "/images/fda-urgent.png",
                    caption: "緊急放行頁面"
                },
                {
                    src: "/images/fda-store.png",
                    caption: "藥商聯絡資料管理"
                },
                {
                    src: "/images/fda-sign.png",
                    caption: "廠商會同人員簽章，實現無紙化電子簽名"
                }
            ],
            videos: []
        }
    },
    {
        title: "Android 行為側錄系統",
        slug: "packet-recorder",
        description: "與警政署合作，使用 Kotlin 開發 Android App，實現網路封包側錄、UI 操作行為紀錄等關鍵資安功能。",
        logo: "/images/packet-recorder-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/210df9661292807cb615e24e74c2620e?pvs=21",

        descriptions: [
            "此專案與警政署合作開發，旨在提供關鍵的資安監控功能。系統能夠記錄 Android 設備上的網路封包傳輸與使用者操作行為，協助進行數位鑑識與安全分析。",
            "技術實現包括底層網路封包擷取、UI 操作事件記錄、系統行為分析等功能。所有資料都經過加密處理，確保符合政府資安標準。系統採用 Kotlin 原生開發。"
        ],

        features: [
            "網路封包側錄",
            "UI 操作行為記錄",
            "資安監控功能",
            "Kotlin 原生開發"
        ],

        achievements: [
            "與警政署成功合作",
            "提供關鍵資安監控功能",
        ],

        media: {
            images: [
                {
                    src: "/images/packet-recorder-home.png",
                    caption: "主畫面顯示即時網路封包紀錄"
                },
                {
                    src: "/images/packet-recorder-choose-app.png",
                    caption: "可選擇要進行側錄的目標應用程式"
                },
                {
                    src: "/images/packet-recorder-connection-detail.png",
                    caption: "顯示特定連線的詳細資訊，如協議、來源和目的地IP"
                },
                {
                    src: "/images/packet-recorder-video.png",
                    caption: "同步側錄使用者操作行為的影片（畫面已打碼）"
                }
            ],
            videos: []
        }
    },
    {
        title: "EMS 能源管理系統",
        slug: "ems",
        description: "負責規劃整體系統架構，以 Flutter 開發客製化能源動態圖表，並串接第三方登入及儲能櫃硬體。",
        logo: "/images/ems-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/18edf966129280918b0dc958cf1fa353?pvs=21",

        descriptions: [
            "EMS（Energy Management System）是一套企業級能源管理解決方案，幫助企業即時監控能源消耗、分析用電模式、優化能源配置。系統整合多種硬體設備，包括智慧電錶、儲能櫃、太陽能板等。",
            "我負責整體系統架構規劃，設計客製化的動態圖表展示能源數據，並整合第三方登入系統提升使用便利性。",
            "我採用 Flutter 開發前端，確保在不同設備上都有一致的使用體驗。並以 WebSocket 連線讓數據即時更新。"
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
        ],

        media: {
            images: [
                {
                    src: "/images/ems-home.png",
                    caption: "系統主頁，顯示太陽能發電概覽與即時功率流動圖"
                },
                {
                    src: "/images/ems-energy-info.png",
                    caption: "能源資訊頁面，分析市電、綠電與儲能櫃的詳細數據"
                },
                {
                    src: "/images/ems-chart1.png",
                    caption: "儀表板頁面，提供多種能源數據的視覺化圖表"
                },
                {
                    src: "/images/ems-chart2.png",
                    caption: "動態圖表互動，可查看特定時間點的詳細用電量"
                },
                {
                    src: "/images/ems-choose-mode.png",
                    caption: "提供多種儲能櫃運作模式選擇，如自發自用、削峰填谷等"
                },
                {
                    src: "/images/ems-set-charging-time.png",
                    caption: "可自訂充電與放電排程，實現智慧能源管理"
                },
                {
                    src: "/images/ems-notification.png",
                    caption: "告警通知中心，即時提醒使用者用電異常狀況"
                }
            ],
            videos: []
        }
    },
    {
        title: "Smart Security",
        slug: "smart-security",
        description: "以 Flutter 實現 App 內即時影像串流功能，並負責重構 UI/UX 與優化 App 整體效能。",
        logo: "/images/smart-security-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/18edf9661292808eaa8ceb03f0fa10b3?pvs=21",

        descriptions: [
            "Smart Security 是一套社區安全監控系統的 APP 。原有系統存在使用者體驗問題，我負責進行全面的 UI/UX 重新設計與效能優化。",
            "核心功能包括即時影像串流、多鏡頭切換、異常警報等。並優化影像串流的穩定性與減少延遲，確保監控系統的即時性要求。",
            "採用 Flutter 開發確保跨平台的一致性。"
        ],

        features: [
            "即時影像串流",
            "UI/UX 重構",
            "安全監控系統",
            "Flutter 開發"
        ],

        achievements: [
            "改善使用者介面體驗",
            "穩定的即時串流功能",
        ],

        media: {
            images: [
                {
                    src: "/images/smart-security-home.png",
                    caption: "智慧社區主畫面，整合門禁對講與多項社區服務"
                },
                {
                    src: "/images/smart-security-call.png",
                    caption: "門鈴視訊對講，支援遠端開門與即時影像截圖"
                },
                {
                    src: "/images/smart-security-public-info.png",
                    caption: "社區公設資訊頁面，可線上預約健身房、游泳池等設施"
                },
                {
                    src: "/images/smart-security-account-setting.png",
                    caption: "帳號設定頁面，管理社區資訊與個人化通知"
                }
            ],
            videos: [
            ]
        }
    },
    {
        title: "ShouGo 車載系統",
        slug: "shou-go",
        description: "使用 Java 開發，建立車機與手機的資料同步機制，並實現旅程規劃、GPS 即時更新與地點推薦等功能。",
        logo: "/images/shou-go-logo.png",
        linkText: "查看專案",
        link: "https://www.notion.so/229df966129280728e66e8663b47078f?pvs=21",

        descriptions: [
            "ShouGo 是一套車載系統，實現車機與手機的數據同步。系統提供旅程規劃、即時導航、地點推薦、行車記錄等功能，讓駕駛體驗更加智慧化。",
            "支援藍牙與 WiFi 雙重連線方式。GPS 定位系統提供準確的即時位置更新，根據使用者習慣推薦最佳路線與景點。",
            "此專案採用 Java 原生開發，地圖服務整合多家供應商，提供準確的導航資訊。"
        ],

        features: [
            "車機手機同步",
            "GPS 即時更新",
            "旅程規劃功能",
            "地點推薦系統",
            "Java 原生開發"
        ],

        achievements: [
            "準確的GPS定位服務",
            "智慧化的旅程規劃",
        ],

        media: {
            images: [
                {
                    src: "/images/shou-go-home.png",
                    caption: "車機主畫面，顯示地圖、附近優惠與景點"
                },
                {
                    src: "/images/shou-go-nearby-deals1.png",
                    caption: "車機附近優惠列表，可依分類篩選"
                },
                {
                    src: "/images/shou-go-nearby-deals2.png",
                    caption: "優惠券詳細資訊，可掃描 QR Code 儲存至手機"
                },
                {
                    src: "/images/shou-go-phone-home.png",
                    caption: "手機端主畫面，可搜尋餐廳、景點等優惠資訊"
                },
                {
                    src: "/images/shou-go-phone-map.png",
                    caption: "手機端地圖頁面，呈現優惠資訊的地理位置"
                },
                {
                    src: "/images/shou-go-phone-travel.png",
                    caption: "手機端旅程規劃，可將多個景點與店家加入停靠站"
                }
            ],
            videos: []
        }
    },
    {
        title: "Boutik APP 二手與選物電商平台",
        slug: "boutik-app",
        description: "以二手與選物交易為核心的一站式行動電商平台，串接商品瀏覽、下單付款、鑑定驗貨、退貨申請與客服協助等完整流程。",
        logo: "/images/boutik-logo.png",
        linkText: "查看專案",
        link: "",

        descriptions: [
            "Boutik APP 是一款以二手與選物交易為主的行動電商平台，提供買賣雙方從瀏覽商品、下單付款、鑑定驗貨、退貨申請與客服協助的一站式服務。",
            "系統同時支援買家與賣家兩種角色，讓個人玩家或專業店家都能輕鬆經營自己的小店鋪，包含商品上架、訂單管理與交易狀態追蹤等功能。",
            "在交易流程之外，Boutik APP 也整合了即時聊天室，買家可以直接和賣家溝通，遇到爭議時也能透過退貨與申訴流程，讓整體交易過程更安全、更透明。"
        ],

        features: [
            "二手與選物商品交易流程",
            "支援買家與賣家雙角色",
            "訂單與物流狀態管理",
            "退貨與申訴流程",
            "內建即時聊天室系統"
        ],

        achievements: [
            "建立完整的行動電商交易流程",
            "支援多角色、多情境的交易體驗"
        ],

        media: {
            images: [
                {
                    src: "/images/boutik-home.png",
                    caption: "Boutik APP 首頁商品瀏覽畫面"
                },
                {
                    src: "/images/boutik-post.png",
                    caption: "商品上架頁面，賣家可以建立與編輯商品資訊"
                },
                {
                    src: "/images/boutik-cart.png",
                    caption: "購物車畫面，顯示買家已加入的商品與金額"
                },
                {
                    src: "/images/boutik-chat-room-list.png",
                    caption: "聊天室列表，顯示與不同買家／賣家的對話"
                },
                {
                    src: "/images/boutik-chat-room.png",
                    caption: "聊天室對話畫面，支援買家與賣家即時溝通"
                }
            ],
            videos: []
        }
    },
    {
        title: "Lioneers AST 球隊服務 App",
        slug: "lioneers-ast",
        description: "為新竹攻城獅球迷打造的一站式行動服務入口，整合會員、活動、門票與球隊相關資訊。",
        logo: "/images/lioneers-logo.png",
        linkText: "查看專案",
        link: "",

        descriptions: [
            "Lioneers AST 球隊服務 App 是為新竹攻城獅球迷打造的一站式行動服務入口，整合會員登入、活動頁面、門票與球隊相關資訊，讓球迷可以隨時掌握最新動態。系統透過後端 API 串接既有平台，將原本分散在不同網頁或系統的功能集中到單一 App 中。",
            "在技術架構上，專案以 Flutter 建置跨平台 App，搭配 Riverpod 做狀態管理、AutoRoute 建立分層式路由與 Deep Link 處理流程，並整合 Firebase Cloud Messaging 推播服務與本地通知，確保重要公告（如賽事資訊、活動通知）能第一時間觸達使用者。",
            "App 啟動時會依環境設定初始化 API 網域、建立網路層與共用儲存（Shared Preferences），並透過 Deep Link、App Links 與 Router 的整合，支援從外部連結直接導向 App 內特定頁面。整體專案同時導入響應式 UI 設計與螢幕適配，確保在不同裝置尺寸上都有良好的使用體驗。"
        ],

        features: [
            "Flutter 跨平台開發（iOS / Android）",
            "Riverpod / Hooks 架構的狀態管理與組件設計",
            "AutoRoute 路由系統與 Deep Link 導頁流程",
            "Firebase Cloud Messaging 推播與本地通知整合",
            "Shared Preferences 使用者設定與登入狀態保存",
            "響應式版面與多裝置螢幕適配（ScreenUtil）"
        ],

        achievements: [
            "為球隊與球迷建立統一的行動服務入口",
            "整合推播與 Deep Link，提升活動與賽事宣傳成效",
            "建立可持續擴充的模組化 Flutter 專案架構"
        ],

        media: {
            images: [
                {
                    src: "/images/lioneers-home.jpg",
                    caption: "Lioneers AST 首頁，整合球隊資訊與主要功能入口"
                },
                {
                    src: "/images/lioneers-buy-ticket.jpg",
                    caption: "購票頁面，提供賽事場次與座位選擇"
                },
                {
                    src: "/images/lioneers-my-ticket.jpg",
                    caption: "我的票券頁面，集中管理已購買的賽事門票"
                },
                {
                    src: "/images/lioneers-activity.jpg",
                    caption: "活動列表頁面，顯示球隊相關行銷與球迷活動"
                },
                {
                    src: "/images/lioneers-notification.jpg",
                    caption: "通知中心，整合推播與系統公告"
                },
                {
                    src: "/images/lioneers-account.jpg",
                    caption: "會員中心頁面，顯示個人資料與會員等級資訊"
                }
            ],
            videos: []
        }
    }
];

export default PROJECTS;
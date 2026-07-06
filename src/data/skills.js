const mySkills = [
    {
        category: "程式語言",
        icon: "/icons/code_icon.svg",
        showResume: false,
        description: "",
        skills: [
            { name: "Dart (Flutter)", icon: "/icons/dart_icon.svg" },
            { name: "Kotlin", icon: "/icons/kotlin_icon.png" },
            { name: "Java", icon: "/icons/java_icon.png" },
            { name: "Go", icon: "/icons/go_icon.png" },
            { name: "Python", icon: "/icons/python_icon.png" },
            { name: "SQL", icon: "/icons/sql_icon.png" },
        ]
    },
    {
        category: "行動裝置開發",
        icon: "/icons/mobile_icon.png",
        showResume: true,
        description: "跨平台移動應用程式應用開發。專精 Flutter、Android 原生(Kotlin/Java)，具備從 0 到 1 上架產品的實戰能力。",
        skills: [
            { name: "Ios（Flutter）", icon: "/icons/ios_icon.png" },
            { name: "Android（Kotlin / Java / Flutter）", icon: "/icons/android_icon.png" },
            { name: "Jetpack", icon: "/icons/jetpack_icon.png" },
            { name: "Android Unit Test", icon: "/icons/unit_test_icon.png" },
            { name: "Appium (自動化測試)", icon: "/icons/appium_icon.svg" }
        ]
    },
    {
        category: "後端技術",
        icon: "/icons/server_icon.png",
        showResume: true,
        description: "精通Go 語言，並具備 PostgreSQL 資料庫、Docker 容器化部署、CI/CD 流程建置與 AI 服務串接的實戰經驗。",
        skills: [
            { name: "Go（Gin/Gorm）", icon: "/icons/go_icon.png" },
            { name: "Flask", icon: "/icons/flask_icon.png" },
            { name: "RESTful API 設計", icon: "/icons/api_icon.svg" },
            { name: "Jwt 身份驗證", icon: "/icons/jwt_icon.png" }
        ]
    },
    {
        category: "Web程式開發",
        icon: "/icons/web_icon.png",
        showResume: true,
        description: "使用React開發web介面、Line Liff開發。",
        skills: [
            { name: "React", icon: "/icons/react_icon.png" },
            { name: "Line LIFF", icon: "/icons/line_icon.png" }
        ]
    },
    {
        category: "架構設計",
        icon: "/icons/architecture_icon.png",
        showResume: true,
        description: "熟悉 MVVM、MVP 與 Clean Architecture 等模式。能針對不同專案規模規劃高內聚、低耦合的系統結構，有效分離業務邏輯與 UI，大幅提升程式碼的可維護性、可測試性與團隊協作效率。",
        skills: [
            { name: "MVVM", icon: "/icons/mvvm_icon.png" },
            { name: "MVP", icon: "/icons/mvp_icon.png" },
            { name: "Clean Architecture", icon: "/icons/clean_architecture_icon.png" }
        ]
    },
    {
        category: "IoT 應用",
        icon: "/icons/iot_icon.png",
        showResume: false,
        description: "",
        skills: [
            { name: "藍牙", icon: "/icons/bluetooth_icon.png" },
            { name: "MQTT", icon: "/icons/mqtt_icon.png" },
        ]
    },
    {
        category: "其他開發工具/平台",
        icon: "/icons/tool_icon.png",
        showResume: false,
        description: "Firebase用於身份驗證（Authentication）、崩潰報告（Crashlytics）、遠程配置（Remote Config）和訊息推送（Messaging）。",
        skills: [
            { name: "Git", icon: "/icons/git_icon.png" },
            { name: "Firebase", icon: "/icons/firebase_icon.png" },
            { name: "Figma", icon: "/icons/figma_icon.png" }
        ]
    },
    {
        category: "CI/CD & 部署",
        icon: "/icons/deploy_icon.png",
        showResume: true,
        description: "具備自動化部署與雲端服務整合經驗。能利用 Docker Compose 進行容器化環境建置，並透過 GitHub Actions 建立 CI/CD 流水線，實現自動化測試與部署。熟悉 GCP 雲端基礎架構，確保系統穩定上線與高效運行。",
        skills: [
            { name: "Docker Compose", icon: "/icons/docker_icon.png" },
            { name: "Github Action 自動化部署", icon: "/icons/github_action_icon.png" },
            { name: "GCP", icon: "/icons/gcp_icon.svg" }
        ]
    }
];

export default mySkills;
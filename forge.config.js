// 超详细的Electron使用教程 https://juejin.cn/post/7105930312131018759
module.exports = {
    "packagerConfig": {
        "name": "regex101",
        "icon": "./icon/icon",
        "platform": "all",
        "asar": true
    },
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "regex101",
                "setupIcon": "./icon/icon.ico"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            // 去掉 platform 后会根据平台默认打包
            "platform" : [
                "darwin"
            ]
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        }
    ],
    "publishers": [
        {
            "name": "@electron-forge/publisher-github",
            "config": {
                "repository": {
                    "owner": "RebornQ",
                    "name": "regex101-app"
                },
                "prerelease": false,
                "draft": true
            }
        }
    ]
}
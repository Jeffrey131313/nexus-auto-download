// ==UserScript==
// @name         NexusMods 自动下载
// @namespace    https://github.com/Jeffrey131313/nexus-auto-download/
// @version      0.2
// @description  通过ID精准点击下载缓慢按钮
// @author       Jeffrey131313
// @match        https://www.nexusmods.com/*/mods/*?tab=files*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const checkInterval = setInterval(() => {
        let targetBtn = document.getElementById('slowDownloadButton');

        if (targetBtn) {
            console.log('检测到下载缓慢按钮，开始点击');
            targetBtn.click();
            clearInterval(checkInterval);

            setTimeout(() => {
                if (document.getElementById('fastDownloadButton')) {
                    console.log('下载按钮依然存在，可能点击未成功');
                }
            }, 2000);
        }
    }, 500);

    setTimeout(() => {
        clearInterval(checkInterval);
        console.log('超过20秒未找到按钮，停止检测');
    }, 20000);
})();

function init() {
    setInterval(function() {
        // 手工检查是否有更新
        applicationCache.update();
    },2000);

    //只有manifest文件更新时候,这个事件才会触发(主动刷新浏览器或者手动触发均可触发这个事件)
    applicationCache.addEventListener("updateready", function() {
        if (confirm("本地缓存已被更新,需要刷新画面来获取应用程序最新版本，是否刷新？")) { //当选择否的时候,下次刷新浏览器,当前页面刷新
            //手工更新本地缓存
            applicationCache.swapCache();           //调用swapCache时候,本地缓存立即刷新,不调用的话,本地缓存下次打开页面时候刷新
            // 重载画面
            location.reload();
        }
    }, true);
}

console.log("123456");
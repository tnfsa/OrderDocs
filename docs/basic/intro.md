# 訂餐系統

**「美訂美當」** 訂餐系統是由 [Milliax](https://sivir.pw/) 、 [Hsuan](https://hsuan.app)
共同製作完成，現階段以服務台南一中學生為主

# 網址

* [前端用戶介面](https://lunch.tnfsa.org/)
* [前端用戶介面 (備用)](https://lunch2.tnfsa.org/)
* [後端](https://lunchapi.hsuan.app/)

# 技術棧

採用前後端分離架構

* 前端
    * 負責與後端溝通，傳送資料
    * Framework: React.js
    * Websockets

* 後端
    * 主要商業邏輯，資料庫儲存
    * Framework: Laravel 8
    * API Authentication: Laravel Sanctum

# Open Source
目前前端的程式有開源，覺得不錯的可以去Star一下  
[Github](https://github.com/tnfsa/tnfsa.github.io)

# 文檔Build Script

```shell
yarn run docs:dev
```

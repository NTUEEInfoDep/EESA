# Roadmap to EESA Website
> Template for EESA Website.

## Author
- B06901104 趙崇皓

## Intro
Hey guys! This is the template for the EESA Website - an ongoing project that will mostly be maintained by the EESA Information Department. For code collaboration (present and future!) to go smoothly, some coding styles and folder organization rules should be strictly followed. If there are any problems, ask your 部長 or the one in charge, and they'll walk you through the code and guidelines. All in all, welcome on board!

## Guidelines
### The `src` folder
Should contain `assets` folder, `components` folder, and `routes` folder.
- `assets`: static assets such as images and fonts.
- `components`: Small React components that reside in a single page (associated with a route).
- `routes`: A single page that is associated with a unique route defined by **react-router**.

To sum it up, a React component in the `routes` directory contains several components in the `components` directory.

### Designing a component

For each component (either in `routes` or `components`), it should have its **own folder** structured as follows:

- `component-name`
    - `component-name.js`
    - `component-name.module.css`
    - `index.js`
    - `utils.js`

#### Reusing Components
- For example, the same template `Dept` can be used for any department. Its format should be similar.
- If customization is needed, use inheritance.

#### Fast composition
Go to `compose` directory.
```
python3 -m pip install .
compose <component-name>
```

### Use responsive/relative CSS
#### Prevent extensive hard-coding! (px)
- Use % rather than px. Take care of parent-children containers.
- If hard-coding is really necessary, use `vh` and `vw`.
    - Work-around for collapsing margins.

### 頁面設計
1. 先想內容。注意重複利用性。
2. 切版面
3. 靜態部分寫好。
4. 其他。

## Contents of the Website
- Header (Navigation bar)
    - 首頁
    - 最新消息、活動
    - 關於系學會
        - 簡介
        - 幹部一覽
    - 系學會各部門
        - 學術部
        - 資訊部
        - ...
    - 各系隊
        - 系羽 
        - 系籃
        - ...
    - 聯絡我們

### 系學會各部門頁面
- 部長：照片＋簡介
- 部員：列表式
- 負責內容
- 其他

### 系隊頁面
- 隊長：照片＋簡介
- 介紹
- 比賽紀錄
- 照片

## Problems
### `material-ui/Menu`
- Sizing of `MenuItem`
- Text overflow
### 照片

## References
### 其他系學會網站
可以參考看看有哪些內容。
- 國防醫：http://ndmcmsc.weebly.com
- 成大醫：https://reso.med.ncku.edu.tw
- 成大工管：http://www.iim.ncku.edu.tw/p/412-1138-19455.php?Lang=zh-tw
- 慈濟醫：http://www.medclub.tcu.edu.tw
- 馬偕醫：http://www.mmcmsa.com

## Others
- 版面設計可找poga討論
- 內容問昱翰土豪
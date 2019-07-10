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

### Reusing Components
- For example, the same template `Dept` can be used for any department. Its format should be similar.
- If customization is needed, use inheritance.

#### Fast composition
Go to `compose` directory.
```
python3 -m pip install .
compose <component-name>
```

### Use responsive CSS
- Use % rather than px.
- If hard-coding is really necessary, use `vh` and `vw`.

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

## Problems
### `material-ui/Menu`
- Sizing of `MenuItem`
- Text overflow
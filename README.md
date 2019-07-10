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

#### Fast composition
Install component generation script via `pip`.
```
python3 -m pip install compose
compose <component-name>
```
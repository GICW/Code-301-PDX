# 🦄 Gallery of Horns — Lab Checklist

## ✅ SETUP

- [ ] I created a React app using **Vite**
- [ ] I created a GitHub repo named **“Gallery of Horns”**
- [ ] I pushed my project to GitHub
- [ ] I created and worked on a **branch**
- [ ] I am committing my work often (ACP)

---

## ✅ PROJECT STRUCTURE

- [ ] My `App.jsx` imports:
  - [ ] `Header`
  - [ ] `Gallery`
  - [ ] `Footer`

- [ ] My `App` component renders:
  - [ ] `<Header />`
  - [ ] `<Gallery />`
  - [ ] `<Footer />`

---

## ✅ HEADER COMPONENT

- [ ] I created a `Header.jsx` file
- [ ] My Header contains:
  - [ ] an `<h1>` element
  - [ ] a clear title (ex: “Gallery of Horns”)

---

## ✅ FOOTER COMPONENT

- [ ] I created a `Footer.jsx` file
- [ ] My Footer contains:
  - [ ] my name as the author

---

## ✅ GALLERY COMPONENT

- [ ] I created a `Gallery.jsx` file
- [ ] My Gallery:
  - [ ] imports `HornedBeast`
  - [ ] renders **at least 2** `<HornedBeast />` components
  - [ ] passes props into each component:
    - [ ] `title`
    - [ ] `imageUrl`
    - [ ] `description`

---

## ✅ HORNED BEAST COMPONENT

- [ ] I created a `HornedBeast.jsx` file
- [ ] My component receives `props`
- [ ] It displays:
  - [ ] an `<h2>` with the title
  - [ ] an `<img>` with:
    - [ ] `src`
    - [ ] `alt`
    - [ ] `title`
  - [ ] a `<p>` with the description

---

## ⚠️ COMMON MISTAKES CHECK

- [ ] I used **correct JSX comments** → `{/* like this */}`
- [ ] My image **URL loads correctly**
- [ ] I used `props.title`, `props.imageUrl`, `props.description`
- [ ] All components are **exported and imported correctly**

---

## 🌟 STRETCH GOAL (OPTIONAL)

- [ ] I created an **array of data**
- [ ] I used `.map()` to loop through the data
- [ ] I rendered **3 HornedBeast components dynamically**

---

## 🎯 FINAL CHECK

- [ ] My app runs without errors (`npm run dev`)
- [ ] All components display on the page
- [ ] Props are working correctly (data shows up)
- [ ] My code is clean and organized

---

## 💡 BONUS (If You Finish Early)

- [ ] Try changing the data and see it update
- [ ] Add a third HornedBeast manually
- [ ] Experiment with styling (CSS)
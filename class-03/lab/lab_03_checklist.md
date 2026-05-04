# ✅ Lab 03 Checklist: Gallery of Horns (Modal + Search)

---

# ⏱️ TIME ESTIMATE (README REQUIRED)

- [ ] Record for each feature:
  - [ ] Feature name & number
  - [ ] Estimated time
  - [ ] Start time
  - [ ] Finish time
  - [ ] Actual time

---

# 🟢 FEATURE #1: Display a Modal

---

## 📥 Setup & Data Flow

- [ ] Import `data.json` into `App.jsx`
- [ ] Pass data into `Gallery` component

---

## 🔁 Render Beasts

- [ ] Use `.map()` in `Gallery.jsx`
- [ ] Render a `HornedBeast` for each item
- [ ] Pass props (title, image, description)

---

## 🧠 State Management (App.jsx)

- [ ] Create state:
  - [ ] `selectedBeast`
  - [ ] `showModal`

---

## 🔼 Create Function in App

- [ ] Function to:
  - [ ] Set selected beast
  - [ ] Show modal

---

## 🔽 Pass Function Down

- [ ] Pass function:
  - [ ] App → Gallery → HornedBeast

---

## 🖱️ Handle Click in Child

- [ ] Add `onClick` to image/component
- [ ] Call function from props

---

## 🧱 Create SelectedBeast Component

- [ ] Create `SelectedBeast.jsx`
- [ ] Import into `App.jsx`

---

## 🪟 Build Modal (React Bootstrap)

- [ ] Display:
  - [ ] Image
  - [ ] Title
  - [ ] Description

---

## 🔄 Connect Modal to State

- [ ] Modal `show` uses `showModal`
- [ ] Modal displays `selectedBeast`

---

## ❌ Close Modal

- [ ] Create close function in `App`
- [ ] Pass to `SelectedBeast`
- [ ] Connect to modal close button

---

## 🧪 Test Feature

- [ ] Click image → modal opens
- [ ] Correct image/details display
- [ ] Close button works
- [ ] No console errors

---

# 🌟 STRETCH GOAL: Fuzzy Search

---

## 🔍 Search Input

- [ ] Create input field
- [ ] Store value in state

---

## 🔄 Filter Data

- [ ] Use `.filter()` on data
- [ ] Filter by:
  - [ ] Title
  - [ ] Keyword (optional)

---

## 🧠 Regex (Fuzzy Search)

- [ ] Create regex pattern
- [ ] Update results as user types

---

## 🧪 Test Search

- [ ] Results update live
- [ ] Works with partial matches
- [ ] Handles empty input safely

---

# 📊 SUBMISSION CHECKLIST

---

## ✅ Feature Completion

- [ ] All required features are complete
- [ ] Stretch goal attempted (optional)

---

## ♿ Accessibility

- [ ] Run Lighthouse report
- [ ] Score **65+**
- [ ] Fix major issues

---

## 🔀 Git Workflow

- [ ] Work completed on a branch
- [ ] Changes committed
- [ ] Pull Request (PR) created to `main`

---

## 🌐 Deployment

- [ ] App deployed on Netlify
- [ ] Deployment link works

---

## 📤 Canvas Submission

- [ ] Submit PR link
- [ ] Submit Netlify link

---

## 📝 Reflection (Canvas Comment)

- [ ] One question about the lab
- [ ] One observation or “Ah-ha!” moment
- [ ] Total time spent on lab

---

# 🎯 CONCEPT CHECK

- [ ] Understand passing functions as props
- [ ] Understand child → parent communication
- [ ] Understand state lives in parent
- [ ] Understand click → state update → UI change
- [ ] Understand filtering data with `.filter()`
# ✅ Lab 02 Checklist: Passing Functions in Props (Gallery of Horns)

---

## 🧩 SETUP (Before You Start)

- [ x ] App runs without errors (`npm run dev`)
- [ x ] All components exist:
  - [ ] App.jsx
  - [ ] Gallery.jsx
  - [ ] HornedBeast.jsx
- [ x ] React Bootstrap is installed and imported

---

# 🟢 FEATURE #1: Display a Modal

---

## 📥 1. Import & Pass Data

- [ x ] Import `data.json` into `App.jsx`
- [ ] Store data in a variable or state
- [ ] Pass data to `Gallery` as props

---

## 🔁 2. Render All Beasts

- [ ] Use `.map()` in `Gallery.jsx`
- [ ] Render a `HornedBeast` for each item
- [ ] Pass props (title, image, description)

---

## 🧠 3. Add State in App

- [ ] Create state for:
  - [ ] `selectedBeast`
  - [ ] `showModal`

---

## 🔼 4. Create Function in App

- [ ] Create a function to:
  - [ ] Set selected beast
  - [ ] Show modal

---

## 🔽 5. Pass Function Down

- [ ] Pass function from `App` → `Gallery` → `HornedBeast`

---

## 🖱️ 6. Handle Click in Child

- [ ] Add `onClick` to image/component
- [ ] Call function from props

---

## 🧱 7. Create SelectedBeast Component

- [ ] Create `SelectedBeast.jsx`
- [ ] Import into `App.jsx`

---

## 🪟 8. Build the Modal

- [ ] Use React Bootstrap `Modal`
- [ ] Display:
  - [ ] Image
  - [ ] Title
  - [ ] Description

---

## 🔄 9. Connect Modal to State

- [ ] Modal `show` uses `showModal`
- [ ] Modal displays `selectedBeast` data

---

## ❌ 10. Add Close Function

- [ ] Create close function in `App`
- [ ] Pass to `SelectedBeast`
- [ ] Connect to modal close button

---

## 🧪 11. Test the Flow

- [ ] Click image → modal opens
- [ ] Correct image/details display
- [ ] Close button works
- [ ] No console errors

---

# 🌟 STRETCH GOAL: Fuzzy Search

---

## 🔍 12. Add Search Input

- [ ] Create input field
- [ ] Store value in state

---

## 🔄 13. Filter Data

- [ ] Use `.filter()` on data
- [ ] Match by title and/or keyword

---

## 🧠 14. Use Regex (Fuzzy Search)

- [ ] Create pattern from input
- [ ] Update results as user types

---

## 🧪 15. Test Search

- [ ] Results update live
- [ ] Works with partial matches
- [ ] Handles empty input safely

---

# 📊 FINAL REQUIREMENTS

---

## ♿ Accessibility

- [ ] Run Lighthouse report
- [ ] Score 65+
- [ ] Fix major issues

---

## 🔀 Git & Submission

- [ ] Create a branch
- [ ] Commit work
- [ ] Open Pull Request
- [ ] Deploy to Netlify

---

## 📝 README Updates

- [ ] Add time estimates
- [ ] Add actual time spent
- [ ] Include:
  - [ ] One question
  - [ ] One observation (“Ah-ha!” moment)
  - [ ] Total time spent

---

# 🎯 CONCEPT CHECK

- [ ] Understand passing functions as props
- [ ] Understand child → parent communication
- [ ] Understand parent controls state
- [ ] Understand click → state update → UI change
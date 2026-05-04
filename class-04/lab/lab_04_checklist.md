# ✅ Lab Checklist: Forms and Filter (Gallery of Horns)

## 🎯 Feature 1: Filter by Number of Horns

### 🧩 Setup
- [ ] Import and use the `Form` component from `react-bootstrap`
- [ ] Add a dropdown (`<Form.Select>` or `<select>`) to your app

---

### 🧠 State Management
- [ ] Create state to store selected number of horns
- [ ] Default state shows all beasts

---

### 🎛️ Form Functionality
- [ ] Add an event handler (`onChange`) to the dropdown
- [ ] Capture the selected value using `event.target.value`
- [ ] Update state when the user selects an option

---

### 🔍 Filtering Logic
- [ ] Use `.filter()` to filter the horned beasts data
- [ ] Show only beasts that match the selected number of horns
- [ ] If “All” is selected, show all beasts

---

### 🖼️ Rendering
- [ ] Pass filtered data to your Gallery component
- [ ] Ensure `.map()` displays the correct filtered results

---

### 🧪 Testing Your Feature
- [ ] Selecting different horn values updates displayed beasts
- [ ] “All” option resets the filter
- [ ] No console errors

---

## 🚀 Submission Checklist

### 🧾 Code & Git
- [ ] All feature tasks are complete
- [ ] Code is clean and readable
- [ ] Create a Pull Request (PR) to `main`
- [ ] PR merges cleanly (no conflicts)

---

### 🌐 Deployment
- [ ] App successfully deployed to Netlify
- [ ] Latest changes are visible in deployed app

---

### ♿ Accessibility
- [ ] Run Lighthouse Accessibility report
- [ ] Score is **65 or higher**
- [ ] Fix any major issues

---

### 📥 Canvas Submission
- [ ] Submit link to your PR
- [ ] Include deployed Netlify link
- [ ] Answer the following:

#### 💭 Reflection
- [ ] One question you still have
- [ ] One observation or “Ah-hah!” moment
- [ ] Time spent on this assignment

---

## 🔑 Reminder

- Forms capture user input  
- State stores the selected value  
- `.filter()` updates what is displayed  

👉 “User selects → state updates → filter runs → UI updates”
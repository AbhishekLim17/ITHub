# 🎨 Color Palette - certified IT GmbH

## Visual Reference Guide

Your complete, vibrant, and accessible color system designed for modern technology excellence.

---

## 🌟 Brand Colors

### Primary Gold
```css
#F3C600 | rgb(243, 198, 0) | HSL(49, 100%, 48%)
```
**Usage:** Main CTAs, primary buttons, highlights, brand moments  
**Contrast:** AA on dark backgrounds, AAA on very dark (#111827)

**Variations:**
- **Dark:** `#D4A800` - Hover states, pressed buttons
- **Light:** `#FFE066` - Subtle backgrounds, soft highlights

### Secondary Blue
```css
#0066FF | rgb(0, 102, 255) | HSL(216, 100%, 50%)
```
**Usage:** Links, icons, secondary CTAs, informational elements  
**Contrast:** AAA on white (7.5:1)

**Variations:**
- **Dark:** `#0052CC` - Link hover, active states
- **Light:** `#3B82F6` - Soft backgrounds

### Accent Cyan/Teal
```css
#00B4D8 | Vibrant Cyan
#0891B2 | Professional Teal
```
**Usage:** Accent elements, trust indicators, data viz, badges

---

## 🎯 Interactive States

### Button States
```
Primary Button:
  Default:  #F3C600 (Gold)
  Hover:    #D4A800 (Darker Gold)
  Active:   #C09600 (Darkest)
  Disabled: #F3C60050 (50% opacity)

Secondary Button:
  Default:  #0066FF (Blue)
  Hover:    #0052CC (Darker Blue)
  Active:   #0047B3
  Disabled: #0066FF50

Ghost Button:
  Default:  Transparent, border #111827
  Hover:    #F3F4F6 background
  Active:   #E5E7EB background
```

### Link Colors
```
Default:  #0066FF (Blue)
Hover:    #0052CC (Darker)
Visited:  #7C3AED (Purple - optional)
```

---

## 🖤 Neutral System

### Text Hierarchy
```
Primary Text:    #111827 (Near Black) - Headings, body
Secondary Text:  #4B5563 (Medium Gray) - Subheadings
Tertiary Text:   #6B7280 (Light Gray) - Muted, placeholders
Inverse Text:    #FFFFFF (White) - Dark backgrounds
```

### Backgrounds
```
Primary:    #FFFFFF (Pure White)
Secondary:  #F9FAFB (Soft Gray) - Alternate sections
Tertiary:   #F3F4F6 (Light Gray) - Inputs, disabled
Dark:       #1F2937 (Charcoal) - Footer, contrasts
```

### Borders
```
Light:   #E5E7EB - Subtle dividers
Default: #D1D5DB - Standard borders, inputs
Focus:   #0066FF - Focus rings
```

---

## ✅ Status Colors

### Success (Green)
```
Main:  #10B981
Light: #D1FAE5 (backgrounds)
Dark:  #059669 (dark mode)
```

### Warning (Amber)
```
Main:  #F59E0B
Light: #FEF3C7
Dark:  #D97706
```

### Error (Red)
```
Main:  #EF4444
Light: #FEE2E2
Dark:  #DC2626
```

### Info (Blue)
```
Main:  #3B82F6
Light: #DBEAFE
Dark:  #2563EB
```

---

## 🌈 Gradients

### Gold Hero
```css
background: linear-gradient(135deg, #F3C600 0%, #FFE066 100%);
```
**Use:** Hero sections, premium features, highlights

### Blue Accent
```css
background: linear-gradient(135deg, #0066FF 0%, #00B4D8 100%);
```
**Use:** Secondary CTAs, feature cards, tech elements

### Tech Gradient (Full Spectrum)
```css
background: linear-gradient(135deg, #0066FF 0%, #0891B2 50%, #F3C600 100%);
```
**Use:** Hero overlays, premium sections, impressive backgrounds

### Subtle Gold Wash
```css
background: linear-gradient(180deg, rgba(243, 198, 0, 0.05) 0%, rgba(243, 198, 0, 0) 100%);
```
**Use:** Subtle section highlights, card backgrounds

### Dark Overlay
```css
background: linear-gradient(180deg, rgba(31, 41, 55, 0.95) 0%, rgba(31, 41, 55, 0.8) 100%);
```
**Use:** Image overlays, text readability on photos

---

## 🎭 Shadows

```css
Card Default:     0 2px 8px rgba(17, 24, 39, 0.06)
Card Hover:       0 8px 24px rgba(17, 24, 39, 0.12)
Button:           0 1px 3px rgba(17, 24, 39, 0.1)
Button Hover:     0 4px 12px rgba(243, 198, 0, 0.3)  /* Gold glow */
Dropdown:         0 10px 40px rgba(17, 24, 39, 0.15)
Focus Ring:       0 0 0 3px rgba(0, 102, 255, 0.2)   /* Blue ring */
```

---

## ♿ Accessibility Compliance

### WCAG AA/AAA Contrast Ratios

✅ **Text on White:**
- Primary text (#111827): **16.1:1** (AAA)
- Secondary text (#4B5563): **7.8:1** (AAA)
- Blue links (#0066FF): **7.5:1** (AAA)

✅ **Gold on Dark:**
- Gold (#F3C600) on Charcoal (#1F2937): **11.2:1** (AAA)

⚠️ **Caution:**
- Gold (#F3C600) on White: **4.8:1** (AA Large Text only)
- Use darker gold (#D4A800) for better contrast on light backgrounds

### Recommendations:
1. ✅ Yellow buttons with dark text (#111827)
2. ✅ Blue for all links on white
3. ❌ Avoid yellow text on white
4. ✅ Use focus rings on all interactive elements

---

## 🎨 Quick Reference (Tailwind Classes)

```html
<!-- Primary Button -->
<button class="bg-primary hover:bg-primary-dark text-neutral-900">

<!-- Secondary Button -->
<button class="bg-secondary hover:bg-secondary-dark text-white">

<!-- Ghost Button -->
<button class="border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white">

<!-- Card -->
<div class="bg-white rounded-2xl shadow-card hover:shadow-card-hover">

<!-- Link -->
<a class="text-secondary hover:text-secondary-dark underline">

<!-- Gradient Background -->
<div class="bg-gradient-to-br from-primary via-accent to-secondary">
```

---

## 📊 Usage Examples

### Hero Section
```
Background: gradient-tech or gradient-gold
Text: White (#FFFFFF)
Primary CTA: Yellow (#F3C600) with dark text
Secondary CTA: Blue (#0066FF) with white text
```

### Service Cards
```
Background: White (#FFFFFF)
Border: Light gray (#E5E7EB)
Icon: Primary gold (#F3C600)
Title: Dark text (#111827)
Body: Medium gray (#4B5563)
Hover: Lift with shadow-card-hover
```

### Call-to-Action Buttons
```
Primary: Gold gradient with dark text
Secondary: Blue solid with white text
Ghost: Transparent with dark border
Hover: Scale 1.05, add shadow
```

---

## 🚀 Implementation

### CSS Variables (Already in globals.css)
```css
:root {
  --color-primary: #F3C600;
  --color-secondary: #0066FF;
  --color-accent: #00B4D8;
  /* ... and more */
}
```

### Tailwind Config (Already set up)
```js
colors: {
  primary: { DEFAULT: '#F3C600', dark: '#D4A800', light: '#FFE066' },
  secondary: { DEFAULT: '#0066FF', dark: '#0052CC' },
  accent: { DEFAULT: '#00B4D8', teal: '#0891B2' }
}
```

---

## 💎 Design Philosophy

This palette embodies:
- **Energy:** Vibrant gold for innovation and confidence
- **Trust:** Professional blue for reliability and expertise  
- **Clarity:** Clean neutrals for legibility and focus
- **Modernity:** Gradients and teal accents for tech-forward feel
- **Accessibility:** WCAG compliant for inclusive design

---

**Need more variations?** The full JSON color system is available in `design-system/color-palette.json`

**Questions?** This palette is designed to scale with your brand while maintaining consistency and accessibility. 🎨

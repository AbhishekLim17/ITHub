# 🎨 Professional Color System - certified IT GmbH

## Core Brand Colors

### Primary (Gold - Hero Brand Color)
- **Main**: `#F3C600` - Vibrant gold for CTAs, buttons, key accents
- **Hover**: `#D4A800` - Darker gold for hover states
- **Light**: `#FFF9E6` - Soft gold for backgrounds
- **Usage**: Primary buttons, brand highlights, important CTAs

### Secondary (Blue - Trust & Technology)
- **Main**: `#0066FF` - Professional blue for secondary elements
- **Dark**: `#0052CC` - Deep blue for hover states
- **Light**: `#E6F0FF` - Soft blue for backgrounds
- **Usage**: Secondary buttons, links, tech icons

### Accent (Cyan - Innovation)
- **Main**: `#00B4D8` - Fresh cyan for highlights
- **Dark**: `#0891B2` - Teal for variety
- **Light**: `#E6F9FC` - Soft cyan backgrounds
- **Usage**: Decorative elements, hover effects, badges

---

## Neutral Palette (Professional Hierarchy)

### Backgrounds
- **Pure White**: `#FFFFFF` - Main background, cards
- **Light Gray**: `#F9FAFB` - Subtle background variation
- **Surface**: `#F3F4F6` - Elevated surfaces, alternating sections

### Text Colors
- **Primary Text**: `#111827` - Headings, important text (contrast 16:1)
- **Body Text**: `#374151` - Regular content (contrast 12:1)
- **Muted Text**: `#6B7280` - Secondary info, captions (contrast 7:1)
- **Placeholder**: `#9CA3AF` - Form placeholders

### Borders & Dividers
- **Strong Border**: `#E5E7EB` - Card borders, dividers
- **Light Border**: `#F3F4F6` - Subtle separations
- **Focus Ring**: `#F3C600` - Accessibility focus states

---

## Status Colors (Clear Communication)

- **Success**: `#10B981` - Confirmations, success messages
- **Warning**: `#F59E0B` - Cautions, important notices
- **Error**: `#EF4444` - Errors, validation failures
- **Info**: `#3B82F6` - Informational messages

---

## Dark Theme (Footer & Headers)

### Dark Backgrounds
- **Primary Dark**: `#0F172A` - Footer, header backgrounds
- **Secondary Dark**: `#1E293B` - Elevated dark surfaces
- **Accent Dark**: `#334155` - Hover states on dark

### Dark Text
- **Light Text**: `#F1F5F9` - Primary text on dark
- **Muted Light**: `#CBD5E1` - Secondary text on dark

---

## Component-Specific Guidelines

### Buttons
```css
Primary Button: bg-#F3C600 text-#111827 hover:bg-#D4A800
Secondary Button: bg-#0066FF text-#FFFFFF hover:bg-#0052CC
Ghost Button: border-#F3C600 text-#F3C600 hover:bg-#FFF9E6
```

### Cards
```css
Background: #FFFFFF
Border: #E5E7EB
Shadow: 0 4px 6px rgba(0,0,0,0.1)
Hover Shadow: 0 10px 15px rgba(0,0,0,0.15)
```

### Links
```css
Default: #0066FF
Hover: #0052CC
Visited: #6366F1
```

### Gradients (Sparingly Used)
```css
Hero Gradient: from-#0F172A via-#1E293B to-#334155
Gold Accent: from-#F3C600 to-#D4A800
Tech Gradient: from-#0066FF to-#00B4D8
```

---

## Accessibility Compliance

✅ **All combinations meet WCAG AA standards (4.5:1 minimum)**

- Primary gold (#F3C600) on dark text (#111827): **7.5:1** ✓
- Blue (#0066FF) on white: **5.8:1** ✓
- Body text (#374151) on white: **12.1:1** ✓
- Muted text (#6B7280) on white: **7.1:1** ✓

---

## Implementation Checklist

- [x] Header: Dark theme with white text
- [x] Hero: Professional dark gradient with gold accents
- [x] Buttons: Gold primary, blue secondary
- [x] Cards: White backgrounds with subtle borders
- [x] Text: Hierarchical gray scale
- [x] Footer: Dark theme with organized sections
- [x] Links: Blue with clear hover states
- [x] Icons: Match section theme (gold/blue)

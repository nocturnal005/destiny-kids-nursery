# Destiny Kids Nursery — Animation Playbook

> Quick-reference for every animation used across the site.  
> All animations respect `prefers-reduced-motion: reduce`.

---

## 1. CSS Keyframe Definitions

```css
/* ── Fade Variants ─────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes fadeRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* ── Scale & Pop ───────────────────────────── */
@keyframes scalePop {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes bounceIn {
  0%   { opacity: 0; transform: scale(0.3); }
  50%  { opacity: 1; transform: scale(1.08); }
  70%  { transform: scale(0.95); }
  100% { transform: scale(1); }
}

/* ── Floating / Ambient ────────────────────── */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}

@keyframes floatRotate {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-10px) rotate(3deg); }
}

/* ── Blob Morphing ─────────────────────────── */
@keyframes blobMorph {
  0%, 100% { border-radius: 30% 70% 60% 40% / 50% 30% 70% 50%; }
  25%      { border-radius: 50% 50% 70% 30% / 40% 60% 40% 60%; }
  50%      { border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%; }
  75%      { border-radius: 60% 40% 50% 50% / 30% 70% 50% 50%; }
}

/* ── Gradient Shift ────────────────────────── */
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ── Pulse ──────────────────────────────────── */
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(107, 76, 154, 0.3); }
  50%      { box-shadow: 0 0 0 12px rgba(107, 76, 154, 0); }
}

/* ── Typing Cursor ─────────────────────────── */
@keyframes blink {
  50% { border-color: transparent; }
}

/* ── Progress Fill ─────────────────────────── */
@keyframes progressFill {
  from { width: 0; }
  to   { width: var(--fill-width, 100%); }
}

/* ── Underline Grow ────────────────────────── */
@keyframes underlineGrow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
```

---

## 2. Scroll Reveal System

### How it works
1. Elements start with `.reveal` class (hidden state via CSS)
2. `IntersectionObserver` watches `.reveal` elements
3. When element enters viewport (threshold: 0.15), `.active` is added
4. CSS transitions handle the animation

### CSS Classes

```css
/* Base hidden state */
.reveal {
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Direction variants */
.reveal--up    { transform: translateY(30px); }
.reveal--down  { transform: translateY(-30px); }
.reveal--left  { transform: translateX(-40px); }
.reveal--right { transform: translateX(40px); }
.reveal--scale { transform: scale(0.85); }

/* Active state (visible) */
.reveal.active {
  opacity: 1;
  transform: translate(0) scale(1);
}

/* Stagger children (use on parent grid) */
.stagger-children .reveal:nth-child(1) { transition-delay: 0ms; }
.stagger-children .reveal:nth-child(2) { transition-delay: 100ms; }
.stagger-children .reveal:nth-child(3) { transition-delay: 200ms; }
.stagger-children .reveal:nth-child(4) { transition-delay: 300ms; }
.stagger-children .reveal:nth-child(5) { transition-delay: 400ms; }
.stagger-children .reveal:nth-child(6) { transition-delay: 500ms; }
```

### JavaScript Observer

```javascript
const scrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', scrollReveal);
```

---

## 3. Hover Interaction Recipes

### Button Lift
```css
.btn {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(107, 76, 154, 0.25);
}
.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(107, 76, 154, 0.2);
}
```

### Card Lift & Glow
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 12px 32px rgba(107, 76, 154, 0.12),
    0 4px 8px rgba(107, 76, 154, 0.08);
}
```

### Image Ken Burns
```css
.gallery-item img {
  transition: transform 0.6s ease;
}
.gallery-item:hover img {
  transform: scale(1.08);
}
```

### Nav Underline Grow
```css
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease, left 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
  left: 0;
}
```

---

## 4. Interactive Component Animations

### Accordion Expand
```css
.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.accordion-item.open .accordion-body {
  max-height: 500px; /* or use JS to set exact height */
}
.accordion-toggle svg {
  transition: transform 0.3s ease;
}
.accordion-item.open .accordion-toggle svg {
  transform: rotate(180deg);
}
```

### Tab Content Swap
```css
.tab-panel {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  pointer-events: none;
}
.tab-panel.active {
  opacity: 1;
  transform: translateY(0);
  position: relative;
  pointer-events: auto;
}
```

### Counter Animation (JS)
```javascript
const animateCounter = (el, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);
  const tick = () => {
    start += increment;
    if (start >= target) {
      el.textContent = target;
      return;
    }
    el.textContent = Math.floor(start);
    requestAnimationFrame(tick);
  };
  tick();
};
```

---

## 5. Accessibility: Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
```

---

## 6. Performance Guidelines

- **Use CSS transforms only** — `transform` and `opacity` are GPU-accelerated
- **Never animate `width`, `height`, `top`, `left`** — causes layout recalculations
- **Use `will-change` sparingly** — only on elements that actually animate
- **Lazy-load below-the-fold animations** — don't initialize carousels until visible
- **Cap GSAP ScrollTriggers** — batch into groups, don't create one per element
- **Test at 60fps** — use Chrome DevTools Performance tab to verify no jank

---

*This playbook is the developer reference during the build phase. Keep it updated as new animations are added.*

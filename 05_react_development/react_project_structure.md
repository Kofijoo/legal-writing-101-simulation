# React Project Structure - Legal Writing 101 Simulation

## Project Setup Commands
```bash
npx create-react-app legal-writing-101-simulation
cd legal-writing-101-simulation
npm install react-dnd react-dnd-html5-backend react-router-dom
```

## Folder Structure
```
src/
├── components/
│   ├── common/
│   │   ├── ProgressBar.js
│   │   ├── NavigationButtons.js
│   │   └── AudioPlayer.js
│   ├── scenes/
│   │   ├── Scene1ProblemBrief.js
│   │   ├── Scene2Personas.js
│   │   ├── Scene3Framework.js
│   │   ├── Scene4Modality.js
│   │   ├── Scene5CourseBuilder.js
│   │   ├── Scene6Stakeholders.js
│   │   ├── Scene7Analytics.js
│   │   └── Scene8Completion.js
│   └── ui/
│       ├── CharacterCard.js
│       ├── SliderControl.js
│       ├── DragDropBuilder.js
│       └── Dashboard.js
├── assets/
│   ├── images/
│   │   ├── backgrounds/
│   │   ├── characters/
│   │   └── ui/
│   ├── audio/
│   │   ├── narration/
│   │   └── effects/
│   └── videos/
├── data/
│   ├── characters.js
│   ├── components.js
│   └── scenarios.js
├── hooks/
│   ├── useSimulationState.js
│   └── useAudio.js
├── utils/
│   ├── calculations.js
│   └── validation.js
└── styles/
    ├── globals.css
    ├── scenes.css
    └── components.css
```

## Critical Path Assets (Create These First)

### Phase 1: Essential Characters (Start Here)
**Priority 1 - Create immediately:**

1. **Sarah Kim (Learning Director)**
   - File: `sarah-kim-headshot.png`
   - Size: 400x400px
   - Format: PNG with transparent background
   - Style: Professional headshot, navy blazer, confident expression
   - Usage: Scene 1, 6, 8 (appears in 3 scenes)

2. **ALEX AI Assistant Avatar**
   - File: `alex-avatar.png`
   - Size: 300x300px
   - Format: PNG with transparent background
   - Style: Modern, friendly AI icon, blue color scheme (#3B82F6)
   - Usage: Scenes 2, 3, 4, 5, 7 (appears in 5 scenes)

### Phase 1: Essential Backgrounds
**Priority 2 - Create after characters:**

3. **Conference Room Background**
   - File: `conference-room-bg.jpg`
   - Size: 1920x1080px
   - Format: JPG
   - Style: Modern JUS conference room, large screen, professional lighting
   - Usage: Scene 1, 8 (opening and closing scenes)

4. **Digital Workspace Background**
   - File: `digital-workspace-bg.jpg`
   - Size: 1920x1080px
   - Format: JPG
   - Style: Clean, modern workspace with multiple monitors
   - Usage: Scenes 3, 4, 5 (framework, modality, course builder)

## Asset Creation Order & Timeline

### Week 1: Core Assets (Build React structure in parallel)
**Day 1-2:**
- Sarah Kim headshot
- ALEX avatar
- Conference room background

**Day 3-4:**
- Digital workspace background
- Basic UI components (buttons, progress bar)

**Day 5-7:**
- Persona headshots (Maya, Robert, Patricia)
- Framework posters (ADDIE, SAM, LEC)

### Week 2: Interactive Elements
**Day 8-10:**
- Course component icons (8 icons)
- Stakeholder headshots (David, Lisa)
- Video conference background

**Day 11-14:**
- Analytics dashboard mockup
- Drag-and-drop UI elements
- Audio narration (Sarah, ALEX)

## Immediate Action Items for You

### Create These 4 Assets First (This Week):

1. **Sarah Kim Headshot**
   - Professional woman, 38 years old
   - Navy blazer or business suit
   - Confident, approachable expression
   - Clean background (will be made transparent)
   - High resolution, good lighting

2. **ALEX Avatar**
   - Modern AI assistant icon
   - Geometric, friendly design
   - Blue color scheme (#3B82F6)
   - Clean, simple design
   - Works at small sizes (100px)

3. **Conference Room Background**
   - Modern corporate conference room
   - Large presentation screen visible
   - Professional lighting
   - Neutral colors (grays, whites)
   - Clean, uncluttered

4. **Digital Workspace Background**
   - Modern tech workspace
   - Multiple monitors/screens
   - Clean, organized
   - Cool color palette
   - Tech-forward aesthetic

## Asset Specifications

### Image Requirements
- **Characters:** 400x400px, PNG, transparent background
- **Backgrounds:** 1920x1080px, JPG, optimized for web
- **UI Elements:** Various sizes, PNG, transparent where needed
- **Color Profile:** sRGB
- **Compression:** Optimized for web delivery

### Style Consistency
- **Lighting:** Consistent across all character shots
- **Color Temperature:** 5500K for professional look
- **Brand Colors:** JUS Blue (#1E3A8A), Professional Gray (#6B7280)
- **Typography:** Montserrat for headers, Open Sans for body

## React Development Priority

While you create assets, I'll build:

1. **Basic React structure** with routing
2. **Scene 1 component** (uses Sarah Kim + conference room)
3. **State management system** for all variables
4. **Navigation system** between scenes
5. **Asset integration system** (easy to swap in your assets)

**Start with Sarah Kim headshot and conference room background.** These unlock Scene 1 development immediately.

Which asset will you create first?
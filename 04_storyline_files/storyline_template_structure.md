# Storyline Template Structure - Legal Writing 101 Simulation

## Project Settings

### Storyline 360 Configuration
**Project Name:** Legal_Writing_101_Simulation
**Slide Size:** 1920 x 1080 (16:9 widescreen)
**Player Template:** Modern player with minimal chrome
**Navigation:** Restricted (learner cannot skip ahead)
**Menu:** Disabled (linear progression required)

### Publishing Settings
**Output Format:** HTML5 with Flash fallback
**SCORM Version:** SCORM 1.2
**LMS Reporting:** Completion and score tracking
**Mobile Support:** Responsive design enabled
**Offline Playback:** Enabled for downloaded content

## Scene Structure

### Scene 1: Problem Brief
**Slides:** 1.1 - 1.4 (4 slides)
**Duration:** 60 seconds
**Key Slide:** 1.4 (Interactive problem selection)

**Slide Layout:**
- 1.1: Title slide with Sarah Kim introduction
- 1.2: Problem statement with data visualization
- 1.3: Current course performance metrics
- 1.4: Interactive problem identification checklist

### Scene 2: Learner Personas
**Slides:** 2.1 - 2.6 (6 slides)
**Duration:** 90 seconds
**Key Slides:** 2.2-2.4 (Persona videos), 2.6 (Selection)

**Slide Layout:**
- 2.1: Persona introduction overview
- 2.2: Maya Chen video and profile
- 2.3: Robert Martinez video and profile
- 2.4: Patricia Williams video and profile
- 2.5: ALEX analysis and recommendations
- 2.6: Persona selection interface

### Scene 3: Design Framework
**Slides:** 3.1 - 3.5 (5 slides)
**Duration:** 90 seconds
**Key Slide:** 3.5 (Framework selection)

**Slide Layout:**
- 3.1: Framework introduction
- 3.2: ADDIE framework explanation
- 3.3: SAM framework explanation
- 3.4: Learning Experience Canvas explanation
- 3.5: Framework selection interface

### Scene 4: Blended Modality
**Slides:** 4.1 - 4.5 (5 slides)
**Duration:** 90 seconds
**Key Slide:** 4.5 (Interactive sliders)

**Slide Layout:**
- 4.1: Modality overview
- 4.2: Workshop + pre-work option
- 4.3: Digital microlearning option
- 4.4: Hybrid approach option
- 4.5: Trade-off sliders interface

### Scene 5: Course Prototype
**Slides:** 5.1 - 5.5 (5 slides)
**Duration:** 120 seconds
**Key Slides:** 5.2-5.4 (Drag-and-drop builder)

**Slide Layout:**
- 5.1: Course builder introduction
- 5.2: Component library display
- 5.3: Timeline builder interface
- 5.4: Real-time effectiveness scoring
- 5.5: ALEX suggestions and feedback

### Scene 6: Stakeholder Review
**Slides:** 6.1 - 6.6 (6 slides)
**Duration:** 120 seconds
**Key Slide:** 6.5 (Concern resolution)

**Slide Layout:**
- 6.1: Virtual meeting setup
- 6.2: Sarah Kim feedback
- 6.3: David Thompson feedback
- 6.4: Lisa Park feedback
- 6.5: Interactive concern resolution
- 6.6: Revised design confirmation

### Scene 7: Analytics Dashboard
**Slides:** 7.1 - 7.6 (6 slides)
**Duration:** 60 seconds
**Key Slides:** 7.2-7.5 (Dashboard components)

**Slide Layout:**
- 7.1: Dashboard loading animation
- 7.2: Key metrics overview
- 7.3: Engagement analytics
- 7.4: Learning effectiveness data
- 7.5: ROI calculator
- 7.6: Reflection questions

### Scene 8: Wrap-up
**Slides:** 8.1 - 8.5 (5 slides)
**Duration:** 30 seconds
**Key Slide:** 8.4 (Replay options)

**Slide Layout:**
- 8.1: Return to conference room
- 8.2: Achievement summary
- 8.3: Competency demonstration
- 8.4: Replay options menu
- 8.5: Resource downloads

## Variable Structure

### Core Tracking Variables
```javascript
// Scene 1 Variables
var problem_focus = "";
var engagement_priority = false;
var practical_focus = false;

// Scene 2 Variables
var primary_persona = "";
var design_priority = "";
var content_approach = "";

// Scene 3 Variables
var design_framework = "";
var methodology_focus = "";
var tools_available = [];

// Scene 4 Variables
var modality_choice = "";
var time_investment = 5;
var engagement_priority_level = 5;
var scalability_need = 5;

// Scene 5 Variables
var course_structure = [];
var effectiveness_score = 0;
var engagement_score = 0;
var learning_score = 0;
var application_score = 0;

// Scene 6 Variables
var sarah_satisfaction = 0;
var david_satisfaction = 0;
var lisa_satisfaction = 0;
var stakeholder_satisfaction = 0;

// Scene 7 Variables
var success_metrics = [];
var reflection_responses = [];
var data_interpretation_score = 0;

// Scene 8 Variables
var completion_status = false;
var final_score = 0;
var replay_interest = "";
```

### Calculated Variables
```javascript
// Dynamic calculations
var overall_effectiveness = 0;
var cost_per_learner = 285;
var projected_completion = 78;
var writing_improvement = 34;
var simulation_time = 0;
```

### Branching Logic Variables
```javascript
// Control flow variables
var scene_1_complete = false;
var scene_2_complete = false;
var scene_3_complete = false;
var scene_4_complete = false;
var scene_5_complete = false;
var scene_6_complete = false;
var scene_7_complete = false;
var scene_8_complete = false;

// Replay tracking
var first_completion = false;
var replay_count = 0;
var replay_type = "";
```

## Master Slide Templates

### Template 1: Standard Content Slide
**Layout:**
- Header area: Scene title and progress indicator
- Main content area: 1600x800px safe zone
- Character area: 400x400px (bottom right)
- Navigation: Previous/Next buttons (when appropriate)

### Template 2: Interactive Slide
**Layout:**
- Header area: Scene title and instructions
- Interaction area: 1400x700px centered
- Feedback area: 400x200px (bottom)
- Help button: Top right corner

### Template 3: Video Slide
**Layout:**
- Video player: 1280x720px centered
- Controls: Standard video controls
- Character info: Side panel 400px width
- Progress tracking: Completion indicator

### Template 4: Dashboard Slide
**Layout:**
- Full screen: 1920x1080px
- Multiple data panels: Grid layout
- Interactive elements: Hover and click zones
- Navigation: Breadcrumb style

## Layer Structure Standards

### Base Layer
- Background image/color
- Static text elements
- Navigation buttons
- Progress indicators

### Content Layer
- Main content elements
- Character images
- Interactive components
- Feedback text

### Overlay Layer
- Modal dialogs
- Help content
- Loading states
- Error messages

### Audio Layer
- Narration tracks
- Background music
- Sound effects
- Audio controls

## Trigger Logic Framework

### Scene Progression Triggers
```javascript
// Scene completion trigger
When user clicks Submit button
    If required_interactions_complete == true
        Set scene_X_complete = true
        Jump to next scene
    Else
        Show validation_message
        Stay on current slide

// Variable tracking trigger
When user makes selection
    Set corresponding_variable = selection_value
    Update dependent_calculations
    Show real_time_feedback
```

### Branching Triggers
```javascript
// Persona-based branching
When user selects persona
    If primary_persona == "maya_associate"
        Show mobile_friendly_options = true
        Set design_priority = "practical_application"
    Else if primary_persona == "robert_partner"
        Show efficiency_options = true
        Set design_priority = "roi_focused"
    Else if primary_persona == "patricia_judge"
        Show standards_options = true
        Set design_priority = "professional_rigor"
```

### Scoring Triggers
```javascript
// Real-time effectiveness calculation
When course_structure changes
    Calculate engagement_score = sum(component.engagement_values)
    Calculate learning_score = sum(component.learning_values)
    Calculate application_score = sum(component.application_values)
    Set overall_effectiveness = (engagement + learning + application) / 3
    Update effectiveness_display
```

## Audio Integration Plan

### Narration Timing
- Auto-advance slides: Narration length + 2 seconds
- Manual advance slides: Narration plays, user controls progression
- Interactive slides: Narration plays once, repeatable via audio button

### Audio File Organization
```
Audio/
├── Narration/
│   ├── Scene_01/
│   │   ├── NARR_01_Sarah_Opening.mp3
│   │   └── NARR_01_Instructions.mp3
│   ├── Scene_02/
│   │   ├── NARR_02_Persona_Intro.mp3
│   │   ├── NARR_03_Maya_Video.mp3
│   │   ├── NARR_04_Robert_Video.mp3
│   │   └── NARR_05_Patricia_Video.mp3
│   └── [Additional scenes...]
├── Background/
│   ├── AUDIO_01_Office_Ambiance.mp3
│   ├── AUDIO_02_Tech_Workspace.mp3
│   └── AUDIO_03_Achievement_Music.mp3
└── Effects/
    ├── SFX_Button_Click.mp3
    ├── SFX_Success_Chime.mp3
    └── SFX_Error_Alert.mp3
```

## Quality Assurance Framework

### Testing Checklist
- [ ] All slides load within 3 seconds
- [ ] Variables track correctly across scenes
- [ ] Branching logic functions as designed
- [ ] Audio syncs with visual elements
- [ ] Interactive elements respond properly
- [ ] Mobile responsiveness works
- [ ] SCORM package exports successfully
- [ ] Accessibility features function

### Browser Compatibility
- Chrome 90+ (primary)
- Firefox 88+ (secondary)
- Safari 14+ (secondary)
- Edge 90+ (secondary)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### Performance Standards
- Initial load time: <5 seconds
- Scene transition time: <2 seconds
- Interactive response time: <1 second
- Total file size: <50MB
- Memory usage: <200MB peak

## Development Workflow

### Phase 1: Template Setup
1. Create Storyline project with settings
2. Build master slide templates
3. Set up variable structure
4. Create basic navigation triggers

### Phase 2: Content Integration
1. Add placeholder content to all slides
2. Implement basic interactions
3. Set up audio integration points
4. Test core functionality

### Phase 3: Asset Integration
1. Replace placeholders with final assets
2. Implement advanced interactions
3. Add audio narration and effects
4. Refine visual design

### Phase 4: Testing and Polish
1. Comprehensive functionality testing
2. Cross-browser compatibility testing
3. Accessibility compliance verification
4. Performance optimization
5. Final SCORM package creation
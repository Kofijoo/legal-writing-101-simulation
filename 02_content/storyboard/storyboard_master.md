# Master Storyboard - Legal Writing 101 Simulation

## Project Overview
**Total Duration:** 8-10 minutes
**Scenes:** 8 interactive scenes
**Platform:** Articulate Storyline 360
**Navigation:** Linear with branching consequences

## Scene Summary

| Scene | Title | Duration | Key Interaction | Variables Set |
|-------|-------|----------|----------------|---------------|
| 1 | Problem Brief | 1 min | Problem identification | problem_focus |
| 2 | Learner Personas | 1.5 min | Persona selection | primary_persona |
| 3 | Design Framework | 1.5 min | Framework choice | design_framework |
| 4 | Blended Modality | 1.5 min | Delivery method | modality_choice |
| 5 | Course Prototype | 2 min | Drag-and-drop builder | course_structure |
| 6 | Stakeholder Review | 2 min | Feedback incorporation | stakeholder_satisfaction |
| 7 | Analytics Dashboard | 1 min | Data interpretation | success_metrics |
| 8 | Wrap-up | 0.5 min | Summary and replay | completion_status |

## Visual Design Standards

### Color Palette
- **Primary:** JUS Blue (#1E3A8A)
- **Secondary:** Professional Gray (#6B7280)
- **Accent:** Success Green (#10B981)
- **Warning:** Amber (#F59E0B)
- **Error:** Red (#EF4444)

### Typography
- **Headers:** Montserrat Bold
- **Body:** Open Sans Regular
- **UI Elements:** Inter Medium

### Character Design
- **Style:** Professional photography with illustrated overlays
- **Consistency:** Same lighting and background treatment
- **Accessibility:** High contrast, clear facial features

## Technical Specifications

### Storyline Variables
```
// Core tracking variables
var problem_focus = "";
var primary_persona = "";
var design_framework = "";
var modality_choice = "";
var course_structure = [];
var stakeholder_satisfaction = 0;
var success_metrics = {};
var completion_status = false;

// Scoring variables
var effectiveness_score = 0;
var engagement_score = 0;
var feasibility_score = 0;
```

### Branching Logic Rules
1. **Persona → Modality:** Maya enables mobile options, Robert prioritizes efficiency, Patricia requires rigor
2. **Framework → Tools:** ADDIE shows analysis tools, SAM enables rapid prototyping, LEC offers co-creation
3. **Modality → Stakeholder Concerns:** Digital focus = tech concerns, hybrid = resource questions
4. **Cumulative Scoring:** All choices affect final effectiveness rating

### Assessment Integration
- **Formative:** Embedded knowledge checks in Scenes 2, 3, 5
- **Summative:** Design competency demonstration in Scene 8
- **Reflection:** Critical thinking prompts in Scenes 4, 6, 7

## Asset Requirements Summary

### Images Needed
- Conference room backgrounds (2 variations)
- Workspace/office settings (4 variations)
- Character headshots (7 characters)
- UI mockups and dashboards (5 screens)
- Legal document samples (3 examples)

### Audio Requirements
- Narrator voice (professional, neutral)
- Character voices (7 distinct personalities)
- Background ambiance (office, meeting room)
- UI sound effects (clicks, transitions, success/error)

### Interactive Elements
- Multi-select checkboxes (Scene 1)
- Video-triggered selections (Scene 2)
- Framework comparison tool (Scene 3)
- Slider controls (Scene 4)
- Drag-and-drop builder (Scene 5)
- Stakeholder feedback system (Scene 6)
- Data dashboard (Scene 7)

## Quality Assurance Checklist
- [ ] All scenes load within 3 seconds
- [ ] Navigation works on mobile devices
- [ ] Audio syncs with visual elements
- [ ] Variables track correctly across scenes
- [ ] Accessibility features function properly
- [ ] SCORM package exports successfully

## Next Steps for Development
1. Complete remaining scene storyboards (Scenes 3-8)
2. Create detailed asset specifications
3. Develop Storyline template structure
4. Begin character asset creation
5. Script audio narration
# Interaction Specifications - Legal Writing 101 Simulation

## Scene 1: Problem Identification

### Multi-Select Checkbox Interface

**Component:** Problem Selection Checklist
**Location:** Scene 1, Slide 1.4
**Functionality:** Allow learners to identify 3+ core problems

**Technical Specifications:**
```
Element Type: Checkbox group
Minimum Selections: 3
Maximum Selections: 7 (all options)
Validation: Real-time, submit button disabled until minimum met
```

**Options List:**
1. "Low engagement and completion rates" (engagement_issue)
2. "Content too theoretical, not practical" (practical_gap)
3. "Outdated delivery methods (lecture-heavy)" (delivery_method)
4. "No real-world application opportunities" (application_lack)
5. "Limited feedback and assessment" (feedback_gap)
6. "One-size-fits-all approach" (personalization_lack)
7. "Poor mobile accessibility" (mobile_issue)

**Visual States:**
- Default: Unchecked box, gray border
- Hover: Light blue background, blue border
- Checked: Blue checkmark, blue border
- Disabled: Gray background, reduced opacity

**Feedback Logic:**
```javascript
if (selections.length >= 3) {
    feedback = "Good analysis. These issues will guide our redesign.";
    enableSubmit();
} else {
    feedback = "Consider additional factors that might impact learner success.";
    disableSubmit();
}
```

**Variables Set:**
- problem_focus = [array of selected issues]
- engagement_priority = calculated based on selections
- practical_focus = boolean based on practical_gap selection

## Scene 2: Persona Selection

### Video-Triggered Selection Interface

**Component:** Persona Choice System
**Location:** Scene 2, Slide 2.6
**Functionality:** Single selection after viewing persona videos

**Technical Specifications:**
```
Element Type: Radio button group with video triggers
Selection Type: Single choice (mutually exclusive)
Video Requirement: Must view all 3 videos before selection enabled
Progress Tracking: Video completion percentage
```

**Persona Options:**
1. **Maya Chen - Young Associate**
   - Video Duration: 20 seconds
   - Trigger: Auto-play on slide entry
   - Selection Value: "maya_associate"

2. **Robert Martinez - Senior Partner**
   - Video Duration: 20 seconds
   - Trigger: Manual play after Maya video
   - Selection Value: "robert_partner"

3. **Patricia Williams - Judge**
   - Video Duration: 20 seconds
   - Trigger: Manual play after Robert video
   - Selection Value: "patricia_judge"

**Interaction Flow:**
1. Maya video auto-plays on slide entry
2. Robert video becomes available after Maya completion
3. Patricia video becomes available after Robert completion
4. Selection interface activates after all videos viewed
5. ALEX provides analysis based on selection

**ALEX Follow-up Questions:**
```javascript
switch(selectedPersona) {
    case "maya_associate":
        alexQuestion = "How will you balance rigor with accessibility?";
        break;
    case "robert_partner":
        alexQuestion = "What metrics will prove ROI to partners?";
        break;
    case "patricia_judge":
        alexQuestion = "How will you modernize without losing standards?";
        break;
}
```

**Variables Set:**
- primary_persona = selected persona value
- design_priority = persona-specific priority
- content_approach = persona-specific approach
- alex_question_response = learner text input

## Scene 3: Framework Selection

### Comparative Selection Interface

**Component:** Framework Comparison Tool
**Location:** Scene 3, Slide 3.5
**Functionality:** Single framework selection with preview capability

**Technical Specifications:**
```
Element Type: Card-based selection with hover previews
Selection Type: Single choice
Preview System: Hover reveals additional details
Confirmation: Click to select, confirmation dialog
```

**Framework Options:**

**ADDIE Framework:**
- Preview Text: "Systematic 5-phase approach"
- Tools Unlocked: ["Gap Analysis Templates", "Design Specifications"]
- Process Type: "Linear with validation gates"
- Best For: "Comprehensive overhauls"

**SAM Framework:**
- Preview Text: "Rapid prototyping cycles"
- Tools Unlocked: ["Quick Mockup Tools", "Feedback Loops"]
- Process Type: "Iterative with fast testing"
- Best For: "Fast results and adaptation"

**Learning Experience Canvas:**
- Preview Text: "Learner journey mapping"
- Tools Unlocked: ["Experience Maps", "Co-creation Workshops"]
- Process Type: "Human-centered design thinking"
- Best For: "Engagement challenges"

**Visual Design:**
- Card Layout: 300px width, 400px height
- Hover Effect: Slight elevation, border highlight
- Selection State: Blue border, checkmark overlay
- Preview Panel: Slide-out details on hover

**Variables Set:**
- design_framework = selected framework
- methodology_focus = framework-specific focus
- tools_available = framework-specific tools array

## Scene 4: Modality Sliders

### Triple Slider Interface

**Component:** Interactive Trade-off Sliders
**Location:** Scene 4, Slide 4.5
**Functionality:** Three interdependent sliders affecting recommendations

**Technical Specifications:**
```
Element Type: Range input sliders (HTML5)
Range: 1-10 for each slider
Update Frequency: Real-time on slide change
Interdependency: Values affect each other's recommendations
```

**Slider Definitions:**

**Slider 1: Time Investment vs. Learning Depth**
- Left (1-3): "Quick modules, surface learning"
- Center (4-7): "Balanced approach"
- Right (8-10): "Deep practice, mastery focus"
- Affects: Content complexity, assessment rigor

**Slider 2: Engagement vs. Resource Cost**
- Left (1-3): "Automated content, minimal facilitation"
- Center (4-7): "Mixed approach"
- Right (8-10): "Live instruction, personal feedback"
- Affects: Budget requirements, staffing needs

**Slider 3: Scalability vs. Personalization**
- Left (1-3): "One-size-fits-all, automated delivery"
- Center (4-7): "Flexible options"
- Right (8-10): "Customized paths, individual attention"
- Affects: Rollout capacity, learner satisfaction

**Real-time Calculations:**
```javascript
function calculateRecommendation(time, engagement, scale) {
    let score = {
        workshop: (time * 0.4) + (engagement * 0.5) + (scale * 0.1),
        digital: (time * 0.2) + (engagement * 0.3) + (scale * 0.5),
        hybrid: (time * 0.3) + (engagement * 0.4) + (scale * 0.3)
    };
    return Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
}
```

**Visual Feedback:**
- Completion Rate Projection: 45% + (engagement * 5)%
- Resource Requirements: Low/Medium/High based on sliders
- Implementation Timeline: 2-8 weeks based on complexity

**Variables Set:**
- time_investment = slider 1 value
- engagement_priority = slider 2 value
- scalability_need = slider 3 value
- modality_choice = calculated recommendation
- resource_budget = calculated from all sliders

## Scene 5: Drag-and-Drop Course Builder

### Advanced Drag-and-Drop System

**Component:** Course Structure Builder
**Location:** Scene 5, Slides 5.2-5.4
**Functionality:** Drag components to timeline, real-time scoring

**Technical Specifications:**
```
Element Type: HTML5 Drag and Drop API
Source: Component library (left panel)
Target: Timeline builder (right panel)
Constraints: Maximum 12 components, minimum 4
Scoring: Real-time effectiveness calculation
```

**Component Library:**
Each component has properties:
```javascript
const components = {
    videoCases: {
        name: "Video Case Studies",
        engagement: 15,
        learning: 10,
        application: 10,
        cost: 3,
        time: 2
    },
    interactiveExercises: {
        name: "Interactive Exercises",
        engagement: 20,
        learning: 15,
        application: 15,
        cost: 4,
        time: 3
    },
    aiFeedback: {
        name: "AI Writing Feedback",
        engagement: 10,
        learning: 25,
        application: 20,
        cost: 2,
        time: 1
    }
    // ... additional components
};
```

**Timeline Structure:**
- Pre-course Preparation (optional)
- Week 1-4 (main content areas)
- Post-course Follow-up (optional)
- Connection lines show learning flow

**Drag-and-Drop Behavior:**
1. **Drag Start:** Component highlights, cursor changes
2. **Drag Over:** Drop zones highlight, invalid zones show red
3. **Drop:** Component snaps to grid, connections auto-generate
4. **Scoring Update:** Real-time calculation and display

**Effectiveness Scoring Algorithm:**
```javascript
function calculateEffectiveness(components) {
    let engagement = components.reduce((sum, comp) => sum + comp.engagement, 0);
    let learning = components.reduce((sum, comp) => sum + comp.learning, 0);
    let application = components.reduce((sum, comp) => sum + comp.application, 0);
    
    // Apply sequence bonuses
    let sequenceBonus = calculateSequenceBonus(components);
    
    return {
        engagement: Math.min(100, engagement + sequenceBonus.engagement),
        learning: Math.min(100, learning + sequenceBonus.learning),
        application: Math.min(100, application + sequenceBonus.application),
        overall: Math.min(100, (engagement + learning + application) / 3)
    };
}
```

**ALEX Suggestions System:**
- Missing Components: "Add hands-on writing practice"
- Sequencing Issues: "Consider flipping the sequence"
- Overload Warnings: "Balance the cognitive load"
- Best Practice Tips: Context-sensitive recommendations

**Variables Set:**
- course_structure = array of selected components
- component_sequence = ordered timeline array
- effectiveness_score = calculated overall score
- alex_suggestions_used = count of implemented suggestions

## Scene 6: Stakeholder Feedback System

### Multi-Stakeholder Response Interface

**Component:** Concern Resolution System
**Location:** Scene 6, Slide 6.5
**Functionality:** Address three stakeholder concerns simultaneously

**Technical Specifications:**
```
Element Type: Tabbed interface with response options
Stakeholders: 3 (Sarah, David, Lisa)
Response Type: Single choice per stakeholder
Satisfaction Tracking: 0-100 scale per stakeholder
```

**Stakeholder Concerns & Responses:**

**Sarah Kim (Scalability):**
- Option A: "Create recorded sessions for remote access" (+scalability, -engagement)
- Option B: "Regional facilitators ensure consistency" (+quality, +cost)
- Option C: "Hybrid model allows flexible participation" (+engagement, +scalability)

**David Thompson (Standards):**
- Option A: "Add dedicated citation workshop module" (+compliance, +time)
- Option B: "Include bar association approved content" (+credibility, +cost)
- Option C: "Require SME review of all materials" (+accuracy, +development time)

**Lisa Park (Brand):**
- Option A: "Highlight AI innovation in marketing" (+differentiation, +tech risk)
- Option B: "Ensure seamless JUS Academy integration" (+consistency, +development)
- Option C: "Create branded completion certificates" (+value, +production cost)

**Satisfaction Calculation:**
```javascript
function calculateSatisfaction(stakeholder, response) {
    const satisfactionMatrix = {
        sarah: { A: 70, B: 85, C: 100 },
        david: { A: 100, B: 85, C: 90 },
        lisa: { A: 85, B: 100, C: 75 }
    };
    return satisfactionMatrix[stakeholder][response];
}
```

**Dynamic Course Updates:**
Based on responses, the course builder interface updates to show:
- New components added
- Modified delivery methods
- Updated resource requirements
- Changed timeline estimates

**Variables Set:**
- sarah_satisfaction = calculated satisfaction score
- david_satisfaction = calculated satisfaction score
- lisa_satisfaction = calculated satisfaction score
- stakeholder_satisfaction = average of all three
- design_revisions = array of changes made

## Scene 7: Analytics Dashboard

### Interactive Data Visualization

**Component:** Performance Metrics Dashboard
**Location:** Scene 7, Slides 7.2-7.5
**Functionality:** Data interpretation and reflection

**Technical Specifications:**
```
Element Type: Interactive charts and graphs
Chart Types: Bar charts, line graphs, pie charts, heatmaps
Interactivity: Hover for details, click for drill-down
Data Source: Calculated from previous scene choices
```

**Dashboard Components:**

**Key Metrics Cards:**
- Completion Rate: Large number display with trend arrow
- Satisfaction Score: Star rating with numerical value
- Writing Quality: Percentage improvement with comparison
- Cost per Learner: Dollar amount with savings calculation

**Engagement Heatmap:**
- 4-week timeline visualization
- Color-coded participation levels
- Hover reveals specific percentages
- Mobile vs. desktop usage breakdown

**Learning Effectiveness Charts:**
- Before/after writing sample scores
- Skill progression radar chart
- Competency achievement bar chart
- Peer review quality metrics

**ROI Calculator:**
- Development cost breakdown (pie chart)
- Per-learner cost comparison (bar chart)
- Time savings quantification (timeline)
- Productivity improvement estimates (trend line)

**Interactive Elements:**
```javascript
// Hover tooltips
chart.on('mouseover', function(d) {
    tooltip.show({
        title: d.metric,
        value: d.value,
        comparison: d.baseline,
        improvement: d.change
    });
});

// Click drill-down
chart.on('click', function(d) {
    showDetailView(d.category);
});
```

**Reflection Questions Interface:**
- Text input fields with character limits
- Auto-save functionality
- Word count indicators
- Sample response hints

**Variables Set:**
- success_metrics = array of selected priorities
- reflection_responses = learner text inputs
- data_interpretation_score = quiz performance
- dashboard_interaction_time = time spent analyzing

## Scene 8: Completion and Replay

### Achievement and Navigation System

**Component:** Summary and Replay Interface
**Location:** Scene 8, Slides 8.2-8.4
**Functionality:** Show achievements, enable replay with variations

**Technical Specifications:**
```
Element Type: Achievement display with navigation options
Replay Types: Persona, Framework, Modality variations
Progress Tracking: Completion badges and scores
Resource Access: Downloadable templates and guides
```

**Achievement Display:**
- Skills Demonstrated: Checklist with checkmarks
- Design Choices Summary: Visual timeline of decisions
- Effectiveness Score: Large circular progress indicator
- Stakeholder Satisfaction: Three-gauge display

**Replay Options:**
```javascript
const replayOptions = {
    persona: {
        title: "Try Different Persona Focus",
        description: "Explore how Robert's efficiency focus changes design",
        resetPoint: "scene_2",
        maintainData: ["framework_knowledge"]
    },
    framework: {
        title: "Alternative Framework",
        description: "See how SAM's rapid prototyping differs",
        resetPoint: "scene_3",
        maintainData: ["persona_insights"]
    },
    modality: {
        title: "New Modality Approach",
        description: "Test fully digital microlearning strategy",
        resetPoint: "scene_4",
        maintainData: ["persona_choice", "framework_choice"]
    }
};
```

**Resource Downloads:**
- Template Library: PDF downloads
- Best Practices Guide: Interactive web guide
- Stakeholder Forms: Editable templates
- Analytics Sheets: Excel/Google Sheets templates

**Social Sharing:**
- Achievement badge generation
- LinkedIn post template
- Portfolio summary export
- Certificate of completion

**Variables Set:**
- completion_status = true
- final_effectiveness_score = calculated total
- replay_interest = selected replay option
- resource_downloads = array of downloaded items
- social_shares = array of shared achievements

## Cross-Scene Technical Requirements

### Variable Persistence
```javascript
// Global variables maintained across scenes
const globalVars = {
    problem_focus: [],
    primary_persona: "",
    design_framework: "",
    modality_choice: "",
    course_structure: [],
    stakeholder_satisfaction: 0,
    effectiveness_score: 0,
    completion_time: 0
};
```

### Progress Tracking
- Scene completion status
- Interaction completion rates
- Time spent per scene
- Decision change tracking
- Help system usage

### Accessibility Features
- Keyboard navigation for all interactions
- Screen reader compatibility
- High contrast mode support
- Text size adjustment options
- Audio description availability

### Performance Optimization
- Lazy loading of assets
- Compressed image delivery
- Efficient animation rendering
- Memory management for variables
- Smooth scene transitions
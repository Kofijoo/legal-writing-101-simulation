# Trigger Logic Reference - Legal Writing 101 Simulation

## Trigger Categories

### 1. Navigation Triggers
### 2. Variable Assignment Triggers  
### 3. Validation Triggers
### 4. Calculation Triggers
### 5. Feedback Triggers
### 6. Audio/Media Triggers
### 7. Branching Logic Triggers

## Scene 1 Triggers

### Navigation Triggers
```javascript
// Slide 1.1 → 1.2 (Auto-advance after narration)
When timeline reaches end
    Jump to slide 1.2

// Slide 1.2 → 1.3 (Click to continue)
When user clicks Next button
    Jump to slide 1.3

// Slide 1.3 → 1.4 (Auto-advance after 10 seconds)
When timeline reaches 10 seconds
    Jump to slide 1.4

// Slide 1.4 → Scene 2 (After problem selection)
When user clicks Submit button
    If scene1_selections_count >= 3
        Set scene1_complete = true
        Jump to slide 2.1
    Else
        Show layer "Validation Error"
```

### Variable Assignment Triggers
```javascript
// Problem selection checkboxes
When user clicks checkbox "Low engagement"
    If checkbox is checked
        Set scene1_engagement_priority = true
        Add "engagement_issue" to scene1_problem_focus
        Add 1 to scene1_selections_count
    Else
        Set scene1_engagement_priority = false
        Remove "engagement_issue" from scene1_problem_focus
        Subtract 1 from scene1_selections_count

When user clicks checkbox "Content too theoretical"
    If checkbox is checked
        Set scene1_practical_focus = true
        Add "practical_gap" to scene1_problem_focus
        Add 1 to scene1_selections_count
    Else
        Set scene1_practical_focus = false
        Remove "practical_gap" from scene1_problem_focus
        Subtract 1 from scene1_selections_count

// Repeat for all 7 checkbox options...
```

### Validation Triggers
```javascript
// Real-time validation feedback
When scene1_selections_count changes
    If scene1_selections_count >= 3
        Change state of Submit button to Normal
        Hide layer "Minimum Selection Warning"
        Show text "Good analysis. These issues will guide our redesign."
    Else
        Change state of Submit button to Disabled
        Show layer "Minimum Selection Warning"
        Show text "Select at least 3 problems to continue."
```

## Scene 2 Triggers

### Media Control Triggers
```javascript
// Maya video completion
When media Maya_Video completes
    Set scene2_maya_video_complete = true
    Change state of Robert_Video_Button to Normal
    Show text "Click to watch Robert Martinez"

// Robert video completion
When media Robert_Video completes
    Set scene2_robert_video_complete = true
    Change state of Patricia_Video_Button to Normal
    Show text "Click to watch Judge Williams"

// Patricia video completion
When media Patricia_Video completes
    Set scene2_patricia_video_complete = true
    Set scene2_all_videos_viewed = true
    Change state of Persona_Selection_Buttons to Normal
    Show layer "Persona Selection Interface"
```

### Branching Logic Triggers
```javascript
// Persona selection with branching consequences
When user clicks Maya_Selection_Button
    Set scene2_primary_persona = "maya_associate"
    Set scene2_design_priority = "practical_application"
    Set scene2_content_approach = "scenario_based"
    Set scene2_alex_question = "How will you balance rigor with accessibility?"
    Show layer "ALEX Analysis Maya"
    Hide layer "Persona Selection Interface"

When user clicks Robert_Selection_Button
    Set scene2_primary_persona = "robert_partner"
    Set scene2_design_priority = "efficiency_roi"
    Set scene2_content_approach = "expert_led"
    Set scene2_alex_question = "What metrics will prove ROI to partners?"
    Show layer "ALEX Analysis Robert"
    Hide layer "Persona Selection Interface"

When user clicks Patricia_Selection_Button
    Set scene2_primary_persona = "patricia_judge"
    Set scene2_design_priority = "professional_rigor"
    Set scene2_content_approach = "standards_based"
    Set scene2_alex_question = "How will you modernize without losing standards?"
    Show layer "ALEX Analysis Patricia"
    Hide layer "Persona Selection Interface"
```

### Audio Triggers
```javascript
// ALEX narration based on persona choice
When scene2_primary_persona changes
    Stop all audio
    If scene2_primary_persona == "maya_associate"
        Play audio "ALEX_Maya_Analysis"
    Else if scene2_primary_persona == "robert_partner"
        Play audio "ALEX_Robert_Analysis"
    Else if scene2_primary_persona == "patricia_judge"
        Play audio "ALEX_Patricia_Analysis"
```

## Scene 3 Triggers

### Framework Selection Triggers
```javascript
// Framework hover previews
When user hovers over ADDIE_Card
    Show layer "ADDIE Preview"
    Play audio "ADDIE_Explanation"

When user hovers over SAM_Card
    Show layer "SAM Preview"
    Play audio "SAM_Explanation"

When user hovers over LEC_Card
    Show layer "LEC Preview"
    Play audio "LEC_Explanation"

// Framework selection
When user clicks ADDIE_Card
    Set scene3_design_framework = "ADDIE"
    Set scene3_methodology_focus = "systematic_thorough"
    Set scene3_tools_available = ["Gap Analysis Templates", "Design Specifications"]
    Set scene3_process_type = "linear_validation"
    Show layer "ADDIE Selected Confirmation"
    Change state of Continue_Button to Normal

When user clicks SAM_Card
    Set scene3_design_framework = "SAM"
    Set scene3_methodology_focus = "rapid_iterative"
    Set scene3_tools_available = ["Quick Mockup Tools", "Feedback Loops"]
    Set scene3_process_type = "iterative_testing"
    Show layer "SAM Selected Confirmation"
    Change state of Continue_Button to Normal

When user clicks LEC_Card
    Set scene3_design_framework = "LEC"
    Set scene3_methodology_focus = "human_centered"
    Set scene3_tools_available = ["Experience Maps", "Co-creation Workshops"]
    Set scene3_process_type = "design_thinking"
    Show layer "LEC Selected Confirmation"
    Change state of Continue_Button to Normal
```

## Scene 4 Triggers

### Slider Interaction Triggers
```javascript
// Real-time slider calculations
When variable scene4_time_investment changes
    Execute JavaScript calculate_modality_scores()
    Update text Time_Investment_Display to show scene4_time_investment
    Update progress bar Time_Investment_Bar to scene4_time_investment * 10

When variable scene4_engagement_priority changes
    Execute JavaScript calculate_modality_scores()
    Update text Engagement_Priority_Display to show scene4_engagement_priority
    Update progress bar Engagement_Priority_Bar to scene4_engagement_priority * 10

When variable scene4_scalability_need changes
    Execute JavaScript calculate_modality_scores()
    Update text Scalability_Need_Display to show scene4_scalability_need
    Update progress bar Scalability_Need_Bar to scene4_scalability_need * 10

// JavaScript calculation function
function calculate_modality_scores() {
    var workshop_score = (scene4_time_investment * 0.4) + (scene4_engagement_priority * 0.5) + (scene4_scalability_need * 0.1);
    var digital_score = (scene4_time_investment * 0.2) + (scene4_engagement_priority * 0.3) + (scene4_scalability_need * 0.5);
    var hybrid_score = (scene4_time_investment * 0.3) + (scene4_engagement_priority * 0.4) + (scene4_scalability_need * 0.3);
    
    // Determine recommendation
    if (workshop_score > digital_score && workshop_score > hybrid_score) {
        scene4_modality_choice = "workshop";
        highlight_recommendation("Workshop");
    } else if (digital_score > hybrid_score) {
        scene4_modality_choice = "digital";
        highlight_recommendation("Digital");
    } else {
        scene4_modality_choice = "hybrid";
        highlight_recommendation("Hybrid");
    }
    
    // Update projections
    scene4_completion_rate = 45 + (scene4_engagement_priority * 5);
    scene4_implementation_weeks = 2 + (scene4_time_investment * 0.6);
    
    // Update display
    update_projections_display();
}
```

### Recommendation Display Triggers
```javascript
// Highlight recommended modality
When scene4_modality_choice changes
    Change state of Workshop_Card to Normal
    Change state of Digital_Card to Normal
    Change state of Hybrid_Card to Normal
    
    If scene4_modality_choice == "workshop"
        Change state of Workshop_Card to Selected
        Show layer "Workshop Recommendation"
    Else if scene4_modality_choice == "digital"
        Change state of Digital_Card to Selected
        Show layer "Digital Recommendation"
    Else if scene4_modality_choice == "hybrid"
        Change state of Hybrid_Card to Selected
        Show layer "Hybrid Recommendation"
```

## Scene 5 Triggers

### Drag-and-Drop Triggers
```javascript
// Component drag start
When user starts dragging Video_Cases_Component
    Change state of all Drop_Zones to Highlighted
    Show layer "Drag Instructions"
    Play audio "SFX_Drag_Start"

// Component drop success
When user drops Video_Cases_Component on Timeline_Week1
    Add "video_cases" to scene5_course_structure
    Add 1 to scene5_total_components
    Execute JavaScript calculate_effectiveness_scores()
    Play audio "SFX_Drop_Success"
    Show layer "Component Added Feedback"
    Hide layer "Drag Instructions"

// Component drop invalid
When user drops Video_Cases_Component on Invalid_Zone
    Play audio "SFX_Drop_Error"
    Show layer "Invalid Drop Warning"
    Return component to original position

// Remove component
When user clicks Remove_Button on placed component
    Remove component from scene5_course_structure
    Subtract 1 from scene5_total_components
    Execute JavaScript calculate_effectiveness_scores()
    Play audio "SFX_Component_Removed"
```

### Real-time Scoring Triggers
```javascript
// Effectiveness calculation
When scene5_course_structure changes
    Execute JavaScript calculate_effectiveness()

function calculate_effectiveness() {
    var engagement = 0;
    var learning = 0;
    var application = 0;
    
    // Sum component values
    for (var i = 0; i < scene5_course_structure.length; i++) {
        var component = scene5_course_structure[i];
        engagement += component_values[component].engagement;
        learning += component_values[component].learning;
        application += component_values[component].application;
    }
    
    // Apply sequence bonuses
    if (has_optimal_sequence()) {
        engagement += 10;
        learning += 15;
        application += 20;
    }
    
    // Update variables
    scene5_engagement_score = Math.min(100, engagement);
    scene5_learning_score = Math.min(100, learning);
    scene5_application_score = Math.min(100, application);
    scene5_overall_effectiveness = (engagement + learning + application) / 3;
    
    // Update displays
    update_effectiveness_meters();
    check_alex_suggestions();
}
```

### ALEX Suggestion Triggers
```javascript
// Dynamic suggestions based on course structure
When scene5_overall_effectiveness changes
    Clear scene5_alex_suggestions
    
    If scene5_overall_effectiveness < 60
        Add "Your course needs more interactive elements" to scene5_alex_suggestions
        Show layer "ALEX Low Effectiveness Warning"
    
    If not has_component("practice_briefs")
        Add "Add hands-on writing practice" to scene5_alex_suggestions
        Show layer "ALEX Missing Practice Warning"
    
    If not has_component("ai_feedback")
        Add "Include feedback mechanisms" to scene5_alex_suggestions
        Show layer "ALEX Missing Feedback Warning"
    
    If has_overloaded_week()
        Add "Balance the cognitive load" to scene5_alex_suggestions
        Show layer "ALEX Overload Warning"
    
    Update ALEX_Suggestions_Display
```

## Scene 6 Triggers

### Stakeholder Response Triggers
```javascript
// Sarah Kim response handling
When user clicks Sarah_Response_A
    Set scene6_sarah_response = "A"
    Set scene6_sarah_satisfaction = 70
    Add "Remote access recordings" to scene6_design_revisions
    Show layer "Sarah Response A Feedback"
    Change state of Sarah_Response_Buttons to Disabled

When user clicks Sarah_Response_B
    Set scene6_sarah_response = "B"
    Set scene6_sarah_satisfaction = 85
    Add "Regional facilitators" to scene6_design_revisions
    Add 2 to scene6_implementation_complexity
    Show layer "Sarah Response B Feedback"
    Change state of Sarah_Response_Buttons to Disabled

When user clicks Sarah_Response_C
    Set scene6_sarah_response = "C"
    Set scene6_sarah_satisfaction = 100
    Add "Hybrid flexibility" to scene6_design_revisions
    Show layer "Sarah Response C Feedback"
    Change state of Sarah_Response_Buttons to Disabled

// David Thompson response handling
When user clicks David_Response_A
    Set scene6_david_response = "A"
    Set scene6_david_satisfaction = 100
    Add "Citation workshop module" to scene6_design_revisions
    Add 1 to scene6_compliance_level
    Show layer "David Response A Feedback"
    Change state of David_Response_Buttons to Disabled

// Lisa Park response handling
When user clicks Lisa_Response_B
    Set scene6_lisa_response = "B"
    Set scene6_lisa_satisfaction = 100
    Add "JUS Academy integration" to scene6_design_revisions
    Add 3 to scene6_implementation_complexity
    Show layer "Lisa Response B Feedback"
    Change state of Lisa_Response_Buttons to Disabled
```

### Completion Validation Triggers
```javascript
// Check if all stakeholders addressed
When any stakeholder response changes
    If scene6_sarah_response != "" AND scene6_david_response != "" AND scene6_lisa_response != ""
        Calculate scene6_overall_satisfaction = (scene6_sarah_satisfaction + scene6_david_satisfaction + scene6_lisa_satisfaction) / 3
        Show layer "All Stakeholders Addressed"
        Change state of Continue_Button to Normal
        Execute JavaScript update_course_design()
```

## Scene 7 Triggers

### Dashboard Loading Triggers
```javascript
// Animated data loading
When timeline starts
    Show layer "Loading Animation"
    Execute JavaScript calculate_projections()
    
    // Staggered data reveals
    At 2 seconds: Show Completion_Rate_Card
    At 3 seconds: Show Satisfaction_Score_Card
    At 4 seconds: Show Writing_Improvement_Card
    At 5 seconds: Show Cost_Per_Learner_Card
    At 6 seconds: Hide layer "Loading Animation"
    At 6 seconds: Show layer "Dashboard Complete"
```

### Interactive Chart Triggers
```javascript
// Chart hover interactions
When user hovers over Engagement_Chart_Week1
    Show layer "Week 1 Details"
    Update text Week1_Details to "95% participation - Strong course launch"

When user hovers over Component_Performance_AI_Feedback
    Show layer "AI Feedback Details"
    Update text AI_Feedback_Details to "92% usage rate - Learners value immediate feedback"

// Reflection question triggers
When user clicks Reflection_Question_1
    Show layer "Reflection Input 1"
    Set focus to Reflection_Text_1

When user types in Reflection_Text_1
    If text length > 50
        Add 20 to scene7_reflection_score
        Show layer "Good Reflection Feedback"
```

## Scene 8 Triggers

### Achievement Display Triggers
```javascript
// Final score calculation and display
When timeline starts
    Execute JavaScript calculate_final_scores()
    Show layer "Achievement Loading"
    
    At 2 seconds: Show Skills_Demonstrated_List
    At 4 seconds: Show Design_Choices_Summary
    At 6 seconds: Show Final_Effectiveness_Score
    At 8 seconds: Show Stakeholder_Satisfaction_Gauge
    At 10 seconds: Hide layer "Achievement Loading"
    At 10 seconds: Show layer "Congratulations"

function calculate_final_scores() {
    scene8_final_effectiveness_score = scene5_overall_effectiveness;
    
    // Stakeholder bonus
    if (scene6_overall_satisfaction >= 80) {
        scene8_final_effectiveness_score += 10;
        scene8_stakeholder_success = true;
    }
    
    // Cap at 100
    scene8_final_effectiveness_score = Math.min(100, scene8_final_effectiveness_score);
    
    // Determine achievement level
    if (scene8_final_effectiveness_score >= 90) {
        scene8_achievement_level = "Expert";
    } else if (scene8_final_effectiveness_score >= 75) {
        scene8_achievement_level = "Proficient";
    } else {
        scene8_achievement_level = "Developing";
    }
}
```

### Replay Option Triggers
```javascript
// Replay selection
When user clicks Replay_Persona_Button
    Set scene8_replay_interest = "persona"
    Show layer "Replay Confirmation"
    Update text Replay_Message to "You'll restart at Scene 2 with a different persona focus"

When user clicks Replay_Framework_Button
    Set scene8_replay_interest = "framework"
    Show layer "Replay Confirmation"
    Update text Replay_Message to "You'll restart at Scene 3 with a different framework"

When user clicks Replay_Modality_Button
    Set scene8_replay_interest = "modality"
    Show layer "Replay Confirmation"
    Update text Replay_Message to "You'll restart at Scene 4 with a different modality approach"

// Replay execution
When user clicks Confirm_Replay_Button
    If scene8_replay_interest == "persona"
        Reset variables: scene2_* through scene8_*
        Jump to slide 2.1
    Else if scene8_replay_interest == "framework"
        Reset variables: scene3_* through scene8_*
        Jump to slide 3.1
    Else if scene8_replay_interest == "modality"
        Reset variables: scene4_* through scene8_*
        Jump to slide 4.1
```

## Global Utility Triggers

### Progress Tracking Triggers
```javascript
// Scene progression tracking
When user enters any scene
    Set global_current_scene = scene_number
    Set global_progress_percentage = (global_current_scene / global_total_scenes) * 100
    Update progress bar Global_Progress_Bar to global_progress_percentage

// Time tracking
When timeline starts on any slide
    Set global_current_time = current_timestamp
    Set global_total_time = global_current_time - global_start_time
```

### Audio Control Triggers
```javascript
// Global audio toggle
When user clicks Audio_Toggle_Button
    If global_audio_enabled == true
        Set global_audio_enabled = false
        Stop all audio
        Change state of Audio_Toggle_Button to Off
    Else
        Set global_audio_enabled = true
        Change state of Audio_Toggle_Button to On
        Resume current audio if applicable

// Caption toggle
When user clicks Caption_Toggle_Button
    If global_captions_enabled == true
        Set global_captions_enabled = false
        Hide all caption layers
    Else
        Set global_captions_enabled = true
        Show appropriate caption layers
```

### Error Handling Triggers
```javascript
// Variable validation
When any critical variable is set
    If variable value is invalid
        Set variable to default_value
        Show layer "Error Recovery"
        Log error to debug_log

// Navigation error recovery
When user attempts invalid navigation
    Show layer "Navigation Error"
    Play audio "SFX_Error_Alert"
    Return to last valid slide
```
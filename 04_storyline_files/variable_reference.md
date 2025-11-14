# Variable Reference Guide - Legal Writing 101 Simulation

## Variable Naming Convention
**Format:** [scene]_[category]_[descriptor]
**Examples:** 
- scene1_problem_focus
- scene2_persona_choice
- global_effectiveness_score

## Scene 1 Variables

### Primary Variables
```javascript
// Problem identification results
var scene1_problem_focus = ""; // Array of selected problems
var scene1_engagement_priority = false; // Boolean if engagement selected
var scene1_practical_focus = false; // Boolean if practical gap selected
var scene1_delivery_outdated = false; // Boolean if delivery method selected
var scene1_feedback_lacking = false; // Boolean if feedback gap selected

// Completion tracking
var scene1_complete = false;
var scene1_selections_count = 0; // Number of problems selected
var scene1_time_spent = 0; // Seconds on scene
```

### Usage Examples
```javascript
// Set when user selects problems
When user clicks checkbox "Low engagement"
    Set scene1_engagement_priority = true
    Add "engagement_issue" to scene1_problem_focus
    Add 1 to scene1_selections_count

// Validation trigger
When user clicks Submit
    If scene1_selections_count >= 3
        Set scene1_complete = true
        Jump to Scene 2
    Else
        Show "Select at least 3 problems"
```

## Scene 2 Variables

### Primary Variables
```javascript
// Persona selection
var scene2_primary_persona = ""; // "maya_associate", "robert_partner", "patricia_judge"
var scene2_design_priority = ""; // Persona-specific priority
var scene2_content_approach = ""; // Persona-specific approach

// Video tracking
var scene2_maya_video_complete = false;
var scene2_robert_video_complete = false;
var scene2_patricia_video_complete = false;
var scene2_all_videos_viewed = false;

// ALEX interaction
var scene2_alex_question = "";
var scene2_alex_response = "";
```

### Branching Logic
```javascript
// Persona-specific settings
When scene2_primary_persona == "maya_associate"
    Set scene2_design_priority = "practical_application"
    Set scene2_content_approach = "scenario_based"
    Set scene2_alex_question = "How will you balance rigor with accessibility?"

When scene2_primary_persona == "robert_partner"
    Set scene2_design_priority = "efficiency_roi"
    Set scene2_content_approach = "expert_led"
    Set scene2_alex_question = "What metrics will prove ROI to partners?"

When scene2_primary_persona == "patricia_judge"
    Set scene2_design_priority = "professional_rigor"
    Set scene2_content_approach = "standards_based"
    Set scene2_alex_question = "How will you modernize without losing standards?"
```

## Scene 3 Variables

### Primary Variables
```javascript
// Framework selection
var scene3_design_framework = ""; // "ADDIE", "SAM", "LEC"
var scene3_methodology_focus = ""; // Framework-specific focus
var scene3_tools_available = []; // Array of available tools

// Framework characteristics
var scene3_process_type = ""; // "linear", "iterative", "experiential"
var scene3_best_for = ""; // Framework strength description
```

### Framework Configurations
```javascript
// ADDIE configuration
When scene3_design_framework == "ADDIE"
    Set scene3_methodology_focus = "systematic_thorough"
    Set scene3_tools_available = ["Gap Analysis Templates", "Design Specifications"]
    Set scene3_process_type = "linear_validation"
    Set scene3_best_for = "comprehensive_overhauls"

// SAM configuration
When scene3_design_framework == "SAM"
    Set scene3_methodology_focus = "rapid_iterative"
    Set scene3_tools_available = ["Quick Mockup Tools", "Feedback Loops"]
    Set scene3_process_type = "iterative_testing"
    Set scene3_best_for = "fast_adaptation"

// LEC configuration
When scene3_design_framework == "LEC"
    Set scene3_methodology_focus = "human_centered"
    Set scene3_tools_available = ["Experience Maps", "Co-creation Workshops"]
    Set scene3_process_type = "design_thinking"
    Set scene3_best_for = "engagement_challenges"
```

## Scene 4 Variables

### Primary Variables
```javascript
// Slider values (1-10 scale)
var scene4_time_investment = 5;
var scene4_engagement_priority = 5;
var scene4_scalability_need = 5;

// Calculated recommendations
var scene4_modality_choice = ""; // "workshop", "digital", "hybrid"
var scene4_workshop_score = 0;
var scene4_digital_score = 0;
var scene4_hybrid_score = 0;

// Projected metrics
var scene4_completion_rate = 0;
var scene4_resource_requirement = ""; // "low", "medium", "high"
var scene4_implementation_weeks = 0;
```

### Calculation Triggers
```javascript
// Real-time modality scoring
When any slider changes
    Set scene4_workshop_score = (scene4_time_investment * 0.4) + (scene4_engagement_priority * 0.5) + (scene4_scalability_need * 0.1)
    Set scene4_digital_score = (scene4_time_investment * 0.2) + (scene4_engagement_priority * 0.3) + (scene4_scalability_need * 0.5)
    Set scene4_hybrid_score = (scene4_time_investment * 0.3) + (scene4_engagement_priority * 0.4) + (scene4_scalability_need * 0.3)
    
    // Determine recommendation
    If scene4_workshop_score > scene4_digital_score AND scene4_workshop_score > scene4_hybrid_score
        Set scene4_modality_choice = "workshop"
    Else if scene4_digital_score > scene4_hybrid_score
        Set scene4_modality_choice = "digital"
    Else
        Set scene4_modality_choice = "hybrid"
    
    // Update projections
    Set scene4_completion_rate = 45 + (scene4_engagement_priority * 5)
    Set scene4_implementation_weeks = 2 + (scene4_time_investment * 0.6)
```

## Scene 5 Variables

### Primary Variables
```javascript
// Course structure
var scene5_course_structure = []; // Array of selected components
var scene5_component_sequence = []; // Ordered timeline
var scene5_total_components = 0;

// Effectiveness scoring
var scene5_engagement_score = 0;
var scene5_learning_score = 0;
var scene5_application_score = 0;
var scene5_overall_effectiveness = 0;

// ALEX suggestions
var scene5_alex_suggestions = [];
var scene5_suggestions_used = 0;
var scene5_missing_components = [];
```

### Component Properties
```javascript
// Component effectiveness values
var components = {
    "video_cases": {
        engagement: 15, learning: 10, application: 10, cost: 3, time: 2
    },
    "interactive_exercises": {
        engagement: 20, learning: 15, application: 15, cost: 4, time: 3
    },
    "ai_feedback": {
        engagement: 10, learning: 25, application: 20, cost: 2, time: 1
    },
    "peer_review": {
        engagement: 15, learning: 10, application: 15, cost: 3, time: 2
    },
    "expert_lectures": {
        engagement: 5, learning: 20, application: 5, cost: 5, time: 2
    },
    "practice_briefs": {
        engagement: 25, learning: 15, application: 25, cost: 3, time: 4
    },
    "assessment_quizzes": {
        engagement: 10, learning: 15, application: 10, cost: 2, time: 1
    },
    "live_workshops": {
        engagement: 30, learning: 20, application: 20, cost: 6, time: 3
    }
};
```

### Scoring Calculations
```javascript
// Real-time effectiveness calculation
When scene5_course_structure changes
    Set scene5_engagement_score = 0
    Set scene5_learning_score = 0
    Set scene5_application_score = 0
    
    For each component in scene5_course_structure
        Add component.engagement to scene5_engagement_score
        Add component.learning to scene5_learning_score
        Add component.application to scene5_application_score
    
    // Apply sequence bonuses (if components are in optimal order)
    If "video_cases" comes before "practice_briefs"
        Add 5 to scene5_application_score
    If "ai_feedback" comes after "practice_briefs"
        Add 10 to scene5_learning_score
    
    Set scene5_overall_effectiveness = (scene5_engagement_score + scene5_learning_score + scene5_application_score) / 3
    
    // Cap at 100
    Set scene5_engagement_score = Math.min(100, scene5_engagement_score)
    Set scene5_learning_score = Math.min(100, scene5_learning_score)
    Set scene5_application_score = Math.min(100, scene5_application_score)
    Set scene5_overall_effectiveness = Math.min(100, scene5_overall_effectiveness)
```

## Scene 6 Variables

### Primary Variables
```javascript
// Stakeholder satisfaction (0-100 scale)
var scene6_sarah_satisfaction = 0;
var scene6_david_satisfaction = 0;
var scene6_lisa_satisfaction = 0;
var scene6_overall_satisfaction = 0;

// Response tracking
var scene6_sarah_response = ""; // "A", "B", "C"
var scene6_david_response = ""; // "A", "B", "C"
var scene6_lisa_response = ""; // "A", "B", "C"

// Design revisions
var scene6_design_revisions = [];
var scene6_implementation_complexity = 0;
var scene6_compliance_level = 0;
```

### Satisfaction Matrix
```javascript
// Stakeholder satisfaction calculations
var satisfactionMatrix = {
    sarah: { A: 70, B: 85, C: 100 },  // Scalability responses
    david: { A: 100, B: 85, C: 90 },  // Standards responses
    lisa: { A: 85, B: 100, C: 75 }    // Brand responses
};

// Calculate satisfaction when responses are made
When all stakeholder responses complete
    Set scene6_sarah_satisfaction = satisfactionMatrix.sarah[scene6_sarah_response]
    Set scene6_david_satisfaction = satisfactionMatrix.david[scene6_david_response]
    Set scene6_lisa_satisfaction = satisfactionMatrix.lisa[scene6_lisa_response]
    Set scene6_overall_satisfaction = (scene6_sarah_satisfaction + scene6_david_satisfaction + scene6_lisa_satisfaction) / 3
```

## Scene 7 Variables

### Primary Variables
```javascript
// Analytics data (calculated from previous scenes)
var scene7_projected_completion = 78;
var scene7_projected_satisfaction = 4.2;
var scene7_writing_improvement = 34;
var scene7_cost_per_learner = 285;

// Engagement analytics
var scene7_week1_participation = 95;
var scene7_week2_participation = 85;
var scene7_week3_participation = 82;
var scene7_week4_participation = 78;

// Component performance
var scene7_ai_feedback_usage = 92;
var scene7_peer_review_participation = 76;
var scene7_practice_brief_completion = 88;
var scene7_video_case_views = 94;

// Reflection responses
var scene7_success_measurement = "";
var scene7_data_collection_plan = "";
var scene7_iteration_strategy = "";
var scene7_reflection_score = 0;
```

### Dynamic Calculations
```javascript
// Personalized projections based on design choices
When scene7 loads
    // Base projections
    Set scene7_projected_completion = 45 // baseline
    Set scene7_projected_satisfaction = 2.1 // baseline
    
    // Adjust based on persona choice
    If scene2_primary_persona == "maya_associate"
        Add 15 to scene7_projected_completion // mobile-friendly boost
        Add 0.8 to scene7_projected_satisfaction
    Else if scene2_primary_persona == "robert_partner"
        Add 10 to scene7_projected_completion // efficiency focus
        Add 0.6 to scene7_projected_satisfaction
    Else if scene2_primary_persona == "patricia_judge"
        Add 8 to scene7_projected_completion // quality focus
        Add 1.2 to scene7_projected_satisfaction
    
    // Adjust based on modality choice
    If scene4_modality_choice == "hybrid"
        Add 18 to scene7_projected_completion
        Add 0.9 to scene7_projected_satisfaction
    Else if scene4_modality_choice == "digital"
        Add 12 to scene7_projected_completion
        Add 0.5 to scene7_projected_satisfaction
    Else if scene4_modality_choice == "workshop"
        Add 25 to scene7_projected_completion
        Add 1.1 to scene7_projected_satisfaction
    
    // Adjust based on effectiveness score
    Add (scene5_overall_effectiveness * 0.3) to scene7_projected_completion
    Add (scene5_overall_effectiveness * 0.02) to scene7_projected_satisfaction
```

## Scene 8 Variables

### Primary Variables
```javascript
// Completion tracking
var scene8_completion_status = true;
var scene8_final_effectiveness_score = 0;
var scene8_competency_demonstrated = true;
var scene8_simulation_completion_time = 0;

// Achievement tracking
var scene8_skills_demonstrated = [];
var scene8_design_choices_summary = {};
var scene8_stakeholder_success = false;

// Replay options
var scene8_replay_interest = ""; // "persona", "framework", "modality", "none"
var scene8_resource_downloads = [];
var scene8_social_shares = [];
```

### Final Calculations
```javascript
// Calculate final scores when Scene 8 loads
When scene8 loads
    // Compile final effectiveness score
    Set scene8_final_effectiveness_score = scene5_overall_effectiveness
    
    // Adjust for stakeholder satisfaction
    If scene6_overall_satisfaction >= 80
        Add 10 to scene8_final_effectiveness_score
        Set scene8_stakeholder_success = true
    Else if scene6_overall_satisfaction >= 60
        Add 5 to scene8_final_effectiveness_score
    
    // Cap at 100
    Set scene8_final_effectiveness_score = Math.min(100, scene8_final_effectiveness_score)
    
    // Compile skills demonstrated
    Add "Gap Analysis" to scene8_skills_demonstrated
    Add "Persona Application" to scene8_skills_demonstrated
    Add "Framework Selection" to scene8_skills_demonstrated
    Add "Modality Design" to scene8_skills_demonstrated
    Add "Course Prototyping" to scene8_skills_demonstrated
    Add "Stakeholder Management" to scene8_skills_demonstrated
    Add "Data Interpretation" to scene8_skills_demonstrated
    
    // Create design choices summary
    Set scene8_design_choices_summary = {
        persona: scene2_primary_persona,
        framework: scene3_design_framework,
        modality: scene4_modality_choice,
        effectiveness: scene8_final_effectiveness_score,
        satisfaction: scene6_overall_satisfaction
    }
```

## Global Utility Variables

### Progress Tracking
```javascript
var global_current_scene = 1;
var global_total_scenes = 8;
var global_progress_percentage = 0;
var global_start_time = 0;
var global_current_time = 0;
var global_total_time = 0;
```

### User Preferences
```javascript
var global_audio_enabled = true;
var global_captions_enabled = false;
var global_high_contrast = false;
var global_text_size = "normal"; // "small", "normal", "large"
```

### Debug Variables (Development Only)
```javascript
var debug_mode = false;
var debug_skip_videos = false;
var debug_auto_complete = false;
var debug_show_variables = false;
```

## Variable Validation Rules

### Required Variables for Scene Progression
```javascript
// Scene 1 → Scene 2
scene1_complete == true AND scene1_selections_count >= 3

// Scene 2 → Scene 3
scene2_complete == true AND scene2_primary_persona != "" AND scene2_all_videos_viewed == true

// Scene 3 → Scene 4
scene3_complete == true AND scene3_design_framework != ""

// Scene 4 → Scene 5
scene4_complete == true AND scene4_modality_choice != ""

// Scene 5 → Scene 6
scene5_complete == true AND scene5_total_components >= 4 AND scene5_overall_effectiveness > 0

// Scene 6 → Scene 7
scene6_complete == true AND scene6_overall_satisfaction > 0

// Scene 7 → Scene 8
scene7_complete == true AND scene7_reflection_score >= 60

// Scene 8 completion
scene8_completion_status == true
```

### Data Integrity Checks
```javascript
// Ensure numeric variables stay within bounds
When any numeric variable changes
    If variable < minimum_value
        Set variable = minimum_value
    If variable > maximum_value
        Set variable = maximum_value

// Ensure required arrays are not empty
When scene progression attempted
    If required_array.length == 0
        Show validation_error
        Prevent progression
```
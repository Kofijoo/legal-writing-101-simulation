import React, { createContext, useContext, useReducer } from 'react';

const SimulationContext = createContext();

const initialState = {
  // Scene 1 Variables
  scene1_problem_focus: [],
  scene1_engagement_priority: false,
  scene1_practical_focus: false,
  scene1_delivery_outdated: false,
  scene1_feedback_lacking: false,
  scene1_complete: false,
  scene1_selections_count: 0,

  // Scene 2 Variables
  scene2_primary_persona: '',
  scene2_design_priority: '',
  scene2_content_approach: '',
  scene2_maya_video_complete: false,
  scene2_robert_video_complete: false,
  scene2_patricia_video_complete: false,
  scene2_all_videos_viewed: false,
  scene2_alex_question: '',
  scene2_alex_response: '',

  // Scene 3 Variables
  scene3_design_framework: '',
  scene3_methodology_focus: '',
  scene3_tools_available: [],
  scene3_process_type: '',
  scene3_best_for: '',

  // Scene 4 Variables
  scene4_time_investment: 5,
  scene4_engagement_priority: 5,
  scene4_scalability_need: 5,
  scene4_modality_choice: '',
  scene4_workshop_score: 0,
  scene4_digital_score: 0,
  scene4_hybrid_score: 0,
  scene4_completion_rate: 0,
  scene4_implementation_weeks: 0,

  // Scene 5 Variables
  scene5_course_structure: [],
  scene5_component_sequence: [],
  scene5_total_components: 0,
  scene5_engagement_score: 0,
  scene5_learning_score: 0,
  scene5_application_score: 0,
  scene5_overall_effectiveness: 0,
  scene5_alex_suggestions: [],
  scene5_suggestions_used: 0,

  // Scene 6 Variables
  scene6_sarah_satisfaction: 0,
  scene6_david_satisfaction: 0,
  scene6_lisa_satisfaction: 0,
  scene6_overall_satisfaction: 0,
  scene6_sarah_response: '',
  scene6_david_response: '',
  scene6_lisa_response: '',
  scene6_design_revisions: [],

  // Scene 7 Variables
  scene7_projected_completion: 78,
  scene7_projected_satisfaction: 4.2,
  scene7_writing_improvement: 34,
  scene7_cost_per_learner: 285,
  scene7_reflection_responses: [],

  // Scene 8 Variables
  scene8_completion_status: false,
  scene8_final_effectiveness_score: 0,
  scene8_replay_interest: '',

  // Global Variables
  global_current_scene: 1,
  global_progress_percentage: 0,
  global_start_time: Date.now(),
  global_total_time: 0
};

function simulationReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_VARIABLE':
      return {
        ...state,
        [action.variable]: action.value
      };
    
    case 'UPDATE_MULTIPLE':
      return {
        ...state,
        ...action.updates
      };
    
    case 'ADD_TO_ARRAY':
      return {
        ...state,
        [action.variable]: [...state[action.variable], action.value]
      };
    
    case 'REMOVE_FROM_ARRAY':
      return {
        ...state,
        [action.variable]: state[action.variable].filter(item => item !== action.value)
      };
    
    case 'CALCULATE_SCENE4_SCORES':
      const workshopScore = (state.scene4_time_investment * 0.4) + 
                           (state.scene4_engagement_priority * 0.5) + 
                           (state.scene4_scalability_need * 0.1);
      const digitalScore = (state.scene4_time_investment * 0.2) + 
                          (state.scene4_engagement_priority * 0.3) + 
                          (state.scene4_scalability_need * 0.5);
      const hybridScore = (state.scene4_time_investment * 0.3) + 
                         (state.scene4_engagement_priority * 0.4) + 
                         (state.scene4_scalability_need * 0.3);
      
      let modalityChoice = 'hybrid';
      if (workshopScore > digitalScore && workshopScore > hybridScore) {
        modalityChoice = 'workshop';
      } else if (digitalScore > hybridScore) {
        modalityChoice = 'digital';
      }
      
      return {
        ...state,
        scene4_workshop_score: workshopScore,
        scene4_digital_score: digitalScore,
        scene4_hybrid_score: hybridScore,
        scene4_modality_choice: modalityChoice,
        scene4_completion_rate: 45 + (state.scene4_engagement_priority * 5),
        scene4_implementation_weeks: 2 + (state.scene4_time_investment * 0.6)
      };
    
    case 'CALCULATE_SCENE5_EFFECTIVENESS':
      const components = state.scene5_course_structure;
      let engagementScore = 0;
      let learningScore = 0;
      let applicationScore = 0;
      
      components.forEach(component => {
        engagementScore += component.engagement || 0;
        learningScore += component.learning || 0;
        applicationScore += component.application || 0;
      });
      
      const overallEffectiveness = (engagementScore + learningScore + applicationScore) / 3;
      
      return {
        ...state,
        scene5_engagement_score: Math.min(100, engagementScore),
        scene5_learning_score: Math.min(100, learningScore),
        scene5_application_score: Math.min(100, applicationScore),
        scene5_overall_effectiveness: Math.min(100, overallEffectiveness),
        scene5_total_components: components.length
      };
    
    case 'SET_SCENE':
      return {
        ...state,
        global_current_scene: action.scene,
        global_progress_percentage: (action.scene / 8) * 100
      };
    
    default:
      return state;
  }
}

export function SimulationProvider({ children }) {
  const [state, dispatch] = useReducer(simulationReducer, initialState);
  
  return (
    <SimulationContext.Provider value={{ state, dispatch }}>
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulationState() {
  const context = useContext(SimulationContext);
  if (!context) {
    throw new Error('useSimulationState must be used within a SimulationProvider');
  }
  return context;
}
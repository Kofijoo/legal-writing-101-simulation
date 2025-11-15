import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSimulationState } from '../../hooks/useSimulationState';
import NavigationButtons from '../common/NavigationButtons';
import { FaPlay, FaBook, FaPencilAlt, FaClipboardCheck, FaLink } from 'react-icons/fa';
import '../../styles/scene5.css';

const Scene5CourseBuilder = () => {
  const { dispatch } = useSimulationState();
  const navigate = useNavigate();
  const [draggedItem, setDraggedItem] = useState(null);
  const [courseModules, setCourseModules] = useState([]);

  useEffect(() => {
    dispatch({ type: 'SET_SCENE', scene: 5 });
  }, [dispatch]);

  const availableModules = [
    { id: 'intro', title: 'Course Introduction', duration: '15 min', type: 'intro' },
    { id: 'legal-basics', title: 'Legal Writing Basics', duration: '45 min', type: 'content' },
    { id: 'structure', title: 'Document Structure', duration: '30 min', type: 'content' },
    { id: 'research', title: 'Legal Research Methods', duration: '60 min', type: 'content' },
    { id: 'citations', title: 'Citation Standards', duration: '30 min', type: 'content' },
    { id: 'practice1', title: 'Practice Exercise 1', duration: '20 min', type: 'exercise' },
    { id: 'case-study', title: 'Case Study Analysis', duration: '40 min', type: 'content' },
    { id: 'practice2', title: 'Practice Exercise 2', duration: '25 min', type: 'exercise' },
    { id: 'review', title: 'Review & Assessment', duration: '30 min', type: 'assessment' },
    { id: 'resources', title: 'Additional Resources', duration: '10 min', type: 'resource' }
  ];

  const handleDragStart = (e, module) => {
    setDraggedItem(module);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem && !courseModules.find(m => m.id === draggedItem.id)) {
      setCourseModules([...courseModules, { ...draggedItem, order: courseModules.length + 1 }]);
    }
    setDraggedItem(null);
  };

  const removeModule = (moduleId) => {
    setCourseModules(courseModules.filter(m => m.id !== moduleId));
  };



  const getTotalDuration = () => {
    return courseModules.reduce((total, module) => {
      const duration = parseInt(module.duration);
      return total + duration;
    }, 0);
  };

  const getModuleTypeIcon = (type) => {
    const icons = {
      intro: <FaPlay />,
      content: <FaBook />,
      exercise: <FaPencilAlt />,
      assessment: <FaClipboardCheck />,
      resource: <FaLink />
    };
    return icons[type] || <FaBook />;
  };

  const handleContinue = () => {
    if (courseModules.length >= 3) {
      dispatch({
        type: 'UPDATE_MULTIPLE',
        updates: {
          scene5_course_structure: courseModules,
          scene5_total_components: courseModules.length,
          scene5_complete: true
        }
      });
      navigate('/scene6');
    }
  };

  const handleBack = () => {
    navigate('/scene4');
  };

  return (
    <div className="scene scene5">
      <div className="scene-content">
      <div className="scene-header">
        <h2>Build Course</h2>
        <p>Drag modules to create structure</p>
      </div>

      <div className="course-builder-layout">
        <div className="module-library">
          <h3>Module Library</h3>
          <div className="available-modules">
            {availableModules.map(module => (
              <div
                key={module.id}
                className={`module-item ${courseModules.find(m => m.id === module.id) ? 'used' : ''}`}
                draggable={!courseModules.find(m => m.id === module.id)}
                onDragStart={(e) => handleDragStart(e, module)}
              >
                <div className="module-icon">{getModuleTypeIcon(module.type)}</div>
                <div className="module-info">
                  <div className="module-title">{module.title}</div>
                  <div className="module-duration">{module.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="course-outline">
          <h3>Your Course Outline</h3>
          <div 
            className="drop-zone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {courseModules.length === 0 ? (
              <div className="empty-state">
                <p>Drag modules here</p>
              </div>
            ) : (
              courseModules.map((module, index) => (
                <div key={module.id} className="course-module">
                  <span className="module-order">{index + 1}</span>
                  <div className="module-icon">{getModuleTypeIcon(module.type)}</div>
                  <div className="module-info">
                    <div className="module-title">{module.title}</div>
                    <div className="module-duration">{module.duration}</div>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeModule(module.id)}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>
          
          {courseModules.length > 0 && (
            <div className="course-summary">
              <div className="summary-item">
                <strong>Total Modules:</strong> {courseModules.length}
              </div>
              <div className="summary-item">
                <strong>Total Duration:</strong> {getTotalDuration()} minutes
              </div>
            </div>
          )}
        </div>
      </div>

      {courseModules.length >= 3 && (
        <div className="alex-analysis">
          <div className="alex-character">
            <img src="/ALEX_avatar.png" alt="ALEX" className="alex-avatar" />
            <div className="alex-dialogue">
              <h3>ALEX Analysis</h3>
              <p>Solid structure! {courseModules.length} modules, {getTotalDuration()} minutes total.</p>
              <p>Good balance of content and practice.</p>
            </div>
          </div>
        </div>
      )}

      </div>

      <NavigationButtons
        onPrevious={handleBack}
        onNext={handleContinue}
        nextDisabled={courseModules.length < 3}
        previousLabel="Back"
        nextLabel="Get Stakeholder Feedback"
      />
    </div>
  );
};

export default Scene5CourseBuilder;
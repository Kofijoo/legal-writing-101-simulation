import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SimulationProvider } from './hooks/useSimulationState';
import Scene1ProblemBrief from './components/scenes/Scene1ProblemBrief';
import Scene2Personas from './components/scenes/Scene2Personas';
import Scene3Framework from './components/scenes/Scene3Framework';
import Scene4Modality from './components/scenes/Scene4Modality';
import Scene5CourseBuilder from './components/scenes/Scene5CourseBuilder';
import Scene6Stakeholders from './components/scenes/Scene6Stakeholders';
import Scene7Analytics from './components/scenes/Scene7Analytics';
import Scene8Completion from './components/scenes/Scene8Completion';
import ProgressBar from './components/common/ProgressBar';
import './styles/globals.css';
import './styles/progress-bar.css';
import './styles/scene1.css';
import './styles/scene2.css';
import './styles/scene3.css';
import './styles/scene4.css';
import './styles/scene5.css';
import './styles/scene6.css';
import './styles/scene7.css';
import './styles/scene8.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <SimulationProvider>
        <Router>
          <div className="app">
            <ProgressBar />
            <Routes>
              <Route path="/" element={<Scene1ProblemBrief />} />
              <Route path="/scene1" element={<Scene1ProblemBrief />} />
              <Route path="/scene2" element={<Scene2Personas />} />
              <Route path="/scene3" element={<Scene3Framework />} />
              <Route path="/scene4" element={<Scene4Modality />} />
              <Route path="/scene5" element={<Scene5CourseBuilder />} />
              <Route path="/scene6" element={<Scene6Stakeholders />} />
              <Route path="/scene7" element={<Scene7Analytics />} />
              <Route path="/scene8" element={<Scene8Completion />} />
            </Routes>
          </div>
        </Router>
      </SimulationProvider>
    </DndProvider>
  );
}

export default App;
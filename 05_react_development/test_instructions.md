# Test Instructions - Legal Writing 101 React Application

## Setup and Launch

1. **Navigate to React folder**
   ```bash
   cd e:\KOFIJOO\legal_writing_101\05_react_development
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   - Opens automatically at http://localhost:3000
   - If not, manually navigate to http://localhost:3000

## Scene 1 Testing Checklist

### Visual Elements
- [ ] Conference room background displays
- [ ] Sarah Kim headshot appears (left side)
- [ ] Progress bar shows Scene 1 active
- [ ] JUS branding colors visible

### Interactive Elements
- [ ] 7 problem checkboxes display
- [ ] Clicking checkboxes toggles selection
- [ ] Selection counter updates in real-time
- [ ] Feedback message changes based on selections

### Validation Testing
- [ ] With 0-2 selections: "Continue" button disabled
- [ ] With 3+ selections: "Continue" button enabled
- [ ] Warning message shows when <3 selected
- [ ] Success message shows when 3+ selected

### Data Dashboard
- [ ] Current metrics display (45%, 2.1/5, 500+)
- [ ] Feedback quotes visible
- [ ] Professional styling applied

### Navigation
- [ ] No "Previous" button (first scene)
- [ ] "Continue to Personas" button present
- [ ] Button disabled until 3+ problems selected
- [ ] Clicking enabled button navigates to Scene 2

### Responsive Design
- [ ] Layout works on desktop (1920x1080)
- [ ] Layout adapts on tablet (768px)
- [ ] Layout adapts on mobile (375px)
- [ ] Character image scales appropriately

## Expected Behavior

### Problem Selection Flow
1. Page loads with 0 selections
2. Warning message: "Select at least 3 problems to continue. Currently selected: 0"
3. Click any 3 checkboxes
4. Success message: "Good analysis! You've selected 3 problems. These issues will guide our redesign."
5. "Continue" button becomes clickable
6. Click "Continue" → navigates to Scene 2 (placeholder)

### State Management Test
1. Select problems in Scene 1
2. Navigate to Scene 2
3. Use browser back button
4. Verify selections are preserved

## Troubleshooting

### Common Issues
- **Assets not loading**: Check file paths in Scene1ProblemBrief.js
- **Styles not applied**: Verify globals.css import in App.js
- **Navigation not working**: Check react-router-dom installation
- **State not persisting**: Check useSimulationState hook

### Asset Paths
- Sarah Kim: `../../../03_assets/images/Sarah_Kim_headshot.png`
- Conference Room: `../../../03_assets/images/Conference_room_background.png`

### Browser Console
- Check for JavaScript errors
- Verify asset loading in Network tab
- Test responsive design with DevTools

## Success Criteria

✅ **Scene 1 Complete** when:
- All visual elements render correctly
- Problem selection works with validation
- State management persists selections
- Navigation to Scene 2 functions
- Responsive design works across devices
- No console errors

## Next Development Phase

After Scene 1 testing passes:
1. Create Maya, Robert, Patricia headshots
2. Build Scene 2 persona selection
3. Implement video completion tracking
4. Add ALEX AI assistant interactions

**Ready to test? Run the commands above and verify Scene 1 functionality.**
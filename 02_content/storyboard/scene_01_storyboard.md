# Scene 1 Storyboard: The Problem Brief

**Duration:** 1 minute
**Setting:** JUS conference room
**Characters:** Sarah Kim (Learning Director), Learner

## Visual Layout

### Slide 1.1: Opening
**Background:** Modern conference room, large screen
**Characters:** Sarah Kim (professional headshot, left side)
**UI Elements:** JUS logo, scene progress bar
**Audio:** Background office ambiance (low)

### Slide 1.2: Problem Statement
**Background:** Same conference room
**Characters:** Sarah Kim (animated, gesturing to screen)
**Screen Content:** "Legal Writing 101 - Current Performance"
**Audio:** Sarah's narration

### Slide 1.3: Data Dashboard
**Background:** Close-up of presentation screen
**Visual Elements:**
- Completion Rate: 45% (red indicator)
- Satisfaction Score: 2.1/5 stars (yellow warning)
- Student Comments: "Too theoretical", "Can't apply to real cases"
**Audio:** Data explanation narration

### Slide 1.4: Interactive Challenge
**Background:** Conference room with learner perspective
**UI Elements:** 
- Problem identification checklist
- "Select top 3 issues" instruction
- Submit button
**Audio:** Instruction prompt

## Script

### Sarah Kim Narration:
"Welcome to JUS. I'm Sarah Kim, Learning Director. We have a challenge that needs your expertise.

Our Legal Writing 101 course isn't working. Look at these numbers - only 45% completion rate, and learners are telling us it's too theoretical.

Comments like 'I can't apply this to real cases' and 'feels outdated' are common. We need a complete redesign.

Your mission: transform this traditional course into a modern, blended learning experience that actually improves legal writing performance.

First, help me identify the core problems we need to solve."

## Interactions

### Problem Identification (Multiple Select):
- [ ] Low engagement and completion rates
- [ ] Content too theoretical, not practical
- [ ] Outdated delivery methods (lecture-heavy)
- [ ] No real-world application opportunities
- [ ] Limited feedback and assessment
- [ ] One-size-fits-all approach
- [ ] Poor mobile accessibility

**Feedback Logic:**
- 3+ selections: "Good analysis. These issues will guide our redesign."
- <3 selections: "Consider additional factors that might impact learner success."

## Variables Set:
- problem_focus = [selected issues]
- scene_1_complete = true
- engagement_priority = [based on selections]

## Transition:
"Now let's understand who we're designing for. Meet the learners who need this course to work."

**Next Scene:** Scene 2 - Analyze Learner Personas
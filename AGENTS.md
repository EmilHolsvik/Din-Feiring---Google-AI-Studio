# AGENTS.md

## Mission
- Ship frontend work that is visually polished, responsive, accessible, and aligned with this repo's design system.
- Do not stop when the code compiles. Finish when the UI holds up in the browser and feels intentionally designed.

## Required Prompt Structure
For ambiguous or larger frontend tasks, organize the work with:
- `Goal`
- `Context`
- `Constraints`
- `Done when`

If the user does not provide this structure, infer it before editing.

## Plan-First Behavior
- Plan before editing any non-trivial UI task.
- Identify the target page, affected components, styling system, design tokens, data dependencies, and likely visual risks.
- Name the highest-risk areas early: spacing, hierarchy, responsive collapse, inconsistent component use, and weak CTA structure.

## Visual Implementation Rules
- Reuse the existing design system, components, tokens, spacing scale, typography scale, colors, icons, and layout primitives whenever possible.
- Prefer extending existing patterns over inventing one-off styles.
- Do not introduce random custom UI unless a clear gap exists.
- Avoid generic AI-looking layouts.
- Prioritize hierarchy, spacing consistency, alignment, readability, and clear CTA structure.
- Make the first viewport feel designed on purpose, not assembled from defaults.

## Browser Review Loop
For substantial frontend tasks, follow this workflow:
1. Implement the first pass.
2. Run the app locally.
3. Open the target page in a real browser.
4. Inspect desktop, laptop, tablet, and mobile widths.
5. Capture screenshots or use visual browser inspection.
6. Compare the result against the request and any provided references.
7. Identify the top UI and UX issues.
8. Make targeted fixes.
9. Re-run and re-check before finalizing.

## Breakpoints
Always review the target UI at:
- `1440px`
- `1024px`
- `768px`
- `390px`

## UI Review Rubric
Score or explicitly check:
- visual hierarchy
- composition and balance
- spacing consistency
- typography clarity
- color and contrast
- component consistency
- responsive behavior
- accessibility basics
- interaction clarity
- brand distinctiveness
- overall polish

## Screenshot-Loop Caveats
- Do not get stuck chasing frame-perfect screenshots for animation-heavy or highly dynamic UI.
- In those cases, review structure, readability, placement, responsiveness, perceived polish, and interaction clarity instead.

## Reference-Driven Workflow
- Treat screenshots, inspiration sites, Figma references, and component references as visual targets.
- Translate those references into this repo's design system and code conventions.
- Do not copy references blindly or paste in mismatched patterns.

## Component-Upgrade Workflow
- Once the base page is solid, improve it section by section.
- Prefer small, high-impact upgrades over full redesign churn.
- Upgrade weak sections individually instead of destabilizing the whole page at once.

## Definition Of Done
Frontend work is not done unless:
- the page works
- the layout holds at the required breakpoints
- major spacing, hierarchy, and responsiveness issues have been reviewed and fixed
- the final response includes a post-review summary of what changed
- the final response lists remaining visual weaknesses honestly

## Output Expectations
End each substantial UI task with:
- brief plan
- implementation summary
- visual review findings
- fixes made after review
- remaining issues

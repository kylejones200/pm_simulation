import { Node } from "../types/game";

export const NODES: Record<string, Node> = {
  // Phase 1 – Initiation
  kickoff: {
    id: "kickoff",
    location: "Kickoff Meeting",
    description: [
      "The boardroom hums with anticipation—executives, engineers, and finance all watching you.",
      "You’ve been asked to steer a high‑profile IT rollout that’s already on everyone’s radar.",
      "Nine months to deliver, a budget with little slack, and expectations that leave no room for guesswork.",
      "How you frame the challenge now will shape what the team values most in the months ahead.",
    ],
    options: [
      { key: "a", label: "Stress on‑time delivery", next: "react1", impact: { time: +2, scope: -1, stake: 0 } },
      { key: "b", label: "Emphasize cost control", next: "react1", impact: { cost: +2, stake: 0, scope: -1 } },
      { key: "c", label: "Highlight quality and innovation", next: "react1", impact: { scope: +2, time: -1 } },
    ],
  },
  react1: {
    id: "react1",
    location: "Stakeholder Reactions",
    description: [
      "Reactions ripple across the table: finance nods at any hint of thrift.",
      "Engineers warm to your talk of quality and clarity.",
      "The client leans forward—speed, they insist, is what will win hearts.",
      "Where do you dig deeper first?",
    ],
    options: [
      { key: "a", label: "Meet Finance on budget limits", next: "quiz1", impact: { cost: +1 } },
      { key: "b", label: "Meet Engineering on technical risks", next: "quiz1", impact: { scope: +1 } },
      { key: "c", label: "Meet Client on requirements", next: "quiz1", impact: { stake: +1 } },
    ],
  },
  quiz1: {
    id: "quiz1",
    location: "Stakeholder Analysis Checkpoint",
    description: [
      "As the discussion settles, you revisit the playbook in your mind—where does stakeholder analysis truly begin?",
      "Choose well; the charter won’t move forward without it.",
    ],
    quiz: { prompt: "Which process group includes stakeholder analysis?", correctKey: "a" },
    options: [
      { key: "a", label: "Initiating", next: "charter", impact: { stake: +2 }, requiresCorrect: true, feedback: "Correct. You identify who matters before plans harden." },
      { key: "b", label: "Planning", next: "quiz1", feedback: "Close. You start analysis earlier to guide plans." },
      { key: "c", label: "Executing", next: "quiz1", feedback: "Not here. You engage long before delivery starts." },
    ],
  },
  charter: {
    id: "charter",
    location: "Project Charter",
    description: [
      "The charter draft lands on the table, crisp and promising.",
      "The CEO fixes you with a steady look: how will you balance the competing demands?",
      "Your approach here will define credibility for the road ahead.",
    ],
    options: [
      { key: "a", label: "Use the triple constraint and tradeoffs", next: "plan1", impact: { time: +1, cost: +1, scope: +1, stake: +1 } },
      { key: "b", label: "Promise no tradeoffs", next: "plan1", impact: { stake: -2 } },
      { key: "c", label: "Defer hard calls upward", next: "plan1", impact: { stake: -1 } },
    ],
  },

  // Phase 2 – Planning
  plan1: {
    id: "plan1",
    location: "Planning Workshop",
    description: [
      "Whiteboards fill with sticky notes as the team starts sketching a work breakdown structure.",
      "Debate sparks—go broad and fast, or dig deep and define the edges now?",
    ],
    options: [
      { key: "a", label: "High‑level WBS only", next: "quiz2", impact: { time: +1, scope: -1 } },
      { key: "b", label: "Detailed WBS with sub‑tasks", next: "quiz2", impact: { scope: +2 } },
      { key: "c", label: "Skip WBS and jump to dates", next: "quiz2", impact: { scope: -2, stake: -1 } },
    ],
  },
  quiz2: {
    id: "quiz2",
    location: "Sequencing Activities",
    description: [
      "It’s time to stitch the plan into a coherent flow—what technique sets the logic and reveals the slack?",
    ],
    quiz: { prompt: "Which tool sequences activities on the network?", correctKey: "c" },
    options: [
      { key: "a", label: "PERT only", next: "risk1", feedback: "PERT estimates but does not stand alone for control." },
      { key: "b", label: "Gantt Chart", next: "risk1", feedback: "Gantts display order yet do not compute the path." },
      { key: "c", label: "Critical Path Method", next: "risk1", requiresCorrect: true, impact: { time: +2 }, feedback: "Correct. CPM drives sequence and slack." },
    ],
  },
  risk1: {
    id: "risk1",
    location: "Risk Planning",
    description: [
      "Whispers of vendor delays, scope creep, and funding cuts drift through the room.",
      "You decide how to confront uncertainty before it decides for you.",
    ],
    options: [
      { key: "a", label: "Log risks and owners with responses", next: "base1", impact: { time: +1, cost: +1, stake: +1 } },
      { key: "b", label: "Ignore until failure appears", next: "base1", impact: { time: -2, cost: -2 } },
      { key: "c", label: "Push all risk to the client", next: "base1", impact: { stake: -2 } },
    ],
  },
  base1: {
    id: "base1",
    location: "Baseline Approval",
    description: [
      "Your baseline is assembled—dates, dollars, and deliverables aligned.",
      "Finance eyes the contingency line like a skeptic at a magic show.",
    ],
    options: [
      { key: "a", label: "Defend contingency as a response", next: "exec1", impact: { cost: +2, stake: +1 } },
      { key: "b", label: "Trim contingency for speed", next: "exec1", impact: { cost: -1, time: +1 } },
      { key: "c", label: "Remove contingency", next: "exec1", impact: { cost: -3 } },
    ],
  },

  // Phase 3 – Execution
  exec1: {
    id: "exec1",
    location: "Team Kickoff",
    description: [
      "Work begins, and momentum builds—until a developer raises a hand: parts of the spec are foggy.",
      "Meanwhile, the client taps the table, hungry for faster output.",
    ],
    options: [
      { key: "a", label: "Escalate to executives", next: "quiz3", impact: { stake: -1 } },
      { key: "b", label: "Clarify scope and adjust backlog", next: "quiz3", impact: { scope: +1, time: 0 } },
      { key: "c", label: "Push harder without clarity", next: "quiz3", impact: { time: -1, scope: -1 } },
    ],
  },
  quiz3: {
    id: "quiz3",
    location: "Process Check",
    description: [
      "You pause to ground the team: which process group actually directs and manages the work?",
    ],
    quiz: { prompt: "Which process group runs delivery work?", correctKey: "b" },
    options: [
      { key: "a", label: "Planning", next: "scope1", feedback: "Plans guide action yet do not execute it." },
      { key: "b", label: "Executing", next: "scope1", requiresCorrect: true, impact: { stake: +1 }, feedback: "Correct. You lead real work here." },
      { key: "c", label: "Monitoring and Controlling", next: "scope1", feedback: "That group tracks and guides." },
    ],
  },
  scope1: {
    id: "scope1",
    location: "Scope Change",
    description: [
      "New features shimmer on the horizon—the client wants more, but the calendar refuses to budge.",
    ],
    options: [
      { key: "a", label: "Accept informally", next: "conflict1", impact: { time: -2, cost: -2 } },
      { key: "b", label: "Run change control", next: "conflict1", impact: { cost: +1, time: +1, scope: +1, stake: +1 } },
      { key: "c", label: "Refuse all changes", next: "conflict1", impact: { stake: -1 } },
    ],
  },
  conflict1: {
    id: "conflict1",
    location: "Design Dispute",
    description: [
      "Two senior engineers lock horns over design philosophy, and progress stutters.",
      "Left alone, this will ripple through every sprint that follows.",
    ],
    options: [
      { key: "a", label: "Facilitate a resolution meeting", next: "rev1", impact: { stake: +1, time: +1 } },
      { key: "b", label: "Pick a design by fiat", next: "rev1", impact: { stake: -1 } },
      { key: "c", label: "Ignore the conflict", next: "rev1", impact: { time: -1, stake: -1 } },
    ],
  },

  // Phase 4 – Monitoring & Controlling
  rev1: {
    id: "rev1",
    location: "Mid‑Project Review",
    description: [
      "Half the budget is spoken for, yet progress hovers around forty percent.",
      "Leaders lean in: show us the truth behind the trend.",
    ],
    options: [
      { key: "a", label: "Show Earned Value metrics", next: "quiz4", impact: { stake: +2 } },
      { key: "b", label: "Reassure without data", next: "quiz4", impact: { stake: -2 } },
      { key: "c", label: "Blame vendors", next: "quiz4", impact: { stake: -1 } },
    ],
  },
  quiz4: {
    id: "quiz4",
    location: "EVM Check",
    description: [
      "Your dashboard lights up with EVM metrics—time to calculate what the schedule is really telling you.",
    ],
    quiz: { prompt: "What does Schedule Variance measure?", correctKey: "a" },
    options: [
      { key: "a", label: "EV − PV", next: "risk2", requiresCorrect: true, feedback: "Correct. Positive means ahead." },
      { key: "b", label: "EV − AC", next: "quiz4", feedback: "That is Cost Variance." },
      { key: "c", label: "Budget − Forecast", next: "quiz4", feedback: "That is not an EVM measure." },
    ],
  },
  risk2: {
    id: "risk2",
    location: "Risk Trigger",
    description: [
      "Bad news lands in your inbox: a vendor has slipped by two weeks.",
      "Something must give—resources, sequence, or expectations.",
    ],
    options: [
      { key: "a", label: "Crash with added staff", next: "quality1", impact: { cost: -2, time: +2 } },
      { key: "b", label: "Fast track by overlap", next: "quality1", impact: { time: +1, scope: -1 } },
      { key: "c", label: "Accept the slip", next: "quality1", impact: { time: -2 } },
    ],
  },
  quality1: {
    id: "quality1",
    location: "Quality Issue",
    description: [
      "Testing uncovers a cluster of defects—nothing catastrophic, but enough to matter.",
      "Rework will cost time and money; reputation is also on the line.",
    ],
    options: [
      { key: "a", label: "Fix now", next: "close1", impact: { scope: +1, cost: -2, time: -1, stake: +1 } },
      { key: "b", label: "Defer to a later release", next: "close1", impact: { stake: -1, scope: -1 } },
      { key: "c", label: "Ship with known defects", next: "close1", impact: { stake: -3 } },
    ],
  },

  // Phase 5 – Closure
  close1: {
    id: "close1",
    location: "Final Handover",
    description: [
      "The system goes live to a modest round of applause and cautious smiles.",
      "Executives ask what remains to formally wrap this effort.",
    ],
    options: [
      { key: "a", label: "Run formal acceptance and close contracts", next: "quiz5", impact: { stake: +2, cost: +1 } },
      { key: "b", label: "Skip formalities and celebrate", next: "quiz5", impact: { stake: -2 } },
      { key: "c", label: "Leave contracts open", next: "quiz5", impact: { cost: -1, stake: -1 } },
    ],
  },
  quiz5: {
    id: "quiz5",
    location: "Lessons Learned",
    description: [
      "You gather the team to capture insights—what worked, what hurt, and what you’d repeat or retire.",
    ],
    quiz: { prompt: "Which process group captures lessons learned?", correctKey: "b" },
    options: [
      { key: "a", label: "Planning", next: "ending", feedback: "You capture lessons at the end." },
      { key: "b", label: "Closing", next: "ending", requiresCorrect: true, feedback: "Correct. You archive and release here." },
      { key: "c", label: "Executing", next: "ending", feedback: "Delivery feeds lessons yet does not archive them." },
    ],
  },
  ending: {
    id: "ending",
    location: "Project Outcome",
    description: [
      "You present a clear close‑out report that ties decisions to outcomes.",
      "The results reflect every trade you made along the way.",
    ],
    options: [
      { key: "r", label: "Play again", next: "kickoff" },
      { key: "t", label: "Download transcript", next: "ending" },
    ],
    isEnding: true,
    endingTitle: "Close‑Out",
  },
};

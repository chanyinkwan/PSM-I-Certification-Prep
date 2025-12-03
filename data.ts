import { Question } from './types';

// A subset of questions parsed from the prompt to make the app functional immediately.
export const QUESTIONS: Question[] = [
  {
    "id": 1,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "When many Scrum Teams are working on the same product, should all of their Increments be integrated every Sprint?",
    "options": [
      "Yes, but only for Scrum Teams whose work has dependencies.",
      "Yes, otherwise the Product Owners (and stakeholders) may not be able to accurately inspect what is done.",
      "No, each Scrum Team stands alone.",
      "No, that is far too hard and must be done in a hardening Sprint."
    ],
    "correct_answers": [
      "Yes, otherwise the Product Owners (and stakeholders) may not be able to accurately inspect what is done."
    ]
  },
  {
    "id": 2,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When can a Development Team cancel a Sprint?",
    "options": [
      "It can't. Only Product Owners can cancel Sprints.",
      "When functional expectations are not well understood.",
      "When the Product Owner is absent too often.",
      "When the selected Product Backlog items for the Sprint become unachievable.",
      "When a technical dependency cannot be resolved."
    ],
    "correct_answers": [
      "It can't. Only Product Owners can cancel Sprints."
    ]
  },
  {
    "id": 3,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Which output from Sprint Planning provides the Development Team with a target and overarching direction for the Sprint?",
    "options": [
      "The Sprint Backlog.",
      "The Sprint Goal",
      "The release plan.",
      "Sprint Review minutes."
    ],
    "correct_answers": [
      "The Sprint Goal"
    ]
  },
  {
    "id": 7,
    "type": "multi_select",
    "category": "Artifacts",
    "question": "What are two effective ways for the Scrum Team to make non-functional requirements visible? (Choose two.)",
    "options": [
      "Put them on a separate list on the Scrum board, available for all to see.",
      "Add them to the Product Backlog to ensure transparency.",
      "Run the integration and regression tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint.",
      "Add them to the definition of \"Done\" so the work is taken care of every Sprint."
    ],
    "correct_answers": [
      "Add them to the Product Backlog to ensure transparency.",
      "Add them to the definition of \"Done\" so the work is taken care of every Sprint."
    ]
  },
  {
    "id": 20,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "What are three ways Scrum promotes self-organization? (Choose three.)",
    "options": [
      "By not allowing documentation.",
      "By the Development Team deciding what work to do in a Sprint.",
      "By preventing stakeholders from entering the development room.",
      "By removing titles for Development Team members.",
      "By being a lightweight framework."
    ],
    "correct_answers": [
      "By the Development Team deciding what work to do in a Sprint.",
      "By removing titles for Development Team members.",
      "By being a lightweight framework."
    ]
  },
  {
    "id": 150,
    "type": "multi_select",
    "category": "Roles",
    "question": "A new Product Owner comes in... Which two activities are part of the Product Owner role according to Scrum? (Choose two.)",
    "options": [
      "Ensuring that the most valuable functionality is produced first, at all times.",
      "Interacting with stakeholders.",
      "Providing the Development Team with detailed specifications.",
      "Describing features as Use Cases.",
      "Creating detailed functional test cases."
    ],
    "correct_answers": [
      "Ensuring that the most valuable functionality is produced first, at all times.",
      "Interacting with stakeholders."
    ]
  },
  {
    "id": 25,
    "type": "true_false",
    "category": "Events",
    "question": "A properly functioning Scrum Team will have at least one Release Sprint and may well have several.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 11,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Which of the following is required by Scrum?",
    "options": [
      "Sprint Retrospective.",
      "Members must be stand up at the Daily Scrum.",
      "Sprint Burndown Chart.",
      "Release planning.",
      "All of the above."
    ],
    "correct_answers": [
      "Sprint Retrospective."
    ]
  },
  {
    "id": 39,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "Which statement best describes Scrum?",
    "options": [
      "A defined and predictive process that conforms to the principles of Scientific Management.",
      "A complete methodology that defines how to develop software.",
      "A cookbook that defines best practices for software development.",
      "A framework within which complex products in complex environments are developed."
    ],
    "correct_answers": [
      "A framework within which complex products in complex environments are developed."
    ]
  },
  {
    "id": 40,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "Which Scrum Values are exhibited by not building Product Backlog items that have low business value? (Choose three.)",
    "options": [
      "Economic Value Added.",
      "Respect.",
      "Focus.",
      "Earned Value.",
      "Courage."
    ],
    "correct_answers": [
      "Respect.",
      "Focus.",
      "Courage."
    ]
  },
  {
    "id": 4,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "How should a Development Team deal with non-functional requirements?",
    "options": [
      "Ensure every Increment meets them.",
      "Make sure the release department understands these requirements, but it is not the Development Team's responsibility.",
      "Handle them during the Integration Sprint preceding the Release Sprint.",
      "Assign them to the lead developers on the team."
    ],
    "correct_answers": [
      "Ensure every Increment meets them."
    ]
  },
  {
    "id": 5,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When is a Sprint over?",
    "options": [
      "When the Product Owner says it is done.",
      "When all Product Backlog items meet their definition of Done.",
      "When all the tasks are completed.",
      "When the time-box expires."
    ],
    "correct_answers": [
      "When the time-box expires."
    ]
  },
  {
    "id": 6,
    "type": "true_false",
    "category": "Roles",
    "question": "True or False: Scrum has a role called \"Project Manager\".",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 8,
    "type": "multiple_choice",
    "category": "Events",
    "question": "How much time is required after a Sprint to prepare for the next Sprint?",
    "options": [
      "The break between Sprints is time-boxed to 1 week for 30 day Sprints, and usually less for shorter sprints.",
      "Enough time for the requirements for the next Sprint to be determined and documented.",
      "Enough time for the Development team to finish the testing from the last Sprint.",
      "None. A new Sprint starts immediately following the end of the previous Sprint."
    ],
    "correct_answers": [
      "None. A new Sprint starts immediately following the end of the previous Sprint."
    ]
  },
  {
    "id": 9,
    "type": "multi_select",
    "category": "Events",
    "question": "During Sprint Planning the Product Owner and the Developers are unable to reach an understanding about the highest order Product Backlog items... Which of the following actions should the Scrum Master support? (Choose two.)",
    "options": [
      "Cancel the Sprint. Send the entire team to an advanced Scrum training and then start a new Sprint.",
      "Forecast the Product Backlog items that are most likely to meet the Sprint Goal and create the Sprint Backlog. Conclude Sprint Planning and start the development work.",
      "Continue the Sprint Planning event past its timebox until an adequate number of Product Backlog items are well enough understood.",
      "During the next Sprint Retrospective discuss why this happened and what changes will make it less likely to recur.",
      "Ask everyone to take as much time as needed to analyze the Product Backlog first, and then reconvene."
    ],
    "correct_answers": [
      "Forecast the Product Backlog items that are most likely to meet the Sprint Goal and create the Sprint Backlog. Conclude Sprint Planning and start the development work.",
      "During the next Sprint Retrospective discuss why this happened and what changes will make it less likely to recur."
    ]
  },
  {
    "id": 10,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who can cancel a Sprint?",
    "options": [
      "The Scrum Team.",
      "The Scrum Master.",
      "The Product Owner.",
      "The Stakeholders."
    ],
    "correct_answers": [
      "The Product Owner."
    ]
  },
  {
    "id": 12,
    "type": "multiple_choice",
    "category": "Events",
    "question": "What is the purpose of a Sprint Review?",
    "options": [
      "To take time to judge the validity of the project.",
      "To inspect the product Increment with the stakeholders and collect feedback on next steps.",
      "To review the Scrum Team's activities and processes during the Sprint.",
      "To build team sprint."
    ],
    "correct_answers": [
      "To inspect the product Increment with the stakeholders and collect feedback on next steps."
    ]
  },
  {
    "id": 13,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Who determines when it is appropriate to update the Sprint Backlog during a Sprint?",
    "options": [
      "The Project Manager.",
      "The Development Team.",
      "The Scrum Team.",
      "The Product Owner."
    ],
    "correct_answers": [
      "The Development Team."
    ]
  },
  {
    "id": 14,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Who must attend the Daily Scrum?",
    "options": [
      "The Scrum Master and Product Owner.",
      "The Development Team.",
      "The Development Team and Product Owner.",
      "The Scrum Team.",
      "The Development Team and Scrum Master."
    ],
    "correct_answers": [
      "The Development Team."
    ]
  },
  {
    "id": 15,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "When do Development Team members take ownership of a Sprint Backlog item? (Choose the best answer.)",
    "options": [
      "At the Sprint planning meeting.",
      "During the Daily Scrum.",
      "Never. All Sprint Backlog Items are owned by the entire Scrum Team.",
      "Whenever a team member can accommodate more work."
    ],
    "correct_answers": [
      "Never. All Sprint Backlog Items are owned by the entire Scrum Team."
    ]
  },
  {
    "id": 16,
    "type": "true_false",
    "category": "Scrum Theory",
    "question": "True or False: The purpose of a Sprint is to produce a valuable, useful Increment.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": 17,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Who creates the definition of 'Done'?",
    "options": [
      "The Scrum Master.",
      "The Scrum Team, in a collaborative effort.",
      "The Product Owner.",
      "The development organization (or Development Team if none is available from the development organization)."
    ],
    "correct_answers": [
      "The Scrum Team, in a collaborative effort."
    ]
  },
  {
    "id": 18,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "Five new Scrum Teams have been created to build one product... What should the Scrum Master do to help them coordinate?",
    "options": [
      "Teach the Product Owner to work with the lead developers on ordering Product Backlog.",
      "Teach them that it is their responsibility to work with the other teams to create an integrated Increment that is inclusive of all five team's work.",
      "Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan.",
      "Visit the five teams each day to inspect that their Sprint Backlogs are aligned."
    ],
    "correct_answers": [
      "Teach them that it is their responsibility to work with the other teams to create an integrated Increment that is inclusive of all five team's work."
    ]
  },
  {
    "id": 19,
    "type": "multi_select",
    "category": "Events",
    "question": "Which two things should the Development Team do during the first Sprint? (Choose two.)",
    "options": [
      "Make up a plan for the rest of the project.",
      "Analyze, describe, and document the requirements for the subsequent Sprints.",
      "Develop at least one piece of functionality.",
      "Analyze, design, and describe the complete architecture and infrastructure.",
      "Create an increment of potentially releasable software."
    ],
    "correct_answers": [
      "Develop at least one piece of functionality.",
      "Create an increment of potentially releasable software."
    ]
  },
  {
    "id": 21,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "What is the key concern when multiple Development Teams are working from the same Product Backlog?",
    "options": [
      "Minimizing dependencies between teams.",
      "Clear definition of requirements.",
      "Meeting original scope projections.",
      "Making sure there's enough work for everyone on every team.",
      "Maximizing velocity."
    ],
    "correct_answers": [
      "Minimizing dependencies between teams."
    ]
  },
  {
    "id": 22,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "What does it mean to say that an event has a time-box?",
    "options": [
      "The event must happen at a set time.",
      "The event must happen by a given time.",
      "The event must take at least a minimum amount of time.",
      "The event can take no more than a maximum amount of time."
    ],
    "correct_answers": [
      "The event can take no more than a maximum amount of time."
    ]
  },
  {
    "id": 23,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "Which outcome is expected as Scrum Teams mature?",
    "options": [
      "They will improve their definition of \"Done\" to include more stringent criteria.",
      "The Sprint Retrospectives will grow to be longer than 4 hours.",
      "There is no need for a time-boxed Sprint.",
      "Sprint Reviews will no longer be needed.",
      "A Scrum Master is no longer needed since they are a mature team now."
    ],
    "correct_answers": [
      "They will improve their definition of \"Done\" to include more stringent criteria."
    ]
  },
  {
    "id": 24,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "When must a Scrum Team release each Increment?",
    "options": [
      "When it makes sense to release it.",
      "When the Scrum Team finishes their work.",
      "Whenever the product is free of defects.",
      "After every Sprint, without exception."
    ],
    "correct_answers": [
      "When it makes sense to release it."
    ]
  },
  {
    "id": 26,
    "type": "true_false",
    "category": "Scrum Theory",
    "question": "Scrum is a methodology that tells in detail how to build software incrementally.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 27,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "For which is the Scrum Master responsible?",
    "options": [
      "Managing the performance of the Scrum Team.",
      "The meetings and the objectives that a Scrum Team sets for itself.",
      "The Scrum framework being adopted and used properly.",
      "Keeping track of resource allocation."
    ],
    "correct_answers": [
      "The Scrum framework being adopted and used properly."
    ]
  },
  {
    "id": 28,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The Developers ask their Product Owner to re-order the Product Backlog... As the Scrum Master, what advice would you give the Product Owner?",
    "options": [
      "Remind the Product Owner that his primary concern is the flow of value reflected in the ordering of the Product Backlog.",
      "Tell the Product Owner to re-order the Product Backlog so the work involving the external component can be planned in a separate sprint.",
      "Tell the Product Owner that the Product Backlog should be ordered to maximize utilization of the Development Team."
    ],
    "correct_answers": [
      "Remind the Product Owner that his primary concern is the flow of value reflected in the ordering of the Product Backlog."
    ]
  },
  {
    "id": 29,
    "type": "multi_select",
    "category": "Events",
    "question": "As the Sprint Planning meeting progresses, the Development Team sees that the workload is greater than they can handle. Which two are valid actions? (Choose two.)",
    "options": [
      "Recruit additional Development Team members before the work can begin.",
      "The Development Team ensures that the Product Owner is aware, starts the Sprint, and monitors progress.",
      "Cancel the Sprint.",
      "Remove or change selected Product Backlog items.",
      "The Development Team works overtime during this Sprint."
    ],
    "correct_answers": [
      "The Development Team ensures that the Product Owner is aware, starts the Sprint, and monitors progress.",
      "Remove or change selected Product Backlog items."
    ]
  },
  {
    "id": 30,
    "type": "multi_select",
    "category": "Scaling",
    "question": "What are three things to consider when deciding to move away from component teams toward feature teams? (Choose three.)",
    "options": [
      "You cannot do Scrum without feature teams.",
      "Productivity may suffer when making this kind of move.",
      "Getting support from the business side first helps.",
      "Feature teams have less communication overhead.",
      "With feature teams, it is easier to calculate the productivity per team."
    ],
    "correct_answers": [
      "Productivity may suffer when making this kind of move.",
      "Feature teams have less communication overhead.",
      "With feature teams, it is easier to calculate the productivity per team."
    ]
  },
  {
    "id": 31,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "During a Sprint, when is new work or further decomposition of work added to the Sprint Backlog?",
    "options": [
      "When the Product Owner identifies new work.",
      "As soon as possible after they are identified.",
      "When the Scrum Master has time to enter them.",
      "During the Daily Scrum after the Development Team approves them."
    ],
    "correct_answers": [
      "As soon as possible after they are identified."
    ]
  },
  {
    "id": 32,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "What is the main reason for the Scrum Master to be at the Daily Scrum?",
    "options": [
      "To gather status and progress information to report to management.",
      "To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down.",
      "They do not have to be there; they only need to ensure the Development Team has a Daily Scrum.",
      "To make sure every team member answers the three questions."
    ],
    "correct_answers": [
      "They do not have to be there; they only need to ensure the Development Team has a Daily Scrum."
    ]
  },
  {
    "id": 33,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "What are the advantages of keeping component teams while starting Scrum?",
    "options": [
      "There's less initial disruption than organizing into new teams. As they start, they will discover what works best.",
      "Component teams generally have the skills needed to create a working Increment of software that provides business value.",
      "Because they have worked together for some time, they are likely able to start producing shippable Increments faster that new feature teams would.",
      "There are fewer cross-team dependencies than working in feature teams."
    ],
    "correct_answers": [
      "There's less initial disruption than organizing into new teams. As they start, they will discover what works best."
    ]
  },
  {
    "id": 34,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "How should Product Backlog items be chosen when multiple Scrum Teams work from the same Product Backlog?",
    "options": [
      "The Scrum Team with the highest velocity pulls Product Backlog items first.",
      "The Development Teams pull in work in agreement with the Product Owner.",
      "The Product Owner should provide each team with its own Product Backlog.",
      "Each Scrum Team takes an equal numbers of items.",
      "The Product Owner decides."
    ],
    "correct_answers": [
      "The Development Teams pull in work in agreement with the Product Owner."
    ]
  },
  {
    "id": 35,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "How often should Scrum Team membership change?",
    "options": [
      "As needed, while taking into account a short term reduction in productivity.",
      "Never, because it reduces productivity.",
      "As needed, with no special allowance for changes in productivity.",
      "Every Sprint to promote shared learning."
    ],
    "correct_answers": [
      "As needed, while taking into account a short term reduction in productivity."
    ]
  },
  {
    "id": 36,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who should make sure everyone on the Scrum Team does his or her tasks for the Sprint?",
    "options": [
      "The Project Manager.",
      "The Product Owner.",
      "The Scrum Master.",
      "The Scrum Team.",
      "All of the above."
    ],
    "correct_answers": [
      "The Scrum Team."
    ]
  },
  {
    "id": 37,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "When is it most appropriate for a Development Team to change the definition of 'Done'?",
    "options": [
      "During Sprint Planning.",
      "Prior to starting a new Sprint.",
      "During the Sprint Retrospective.",
      "Prior to starting a new project."
    ],
    "correct_answers": [
      "During the Sprint Retrospective."
    ]
  },
  {
    "id": 38,
    "type": "multi_select",
    "category": "Events",
    "question": "What would be three key concerns if the Daily Scrum frequency were to be lowered to every two or three days? (Choose three.)",
    "options": [
      "Opportunities to inspect and adapt the Sprint Backlog are lost.",
      "Impediments are raised and resolved more slowly.",
      "The Product Owner cannot accurately report progress to the stakeholders.",
      "Too much work is spent updating the Scrum board before the meeting.",
      "The Scrum Master loses the ability to update the Gantt chart properly.",
      "The Sprint plan may become inaccurate."
    ],
    "correct_answers": [
      "Opportunities to inspect and adapt the Sprint Backlog are lost.",
      "Impediments are raised and resolved more slowly.",
      "The Sprint plan may become inaccurate."
    ]
  },
  {
    "id": 41,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Who creates a Product Backlog Item's estimate?",
    "options": [
      "The Development Team after clarifying requirements with the Product Owner.",
      "The Product Owner with input from the Development Team.",
      "The most senior people in the organization, including architects and subject matter experts.",
      "The Scrum Master.",
      "The Development Team, alone."
    ],
    "correct_answers": [
      "The Development Team after clarifying requirements with the Product Owner."
    ]
  },
  {
    "id": 42,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Who starts the Daily Scrum?",
    "options": [
      "The person coming in last. This encourages people to be on time and helps to stay within the time-box.",
      "Whoever the Development Team decides should start.",
      "The person who has the token.",
      "The Scrum Master. This ensures that the Development Team has the meeting and stays within the time-box.",
      "The person who last broke the build."
    ],
    "correct_answers": [
      "Whoever the Development Team decides should start."
    ]
  },
  {
    "id": 43,
    "type": "multi_select",
    "category": "Roles",
    "question": "You are the Scrum Master on a newly formed Scrum Team. Which three of the following activities would probably help the team in starting up? (Choose three.)",
    "options": [
      "Introduce a bonus system for the top performers in the team.",
      "Have the Scrum Team members introduce themselves to each other and give a brief background of their skills and work history.",
      "Have the development managers for each Development Team member introduce their direct reports and go over their responsibilities on the Scrum Team.",
      "Ensure the Scrum Team members have compatible personalities.",
      "Ensure the team understands they need a definition of Done.",
      "Ask the Product Owner to discuss the product or project, its history, goals, and context, as well as answer questions."
    ],
    "correct_answers": [
      "Have the Scrum Team members introduce themselves to each other and give a brief background of their skills and work history.",
      "Ensure the team understands they need a definition of Done.",
      "Ask the Product Owner to discuss the product or project, its history, goals, and context, as well as answer questions."
    ]
  },
  {
    "id": 44,
    "type": "multi_select",
    "category": "Artifacts",
    "question": "Which three phrases best describe the purpose of a definition of 'Done'? (Choose three.)",
    "options": [
      "It controls whether the developers have performed their tasks.",
      "It provides a template for elements that need to be included in the technical documentation.",
      "It creates transparency over the work inspected at the Sprint Review.",
      "It tracks the percent completeness of a Product Backlog item.",
      "It guides the Development Team in creating a forecast at the Sprint Planning.",
      "It defines what it takes for an Increment to be ready for release."
    ],
    "correct_answers": [
      "It creates transparency over the work inspected at the Sprint Review.",
      "It guides the Development Team in creating a forecast at the Sprint Planning.",
      "It defines what it takes for an Increment to be ready for release."
    ]
  },
  {
    "id": 45,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "Select two ways in which technical debt impacts transparency. (Choose two.)",
    "options": [
      "When calculated and estimated, the total amount of technical debt shows exactly how long until the Product Owner can release the Increment.",
      "It leads to false assumptions about the current state of the system, specifically of an Increment being releasable at the end of a Sprint.",
      "As development progresses and code is added, the system becomes more difficult to stabilize, which results in future work being slowed down in unpredictable ways.",
      "It enhances transparency for the Product Owner as a Development Team is not allowed to do additional feature development in a Sprint as long as there is technical debt."
    ],
    "correct_answers": [
      "It leads to false assumptions about the current state of the system, specifically of an Increment being releasable at the end of a Sprint.",
      "As development progresses and code is added, the system becomes more difficult to stabilize, which results in future work being slowed down in unpredictable ways."
    ]
  },
  {
    "id": 46,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Which of these may a Development Team deliver at the end of a Sprint?",
    "options": [
      "Failing unit tests, to identify acceptance tests for the next Sprint.",
      "An increment of software with minor known bugs in it.",
      "An increment of working software that is done.",
      "A single document, if that is what the Scrum Master asked for."
    ],
    "correct_answers": [
      "An increment of working software that is done."
    ]
  },
  {
    "id": 47,
    "type": "multiple_choice",
    "category": "Events",
    "question": "How much of the Sprint Backlog must be defined during the Sprint Planning event?",
    "options": [
      "Just enough tasks for the Scrum Master to be confident in the Development Team's understanding of the Sprint.",
      "The entire Sprint Backlog must be identified and estimated by the end of the Sprint Planning meeting.",
      "Enough so the Development Team can create its best forecast of what is can do, and to start the first several days of the Sprint.",
      "Just enough to understand design and architectural implications."
    ],
    "correct_answers": [
      "Enough so the Development Team can create its best forecast of what is can do, and to start the first several days of the Sprint."
    ]
  },
  {
    "id": 48,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who is responsible for managing the progress of work during a Sprint?",
    "options": [
      "The Scrum Master.",
      "The Development Team.",
      "The Product Owner.",
      "The most junior member of the Team."
    ],
    "correct_answers": [
      "The Development Team."
    ]
  },
  {
    "id": 49,
    "type": "multi_select",
    "category": "Artifacts",
    "question": "A Development Team is required to deliver a done Increment by the end of a Sprint. Select two statements that explain what Done means. (Choose two.)",
    "options": [
      "All work the Development Team is willing to do.",
      "Ready for integration.",
      "No work left from the definition of Done.",
      "Whatever the Product Owner defines as quality.",
      "Ready to be released to end users."
    ],
    "correct_answers": [
      "No work left from the definition of Done.",
      "Ready to be released to end users."
    ]
  },
  {
    "id": 50,
    "type": "multi_select",
    "category": "Events",
    "question": "What two factors are best considered when establishing the Sprint length? (Choose two.)",
    "options": [
      "The organization has mandated similar length sprints.",
      "The level of uncertainty over the technology to be used.",
      "The frequency at which team formation can be changed.",
      "The risk of being disconnected from the stakeholders."
    ],
    "correct_answers": [
      "The level of uncertainty over the technology to be used.",
      "The risk of being disconnected from the stakeholders."
    ]
  },
  {
    "id": 51,
    "type": "multi_select",
    "category": "Events",
    "question": "Which of the following are true about the length of the Sprint? (Choose two.)",
    "options": [
      "The length of the Sprint should be proportional to the work that is done in between Sprints.",
      "It is best to have Sprints of consistent length throughout a development effort.",
      "Sprint length is determined during Sprint Planning, and should hold the time it will take to code the planned features in the upcoming Sprint, but does not include time for any testing.",
      "Sprint length is determined during Sprint Planning, and should be long enough to make sure the Development Team can deliver what is to be accomplished in the upcoming Sprint.",
      "All Sprints must be 1 month or less."
    ],
    "correct_answers": [
      "It is best to have Sprints of consistent length throughout a development effort.",
      "All Sprints must be 1 month or less."
    ]
  },
  {
    "id": 52,
    "type": "multi_select",
    "category": "Roles",
    "question": "What are two responsibilities of testers in a Scrum Team? (Choose two.)",
    "options": [
      "Verifying the work of programmers.",
      "Everyone in the Development Team is responsible for quality.",
      "Tracking quality metrics.",
      "Finding bugs.",
      "Scrum has no \"tester\" role."
    ],
    "correct_answers": [
      "Everyone in the Development Team is responsible for quality.",
      "Scrum has no \"tester\" role."
    ]
  },
  {
    "id": 53,
    "type": "multiple_choice",
    "category": "Events",
    "question": "The CEO asks the Development Team to add a 'very important' item to a Sprint that is in progress. What should the Development Team do?",
    "options": [
      "Add the item to the current Sprint and drop an item of equal size.",
      "Add the item to the current Sprint without any adjustments.",
      "Inform the Product Owner so he/she can work with the CEO.",
      "Add the item to the next Sprint."
    ],
    "correct_answers": [
      "Inform the Product Owner so he/she can work with the CEO."
    ]
  },
  {
    "id": 54,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "What is the role of management in Scrum? (Choose the best answer.)",
    "options": [
      "To present the Scrum Teams with insights and resources that help them improve.",
      "To monitor the Development Team's productivity.",
      "To identify and remove people that aren't working hard enough.",
      "To continually monitor staffing levels of the Scrum Team."
    ],
    "correct_answers": [
      "To present the Scrum Teams with insights and resources that help them improve."
    ]
  },
  {
    "id": 55,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Which technique is the best way the Scrum Master can ensure that the Development Team communicates effectively with the Product Owner?",
    "options": [
      "Monitor communications between them and facilitate direct collaboration.",
      "Teach the Development Team to talk in terms of business needs and objectives.",
      "Teach the Product Owner about the technologies employed during the Sprints.",
      "Act as a go-between for them."
    ],
    "correct_answers": [
      "Monitor communications between them and facilitate direct collaboration."
    ]
  },
  {
    "id": 56,
    "type": "multiple_choice",
    "category": "Events",
    "question": "The time-box for a Daily Scrum is:",
    "options": [
      "Two minutes per person.",
      "15 minutes.",
      "The same time of day every day.",
      "4 hours."
    ],
    "correct_answers": [
      "15 minutes."
    ]
  },
  {
    "id": 57,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Which phrase best describes a Product Owner?",
    "options": [
      "Go-between development team and customers.",
      "Value optimizer.",
      "Requirements engineer.",
      "Team manager."
    ],
    "correct_answers": [
      "Value optimizer."
    ]
  },
  {
    "id": 58,
    "type": "multiple_choice",
    "category": "Events",
    "question": "The length of a Sprint should be:",
    "options": [
      "Short enough to keep the business risk acceptable to the Product Owner.",
      "Short enough to be able to synchronize the development work with other business events.",
      "No more than one calendar month.",
      "All of these answers are correct."
    ],
    "correct_answers": [
      "All of these answers are correct."
    ]
  },
  {
    "id": 59,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "What is the Product Owner responsible for during the Sprint Retrospective?",
    "options": [
      "Participating as a Scrum Team member.",
      "Summarizing and reporting the discussions to the stakeholders that they represent in the Scrum Team.",
      "Capturing requirements for the Product Backlog.",
      "The Product Owner should not take part in Sprint Retrospectives."
    ],
    "correct_answers": [
      "Participating as a Scrum Team member."
    ]
  },
  {
    "id": 60,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Marian is the Product Owner... She made a projection based upon a sustained velocity of 17... average velocity was 13... What is a good way to continue?",
    "options": [
      "The Development Team makes sure that all of the selected scope per Sprint is as 'Done' as possible. The undone work is estimated and added to the Sprint Backlog of the next Sprint.",
      "Add enough people to the Development Team for the deadline to be made.",
      "The opportunity to inspect and adapt is lost... the Scrum Master should cancel the project.",
      "The Development Team should remind Marian to find funding for enough Release Sprints in which the remaining work can be done."
    ],
    "correct_answers": [
      "The Development Team should remind Marian to find funding for enough Release Sprints in which the remaining work can be done."
    ]
  },
  {
    "id": 61,
    "type": "multi_select",
    "category": "Roles",
    "question": "The Product Owner is not collaborating with the Development Team during the Sprint. What are two valuable actions for a Scrum Master to take? (Choose two.)",
    "options": [
      "Inform the Product Owner's functional manager.",
      "Stop the Sprint, send the Product Owner to a course and restart.",
      "Bring up the problem in the Sprint Retrospective.",
      "Coach the Product Owner in the values of Scrum and incremental delivery.",
      "Nominate a proxy Product Owner."
    ],
    "correct_answers": [
      "Bring up the problem in the Sprint Retrospective.",
      "Coach the Product Owner in the values of Scrum and incremental delivery."
    ]
  },
  {
    "id": 62,
    "type": "true_false",
    "category": "Scaling",
    "question": "True or False: Multiple Scrum Teams working on the same product or system all select work from the same Product Backlog.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": 63,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "For the purpose of transparency, when does Scrum say a valuable and useful increment must be available?",
    "options": [
      "After the Acceptance Testing phase.",
      "Before the release Sprint.",
      "Every 3 Sprints.",
      "At the end of every Sprint.",
      "When the Product Owner asks to create one."
    ],
    "correct_answers": [
      "At the end of every Sprint."
    ]
  },
  {
    "id": 64,
    "type": "true_false",
    "category": "Scaling",
    "question": "Multiple Scrum Teams working on the same project must have the same Sprint start date.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 65,
    "type": "multi_select",
    "category": "Roles",
    "question": "What is a Development Team responsible for? (Choose two.)",
    "options": [
      "Resolving internal team conflicts.",
      "Reporting productivity.",
      "Selecting the Product Owner.",
      "Organizing the work required to meet the Sprint Goal."
    ],
    "correct_answers": [
      "Resolving internal team conflicts.",
      "Organizing the work required to meet the Sprint Goal."
    ]
  },
  {
    "id": 66,
    "type": "multi_select",
    "category": "Scaling",
    "question": "Which two ways of creating Development Teams are consistent with Scrum's values? (Choose two.)",
    "options": [
      "Existing teams propose how they would like to go about organizing into the new structure.",
      "Managers personally re-assign current subordinates to new teams.",
      "Managers collaborate to assign individuals to specific teams.",
      "Bring all the developers together and let them self-organize into Development Teams.",
      "The Chief Product Owner determines the new team structures and assignments."
    ],
    "correct_answers": [
      "Existing teams propose how they would like to go about organizing into the new structure.",
      "Bring all the developers together and let them self-organize into Development Teams."
    ]
  },
  {
    "id": 67,
    "type": "true_false",
    "category": "Roles",
    "question": "A Scrum Master is essentially the same thing as a traditional PM (Project Manager).",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 68,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "A Product Owner wants advice from the Scrum Master about estimating work in Scrum. What guidance should a Scrum Master give?",
    "options": [
      "Product Backlog items must be estimated in story points.",
      "Estimates are made by the people doing the work.",
      "Estimates must be in relative units.",
      "Scrum forbids estimating.",
      "Estimates are made by the Product Owner, but are best checked with the Developers."
    ],
    "correct_answers": [
      "Estimates are made by the people doing the work."
    ]
  },
  {
    "id": 69,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "If burndown charts are used to visualize progress, what do they track?",
    "options": [
      "Accumulated cost.",
      "Individual worker productivity.",
      "Work remaining across time.",
      "Accumulated business value delivered to the customer."
    ],
    "correct_answers": [
      "Work remaining across time."
    ]
  },
  {
    "id": 70,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "Which Scrum Value is affected by a lack of trust in the Scrum Team?",
    "options": [
      "Focus",
      "Respect",
      "Openness",
      "Courage",
      "Commitment",
      "All of the above"
    ],
    "correct_answers": [
      "All of the above"
    ]
  },
  {
    "id": 71,
    "type": "multi_select",
    "category": "Roles",
    "question": "A Scrum Master is keeping a list of open impediments... Which three techniques would be most helpful in this situation? (Choose three.)",
    "options": [
      "Consulting with the Development Team.",
      "Prioritizing the list and working on them in order.",
      "Arranging a triage meeting with all project managers.",
      "Alerting management to the impediments and their impact."
    ],
    "correct_answers": [
      "Consulting with the Development Team.",
      "Prioritizing the list and working on them in order.",
      "Alerting management to the impediments and their impact."
    ]
  },
  {
    "id": 72,
    "type": "true_false",
    "category": "Artifacts",
    "question": "A product Increment must be released to production at the end of each Sprint.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 73,
    "type": "multiple_choice",
    "category": "Events",
    "question": "The Sprint Review is mainly an inspect and adapt opportunity for which group?",
    "options": [
      "The Development Team and stakeholders.",
      "The Product Owner and Development Team.",
      "The Scrum Team and stakeholders.",
      "The Product Owner and management.",
      "The Development Team and management.",
      "The Product Owner and stakeholders."
    ],
    "correct_answers": [
      "The Scrum Team and stakeholders."
    ]
  },
  {
    "id": 74,
    "type": "multiple_choice",
    "category": "Events",
    "question": "How is management external to the Scrum Team involved in the Daily Scrum?",
    "options": [
      "The Scrum Master speaks on their behalf.",
      "Managers are not required at the Daily Scrum.",
      "Management gives an update at the start of each Daily Scrum.",
      "The Product Owner represents their opinions."
    ],
    "correct_answers": [
      "Managers are not required at the Daily Scrum."
    ]
  },
  {
    "id": 75,
    "type": "true_false",
    "category": "Scrum Theory",
    "question": "True or False: To get started in terms of what to build, Scrum requires no more than a Product Owner with enough ideas for a first Sprint, a Development Team to implement those ideas and a Scrum Master to help guide the process.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": 76,
    "type": "multiple_choice",
    "category": "Events",
    "question": "What is the timebox for the Sprint Review?",
    "options": [
      "As long as needed.",
      "2 hours for a one-month Sprint.",
      "4 hours for a one-month Sprint.",
      "1 day"
    ],
    "correct_answers": [
      "4 hours for a one-month Sprint."
    ]
  },
  {
    "id": 77,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "Commitment is essential to achieve the benefits of Scrum. What two actions demonstrate the commitment of Scrum Team members? (Choose two.)",
    "options": [
      "Always deliver the items in the Sprint forecast.",
      "Help the other Scrum Team members.",
      "Do your best.",
      "Send out a daily status report.",
      "Work late."
    ],
    "correct_answers": [
      "Help the other Scrum Team members.",
      "Do your best."
    ]
  },
  {
    "id": 78,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "You are the Scrum Master of a new, to be developed product. Development is going to require 45 people. What is a good first question for you to suggest the group thinks about when forming into teams?",
    "options": [
      "How will we make sure all teams have the right amount of expertise?",
      "What is the right mixture of senior and junior people on each team?",
      "Who are going to be the team leads?",
      "Who are the subject matter experts on each team?"
    ],
    "correct_answers": [
      "How will we make sure all teams have the right amount of expertise?"
    ]
  },
  {
    "id": 79,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Which statement best describes a Product Owner's responsibility? (Choose the best answer.)",
    "options": [
      "Optimizing the value of the work the Scrum Team does.",
      "Ensuring that the work meets the commitments to the stakeholders.",
      "Directing the Development Team.",
      "Keep stakeholders from distracting the Development Team."
    ],
    "correct_answers": [
      "Optimizing the value of the work the Scrum Team does."
    ]
  },
  {
    "id": 80,
    "type": "multi_select",
    "category": "Artifacts",
    "question": "The Definition of Done serves which three purposes? (Choose three.)",
    "options": [
      "Describe the purpose objective and timebox of each Scrum event",
      "Guide the Developers on how many Product Backlog items to select for the Sprint",
      "Describe the work that must be mostly done before the Sprint is allowed to end",
      "Create a shared understanding of when work is complete",
      "Increase transparency"
    ],
    "correct_answers": [
      "Guide the Developers on how many Product Backlog items to select for the Sprint",
      "Create a shared understanding of when work is complete",
      "Increase transparency"
    ]
  },
  {
    "id": 81,
    "type": "multi_select",
    "category": "Scaling",
    "question": "Which two ways of creating Scrum Teams are consistent with Scrum's values? (Choose two.)",
    "options": [
      "Existing teams propose how they would like to go about organizing into the new structure.",
      "Managers personally re-assign current subordinates to new teams.",
      "Managers collaborate to assign individuals to specific teams.",
      "Bring all the developers together and let them self-organize into Scrum Teams.",
      "The Chief Product Owner determines the new team structures and assignments."
    ],
    "correct_answers": [
      "Existing teams propose how they would like to go about organizing into the new structure.",
      "Bring all the developers together and let them self-organize into Scrum Teams."
    ]
  },
  {
    "id": 82,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Which output from Sprint Planning provides the Scrum Team with a target and overarching direction for the Sprint?",
    "options": [
      "The Sprint Backlog.",
      "The Sprint Goal",
      "The release plan.",
      "Sprint Review minutes."
    ],
    "correct_answers": [
      "The Sprint Goal"
    ]
  },
  {
    "id": 83,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "Commitment is essential to achieve the benefits of Scrum. What actions demonstrate the commitment of Scrum Team members? (Choose two.)",
    "options": [
      "Help your fellow Scrum Team members",
      "Work late",
      "Always deliver the items in the Sprint forecast",
      "Do your best work"
    ],
    "correct_answers": [
      "Help your fellow Scrum Team members",
      "Do your best work"
    ]
  },
  {
    "id": 84,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "When multiple Scrum Teams are working on the same product should all of their Increments be integrated every Sprint?",
    "options": [
      "Yes, in order to accurately inspect what is done",
      "No, each Scrum Team stands alone",
      "Yes, but only for Scrum Teams whose work has dependencies",
      "No, that is far too hard and must be done in a hardening Sprint"
    ],
    "correct_answers": [
      "Yes, in order to accurately inspect what is done"
    ]
  },
  {
    "id": 85,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "What are three benefits of self-management? (Choose three.)",
    "options": [
      "Increased creativity",
      "Increased rule compliance",
      "Increased commitment",
      "Increased self-accountability",
      "Increased accuracy of estimates"
    ],
    "correct_answers": [
      "Increased creativity",
      "Increased commitment",
      "Increased self-accountability"
    ]
  },
  {
    "id": 86,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "Which statement best describes Scrum?",
    "options": [
      "A framework to generate value through adaptive solutions for complex problems",
      "A complete methodology that defines how to develop software.",
      "A cookbook that defines best practices for software development",
      "A defined and predictive process that conforms to the principles of Scientific Management"
    ],
    "correct_answers": [
      "A framework to generate value through adaptive solutions for complex problems"
    ]
  },
  {
    "id": 87,
    "type": "multi_select",
    "category": "Roles",
    "question": "Who is on the Scrum Team? (Choose three.)",
    "options": [
      "Developers",
      "Scrum Master",
      "Product Owner",
      "Stakeholders",
      "Project Manager"
    ],
    "correct_answers": [
      "Developers",
      "Scrum Master",
      "Product Owner"
    ]
  },
  {
    "id": 88,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who is responsible for the sizing of Product Backlog items?",
    "options": [
      "The Developers after clarifying requirements with the Product Owner",
      "The Product Owner with input from the Developer",
      "The Developers, alone",
      "The most senior people in the organization, including architects and subject matter experts",
      "The Scrum Master"
    ],
    "correct_answers": [
      "The Developers after clarifying requirements with the Product Owner"
    ]
  },
  {
    "id": 89,
    "type": "multiple_choice",
    "category": "Events",
    "question": "How much of the Sprint Backlog must be defined during the Sprint Planning event?",
    "options": [
      "Enough so the Developers can create their forecast of what work they can do",
      "The entire Sprint Backlog must be identified and estimated by the end of Sprint Planning.",
      "Just enough to understand design and architectural implications",
      "Just enough tasks for the Scrum Master to be confident in the Developers' understanding of the Sprint"
    ],
    "correct_answers": [
      "Enough so the Developers can create their forecast of what work they can do"
    ]
  },
  {
    "id": 90,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The IT manager asks a Scrum Team for a status report describing the progress throughout the Sprint. The Scrum Team asks the Scrum Master for advice. The Scrum Master should:",
    "options": [
      "Tell the Scrum Team to figure it out themselves.",
      "Tell the Scrum Team to fit the report into the Sprint Backlog.",
      "Ask the Product Owner to send the manager the report.",
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review.",
      "Create and deliver the report to the manager herself."
    ],
    "correct_answers": [
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review."
    ]
  },
  {
    "id": 91,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "In accordance with Scrum theory, how should a group of 100 people be divided into multiple Scrum Teams?",
    "options": [
      "Check with the allocation department to see who has worked together before and make these the first teams.",
      "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams.",
      "It doesn't really matter because you can rotate the teams every Sprint to spread knowledge.",
      "Create a matrix of skills, seniority, and level of experience to assign people to teams."
    ],
    "correct_answers": [
      "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams."
    ]
  },
  {
    "id": 92,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "What is the key concern when multiple Scrum Teams are working from the same Product Backlog?",
    "options": [
      "Clear definition of requirements",
      "Making sure there is enough work for everyone on each team",
      "Minimizing dependencies between teams",
      "Meeting original scope projections",
      "Maximizing velocity"
    ],
    "correct_answers": [
      "Minimizing dependencies between teams"
    ]
  },
  {
    "id": 93,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "What is the function or purpose of management in Scrum?",
    "options": [
      "To identify and remove people that are not working hard enough",
      "To present the Scrum Teams with insights and resources that help them improve",
      "To monitor the productivity of the Developers",
      "To continually monitor staffing levels of the Scrum Team"
    ],
    "correct_answers": [
      "To present the Scrum Teams with insights and resources that help them improve"
    ]
  },
  {
    "id": 94,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "The Product Backlog is ordered by:",
    "options": [
      "Random assignment",
      "Size, where small items are at the top and large items are at the bottom",
      "The Product Owner, with the most valuable items placed at the top",
      "Risk, where safer items are at the top, and riskier items are at the bottom"
    ],
    "correct_answers": [
      "The Product Owner, with the most valuable items placed at the top"
    ]
  },
  {
    "id": 95,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Which statement best describes the Sprint Backlog as the output of the Sprint Planning?",
    "options": [
      "Every item has a designated owner.",
      "It is a complete list of all work to be done in a Sprint.",
      "It is the Developers' plan for the Sprint.",
      "It is ordered by the Product Owner.",
      "Each task is estimated in hours."
    ],
    "correct_answers": [
      "It is the Developers' plan for the Sprint."
    ]
  },
  {
    "id": 96,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "What are two ways that regulatory compliance requirements are dealt with in Scrum? (Choose two.)",
    "options": [
      "They are addressed by a separate team who is responsible for compliance issues.",
      "They are addressed as part of meeting the Definition of Done during each Sprint.",
      "They are discussed, analyzed, and documented before the first Sprint can begin.",
      "They are added to the Product Backlog and addressed during each Sprint, alongside the creation of new Product capabilities."
    ],
    "correct_answers": [
      "They are addressed as part of meeting the Definition of Done during each Sprint.",
      "They are added to the Product Backlog and addressed during each Sprint, alongside the creation of new Product capabilities."
    ]
  },
  {
    "id": 97,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The IT manager asks a Scrum Team for a status report describing the progress throughout the Sprint. The Scrum Team asks the Scrum Master for advice. The Scrum Master should:",
    "options": [
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review.",
      "Ask the Product Owner to send the manager the report.",
      "Tell the Developers to fit the report into the Sprint Backlog.",
      "Tell the Scrum Team to figure it out themselves.",
      "Create and deliver the report to the manager herself."
    ],
    "correct_answers": [
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review."
    ]
  },
  {
    "id": 98,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The Scrum Team should have all the skills needed to:",
    "options": [
      "Complete the project within the date and cost as calculated by the Product Owner.",
      "Turn Product Backlog items into a valuable, useful Increment.",
      "Do all of the development work, except for specialized testing that requires additional tools and environments."
    ],
    "correct_answers": [
      "Turn Product Backlog items into a valuable, useful Increment."
    ]
  },
  {
    "id": 99,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When is the Sprint Backlog created?",
    "options": [
      "At the beginning of the project.",
      "During the Sprint Planning meeting.",
      "Prior to the Sprint Planning meeting.",
      "During the Sprint."
    ],
    "correct_answers": [
      "During the Sprint Planning meeting."
    ]
  },
  {
    "id": 100,
    "type": "true_false",
    "category": "Artifacts",
    "question": "The Sprint Goal is a result of Sprint Planning, as is the Sprint Backlog.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": 101,
    "type": "multi_select",
    "category": "Events",
    "question": "Which two of the following are appropriate topics for discussion during a Sprint Retrospective? (Choose two.)",
    "options": [
      "Identifying high priority process improvements for the next Sprint.",
      "The order of items in the Product Backlog.",
      "How the team collaborates.",
      "Documenting acceptance criteria for items in the next Sprint."
    ],
    "correct_answers": [
      "Identifying high priority process improvements for the next Sprint.",
      "How the team collaborates."
    ]
  },
  {
    "id": 102,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "When should a Sprint Goal be created?",
    "options": [
      "It should have been created in the previous Sprint during Product Backlog refinement.",
      "It must be established before Sprint Planning in order to begin planning.",
      "A Sprint Goal is not mandatory in Scrum.",
      "At any time during the Sprint.",
      "During Sprint Planning."
    ],
    "correct_answers": [
      "During Sprint Planning."
    ]
  },
  {
    "id": 103,
    "type": "multi_select",
    "category": "Events",
    "question": "During a Sprint Retrospective, the Development Team proposes moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two are the most appropriate responses for the Scrum Master? (Choose two.)",
    "options": [
      "Consider the request and decide on which days the Daily Scrum should occur.",
      "Coach the team on why the Daily Scrum is important as an opportunity to update the plan.",
      "Have the developers vote",
      "Learn why the Development Team wants this and work with them to improve the outcome of the Daily Scrum.",
      "Acknowledge and support the self-organizing team's decision."
    ],
    "correct_answers": [
      "Coach the team on why the Daily Scrum is important as an opportunity to update the plan.",
      "Learn why the Development Team wants this and work with them to improve the outcome of the Daily Scrum."
    ]
  },
  {
    "id": 104,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "As the Development Team starts work during the Sprint, it realizes it has selected too much work to finish in the Sprint. What should it do?",
    "options": [
      "Inform the Product Owner at the Sprint Review, but prior to the demonstration.",
      "Find another Scrum Team to give the excess work to.",
      "As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items.",
      "Reduce the definition of \"Done\" and get all of the Product Backlog items \"Done\" by the new definition."
    ],
    "correct_answers": [
      "As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items."
    ]
  },
  {
    "id": 105,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "In accordance with Scrum theory, how should a group of 100 people be divided into multiple Development Teams?",
    "options": [
      "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams.",
      "It doesn't really matter because you can rotate the teams every Sprint to spread knowledge.",
      "Check with the allocation department to see who has worked together before and make these the first teams.",
      "Create a matrix of skills, seniority, and level of experience to assign people to teams."
    ],
    "correct_answers": [
      "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams."
    ]
  },
  {
    "id": 106,
    "type": "multiple_choice",
    "category": "Events",
    "question": "A Sprint Retrospective should be held:",
    "options": [
      "At the end of each Sprint.",
      "At the beginning of each Sprint.",
      "Only when the Scrum Team determines it needs one.",
      "At the end of the last Sprint in a project or a release."
    ],
    "correct_answers": [
      "At the end of each Sprint."
    ]
  },
  {
    "id": 107,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "A new Developer is having continuing conflicts with existing members of the Scrum Team... If necessary, who is responsible for removing the Developer from the Scrum Team?",
    "options": [
      "The hiring manager is responsible, because they hired the Developer.",
      "The Product Owner is responsible, because they control the return on investment (ROI).",
      "The Scrum Master is responsible, because they remove Impediments.",
      "The Scrum Team is responsible."
    ],
    "correct_answers": [
      "The Scrum Team is responsible."
    ]
  },
  {
    "id": 108,
    "type": "multi_select",
    "category": "Artifacts",
    "question": "Which three purposes does the definition of \"Done\" serve? (Choose three.)",
    "options": [
      "Guide the Development Team on how many Product Backlog items to select for the Sprint.",
      "Create a shared understanding of when work is complete.",
      "Describe the purpose, objective, and time-box of each Scrum event.",
      "Describe the work that must be done before the Sprint is allowed to end.",
      "Increase transparency."
    ],
    "correct_answers": [
      "Guide the Development Team on how many Product Backlog items to select for the Sprint.",
      "Create a shared understanding of when work is complete.",
      "Increase transparency."
    ]
  },
  {
    "id": 109,
    "type": "true_false",
    "category": "Roles",
    "question": "True or False: The Product Owner makes sure the Developers select enough from the Product Backlog for a Sprint to satisfy the stakeholders.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 110,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Which statement best describes the Sprint Review?",
    "options": [
      "It is used to congratulate the Development Team if it did what it forecast, or to punish the Development Team if it failed to meet its forecast.",
      "It is a demo at the end of the Sprint for everyone in the organization to check on the work done.",
      "It is a mechanism to control the Development Team's activities during a Sprint.",
      "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next."
    ],
    "correct_answers": [
      "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next."
    ]
  },
  {
    "id": 111,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Who owns the Sprint Backlog?",
    "options": [
      "The Scrum Team.",
      "The Product Owner.",
      "The Scrum Master.",
      "The Development Team."
    ],
    "correct_answers": [
      "The Development Team."
    ]
  },
  {
    "id": 112,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When might a Sprint be cancelled?",
    "options": [
      "When the Developers determine the product plan is infeasible.",
      "When the Sprint Goal becomes obsolete.",
      "When the sales department has an important new opportunity.",
      "When it becomes clear that not everything will be finished by the end of the Sprint."
    ],
    "correct_answers": [
      "When the Sprint Goal becomes obsolete."
    ]
  },
  {
    "id": 113,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Every Development Team should have:",
    "options": [
      "At least one representative from each major software engineering discipline; such as, Quality Assurance, Development, and User Experience.",
      "The competencies and skills needed to deliver a Done Increment in a Sprint.",
      "One Lead Developer and no more than 8 other members."
    ],
    "correct_answers": [
      "The competencies and skills needed to deliver a Done Increment in a Sprint."
    ]
  },
  {
    "id": 114,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Why does the Product Owner want the Development Team to adhere to its definition of \"Done\"?",
    "options": [
      "To have complete transparency into what has been done at the end of each Sprint.",
      "To be able to reprimand the team when they don't meet their velocity goal for the Sprint.",
      "To know what the team will deliver over the next three Sprints.",
      "To predict the team's productivity over time."
    ],
    "correct_answers": [
      "To have complete transparency into what has been done at the end of each Sprint."
    ]
  },
  {
    "id": 115,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "During a Sprint Retrospective, for what is the Scrum Master responsible?",
    "options": [
      "Prioritizing the resulting action items.",
      "Participating as a Scrum team member and facilitating as requested or needed.",
      "Acting as a scribe to capture the Development Team's answers.",
      "Summarizing and reporting the discussions to management."
    ],
    "correct_answers": [
      "Participating as a Scrum team member and facilitating as requested or needed."
    ]
  },
  {
    "id": 116,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The Development Team should have all the skills needed to:",
    "options": [
      "Turn Product Backlog items into a valuable, useful Increment.",
      "Do all of the development work, except for specialized testing that requires additional tools and environments.",
      "Complete the project within the date and cost as calculated by the Product Owner."
    ],
    "correct_answers": [
      "Turn Product Backlog items into a valuable, useful Increment."
    ]
  },
  {
    "id": 117,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The Scrum Master observes the Product Owner struggling with ordering the Product Backlog. What is an appropriate action for the Scrum Master to take?",
    "options": [
      "Suggest the Product Owner extend the Sprint, so he can have more time to order the Product Backlog.",
      "Suggest that the Development Team does the ordering to be sure that it is a feasible ordering of work.",
      "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value.",
      "Present the Product Owner with an ordered Product Backlog to use.",
      "Encourage the Product Owner to work with the Development Team to see which items technically are fastest to implement."
    ],
    "correct_answers": [
      "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value."
    ]
  },
  {
    "id": 118,
    "type": "multi_select",
    "category": "Artifacts",
    "question": "Which two things are appropriate for a Scrum Master to do if the Scrum Team doesn't have the tools and environment to completely finish each selected Product Backlog item? (Choose two.)",
    "options": [
      "Coach the ScrumTeam to improve its skills, tools, and infrastructure over time and adjust the Definition of \"Done\" accordingly.",
      "Encourage the Product Owner to accept partially \"Done\" increments until the situation improves.",
      "Refocus the current Sprint on establishing the Scrum Team's environment instead of delivering an Increment.",
      "Declare the Scrum Team not ready for Scrum.",
      "Have the Scrum Team establish a Definition of \"Done\" that is actually possible to achieve given current circumstances."
    ],
    "correct_answers": [
      "Coach the ScrumTeam to improve its skills, tools, and infrastructure over time and adjust the Definition of \"Done\" accordingly.",
      "Have the Scrum Team establish a Definition of \"Done\" that is actually possible to achieve given current circumstances."
    ]
  },
  {
    "id": 119,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "When is implementation of a Product Backlog item considered complete?",
    "options": [
      "At the end of the Sprint.",
      "When the item has no work remaining in order to be potentially released.",
      "When Quality Assurance reports that the item passes all acceptance criteria.",
      "When all work in the Sprint Backlog related to the item is finished."
    ],
    "correct_answers": [
      "When the item has no work remaining in order to be potentially released."
    ]
  },
  {
    "id": 120,
    "type": "multi_select",
    "category": "Roles",
    "question": "Choose two responsibilities of a self-organizing Development Team. (Choose two.)",
    "options": [
      "Reorder the Product Backlog.",
      "Pull Product Backlog items for the Sprint.",
      "Do the work planned in the Sprint Backlog.",
      "Increase velocity.",
      "Report daily progress to stakeholders."
    ],
    "correct_answers": [
      "Pull Product Backlog items for the Sprint.",
      "Do the work planned in the Sprint Backlog."
    ]
  },
  {
    "id": 121,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "If two Scrum Teams are added to the development of a product that previously had only one Scrum Team, what will be the immediate impact on the productivity of the original Scrum Team?",
    "options": [
      "Its productivity is likely to decrease.",
      "Its productivity is likely to stay the same.",
      "Its productivity is likely to increase.",
      "We do not know until a Sprint has run."
    ],
    "correct_answers": [
      "Its productivity is likely to decrease."
    ]
  },
  {
    "id": 122,
    "type": "multiple_choice",
    "category": "Events",
    "question": "A Scrum Master is introducing Scrum to a new Team. The Team has decided that a Sprint Retrospective is unnecessary. What action should the Scrum Master take?",
    "options": [
      "Call a meeting between the Scrum Team and senior management.",
      "Comply with the decision of the self-organizing team.",
      "Consult with the Product Owner to see how they feels about the situation.",
      "Begin facilitating productive and useful Sprint Retrospectives."
    ],
    "correct_answers": [
      "Begin facilitating productive and useful Sprint Retrospectives."
    ]
  },
  {
    "id": 123,
    "type": "multi_select",
    "category": "Roles",
    "question": "Which of the following are true about the Product Owner role? (Choose two.)",
    "options": [
      "The Product Owner is one person.",
      "The Product Owner is accountable for ordering the Product Backlog.",
      "Multiple people can share the Product Owner role on a Scrum Team.",
      "The Product Owner role can be played by a committee or a team of people."
    ],
    "correct_answers": [
      "The Product Owner is one person.",
      "The Product Owner is accountable for ordering the Product Backlog."
    ]
  },
  {
    "id": 124,
    "type": "true_false",
    "category": "Scaling",
    "question": "When multiple teams work together on the same product, each team should maintain a separate Product Backlog.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 125,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When does the second Sprint start?",
    "options": [
      "Once the architectural changes for the second Sprint have been approved by the senior architect.",
      "After the Product Backlog for the second Sprint has been selected.",
      "Immediately after the first Sprint.",
      "After the customer completes acceptance testing of the first Sprint."
    ],
    "correct_answers": [
      "Immediately after the first Sprint."
    ]
  },
  {
    "id": 126,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "What is included in the Sprint Backlog?",
    "options": [
      "User Stories.",
      "Tasks.",
      "Use Cases.",
      "Tests.",
      "Any of the above (or others) which are a decomposition of the selected Product Backlog items."
    ],
    "correct_answers": [
      "Any of the above (or others) which are a decomposition of the selected Product Backlog items."
    ]
  },
  {
    "id": 127,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "What enhances the transparency of an Increment?",
    "options": [
      "Doing all work needed to meet the definition of \"Done\".",
      "Reporting Sprint progress to the stakeholders daily.",
      "Keeping track of and estimating all undone work to be completed in a separate Sprint.",
      "Updating Sprint tasks properly in the electronic tracking tool."
    ],
    "correct_answers": [
      "Doing all work needed to meet the definition of \"Done\"."
    ]
  },
  {
    "id": 128,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who determines how work is performed during the Sprint?",
    "options": [
      "Architects.",
      "The Development Team.",
      "The Scrum Master.",
      "Subject matter experts.",
      "Development Team managers."
    ],
    "correct_answers": [
      "The Development Team."
    ]
  },
  {
    "id": 129,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Why should the Product Owner be present at the Daily Scrum?",
    "options": [
      "He/She doesn't need to be there.",
      "To hear about impediments in functionality.",
      "To represent the stakeholders' point of view.",
      "To participate as a Scrum Team member."
    ],
    "correct_answers": [
      "He/She doesn't need to be there."
    ]
  },
  {
    "id": 130,
    "type": "multi_select",
    "category": "Roles",
    "question": "What two techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which development techniques to apply? (Choose two.)",
    "options": [
      "Involve the complete Development Team.",
      "Use coaching techniques; such as open questions and active listening.",
      "Ask an external technical specialist to make the decision.",
      "Send every team member to the company's Human Resources department to express their concerns."
    ],
    "correct_answers": [
      "Involve the complete Development Team.",
      "Use coaching techniques; such as open questions and active listening."
    ]
  },
  {
    "id": 131,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who is responsible for clearly expressing Product Backlog items?",
    "options": [
      "The Scrum Master, or the Scrum Master may have the Development Team do it.",
      "The Scrum Master.",
      "The Product Owner.",
      "The business analyst who represents the Product Owner in the Development Team."
    ],
    "correct_answers": [
      "The Product Owner."
    ]
  },
  {
    "id": 132,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "What is the best suited structure for Development Teams in order to produce integrated Increments?",
    "options": [
      "Each Development Team works only one technical layer of the system (e.g. GUI, database, middle tier, interfaces).",
      "Each Development Team develops functionality from beginning to end throughout all technical layers."
    ],
    "correct_answers": [
      "Each Development Team develops functionality from beginning to end throughout all technical layers."
    ]
  },
  {
    "id": 133,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "What are three benefits of self-organization? (Choose three.)",
    "options": [
      "Increased creativity.",
      "Increased rule compliance.",
      "Increased accuracy of estimates.",
      "Increased self-accountability.",
      "Increased commitment."
    ],
    "correct_answers": [
      "Increased creativity.",
      "Increased self-accountability.",
      "Increased commitment."
    ]
  },
  {
    "id": 134,
    "type": "multi_select",
    "category": "Events",
    "question": "Which three of the following are time-boxed events in Scrum? (Choose three.)",
    "options": [
      "Release Testing.",
      "Release Retrospective.",
      "Sprint Retrospective.",
      "Sprint Planning.",
      "Sprint Testing.",
      "Sprint 0.",
      "Daily Scrum."
    ],
    "correct_answers": [
      "Sprint Retrospective.",
      "Sprint Planning.",
      "Daily Scrum."
    ]
  },
  {
    "id": 135,
    "type": "multi_select",
    "category": "Artifacts",
    "question": "At the end of a Sprint, a Product Backlog item worked on during the Sprint does not meet the definition of Done. What two things should happen with the undone Product Backlog item? (Choose two.)",
    "options": [
      "If the stakeholders agree, the Product Owner can accept it and release it to the users.",
      "Put it on the Product Backlog for the Product Owner to decide what to do with it.",
      "Review the item, add the Done part of the estimate to the velocity and create a Story for the remaining work.",
      "Do not include the item in the Increment this Sprint."
    ],
    "correct_answers": [
      "Put it on the Product Backlog for the Product Owner to decide what to do with it.",
      "Do not include the item in the Increment this Sprint."
    ]
  },
  {
    "id": 136,
    "type": "multi_select",
    "category": "Roles",
    "question": "Which two of the following are true about the Scrum Master role? (Choose two.)",
    "options": [
      "At the Sprint Review, the Scrum Master identifies what work is done and not done.",
      "The Scrum Master teaches the Scrum team to use timeboxes.",
      "The Scrum Master helps those outside the team interact with the Scrum Team.",
      "The Scrum Master assigns tasks to Development Team members when they need work.",
      "The Scrum Master is responsible for updating the Sprint Burndown."
    ],
    "correct_answers": [
      "The Scrum Master teaches the Scrum team to use timeboxes.",
      "The Scrum Master helps those outside the team interact with the Scrum Team."
    ]
  },
  {
    "id": 137,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "If burndown charts are used to visualize progress, what does a trend line through a release burndown chart indicate?",
    "options": [
      "The evolution of the cost spent on the project.",
      "When all work will be completed to the Scrum Team can be released for other work.",
      "When the work remaining will likely be completed if nothing changes on the Product Backlog or the Development Team.",
      "When the project will be over if the Product Owner removes work that is equal in effort to any new work that is added."
    ],
    "correct_answers": [
      "When the work remaining will likely be completed if nothing changes on the Product Backlog or the Development Team."
    ]
  },
  {
    "id": 138,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who is responsible for engaging the stakeholders?",
    "options": [
      "The Business Analyst.",
      "The Development Team.",
      "The Team Manager.",
      "The Project Manager.",
      "The Product Owner."
    ],
    "correct_answers": [
      "The Product Owner."
    ]
  },
  {
    "id": 139,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "How much work is required of the Developers to complete a Product Backlog item selected during the Sprint Planning?",
    "options": [
      "A proportional amount of time on analysis, design, programming, testing.",
      "All development work and at least some testing.",
      "As much as they can fit into the Sprint, with remaining work deferred to the next Sprint.",
      "As much as is required to meet the Scrum Team's Definition of Done."
    ],
    "correct_answers": [
      "As much as is required to meet the Scrum Team's Definition of Done."
    ]
  },
  {
    "id": 140,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Which statement best describes the Sprint Backlog as outcome of the Sprint Planning?",
    "options": [
      "It is a complete list of all work to be done in a Sprint.",
      "Every item has a designated owner.",
      "Each task is estimated in hours.",
      "It is the Scrum Team's plan for the Sprint.",
      "It is ordered by the Product Owner."
    ],
    "correct_answers": [
      "It is the Scrum Team's plan for the Sprint."
    ]
  },
  {
    "id": 141,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "What does it mean for a Scrum Team to be cross-functional? (Choose the best answer.)",
    "options": [
      "The Scrum Team includes not only developers but also business analysts, architects, and testers.",
      "The Scrum Team includes cross-skilled individuals who are able to contribute to do what is necessary to deliver an increment.",
      "Developers on the Scrum Team work closely with business analysts, architects, developers and testers who are not on the team.",
      "The Scrum Team is a virtual team drawing from separate teams of business analysts, architects, developers and testers."
    ],
    "correct_answers": [
      "The Scrum Team includes cross-skilled individuals who are able to contribute to do what is necessary to deliver an increment."
    ]
  },
  {
    "id": 142,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Sprint burndown charts are an efficient tracking tool, because they show:",
    "options": [
      "An estimate of the total work remaining for the Sprint.",
      "How much effort has gone into a Sprint.",
      "How many hours have been worked by each Development Team member.",
      "How many Product Backlog items remain."
    ],
    "correct_answers": [
      "An estimate of the total work remaining for the Sprint."
    ]
  },
  {
    "id": 143,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Which topics should be discussed in the Sprint Review?",
    "options": [
      "The Scrum process, and how it was used during the Sprint.",
      "Coding and engineering practices.",
      "Sprint results.",
      "All of the above."
    ],
    "correct_answers": [
      "Sprint results."
    ]
  },
  {
    "id": 144,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "A member of the Development Team takes the Scrum Master aside to express his concerns about data security issues. What should the Scrum Master do?",
    "options": [
      "Add security to the definition of \"Done\".",
      "Tell the Product Owner to stop further development of features until the issues are fixed.",
      "Create a Product Backlog item for security.",
      "Go check with the testers.",
      "Ask the person to share the issue with the team as soon as possible."
    ],
    "correct_answers": [
      "Ask the person to share the issue with the team as soon as possible."
    ]
  },
  {
    "id": 145,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "The Product Backlog is ordered by:",
    "options": [
      "The Product Owner with the most valuable items placed at the top.",
      "Risk, where safer items are at the top, and riskier items are at the bottom.",
      "Items are randomly arranged.",
      "Size, where small items are at the top and large items are at the bottom."
    ],
    "correct_answers": [
      "The Product Owner with the most valuable items placed at the top."
    ]
  },
  {
    "id": 146,
    "type": "multiple_choice",
    "category": "Events",
    "question": "What happens if the Scrum Team cannot complete its work by the end of the Sprint?",
    "options": [
      "The Sprint is extended and future Sprints use this new duration.",
      "The Sprint length is unchanged and the Scrum Team continuously learns and adapts.",
      "The Sprint is extended temporarily. Lessons are taken to ensure it doesn't happen again."
    ],
    "correct_answers": [
      "The Sprint length is unchanged and the Scrum Team continuously learns and adapts."
    ]
  },
  {
    "id": 147,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "User documentation is part of your definition of Done. However, there aren't enough technical writers for all teams. Your Scrum Team doesn't have a technical writer. What should the Scrum Team do?",
    "options": [
      "Form a separate team of technical writers that will work on an on-demand basis for the various Product Owners. Work order will be first in, first out.",
      "Let the user documentation remain undone and accumulate until after the last development Sprint. It will then be done by any available technical writers.",
      "Wait until you have a technical writer on your Development Team to take care of this.",
      "The Developers on the Scrum Team should write the user documentation."
    ],
    "correct_answers": [
      "The Developers on the Scrum Team should write the user documentation."
    ]
  },
  {
    "id": 148,
    "type": "multi_select",
    "category": "Scaling",
    "question": "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several of the developers come to you complaining that work identified for the upcoming two Sprints will require full-time commitment from a technical specialist who is external to the teams. What are two key concerns for the Scrum Master to take into account in this situation? (Choose two.)",
    "options": [
      "The desire to maintain a stable velocity.",
      "The benefit of Development Teams figuring out a solution for themselves.",
      "The need to have enough work to keep all Development Team members busy.",
      "The ability of the Scrum Teams to produce integrated Increments."
    ],
    "correct_answers": [
      "The benefit of Development Teams figuring out a solution for themselves.",
      "The ability of the Scrum Teams to produce integrated Increments."
    ]
  },
  {
    "id": 149,
    "type": "multi_select",
    "category": "Scaling",
    "question": "You have just been hired by a company new to Scrum. Your management has assigned you to be the Scrum Master of six new Scrum Teams. These teams will build one product. Select two conditions you should strive for in this scenario. (Choose two.)",
    "options": [
      "There should be six Product Owners, one for each Scrum Team.",
      "There should be six Product Owners, reporting to a chief Product Owner.",
      "The product has one Product Backlog.",
      "Each Scrum Team should have a separate Product Backlog.",
      "There should be only one Product Owner."
    ],
    "correct_answers": [
      "The product has one Product Backlog.",
      "There should be only one Product Owner."
    ]
  },
  {
    "id": 151,
    "type": "multi_select",
    "category": "Events",
    "question": "Which are NOT appropriate topics for discussion in a Sprint Retrospective? (Choose two.)",
    "options": [
      "Definition of \"Done\".",
      "How the team does its work.",
      "Team relations.",
      "The value of work currently represented in the Product Backlog.",
      "Arranging the Sprint Backlog for the next Sprint."
    ],
    "correct_answers": [
      "The value of work currently represented in the Product Backlog.",
      "Arranging the Sprint Backlog for the next Sprint."
    ]
  },
  {
    "id": 152,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "What activities would a Product Owner typically undertake in the phase between the end of the current Sprint and the start of the next Sprint?",
    "options": [
      "There are no such activities. The next Sprint starts immediately after the current Sprint.",
      "Refine the Product Backlog.",
      "Work with the Quality Assurance departments on the Increment of the current Sprint.",
      "Update the project plan with stakeholders."
    ],
    "correct_answers": [
      "There are no such activities. The next Sprint starts immediately after the current Sprint."
    ]
  },
  {
    "id": 153,
    "type": "multi_select",
    "category": "Roles",
    "question": "Who is on the Scrum Team? (Choose all that apply.)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Developer",
      "Project Manager",
      "None of the above"
    ],
    "correct_answers": [
      "Scrum Master",
      "Product Owner",
      "Developer"
    ]
  },
  {
    "id": 154,
    "type": "multi_select",
    "category": "Roles",
    "question": "Which of the following are roles on a Scrum Team? (Choose three.)",
    "options": [
      "Users",
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Customers"
    ],
    "correct_answers": [
      "Scrum Master",
      "Product Owner",
      "Development Team"
    ]
  },
  {
    "id": 155,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Which does a self-organizing Development Team choose?",
    "options": [
      "Sprint length.",
      "How to best accomplish its work.",
      "Stakeholders for the Sprint Review.",
      "When to release, based on its progress.",
      "Product Backlog ordering."
    ],
    "correct_answers": [
      "How to best accomplish its work."
    ]
  },
  {
    "id": 156,
    "type": "true_false",
    "category": "Events",
    "question": "A Scrum Team is only allowed to meet with stakeholders during Sprint Review.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 157,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Why is the Daily Scrum held at the same time and same place?",
    "options": [
      "The consistency reduces complexity.",
      "The place can be named.",
      "The Product Owner demands it.",
      "Rooms are hard to book and this lets it be booked in advance."
    ],
    "correct_answers": [
      "The consistency reduces complexity."
    ]
  },
  {
    "id": 158,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Which best describes the Product Backlog?",
    "options": [
      "It is allowed to grow and change as more is learned about the product and its customers.",
      "It provides just enough information to enable a Scrum team to start the design phase of a product.",
      "It contains all foreseeable tasks and requirements from which the Scrum team can develop and maintain a complete project plan.",
      "It is baselined to follow change management processes."
    ],
    "correct_answers": [
      "It is allowed to grow and change as more is learned about the product and its customers."
    ]
  },
  {
    "id": 159,
    "type": "multi_select",
    "category": "Events",
    "question": "One of the Scrum events is the Daily Scrum. What are two intended outcomes of the Daily Scrum? (Choose two.)",
    "options": [
      "A shared understanding of the most important work to be undertaken next to achieve the best possible progress toward the Sprint goal.",
      "An update of completed tasks and of the remaining work so the Scrum Master can plan the next day.",
      "A status report for the upper management indicating what each individual has done, will be doing, and what is impending him/her.",
      "An updated Scrum board to make Sprint progress transparent for the stakeholders.",
      "Identification of impediments that may prevent the Developers from achieving the Sprint Goal."
    ],
    "correct_answers": [
      "A shared understanding of the most important work to be undertaken next to achieve the best possible progress toward the Sprint goal.",
      "Identification of impediments that may prevent the Developers from achieving the Sprint Goal."
    ]
  },
  {
    "id": 160,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who has the final say on the order of the Product Backlog?",
    "options": [
      "The Development Team.",
      "The Product Owner.",
      "The Scrum Master.",
      "The Stakeholders.",
      "The CEO."
    ],
    "correct_answers": [
      "The Product Owner."
    ]
  },
  {
    "id": 161,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "How do you know that a Development Team is cross-functional?",
    "options": [
      "Development Team has all the skills to create a potentially releasable increment by the end of every Sprint.",
      "A few of the Development Team members pair program and do Test Driven Development.",
      "There are no conflicts within the Development Team.",
      "Every member of the Development Team is able to perform every task."
    ],
    "correct_answers": [
      "Development Team has all the skills to create a potentially releasable increment by the end of every Sprint."
    ]
  },
  {
    "id": 162,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Why does a Development Team need a Sprint Goal?",
    "options": [
      "A Sprint Goal only gives purpose to Sprint 0.",
      "Sprint Goals are not valuable. Everything is known from the Product Backlog.",
      "The Development Team is more focused with a common yet specific goal.",
      "A Sprint Goal ensures that all of the Product Backlog items selected for the Sprint are implemented."
    ],
    "correct_answers": [
      "The Development Team is more focused with a common yet specific goal."
    ]
  },
  {
    "id": 163,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "Which three behaviors demonstrate that a team is self-organizing? (Choose three.)",
    "options": [
      "Stakeholders walking in at the Daily Scrum to check progress and work with the Scrum Master to optimize the functional scope for the Sprint.",
      "The Development Team members are working within the boundaries of their functional description and nicely handing off work from analyst to developer to tester to integration.",
      "The Product Owner doesn't need to be at Sprint Retrospectives.",
      "The Development Team creating their own sprint backlog, reflecting all work that is part of the definition of \"Done\".",
      "The Development Team has all the skills needed to create a releasable Increment.",
      "Development Team members collaboratively selecting their own work during the Sprint.",
      "The Development Team inviting external people to the Sprint Planning to ask them how to turn a Product Backlog item into an Increment via a complete and detailed Sprint Backlog.",
      "The Scrum Master is no longer needed."
    ],
    "correct_answers": [
      "The Development Team creating their own sprint backlog, reflecting all work that is part of the definition of \"Done\".",
      "The Development Team has all the skills needed to create a releasable Increment.",
      "Development Team members collaboratively selecting their own work during the Sprint."
    ]
  },
  {
    "id": 164,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When does the next Sprint begin?",
    "options": [
      "When the Product Owner is ready.",
      "Immediately after the conclusion of the previous Sprint.",
      "The Monday following the Sprint Review.",
      "Immediately following the next Sprint Planning."
    ],
    "correct_answers": [
      "Immediately after the conclusion of the previous Sprint."
    ]
  },
  {
    "id": 165,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who should know the most about the progress toward a business objective or a release?",
    "options": [
      "The Project Manager.",
      "The Scrum Master.",
      "The Development Team.",
      "The Product Owner."
    ],
    "correct_answers": [
      "The Product Owner."
    ]
  },
  {
    "id": 166,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "What are two ways that regulatory compliance issues are dealt with in Scrum? (Choose two.)",
    "options": [
      "They are discussed, determined, and documented before the actual feature development Sprints.",
      "They are addressed along with functional development of the product.",
      "They are added to the Product Backlog and addressed in early Sprints, while always requiring at least some business functionality, no matter how small.",
      "They are addressed by a separate team who is responsible for compliance issues."
    ],
    "correct_answers": [
      "They are addressed along with functional development of the product.",
      "They are added to the Product Backlog and addressed in early Sprints, while always requiring at least some business functionality, no matter how small."
    ]
  },
  {
    "id": 167,
    "type": "multi_select",
    "category": "Roles",
    "question": "A Scrum Team is experiencing a growing list of impediments. Which techniques would be most helpful in this situation? (Choose two.)",
    "options": [
      "The Scrum Master discusses the impediments with the Scrum Team.",
      "As a Scrum Team, prioritize the list and work on them in order.",
      "Arrange a triage meeting with management.",
      "The Product Owner should add the open impediments to the Product Backlog."
    ],
    "correct_answers": [
      "The Scrum Master discusses the impediments with the Scrum Team.",
      "As a Scrum Team, prioritize the list and work on them in order."
    ]
  },
  {
    "id": 168,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "When many Development Teams are working on a single product, what best describes the definition of Done? (Choose the best answer.)",
    "options": [
      "Each Development Team defines and uses its own. The differences are discussed and reconciled during a hardening Sprint.",
      "It depends.",
      "Each Development Team uses its own but must make their definition clear to all other teams so the differences are known.",
      "All Development Teams must have a definition of Done that makes their combined work potentially releasable."
    ],
    "correct_answers": [
      "All Development Teams must have a definition of Done that makes their combined work potentially releasable."
    ]
  },
  {
    "id": 169,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The IT manager asks a Development Team for a status report describing the progress throughout the Sprint. The Development Team asks the Scrum Master for advice. The Scrum Master should:",
    "options": [
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review.",
      "Tell the Development Team to figure it out themselves.",
      "Tell the Development Team to fit the report into the Sprint Backlog.",
      "Create and deliver the report to the manager herself.",
      "Ask the Product Owner to send the manager the report."
    ],
    "correct_answers": [
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review."
    ]
  },
  {
    "id": 170,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When a Development Team determines that it will not be able to finish the complete forecast, who has to be present when reviewing and adjusting the Sprint work selected?",
    "options": [
      "The Development Team.",
      "The Product Owner and all stakeholders.",
      "The Product Owner and the Development Team.",
      "The Scrum Master, project manager and Development Team."
    ],
    "correct_answers": [
      "The Product Owner and the Development Team."
    ]
  },
  {
    "id": 171,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "What is the accountability of the Product Owner during Sprint 0?",
    "options": [
      "There is no such thing as Sprint 0.",
      "Gathering, eliciting, and analyzing the requirements that will be inserted into the Product Backlog.",
      "Make the complete project plan to commit date, budget, and scope to the stakeholders.",
      "Determine the composition of the Development Teams so they have the capacity to deliver the completed forecast.",
      "Make sure enough Product Backlog items are refined to fill the first 3 Sprints."
    ],
    "correct_answers": [
      "There is no such thing as Sprint 0."
    ]
  },
  {
    "id": 172,
    "type": "multi_select",
    "category": "Events",
    "question": "At the seventh Sprint Review, the stakeholders are disappointed and angry... What factors likely led to this? (Choose two.)",
    "options": [
      "The Project Management Office (PMO) has not been engaged adequately.",
      "The Product Owner has not been keeping the stakeholders aware of the progress of the project.",
      "The stakeholders haven't been using the Sprint Reviews to inspect and evaluate progress.",
      "The stakeholders were not allowed to enter the development area."
    ],
    "correct_answers": [
      "The Product Owner has not been keeping the stakeholders aware of the progress of the project.",
      "The stakeholders haven't been using the Sprint Reviews to inspect and evaluate progress."
    ]
  },
  {
    "id": 173,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Every Scrum Team must have a Product Owner and Scrum Master. (Choose the best answer.)",
    "options": [
      "True. Outcomes affected by their participation and availability.",
      "False. A Product Owner can be replaced by a subject matter expert in the Scrum Team.",
      "False. A Scrum Master is only required when asked for by the Scrum Team.",
      "True. Each must be 100% dedicated to the Scrum Team."
    ],
    "correct_answers": [
      "True. Outcomes affected by their participation and availability."
    ]
  },
  {
    "id": 174,
    "type": "multi_select",
    "category": "Events",
    "question": "Which two things should the Development Team do during the first Sprint? (Choose two.)",
    "options": [
      "Make up a plan for the rest of the project.",
      "Analyze, describe, and document the requirements for the subsequent Sprints.",
      "Develop at least one piece of functionality.",
      "Define the major product features and release plan architecture.",
      "Create an increment of potentially releasable software."
    ],
    "correct_answers": [
      "Develop at least one piece of functionality.",
      "Create an increment of potentially releasable software."
    ]
  },
  {
    "id": 175,
    "type": "multi_select",
    "category": "Roles",
    "question": "Which two activities will a Product Owner engage in during a Sprint? (Choose two.)",
    "options": [
      "Run the Daily Scrum.",
      "Prioritize the Development Team's work on the Sprint Backlog.",
      "Update management on what is being worked on.",
      "Answer questions from the Development Team about items in the current Sprint."
    ],
    "correct_answers": [
      "Update management on what is being worked on.",
      "Answer questions from the Development Team about items in the current Sprint."
    ]
  },
  {
    "id": 176,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done?",
    "options": [
      "Without a new vocabulary as a reminder of the change, very little change may actually happen.",
      "The organization may not understand what has changed within Scrum and the benefits of Scrum may be lost.",
      "Management may feel less anxious.",
      "All answers apply."
    ],
    "correct_answers": [
      "All answers apply."
    ]
  },
  {
    "id": 177,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "How do you know that a Scrum Team is cross-functional?",
    "options": [
      "Scrum Team has all the skills to create an increment by the end of every Sprint.",
      "A few of the Development Team members pair program and do Test Driven Development.",
      "There are no conflicts within the Scrum Team.",
      "Every member of the Scrum Team is able to perform every task."
    ],
    "correct_answers": [
      "Scrum Team has all the skills to create an increment by the end of every Sprint."
    ]
  },
  {
    "id": 178,
    "type": "multi_select",
    "category": "Roles",
    "question": "Several Sprints into a project, the Product Owner tells the Scrum Master that a key stakeholder just started using the product. The stakeholder is unhappy with the quality of the product. What are two good options for the Scrum Master? (Choose two.)",
    "options": [
      "Wait to bring this up until the Sprint Retrospective.",
      "Encourage the Product Owner to put quality specifications on the Product Backlog and express the stakeholder's concern to the Developers.",
      "Bring the concern to the testers to improve how the Product is verified.",
      "Explain to the Product Owner that it is up to the Developers to decide on acceptable quality standards.",
      "Coach the Product Owner on how to talk with the Developers about this concern."
    ],
    "correct_answers": [
      "Encourage the Product Owner to put quality specifications on the Product Backlog and express the stakeholder's concern to the Developers.",
      "Coach the Product Owner on how to talk with the Developers about this concern."
    ]
  },
  {
    "id": 179,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Which answer best describes the topics covered in Sprint Planning?",
    "options": [
      "What to do and who will do it.",
      "How conditions have changed and how the Product Backlog should evolve.",
      "What can be done and how to do it, and why to do it.",
      "What went wrong in the last Sprint and what to do differently this Sprint.",
      "Who is on the team and what team member roles will be."
    ],
    "correct_answers": [
      "What can be done and how to do it, and why to do it."
    ]
  },
  {
    "id": 180,
    "type": "multi_select",
    "category": "Events",
    "question": "Which three of the following are time-boxed events in Scrum? (Choose three.)",
    "options": [
      "Release Planning.",
      "Release Retrospective.",
      "Sprint Retrospective.",
      "Sprint Planning.",
      "Sprint Testing.",
      "Sprint 0.",
      "Daily Scrum."
    ],
    "correct_answers": [
      "Sprint Retrospective.",
      "Sprint Planning.",
      "Daily Scrum."
    ]
  },
  {
    "id": 181,
    "type": "multi_select",
    "category": "Roles",
    "question": "A Scrum Team is a cohesive unit of professionals that consists of which of the following? (Choose all that apply.)",
    "options": [
      "Users.",
      "One Scrum Master.",
      "Developers.",
      "Customers.",
      "One Product Owner."
    ],
    "correct_answers": [
      "One Scrum Master.",
      "Developers.",
      "One Product Owner."
    ]
  },
  {
    "id": 182,
    "type": "multi_select",
    "category": "Roles",
    "question": "Which of the following is a Developer accountable for? (Choose two.)",
    "options": [
      "Selecting the Product Owner.",
      "Reporting productivity.",
      "Creating a plan for the Sprint, the Sprint Backlog.",
      "Organizing the work required to meet the Sprint Goal."
    ],
    "correct_answers": [
      "Creating a plan for the Sprint, the Sprint Backlog.",
      "Organizing the work required to meet the Sprint Goal."
    ]
  },
  {
    "id": 183,
    "type": "true_false",
    "category": "Artifacts",
    "question": "The Sprint Backlog is a result of Sprint Planning, and it includes the Sprint Goal.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": 184,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "When must a Product Owner release each Increment?",
    "options": [
      "When it makes sense to release it.",
      "When the Scrum Team finishes their work.",
      "Whenever the product is free of defects.",
      "After every Sprint, without exception."
    ],
    "correct_answers": [
      "When it makes sense to release it."
    ]
  },
  {
    "id": 185,
    "type": "multi_select",
    "category": "Roles",
    "question": "What techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which agile practices to apply? (Choose two.)",
    "options": [
      "Involve the complete Scrum Team in making a decision.",
      "Use coaching techniques; such as open questions and active listening.",
      "Ask an external agile coach what they recommend.",
      "Ask team members to take the issue up with to the company's Human Resources department."
    ],
    "correct_answers": [
      "Involve the complete Scrum Team in making a decision.",
      "Use coaching techniques; such as open questions and active listening."
    ]
  },
  {
    "id": 186,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Which of the following is an example of an Increment?",
    "options": [
      "A plan for the overall product release.",
      "A mock-up of the product marketing materials.",
      "A design for the product.",
      "A product roll-out plan.",
      "A valuable, useful set of products featured.",
      "All of the above."
    ],
    "correct_answers": [
      "A valuable, useful set of products featured."
    ]
  },
  {
    "id": 187,
    "type": "multiple_choice",
    "category": "Events",
    "question": "During the Sprint Retrospective a Scrum Team has identified several high priority process improvements. Which of the following statements is most accurate?",
    "options": [
      "The Scrum Team may add items to the Sprint Backlog for the next Sprint.",
      "The Scrum Team should choose at least one high priority process improvement to place in the Product Backlog.",
      "The Scrum Team should decline to add a process improvement to the Sprint Backlog when things are running smoothly.",
      "The Scrum Master selects the most important process improvement and places it in the Sprint Backlog"
    ],
    "correct_answers": [
      "The Scrum Team may add items to the Sprint Backlog for the next Sprint."
    ]
  },
  {
    "id": 188,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "Which three of the following are true about Scrum? (Choose three.)",
    "options": [
      "Scrum implements self-management by replacing Project Managers with Scrum Masters.",
      "Each component of Scrum serves a specific purpose and is essential to Scrum's success and your usage of Scrum to develop complex products.",
      "Scrum is a methodology where you can pick and choose which parts of Scrum you think will work for your environment.",
      "Scrum is a framework for developing and sustaining complex products.",
      "Scrum is based on empiricism and lean thinking."
    ],
    "correct_answers": [
      "Each component of Scrum serves a specific purpose and is essential to Scrum's success and your usage of Scrum to develop complex products.",
      "Scrum is a framework for developing and sustaining complex products.",
      "Scrum is based on empiricism and lean thinking."
    ]
  },
  {
    "id": 189,
    "type": "multi_select",
    "category": "Events",
    "question": "Which are appropriate topics for discussion in a Sprint Retrospective? (Choose three.)",
    "options": [
      "Arranging the Sprint Backlog for the next Sprint.",
      "The value of work currently represented in the Product Backlog.",
      "Team relations",
      "Definition of Done.",
      "How the Scrum Team does its work."
    ],
    "correct_answers": [
      "Team relations",
      "Definition of Done.",
      "How the Scrum Team does its work."
    ]
  },
  {
    "id": 190,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "When many Scrum Teams are working on a single product, what best describes the Definition of Done?",
    "options": [
      "Each Scrum Team defines and uses its own. The differences are discussed and reconciled during a hardening Sprint.",
      "The Scrum Masters from each Scrum Team define a common Definition of Done.",
      "Each Scrum Team uses its own, but must make their definition clear to all other teams so the differences are known.",
      "When multiple Scrum Teams are working together on a product, they must mutually define and comply with the - same Definition of Done."
    ],
    "correct_answers": [
      "When multiple Scrum Teams are working together on a product, they must mutually define and comply with the - same Definition of Done."
    ]
  },
  {
    "id": 191,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Who has the final decision about the order of items in the Product Backlog?",
    "options": [
      "The Stakeholders.",
      "The Product Owner.",
      "The Scrum Team.",
      "The Scrum Master.",
      "The Developers."
    ],
    "correct_answers": [
      "The Product Owner."
    ]
  },
  {
    "id": 192,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who is accountable for tracking the remaining work toward the Sprint Goal?",
    "options": [
      "The Developers.",
      "The Scrum Master.",
      "The Product Owner.",
      "The Project Manager."
    ],
    "correct_answers": [
      "The Developers."
    ]
  },
  {
    "id": 193,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "Which approach is best for Scrum Teams in order to produce valuable Increments?",
    "options": [
      "Each Developer works on the component where they feel that they can contribute.",
      "Each Scrum Team is accountable for developing functionality from beginning to end.",
      "Each Scrum Team works on an independent set of components.",
      "Each Scrum Member works only as an independent layer of the system."
    ],
    "correct_answers": [
      "Each Scrum Team is accountable for developing functionality from beginning to end."
    ]
  },
  {
    "id": 194,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Which activity will a Product Owner engage in during a Sprint?",
    "options": [
      "Run the Daily Scrum.",
      "Prioritize the Developers' work on the Sprint Backlog.",
      "Answer questions from the Developers about items in the current Sprint.",
      "Update management on what is being worked on."
    ],
    "correct_answers": [
      "Answer questions from the Developers about items in the current Sprint."
    ]
  },
  {
    "id": 195,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Developers are self-managing, which of the following do they manage?",
    "options": [
      "Sprint length.",
      "Sprint Backlog.",
      "Stakeholders for the Sprint Review.",
      "When to release, based on its progress.",
      "Product Backlog ordering."
    ],
    "correct_answers": [
      "Sprint Backlog."
    ]
  },
  {
    "id": 196,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "What are three ways Scrum promoting self-organization? (Choose three.)",
    "options": [
      "By having the Scrum Master protect the Scrum Team from interruptions.",
      "By being a lightweight framework.",
      "By the Scrum Team deciding what work to do in a Sprint.",
      "By removing titles for Scrum Team members."
    ],
    "correct_answers": [
      "By being a lightweight framework.",
      "By the Scrum Team deciding what work to do in a Sprint.",
      "By removing titles for Scrum Team members."
    ]
  },
  {
    "id": 197,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Which topics should be discussed in the Sprint Review?",
    "options": [
      "The Scrum process, and how it was used during the Sprint.",
      "Coding and engineering practices.",
      "The product Increment.",
      "All of the above."
    ],
    "correct_answers": [
      "The product Increment."
    ]
  },
  {
    "id": 198,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who should know the most about the progress toward the Product Goal?",
    "options": [
      "The Developers.",
      "The Product Owner.",
      "The Scrum Master.",
      "The Project Manager."
    ],
    "correct_answers": [
      "The Product Owner."
    ]
  },
  {
    "id": 199,
    "type": "multi_select",
    "category": "Events",
    "question": "As the Sprint Planning progresses, the Developers realize that the workload may be greater than their capacity to complete the work. Which two are valid actions? (Choose two.)",
    "options": [
      "The Developers ensure that the Scrum Team is aware, start the Sprint, and monitor progress.",
      "Cancel the Sprint.",
      "The Developers work overtime during this Sprint.",
      "Remove or change selected Product Backlog items.",
      "Recruit additional Developers before the work can begin."
    ],
    "correct_answers": [
      "The Developers ensure that the Scrum Team is aware, start the Sprint, and monitor progress.",
      "Remove or change selected Product Backlog items."
    ]
  },
  {
    "id": 200,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who determines how work is performed during the Sprint?",
    "options": [
      "The Developers",
      "The Scrum Team.",
      "The Scrum Master.",
      "Team manager.",
      "Subject matter experts."
    ],
    "correct_answers": [
      "The Developers"
    ]
  },
  {
    "id": 201,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "Which Scrum Values are violated by building Product Backlog items that have low business value? (Choose three.)",
    "options": [
      "Respect.",
      "Earned Value.",
      "Courage.",
      "Focus.",
      "Economic Value Added."
    ],
    "correct_answers": [
      "Respect.",
      "Courage.",
      "Focus."
    ]
  },
  {
    "id": 202,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When is the Sprint Backlog created?",
    "options": [
      "During refinement.",
      "Prior to Sprint Planning.",
      "During Sprint Planning.",
      "During the Sprint Retrospective."
    ],
    "correct_answers": [
      "During Sprint Planning."
    ]
  },
  {
    "id": 203,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Which of the following are true about the length of the Sprint?",
    "options": [
      "The length of the Sprint should be proportional to the work that is done in between Sprints.",
      "Sprint length is determined during Sprint Planning, and should hold the time it will take to build the planned features in the upcoming Sprint, but does not include time for any testing.",
      "Sprint length is determined during Sprint Planning, and should be long enough to make sure the Scrum Team can deliver what is to be accomplished in the upcoming Sprint.",
      "All Sprints must be one month or less."
    ],
    "correct_answers": [
      "All Sprints must be one month or less."
    ]
  },
  {
    "id": 204,
    "type": "true_false",
    "category": "Artifacts",
    "question": "An Increment must be released to customers or users at the end of each Sprint.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 205,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When must the Product Owner participate in the Daily Scrum?",
    "options": [
      "When the Product Owner needs to represent the stakeholders' point of view to the Developers.",
      "When there are impediments to discuss.",
      "When the Scrum Master asks the Product Owner to attend.",
      "When the Product Owner is actively working on items on the Sprint Backlog; however, they participate as a Developer."
    ],
    "correct_answers": [
      "When the Product Owner is actively working on items on the Sprint Backlog; however, they participate as a Developer."
    ]
  },
  {
    "id": 206,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "What are three ways Scrum promotes self-management? (Choose three.)",
    "options": [
      "By the Scrum Team deciding what work to do in a Sprint.",
      "By being a lightweight framework.",
      "By having the Scrum Master protect the Scrum Team from interruptions.",
      "By removing titles for Scrum Team members."
    ],
    "correct_answers": [
      "By the Scrum Team deciding what work to do in a Sprint.",
      "By being a lightweight framework.",
      "By removing titles for Scrum Team members."
    ]
  },
  {
    "id": 207,
    "type": "multi_select",
    "category": "Events",
    "question": "Which are characteristics of the Daily Scrum? (Choose two.)",
    "options": [
      "Its purpose is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog.",
      "It is facilitated by the team lead.",
      "It is free form and designed to promote conversation.",
      "It consists of the Scrum Master asking the team for status.",
      "Its location and time remain constant.",
      "It is held first thing in the morning."
    ],
    "correct_answers": [
      "Its purpose is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog.",
      "Its location and time remain constant."
    ]
  },
  {
    "id": 208,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "What is the Scrum Master responsible for during the Sprint Retrospective?",
    "options": [
      "Summarizing and reporting the discussions to management.",
      "Prioritizing the resulting action items.",
      "Participating as a Scrum Team member and facilitating as requested or needed.",
      "Acting as a scribe to capture the Scrum Team's answers."
    ],
    "correct_answers": [
      "Participating as a Scrum Team member and facilitating as requested or needed."
    ]
  },
  {
    "id": 209,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "What is the typical size for a Scrum Team?",
    "options": [
      "10 or fewer.",
      "At least 7.",
      "7 plus or minus 3.",
      "9."
    ],
    "correct_answers": [
      "10 or fewer."
    ]
  },
  {
    "id": 210,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "When is it most appropriate for a Scrum Team to change the Definition of Done?",
    "options": [
      "Prior to starting a new project.",
      "During Product Backlog refinement.",
      "During Sprint Planning.",
      "During the Sprint Retrospective."
    ],
    "correct_answers": [
      "During the Sprint Retrospective."
    ]
  },
  {
    "id": 211,
    "type": "true_false",
    "category": "Roles",
    "question": "Developers do not meet with stakeholders; only the Product Owner meets with stakeholders.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 212,
    "type": "true_false",
    "category": "Events",
    "question": "A high-performance Scrum Team ensures that each Increment is complete by running a Release Sprint.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 213,
    "type": "multiple_choice",
    "category": "Events",
    "question": "What factor should be considered when establishing the Sprint length?",
    "options": [
      "The frequency at which team formation can be changed.",
      "The organization has mandated similar length sprints.",
      "The organization's release schedule.",
      "The need for the team to learn based on doing work and measuring results."
    ],
    "correct_answers": [
      "The need for the team to learn based on doing work and measuring results."
    ]
  },
  {
    "id": 214,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who does the work to make sure Product Backlog items conform to the Definition of Done?",
    "options": [
      "The Quality Assurance Team.",
      "The Scrum Master.",
      "The Developers",
      "The Product Owner.",
      "The Scrum Team."
    ],
    "correct_answers": [
      "The Developers"
    ]
  },
  {
    "id": 215,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Who creates the Definition of Done?",
    "options": [
      "The Scrum Team",
      "The Scrum Master",
      "The Product Owner",
      "The Developers"
    ],
    "correct_answers": [
      "The Scrum Team"
    ]
  },
  {
    "id": 216,
    "type": "multi_select",
    "category": "Events",
    "question": "Which two things should the Scrum Team do during the first Sprint? (Choose two.)",
    "options": [
      "Make up a plan for the rest of the project.",
      "Define the major product features and a release plan architecture.",
      "Build at least one piece of valuable functionality.",
      "Analyze, describe, and document the requirements for the subsequent Sprints.",
      "Create at least one valuable, useful Increment."
    ],
    "correct_answers": [
      "Build at least one piece of valuable functionality.",
      "Create at least one valuable, useful Increment."
    ]
  },
  {
    "id": 217,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "When is a Product Backlog item considered complete?",
    "options": [
      "When the item passes all acceptance criteria.",
      "When the item meets the Definition of Done.",
      "At the end of the Sprint.",
      "When the item has gained product sponsor approval."
    ],
    "correct_answers": [
      "When the item meets the Definition of Done."
    ]
  },
  {
    "id": 218,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "When does a Developer become accountable for an item in the Sprint Backlog?",
    "options": [
      "During the Daily Scrum.",
      "As soon as a Developer on the Scrum Team can accommodate more work.",
      "Never. All Developers on the Scrum Team share accountability for items in the Sprint Backlog.",
      "At Sprint Planning when all of the Sprint Backlog items are split evenly across the Developers."
    ],
    "correct_answers": [
      "Never. All Developers on the Scrum Team share accountability for items in the Sprint Backlog."
    ]
  },
  {
    "id": 219,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When does a Sprint conclude?",
    "options": [
      "When all Product Backlog items meet their Definition of Done.",
      "When the Sprint Retrospective is complete.",
      "When the Product Owner decides enough has been delivered to meet the Sprint Goal.",
      "When all the tasks are completed by the Developers."
    ],
    "correct_answers": [
      "When the Sprint Retrospective is complete."
    ]
  },
  {
    "id": 220,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "What tactic should a Scrum Team use to divide a group of 100 people into multiple Scrum Teams?",
    "options": [
      "Ask the people to divide themselves into teams.",
      "Ask the Product Owner to assign the people to teams.",
      "Create teams based on their skills across multiple layers (such as database, UI, etc.)"
    ],
    "correct_answers": [
      "Ask the people to divide themselves into teams."
    ]
  },
  {
    "id": 221,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Which of these may a Scrum Team deliver at the end of a Sprint?",
    "options": [
      "An Increment of software with minor known bugs in it.",
      "Failing unit tests, to identify acceptance tests for the next Sprint.",
      "A single document, if that is what management asked for.",
      "A valuable, useful increment that meets the Definition of Done."
    ],
    "correct_answers": [
      "A valuable, useful increment that meets the Definition of Done."
    ]
  },
  {
    "id": 222,
    "type": "multi_select",
    "category": "Roles",
    "question": "Which of the following are true about the Product Owner? (Choose two.)",
    "options": [
      "The Product Owner can be represented by a committee or a team of people.",
      "The Product Owner is accountable for ordering the Product Backlog.",
      "The Scrum Team can have multiple Product Owners.",
      "The Product Owner is one person."
    ],
    "correct_answers": [
      "The Product Owner is accountable for ordering the Product Backlog.",
      "The Product Owner is one person."
    ]
  },
  {
    "id": 223,
    "type": "true_false",
    "category": "Scrum Theory",
    "question": "True or False: Cross-functional teams are optimized to work on one component or layer of a system only.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 224,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "Every Scrum Team should have:",
    "options": [
      "The competencies and skills needed to deliver and increment in a Sprint.",
      "At least one representative from each major department, such as, Quality Assurance, Development, and Marketing.",
      "One Lead Developer and no more than 8 other members."
    ],
    "correct_answers": [
      "The competencies and skills needed to deliver and increment in a Sprint."
    ]
  },
  {
    "id": 225,
    "type": "multi_select",
    "category": "Roles",
    "question": "Which three behaviors demonstrate that a Scrum Team is self-managing? (Choose three.)",
    "options": [
      "The Scrum Team has all the skills needed to create an increment.",
      "Developers collaboratively selecting their own work during the Sprint.",
      "The Developers create their own Sprint Backlog, reflecting all work that is part of the Definition of Done.",
      "The Scrum Team members are working within the boundaries of their functional description and nicely handing off work.",
      "The Scrum Master is no longer needed.",
      "Stakeholders are attending the Daily Scrum to check progress."
    ],
    "correct_answers": [
      "The Scrum Team has all the skills needed to create an increment.",
      "Developers collaboratively selecting their own work during the Sprint.",
      "The Developers create their own Sprint Backlog, reflecting all work that is part of the Definition of Done."
    ]
  },
  {
    "id": 226,
    "type": "multiple_choice",
    "category": "Events",
    "question": "When the Developers determine that they will not be able to finish the complete forecast, who has to be present when reviewing and adjusting the Sprint work selected?",
    "options": [
      "The Scrum Master, project manager and the Developers",
      "The Scrum Master and the Developers.",
      "The Product Owner and the Developers.",
      "The Product Owner and all stakeholders."
    ],
    "correct_answers": [
      "The Product Owner and the Developers."
    ]
  },
  {
    "id": 227,
    "type": "true_false",
    "category": "Roles",
    "question": "True or False: A Scrum Master fulfills the same role as a traditional Project Manager.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": 228,
    "type": "multi_select",
    "category": "Roles",
    "question": "During the Sprint, the Scrum Master’s role is to do which two of the following: (Choose two.)",
    "options": [
      "Ensure the Product Owner attends all Scrum events.",
      "Facilitate inspection and adaptation opportunities as requested or needed.",
      "Assign tasks with the Scrum Team.",
      "Monitor the progress of the Developers.",
      "Coaching the team members in self-management.",
      "Escalate team conflicts to functional line managers."
    ],
    "correct_answers": [
      "Facilitate inspection and adaptation opportunities as requested or needed.",
      "Coaching the team members in self-management."
    ]
  },
  {
    "id": 229,
    "type": "multi_select",
    "category": "Roles",
    "question": "You are the Scrum Master on a newly formed Scrum Team. Which two of the following activities would probably help the team in starting up? (Choose two.)",
    "options": [
      "Have the manager for each Developer introduce their direct reports to go over their responsibilities on the Scrum Team.",
      "Ensure the Scrum Team members have compatible personalities.",
      "Introduce a bonus system for the top performers in the team.",
      "Ask the Product Owner to discuss the product, its vision, history, goals, and context, as well answer questions.",
      "Ensure the team understands they need a Definition of Done."
    ],
    "correct_answers": [
      "Ask the Product Owner to discuss the product, its vision, history, goals, and context, as well answer questions.",
      "Ensure the team understands they need a Definition of Done."
    ]
  },
  {
    "id": 230,
    "type": "multiple_choice",
    "category": "Events",
    "question": "What is the accountability of the Product Owner during Sprint 0?",
    "options": [
      "There is no such thing as Sprint 0.",
      "Make sure enough Product Backlog items are refined to fill the first 3 Sprints.",
      "Create the overall release plan to ensure that organizational goals are met.",
      "Gathering, eliciting, and analyzing the requirements to build the Product Backlog.",
      "Determine the composition of the Scrum Team to meet the release plan."
    ],
    "correct_answers": [
      "There is no such thing as Sprint 0."
    ]
  },
  {
    "id": 231,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who is accountable for clearly expressing Product Backlog items?",
    "options": [
      "The Scrum Master.",
      "The Product Owner.",
      "The Scrum Master, or the Scrum Master may have the Developers do it.",
      "The business analyst who represents the Product Owner."
    ],
    "correct_answers": [
      "The Product Owner."
    ]
  },
  {
    "id": 232,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who is responsible for collaboration with stakeholders?",
    "options": [
      "The Scrum Team",
      "The Project Manager",
      "The Team Manager",
      "The Developers",
      "The Business Analyst"
    ],
    "correct_answers": [
      "The Scrum Team"
    ]
  },
  {
    "id": 233,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Who starts the Daily Scrum?",
    "options": [
      "The person coming in last. This encourages people to be on time and helps to stay within the time-box.",
      "Whoever the Developers decide should start.",
      "The person who has the token.",
      "The Scrum Master.",
      "The Product Owner."
    ],
    "correct_answers": [
      "Whoever the Developers decide should start."
    ]
  },
  {
    "id": 234,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Who determines how many Product Backlog items the Developers select for a Sprint?",
    "options": [
      "The Scrum Master.",
      "The Product Owner.",
      "The Developers.",
      "The Scrum Team.",
      "The stakeholders attending Sprint Planning."
    ],
    "correct_answers": [
      "The Developers."
    ]
  },
  {
    "id": 235,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "What enhances the transparency of an Increment?",
    "options": [
      "Doing all work needed to meet the Definition of Done.",
      "Updating Sprint tasks properly in the electronic tracking tool.",
      "Keeping track of and estimating all undone work to be completed in a 'hardening' Sprint.",
      "Reporting Sprint progress to the stakeholders daily."
    ],
    "correct_answers": [
      "Doing all work needed to meet the Definition of Done."
    ]
  },
  {
    "id": 236,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "When does a Developer become accountable for the value of a Product Backlog item selected for the Sprint?",
    "options": [
      "During the Daily Scrum.",
      "Never. The entire Scrum Team is accountable for creating value every Sprint.",
      "Whenever a team member can accommodate more work.",
      "At the Sprint Planning Event."
    ],
    "correct_answers": [
      "Never. The entire Scrum Team is accountable for creating value every Sprint."
    ]
  },
  {
    "id": 237,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "What does it mean for a Scrum Team to be cross-functional?",
    "options": [
      "The Scrum Team includes not only developers but also business analysts, architects, and testers.",
      "Developers on the Scrum Team work closely with business analysts, architects, developers, and testers who are not on the team.",
      "The Scrum Team is a virtual team drawing from separate teams of business analysts, architects, developers, and testers.",
      "The Scrum Team includes skilled individuals who together have all the skills necessary to create value each Sprint."
    ],
    "correct_answers": [
      "The Scrum Team includes skilled individuals who together have all the skills necessary to create value each Sprint."
    ]
  },
  {
    "id": 238,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Which statement best describes a Product Owner’s responsibility?",
    "options": [
      "Maximizing the value of the work the Scrum Team does.",
      "Ensuring that the work meets the commitments to the stakeholders.",
      "Directing the Development Team.",
      "Keep stakeholders from distracting the Development Team."
    ],
    "correct_answers": [
      "Maximizing the value of the work the Scrum Team does."
    ]
  },
  {
    "id": 239,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "How should a Scrum Team deal with non-functional requirements?",
    "options": [
      "Ensure every Increment meets them.",
      "Assign them to the lead developers on the team.",
      "Make sure the release department understands these requirements, but it is not the Scrum Team’s responsibility.",
      "Manage them during the Integration Sprint prior to the Release Sprint"
    ],
    "correct_answers": [
      "Ensure every Increment meets them."
    ]
  },
  {
    "id": 240,
    "type": "multi_select",
    "category": "Artifacts",
    "question": "The Definition of Done serves which three purposes? (Choose three.)",
    "options": [
      "Describe the purpose objective and timebox of each Scrum event",
      "Guide the Developers on how many Product Backlog items to select for the Sprint",
      "Describe the work that must be mostly done before the Sprint is allowed to end",
      "Create a shared understanding of when work is complete",
      "Increase transparency"
    ],
    "correct_answers": [
      "Guide the Developers on how many Product Backlog items to select for the Sprint",
      "Create a shared understanding of when work is complete",
      "Increase transparency"
    ]
  },
  {
    "id": 241,
    "type": "multi_select",
    "category": "Scaling",
    "question": "Which two ways of creating Scrum Teams are consistent with Scrum’s values? (Choose two.)",
    "options": [
      "Existing teams propose how they would like to go about organizing into the new structure.",
      "Managers personally re-assign current subordinates to new teams.",
      "Managers collaborate to assign individuals to specific teams.",
      "Bring all the developers together and let them self-organize into Scrum Teams.",
      "The Chief Product Owner determines the new team structures and assignments."
    ],
    "correct_answers": [
      "Existing teams propose how they would like to go about organizing into the new structure.",
      "Bring all the developers together and let them self-organize into Scrum Teams."
    ]
  },
  {
    "id": 242,
    "type": "multiple_choice",
    "category": "Events",
    "question": "Which output from Sprint Planning provides the Scrum Team with a target and overarching direction for the Sprint?",
    "options": [
      "The Sprint Backlog.",
      "The Sprint Goal",
      "The release plan.",
      "Sprint Review minutes."
    ],
    "correct_answers": [
      "The Sprint Goal"
    ]
  },
  {
    "id": 243,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "Commitment is essential to achieve the benefits of Scrum. What actions demonstrate the commitment of Scrum Team members? (Choose two.)",
    "options": [
      "Help your fellow Scrum Team members",
      "Work late",
      "Always deliver the items in the Sprint forecast",
      "Do your best work"
    ],
    "correct_answers": [
      "Help your fellow Scrum Team members",
      "Do your best work"
    ]
  },
  {
    "id": 244,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "When multiple Scrum Teams are working on the same product should all of their Increments be integrated every Sprint?",
    "options": [
      "Yes, in order to accurately inspect what is done",
      "No, each Scrum Team stands alone",
      "Yes, but only for Scrum Teams whose work has dependencies",
      "No, that is far too hard and must be done in a hardening Sprint"
    ],
    "correct_answers": [
      "Yes, in order to accurately inspect what is done"
    ]
  },
  {
    "id": 245,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "What are three benefits of self-management? (Choose three.)",
    "options": [
      "Increased creativity",
      "Increased rule compliance",
      "Increased commitment",
      "Increased self-accountability",
      "Increased accuracy of estimates"
    ],
    "correct_answers": [
      "Increased creativity",
      "Increased commitment",
      "Increased self-accountability"
    ]
  },
  {
    "id": 246,
    "type": "multiple_choice",
    "category": "Scrum Theory",
    "question": "Which statement best describes Scrum?",
    "options": [
      "A framework to generate value through adaptive solutions for complex problems",
      "A complete methodology that defines how to develop software.",
      "A cookbook that defines best practices for software development",
      "A defined and predictive process that conforms to the principles of Scientific Management"
    ],
    "correct_answers": [
      "A framework to generate value through adaptive solutions for complex problems"
    ]
  },
  {
    "id": 247,
    "type": "multi_select",
    "category": "Roles",
    "question": "Who is on the Scrum Team? (Choose three.)",
    "options": [
      "Developers",
      "Scrum Master",
      "Product Owner",
      "Stakeholders",
      "Project Manager"
    ],
    "correct_answers": [
      "Developers",
      "Scrum Master",
      "Product Owner"
    ]
  },
  {
    "id": 248,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "Who is responsible for the sizing of Product Backlog items?",
    "options": [
      "The Developers after clarifying requirements with the Product Owner",
      "The Product Owner with input from the Developer",
      "The Developers, alone",
      "The most senior people in the organization, including architects and subject matter experts",
      "The Scrum Master"
    ],
    "correct_answers": [
      "The Developers after clarifying requirements with the Product Owner"
    ]
  },
  {
    "id": 249,
    "type": "multiple_choice",
    "category": "Events",
    "question": "How much of the Sprint Backlog must be defined during the Sprint Planning event?",
    "options": [
      "Enough so the Developers can create their forecast of what work they can do",
      "The entire Sprint Backlog must be identified and estimated by the end of Sprint Planning.",
      "Just enough to understand design and architectural implications",
      "Just enough tasks for the Scrum Master to be confident in the Developers' understanding of the Sprint"
    ],
    "correct_answers": [
      "Enough so the Developers can create their forecast of what work they can do"
    ]
  },
  {
    "id": 250,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The IT manager asks a Scrum Team for a status report describing the progress throughout the Sprint. The Scrum Team asks the Scrum Master for advice. The Scrum Master should:",
    "options": [
      "Tell the Scrum Team to figure it out themselves.",
      "Tell the Scrum Team to fit the report into the Sprint Backlog.",
      "Ask the Product Owner to send the manager the report.",
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review.",
      "Create and deliver the report to the manager herself."
    ],
    "correct_answers": [
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review."
    ]
  },
  {
    "id": 251,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "In accordance with Scrum theory, how should a group of 100 people be divided into multiple Scrum Teams?",
    "options": [
      "Check with the allocation department to see who has worked together before and make these the first teams.",
      "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams.",
      "It doesn't really matter because you can rotate the teams every Sprint to spread knowledge.",
      "Create a matrix of skills, seniority, and level of experience to assign people to teams."
    ],
    "correct_answers": [
      "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams."
    ]
  },
  {
    "id": 252,
    "type": "multiple_choice",
    "category": "Scaling",
    "question": "What is the key concern when multiple Scrum Teams are working from the same Product Backlog?",
    "options": [
      "Clear definition of requirements",
      "Making sure there is enough work for everyone on each team",
      "Minimizing dependencies between teams",
      "Meeting original scope projections",
      "Maximizing velocity"
    ],
    "correct_answers": [
      "Minimizing dependencies between teams"
    ]
  },
  {
    "id": 253,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "What is the function or purpose of management in Scrum?",
    "options": [
      "To identify and remove people that are not working hard enough",
      "To present the Scrum Teams with insights and resources that help them improve",
      "To monitor the productivity of the Developers",
      "To continually monitor staffing levels of the Scrum Team"
    ],
    "correct_answers": [
      "To present the Scrum Teams with insights and resources that help them improve"
    ]
  },
  {
    "id": 254,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "The Product Backlog is ordered by:",
    "options": [
      "Random assignment",
      "Size, where small items are at the top and large items are at the bottom",
      "The Product Owner, with the most valuable items placed at the top",
      "Risk, where safer items are at the top, and riskier items are at the bottom"
    ],
    "correct_answers": [
      "The Product Owner, with the most valuable items placed at the top"
    ]
  },
  {
    "id": 255,
    "type": "multiple_choice",
    "category": "Artifacts",
    "question": "Which statement best describes the Sprint Backlog as the output of the Sprint Planning?",
    "options": [
      "Every item has a designated owner.",
      "It is a complete list of all work to be done in a Sprint.",
      "It is the Developers' plan for the Sprint.",
      "It is ordered by the Product Owner.",
      "Each task is estimated in hours."
    ],
    "correct_answers": [
      "It is the Developers' plan for the Sprint."
    ]
  },
  {
    "id": 256,
    "type": "multi_select",
    "category": "Scrum Theory",
    "question": "What are two ways that regulatory compliance requirements are dealt with in Scrum? (Choose two.)",
    "options": [
      "They are addressed by a separate team who is responsible for compliance issues.",
      "They are addressed as part of meeting the Definition of Done during each Sprint.",
      "They are discussed, analyzed, and documented before the first Sprint can begin.",
      "They are added to the Product Backlog and addressed during each Sprint, alongside the creation of new Product capabilities."
    ],
    "correct_answers": [
      "They are addressed as part of meeting the Definition of Done during each Sprint.",
      "They are added to the Product Backlog and addressed during each Sprint, alongside the creation of new Product capabilities."
    ]
  },
  {
    "id": 257,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The IT manager asks a Scrum Team for a status report describing the progress throughout the Sprint. The Scrum Team asks the Scrum Master for advice. The Scrum Master should:",
    "options": [
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review.",
      "Ask the Product Owner to send the manager the report.",
      "Tell the Developers to fit the report into the Sprint Backlog.",
      "Tell the Scrum Team to figure it out themselves.",
      "Create and deliver the report to the manager herself."
    ],
    "correct_answers": [
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review."
    ]
  },
  {
    "id": 258,
    "type": "multiple_choice",
    "category": "Roles",
    "question": "The Scrum Team should have all the skills needed to:",
    "options": [
      "Complete the project within the date and cost as calculated by the Product Owner.",
      "Turn Product Backlog items into a valuable, useful Increment.",
      "Do all of the development work, except for specialized testing that requires additional tools and environments."
    ],
    "correct_answers": [
      "Turn Product Backlog items into a valuable, useful Increment."
    ]
  }
];

import { AgentConfig } from "@/app/types";

export const languageTutor: AgentConfig = {
    name: 'l4_2_3_a1_spanish_tutor',
    publicDescription: 'Agent that helps the user learn a new language.',
    instructions: `
{
 "lessonId": "L4.2.3",
 "nodes": {
   "start": {
     "type": "instruction",
     "nibu_speech": "You're doing great asking for directions! Now, let's learn how to understand the answers. Imagine you've asked a local how to get to the park. Let's learn the three most important direction words. Ready to begin?",
     "expected_response": null,
     "transition": {
       "on_affirmative": "introduce_todo_recto"
     }
   },
   "introduce_todo_recto": {
     "type": "practice_prompt",
     "nibu_speech": "Okay, the local says the first thing you need to do is go 'straight ahead'. The phrase for 'straight ahead' in Spanish is **todo recto**. Listen again: **todo recto**. If someone tells you to go **todo recto**, what does that mean?",
     "expected_response": ["straight", "straight ahead", "forward"],
     "transition": {
       "on_correct": "feedback_todo_recto_correct",
       "on_incorrect": "scaffold_todo_recto_1"
     }
   },
   "scaffold_todo_recto_1": {
     "type": "scaffold",
     "nibu_speech": "Not quite. Think about walking in one direction without turning. That's **todo recto**. What does **todo recto** mean?",
     "expected_response": ["straight", "straight ahead", "forward"],
     "transition": {
       "on_correct": "feedback_todo_recto_correct",
       "on_incorrect": "scaffold_todo_recto_2"
     }
   },
   "scaffold_todo_recto_2": {
     "type": "scaffold",
     "nibu_speech": "No worries! Let's try a hint. Does **todo recto** mean 'turn right' or 'go straight'?",
     "expected_response": ["straight", "go straight"],
     "transition": {
       "on_correct": "feedback_todo_recto_correct",
       "on_incorrect": "scaffold_todo_recto_3"
     }
   },
   "scaffold_todo_recto_3": {
     "type": "scaffold",
     "nibu_speech": "The correct answer is 'straight ahead'. The phrase **todo recto** means 'straight ahead'. Let's move to the next one.",
     "expected_response": [],
     "transition": {
       "on_complete": "feedback_todo_recto_correct"
     }
   },
   "feedback_todo_recto_correct": {
     "type": "feedback",
     "nibu_speech": "Exactly! **Todo recto** means 'go straight ahead'. Now, after going straight, the local tells you the park is 'to the right'. The phrase for this is **a la derecha**. So, what does **a la derecha** mean?",
     "expected_response": null,
     "transition": {
       "on_complete": "introduce_a_la_derecha"
     }
   },
   "introduce_a_la_derecha": {
     "type": "practice_prompt",
     "nibu_speech": "What does the phrase **a la derecha** mean?",
     "expected_response": ["right", "to the right"],
     "transition": {
       "on_correct": "feedback_a_la_derecha_correct",
       "on_incorrect": "scaffold_a_la_derecha_1"
     }
   },
   "scaffold_a_la_derecha_1": {
     "type": "scaffold",
     "nibu_speech": "Almost! It's one of the two main turning directions. Which one is **a la derecha**?",
     "expected_response": ["right", "to the right"],
     "transition": {
       "on_correct": "feedback_a_la_derecha_correct",
       "on_incorrect": "scaffold_a_la_derecha_2"
     }
   },
   "scaffold_a_la_derecha_2": {
     "type": "scaffold",
     "nibu_speech": "Let's try a hint. Does **a la derecha** mean 'to the right' or 'to the left'?",
     "expected_response": ["right", "to the right"],
     "transition": {
       "on_correct": "feedback_a_la_derecha_correct",
       "on_incorrect": "scaffold_a_la_derecha_3"
     }
   },
   "scaffold_a_la_derecha_3": {
     "type": "scaffold",
     "nibu_speech": "The correct answer is 'to the right'. **A la derecha** means 'to the right'. Let's try the last one.",
     "expected_response": [],
     "transition": {
       "on_complete": "feedback_a_la_derecha_correct"
     }
   },
   "feedback_a_la_derecha_correct": {
     "type": "feedback",
     "nibu_speech": "That's it! **A la derecha** means 'to the right'. And finally, if something is 'to the left', you would hear **a la izquierda**. So, what does **a la izquierda** mean?",
     "expected_response": null,
     "transition": {
       "on_complete": "introduce_a_la_izquierda"
     }
   },
   "introduce_a_la_izquierda": {
     "type": "practice_prompt",
     "nibu_speech": "What does **a la izquierda** mean?",
     "expected_response": ["left", "to the left"],
     "transition": {
       "on_correct": "feedback_a_la_izquierda_correct",
       "on_incorrect": "scaffold_a_la_izquierda_1"
     }
   },
   "scaffold_a_la_izquierda_1": {
     "type": "scaffold",
     "nibu_speech": "Not quite, it's the other main direction. If it's not right, it must be...",
     "expected_response": ["left", "to the left"],
     "transition": {
       "on_correct": "feedback_a_la_izquierda_correct",
       "on_incorrect": "scaffold_a_la_izquierda_2"
     }
   },
   "scaffold_a_la_izquierda_2": {
     "type": "scaffold",
     "nibu_speech": "Let's narrow it down. Does **a la izquierda** mean 'straight ahead' or 'to the left'?",
     "expected_response": ["left", "to the left"],
     "transition": {
       "on_correct": "feedback_a_la_izquierda_correct",
       "on_incorrect": "scaffold_a_la_izquierda_3"
     }
   },
   "scaffold_a_la_izquierda_3": {
     "type": "scaffold",
     "nibu_speech": "The correct phrase is 'to the left'. **A la izquierda** means 'to the left'. You've learned all three!",
     "expected_response": [],
     "transition": {
       "on_complete": "feedback_a_la_izquierda_correct"
     }
   },
   "feedback_a_la_izquierda_correct": {
     "type": "feedback",
     "nibu_speech": "¡Perfecto! You now know the three most basic directions. Let's do a very quick quiz to lock it in. Ready?",
     "expected_response": null,
     "transition": {
       "on_affirmative": "assessment_start"
     }
   },
   "assessment_start": {
     "type": "instruction",
     "nibu_speech": "Okay, I'll say the Spanish phrase, you tell me the English meaning. First one: **a la derecha**.",
     "expected_response": null,
     "transition": {
       "on_complete": "assessment_q1"
     }
   },
   "assessment_q1": {
     "type": "assessment_question",
     "nibu_speech": "What does **a la derecha** mean?",
     "expected_response": ["right", "to the right"],
     "transition": {
       "on_correct": "assessment_q1_correct",
       "on_incorrect": "assessment_q1_incorrect"
     }
   },
   "assessment_q1_correct": {
     "type": "feedback",
     "nibu_speech": "Correct! Next one: **todo recto**.",
     "expected_response": null,
     "transition": {
       "on_complete": "assessment_q2"
     }
   },
   "assessment_q1_incorrect": {
     "type": "feedback",
     "nibu_speech": "Almost! **A la derecha** means 'to the right'. Let's try the next one: **todo recto**.",
     "expected_response": null,
     "transition": {
       "on_complete": "assessment_q2"
     }
   },
   "assessment_q2": {
     "type": "assessment_question",
     "nibu_speech": "What about **todo recto**?",
     "expected_response": ["straight", "straight ahead", "forward"],
     "transition": {
       "on_correct": "assessment_q2_correct",
       "on_incorrect": "assessment_q2_incorrect"
     }
   },
   "assessment_q2_correct": {
     "type": "feedback",
     "nibu_speech": "Yes, exactly! Last one: **a la izquierda**.",
     "expected_response": null,
     "transition": {
       "on_complete": "assessment_q3"
     }
   },
   "assessment_q2_incorrect": {
     "type": "feedback",
     "nibu_speech": "Good guess! **Todo recto** actually means 'straight ahead'. Okay, last one: **a la izquierda**.",
     "expected_response": null,
     "transition": {
       "on_complete": "assessment_q3"
     }
   },
   "assessment_q3": {
     "type": "assessment_question",
     "nibu_speech": "And what does **a la izquierda** mean?",
     "expected_response": ["left", "to the left"],
     "transition": {
       "on_correct": "assessment_q3_correct",
       "on_incorrect": "assessment_q3_incorrect"
     }
   },
   "assessment_q3_correct": {
     "type": "feedback",
     "nibu_speech": "¡Fantástico! You know all three directions now!",
     "expected_response": null,
     "transition": {
       "on_complete": "lesson_end"
     }
   },
   "assessment_q3_incorrect": {
     "type": "feedback",
     "nibu_speech": "Almost there! **A la izquierda** means 'to the left'. You did a wonderful job today!",
     "expected_response": null,
     "transition": {
       "on_complete": "lesson_end"
     }
   },
   "lesson_end": {
     "type": "lesson_end",
     "nibu_speech": "Understanding directions is a key skill for exploring any new place. You've mastered the first step. Well done! See you next time.",
     "expected_response": null,
     "transition": null
   }
 }
}
    `,
    tools: [
        {
            type: 'function',
            name: 'grading_tool',
            description: 'Grade the user based on the provided lesson. Grade pronuanciation and grammar.',
            parameters: {
                type: 'object',
                properties: {
                    lesson: {
                        type: 'string',
                        description: 'The lesson to grade the user on.',
                    },
                    grade: {
                        type: 'string',
                        description: 'The grade to give the user.',
                        enum: ['A', 'B', 'C', 'D', 'F'],
                    },
                    feedback: {
                        type: 'string',
                        description: 'The feedback to give the user.',
                    },
                }
            }
        },
    ],
};

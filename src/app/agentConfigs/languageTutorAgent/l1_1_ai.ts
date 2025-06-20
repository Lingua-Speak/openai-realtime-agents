import { AgentConfig } from '@/app/types';

export const languageTutor: AgentConfig = {
    name: 'l1_1_a1_spanish_tutor',
    publicDescription: 'Agent that helps the user learn a new language.',
    instructions: `
{
  "lessonId": "L1.1.1",
  "nodes": {
    "start": {
      "type": "instruction",
      "nibu_speech": "Hello! I'm Nibu, your guide to learning Spanish. Are you ready for our first adventure together? Let's imagine we're taking a walk through a beautiful *pueblo* (that means town in Spanish). We'll meet some friendly people and practice some greetings. Ready to start?",
      "expected_response": null,
      "transition": {
        "on_affirmative": "introduce_hola"
      }
    },
    "introduce_hola": {
      "type": "practice_prompt",
      "nibu_speech": "¡Excelente! Let's begin our walk. Look! The sun is just starting to peek over the mountains. Oh, look! Here comes my neighbor, Señora Carmen. Let's greet her. A friendly, all-purpose greeting in Spanish is **hola**. Can you try saying **hola**?",
      "expected_response": ["hola"],
      "transition": {
        "on_correct": "feedback_hola_correct",
        "on_incorrect": "scaffold_hola_1"
      }
    },
    "scaffold_hola_1": {
      "type": "scaffold",
      "nibu_speech": "That's a great try! Remember, the most common, friendly greeting for any time of day is the one I just mentioned. It starts with an 'h' but the 'h' is silent. Can you try again?",
      "expected_response": ["hola"],
      "transition": {
        "on_correct": "feedback_hola_correct",
        "on_incorrect": "scaffold_hola_2"
      }
    },
    "scaffold_hola_2": {
      "type": "scaffold",
      "nibu_speech": "No problem at all! Let's try a little hint. Is the friendly greeting **hola** or **adiós**?",
      "expected_response": ["hola"],
      "transition": {
        "on_correct": "feedback_hola_correct",
        "on_incorrect": "scaffold_hola_3"
      }
    },
    "scaffold_hola_3": {
      "type": "scaffold",
      "nibu_speech": "The correct greeting is **hola**. Let's say it together to build that muscle memory: **hola**.",
      "expected_response": ["hola"],
      "transition": {
        "on_correct": "feedback_hola_correct",
        "on_incorrect": "feedback_hola_correct"
      }
    },
    "feedback_hola_correct": {
      "type": "feedback",
      "nibu_speech": "¡Hola! ¡Perfecto! She smiled right back at us! Great job! Now, because it's morning, there's a more specific greeting we can use. To say 'Good morning' in Spanish, we say **buenos días**. Listen again: **buenos días**. Your turn, try saying **buenos días** to Señora Carmen.",
      "expected_response": null,
      "transition": {
        "on_complete": "introduce_dias"
      }
    },
    "introduce_dias": {
      "type": "practice_prompt",
      "nibu_speech": "Your turn, try saying **buenos días**.",
      "expected_response": ["buenos días", "buenosdias"],
      "transition": {
        "on_correct": "feedback_dias_correct",
        "on_incorrect": "scaffold_dias_1"
      }
    },
    "scaffold_dias_1": {
      "type": "scaffold",
      "nibu_speech": "Good try! Remember, for the morning, the greeting is made of two words. It sounds like 'bway-nos dee-as'. Can you try saying **buenos días** again?",
      "expected_response": ["buenos días", "buenosdias"],
      "transition": {
        "on_correct": "feedback_dias_correct",
        "on_incorrect": "scaffold_dias_2"
      }
    },
    "scaffold_dias_2": {
      "type": "scaffold",
      "nibu_speech": "No worries! Is the morning greeting **buenas noches** or **buenos días**?",
      "expected_response": ["buenos días", "buenosdias"],
      "transition": {
        "on_correct": "feedback_dias_correct",
        "on_incorrect": "scaffold_dias_3"
      }
    },
    "scaffold_dias_3": {
      "type": "scaffold",
      "nibu_speech": "The correct greeting for the morning is **buenos días**. Let's practice it together: **buenos días**.",
      "expected_response": ["buenos días", "buenosdias"],
      "transition": {
        "on_correct": "feedback_dias_correct",
        "on_incorrect": "feedback_dias_correct"
      }
    },
    "feedback_dias_correct": {
      "type": "feedback",
      "nibu_speech": "¡Buenos días! ¡Muy bien! That's exactly right! Let's keep walking. The sun is high in the sky now. Since it's the afternoon, we need a new greeting. We say **buenas tardes**. Listen: **buenas tardes**. What would you say?",
      "expected_response": null,
      "transition": {
        "on_complete": "introduce_tardes"
      }
    },
    "introduce_tardes": {
      "type": "practice_prompt",
      "nibu_speech": "Your turn, say **buenas tardes**.",
      "expected_response": ["buenas tardes", "buenastardes"],
      "transition": {
        "on_correct": "feedback_tardes_correct",
        "on_incorrect": "scaffold_tardes_1"
      }
    },
    "scaffold_tardes_1": {
      "type": "scaffold",
      "nibu_speech": "Almost! This one also has two words, and it sounds like 'bway-nas tar-des'. Let's try **buenas tardes** again.",
      "expected_response": ["buenas tardes", "buenastardes"],
      "transition": {
        "on_correct": "feedback_tardes_correct",
        "on_incorrect": "scaffold_tardes_2"
      }
    },
    "scaffold_tardes_2": {
      "type": "scaffold",
      "nibu_speech": "You're close! Is the afternoon greeting **buenos días** or **buenas tardes**?",
      "expected_response": ["buenas tardes", "buenastardes"],
      "transition": {
        "on_correct": "feedback_tardes_correct",
        "on_incorrect": "scaffold_tardes_3"
      }
    },
    "scaffold_tardes_3": {
      "type": "scaffold",
      "nibu_speech": "The correct one is **buenas tardes**. Let's say it to lock it in: **buenas tardes**.",
      "expected_response": ["buenas tardes", "buenastardes"],
      "transition": {
        "on_correct": "feedback_tardes_correct",
        "on_incorrect": "feedback_tardes_correct"
      }
    },
    "feedback_tardes_correct": {
      "type": "feedback",
      "nibu_speech": "¡Sí, **buenas tardes**! ¡Excelente! Our walk is almost over. The sun has set, and the moon is out. For the evening, we say **buenas noches**. Listen: **buenas noches**. How do you greet someone now?",
      "expected_response": null,
      "transition": {
        "on_complete": "introduce_noches"
      }
    },
    "introduce_noches": {
      "type": "practice_prompt",
      "nibu_speech": "Try saying **buenas noches**.",
      "expected_response": ["buenas noches", "buenasnoches"],
      "transition": {
        "on_correct": "feedback_noches_correct",
        "on_incorrect": "scaffold_noches_1"
      }
    },
    "scaffold_noches_1": {
      "type": "scaffold",
      "nibu_speech": "That's a great effort! This greeting is for the night. It sounds like 'bway-nas no-chess'. Try saying **buenas noches**.",
      "expected_response": ["buenas noches", "buenasnoches"],
      "transition": {
        "on_correct": "feedback_noches_correct",
        "on_incorrect": "scaffold_noches_2"
      }
    },
    "scaffold_noches_2": {
      "type": "scaffold",
      "nibu_speech": "Let's narrow it down. For the night time, do we say **buenas tardes** or **buenas noches**?",
      "expected_response": ["buenas noches", "buenasnoches"],
      "transition": {
        "on_correct": "feedback_noches_correct",
        "on_incorrect": "scaffold_noches_3"
      }
    },
    "scaffold_noches_3": {
      "type": "scaffold",
      "nibu_speech": "The correct greeting is **buenas noches**. Let's say it one more time together: **buenas noches**.",
      "expected_response": ["buenas noches", "buenasnoches"],
      "transition": {
        "on_correct": "feedback_noches_correct",
        "on_incorrect": "feedback_noches_correct"
      }
    },
    "feedback_noches_correct": {
      "type": "feedback",
      "nibu_speech": "¡Buenas noches! That's it! You know, **buenas noches** is special. We use it to say 'good evening' when we arrive, and also 'good night' when we leave. What a wonderful walk! Let's play a quick game to see what you remember. Are you ready?",
      "expected_response": null,
      "transition": {
        "on_affirmative": "assessment_start"
      }
    },
    "assessment_start": {
      "type": "instruction",
      "nibu_speech": "Great! I'll describe a time of day, and you tell me the best greeting. First one: The sun is rising, and you can smell breakfast cooking. What do you say?",
      "expected_response": null,
      "transition": {
        "on_complete": "assessment_q1"
      }
    },
    "assessment_q1": {
      "type": "assessment_question",
      "nibu_speech": "What is the greeting for the morning?",
      "expected_response": ["buenos días", "buenosdias"],
      "transition": {
        "on_correct": "assessment_q1_correct",
        "on_incorrect": "assessment_q1_incorrect"
      }
    },
    "assessment_q1_correct": {
      "type": "feedback",
      "nibu_speech": "¡Correcto! That's perfect for the morning. Okay, next one. The moon is in the sky, and you're meeting a friend for a late dinner. What do you say?",
      "expected_response": null,
      "transition": {
        "on_complete": "assessment_q2"
      }
    },
    "assessment_q1_incorrect": {
      "type": "feedback",
      "nibu_speech": "Good try! Remember, for the morning, we say **buenos días**. Let's move to the next one. The moon is in the sky, and you're meeting a friend for a late dinner. What do you say?",
      "expected_response": null,
      "transition": {
        "on_complete": "assessment_q2"
      }
    },
    "assessment_q2": {
      "type": "assessment_question",
      "nibu_speech": "What is the greeting for the evening or night?",
      "expected_response": ["buenas noches", "buenasnoches"],
      "transition": {
        "on_correct": "assessment_q2_correct",
        "on_incorrect": "assessment_q2_incorrect"
      }
    },
    "assessment_q2_correct": {
      "type": "feedback",
      "nibu_speech": "¡Sí! ¡Fantástico! Last one! It's lunchtime, and the sun is high and bright. What's the greeting?",
      "expected_response": null,
      "transition": {
        "on_complete": "assessment_q3"
      }
    },
    "assessment_q2_incorrect": {
      "type": "feedback",
      "nibu_speech": "Almost! For the evening or night, the greeting is **buenas noches**. You're doing great, let's try the last one. It's lunchtime, and the sun is high and bright. What's the greeting?",
      "expected_response": null,
      "transition": {
        "on_complete": "assessment_q3"
      }
    },
    "assessment_q3": {
      "type": "assessment_question",
      "nibu_speech": "What is the greeting for the afternoon?",
      "expected_response": ["buenas tardes", "buenastardes"],
      "transition": {
        "on_correct": "assessment_q3_correct",
        "on_incorrect": "assessment_q3_incorrect"
      }
    },
    "assessment_q3_correct": {
      "type": "feedback",
      "nibu_speech": "¡Perfecto! You've got it!",
      "expected_response": null,
      "transition": {
        "on_complete": "lesson_end"
      }
    },
    "assessment_q3_incorrect": {
      "type": "feedback",
      "nibu_speech": "That's a good guess! The one for the afternoon is **buenas tardes**. You still learned so much today!",
      "expected_response": null,
      "transition": {
        "on_complete": "lesson_end"
      }
    },
    "lesson_end": {
      "type": "lesson_end",
      "nibu_speech": "You've learned all the time-specific greetings for today, plus the all-purpose **hola**. You did an amazing job on our walk. I'm so excited for our next adventure together! ¡Adiós!",
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

import { AgentConfig } from "@/app/types";

export const languageTutor: AgentConfig = {
    name: 'l1_2_a1_spanish_tutor',
    publicDescription: 'Agent that helps the user learn a new language.',
    instructions: `
{
 "lessonId": "L1.1.2",
 "nodes": {
   "start": {
     "type": "instruction",
     "nibu_speech": "Great job with those greetings! Now, let's continue our walk. Up ahead, we see my good friend, Zest! After we say **hola**, it's polite to ask how they are doing. Are you ready to learn how to ask 'How are you?'",
     "expected_response": null,
     "transition": {
       "on_affirmative": "introduce_que_tal"
     }
   },
   "introduce_que_tal": {
     "type": "practice_prompt",
     "nibu_speech": "Wonderful! A very common and friendly way to ask 'How are you?' or 'What's up?' in Spanish is **¿Qué tal?**. It's short and simple. Listen again: **¿Qué tal?**. Let's try asking Zest. Your turn!",
     "expected_response": ["qué tal", "quetal", "que tal"],
     "transition": {
       "on_correct": "feedback_que_tal_correct",
       "on_incorrect": "scaffold_que_tal_1"
     }
   },
   "scaffold_que_tal_1": {
     "type": "scaffold",
     "nibu_speech": "That's a good start! It sounds like 'kay tahl'. The first word is like the question word 'what'. Let's try it one more time: **¿Qué tal?**",
     "expected_response": ["qué tal", "quetal", "que tal"],
     "transition": {
       "on_correct": "feedback_que_tal_correct",
       "on_incorrect": "scaffold_que_tal_2"
     }
   },
   "scaffold_que_tal_2": {
     "type": "scaffold",
     "nibu_speech": "No worries! Let's simplify. Which one sounds more like 'What's up?': **¿Qué tal?** or **Adiós?**",
     "expected_response": ["qué tal", "quetal", "que tal"],
     "transition": {
       "on_correct": "feedback_que_tal_correct",
       "on_incorrect": "scaffold_que_tal_3"
     }
   },
   "scaffold_que_tal_3": {
     "type": "scaffold",
     "nibu_speech": "The phrase we're looking for is **¿Qué tal?**. Let's say it together to get the feel for it: **¿Qué tal?**",
     "expected_response": ["qué tal", "quetal", "que tal"],
     "transition": {
       "on_correct": "feedback_que_tal_correct",
       "on_incorrect": "feedback_que_tal_correct"
     }
   },
   "feedback_que_tal_correct": {
     "type": "feedback",
     "nibu_speech": "¡Excelente! Zest says he's doing great! Now, another very common way to ask 'How are you?' is **¿Cómo estás?**. This one is also super useful. Listen: **¿Cómo estás?**",
     "expected_response": null,
     "transition": {
       "on_complete": "introduce_como_estas"
     }
   },
   "introduce_como_estas": {
     "type": "practice_prompt",
     "nibu_speech": "Your turn, try asking Zest **¿Cómo estás?**",
     "expected_response": ["cómo estás", "comoestas", "como estas"],
     "transition": {
       "on_correct": "feedback_como_estas_correct",
       "on_incorrect": "scaffold_como_estas_1"
     }
   },
   "scaffold_como_estas_1": {
     "type": "scaffold",
     "nibu_speech": "That's close! It sounds like 'ko-mo es-tahs'. Let's try it again: **¿Cómo estás?**",
     "expected_response": ["cómo estás", "comoestas", "como estas"],
     "transition": {
       "on_correct": "feedback_como_estas_correct",
       "on_incorrect": "scaffold_como_estas_2"
     }
   },
   "scaffold_como_estas_2": {
     "type": "scaffold",
     "nibu_speech": "No problem! For 'How are you?', which one sounds right: **¿Cómo estás?** or **Buenas noches?**",
     "expected_response": ["cómo estás", "comoestas", "como estas"],
     "transition": {
       "on_correct": "feedback_como_estas_correct",
       "on_incorrect": "scaffold_como_estas_3"
     }
   },
   "scaffold_como_estas_3": {
     "type": "scaffold",
     "nibu_speech": "The correct phrase is **¿Cómo estás?**. Let's practice it together: **¿Cómo estás?**",
     "expected_response": ["cómo estás", "comoestas", "como estas"],
     "transition": {
       "on_correct": "feedback_como_estas_correct",
       "on_incorrect": "feedback_como_estas_correct"
     }
   },
   "feedback_como_estas_correct": {
     "type": "feedback",
     "nibu_speech": "¡Fantástico! Now Zest is asking how *we* are! The most common response is 'Fine, thanks', which in Spanish is **Bien, gracias**. Listen again: **Bien, gracias**.",
     "expected_response": null,
     "transition": {
       "on_complete": "introduce_respuesta"
     }
   },
   "introduce_respuesta": {
     "type": "practice_prompt",
     "nibu_speech": "How would you respond 'Fine, thanks'?",
     "expected_response": ["bien gracias", "biengracias"],
     "transition": {
       "on_correct": "feedback_respuesta_correct",
       "on_incorrect": "scaffold_respuesta_1"
     }
   },
   "scaffold_respuesta_1": {
     "type": "scaffold",
     "nibu_speech": "Almost! It's two words, and sounds like 'bee-en gra-see-as'. Let's try saying **Bien, gracias**.",
     "expected_response": ["bien gracias", "biengracias"],
     "transition": {
       "on_correct": "feedback_respuesta_correct",
       "on_incorrect": "scaffold_respuesta_2"
     }
   },
   "scaffold_respuesta_2": {
     "type": "scaffold",
     "nibu_speech": "You're getting there! To say 'Fine, thanks', do we say **Bien, gracias** or **Me llamo Nibu**?",
     "expected_response": ["bien gracias", "biengracias"],
     "transition": {
       "on_correct": "feedback_respuesta_correct",
       "on_incorrect": "scaffold_respuesta_3"
     }
   },
   "scaffold_respuesta_3": {
     "type": "scaffold",
     "nibu_speech": "The response is **Bien, gracias**. Let's say it together: **Bien, gracias**.",
     "expected_response": ["bien gracias", "biengracias"],
     "transition": {
       "on_correct": "feedback_respuesta_correct",
       "on_incorrect": "feedback_respuesta_correct"
     }
   },
   "feedback_respuesta_correct": {
     "type": "feedback",
     "nibu_speech": "¡Perfecto! You can also say **Muy bien** for 'Very well' or **Regular** for 'So-so'. Now, the last step is to ask 'And you?'. In Spanish, you say **¿Y tú?**. Your turn, ask Zest back!",
     "expected_response": null,
     "transition": {
       "on_complete": "introduce_y_tu"
     }
   },
   "introduce_y_tu": {
     "type": "practice_prompt",
     "nibu_speech": "Try asking 'And you?'. It's **¿Y tú?**",
     "expected_response": ["y tú", "ytu", "itu"],
     "transition": {
       "on_correct": "feedback_y_tu_correct",
       "on_incorrect": "scaffold_y_tu_1"
     }
   },
   "scaffold_y_tu_1": {
     "type": "scaffold",
     "nibu_speech": "So close! It sounds just like the letters 'E' and 'too'. Listen: **¿Y tú?**. Let's try it.",
     "expected_response": ["y tú", "ytu", "itu"],
     "transition": {
       "on_correct": "feedback_y_tu_correct",
       "on_incorrect": "scaffold_y_tu_2"
     }
   },
   "scaffold_y_tu_2": {
     "type": "scaffold",
     "nibu_speech": "No worries at all! Is it **¿Y tú?** or **¿Qué tal?** to ask 'And you?'",
     "expected_response": ["y tú", "ytu", "itu"],
     "transition": {
       "on_correct": "feedback_y_tu_correct",
       "on_incorrect": "scaffold_y_tu_3"
     }
   },
   "scaffold_y_tu_3": {
     "type": "scaffold",
     "nibu_speech": "The correct phrase is **¿Y tú?**. Let's say it together: **¿Y tú?**",
     "expected_response": ["y tú", "ytu", "itu"],
     "transition": {
       "on_correct": "feedback_y_tu_correct",
       "on_incorrect": "feedback_y_tu_correct"
     }
   },
   "feedback_y_tu_correct": {
     "type": "feedback",
     "nibu_speech": "¡Maravilloso! You just had a whole mini-conversation! You asked how Zest was, answered his question, and asked him back! Let's do a quick check to see what you remember. Ready?",
     "expected_response": null,
     "transition": {
       "on_affirmative": "assessment_start"
     }
   },
   "assessment_start": {
     "type": "instruction",
     "nibu_speech": "Great! I'll be Zest. I'm going to ask you a question, and you give the best response. Ready? Here we go... **¡Hola! ¿Qué tal?**",
     "expected_response": null,
     "transition": {
       "on_complete": "assessment_q1"
     }
   },
   "assessment_q1": {
     "type": "assessment_question",
     "nibu_speech": "How do you say 'Fine, thanks'?",
     "expected_response": ["bien gracias", "biengracias"],
     "transition": {
       "on_correct": "assessment_q1_correct",
       "on_incorrect": "assessment_q1_incorrect"
     }
   },
   "assessment_q1_correct": {
     "type": "feedback",
     "nibu_speech": "¡Perfecto! That's the best response. Now, how would you ask me back?",
     "expected_response": null,
     "transition": {
       "on_complete": "assessment_q2"
     }
   },
   "assessment_q1_incorrect": {
     "type": "feedback",
     "nibu_speech": "Good try! A great response would be **Bien, gracias**. Now, after you say that, how would you ask me back?",
     "expected_response": null,
     "transition": {
       "on_complete": "assessment_q2"
     }
   },
   "assessment_q2": {
     "type": "assessment_question",
     "nibu_speech": "What's the phrase for 'And you?'",
     "expected_response": ["y tú", "ytu", "itu"],
     "transition": {
       "on_correct": "assessment_q2_correct",
       "on_incorrect": "assessment_q2_incorrect"
     }
   },
   "assessment_q2_correct": {
     "type": "feedback",
     "nibu_speech": "¡Exacto! That's perfect!",
     "expected_response": null,
     "transition": {
       "on_complete": "lesson_end"
     }
   },
   "assessment_q2_incorrect": {
     "type": "feedback",
     "nibu_speech": "Almost! The phrase to ask back is **¿Y tú?**. But you did a fantastic job today!",
     "expected_response": null,
     "transition": {
       "on_complete": "lesson_end"
     }
   },
   "lesson_end": {
     "type": "lesson_end",
     "nibu_speech": "You've learned how to ask someone how they are and how to respond. That's a huge step in making friends in Spanish! Great work today. ¡Hasta luego!",
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

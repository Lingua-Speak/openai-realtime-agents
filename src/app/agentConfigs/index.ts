import { AllAgentConfigsType } from "@/app/types";
import languageTutor from "./languageTutorAgent";
import lesson2 from "./lesson2";
import lesson4 from "./lesson4";

export const allAgentSets: AllAgentConfigsType = {
  languageTutor,
  lesson2,
  lesson4
};

export const defaultAgentSetKey = "languageTutor";

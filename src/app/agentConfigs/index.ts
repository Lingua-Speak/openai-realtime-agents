import { AllAgentConfigsType } from "@/app/types";
import languageTutor from "./languageTutorAgent";
import lesson2 from "./lesson2";

export const allAgentSets: AllAgentConfigsType = {
  languageTutor,
  lesson2,
};

export const defaultAgentSetKey = "languageTutor";

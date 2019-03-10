import { strings } from "./i18n";
import { createCatchPrompt } from "./data/catchPrompt";
import { createLandingPrompt } from "./data/landingPrompt";
import { createSalePrompt } from "./data/salePrompt";
import { createSetupCaptainProfilePrompt } from "./data/setupCaptainProfilePrompt";
import createPersistedState from "use-persisted-state";
import { createSelectOptionList } from "./core/utils";

// import { IDialogue } from "./react-app-env";

// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/examples/modules/Dropdown/common.js

export const fishes = [
  "atlanticCod",
  "blueCrab",
  "dolphinFish",
  "grouper",
  "kingCrab",
  "pacificCod",
  "redSnapper",
  "seaCucumber",
  "shark",
  "swordfish",
  "albacoreTuna",
  "bigeyeTuna",
  "skipjackTuna",
  "yellowfinTuna",
  "bluefinTuna"
];

export const fishOptionList = createSelectOptionList(fishes);

export const shipIDTypeList = [
  "imo",
  "mmsi",
]

export const shipIDTypeOptionList = createSelectOptionList(shipIDTypeList);

export const fao3AMap: any = {
  atlanticCod: "LPS",
  blueCrab: "CRB",
  dolphinFish: "DOL",
  grouper: "EWL",
  kingCrab: "KCD",
  pacificCod: "PCO",
  redSnapper: "RES",
  seaCucumber: "EHV",
  shark: "HXC",
  swordfish: "SWO",
  albacoreTuna: "ALB",
  bigeyeTuna: "BET",
  skipjackTuna: "SKJ",
  yellowfinTuna: "YFT",
  bluefinTuna: "PBF"
};


export const localStorageKey = {
  savedLanguage: "NEMO_LANGUAGE",
  captainProfile: "NEMO_CAPTAIN_PROFILE_TEMP",
  profile: "NEMO_PROFILE",
  chatCache: "NEMO_CHAT_CACHE"
};

export const useCaptainProfileState = createPersistedState(
  localStorageKey.captainProfile
);
export const useLanguageState = createPersistedState(
  localStorageKey.savedLanguage
);
export const useProfileState = createPersistedState(
  localStorageKey.profile
);

export const isProfileSetup = () => {
  const [profile] = useProfileState({ completed: false });
  return !!profile.completed;
};

export const createSteps = () => [
  ...(!isProfileSetup() ? createSetupCaptainProfilePrompt() : []),
  {
    id: "prompt_welcome",
    hideInput: true,
    message: () => strings.prompt_welcome,
    trigger: "prompt_initial"
  },
  {
    id: "prompt_initial",
    hideInput: true,
    message: () => strings.prompt_initial,
    trigger: "prompt_events"
  },
  {
    id: `prompt_anotherOne`,
    hideInput: true,
    message: () => strings.prompt_anotherOne,
    trigger: "prompt_events"
  },
  {
    id: `prompt_nothing`,
    hideInput: true,
    message: () => strings.prompt_nothing,
    trigger: "prompt_end"
  },
  {
    id: "prompt_events",
    hideInput: true,
    options: ["catch", "landing", "sale", "transport", "nothing"].map(
      value => ({
        value,
        label: `${strings[value]}`,
        trigger: `prompt_${value}`
      })
    )
  },
  ...["transport"].map(value => ({
    id: `prompt_${value}`,
    message: () => strings.prompt_unavailable,
    trigger: "prompt_end"
  })),
  {
    id: "prompt_end",
    hideInput: true,
    message: () => strings.prompt_end,
    end: true
  },
  ...createSalePrompt(),
  ...createCatchPrompt(),
  ...createLandingPrompt()
];

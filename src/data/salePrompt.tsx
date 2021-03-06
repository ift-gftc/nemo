import React from 'react'
import { SaleFishSelectInput } from "../components/SaleFishSelectInput";
import { numberValidator, appendTrigger } from "../core/utils";

const salePromptOrder = [
  "prompt_sale",
  "add_species",
  "prompt_size",

  "add_size",
  "prompt_weight",
  
  "add_weight",
  "prompt_value",

  "add_value",
  "prompt_saleConfirmation",
  "prompt_anotherOne"
];

export const createSalePrompt = () =>
  [
    {
      id: `prompt_sale`,
      hideInput: true
    },
    {
      id: `add_species`,
      hideInput: true,
      waitAction: true,
      component: <SaleFishSelectInput />
    },
    {
      id: `prompt_size`,
      hideInput: true
    },
    {
      id: `add_size`,
      user: true,
      validator: numberValidator
    },
    {
      id: `prompt_weight`,
      hideInput: true
    },
    {
      id: `add_weight`,
      user: true
    },
    {
      id: `prompt_value`,
      hideInput: true
    },
    {
      id: `add_value`,
      user: true
    },
    {
      id: `prompt_saleConfirmation`,
      hideInput: true,
      // component: <SaleDetail />
    }
  ].map((p: any, i) => appendTrigger(p, i, salePromptOrder));

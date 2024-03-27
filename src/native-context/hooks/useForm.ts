import { useReducer } from "react";
import { produce } from "immer";
import { FormState } from "../../type";
import { getRandomId } from "../../common/functions/getRandomId";

type Action =
  | {
      type: "ADD_FORM_ROW";
    }
  | {
      type: "DELETE_FORM_ROW";
      rowIndex: number;
    }
  | {
      type: "SET_FORM_ROW";
      rowIndex: number;
      checked: boolean;
    };

export const useForm = () => {
  const reducer = produce((draft: FormState, action: Action) => {
    switch (action.type) {
      case "ADD_FORM_ROW": {
        draft.form.push({
          id: getRandomId(),
          label: "おにゅーの項目",
          checked: false,
        });
        return;
      }
      case "DELETE_FORM_ROW": {
        draft.form.splice(action.rowIndex, 1);
        return;
      }
      case "SET_FORM_ROW": {
        draft.form[action.rowIndex].checked = action.checked;
        return;
      }
    }
  });

  const initialValue: FormState = {
    form: [],
  };

  const [formState, dispatch] = useReducer(reducer, initialValue);

  const addFormRow = () => {
    dispatch({
      type: "ADD_FORM_ROW",
    });
  };

  const deleteFormRow = (rowIndex: number) => {
    dispatch({
      type: "DELETE_FORM_ROW",
      rowIndex,
    });
  };

  const setFormRow = (rowIndex: number, checked: boolean) => {
    dispatch({
      type: "SET_FORM_ROW",
      rowIndex,
      checked,
    });
  };

  return {
    formState,
    addFormRow,
    deleteFormRow,
    setFormRow,
  };
};

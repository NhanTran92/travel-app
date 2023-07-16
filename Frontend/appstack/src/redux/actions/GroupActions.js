import * as types from "../constants";

export function getListGroupAction(groups) {
  return {
    type: types.GET_LIST_GROUP,
    payload: groups,
  };
}

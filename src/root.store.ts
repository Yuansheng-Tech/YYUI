import { types } from "mobx-state-tree";

export const Data = types.model({
  id: types.optional(types.identifier, ''),
  name: types.optional(types.string, '')
});

export const RootStore = types.model({
  data: types.optional(Data, {}),
  selectId: types.optional(types.string, ''),
  params: types.optional(types.frozen(), {}),
  datas: types.optional(types.map(Data), {}) // types.array(Data)
}).actions(self => ({
  setSelectId: (data) => {
    self.selectId = data
  }
}));
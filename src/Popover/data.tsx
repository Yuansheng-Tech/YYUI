import { IPopoverProps } from "./index";

export const popoverDataSource: IPopoverProps = {
  list: [
    {
      id: 1,
      label: 'item1'
    },
    {
      id: 2,
      label: 'item2'
    },
    {
      id: 3,
      label: 'item3'
    }
  ],
  onTabItem: () => {},
  children: 'a',
  // style?: string,
  label: 'b'
}
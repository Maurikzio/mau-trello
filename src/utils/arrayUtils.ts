type Item = {
  id: string;
}

export const findItemIndexById = <T extends Item> (items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id)
};

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};

export function removeItemAtIndex<TItem>(array: TItem[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

export function insertItemAtIndex<Titem>(array: Titem[], item: Titem, index: number) {
  return [...array.slice(0, index), item, ...array.slice(index)]
};
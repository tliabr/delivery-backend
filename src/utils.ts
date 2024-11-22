import { PouchSize } from './models/user';

export function formatCatNames(catNames: string[]): string {
  const copyCats = [...catNames];
  if (copyCats.length === 0) {
    return '';
  }
  const lastCat = copyCats.pop()!;
  if (copyCats.length === 0) {
    return lastCat;
  }
  return `${copyCats.join(', ')} and ${lastCat}`;
}

export function calculateTotalPouchesPrice(pouches: PouchSize[] = []): number {
  if (pouches.length === 0) {
    return 0;
  }
  return pouches
    .map((item) => getPouchPrice(item))
    .reduce((acc, curr) => acc + curr, 0);
}
function getPouchPrice(pouchSize: PouchSize): number {
  switch (pouchSize) {
    case 'A':
      return 55.5;
    case 'B':
      return 59.5;
    case 'C':
      return 62.75;
    case 'D':
      return 66.0;
    case 'E':
      return 69.0;
    case 'F':
      return 71.25;
  }
}

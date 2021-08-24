const baseRem = 1;

export function rem(data) {
  return /px/.test(data) ? Number(data.replace(/px/, '')) * baseRem + 'px' : data;
}

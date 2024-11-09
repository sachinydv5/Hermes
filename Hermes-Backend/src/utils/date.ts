type ConvertibleDate = Date | number | string | [number, number, number] | { year: number; month: number; date: number };

// Function to convert various types to a Date object
function convert(d: ConvertibleDate): Date | typeof NaN {
  if (d instanceof Date) {
    return d;
  } else if (Array.isArray(d) && d.length === 3) {
    return new Date(d[0], d[1], d[2]);
  } else if (typeof d === "number") {
    return new Date(d);
  } else if (typeof d === "string") {
    return new Date(d);
  } else if (typeof d === "object" && "year" in d && "month" in d && "date" in d) {
    return new Date(d.year, d.month, d.date);
  } else {
    return NaN;
  }
}

// Date utilities
const date = {
  convert: (d: ConvertibleDate): Date | typeof NaN => {
    return convert(d);
  },
  compare: (d1: ConvertibleDate, d2: ConvertibleDate): number | typeof NaN => {
    const date1 = convert(d1).valueOf();
    const date2 = convert(d2).valueOf();
    
    if (isFinite(date1) && isFinite(date2)) {
      return (date1 > date2 ? 1 : 0) - (date1 < date2 ? 1 : 0);
    }
    return NaN;
  },
  inRange: (d: ConvertibleDate, start: ConvertibleDate, end: ConvertibleDate): boolean | typeof NaN => {
    const dateVal = convert(d).valueOf();
    const startVal = convert(start).valueOf();
    const endVal = convert(end).valueOf();

    if (isFinite(dateVal) && isFinite(startVal) && isFinite(endVal)) {
      return startVal <= dateVal && dateVal <= endVal;
    }
    return NaN;
  },
};

export default date;

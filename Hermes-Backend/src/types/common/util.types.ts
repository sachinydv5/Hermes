
export type NonNullableFields<T> = {
  [K in keyof T]: T[K] extends null | undefined ? never : K;
}[keyof T];

export type NonNullConfig<T> = {
  [K in NonNullableFields<T>]: T[K];
};



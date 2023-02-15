export const handleError = <Target = unknown>(
  _target: Target,
  _key: string,
  descriptor: PropertyDescriptor,
) => {
  const originalMethod = descriptor.value;
  descriptor.value = (...args: unknown[]) => {
    try {
      originalMethod.apply(this, args);
    } catch (err) {
      // console.log(err);
    }
  };
};

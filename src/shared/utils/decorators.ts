export const handleError = <Target = unknown>(
  _target: Target,
  _key: string,
  descriptor: PropertyDescriptor,
) => {
  const originalMethod = descriptor.value;
  descriptor.value = async (...args: unknown[]) => {
    try {
      await originalMethod.apply(this, args);
    } catch (err) {
      // console.log(err, 'Привет Дривэ');
    }
  };
};

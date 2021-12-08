/* eslint-disable prettier/prettier */
export const updateObject = (oldObject: any, updatedProperties: any) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

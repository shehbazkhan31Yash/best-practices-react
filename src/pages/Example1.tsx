export type User = {
  id: number;
  name: string;
};
//User['id']
export const Example1 = async (id: string) => {
  return { id, name: "John Doe" };
};

// getUsers("1").then((user) => {});

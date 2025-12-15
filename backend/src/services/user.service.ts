import UserModel from "../models/user.model";

export const findByIdUserService = async (userId: string) => {
  let user = await UserModel.findById(userId);
  return user;
};

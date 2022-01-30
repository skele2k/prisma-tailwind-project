import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";
import { UserResponse } from "../objectTypes/responses/UserResponse";
import { Context } from "../types/context";

@Resolver()
export class UserResolver {
  @Query(() => UserResponse)
  async users(
    @Arg("userId", () => Int) userId: number,
    @Ctx() { prisma }: Context
  ): Promise<UserResponse> {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return {
        errors: [
          {
            field: "user",
            message: "User not found",
          },
        ],
      };
    }

    return {
      user,
    };
  }
}

import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../FieldError";
import { User } from "@generated/type-graphql";

@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

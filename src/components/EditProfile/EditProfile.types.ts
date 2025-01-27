import { IEditProfileSubmitData } from "@components/EditProfile/EditProfile.form";
import { Dispatch, SetStateAction } from "react";

export interface EditProfileProps {
  openEditProfile: boolean;
  setOpenEditProfile: Dispatch<SetStateAction<boolean>>;
}

export type IEditProfileFormData = Omit<
  IEditProfileSubmitData,
  "countries" | "state" | "skills" | "id"
>;

export interface ILocationInterface {
  label: string;
  value: string;
}

import RegistrationForm from "@/components/register/form";
import Hero from "@/components/register/hero";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - iLearner's Hub | Join Our Learning Community",
  description:
    "Register now at iLearner's Hub to start your learning journey. Choose from our wide range of courses and join thousands of students achieving their educational goals.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <RegistrationForm />
    </>
  );
}

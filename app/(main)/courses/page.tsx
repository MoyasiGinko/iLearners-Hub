"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/courses/all-course");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <p>Redirecting to courses...</p>
    </div>
  );
}

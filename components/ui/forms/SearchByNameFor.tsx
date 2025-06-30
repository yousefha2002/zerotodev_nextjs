"use client";
import React, { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchByNameForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearchByName(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search") as string;

    const params = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      params.set("name", searchValue);
    } else {
      params.delete("name");
    }

    router.push(`?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSearchByName}
      className="flex items-center gap-2 py-4   w-full"
    >
      <input
       autoComplete="off"
        type="text"
        name="search"
        placeholder="إبحث بواسطة العنوان ..."
        className="flex-1 px-4 py-2 rounded-xl border border-muted focus:outline-none  bg-white text-dark"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-opacity-90 transition-all"
      >
        بحث
      </button>
    </form>
  );
}

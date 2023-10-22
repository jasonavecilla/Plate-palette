"use client";
import RecipeBlock from "../components/RecipeBlock";
import React from "react";
import Comment from "../components/Comment";
import SuggestedRecipe from "../components/SuggestedRecipe";

export default function page() {
  return (
    <>
      <RecipeBlock />
      <Comment />
      <SuggestedRecipe />
    </>
  );
}

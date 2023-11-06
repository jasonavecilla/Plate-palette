"use client";

import RecipeBlock from "../components/RecipeBlock";
import React from "react";
import Comment from "../components/Comment";
import SuggestedRecipe from "../components/SuggestedRecipe";
import RecipeImage from "../components/RecipeImage";

export default function page() {
  return (
    <>
      <RecipeImage />
      <RecipeBlock />
      <Comment />
      <SuggestedRecipe />
    </>
  );
}

import React from "react";
import ExploreRecipes from "../features/explore-recipes/ExploreRecipes";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import RecipeGif from "../assets/images/explore-recipes/recipe-gif.gif";

const ExploreRecipesPage = () => {
  return (
    <>
      <HeroSectionReusable
        heading={"Explore Recipes"}
        para={
          "Our Recipe Book is a free recipe space that provides a convenient way for users to organise their recipes. and share their food experiences with friends and family"
        }
        gifTitle={"Our Recipe Book"}
        gifImage={RecipeGif}
      />
      <ExploreRecipes />
    </>
  );
};

export default ExploreRecipesPage;

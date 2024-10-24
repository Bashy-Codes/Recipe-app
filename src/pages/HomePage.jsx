import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { getRandomColor } from "../lib/utils";

const APP_ID = "a2b8ce9a";
const APP_KEY = "f48898b819503d714ee90e0818cf8e95";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );
      const data = await res.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) fetchRecipes(query);
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  return (
    <div className="bg-transparent flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl my-4">
          Cuisine d`Eléonore
        </h1>
        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to try today Eléonore... "
            className="p-2 border rounded-lg flex-1"
          />
          <button
            type="submit"
            className="bg-[#06CFD6] text-white rounded-lg p-2 flex items-center"
          >
            <Search />
          </button>
        </form>

        {loading && (
          <div className="flex justify-center items-center h-80">
            <div className="loader"></div>
          </div>
        )}

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipes.map((recipe) => (
              <RecipeCard
                key={recipe.recipe.uri}
                recipe={recipe.recipe}
                {...getRandomColor()}
              />
            ))}
          {!loading && recipes.length === 0 && (
            <div className="h-60 flex flex-col items-center justify-center">
              <p>No recipes found!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

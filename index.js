import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const recipes = [
  {
    title: "Avocado Toast with Poached Egg",
    image: "/images/avocado-toast.png",
    description: "A perfect omega-3 rich dish with poached egg, chili flakes, and creamy avocado on crispy whole grain bread.",
    link: "https://www.facebook.com/yourpage"
  },
  {
    title: "Berry Chia Pudding",
    image: "/images/berry-chia.png",
    description: "Chia seeds soaked in almond milk and topped with fresh berries. Light, fresh, and full of fiber!",
    link: "https://www.facebook.com/yourpage"
  },
  {
    title: "Stuffed Bell Peppers",
    image: "/images/stuffed-peppers.png",
    description: "Colorful bell peppers filled with quinoa, black beans, and herbs. A complete vegan meal!",
    link: "https://www.facebook.com/yourpage"
  }
];

export default function GreenSpoonHome() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Green Spoon</h1>
      <p className="text-lg mb-6 text-gray-600">Fresh, healthy recipes made with love 🌿</p>

      <Input
        type="text"
        placeholder="Search for a recipe..."
        className="mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>
              <a href={recipe.link} target="_blank" rel="noopener noreferrer">
                <Button>View on Facebook</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import React, { createContext, useState, ReactNode } from "react";

export type Dish = {
  id: number;
  name: string;
  description: string;
  category: string; // Starter, Main, Dessert
  price: number;
};

type MenuContextType = {
  dishes: Dish[];
  addDish: (dish: Dish) => void;
  removeDish: (id: number) => void;
};

export const MenuContext = createContext<MenuContextType>({
  dishes: [],
  addDish: () => {},
  removeDish: () => {},
});

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => setDishes([...dishes, dish]);
  const removeDish = (id: number) => setDishes(dishes.filter(d => d.id !== id));

  return (
    <MenuContext.Provider value={{ dishes, addDish, removeDish }}>
      {children}
    </MenuContext.Provider>
  );
};


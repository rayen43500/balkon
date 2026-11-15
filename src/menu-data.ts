import menuCoffee from './assets/consomation/café glacer.png'
import menuBreakfast from './assets/consomation/petitdejener.jpg'
import menuSeafood from './assets/consomation/fruit de mere.png'
import menuDessert from './assets/consomation/sucrée.png'

export type MenuDish = [name: string, description: string, price: string]
export type MenuCategory = {
  title: string
  eyebrow: string
  copy: string
  image: string
  dishes: MenuDish[]
}

export const categories: MenuCategory[] = [
  {
    title: 'Cafés & boissons', eyebrow: 'LE RITUEL DU CAFÉ',
    copy: 'Cafés, créations glacées et boissons fraîches.', image: menuCoffee,
    dishes: [
      ['Café turc', 'Café traditionnel, servi chaud', '4,5 DT'],
      ['Cappuccino', 'Espresso et mousse de lait', '8 DT'],
      ['Café glacé', 'Café, lait et glaçons', '10 DT'],
      ['Citronnade maison', 'Citron frais et menthe', '9 DT'],
      ['Chocolat chaud', 'Chocolat onctueux', '9 DT'],
      ['Thé à la menthe', 'Thé vert et menthe fraîche', '5 DT'],
    ],
  },
  {
    title: 'Petit-déjeuner', eyebrow: 'LES MATINS DOUX',
    copy: 'Un assortiment gourmand à partager.', image: menuBreakfast,
    dishes: [
      ['Petit-déjeuner tunisien', 'Œuf, fromage, olives et pain', '18 DT'],
      ['Pancakes au miel', 'Pancakes moelleux et miel', '16 DT'],
      ['Toast avocat', 'Pain grillé, avocat et œuf', '19 DT'],
      ['Brunch Balkon', 'Assortiment salé et sucré', '29 DT'],
      ['Crêpe au chocolat', 'Crêpe fine et chocolat', '14 DT'],
      ['Granola maison', 'Yaourt, fruits et granola', '15 DT'],
    ],
  },
  {
    title: 'Plats & spécialités', eyebrow: 'À TABLE',
    copy: 'Grillades et suggestions de la mer.', image: menuSeafood,
    dishes: [
      ['Pâtes aux fruits de mer', 'Sauce tomate et fruits de mer', '34 DT'],
      ['Poisson grillé', 'Poisson du jour et garniture', '42 DT'],
      ['Salade César', 'Poulet grillé, parmesan et croûtons', '25 DT'],
      ['Couscous au poisson', 'Semoule et poisson, façon maison', '38 DT'],
      ['Escalope panée', 'Escalope dorée et frites', '27 DT'],
      ['Pâtes crémeuses', 'Sauce crème et champignons', '26 DT'],
    ],
  },
  {
    title: 'Desserts', eyebrow: 'LA NOTE SUCRÉE',
    copy: 'Desserts fruités et douceurs chocolatées.', image: menuDessert,
    dishes: [
      ['Fondant au chocolat', 'Cœur chocolaté, servi tiède', '14 DT'],
      ['Crêpe aux fruits', 'Fruits frais et coulis', '16 DT'],
      ['Cheesecake maison', 'Part du jour', '15 DT'],
      ['Tiramisu', 'Crème mascarpone et café', '14 DT'],
      ['Salade de fruits', 'Sélection de fruits frais', '12 DT'],
      ['Crêpe caramel', 'Caramel et éclats de noisette', '13 DT'],
    ],
  },
]

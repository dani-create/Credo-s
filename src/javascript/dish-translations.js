// Traductions des plats pour le modal de commande
// Disponible en FR et EN
const DISH_TRANSLATIONS = {
  fr: {
    'Sandwich': 'Sandwich généreux, pain toasté, viande savoureuse et condiments maison — un classique réconfortant.',
    'Salade': 'Salade croquante mêlant légumes frais, herbes parfumées et une vinaigrette légère — parfaite pour une pause saine.',
    'Burger': 'Burger juteux garni de fromage fondant, pickles croquants et notre sauce secrète — une bouchée inoubliable.',
    'Poulet': 'Poulet croustillant, mariné aux épices locales et frit à la perfection — croustillant dehors, tendre dedans.',
    'Shawarma': 'Shawarma tendre, finement tranché et servi avec pain pita, légumes frais et sauce à l\'ail — la street-food revisitée.',
    // 'Tenders' removed
  },
  en: {
    'Sandwich': 'Generous sandwich, toasted bread, savory meat and homemade condiments — a comforting classic.',
    'Salad': 'Crispy salad mixing fresh vegetables, fragrant herbs and light vinaigrette — perfect for a healthy break.',
    'Burger': 'Juicy burger topped with melted cheese, crispy pickles and our secret sauce — an unforgettable bite.',
    'Chicken': 'Crispy chicken, marinated with local spices and fried to perfection — crispy outside, tender inside.',
    'Shawarma': 'Tender shawarma, finely sliced and served with pita bread, fresh vegetables and garlic sauce — street-food revisited.',
    // 'Tenders' removed
  }
};

function getDishDescription(dishName, language = 'fr') {
  return DISH_TRANSLATIONS[language]?.[dishName] || DISH_TRANSLATIONS.fr[dishName] || '';
}

function getCurrentLanguage() {
  return localStorage.getItem('credo_lang') || 'fr';
}

// Traductions des plats pour le modal de commande
// Disponible en FR et EN
const DISH_TRANSLATIONS = {
  fr: {
    'Sandwich': 'Sandwich généreux, pain toasté, viande savoureuse et condiments maison — un classique réconfortant.',
    'Salade': 'Salade croquante mêlant légumes frais, herbes parfumées et une vinaigrette légère — parfaite pour une pause saine.',
    'Burger': 'Burger juteux garni de fromage fondant, pickles croquants et notre sauce secrète — une bouchée inoubliable.',
    'Poulet': 'Poulet croustillant, mariné aux épices locales et frit à la perfection — croustillant dehors, tendre dedans.',
    'Burrito': 'Burrito généreux garni de riz, haricots, viande épicée, légumes et sauce crémeuse — nourrissant et plein de saveurs.',
    'Shawarma': 'Shawarma tendre, finement tranché et servi avec pain pita, légumes frais et sauce à l\'ail — la street-food revisitée.',
    'Tenders': 'Tenders dorés et croustillants, bien assaisonnés — parfaits à partager ou à savourer seul.'
  },
  en: {
    'Sandwich': 'Generous sandwich, toasted bread, savory meat and homemade condiments — a comforting classic.',
    'Salad': 'Crispy salad mixing fresh vegetables, fragrant herbs and light vinaigrette — perfect for a healthy break.',
    'Burger': 'Juicy burger topped with melted cheese, crispy pickles and our secret sauce — an unforgettable bite.',
    'Chicken': 'Crispy chicken, marinated with local spices and fried to perfection — crispy outside, tender inside.',
    'Burrito': 'Generous burrito filled with rice, beans, spicy meat, vegetables and creamy sauce — nourishing and full of flavors.',
    'Shawarma': 'Tender shawarma, finely sliced and served with pita bread, fresh vegetables and garlic sauce — street-food revisited.',
    'Tenders': 'Golden and crispy tenders, well-seasoned — perfect to share or enjoy alone.'
  }
};

function getDishDescription(dishName, language = 'fr') {
  return DISH_TRANSLATIONS[language]?.[dishName] || DISH_TRANSLATIONS.fr[dishName] || '';
}

function getCurrentLanguage() {
  return localStorage.getItem('credo_lang') || 'fr';
}

"""
Translations module for Credo's Fast Food website
Supports French (FR) and English (EN)
"""

TRANSLATIONS = {
    'fr': {
        # Page metadata
        'page_title': "Credo's",
        
        # Header/Nav
        'site_name': "Credo's",
        'nav_accueil': 'Accueil',
        'nav_plats': 'Plats',
        'nav_contacts': 'Contacts',
        'nav_about': 'À propos',
        
        # Hero Section
        'hero_subtitle': 'THE ULTIMATE',
        'hero_title': "Credo's",
        'hero_tagline': "Savoure l'instant, il ne revient pas.<br>Credo's , ton moment gourmand",
        'cta_button_text': 'Commander',
        'delivery_text': 'livraison partout à Lubumbashi',
        'trust_badge_text': 'people trust us',
        
        # Dishes Section
        'dishes_tagline': 'Délices',
        'dishes_heading': 'Nos plats signature',
        'dishes_subheading': 'Découvrez les saveurs qui font de notre fast-food une destination unique à Lubumbashi',
        'chicken_tagline': 'Poulet',
        'chicken_title': 'Notre poulet spécial',
        'chicken_description': 'Préparé avec des épices locales et une recette secrète — croustillant, parfumé et prêt à partager.',
        'chicken_button': 'Découvrir',
        'sides_title': 'Burger',
        'sides_description': 'Burger juteux garni de fromage fondant, légumes frais et notre sauce secrète — le classique qui réconforte à chaque bouchée.',
        'salad_title': 'Salade fraîche',
        'salad_description': 'Salade croquante aux légumes de saison, vinaigrette maison légère — parfaite pour accompagner ou pour une option saine.',
        'salad_button': 'Découvrir',
        'sides_link_text': 'Explorer',
        'sandwich_title': 'Sandwichs incroyables',
        'sandwich_description': 'Pain toasté, garnitures maison et sauces qui font chanter chaque bouchée — simple et délicieux.',
        'sandwich_button': 'Découvrir',
        'burrito_title': 'Burrito gourmand',
        'burrito_description': 'Tortilla généreuse farcie de saveurs, garnitures copieuses et sauce épicée — le tout en un',
        'burrito_button': 'Découvrir',
        'shawarma_title': 'Shawarma savoureux',
        'shawarma_description': 'Viande marinée, pain pita tendre, sauce tahini et légumes — tradition gustative du Moyen-Orient',
        'shawarma_button': 'Découvrir',
        'tenders_title': 'Tenders croustillants',
        'tenders_description': 'Lanières de poulet pané et frit, doré et juteux — parfait seul ou avec sauce',
        'tenders_button': 'Découvrir',
        
        # Testimonials Section
        'testimonials_heading': 'Ce que disent nos clients',
        'testimonials_subheading': 'Des témoignages qui racontent notre histoire de passion culinaire',
        
        # Contact Section
        'contact_tagline': 'Contactez-nous',
        'contact_heading': 'Restons connectés',
        'contact_subheading': 'Nous sommes impatients de recevoir vos commentaires et de répondre à vos questions.',
        'contact_email_title': 'Email',
        'contact_email_value': 'Credosfood@gmail.com',
        'contact_phone_title': 'Téléphone',
        'contact_phone_value': '+243 983308866 / +243 833589772',
        'contact_address_title': 'Adresse',
        'contact_address_value': 'Q. Kamatete, Rue. Arc-en-ciel Lubumbashi, République Démocratique du Congo.',
        
        # About Section
        'about_tagline': 'Notre histoire',
        'about_heading': 'À propos de Credo\'s',
        'about_subheading': 'Nourrir avec sens. Sourire avec style.',
        'about_intro': 'Credo\'s est né à Lubumbashi l\'an 2021, sur un terrain de basket, un soir de fatigue et de faim. Trois étudiants, après une partie intense, où l\'un a rêvé d\'un plat simple, chaud, vrai. Ce moment est devenu une idée. Cette idée est devenue une marque.',
        'about_mission': 'Aujourd\'hui, Credo\'s est un fast-food de confort culinaire. Chaque sandwich, chaque burger, chaque plat est pensé pour réchauffer sans alourdir, pour nourrir sans détour. Le feu est tendre, les gestes sont précis, et le goût parle vrai.',
        'about_engagement': 'Mais Credo\'s, c\'est aussi un engagement : nos sacs en kraft, imprimés à la main, sont là pour dire non au plastique. Ils portent un sourire discret, celui de la marque, comme une promesse de respect, d\'accueil, de responsabilité.',
        'about_vision': 'Credo\'s est une invitation à croire en mieux : un Congo qui cuisine avec dignité, une Afrique qui innove avec cœur. Chaque bouchée, chaque emballage, chaque mot est un petit pas vers ce rêve partagé.',
        'about_closing': 'Credo\'s, c\'est le goût du vrai, le geste du futur, et le sourire de ceux qui y croient.',
        'about_services_title': 'Services',
        'about_delivery': 'Livraison rapide et gratuite dans toute Lubumbashi',
        'about_preparation': 'Préparation à la demande avec les meilleurs ingrédients',
        'about_catering': 'Services de traiteur pour événements et réceptions',
        
        # Footer Section
        'footer_nav_accueil': 'Accueil',
        'footer_nav_plats': 'Plats',
        'footer_nav_about': 'À propos',
        'footer_copyright': "© 2025 Credo's. Tous droits réservés",
        'footer_privacy': 'Politique de confidentialité',
        'footer_terms': 'Conditions d\'utilisation',
        
        # Modal & Buttons
        'modal_title': 'Commande',
        'modal_add_to_cart': 'Ajouter au panier',
        'modal_order_whatsapp': 'Commander via WhatsApp',
        'modal_order_email': 'Commander via email',
        'modal_thanks': 'Merci pour votre commande ! À bientôt chez Credo\'s',
        'modal_close': 'Fermer',
        'modal_gallery_title': 'Galerie de commande',
        'modal_help_title': 'Aide',
        'modal_cart_title': 'Mon panier',
        'modal_empty_cart': 'Vider le panier',
        'modal_send_order': 'Envoyer la commande',
        'modal_remove_item': 'Retirer',
        'modal_empty_message': 'Votre panier est vide',
        
        # Floating buttons
        'btn_gallery': 'Galerie',
        'btn_help': 'Aide',
        'btn_cart': 'Panier',
        'btn_theme': 'Thème',
        'btn_language': 'Langue',
        
        # Privacy & Terms
        'privacy_title': 'Politique de confidentialité',
        'privacy_content': 'Nous nous engageons à protéger vos données personnelles. Vos informations ne seront jamais partagées avec des tiers sans votre consentement explicite.',
        'terms_title': 'Conditions d\'utilisation',
        'terms_content': 'En utilisant ce site, vous acceptez nos conditions d\'utilisation. Credo\'s se réserve le droit de modifier ces conditions à tout moment.',
    },
    'en': {
        # Page metadata
        'page_title': "Credo's",
        
        # Header/Nav
        'site_name': "Credo's",
        'nav_accueil': 'Home',
        'nav_plats': 'Dishes',
        'nav_contacts': 'Contact',
        'nav_about': 'About',
        
        # Hero Section
        'hero_subtitle': 'THE ULTIMATE',
        'hero_title': "Credo's",
        'hero_tagline': "Savor the moment, it will not come again.<br>Credo's, your gourmet moment",
        'cta_button_text': 'Order',
        'delivery_text': 'Delivery everywhere in Lubumbashi',
        'trust_badge_text': 'people trust us',
        
        # Dishes Section
        'dishes_tagline': 'Delights',
        'dishes_heading': 'Our signature dishes',
        'dishes_subheading': 'Discover the flavors that make our fast-food a unique destination in Lubumbashi',
        'chicken_tagline': 'Chicken',
        'chicken_title': 'Our special chicken',
        'chicken_description': 'Prepared with local spices and a secret recipe — crispy, fragrant and ready to share.',
        'chicken_button': 'Discover',
        'sides_title': 'Burger',
        'sides_description': 'Juicy burger topped with melted cheese, fresh vegetables and our secret sauce — the classic that comforts with every bite.',
        'salad_title': 'Fresh salad',
        'salad_description': 'Crispy salad with seasonal vegetables, light homemade vinaigrette — perfect as a side or for a healthy option.',
        'salad_button': 'Discover',
        'sides_link_text': 'Explore',
        'sandwich_title': 'Amazing sandwiches',
        'sandwich_description': 'Toasted bread, homemade fillings and sauces that sing with every bite — simple and delicious.',
        'sandwich_button': 'Discover',
        'burrito_title': 'Gourmet burrito',
        'burrito_description': 'Generous tortilla filled with flavors, hearty fillings and spicy sauce — everything in one',
        'burrito_button': 'Discover',
        'shawarma_title': 'Savory shawarma',
        'shawarma_description': 'Marinated meat, tender pita bread, tahini sauce and vegetables — Middle Eastern taste tradition',
        'shawarma_button': 'Discover',
        'tenders_title': 'Crispy tenders',
        'tenders_description': 'Breaded and fried chicken strips, golden and juicy — perfect alone or with sauce',
        'tenders_button': 'Discover',
        
        # Testimonials Section
        'testimonials_heading': 'What our customers say',
        'testimonials_subheading': 'Testimonials that tell our story of culinary passion',
        
        # Contact Section
        'contact_tagline': 'Contact us',
        'contact_heading': 'Stay connected',
        'contact_subheading': 'We look forward to hearing from you and answering your questions.',
        'contact_email_title': 'Email',
        'contact_email_value': 'Credosfood@gmail.com',
        'contact_phone_title': 'Phone',
        'contact_phone_value': '+243 983308866 / +243 833589772',
        'contact_address_title': 'Address',
        'contact_address_value': 'Q. Kamatete, Arc-en-ciel Street, Lubumbashi, Democratic Republic of Congo.',
        
        # About Section
        'about_tagline': 'Our story',
        'about_heading': 'About Credo\'s',
        'about_subheading': 'Nourish with meaning. Smile with style.',
        'about_intro': 'Credo\'s was born in Lubumbashi in 2021, on a basketball court, one evening of tiredness and hunger. Three students, after an intense game, where one dreamed of a simple, hot, true meal. That moment became an idea. That idea became a brand.',
        'about_mission': 'Today, Credo\'s is a fast-food of culinary comfort. Every sandwich, every burger, every dish is designed to warm without burdening, to nourish without detour. The fire is tender, the gestures are precise, and the taste speaks true.',
        'about_engagement': 'But Credo\'s is also a commitment: our kraft bags, hand-printed, are there to say no to plastic. They carry a quiet smile, that of the brand, like a promise of respect, welcome, and responsibility.',
        'about_vision': 'Credo\'s is an invitation to believe in better: a Congo that cooks with dignity, an Africa that innovates with heart. Every bite, every package, every word is a small step towards this shared dream.',
        'about_closing': 'Credo\'s is the taste of the real, the gesture of the future, and the smile of those who believe in it.',
        'about_services_title': 'Services',
        'about_delivery': 'Fast and free delivery throughout Lubumbashi',
        'about_preparation': 'On-demand preparation with the finest ingredients',
        'about_catering': 'Catering services for events and receptions',
        
        # Footer Section
        'footer_nav_accueil': 'Home',
        'footer_nav_plats': 'Dishes',
        'footer_nav_about': 'About',
        'footer_copyright': "© 2025 Credo's. All rights reserved",
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms of Use',
        
        # Modal & Buttons
        'modal_title': 'Order',
        'modal_add_to_cart': 'Add to cart',
        'modal_order_whatsapp': 'Order via WhatsApp',
        'modal_order_email': 'Order via email',
        'modal_thanks': 'Thank you for your order! See you soon at Credo\'s',
        'modal_close': 'Close',
        'modal_gallery_title': 'Order gallery',
        'modal_help_title': 'Help',
        'modal_cart_title': 'My cart',
        'modal_empty_cart': 'Empty cart',
        'modal_send_order': 'Send order',
        'modal_remove_item': 'Remove',
        'modal_empty_message': 'Your cart is empty',
        
        # Floating buttons
        'btn_gallery': 'Gallery',
        'btn_help': 'Help',
        'btn_cart': 'Cart',
        'btn_theme': 'Theme',
        'btn_language': 'Language',
        
        # Privacy & Terms
        'privacy_title': 'Privacy Policy',
        'privacy_content': 'We are committed to protecting your personal data. Your information will never be shared with third parties without your explicit consent.',
        'terms_title': 'Terms of Use',
        'terms_content': 'By using this site, you accept our terms of use. Credo\'s reserves the right to modify these terms at any time.',
    }
}

def get_translation(language, key):
    """Get a translated string by language and key"""
    return TRANSLATIONS.get(language, {}).get(key, key)

def get_all_translations(language):
    """Get all translations for a language"""
    return TRANSLATIONS.get(language, {})

"""
Render module for Credo's Fast Food website
Uses Jinja2 templating engine to organize and render HTML with modular templates
Supports multi-language rendering (FR / EN) via translations module
"""

from jinja2 import Environment, FileSystemLoader, select_autoescape
import os
from pathlib import Path
from translations import get_all_translations, get_translation

class CredosRenderer:
    """Handle rendering of HTML templates using Jinja2"""
    
    def __init__(self, template_dir='src/templates'):
        """
        Initialize the Jinja2 environment
        
        Args:
            template_dir (str): Directory containing template files
        """
        # Create templates directory if it doesn't exist
        self.template_dir = Path(template_dir)
        self.template_dir.mkdir(exist_ok=True)
        
        # Setup Jinja2 environment
        self.env = Environment(
            loader=FileSystemLoader(str(self.template_dir)),
            autoescape=select_autoescape(['html', 'xml']),
            trim_blocks=True,
            lstrip_blocks=True
        )
    
    def render_template(self, template_name, **context):
        """
        Render a template with given context
        
        Args:
            template_name (str): Name of the template file
            **context: Variables to pass to template
            
        Returns:
            str: Rendered HTML string
        """
        template = self.env.get_template(template_name)
        return template.render(**context)
    
    def render_to_file(self, template_name, output_file, **context):
        """
        Render a template and save to file
        
        Args:
            template_name (str): Name of the template file
            output_file (str): Path where to save rendered HTML
            **context: Variables to pass to template
        """
        html_content = self.render_template(template_name, **context)
        
        output_path = Path(output_file)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"✓ Rendered {template_name} → {output_file}")


def get_context_data(language='fr'):
    """
    Get all context data for rendering the website
    
    Args:
        language (str): Language code ('fr' or 'en')
    
    Returns:
        dict: Complete context data for templates with translations
    """
    trans = get_all_translations(language)
    
    return {
        # Page metadata
        'page_title': trans.get('page_title', "Credo's"),
        'language': language,
        
        # Header/Nav
        'site_name': trans.get('site_name', "Credo's"),
        'nav_items': [
            {'url': '#hero', 'label': trans.get('nav_accueil', 'Accueil')},
            {'url': '#dishes', 'label': trans.get('nav_plats', 'Plats')},
            {'url': '#contact', 'label': trans.get('nav_contacts', 'Contacts')},
            {'url': '#about', 'label': trans.get('nav_about', 'À propos')},
        ],
        
        # Hero Section
        'hero_subtitle': trans.get('hero_subtitle', 'THE ULTIMATE'),
        'hero_title': trans.get('hero_title', "Credo's"),
        'hero_tagline': trans.get('hero_tagline', "Savoure l'instant"),
        'hero_primary_image': 'images/888bc5a5f08099437edc690608679c73ae117689.png',
        'hero_secondary_image': 'images/9e34eebf702416f68a6f139e70a6e9a249bc2061.png',
        'cta_button_text': trans.get('cta_button_text', 'Commander'),
        'delivery_icon': 'images/fcfa40a94765381d6d2171f7ee9c1807b460e67d.png',
        'delivery_text': trans.get('delivery_text', 'livraison partout'),
        'trust_badge_text': trans.get('trust_badge_text', 'people trust us'),
        
        # Dishes Section
        'dishes_tagline': trans.get('dishes_tagline', 'Délices'),
        'dishes_heading': trans.get('dishes_heading', 'Nos plats signature'),
        'dishes_subheading': trans.get('dishes_subheading', 'Découvrez les saveurs'),
        'chicken_tagline': trans.get('chicken_tagline', 'Poulet'),
        'chicken_title': trans.get('chicken_title', 'Notre poulet spécial'),
        'chicken_description': trans.get('chicken_description', 'Préparé avec des épices'),
        'chicken_button': trans.get('chicken_button', 'Découvrir'),
        'sides_title': trans.get('sides_title', 'Burger'),
        'sides_description': trans.get('sides_description', 'Burger juteux'),
        'salad_title': trans.get('salad_title', 'Salade fraîche'),
        'salad_description': trans.get('salad_description', 'Salade croquante'),
        'salad_button': trans.get('salad_button', 'Découvrir'),
        'sides_link_text': trans.get('sides_link_text', 'Explorer'),
        'sandwich_title': trans.get('sandwich_title', 'Sandwichs incroyables'),
        'sandwich_description': trans.get('sandwich_description', 'Pain toasté'),
        'sandwich_button': trans.get('sandwich_button', 'Découvrir'),
        'shawarma_title': trans.get('shawarma_title', 'Shawarma savoureux'),
        'shawarma_description': trans.get('shawarma_description', 'Viande marinée'),
        'shawarma_button': trans.get('shawarma_button', 'Découvrir'),
        'tenders_title': trans.get('tenders_title', 'Tenders croustillants'),
        'tenders_description': trans.get('tenders_description', 'Lanières de poulet'),
        'tenders_button': trans.get('tenders_button', 'Découvrir'),
        
        # Testimonials Section
        'testimonials_heading': trans.get('testimonials_heading', 'Ce que disent nos clients'),
        'testimonials_subheading': trans.get('testimonials_subheading', 'Des témoignages qui racontent'),
        'testimonials': [
            {
                'stars_image': 'images/307_511.svg',
                'quote': 'Le meilleur poulet que j\'ai jamais goûté à Lubumbashi' if language == 'fr' else 'The best chicken I\'ve ever tasted in Lubumbashi',
                'avatar': 'images/307_519.svg',
                'name': 'Jean Mukendi',
                'title': 'Client régulier' if language == 'fr' else 'Regular customer'
            },
            {
                'stars_image': 'images/307_525.svg',
                'quote': 'Les sandwichs sont absolument incroyables' if language == 'fr' else 'The sandwiches are absolutely amazing',
                'avatar': 'images/307_533.svg',
                'name': 'Marie Kasongo',
                'title': 'Foodie locale' if language == 'fr' else 'Local foodie'
            },
            {
                'stars_image': 'images/307_539.svg',
                'quote': 'Un endroit qui capture l\'essence de la cuisine de Lubumbashi' if language == 'fr' else 'A place that captures the essence of Lubumbashi cuisine',
                'avatar': 'images/307_547.svg',
                'name': 'Pierre Ntumba',
                'title': 'Critique culinaire' if language == 'fr' else 'Culinary critic'
            }
        ],
        
        # Contact Section
        'contact_tagline': trans.get('contact_tagline', 'Contactez-nous'),
        'contact_heading': trans.get('contact_heading', 'Restons connectés'),
        'contact_subheading': trans.get('contact_subheading', 'Nous sommes impatients'),
        'contact_items': [
            {
                'type': 'email',
                'icon': 'images/307_562.svg',
                'title': trans.get('contact_email_title', 'Email'),
                'value': trans.get('contact_email_value', 'Credosfood@gmail.com')
            },
            {
                'type': 'phone',
                'icon': 'images/307_567.svg',
                'title': trans.get('contact_phone_title', 'Téléphone'),
                'value': trans.get('contact_phone_value', '+243 983308866 / +243 833589772'),
                'value_raw': '+243983308866'
            },
            {
                'type': 'address',
                'icon': 'images/307_572.svg',
                'title': trans.get('contact_address_title', 'Adresse'),
                'value': trans.get('contact_address_value', 'Q. Kamatete')
            }
        ],
        
        # About Section
        'about_tagline': trans.get('about_tagline', 'Notre histoire'),
        'about_heading': trans.get('about_heading', 'À propos de Credo\'s'),
        'about_subheading': trans.get('about_subheading', 'Nourrir avec sens'),
        'about_intro': trans.get('about_intro', 'Credo\'s est né à Lubumbashi'),
        'about_mission': trans.get('about_mission', 'Aujourd\'hui, Credo\'s est'),
        'about_engagement': trans.get('about_engagement', 'Mais Credo\'s, c\'est aussi'),
        'about_vision': trans.get('about_vision', 'Credo\'s est une invitation'),
        'about_closing': trans.get('about_closing', 'Credo\'s, c\'est le goût'),
        'about_services_title': trans.get('about_services_title', 'Services'),
        'about_delivery': trans.get('about_delivery', 'Livraison rapide'),
        'about_preparation': trans.get('about_preparation', 'Préparation à la demande'),
        'about_catering': trans.get('about_catering', 'Services de traiteur'),
        
        # Footer Section
        'footer_nav_items': [
            {'url': '#hero', 'label': trans.get('footer_nav_accueil', 'Accueil')},
            {'url': '#dishes', 'label': trans.get('footer_nav_plats', 'Plats')},
            {'url': '#about', 'label': trans.get('footer_nav_about', 'À propos')},
        ],
        'copyright_text': trans.get('footer_copyright', "© 2025 Credo's. Tous droits réservés"),
        'footer_privacy': trans.get('footer_privacy', 'Politique de confidentialité'),
        'footer_terms': trans.get('footer_terms', 'Conditions d\'utilisation'),
        
        # Modal & Buttons (for JS)
        'modal_title': trans.get('modal_title', 'Commande'),
        'modal_add_to_cart': trans.get('modal_add_to_cart', 'Ajouter au panier'),
        'modal_order_whatsapp': trans.get('modal_order_whatsapp', 'Commander via WhatsApp'),
        'modal_order_email': trans.get('modal_order_email', 'Commander via email'),
        'modal_thanks': trans.get('modal_thanks', 'Merci pour votre commande'),
        'modal_gallery_title': trans.get('modal_gallery_title', 'Galerie de commande'),
        'modal_help_title': trans.get('modal_help_title', 'Aide'),
        'modal_cart_title': trans.get('modal_cart_title', 'Mon panier'),
        'modal_empty_cart': trans.get('modal_empty_cart', 'Vider le panier'),
        'modal_empty_message': trans.get('modal_empty_message', 'Votre panier est vide'),
        
        'privacy_title': trans.get('privacy_title', 'Politique de confidentialité'),
        'privacy_content': trans.get('privacy_content', 'Nous nous engageons'),
        'terms_title': trans.get('terms_title', 'Conditions d\'utilisation'),
        'terms_content': trans.get('terms_content', 'En utilisant ce site'),
    }


def main():
    """Main function to render the complete website"""
    
    # Initialize renderer (now points to src/templates after repo reorganization)
    renderer = CredosRenderer('src/templates')
    
    print("="*60)
    print("Credo's Website - Rendering with Jinja2")
    print("="*60 + "\n")
    
    # Get context data with French language (default)
    context = get_context_data('fr')
    
    # Render the complete website
    try:
        print("Rendering templates (FR)...\n")
        renderer.render_to_file('base.html', 'index.html', **context)
        print("\n" + "="*60)
        print("✓ SUCCESS! index.html has been generated (FR)")
        print("="*60)
        print("\nThe website has been rendered with the following templates:")
        print("  • templates/base.html (main template)")
        print("  • templates/nav.html (navigation)")
        print("  • templates/sections.html (all sections)")
        print("  • templates/footer.html (footer)")
        print("\nLanguage switcher JS (language.js) will reload page with EN on click")
        print("You can now open index.html in your browser!")
    except Exception as e:
        print(f"✗ Error rendering template: {e}")
        import traceback
        traceback.print_exc()


if __name__ == '__main__':
    main()

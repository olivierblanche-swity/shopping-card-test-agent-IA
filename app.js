/**
 * Gere le panier local.
 * Vue : objet global fourni par le CDN.
 * products : tableau local declare dans products.js.
 */
Vue.createApp({
  /**
   * Fournit les produits et les frais de livraison.
   * @returns {{products: typeof products, shipping: number}}
   * shipping : frais fixes en euros.
   */
  data() {
    return { products, shipping: 5 };
  },

  computed: {
    /**
     * Additionne les quantités des produits de this.products.
     * @returns {number} Nombre total d’articles.
     */
    itemCount() {
      return this.products.reduce(
        /**
         * @param {number} count Somme accumulée, initialisée à 0.
         * @param {typeof products[number]} product Produit courant.
         * @returns {number} Somme incluant la quantité du produit.
         */
        (count, product) => count + product.quantity,
        0
      );
    },

    /**
     * Additionne les prix multipliés par les quantités.
     * this.products : produits de l’état réactif.
     * @returns {number} Sous-total en euros.
     */
    subtotal() {
      return this.products.reduce(
        /**
         * @param {number} cents Somme en centimes, initialisée à 0.
         * @param {typeof products[number]} product Produit courant.
         * @returns {number} Somme incluant le montant du produit.
         */
        (cents, product) =>
          cents + Math.round(product.price * 100) * product.quantity,
        0
      ) / 100;
    },

    /**
     * Ajoute la livraison au sous-total.
     * this.subtotal : montant calcule en euros.
     * this.shipping : frais de livraison en euros.
     * @returns {number} Total complet en euros.
     */
    total() {
      return (Math.round(this.subtotal * 100)
        + Math.round(this.shipping * 100)) / 100;
    },
  },
}).mount("#app");

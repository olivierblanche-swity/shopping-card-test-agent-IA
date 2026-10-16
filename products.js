/**
 * Produits repris du HTML initial, avec noms et prix proposes pour les produits 2 et 3.
 * Les identifiants sont ajoutes pour distinguer les lignes.
 * @type {Array<{
 *   id: number,
 *   category: string,
 *   name: string,
 *   price: number,
 *   image: string,
 *   quantity: number
 * }>}
 * price : prix unitaire en euros ; quantity : quantite initiale.
 */
const products = [
  {
    id: 1,
    category: "Shirt",
    name: "Cotton T-shirt",
    price: 44,
    image: "https://i.imgur.com/1GrakTl.jpg",
    quantity: 1,
  },
  {
    id: 2,
    category: "Shirt",
    name: "Linen Shirt",
    price: 59.90,
    image: "https://i.imgur.com/ba3tvGm.jpg",
    quantity: 1,
  },
  {
    id: 3,
    category: "Shirt",
    name: "Denim Shirt",
    price: 69.50,
    image: "https://i.imgur.com/pHQ3xT3.jpg",
    quantity: 1,
  },
];

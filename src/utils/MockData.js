export const productos = [
    {
      id: 1,
      nombre: "Camisa de algodón",
      descripcion: "Camisa de manga larga, hecha de algodón suave y cómodo.",
      precio: 250.50,
      stock: 20,
      imagen: "imagen_camisa.jpg"
    },
    {
      id: 2,
      nombre: "Pantalones vaqueros",
      descripcion: "Pantalones vaqueros clásicos, perfectos para un look informal.",
      precio: 350.75,
      stock: 15,
      imagen: "imagen_pantalones.jpg"
    },
    {
      id: 3,
      nombre: "Zapatillas deportivas",
      descripcion: "Zapatillas deportivas ligeras y transpirables para correr o entrenar.",
      precio: 180.25,
      stock: 30,
      imagen: "imagen_zapatillas.jpg"
    },
    {
      id: 4,
      nombre: "Bolso de cuero",
      descripcion: "Bolso de cuero elegante y espacioso para llevar tus pertenencias diarias.",
      precio: 420.99,
      stock: 10,
      imagen: "imagen_bolso.jpg"
    },
    {
      id: 5,
      nombre: "Reloj de pulsera",
      descripcion: "Reloj de pulsera con correa de acero inoxidable y resistente al agua.",
      precio: 199.99,
      stock: 25,
      imagen: "imagen_reloj.jpg"
    },
    {
      id: 6,
      nombre: "Gafas de sol",
      descripcion: "Gafas de sol con montura de acetato y lentes polarizadas.",
      precio: 150.00,
      stock: 18,
      imagen: "imagen_gafas.jpg"
    },
    {
      id: 7,
      nombre: "Vestido elegante",
      descripcion: "Vestido elegante para ocasiones especiales, con detalle de encaje.",
      precio: 550.00,
      stock: 12,
      imagen: "imagen_vestido.jpg"
    },
    {
      id: 8,
      nombre: "Cartera de piel",
      descripcion: "Cartera de piel genuina con múltiples compartimentos para tarjetas y billetes.",
      precio: 99.50,
      stock: 22,
      imagen: "imagen_cartera.jpg"
    },
    {
      id: 9,
      nombre: "Bufanda de lana",
      descripcion: "Bufanda suave y abrigada, tejida con lana de alta calidad.",
      precio: 45.99,
      stock: 35,
      imagen: "imagen_bufanda.jpg"
    },
    {
      id: 10,
      nombre: "Maletín ejecutivo",
      descripcion: "Maletín ejecutivo con compartimentos acolchados para laptop y documentos.",
      precio: 299.99,
      stock: 8,
      imagen: "imagen_maletin.jpg"
    }
  ];

  export const getProdutos = () => {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {

            resolve (productos)

            //reject ("No se pudo traer los productos")

        }, 2000)
    })

  }
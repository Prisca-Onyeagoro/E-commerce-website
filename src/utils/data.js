import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'john',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'james',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'shirts',
      image:
        'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1aXRzfGVufDB8fDB8fHww',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'SHIRT',
    },
    {
      name: 'Fash suit',
      slug: 'fash-suit',
      category: 'shirts',
      image:
        'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1aXRzfGVufDB8fDB8fHww',
      price: 90,
      brand: 'Gucci',
      rating: 3.2,
      numReviews: 10,
      countInStock: 40,
      description: 'SUIT',
    },
    {
      name: 'carg suit',
      slug: 'cargo-suit',
      category: 'suit',
      image:
        'https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1aXRzfGVufDB8fDB8fHww',
      price: 60,
      brand: 'Luis vuton',
      rating: 6.5,
      numReviews: 5,
      countInStock: 80,
      description: 'A suit',
    },
    {
      name: 'casely pants',
      slug: 'casely-pants',
      category: 'pants',
      image:
        'https://images.unsplash.com/photo-1602369796316-ee82989ed108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM1fHxwYW50c3xlbnwwfHwwfHx8MA%3D%3D',
      price: 50,
      brand: 'casely',
      rating: 4.0,
      numReviews: 9,
      countInStock: 30,
      description: 'Pants',
    },
    {
      name: 'vic suit',
      slug: 'vic-suit',
      category: 'suits',
      image:
        'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHN1aXRzfGVufDB8fDB8fHww',
      price: 50,
      brand: 'victoria secret',
      rating: 5.5,
      numReviews: 9,
      countInStock: 50,
      description: 'vic suits',
    },
    {
      name: 'jacket',
      slug: 'free-jacket',
      category: 'shirts',
      image:
        'https://images.unsplash.com/photo-1598915850252-fb07ad1e6768?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1aXRzfGVufDB8fDB8fHww',
      price: 80,
      brand: 'Addidas',
      rating: 4.5,
      numReviews: 7,
      countInStock: 30,
      description: 'Addidas-jacket',
    },
    {
      name: 'Tesco Suits',
      slug: 'tesco-suits',
      category: 'shirts',
      image:
        'https://images.unsplash.com/photo-1591470481729-2bcc11e3acb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1aXRzfGVufDB8fDB8fHww',
      price: 70,
      brand: 'Tesco',
      rating: 9,
      numReviews: 9,
      countInStock: 60,
      description: 'TESCO-SUIT',
    },
    {
      name: 'Fila-Shirt',
      slug: 'fila-shirt',
      category: 'shirts',
      image:
        'https://images.unsplash.com/photo-1613379099748-649a970b43e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHN1aXRzfGVufDB8fDB8fHww',
      price: 70,
      brand: 'Fila',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'Fila-SHIRT',
    },
  ],
};

export default data;

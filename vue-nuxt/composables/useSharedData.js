export default function useSharedData() {
  const categoriesRoot = [
    {
      path: '/category/electronics',
      title: 'Eletrônicos',
      titleEs: 'electronics'
    },
    {
      path: '/category/jewelery',
      title: 'Jóias',
      titleEs: 'jewelery'
    },
    {
      path: "/category/men's%20clothing",
      title: 'Moda Masculina',
      titleEs: "men's clothing"
    },
    {
      path: "/category/women's%20clothing",
      title: 'Moda Feminina',
      titleEs: "women's clothing"
  }]
    
  const categories = ref(categoriesRoot);

  const menu = ref([
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/products',
      title: 'Produtos'
    },
    ...categoriesRoot,
  ]);

  return { menu, categories };
}

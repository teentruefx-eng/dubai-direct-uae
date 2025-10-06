import { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const Products = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'همه محصولات' },
    { id: 'electronics', name: 'الکترونیک' },
    { id: 'fashion', name: 'پوشاک و اکسسوری' },
    { id: 'beauty', name: 'آرایشی و بهداشتی' },
  ];

  const products = [
    {
      id: 1,
      image: product1,
      title: 'گوشی هوشمند پریمیوم',
      category: 'electronics',
      price: '۱۵,۰۰۰,۰۰۰',
      description: 'آخرین مدل با بهترین قیمت از دبی',
    },
    {
      id: 2,
      image: product2,
      title: 'کیف چرم دست‌دوز',
      category: 'fashion',
      price: '۸,۵۰۰,۰۰۰',
      description: 'کیف چرم طبیعی با طراحی لوکس',
    },
    {
      id: 3,
      image: product3,
      title: 'ست عطر و لوازم آرایشی',
      category: 'beauty',
      price: '۳,۲۰۰,۰۰۰',
      description: 'محصولات اورجینال با بهترین کیفیت',
    },
    {
      id: 4,
      image: product1,
      title: 'ساعت هوشمند اسپرت',
      category: 'electronics',
      price: '۶,۸۰۰,۰۰۰',
      description: 'ساعت هوشمند با امکانات پیشرفته',
    },
    {
      id: 5,
      image: product2,
      title: 'عینک آفتابی برند',
      category: 'fashion',
      price: '۲,۹۰۰,۰۰۰',
      description: 'عینک اورجینال با گارانتی اصالت',
    },
    {
      id: 6,
      image: product3,
      title: 'پک مراقبت پوست',
      category: 'beauty',
      price: '۴,۵۰۰,۰۰۰',
      description: 'محصولات حرفه‌ای مراقبت پوست',
    },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 pattern-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
            {t('products')}
          </h1>
          <p className="text-xl text-muted-foreground">
            محصولات لوکس از برترین برندهای دبی
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 animate-fade-in">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="جستجوی محصول..."
              className="pr-10 bg-card border-border focus:border-primary h-12"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold'
                  : 'border-primary/30 text-foreground hover:border-primary hover:bg-primary/10'
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all hover-scale shadow-elegant group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  جدید
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {product.price} تومان
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t('buyNow')}
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

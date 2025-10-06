import { Link } from 'react-router-dom';
import { Package, CheckCircle, Truck, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-dubai.jpg';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const Home = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Package,
      title: t('step1Title'),
      desc: t('step1Desc'),
    },
    {
      icon: CheckCircle,
      title: t('step2Title'),
      desc: t('step2Desc'),
    },
    {
      icon: Truck,
      title: t('step3Title'),
      desc: t('step3Desc'),
    },
  ];

  const products = [
    {
      id: 1,
      image: product1,
      title: 'الکترونیک لوکس',
      price: '۱۵,۰۰۰,۰۰۰',
    },
    {
      id: 2,
      image: product2,
      title: 'اکسسوری فشن',
      price: '۸,۵۰۰,۰۰۰',
    },
    {
      id: 3,
      image: product3,
      title: 'محصولات آرایشی',
      price: '۳,۲۰۰,۰۰۰',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden pattern-bg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Premium Quality</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-gold leading-tight">
            {t('heroTitle')}
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          
          <Link to="/request">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold shine-effect text-lg px-8 py-6 h-auto font-semibold"
            >
              {t('heroButton')}
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-gold">
          {t('stepsTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover-scale shadow-elegant group"
            >
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold">
              {t('productsTitle')}
            </h2>
            <Link to="/products">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                {t('viewAll')}
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all hover-scale shadow-elegant group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {product.price} تومان
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t('buyNow')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-gold">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {t('aboutText')}
          </p>
          <Link to="/about">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              بیشتر بدانید
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

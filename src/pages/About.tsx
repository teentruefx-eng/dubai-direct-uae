import { CheckCircle, Award, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: CheckCircle,
      title: 'تضمین کیفیت',
      desc: 'تمامی محصولات اورجینال و با گارانتی',
    },
    {
      icon: Award,
      title: 'قیمت مناسب',
      desc: 'بهترین قیمت‌ها مستقیم از دبی',
    },
    {
      icon: Users,
      title: 'پشتیبانی ۲۴/۷',
      desc: 'همیشه در کنار شما هستیم',
    },
    {
      icon: Globe,
      title: 'ارسال سریع',
      desc: 'ارسال به سراسر ایران',
    },
  ];

  return (
    <div className="min-h-screen py-20 pattern-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('aboutText')}
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-card border-primary/20 shadow-elegant animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-gradient-gold">
              ماموریت ما
            </h2>
            <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              ما با هدف ایجاد پلی امن و معتبر میان مشتریان ایرانی و بازارهای بین‌المللی، خدمات خود را آغاز کردیم.
              تیم ما متشکل از افرادی با تجربه در زمینه تجارت بین‌الملل است که با دقت و وسواس، بهترین محصولات را
              با مناسب‌ترین قیمت برای شما فراهم می‌کنند.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover-scale shadow-elegant group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 shadow-gold">
            <CardContent className="p-8 text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">
                +۵۰۰۰
              </div>
              <p className="text-lg text-muted-foreground">مشتری راضی</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 shadow-gold">
            <CardContent className="p-8 text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">
                +۱۰۰۰
              </div>
              <p className="text-lg text-muted-foreground">محصول فروخته شده</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 shadow-gold">
            <CardContent className="p-8 text-center">
              <div className="text-5xl font-bold text-gradient-gold mb-2">
                ۹۸٪
              </div>
              <p className="text-lg text-muted-foreground">رضایت مشتری</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;

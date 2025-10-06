import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'پیام ارسال شد!',
      description: 'به زودی با شما تماس خواهیم گرفت',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone'),
      value: '+971 50 123 4567',
      link: 'tel:+971501234567',
    },
    {
      icon: MessageCircle,
      title: t('whatsapp'),
      value: '+971 50 123 4567',
      link: 'https://wa.me/971501234567',
    },
    {
      icon: Mail,
      title: t('email'),
      value: 'info@dubaishop.com',
      link: 'mailto:info@dubaishop.com',
    },
    {
      icon: MapPin,
      title: 'آدرس',
      value: 'Dubai, UAE',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen py-20 pattern-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            سوالی دارید؟ ما آماده پاسخگویی به شما هستیم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all hover-scale shadow-elegant"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          dir="ltr"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground" dir="ltr">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30 shadow-gold">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">پشتیبانی واتساپ</h3>
                <p className="text-muted-foreground mb-6">
                  برای دریافت مشاوره رایگان با ما در واتساپ در تماس باشید
                </p>
                <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold w-full">
                    شروع گفتگو در واتساپ
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-elegant animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gradient-gold">
                فرم تماس
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">نام و نام خانوادگی</Label>
                  <Input
                    id="contact-name"
                    placeholder="نام خود را وارد کنید"
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">ایمیل</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="example@email.com"
                    className="bg-background border-border focus:border-primary"
                    dir="ltr"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">شماره تماس</Label>
                  <Input
                    id="contact-phone"
                    placeholder="09123456789"
                    className="bg-background border-border focus:border-primary"
                    dir="ltr"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">پیام</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="پیام خود را بنویسید..."
                    className="bg-background border-border focus:border-primary min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold h-12"
                >
                  ارسال پیام
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;

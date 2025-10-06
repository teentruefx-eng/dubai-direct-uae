import { useState } from 'react';
import { Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const RequestForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productDesc: '',
    budget: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.productDesc) {
      toast({
        title: 'خطا',
        description: 'لطفاً تمام فیلدهای الزامی را پر کنید',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'درخواست ثبت شد!',
      description: 'به زودی با شما تماس خواهیم گرفت',
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      productDesc: '',
      budget: '',
      address: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 pattern-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
              {t('formTitle')}
            </h1>
            <p className="text-xl text-muted-foreground">
              محصول موردنظر خود را شرح دهید و ما آن را برای شما تهیه می‌کنیم
            </p>
          </div>

          <Card className="bg-card border-border shadow-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient-gold">اطلاعات تماس</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    {t('name')} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">
                    {t('phone')} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="09123456789"
                    className="bg-background border-border focus:border-primary"
                    dir="ltr"
                    required
                  />
                </div>

                {/* Product Description */}
                <div className="space-y-2">
                  <Label htmlFor="productDesc" className="text-base">
                    {t('productDesc')} <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="productDesc"
                    name="productDesc"
                    value={formData.productDesc}
                    onChange={handleChange}
                    placeholder="توضیحات کامل محصول یا لینک آن را وارد کنید..."
                    className="bg-background border-border focus:border-primary min-h-[120px]"
                    required
                  />
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-base">
                    {t('budget')}
                  </Label>
                  <Input
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="مثلاً: ۵,۰۰۰,۰۰۰ تومان"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-base">
                    {t('address')}
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="آدرس کامل خود را وارد کنید..."
                    className="bg-background border-border focus:border-primary min-h-[100px]"
                  />
                </div>

                {/* Upload Image */}
                <div className="space-y-2">
                  <Label className="text-base">{t('uploadImage')}</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer bg-background/50">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      کلیک کنید یا تصویر را اینجا بکشید
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      PNG, JPG تا 5MB
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold shine-effect text-lg h-14 font-semibold"
                >
                  {t('submit')}
                  <Send className="mr-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-8 bg-secondary/50 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2 text-primary">بعد از ثبت درخواست چه اتفاقی می‌افتد؟</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ درخواست شما ظرف ۲۴ ساعت بررسی می‌شود</li>
                <li>✓ قیمت نهایی و زمان تحویل به شما اعلام می‌شود</li>
                <li>✓ پس از تأیید، سفارش ثبت و ارسال می‌شود</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;

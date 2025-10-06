import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fa' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations = {
  fa: {
    // Header
    home: 'خانه',
    request: 'ثبت درخواست',
    products: 'محصولات',
    about: 'درباره ما',
    contact: 'تماس با ما',
    
    // Hero
    heroTitle: 'هر کالایی از دبی بخواهید، برایتان می‌آوریم',
    heroSubtitle: 'از دبی تا درب خانه‌ات — با افتخار ایرانی',
    heroButton: 'ثبت درخواست خرید',
    freeShipping: 'ارسال رایگان برای سفارش‌های بالای ۵ میلیون تومان',
    
    // Steps
    stepsTitle: 'چطور سفارش می‌دهید؟',
    step1Title: 'ثبت درخواست',
    step1Desc: 'محصول موردنظر خود را توضیح دهید یا لینک آن را ارسال کنید',
    step2Title: 'تأیید و پرداخت',
    step2Desc: 'قیمت نهایی را دریافت کرده و پرداخت کنید',
    step3Title: 'تحویل درب منزل',
    step3Desc: 'کالای شما با ارسال سریع به دست شما می‌رسد',
    
    // Products
    productsTitle: 'محصولات پیشنهادی',
    viewAll: 'مشاهده همه محصولات',
    addToCart: 'افزودن به سبد',
    buyNow: 'خرید',
    
    // About
    aboutTitle: 'درباره ما',
    aboutText: 'ما پلی میان ایران و دبی هستیم، تا هر آنچه می‌خواهید را با افتخار ایرانی برایتان فراهم کنیم.',
    
    // Form
    formTitle: 'فرم ثبت درخواست',
    name: 'نام و نام خانوادگی',
    phone: 'شماره تماس',
    productDesc: 'توضیح کالا یا لینک محصول',
    budget: 'بودجه تقریبی (تومان)',
    address: 'آدرس تحویل',
    uploadImage: 'آپلود تصویر محصول',
    submit: 'ارسال درخواست',
    
    // Contact
    contactTitle: 'تماس با ما',
    whatsapp: 'پشتیبانی واتساپ',
    email: 'ایمیل',
    
    // Footer
    allRights: 'تمامی حقوق محفوظ است',
  },
  en: {
    // Header
    home: 'Home',
    request: 'Place Request',
    products: 'Products',
    about: 'About Us',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Any Product from Dubai, Delivered to You',
    heroSubtitle: 'From Dubai to Your Doorstep — With Iranian Pride',
    heroButton: 'Place Your Request',
    freeShipping: 'Free Shipping for Orders Over 5M Tomans',
    
    // Steps
    stepsTitle: 'How to Order?',
    step1Title: 'Request',
    step1Desc: 'Describe your product or send us the link',
    step2Title: 'Confirmation',
    step2Desc: 'Receive final price and make payment',
    step3Title: 'Home Delivery',
    step3Desc: 'Fast delivery right to your door',
    
    // Products
    productsTitle: 'Featured Products',
    viewAll: 'View All Products',
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    
    // About
    aboutTitle: 'About Us',
    aboutText: 'We are the bridge between Iran and Dubai, providing everything you want with Iranian pride.',
    
    // Form
    formTitle: 'Request Form',
    name: 'Full Name',
    phone: 'Phone Number',
    productDesc: 'Product Description or Link',
    budget: 'Approximate Budget (Toman)',
    address: 'Delivery Address',
    uploadImage: 'Upload Product Image',
    submit: 'Submit Request',
    
    // Contact
    contactTitle: 'Contact Us',
    whatsapp: 'WhatsApp Support',
    email: 'Email',
    
    // Footer
    allRights: 'All Rights Reserved',
  },
  ar: {
    // Header
    home: 'الرئيسية',
    request: 'تقديم طلب',
    products: 'المنتجات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    
    // Hero
    heroTitle: 'أي منتج من دبي، نوصله لك',
    heroSubtitle: 'من دبي إلى باب منزلك — بفخر إيراني',
    heroButton: 'قدم طلبك',
    freeShipping: 'شحن مجاني للطلبات فوق 5 مليون تومان',
    
    // Steps
    stepsTitle: 'كيف تطلب؟',
    step1Title: 'الطلب',
    step1Desc: 'صف المنتج أو أرسل لنا الرابط',
    step2Title: 'التأكيد',
    step2Desc: 'احصل على السعر النهائي وادفع',
    step3Title: 'التوصيل للمنزل',
    step3Desc: 'توصيل سريع حتى باب منزلك',
    
    // Products
    productsTitle: 'المنتجات المميزة',
    viewAll: 'عرض جميع المنتجات',
    addToCart: 'أضف للسلة',
    buyNow: 'اشتر الآن',
    
    // About
    aboutTitle: 'من نحن',
    aboutText: 'نحن الجسر بين إيران ودبي، نوفر كل ما تريد بفخر إيراني.',
    
    // Form
    formTitle: 'نموذج الطلب',
    name: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    productDesc: 'وصف المنتج أو الرابط',
    budget: 'الميزانية التقريبية (تومان)',
    address: 'عنوان التسليم',
    uploadImage: 'تحميل صورة المنتج',
    submit: 'إرسال الطلب',
    
    // Contact
    contactTitle: 'اتصل بنا',
    whatsapp: 'دعم واتساب',
    email: 'البريد الإلكتروني',
    
    // Footer
    allRights: 'جميع الحقوق محفوظة',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fa');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fa']] || key;
  };

  const dir = language === 'en' ? 'ltr' : 'rtl';

  useEffect(() => {
    // Set initial direction
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

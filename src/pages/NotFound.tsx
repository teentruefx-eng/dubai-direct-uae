import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center pattern-bg">
      <div className="text-center px-4 animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient-gold mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">صفحه یافت نشد</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است
          </p>
        </div>
        
        <Link to="/">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold shine-effect"
          >
            <Home className="ml-2 h-5 w-5" />
            بازگشت به خانه
            <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

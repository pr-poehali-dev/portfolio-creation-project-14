import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.includes('@')) {
      setEmailError('Введите корректный email');
      return;
    }
    
    setEmailError('');
    alert('Спасибо за обращение! Свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    'https://images.unsplash.com/photo-1519741497674-611481863552',
    'https://images.unsplash.com/photo-1502982899975-b62c3f88e82e',
    'https://images.unsplash.com/photo-1495364141860-b0d03eccd065',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-montserrat text-primary">PhotoArt</h1>
            <div className="flex gap-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h2 className="text-6xl font-bold font-montserrat text-foreground leading-tight">
              Запечатлим<br />каждый момент
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-open">
              Профессиональная фотосъемка для особенных событий вашей жизни
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contacts')}
              className="mt-8 text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold font-montserrat text-center mb-12 animate-fade-in">
            Портфолио
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img 
                  src={img} 
                  alt={`Фотография ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold font-montserrat text-center mb-12">
            Услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Camera" size={32} className="text-primary" />
                </div>
                <h4 className="text-2xl font-bold font-montserrat">Портретная съемка</h4>
                <p className="text-muted-foreground font-open">
                  Индивидуальные и семейные портреты в студии или на природе
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h4 className="text-2xl font-bold font-montserrat">Свадебная съемка</h4>
                <p className="text-muted-foreground font-open">
                  Полное сопровождение вашего особенного дня от подготовки до банкета
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Briefcase" size={32} className="text-primary" />
                </div>
                <h4 className="text-2xl font-bold font-montserrat">Корпоративные мероприятия</h4>
                <p className="text-muted-foreground font-open">
                  Фотосъемка бизнес-событий, конференций и корпоративов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/30 animate-fade-in">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl font-bold font-montserrat text-center mb-12">
            Свяжитесь со мной
          </h3>
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 font-open">Имя</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ваше имя"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-open">Email</label>
                  <Input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      setEmailError('');
                    }}
                    placeholder="your@email.com"
                    className={`w-full ${emailError ? 'border-destructive' : ''}`}
                  />
                  {emailError && (
                    <p className="text-destructive text-sm mt-1">{emailError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-open">Сообщение</label>
                  <Textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full text-lg py-6">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold font-montserrat mb-4">PhotoArt</h4>
              <p className="text-gray-300 font-open">
                Профессиональная фотография<br />с душой и вниманием к деталям
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold font-montserrat mb-4">Контакты</h4>
              <div className="space-y-2 font-open">
                <a href="tel:+79502855685" className="block text-gray-300 hover:text-primary transition-colors">
                  +7 (950) 285 56-85
                </a>
                <a href="mailto:myrlinmag@gmail.com" className="block text-gray-300 hover:text-primary transition-colors">
                  myrlinmag@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold font-montserrat mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="https://t.me/pupukaka228666" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://vk.com/id706646370" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Globe" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 font-open">
            © 2025 PhotoArt. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
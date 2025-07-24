import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const courseSections = [
    {
      title: "Профессиональная переподготовка",
      description: "Комплексные программы для смены специализации",
      icon: "GraduationCap",
      courses: [
        { name: "Терапия", duration: "520 часов", price: "45 000 ₽", students: 156 },
        { name: "Хирургия", duration: "520 часов", price: "52 000 ₽", students: 89 },
        { name: "Кардиология", duration: "520 часов", price: "48 000 ₽", students: 134 }
      ]
    },
    {
      title: "Повышение квалификации для врачей",
      description: "Актуализация знаний и новые методики лечения",
      icon: "Stethoscope", 
      courses: [
        { name: "Неотложная кардиология", duration: "72 часа", price: "18 000 ₽", students: 245 },
        { name: "Современная диагностика", duration: "108 часов", price: "22 000 ₽", students: 178 },
        { name: "Инфекционные заболевания", duration: "72 часа", price: "19 500 ₽", students: 198 }
      ]
    },
    {
      title: "Курсы для медсестер и фармацевтов",
      description: "Специализированное обучение среднего медперсонала",
      icon: "Heart",
      courses: [
        { name: "Клиническая фармакология", duration: "144 часа", price: "15 000 ₽", students: 267 },
        { name: "Сестринское дело в реанимации", duration: "144 часа", price: "16 500 ₽", students: 189 },
        { name: "Лекарственное обеспечение", duration: "108 часов", price: "14 000 ₽", students: 223 }
      ]
    }
  ];

  const accreditationSections = [
    {
      title: "Периодическая аккредитация врачей",
      description: "Подготовка к аккредитации по всем специальностям",
      icon: "Award",
      features: ["Тестирование", "Практические навыки", "Симуляционное обучение"]
    },
    {
      title: "Аккредитация медсестер и фармацевтов",
      description: "Комплексная подготовка среднего медперсонала",
      icon: "ShieldCheck",
      features: ["Базовая подготовка", "Специализированные модули", "Практические задания"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Icon name="Stethoscope" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">МедАккредитация</h1>
                <p className="text-sm text-slate-600">Центр медицинского образования</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-slate-700 hover:text-blue-600 transition-colors">Курсы</a>
              <a href="#accreditation" className="text-slate-700 hover:text-blue-600 transition-colors">Аккредитация</a>
              <a href="#reviews" className="text-slate-700 hover:text-blue-600 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Войти</Button>
            </nav>
            
            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                  <SheetDescription>
                    Навигация по сайту
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <a 
                    href="#courses" 
                    className="text-lg text-slate-700 hover:text-blue-600 transition-colors py-2 border-b border-slate-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Курсы
                  </a>
                  <a 
                    href="#accreditation" 
                    className="text-lg text-slate-700 hover:text-blue-600 transition-colors py-2 border-b border-slate-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Аккредитация
                  </a>
                  <a 
                    href="#reviews" 
                    className="text-lg text-slate-700 hover:text-blue-600 transition-colors py-2 border-b border-slate-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Отзывы
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg text-slate-700 hover:text-blue-600 transition-colors py-2 border-b border-slate-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Button className="bg-blue-600 hover:bg-blue-700 mt-4">
                    Войти
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Современное медицинское <span className="text-blue-600">образование</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Повышение квалификации, переподготовка и аккредитация медицинских работников 
              с использованием передовых технологий обучения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-blue-200 hover:bg-blue-50">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "2,547", label: "Выпускников", icon: "Users" },
              { number: "156", label: "Курсов", icon: "BookOpen" },
              { number: "98%", label: "Успешная аккредитация", icon: "TrendingUp" },
              { number: "24/7", label: "Поддержка", icon: "Clock" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} className="text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Образовательные программы</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Выберите направление обучения, соответствующее вашей специализации
            </p>
          </div>

          <div className="space-y-16">
            {courseSections.map((section, sectionIndex) => (
              <div 
                key={sectionIndex} 
                id={`course-section-${sectionIndex}`}
                data-animate
                className={`transition-all duration-700 ${
                  isVisible[`course-section-${sectionIndex}`] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={section.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-800">{section.title}</h4>
                    <p className="text-slate-600">{section.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.courses.map((course, courseIndex) => (
                    <Card key={courseIndex} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg text-slate-800">{course.name}</CardTitle>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            {course.duration}
                          </Badge>
                        </div>
                        <CardDescription>
                          {course.students} студентов изучают курс
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-slate-600">Прогресс набора</span>
                              <span className="text-sm font-medium text-slate-800">
                                {Math.floor(Math.random() * 40) + 60}%
                              </span>
                            </div>
                            <Progress value={Math.floor(Math.random() * 40) + 60} className="h-2" />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-slate-800">{course.price}</span>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  size="sm" 
                                  className="bg-blue-600 hover:bg-blue-700"
                                  onClick={() => setSelectedCourse({...course, section: section.title})}
                                >
                                  Записаться
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>Запись на курс</DialogTitle>
                                  <DialogDescription>
                                    Заполните форму для записи на курс "{course.name}"
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                      Имя
                                    </Label>
                                    <Input id="name" placeholder="Ваше имя" className="col-span-3" />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">
                                      Email
                                    </Label>
                                    <Input id="email" type="email" placeholder="your@email.com" className="col-span-3" />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="phone" className="text-right">
                                      Телефон
                                    </Label>
                                    <Input id="phone" placeholder="+7 (999) 123-45-67" className="col-span-3" />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="specialty" className="text-right">
                                      Специальность
                                    </Label>
                                    <Select>
                                      <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Выберите специальность" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="doctor">Врач</SelectItem>
                                        <SelectItem value="nurse">Медсестра</SelectItem>
                                        <SelectItem value="pharmacist">Фармацевт</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="comment" className="text-right">
                                      Комментарий
                                    </Label>
                                    <Textarea id="comment" placeholder="Дополнительная информация" className="col-span-3" />
                                  </div>
                                </div>
                                <div className="flex justify-end gap-2">
                                  <Button variant="outline">Отмена</Button>
                                  <Button className="bg-blue-600 hover:bg-blue-700">
                                    Записаться на курс
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">🎯 Академия Медицинского Образования</h3>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Ваш ключ к успеху в профессии! Мы понимаем, насколько важно своевременно повышать 
              свою квалификацию и оставаться востребованным специалистом в быстро меняющемся медицинском мире.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-slate-900 rounded-2xl p-8 aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20"></div>
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                    <Icon name="Play" size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-lg text-white/90">Презентация Академии</p>
                  <p className="text-sm text-white/70">Узнайте о наших достижениях</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600 text-white">● LIVE</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-bold mb-4">💥 Почему выбирают нашу академию?</h4>
                <div className="space-y-3">
                  {[
                    "✔️ Опыт более 15 лет в медицинском образовании",
                    "✔️ Удобство обучения в любое время и в любом месте",
                    "✔️ Гибкость учебных планов под ваш график",
                    "✔️ Уникальные авторские методики от практиков",
                    "✔️ Сертификация согласно требованиям Минздрава РФ",
                    "✔️ Поддержка экспертов на каждом этапе"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">{item.split(' ')[0]}</span>
                      <span>{item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-3">🛠️ Наши достижения:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-400">15,000+</div>
                    <div className="text-sm">выпускников ежегодно</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-400">33%</div>
                    <div className="text-sm">становятся экспертами</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Присоединиться к команде
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Отзывы наших выпускников</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Истории успеха медицинских работников, которые доверили нам своё профессиональное развитие
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                specialty: "Врач-кардиолог",
                avatar: "👩‍⚕️",
                rating: 5,
                text: "Прошла курс по неотложной кардиологии. Материал изложен очень доступно, много практических примеров. Уже применяю новые знания в работе. Рекомендую!",
                course: "Неотложная кардиология"
              },
              {
                name: "Михаил Сидоров", 
                specialty: "Врач-хирург",
                avatar: "👨‍⚕️",
                rating: 5,
                text: "Переподготовка по хирургии превзошла все ожидания. Отличные преподаватели-практики, современные методики. Получил новую специальность за 4 месяца.",
                course: "Профессиональная переподготовка"
              },
              {
                name: "Елена Козлова",
                specialty: "Медицинская сестра",
                avatar: "👩‍⚕️", 
                rating: 5,
                text: "Курс по сестринскому делу в реанимации помог систематизировать знания и изучить новые протоколы. Аккредитацию прошла с отличием!",
                course: "Сестринское дело в реанимации"
              },
              {
                name: "Дмитрий Волков",
                specialty: "Врач-терапевт",
                avatar: "👨‍⚕️",
                rating: 5,
                text: "Удобный формат онлайн-обучения позволил совмещать учёбу с работой. Качество материалов на высоте, поддержка кураторов - отличная.",
                course: "Повышение квалификации"
              },
              {
                name: "Ольга Морозова",
                specialty: "Фармацевт",
                avatar: "👩‍⚕️",
                rating: 5,
                text: "Курс по клинической фармакологии дал глубокие знания о современных препаратах. Теперь могу консультировать пациентов более профессионально.",
                course: "Клиническая фармакология"
              },
              {
                name: "Сергей Новиков",
                specialty: "Врач-инфекционист", 
                avatar: "👨‍⚕️",
                rating: 5,
                text: "В условиях пандемии этот курс стал особенно актуален. Изучил современные подходы к диагностике и лечению инфекционных заболеваний.",
                course: "Инфекционные заболевания"
              }
            ].map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{review.avatar}</div>
                    <div>
                      <CardTitle className="text-lg text-slate-800">{review.name}</CardTitle>
                      <CardDescription>{review.specialty}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 w-fit">
                    {review.course}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section id="accreditation" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Периодическая аккредитация</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Комплексная подготовка к аккредитации медицинских работников
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accreditationSections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon name={section.icon} size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{section.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-3" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Подготовиться к аккредитации
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">Свяжитесь с нами</h3>
              <p className="text-xl text-slate-300 mb-8">
                Получите персональную консультацию по выбору образовательной программы
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Phone", text: "+7 (495) 123-45-67" },
                  { icon: "Mail", text: "info@medaccreditation.online" },
                  { icon: "MapPin", text: "Москва, ул. Медицинская, 15" },
                  { icon: "Clock", text: "Пн-Пт: 9:00-18:00" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name={contact.icon} size={20} className="text-blue-400 mr-4" />
                    <span className="text-slate-300">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold text-slate-800 mb-6">Получить консультацию</h4>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Ваш вопрос" 
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Icon name="Stethoscope" size={20} className="text-white" />
              </div>
              <span className="text-white font-semibold">МедАккредитация</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 МедАккредитация. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
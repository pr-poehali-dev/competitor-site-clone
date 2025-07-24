import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
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
              <a href="#contacts" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Войти</Button>
            </nav>
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
              <div key={sectionIndex} className="animate-fade-in">
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
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              Записаться
                            </Button>
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
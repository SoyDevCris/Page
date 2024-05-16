import React from "react";
import {
  Bot,
  Database,
  LayoutPanelLeft,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: <LayoutPanelLeft size={72} strokeWidth={0.8} />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web y aplicaciones móviles personalizados para dar vida a tus ideas digitales. Desde la concepción hasta la implementación, trabajo contigo para crear soluciones atractivas y funcionales",
  },
  {
    icon: <Bot size={72} strokeWidth={0.8} />,
    title: "RPA",
    description:
      "Automatización inteligente para simplificar tus procesos empresariales. Utilizo la tecnología RPA para liberarte de tareas repetitivas y aumentar la eficiencia de tu negocio, permitiéndote enfocarte en lo que realmente importa: hacer crecer tu empresa.",
  },
  {
    icon: <Database size={72} strokeWidth={0.8} />,
    title: "Analisis de datos",
    description:
      "Transformación de datos en conocimientos significativos que impulsan tu toma de decisiones. Con experiencia en análisis avanzado y visualización de datos",
  },
  {
    icon: <Users size={72} strokeWidth={0.8} />,
    title: "Consultorías",
    description:
      "Ofrezco consultorías personalizadas para ayudarte a alcanzar tus metas digitales. Ya sea que necesites orientación estratégica, asesoramiento técnico o apoyo en la implementación, estoy aquí para colaborar contigo en cada paso del camino hacia el éxito.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Mis Servicios
        </h2>
        <div className="grid xl:grid-cols-4 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              key={index}
            >
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[88px] bg-white dark:bg-background flex justify-center items-center">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

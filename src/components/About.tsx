import React from 'react';
import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

interface InfoItem {
  icon: JSX.Element;
  text: string;
}

interface QualificationItem {
  university?: string;
  qualification?: string;
  years?: string;
  company?: string;
  role?: string;
}

interface SkillItem {
  name?: string;
  imgPath?: string;
}

const infoData: InfoItem[] = [
  { icon: <User2 size={20} />, text: 'Cristian Camilo' },
  { icon: <PhoneCall size={20} />, text: '+57 3023017673' },
  { icon: <MailIcon size={20} />, text: 'SoyDevCris@gmail.com' },
  { icon: <Calendar size={20} />, text: 'Nacimiento: 19/12/2000' },
  { icon: <HomeIcon size={20} />, text: 'Calle 53 # 46-28' },
];

const qualificationData: { title: string; data: QualificationItem[] }[] = [
  {
    title: 'educacion',
    data: [
      {
        university: 'Universidad de envigado',
        qualification: 'Tecnologo en informatica',
        years: ' Agosto 2020 - Actual',
      },
      {
        university: 'Universidad de Medellín',
        qualification: 'Analista de datos',
        years: 'Mayo 2022 - Julio 2022',
      },
      {
        university: 'Universidad del norte',
        qualification: 'desarrollador web',
        years: 'Febrero 2020 - Noviembre 2024',
      },
    ],
  },
  {
    title: 'experiencia',
    data: [
      {
        company: 'Konecta',
        role: 'Desarrollador Rpa',
        years: 'Mayo 2020 - Julio 2023',
      },
      {
        company: 'Wolkvox',
        role: 'Analyst  Developer middle',
        years: 'Agosto 2023 - Abril 2024',
      },
    ],
  },
];

const skillData: { title: string; data: SkillItem[] }[] = [
  {
    title: 'Habilidades',
    data: [
      { name: '- Python, JavaScript, Java, C#' },
      { name: '- Power bi, Excel, SQL, NoSQL' },
      { name: '- React, Vue.js, .NET' },
      { name: '- Metodologías ágiles' },
      { name: '- Comunicación efectiva' },
    ],
  },
  {
    title: 'Herramientas',
    data: [
      { imgPath: '/about/vscode.svg' },
      { imgPath: '/about/git.svg' },
      { imgPath: '/about/Power-bi.svg' },
      { imgPath: '/about/Trello.svg' },
      { imgPath: '/about/React.svg' },
      { imgPath: '/about/Net.svg' },
      { imgPath: '/about/Java.svg' },
    ],
  },
];

const About: React.FC = () => {
  const getData = (arr: { title: string; data: any[] }[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Sobre mi</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  informacion personal
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                  Experiencia
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Habilidades
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Cuatro años ofreciendo calidad de servicio excepcional.
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Me especializo en la creación de soluciones intuitivas con tecnología de
                      vanguardia, brindando experiencias de usuario dinámicas y atractivas.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Idiomas</div>
                      <div className="border-b border-border"></div>
                      <div>Españo, Ingles,Portugués</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">Mi increíble viaje</h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'experiencia')?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experiencia')?.data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'educacion')?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'educacion')?.data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Herramientas que uso</h3>

                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Habilidades</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, 'Habilidades')?.data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="text xl font-semibold mb-2 xl:text-left">Herramientas</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, 'Herramientas')?.data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image src={imgPath} width={48} height={48} alt="" priority />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


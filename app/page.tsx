'use client';
import { Lightbulb, Rocket, Settings, Wrench, ChevronRight, Cpu, Brain } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-800" />
        <div className="absolute inset-0">

          <div className="flex justify-center items-center pt-48">
            <Image
               src="/logo/logo_white.png"
               alt="Logo"
               width={125}
               height={125}
            />
          </div>

          <Image
            src="/background_team.png"
            alt="Makerspace"
            fill
            className="object-cover mix-blend-overlay opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Grupo de Iniciação Maker
          </h1>

          <p className="text-xl mb-8 text-zinc-300 max-w-2xl mx-auto">
            Transformando ideias em projetos voltados a competições de robótica
          </p>

          <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center gap-2 group">
            Comece sua jornada
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <section className="py-24 bg-zinc-900">

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">O que fazemos?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Possuímos um espaço dedicado à inovação e o desenvolvimento dos projetos, através do Laboratório de Automação e Robótica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                icon: <Wrench className="w-8 h-8" />,
                title: 'Prototipagem',
                description: 'Acesso a impressoras 3D, cortadoras laser e ferramentas de prototipagem rápida',
              },

              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Robótica',
                description: 'Desenvolvimento de projetos com Arduino, Raspberry Pi, ESP-32 e outros microcontroladores',
              },

              {
                icon: <Cpu className="w-8 h-8" />,
                title: 'Eletrônica',
                description: 'Criação de circuitos, soldagem e desenvolvimento de placas PCB',
              },

            ].map((feature, index) => (
              <div key={index} className="bg-zinc-800 p-8 rounded-xl hover:bg-zinc-700 transition-colors">
                <div className="text-zinc-300 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nossa Equipe</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Conheça os membros que fazem parte do projeto
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Orivaldo Santana',
                role: 'Coordenador',
                image: '/orivaldo.jpeg',
              },
              {
                name: 'Siria Cabral',
                role: 'Líder',
                image: '/siria.jpeg',
              },
              {
                name: 'Luis Martins',
                role: 'Desenvolvedor',
                image: '/luis.jpg',
              },
              {
                name: 'Haina',
                role: 'Hardware',
                image: '/haina.jpeg',
              },
              {
                name: 'Gabriel Bitencourt',
                role: 'Hardware',
                image: '/gabriel_bitencourt.jpeg',
              },
              {
                name: 'Gabriel Sebastião',
                role: 'Hardware',
                image: '/gabriel_sebastiao.jpeg',
              },
              {
                name: 'Teo Neto',
                role: 'Hardware',
                image: '/teo.jpeg'
              }

            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-zinc-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Pista com obstáculos',
                description: 'Desenvolvimento de pistas com obstáculos para robôs',
                image: '/pista.jpg',
              },
              {
                title: 'Seguidor de Linha',
                description: 'Robô que anda de forma automática seguindo uma linha',
                image: '/seguidor_linha.jpg',
              },
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-zinc-900">
                <div className="relative h-[300px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Lightbulb className="w-16 h-16 text-zinc-300" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Faça parte da nossa comunidade</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            Junte-se a outros makers, compartilhe conhecimento, desenvolva projetos inovadores e participe de competições de robótica
          </p>
          <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
            Inscreva-se
            <Rocket className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <Settings className="w-6 h-6" />
                <span className="font-bold text-xl">Laboratório de Automação e Robótica</span>
              </div>
              <p className="text-zinc-500">
                Espaço dedicado à inovação e criatividade tecnológica
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Equipamentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projetos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Github</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>Laboratório de Automação e Robótica (LAR)</li>
                <li>lar@ect.ufrn.br</li>
                <li>(84) 3342 – 2301</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Horário</h4>
              <ul className="space-y-2">
                <li>Segunda à Sexta</li>
                <li>09:00 - 20:25</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
            <p>&copy; 2025 Grupo de Iniciação Maker (GIM)</p>
            <p>Desenvolvido por Luis Martins.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
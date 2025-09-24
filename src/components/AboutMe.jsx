
const AboutMe = () => {
    return (
        <div className="p-6 text-gray-200">
          <h1 className="text-3xl font-bold mb-6 text-cyan-300 drop-shadow-[0_0_8px_#0ff]">About Me</h1>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Привет! Я разработчик, который создает интерактивные веб-приложения и игры. 
              Мой опыт включает работу с современными технологиями веб-разработки.
            </p>
            <div className="bg-[#2A1240] p-4 rounded-lg border border-cyan-300/20">
              <h2 className="text-xl font-semibold mb-3 text-cyan-300">Навыки</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></span>
                  React & JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></span>
                  Phaser.js для игр
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></span>
                  CSS & Tailwind
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></span>
                  Vite & современные инструменты
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
};

export default AboutMe;

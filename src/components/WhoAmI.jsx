
const WhoAmI = () => {
    return (
        <div className="p-6 text-gray-200">
          <h1 className="text-3xl font-bold mb-6 text-cyan-300 drop-shadow-[0_0_8px_#0ff]">Who Am I</h1>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Разработчик с страстью к созданию интерактивных веб-приложений и игр. 
              Люблю изучать новые технологии и создавать что-то интересное.
            </p>
            <div className="bg-[#2A1240] p-4 rounded-lg border border-cyan-300/20">
              <h2 className="text-xl font-semibold mb-3 text-cyan-300">Контакты</h2>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://github.com/Velzewu1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <span className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></span>
                    GitHub: Velzewu1
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:your-email@example.com" 
                    className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <span className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></span>
                    Email: your-email@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
};

export default WhoAmI;

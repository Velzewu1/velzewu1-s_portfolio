import React from "react";

const AboutMe = () => {
  return (
    <div className="p-6 h-[400px] overflow-y-auto scrollbar-hide">
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4">
        This is the full about page with more details about my background,
        projects, and experience.
      </p>
      {/* Добавьте больше контента для демонстрации прокрутки */}
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, nulla a feugiat sollicitudin, nisi lectus maximus dui, quis suscipit nisi felis vitae dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin malesuada augue non nisi sollicitudin, eget suscipit nibh vehicula.
      </p>
      <p className="mt-4">
        Suspendisse potenti. Quisque vitae risus vel augue interdum suscipit. Praesent ac nibh vel nisl fermentum scelerisque. Sed porttitor erat ut enim faucibus, a tristique sapien luctus.
      </p>
      {/* Повторите контент, чтобы обеспечить наличие прокрутки */}
    </div>
  );
};

export default AboutMe;

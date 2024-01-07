type Tracker = {
  greet: string[];
  sayHello: string[];
  sayBye: string[];
  all: string[];
};

type TrackerInject = {
  greet: (greetMsg?: string) => TrackerInject;
  sayHello: (helloMsg?: string) => TrackerInject;
  sayBye: (byeMsg?: string) => TrackerInject;
  generate: () => string;
};

const buildGreeting = function (name: string): TrackerInject {
  function trackerInject(trackerArg: Tracker): TrackerInject {
    return {
      greet: function (greetMsg = ""): TrackerInject {
        const a: string = `Greetings!${greetMsg} ${name}`;
        trackerArg.greet.push(a);
        trackerArg.all.push(a);
        return this;
      },
      sayHello: function (helloMsg = ""): TrackerInject {
        const a: string = `Hello!${helloMsg} ${name}`;
        trackerArg.sayHello.push(a);
        trackerArg.all.push(a);
        return this;
      },
      sayBye: function (byeMsg = ""): TrackerInject {
        const a: string = `Bye${byeMsg} ${name}`;
        trackerArg.sayBye.push(a);
        trackerArg.all.push(a);
        return this;
      },
      generate: function (): string {
        return trackerArg.all.join(". ");
      },
    };
  }

  const tracker: Tracker = { greet: [], sayHello: [], sayBye: [], all: [] };
  return trackerInject(tracker);
};

const out: string = buildGreeting("ronish")
  .greet(" firstas")
  .sayHello(" first")
  .sayBye(" 1st bye")
  .sayBye(" 2nd bye")
  .sayHello(" second")
  .greet(" second")
  .generate();

console.log(out);

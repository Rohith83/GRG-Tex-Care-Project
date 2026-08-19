import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

import MachineryCard from './MachineryCard.jsx';

import ringFrame from '../assets/machines/ring-frame.png';
import openedSpinning from '../assets/machines/opened-spinning.png';
import autoConer from '../assets/machines/auto-coner.png';
import blowroom from '../assets/machines/blowroom.png';
import comber from '../assets/machines/comber.png';
import balePlucker from '../assets/machines/bale-plucker.png';
import speedFrame from '../assets/machines/speed-frame.png';
import carding from '../assets/machines/carding.png';
import drawFrame from '../assets/machines/draw-frame.png';
import lapFormer from '../assets/machines/lap-former.png';


const MACHINES = [
  {
    name: 'Ring Frame',
    image: ringFrame,
  },
  {
    name: 'Opened Spinning',
    image: openedSpinning,
  },
  {
    name: 'Auto Coner',
    image: autoConer,
  },
  {
    name: 'Blowroom',
    image: blowroom,
  },
  {
    name: 'Comber',
    image: comber,
  },
  {
    name: 'Bale Plucker',
    image: balePlucker,
  },
  {
    name: 'Speed Frame',
    image: speedFrame,
  },
  {
    name: 'Carding',
    image: carding,
  },
  {
    name: 'Draw Frame',
    image: drawFrame,
  },
  {
    name: 'Lap Former',
    image: lapFormer,
  },
];


const VISIBLE_COUNT = 5;


const Machinery = forwardRef(function Machinery(_, ref) {
  const [expanded, setExpanded] = useState(false);

  const sectionRef = useRef(null);


  /*
   * Hero → Explore Services
   *
   * Expands the machinery section and
   * smoothly scrolls to it.
   */
  useImperativeHandle(ref, () => ({
    expandAndScroll() {
      setExpanded(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        });
      });
    },
  }));


  const handleToggle = () => {
    setExpanded((current) => !current);
  };


  return (
    <section
      ref={sectionRef}
      id="machinery"
      className="
        py-14
        px-5
        md:px-8
        scroll-mt-20
      "
    >

      <div className="max-w-[1615px] mx-auto">


        {/* =========================
            HEADING
        ========================== */}

        <div className="text-center max-w-[560px] mx-auto">

          <h2
            className="
              text-[26px]
              md:text-[32px]
              font-extrabold
              text-dark
              leading-tight
            "
          >
            Textile Machinery
            <br />
            We Work With
          </h2>

          <p
            className="
              mt-5
              text-[14px]
              md:text-[15px]
              text-muted
              leading-relaxed
            "
          >
            Specialized erection and service for leading textile
            machinery brands.
          </p>

        </div>


        {/* =========================
            MACHINERY GRID
        ========================== */}

        <div className="mt-10 flex justify-center">

          <div
            className="
              grid
              w-full
              max-w-[1250px]

              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5

              gap-4
              sm:gap-5
            "
          >

            {MACHINES.map((machine, index) => {

              const isExtra = index >= VISIBLE_COUNT;

              return (
                <div
                  key={machine.name}
                  className={`
                    overflow-hidden

                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      isExtra
                        ? expanded
                          ? `
                            max-h-[500px]
                            opacity-100
                            translate-y-0
                          `
                          : `
                            max-h-0
                            opacity-0
                            -translate-y-4
                          `
                        : `
                          max-h-[600px]
                          opacity-100
                          translate-y-0
                        `
                    }
                  `}
                >

                  <MachineryCard
                    name={machine.name}
                    image={machine.image}
                  />

                </div>
              );
            })}

          </div>

        </div>


        {/* =========================
            EXPLORE / SHOW LESS
        ========================== */}

        <div
          className="
            mt-10
            flex
            justify-center
          "
        >

          <button
            type="button"
            onClick={handleToggle}
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-full

              bg-dark-2
              text-cream
              border
              border-dark-2

              text-[14px]
              font-semibold

              px-6
              py-3

              cursor-pointer

              transition-all
              duration-300

              hover:bg-white
              hover:text-dark-2

              active:scale-[0.97]
            "
          >

            <span>
              {expanded ? 'Show Less' : 'Explore More'}
            </span>

            <span
              className="
                flex
                items-center
                justify-center
                transition-transform
                duration-300
              "
            >
              {expanded ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </span>

          </button>

        </div>

      </div>

    </section>
  );
});


export default Machinery;
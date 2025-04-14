<script lang="ts">
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { ic } from "../stores/ic";
  import image_1 from "$lib/images/project_1.jpg";
  import image_2 from "$lib/images/project_2.jpg";
  import image_3 from "$lib/images/project_3.png";
  import image_4 from "$lib/images/project_4.jpg";
  import image_5 from "$lib/images/project_5.jpg";
  import image_6 from "$lib/images/project_6.jpg";
  import image_7 from "$lib/images/project_7.jpg";
  import image_8 from "$lib/images/project_8.jpg";
  import image_9 from "$lib/images/project_9.jpg";
  import my_face from "$lib/images/mukha_ko.jpg";
  import bg from "$lib/images/Aura.webm";
  let greeting = $state("");

  let totalVisitor = $state();

  onMount(async () => {
    try {
      const greeting = await $ic.actor.totalNum(); // Get the result
      console.log(greeting); // Log the response from `totalNum`
    } catch (error) {
      console.error("Error calling totalNum:", error); // Log any errors
    }
  });

  // Projects data
  const projects = [
    {
      id: 1,
      link: "https://weather-db-five.vercel.app/",
      title: "DYCI DELIGHT Food App",
      description:
        "A Food Application Inside the School Ordering food effortless and delivered to specific classroom",
      image: image_1,
      tech: ["Flutter", "Firebase", "Android"],
    },
    {
      id: 2,
      link: "https://weather-db-five.vercel.app/",
      title: "AI Corn Detector Collaboration Project",
      description: "AI Corn Quality Detector",
      image: image_2,
      tech: ["Flutter", "Machine Learning", "Firebase", "Android"],
    },
    {
      id: 3,
      link: "https://weather-db-five.vercel.app/",
      title: "Weather Historical Dashboard 2022",
      description:
        "Using Snowflake Fetching Data all Records and build visual output",
      image: image_3,
      tech: ["Svelte", "Typescript", "snowflake", "Vercel"],
    },
    {
      id: 4,
      link: "https://weather-db-five.vercel.app/",
      title: "Church Management System With Livestream",
      description:
        "A livestream Webapplication exclusive to the Church Members",
      image: image_4,
      tech: ["Svelte", "Tailwind CSS", "Vercel", "Supabase"],
    },

    {
      id: 5,
      link: "https://weather-db-five.vercel.app/",
      title: "Fitness Application",
      description:
        "Fitness Application Tracker for the students interaction between students and instructor",
      image: image_5,
      tech: ["Flutter", "Firebase", "Android"],
    },

    {
      id: 6,
      link: "https://weather-db-five.vercel.app/",
      title: "Minimal Culture ",
      description:
        "An E-Commerce Application that could custom frames features",
      image: image_6,
      tech: ["Flutter", "Firebase", "Android"],
    },

    {
      id: 7,
      link: "https://weather-db-five.vercel.app/",
      title: "APARTEM",
      description: "A Desktop and Android Apartment Management System",
      image: image_7,
      tech: ["Flutter", "Firebase", "Android", "Windows"],
    },

    {
      id: 8,
      link: "https://weather-db-five.vercel.app/",
      title: "PUP EXAMINATION PORTAL",
      description:
        "PUP EXAMINATION Management with Built In Compiler for Tech People",
      image: image_8,
      tech: ["Sveltekit ", "Typescript", "Supabase", "One Code Compiler"],
    },

    {
      id: 9,
      link: "https://weather-db-five.vercel.app/",
      title: "Devcon JumpStart Internship",
      description: "Wordpress Site Jumpstart Interrnship ",
      image: image_9,
      tech: ["Sveltekit ", "Typescript", "Supabase", "One Code Compiler"],
    },
  ];

  // Skills data organized by categories without percentages
  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Svelte",
      "Vue.js",
      "Tailwind CSS",
      "SASS/SCSS",
      "Responsive Design",
    ],
    backend: ["Node.js", "Express", "JAVA", "RESTful APIs"],
    design: ["Figma", "Adobe Photoshop", "Wireframing", "Prototyping"],
    database: ["PostgreSQL", "MySQL", "Firebase", "Snowflake"],
    Mobile: ["Flutter", "JAVA", "Kotlin"],
  };

  onMount(() => {
    if (window.innerWidth > 768) {
      const parallaxSections = document.querySelectorAll(".parallax");

      window.addEventListener("scroll", () => {
        parallaxSections.forEach((section) => {
          const distance = window.scrollY;
          // @ts-ignore
          section.style.backgroundPositionY = `${distance * 0.5}px`;
        });
      });
    }

    const flowbiteScript = document.createElement("script");
    flowbiteScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js";
    document.body.appendChild(flowbiteScript);
  });

  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<main class="bg-gray-100 dark:bg-gray-900">
  <header
    class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed w-full z-50"
  >
    <nav
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="flex items-center space-x-3">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Al Jon Jimenez</span
        >
      </a>
      <button
        onclick={toggleMobileMenu}
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="{mobileMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700"
        >
          <li>
            <a
              href="#home"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >About</a
            >
          </li>
          <li>
            <a
              href="#skills"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Skills</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Projects</a
            >
          </li>

          <li>
            <a
              href="#contact"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <!-- Hero Section with Parallax -->
  <section
    id="home"
    class="relative h-screen flex items-center justify-center pt-16 overflow-hidden"
  >
    <!-- Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoplay
      muted
      loop
      playsinline
    >
      <source src={bg} type="video/webm" />
      Your browser does not support the video tag.
    </video>
    <div
      class="text-center text-white p-6 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg max-w-3xl"
    >
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Al Jon Jimenez</h1>
      <p class="text-xl md:text-2xl mb-6">Full Stack Developer</p>
      <a
        href="#contact"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Get in touch
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 dark:text-white">
        About Me
      </h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={my_face}
            alt="Profile Image"
            class="rounded-lg shadow-lg mx-auto w-full max-w-md"
          />
        </div>
        <div>
          <p class="text-lg mb-6 dark:text-gray-300">
            I'm a passionate freelance Full Stack Developer with 1+ year of
            experience crafting beautiful, functional, and user-centered digital
            experiences. I combine technical expertise with creative
            problem-solving to build innovative web applications.
          </p>
          <p class="text-lg mb-6 dark:text-gray-300">
            My approach to development is holistic - I believe in creating
            solutions that not only meet technical requirements but also enhance
            user experience and achieve business goals.
          </p>
          <p class="text-lg mb-6 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying outdoor
            activities.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://github.com/aljon-dev"
              class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              GitHub
            </a>
            <a
              href="#"
              class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  clip-rule="evenodd"
                />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="py-20 px-4 md:px-8 bg-gray-100 dark:bg-gray-900">
    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 dark:text-white">
        Skills & Expertise
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Frontend Skills -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            Frontend Development
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each skills.frontend as skill}
              <span
                class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >{skill}</span
              >
            {/each}
          </div>
        </div>

        <!-- Backend Skills -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-bold mb-4 text-green-600 dark:text-green-400">
            Backend Development
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each skills.backend as skill}
              <span
                class="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300"
                >{skill}</span
              >
            {/each}
          </div>
        </div>

        <!-- Design Skills -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3
            class="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400"
          >
            Design
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each skills.design as skill}
              <span
                class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-purple-900 dark:text-purple-300"
                >{skill}</span
              >
            {/each}
          </div>
        </div>

        <!-- Database Skills -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3
            class="text-xl font-bold mb-4 text-yellow-600 dark:text-yellow-400"
          >
            Database
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each skills.database as skill}
              <span
                class="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300"
                >{skill}</span
              >
            {/each}
          </div>
        </div>

        <!-- DevOps Skills -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
            Mobile Development
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each skills.Mobile as skill}
              <span
                class="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-red-900 dark:text-red-300"
                >{skill}</span
              >
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section with Parallax -->
  <section
    id="projects"
    class="parallax py-20 px-4 md:px-8 text-white"
    style="background-image: url('');"
  >
    <div
      class="max-w-screen-xl mx-auto bg-black bg-opacity-70 backdrop-blur-sm p-8 rounded-lg"
    >
      <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>

      <div class="grid md:grid-cols-2 gap-8">
        {#each projects as project}
          <div
            class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{project.title}</h3>
              <p class="text-gray-300 mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.tech as tech}
                  <span
                    class="bg-blue-600 bg-opacity-30 text-white text-xs font-medium px-2.5 py-0.5 rounded"
                    >{tech}</span
                  >
                {/each}
              </div>
              <div class="flex justify-between">
                <a
                  href="#"
                  class="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  View Details
                  <svg
                    class="w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  View
                  <svg
                    class="w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <div class="text-center mt-10">
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-blue-700 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"
        >
          View GitHub
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 px-4 md:px-8 bg-gray-100 dark:bg-gray-900">
    <div class="max-w-screen-md mx-auto">
      <h2 class="text-3xl font-bold text-center mb-4 dark:text-white">
        Get In Touch
      </h2>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-8">
        Have a project in mind or want to discuss a potential collaboration?
        Reach out to me!
      </p>

      <form class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your Name</label
            >
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Al Jon Jimenez"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your Email</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ajimenez@devcon.ph"
              required
            />
          </div>
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Subject</label
          >
          <input
            type="text"
            id="subject"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Project Inquiry"
            required
          />
        </div>
        <div>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your Message</label
          >
          <textarea
            id="message"
            rows="6"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Send Message</button
        >
      </form>

      <div class="mt-12 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div
            class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300 mb-4"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-2 dark:text-white">Phone</h3>
          <p class="text-gray-600 dark:text-gray-400">+63 (935) 778-7583</p>
        </div>
        <div>
          <div
            class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300 mb-4"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

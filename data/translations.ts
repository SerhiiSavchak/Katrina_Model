export type Locale = "en" | "ua"

export const defaultLocale: Locale = "en"

export const STORAGE_KEY = "kd-locale"

export type PortfolioCategoryKey =
  | "All"
  | "Fashion"
  | "Studio"
  | "Beauty"
  | "Art Nude"
  | "Editorial"

export const translations = {
  en: {
    common: {
      swipeHint: "Swipe for more",
    },
    ui: {
      close: "Close",
      next: "Next",
      previous: "Previous",
      details: "Details",
    },
    nav: {
      portfolio: "Portfolio",
      stories: "Stories",
      about: "About",
      booking: "Booking",
      merch: "Merch",
      contact: "Contact",
      book: "Book",
      bookCta: "BOOK",
      bookNow: "Book now",
      scrollToTop: "Scroll to top",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    lang: { en: "EN", ua: "UA" },
    hero: {
      kicker: "International model",
      metaName: "Katrina Dragonfly",
      titleLines: ["Editorial body.", "Cinematic presence."],
      disciplines: "Fashion · Studio · Beauty · Art nude",
      location: "Based in Ukraine / available in Europe",
      bookShoot: "Book a shoot",
      viewPortfolio: "View portfolio",
      scroll: "Scroll",
    },
    intro: {
      label: "02 / In frame",
      headlineLine1: "Light, posture, intention.",
      headlineLine2: "Every frame reads like a quiet editorial.",
      body: "Katrina Dragonfly is an international model working across fashion, studio, beauty and art nude photography — available for selected creative and commercial projects across Ukraine and Europe.",
      caption: "Editorial still, on set",
    },
    portfolio: {
      label: "03 / Focus",
      title: "Portfolio",
      sliderAria: "Swipe through portfolio projects",
      subtitle:
        "Selected work from fashion, studio, beauty and art nude photography",
      modalLabel: "Selected work",
      modalBackdropClose: "Close portfolio",
      categories: {
        All: "All",
        Fashion: "Fashion",
        Studio: "Studio",
        Beauty: "Beauty",
        "Art Nude": "Art nude",
        Editorial: "Editorial",
      } satisfies Record<PortfolioCategoryKey, string>,
      items: {
        "1": {
          title: "Soft studio light",
          detail:
            "Controlled studio light sculpting silhouette and fabric — quiet, precise, editorial.",
          location: "Kyiv",
        },
        "2": {
          title: "Berlin editorial",
          detail: "Urban rhythm and tailoring in motion — a story told in negative space and contrast.",
          location: "Berlin",
        },
        "3": {
          title: "Beauty portrait",
          detail: "Macro clarity on skin and gaze — restrained palette, luminous finish.",
        },
        "4": {
          title: "Body study I",
          detail: "Form-first composition — classical lines with a contemporary editorial lens.",
        },
        "5": {
          title: "Fashion test",
          detail: "Sharp styling and attitude — a test board that reads like a finished campaign frame.",
        },
        "6": {
          title: "Morning series",
          detail: "Early window light and soft grain — intimate studio pacing and calm gesture.",
        },
        "7": {
          title: "Studio form",
          detail: "Monochrome emphasis on posture and negative space — minimal set, maximum tension.",
          location: "Kyiv",
        },
        "8": {
          title: "Kyiv fashion week",
          detail: "Runway energy distilled into stills — movement, tailoring, and crowd rhythm.",
          location: "Kyiv",
        },
        "9": {
          title: "Editorial figure",
          detail: "Long lens compression and sculptural shadow — a single frame with cinematic depth.",
        },
      },
    },
    stories: {
      label: "04 / Stories",
      title: "Visual stories",
      subtitle: "Short editorial sequences — still, precise, cinematic.",
      sliderAria: "Swipe through visual stories",
      viewStory: "View story",
      modalClose: "Close",
      modalBackdropClose: "Close story",
      modalLabel: "Selected story",
      collectionAria: "Story image gallery",
      items: {
        "1": {
          title: "Soft studio session",
          description:
            "A refined study of light and form in a controlled studio environment.",
          category: "Studio",
          tags: ["Studio", "Light", "Form"],
          year: "2024",
          location: "Kyiv studio",
        },
        "2": {
          title: "Berlin editorial mood",
          description: "Urban elegance captured in the streets and spaces of Berlin.",
          category: "Editorial",
          tags: ["Editorial", "Berlin", "Street"],
          year: "2024",
          location: "Berlin",
        },
        "3": {
          title: "Art nude series",
          description:
            "Timeless artistic expression through classical form and a modern eye.",
          category: "Art nude",
          tags: ["Art nude", "Study", "Classic"],
          year: "2023",
          location: "Studio",
        },
      },
    },
    about: {
      label: "05 / About",
      title: "Katrina Dragonfly",
      lede: "Model · editorial · studio",
      body: "Katrina Dragonfly is a model available for selected fashion, beauty, studio and art nude projects. Her work is built around expressive posing, soft cinematic presence and a refined visual language.",
      details: {
        location: { label: "Location", value: "Ukraine / Europe" },
        availability: { label: "Availability", value: "Selected bookings" },
        direction: {
          label: "Direction",
          value: "Fashion · Beauty · Studio · Art nude",
        },
        collaboration: {
          label: "Collaboration",
          value: "Photographers, studios, brands",
        },
      },
    },
    modelInfo: {
      label: "06 / Stats",
      title: "Profile & measurements",
      stats: {
        height: "Height",
        bust: "Bust",
        waist: "Waist",
        hips: "Hips",
        hair: "Hair",
        eyes: "Eyes",
        shoe: "Shoe",
        location: "Location",
        availability: "Availability",
      },
      statValues: {
        hairBrown: "Brown",
        eyesBrown: "Brown",
        availability: "International bookings",
        location: "Ukraine / Europe",
      },
    },
    booking: {
      label: "07 / Booking",
      title: "Selected projects",
      body: "Professional collaborations with photographers, studios and brands across fashion, beauty and creative photography.",
      instagram: "Book via Instagram",
      telegram: "Contact on Telegram",
      services: {
        "01": "Fashion shoots",
        "02": "Studio sessions",
        "03": "Beauty campaigns",
        "04": "Lingerie / boudoir",
        "05": "Art nude projects",
        "06": "Brand collaborations",
        "07": "Creative photo & video",
      },
    },
    merch: {
      label: "08 / Merch",
      title: "Merch",
      sliderAria: "Swipe through merch",
      subtitle: "Small personal drops inspired by Katrina's visual world",
      order: "Order via Telegram",
      modalBackdropClose: "Close product",
      availability: "Limited drops — ask on Telegram for availability.",
      items: {
        "1": {
          name: "Signature print",
          description: "Limited edition fine art print, signed and numbered.",
        },
        "2": {
          name: "Photo card set",
          description: "Collectible set of 12 premium photo cards.",
        },
        "3": {
          name: "Limited T-shirt",
          description: "Premium cotton tee with exclusive artwork.",
        },
        "4": {
          name: "Poster drop",
          description: "Large format poster from the latest editorial series.",
        },
      },
    },
    contact: {
      label: "09 / Contact",
      hubMeta: "Bookings & enquiries",
      headlineLine1: "Let’s build a frame",
      headlineLine2: "that lingers.",
      sub: "Bookings, collaborations and selected commercial work — direct lines below.",
      channels: {
        instagram: "Instagram",
        telegram: "Telegram",
        email: "Email",
        phone: "Phone",
      },
    },
    footer: {
      tagline: "International model portfolio",
      navigation: "Navigation",
      legal:
        "All visual content is artistic and editorial. Katrina Dragonfly is 18+. No explicit services are offered.",
    },
    mobileMenu: {
      meta1: "International model",
      meta2: "Ukraine / Europe",
    },
  },
  ua: {
    common: {
      swipeHint: "Гортайте далі",
    },
    ui: {
      close: "Закрити",
      next: "Далі",
      previous: "Назад",
      details: "Деталі",
    },
    nav: {
      portfolio: "Портфоліо",
      stories: "Історії",
      about: "Про мене",
      booking: "Бронювання",
      merch: "Мерч",
      contact: "Контакти",
      book: "Запис",
      bookCta: "ЗАПИС",
      bookNow: "Записатися",
      scrollToTop: "До початку сторінки",
      openMenu: "Відкрити меню",
      closeMenu: "Закрити меню",
    },
    lang: { en: "EN", ua: "UA" },
    hero: {
      kicker: "Міжнародна модель",
      metaName: "Katrina Dragonfly",
      titleLines: ["Тіло.", "Кадр.", "Присутність."],
      disciplines: "Фешн · Студія · Бʼюті · Арт-ню",
      location: "База в Україні / зйомки в Європі",
      bookShoot: "Забронювати зйомку",
      viewPortfolio: "Дивитися портфоліо",
      scroll: "Гортайте",
    },
    intro: {
      label: "02 / У кадрі",
      headlineLine1: "Світло, пластика, намір.",
      headlineLine2: "Кожен кадр читається як тиха редакція.",
      body: "Katrina Dragonfly — міжнародна модель у фешн, студійній, бʼюті та арт-ню зйомці. Доступна для відібраних креативних і комерційних проєктів в Україні та Європі.",
      caption: "Редакційний кадр, зйомка",
    },
    portfolio: {
      label: "03 / Фокус",
      title: "Портфоліо",
      sliderAria: "Гортайте проєкти портфоліо",
      subtitle:
        "Відібрані роботи з фешн, студійної, бʼюті та арт-ню фотографії",
      modalLabel: "Обрана робота",
      modalBackdropClose: "Закрити портфоліо",
      categories: {
        All: "Усі",
        Fashion: "Фешн",
        Studio: "Студія",
        Beauty: "Бʼюті",
        "Art Nude": "Арт-ню",
        Editorial: "Редакція",
      } satisfies Record<PortfolioCategoryKey, string>,
      items: {
        "1": {
          title: "Мʼяке студійне світло",
          detail:
            "Контрольоване студійне світло, що ліпить силует і тканину — тихо, точно, редакційно.",
          location: "Київ",
        },
        "2": {
          title: "Берлінська редакція",
          detail:
            "Міський ритм і крій у русі — історія через негативний простір і контраст.",
          location: "Берлін",
        },
        "3": {
          title: "Бʼюті-портрет",
          detail: "Макро-чіткість шкіри й погляду — стримана палітра, сяйний фініш.",
        },
        "4": {
          title: "Студія тіла I",
          detail: "Композиція, де на першому плані форма — класичні лінії в сучасному редакційному погляді.",
        },
        "5": {
          title: "Фешн-тест",
          detail: "Гострий стайлінг і характер — тестова серія, що читається як кадр кампанії.",
        },
        "6": {
          title: "Ранкова серія",
          detail: "Світло ранкового вікна й мʼякий зерновий настрій — інтимний темп студії.",
        },
        "7": {
          title: "Студійна форма",
          detail: "Монохром на пластиці й негативному просторі — мінімум декорацій, максимум напруги.",
          location: "Київ",
        },
        "8": {
          title: "Тиждень моди в Києві",
          detail: "Енергія подіуму в стоп-кадрі — рух, крій і ритм залу.",
          location: "Київ",
        },
        "9": {
          title: "Редакційна фігура",
          detail: "Компресія довгою оптикою й скульптурна тінь — один кадр із кінематографічною глибиною.",
        },
      },
    },
    stories: {
      label: "04 / Історії",
      title: "Візуальні історії",
      subtitle: "Короткі редакційні наративи — статично й кінематографічно.",
      sliderAria: "Гортайте візуальні історії",
      viewStory: "Дивитися історію",
      modalClose: "Закрити",
      modalBackdropClose: "Закрити історію",
      modalLabel: "Обрана історія",
      collectionAria: "Галерея кадрів історії",
      items: {
        "1": {
          title: "Мʼяка студійна сесія",
          description:
            "Витончене дослідження світла та форми в контрольованій студійній атмосфері.",
          category: "Студія",
          tags: ["Студія", "Світло", "Форма"],
          year: "2024",
          location: "Студія, Київ",
        },
        "2": {
          title: "Настрій редакції в Берліні",
          description: "Міська витонченість — на вулицях і в просторах Берліна.",
          category: "Редакція",
          tags: ["Редакція", "Берлін", "Місто"],
          year: "2024",
          location: "Берлін",
        },
        "3": {
          title: "Серія арт-ню",
          description:
            "Вічна художня витонченість через класичну форму та сучасний погляд.",
          category: "Арт-ню",
          tags: ["Арт-ню", "Студія", "Класика"],
          year: "2023",
          location: "Студія",
        },
      },
    },
    about: {
      label: "05 / Про мене",
      title: "Katrina Dragonfly",
      lede: "Модель · редакція · студія",
      body: "Katrina Dragonfly — модель для відібраних фешн, бʼюті, студійних та арт-ню проєктів. Робота побудована на виразній пластиці, мʼякій кінематографічній присутності та витонченій візуальній мові.",
      details: {
        location: { label: "Локація", value: "Україна / Європа" },
        availability: { label: "Доступність", value: "Обрані бронювання" },
        direction: {
          label: "Напрям",
          value: "Фешн · Бʼюті · Студія · Арт-ню",
        },
        collaboration: {
          label: "Співпраця",
          value: "Фотографи, студії, бренди",
        },
      },
    },
    modelInfo: {
      label: "06 / Параметри",
      title: "Профіль і мірки",
      stats: {
        height: "Зріст",
        bust: "Груди",
        waist: "Талія",
        hips: "Стегна",
        hair: "Волосся",
        eyes: "Очі",
        shoe: "Взуття",
        location: "Локація",
        availability: "Доступність",
      },
      statValues: {
        hairBrown: "Шатен",
        eyesBrown: "Карі",
        availability: "Міжнародні бронювання",
        location: "Україна / Європа",
      },
    },
    booking: {
      label: "07 / Бронювання",
      title: "Обрані проєкти",
      body: "Професійна співпраця з фотографами, студіями та брендами у фешн, бʼюті та креативній фотографії.",
      instagram: "Запис у Instagram",
      telegram: "Написати в Telegram",
      services: {
        "01": "Фешн-зйомки",
        "02": "Студійні сесії",
        "03": "Бʼюті-кампанії",
        "04": "Білизна / будуар",
        "05": "Проєкти арт-ню",
        "06": "Колаборації з брендами",
        "07": "Креативне фото та відео",
      },
    },
    merch: {
      label: "08 / Мерч",
      title: "Мерч",
      sliderAria: "Гортайте мерч",
      subtitle: "Невеликі дропи, натхненні візуальним світом Katrina",
      order: "Замовити в Telegram",
      modalBackdropClose: "Закрити товар",
      availability: "Лімітовані дропи — уточнюйте наявність у Telegram.",
      items: {
        "1": {
          name: "Авторський принт",
          description: "Лімітований арт-принт з підписом і нумерацією.",
        },
        "2": {
          name: "Набір фотокарток",
          description: "Колекційний набір із 12 преміальних карток.",
        },
        "3": {
          name: "Лімітований T-shirt",
          description: "Преміальна бавовна з ексклюзивним принтом.",
        },
        "4": {
          name: "Постер-дроп",
          description: "Широкоформатний постер з останньої редакційної серії.",
        },
      },
    },
    contact: {
      label: "09 / Контакти",
      hubMeta: "Букінг і запити",
      headlineLine1: "Знімемо кадр,",
      headlineLine2: "що залишиться з вами.",
      sub: "Букінг, колаборації й обрана комерція — напряму нижче.",
      channels: {
        instagram: "Instagram",
        telegram: "Telegram",
        email: "Email",
        phone: "Телефон",
      },
    },
    footer: {
      tagline: "Портфоліо міжнародної моделі",
      navigation: "Навігація",
      legal:
        "Увесь візуальний контент має художній та редакційний характер. Katrina Dragonfly — 18+. Жодні відверті послуги не пропонуються.",
    },
    mobileMenu: {
      meta1: "Міжнародна модель",
      meta2: "Україна / Європа",
    },
  },
} as const

export type TranslationTree = (typeof translations)[Locale]
